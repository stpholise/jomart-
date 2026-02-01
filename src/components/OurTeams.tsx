 
const OurTeams = () => {
  return (
    <div className="container mx-auto my-10">
      <h4 className="text-center text-lg font-medium  text-logo-blue my-4">
        Meet Our Leaders
      </h4>
      <div className="py-4 px-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map((item, index) => (
          <div className="flex flex-col" data-aos="flip-right" data-aos-duration="600" key={index}>
            <div className=" ">
              <img
                src={`${item.image}`}
                alt="image"
                className="w-full object-cover md:object-top  first:object-cover h-80 xs:h-40 md:h-90 overflow-hidden object-center"
              />
            </div>
            <h4 className="text-base capitalize font-semibold text-center">
              {item.name}
            </h4>
            <p className="text-gray-600 font-medium text-center">
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
const team = [
  {
    image: "/images/engr_joe.png",
    name: "Engr. Nwanze Tobechukwu Joseph",
    position: "Chairman/Founder",
  },
  {
    image: "/images/ObuezieOnyekaJeremiah.jpeg",
    name: "OBUEZIE ONYEKA JEREMIAH",
    position: "Project Manager",
  },
  {
    image: "/images/MrsUgbomahEgoamaka.jpeg",
    name: "Mrs Ugbomah Egoamaka",
    position: "Chief Operation Manager",
  },
];

export default OurTeams;
