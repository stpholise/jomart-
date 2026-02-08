import { useParams } from "react-router";
import { useProjectData } from "../hooks/useProjects";
import { TrippleSpiner } from "../components/utils/Loading";
import Carousel from "react-multi-carousel";
import PortableTextRender from "../lib/PortableTextRender";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
  },
};
const ProjectDetail = () => {
  const { slug } = useParams();

  const { projectData, loading, error } = useProjectData(slug);

  return (
    <div className="min-h-100 ">
      <div className="container mx-auto relative min-h-80 ">
        {loading ? (
          <TrippleSpiner />
        ) : error ? (
          <div className="h-60"></div>
        ) : projectData ? (
          <div className="">
            <div className="h-50 sm:h-100 overflow-hidden">
              <img src={projectData.gallery[0].asset.url} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="flex flex-col sm:flex-row  px-4 w-full py-12 md:py-16 lg:gap-10 sm:gap-9 gap-8">
              <div className="">
                <h2 className="text-3xl font-bold capitalize pt-4  text-secondary">
                  {projectData.name}
                </h2>
                <p className=" text-secondary font-medium py-2">{projectData.location}</p>
                <PortableTextRender value={projectData.description} />
              </div>
              <div className=" sm:min-w-86 sm:max-w-86 h-fit  border border-secondary rounded-lg px-4 py-6  shadow">
                <h4 className="text-xl text-secondary font-semibold py-4 mt-6">
                  Vision
                </h4>
                <p className="text-sm text-gray-800">{projectData.vision}</p>
              </div>
            </div>

            <div className="container mx-auto min-h-60 py-10 mb-5">
              <Carousel
                swipeable
                arrows
                className="w-full"
                autoPlay
                responsive={responsive}
                autoPlaySpeed={3000}
                infinite={true}
                transitionDuration={600}
              >
                {projectData.gallery.map((item) => (
                  <div className="" key={item.asset._id}>
                    <img src={item.asset.url} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          "project not found"
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
