import { useParams } from "react-router";
import { useProjectData } from "../hooks/useProjects";
import { TrippleSpiner } from "../components/utils/Loading";
import Carousel from "react-multi-carousel";
import PortableTextRender from "../lib/PortableTextRender";
import ReadyToStart from "../components/cards/ReadyToStart";
import ErrorCard from "../components/cards/ErrorCard";
import { useEffect } from "react";
import { setSeo } from "../lib/seo";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
  },
};
const ProjectDetail = () => {
  const { slug } = useParams();

  const { projectData, loading, error, refetch } = useProjectData(slug);

  useEffect(() => {
    if(!projectData) return

    setSeo(
      `${projectData.name} | Jomart Engineering`,
         
        `Engineering project executed by Jomart Engineering in ${projectData.location}, Nigeria.`
    )
  },[projectData])

  return (
    <div className="min-h-100 ">
      <div className="relative min-h-80 ">
        {loading ? (
          <TrippleSpiner />
        ) : error ? (
          <div className="py-8 px-4">
            <ErrorCard refetch={refetch} />
          </div>
        ) : (
          projectData && (
            <div className=" flex flex-col gap-12 md:gap-16 mb-8">
              <div className="h-50 sm:h-100 overflow-hidden">
                <img
                  src={projectData.gallery[0].asset.url}
                  alt="Modern architectural building design by Jomart Engineering"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="container mx-auto flex flex-col md:flex-row  px-4 w-full  lg:gap-12 sm:gap-14 gap-8">
                <div className="">
                  <h1 className="text-3xl font-bold capitalize pt-4  text-secondary">
                    {projectData.name}
                  </h1>
                  <p className=" text-secondary font-medium py-2">
                    {projectData.location}
                  </p>
                  <PortableTextRender value={projectData.description} />
                </div>
                <div className=" md:min-w-86 sm:max-w-86 h-fit  border border-secondary rounded-lg px-4 py-6  shadow">
                  <h4 className="text-xl text-secondary font-semibold py-4 mt-6">
                    Vision
                  </h4>
                  <p className="text-sm text-gray-800">{projectData.vision}</p>
                </div>
              </div>

              {projectData.gallery && (
                <div className="container mx-auto min-h-100  max-h-100  py-4 md:bg-secondary rounded-lg sm:px-4">
                  <Carousel
                    swipeable
                    arrows
                    className="w-full h-full overflow-hidden max-h-100 rounded-lg"
                    autoPlay
                    responsive={responsive}
                    autoPlaySpeed={3500}
                    infinite={true}
                    transitionDuration={600}
                  >
                    {projectData.gallery.map((item) => (
                      <div className="h-full w-full" key={item.asset._id}>
                        <img
                          src={item.asset.url}
                          alt="Modern architectural building design by Jomart Engineering"
                          className="  w-full h-90 max-h-92  object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
              {projectData.videos && (
                <div className="container mx-auto px-4   h-60 ">
                  <Carousel
                    swipeable
                    arrows
                    className="w-full"
                    responsive={responsive}
                    infinite={true}
                  >
                    {projectData.videos &&
                      projectData.videos.map((item) => {
                        if (!item.file?.asset?.url) return;
                        return (
                          <div className="">
                            <video
                              src={item.file.asset.url}
                              loop
                              muted
                              autoPlay
                              preload="metadata"
                              className="w-99 h-60 max-h-52 rounded-lg object-cover "
                            />
                          </div>
                        );
                      })}
                  </Carousel>
                </div>
              )}
              <div className="container mx-auto px-4">
                <ReadyToStart />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
