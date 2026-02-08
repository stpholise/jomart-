import clsx from "clsx";
import ReadyToStart from "../components/cards/ReadyToStart";
import { TrippleSpiner } from "../components/utils/Loading";
import { useProjects } from "../hooks/useProjects";
// import type { ProjectType } from "../hooks/useProjects";
import { useNavigate } from "react-router";
const Projects = () => {

  const { projects, loading, error,  } = useProjects()
  const navigate = useNavigate()
  return (
    <div className="py-16">
      <div className="">
        <h2 className="text-center font-semibold text-3xl my-4 text-primary">
          {" "}
          Our Projects{" "}
        </h2>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-3 sm:gap-12 my-12 min-h-80 relative">
        {loading ? <TrippleSpiner />: projects ?  projects.map((item, index) => (
          <div
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-duration="600"
            data-aos-once="true"
            className={clsx(
              "flex gap-8 border h-fit border-gray-300 shadow-xl rounded-lg flex-col overflow-hidden bg-gray-50",
              index % 2 == 0 ? "sm:flex-row-reverse" : "sm:flex-row",
            )}
          >
            <div className="w-99 h-60 overflow-hidden sm:min-h-70 sm:min-w-80 ">
              <img src={item.gallery[0].asset.url} alt="project-image" loading="lazy" className="w-full h-full sm:min-h-full sm:min-w-full  object-cover" />
            </div>
            <div className="flex flex-col px-4 py-6 gap-4 sm:gap-4 ">
              <h4 className="text-xl font-semibold sm:mt-2 text-secondary">{item.name}</h4>
              <p className=" text-sm">{item.vision}</p>
              <div className="mt-auto flex flex-col w-full gap-3  justify-between flex-start">
                
                <button onClick={() => navigate(`/projects/${item.slug.current}`) } className="mt-auto cursor-pointer bg-secondary  rounded-lg max-w-70   w-fit text-sm font-medium text-white py-2 px-10">
                  {" "}
                  See More{" "}
                </button>
              </div>
            </div>
          </div>
        ))
      : <div className="">{error}</div>
      }
      </div>
      <ReadyToStart />
    </div>
  );
};

export default Projects;
