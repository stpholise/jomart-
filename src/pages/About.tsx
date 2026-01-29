import CarouselComponent from "../components/utils/CarouselComponent";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 pt-12 pb-8 px-4 container mx-auto">
        <h3 className="text-sm font-medium text-gray-500">ABOUT US</h3>
        <div className="flex flex-col gap-3 ">
          <div className="">
            <h4 className="text-logo-blue text-xl font-medium md:text-3xl mb-2">
              Who We Are
            </h4>
            <p className="text-gray-800 text-sm font-normal md:text-lg md:font-medium">
              Jomart Engineering Services Ltd is a premier provider of
              integrated construction solutions, combining decades of technical
              expertise with forward-thinking innovation. We transform ambitious
              visions into reality through precision engineering, collaborative
              partnership, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="">
            <h4 className="text-logo-blue text-xl font-medium md:text-2xl mb-2">
              Our Story
            </h4>
            <p className="text-gray-800 text-sm font-normal md:text-lg md:font-medium">
              Founded on principles of quality and reliability, we've built our
              reputation project by project, growing from a dedicated team of
              specialists into a comprehensive engineering partner. Our journey
              reflects our core belief: great engineering creates lasting
              value—for clients, communities, and generations to come.
            </p>
            <div className="flex flex-col gap-2.5 container mx-auto my-8 items-center">
              <h3 className="text-xl text-logo-blue font-medium my-2">
                {" "}
                Our Journy
              </h3>
              {journy.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <p className="text-white bg-logo-blue font-medium px-2 py-1 text-[10px] w-8 flex items-center justify-center rounded-md">
                    {" "}
                    {item.year}
                  </p>
                  <div className="round bg-logo-blue rounded-full h-3 w-3 flex items-center justify-center"></div>
                  <p className="">{item.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full bg-logo-blue py-8 gap-4">
        <div className=" container mx-auto px-2 py-2 rounded-lg sm:py-4">
          <h5 className=" text-lg text-left font-medium mb-1 sm:mb-6 text-logo-light ">
            Our Values
          </h5>
          <div className="  text-gray-100">
            <CarouselComponent items={feedbacksItems} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row container mx-auto gap-4">
          <div className="px-2 py-2 rounded-lg bg-white">
            <h5 className="text-lg font-medium text-left text-logo-blue mb-1">
              {" "}
              Our Mission
            </h5>
            <p className="text-sm text-black">
              To deliver exceptional engineering and construction services that
              not only meet but exceed client expectations—through innovation,
              skilled workmanship, and an uncompromising commitment to safety
              and sustainability.
            </p>
          </div>
          <div className="px-2 py-2 rounded-lg bg-white h-fit">
            <h5 className="text-lg font-medium text-left text-logo-blue mb-1">
              {" "}
              Our Goal
            </h5>
            <p className="text-sm text-black">
              We believe in a proactive approach to every aspect of our
              business, with special emphasis on quality, safety, and on-time
              delivery.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4">Be a part of our team</div> */}

      {/* <div className="bg-logo-blue  mx-auto rounded-3xl my-8 py-8">
        <div className="container mx-auto  my-4">
          <h3>Our Awards</h3>
          <div className="">
            <div className="">
              <img src="/images/ai_passport_1.jpeg" alt="" className="w-12" />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h3 className=" text-center text-2xl font-medium  text-logo-blue">
            {" "}
            Our values
          </h3>
          <div className="  text-gray-200">
            <CarouselComponent items={feedbacksItems} />
          </div>
        </div>
      </div> */}

      <div className="container mx-auto my-10">
        {/* <h3 className="text-lg text-center mb-3 font-medium text-logo-blue uppercase ">
          Team
        </h3> */}
        <h4 className="text-center text-lg font-medium  text-logo-blue my-4">
          Meet Our Leaders
        </h4>
        <div className="py-4 px-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((item, index) => (
            <div className="flex flex-col" key={index}>
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
      
    </div>
  );
};

const feedbacksItems = [
  {
    name: "Excellence in Execution",
    message:
      "We believe in doing things right—the first time, every time. Precision engineering, attention to detail, and adherence to the highest standards define our work.",
  },
  {
    name: "Safety Without Compromise",
    message:
      "The wellbeing of our team, clients, and communities comes first. We maintain rigorous safety protocols and cultivate a culture where safety is everyone's responsibility.",
  },
  {
    name: " Integrity as Standard",
    message:
      "Honesty, transparency, and ethical conduct guide every decision. We build trust through accountability and deliver on our promises without exception.",
  },
  {
    name: "Innovation with Purpose",
    message:
      "We embrace smart technologies and creative solutions, but always with practical application. Our innovation solves real challenges and adds tangible value.",
  },
  {
    name: "Client Partnership",
    message:
      "Your success is our success. We listen deeply, communicate clearly, and collaborate closely to ensure your vision becomes reality.",
  },
  {
    name: " Sustainable Responsibility",
    message:
      "We engineer for today while planning for tomorrow—minimizing environmental impact and maximizing long-term sustainability in every project.",
  },
  {
    name: "Team Excellence",
    message:
      "Our people are our greatest asset. We foster continuous learning, respect diverse perspectives, and empower every team member to excel.",
  },
];

const journy = [
  {
    year: 2010,
    achievement: "company founded with a mission to innovate",
  },
  {
    year: 2022,
    achievement: "company founded with a mission to innovate",
  },
  {
    year: 2023,
    achievement: "company founded with a mission to innovate",
  },
  {
    year: 2024,
    achievement: "company founded with a mission to innovate",
  },
  {
    year: 2025,
    achievement: "company founded with a mission to innovate",
  },
];

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

export default About;
