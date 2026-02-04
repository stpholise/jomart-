import clsx from "clsx";
import ReadyToStart from "../components/cards/ReadyToStart";
const Projects = () => {
  return (
    <div className="py-16">
      <div className="">
        <h2 className="text-center font-semibold text-3xl my-4 text-primary">
          {" "}
          Our Projects{" "}
        </h2>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-3 sm:gap-6 my-8 ">
        {projects.map((item, index) => (
          <div
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-duration="600"
            data-aos-once="true"
            className={clsx(
              "flex gap-8 border border-gray-300 shadow-xl rounded-lg flex-col overflow-hidden",
              index % 2 == 0 ? "sm:flex-row-reverse" : "sm:flex-row",
            )}
          >
            <div className="w-99 h-60 overflow-hidden sm:h-full  ">
              <img src={item.image} alt="project-image" loading="lazy" />
            </div>
            <div className="flex flex-col px-4 py-6 gap-4 sm:gap-4 ">
              <h4 className="text-lg font-semibold sm:mt-2">{item.title}</h4>
              <p className="">{item.text}</p>
              <div className="mt-auto flex flex-col w-full gap-3  justify-between flex-start">
                <div className=" flex gap-4  w-full px-2 overflow-hidden  ">
                  <div className="whitespace-nowrap ">
                    {" "}
                    <p className="mt-auto  text-xs font-medium  ">
                      {item.start} - {item.end}
                    </p>
                  </div>
                </div>{" "}
                <button className="mt-auto cursor-pointer bg-primary  rounded-lg max-w-70   w-full text-sm font-medium text-white py-1 px-4">
                  {" "}
                  See More{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReadyToStart />
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: "1",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",
    start: "may 2024",
    end: "april 2025",
  },
  {
    id: "2",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",

    start: "may 2024",
    end: "april 2025",
  },
  {
    id: "3",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",

    start: "may 2024",
    end: "april 2025",
  },
  {
    id: "4",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",

    start: "may 2024",
    end: "april 2025",
  },
];
