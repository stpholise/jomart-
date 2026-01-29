import clsx from "clsx";
const Projects = () => {
  return (
    <div className="">
      {/* <div className="container overflow-hidden mx-auto">
        <div className="animate-marquee flex gap-4   ">
          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>
          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>
          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>
          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>

          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>

          <div className="whitespace-nowrap"> Lorem, ipsum dolor.</div>
        </div>
      </div> */}
      projects
      <div className="container mx-auto px-4 flex flex-col gap-3 sm:gap-6 my-8 ">
        {projects.map((item, index) => (
          <div
            className={clsx(
              "flex gap-8 border border-gray-300 shadow-xl rounded-lg flex-col overflow-hidden",
              index % 2 == 0 ? "sm:flex-row-reverse" : "sm:flex-row",
            )}
          >
            <div className="w-99 h-60 overflow-hidden sm:h-full  ">
              <img src={item.image} alt="" />
            </div>
            <div className="flex flex-col px-4 py-6 gap-4 sm:gap-6 ">
              <h4 className="text-lg font-semibold sm:mt-2">{item.title}</h4>
              <p className="">{item.text}</p>
              <div className="mt-auto flex flex-col w-full gap-3  justify-between flex-start">
                <p className="mt-auto  text-xs font-medium text-logo-blue ">form:may 2023 to march 2024</p>
                <button className="mt-auto bg-primary  rounded-lg max-w-70   w-full text-sm font-medium text-white py-1 px-4">
                  {" "}
                  See More{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
  },
  {
    id: "2",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",
  },
  {
    id: "3",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",
  },
  {
    id: "4",
    slug: "project-title",
    title: "project title",
    image: "/images/achitectural_design.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati non debitis tempore rem deleniti nisi illum optio corrupti quasi.",
  },
];
