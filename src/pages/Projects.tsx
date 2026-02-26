import clsx from "clsx";
import ReadyToStart from "../components/cards/ReadyToStart";
import { TrippleSpiner } from "../components/utils/Loading";
import { useProjects } from "../hooks/useProjects";
import {  Link } from "react-router";
import ErrorCard from "../components/cards/ErrorCard";
import { useEffect } from "react";
import { setSeo } from "../lib/seo";

const Projects = () => {
  const { projects, loading, error, refetch } = useProjects();
 
  useEffect(() => {
    setSeo(
      "Projects | Jomart Engineering",
      "Engineering and construction projects executed by Jomart Engineering in Nigeria.",
    );
  }, []);

  return (
    <div className="py-16">
      <div className="">
        <h1 className="font-bold text-secondary uppercase text-2xl mx-auto text-center mb-6 ">
          Our Projects
        </h1>
        <p className="font-medium w-full sm:w-80 text-center mx-auto ">
          Engineering and construction projects executed by Jomart Engineering
          in Nigeria.
        </p>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-7 sm:gap-12 my-12 min-h-80 relative">
        {loading ? (
          <TrippleSpiner />
        ) : error ? (
          <div className="py-8 px-4">
            <ErrorCard refetch={refetch} />
          </div>
        ) : (
          projects &&
          projects.map((item, index) => (
            <Link
                to={`/projects/${item.slug.current}`}
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
              data-aos-duration="600"
              data-aos-once="true"
              className={clsx(
                "flex relative gap-6 sm:gap-8 border h-120 max-h-120 border-gray-300 shadow-xl rounded-lg flex-col overflow-hidden bg-gray-50",
                index % 2 == 0 ? "sm:flex-row-reverse" : "sm:flex-row",
              )}
            >
              
              <div className="bg-black/10 w-full h-full">
                <img
                  src={item.coverImage}
                  alt="Modern architectural building design by Jomart Engineering"
                  loading="lazy"
                  className="w-full min-h-70 h-full sm:min-h-full sm:min-w-full  object-cover"
                />

              </div>
              <div className="flex flex-col px-4 py-6 gap-4 absolute bottom-0  max-w-sm bg-white/80 sm:gap-4 ">
                <Link
                  to={`/projects/${item.slug.current}`}
                  className="text-lg  font-semibold sm:mt-2 text-secondary"
                >
                  {item.name}
                </Link>
                <p className=" text-xs">{item.vision}</p>
                <div className="mt-auto flex flex-col w-full gap-3  justify-between flex-start">
                
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <ReadyToStart />
    </div>
  );
};

export default Projects;
