import clsx from 'clsx'

interface ProjectCardProps {
    index: number;
    image: string;
    title: string;
    description: string,
    id:string;
    slug:string;
}

const ProjectCard = ({index,image, title, description, slug, id, }: ProjectCardProps) => {
  return (
    <div
      data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
      data-aos-duration="600"
      data-aos-once="true"
      key={index}
      className={clsx(
        ` border border-gray-200 px-3 py-3 bg-white shadow cursor-pointer overflow-hidden rounded-lg flex flex-col gap-3  h-fit bg-cover bg-center`,
      )}
    >
      <div className="w-full  h-40 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
        <img
          src={`/images/${image}`}
          alt=""
          className="h-full object-cover w-full "
        />
      </div>
      <div className="">
        <p className="">{title}</p>
        <p className="">{description}</p>
        <p className="">{slug}</p>
        <p className="">{id}</p>
      </div>
      <button className="bg-primary cursor-pointer text-white font-medium text-sm py-2 px-4 rounded-lg text-center ">
        {" "}
        See Project
      </button>
    </div>
  );
};

export default ProjectCard;
