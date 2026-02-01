import CarouselComponent from "../components/utils/CarouselComponent";
import ReadyToStart from "../components/cards/ReadyToStart";
import OurTeams from "../components/OurTeams";

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
                Our Journey
              </h3>
              <div className="flex flex-col gap-4">
                {journey.map((item, index) => (
                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="flex sm:items-center gap-2 sm:gap-3 mb-1 sm:flex-row flex-col"
                    key={index}
                  >
                    <p className="text-white bg-logo-blue font-medium px-4 border w-18 sm:px-2 py-1 text-3 sm:text-[10px] sm:w-8 flex items-center justify-center rounded-md">
                      {" "}
                      {item.year}
                    </p>
                    <div className="round bg-logo-blue rounded-full h-3 hidden  sm:w-3 sm:flex items-center justify-center"></div>
                    <p className="">{item.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full bg-logo-blue py-8  gap-4">
        <div className=" container mx-auto px-2 py-2 rounded-lg sm:py-4">
          <h5 className=" text-lg text-left font-medium mb-1 sm:mb-6 text-logo-light ">
            Our Values
          </h5>
          <div className="  text-gray-100">
            <CarouselComponent items={feedbacksItems} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row container mx-auto gap-4 px-2">
          <div className="px-4 py-4 rounded-lg bg-white">
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
          <div className="px-4 py-4 rounded-lg bg-white h-fit">
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

      <OurTeams />
      <ReadyToStart />
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

const journey: {
  year: number | string;
  achievement: string;
  milestone?: string;
  award?: string;
  certification?: string;
  expansion?: string;
  innovation?: string;
  recognition?: string;
  vision?: string;
}[] = [
  {
    year: 2012,
    achievement:
      "Jomart Engineering Services Ltd founded with 5 staff members, specializing in residential construction projects",
  },
  {
    year: 2014,
    achievement:
      "Successfully completed first major commercial project - 5-story office complex in Lagos",
    milestone: "Expanded team to 25 professionals",
  },
  {
    year: 2016,
    achievement:
      "Achieved ISO 9001:2015 Quality Management System certification",
    milestone: "Ventured into industrial construction sector",
  },
  {
    year: 2018,
    achievement:
      "Completed landmark project: 15,000 sqm manufacturing facility for leading FMCG company",
    award: "Construction Excellence Award - Nigerian Building Association",
  },
  {
    year: 2020,
    achievement:
      "Launched sustainable engineering division focusing on green building technologies",
    milestone: "Opened regional office in Abuja",
  },
  {
    year: 2022,
    achievement:
      "Secured largest contract to date: $15M infrastructure development project",
    certification: "Became COREN-certified engineering firm",
  },
  {
    year: 2023,
    achievement:
      "Implemented advanced BIM (Building Information Modeling) technology across all projects",
    expansion:
      "International partnership established with European engineering consortium",
  },
  {
    year: 2024,
    achievement:
      "Achieved zero-accident milestone for 500 consecutive working days",
    innovation:
      "Pioneered use of recycled materials in 80% of construction projects",
  },
  {
    year: 2025,
    achievement:
      "Launched Jomart Engineering Academy for workforce development and industry training",
    recognition:
      "Named among 'Top 50 Fastest Growing Engineering Firms in Nigeria' by Business Day",
  },
];

export default About;
