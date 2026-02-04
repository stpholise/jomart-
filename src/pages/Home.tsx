import clsx from "clsx";
import Feedbacks from "../components/utils/Feedbacks";
import Hero from "../components/layout/Hero";
import RequestForm from "../components/layout/RequestForm";
import { Link } from "react-router";
import { useState } from "react";

const Home = () => {
  const [openRequestForm, setOpenRequestForm] = useState(false);
  return (
    <div className="">
      <Hero />
      {openRequestForm && (
        <RequestForm setOpenRequestForm={setOpenRequestForm} />
      )}
      <div className="flex flex-col gap-3 py-16 px-4 container mx-auto ">
        <h3 className="text-sm font-medium text-gray-500">ABOUT US</h3>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="">
            <h4 className="text-black text-2xl font-semibold md:text-4xl mb-2">
              We are committed to providing the best
            </h4>
            <p className="text-gray-700 text-sm font-normal md:text-base md:font-medium">
              Jomart Engineering Services Ltd is committed to providing the best
              in integrated construction solutions. For years, we have delivered
              high-quality projects built on a foundation of consistency,
              reliability, and excellence. Our reputation today is the result of
              our unwavering dedication to quality, speed, efficiency, and total
              client satisfaction.
            </p>
          </div>
          <div className="flex flex-col  w-full md:w-7/2 gap-4">
            <div className="px-4 pb-4 pt-8 rounded-lg bg-logo-light">
              <h5 className=" text-lg text-left font-medium mb-3 text-logo-blue">
                Our Goals
              </h5>
              <p className="text-sm text-gray-100">
                We believe in a proactive approach to every aspect of our
                business, with special emphasis on quality, safety, and on-time
                delivery.
              </p>
            </div>
            <div className="px-4 pb-4 pt-8 rounded-lg bg-logo-light">
              <h5 className="text-lg font-medium text-left text-logo-blue mb-3">
                {" "}
                Our Mission
              </h5>
              <p className="text-sm text-gray-100">
                To deliver exceptional engineering and construction services
                that not only meet but exceed client expectations—through
                innovation, skilled workmanship, and an uncompromising
                commitment to safety and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4 py-16 ">
        <h3 className="text-lg md:text-2xl text-logo-blue text-center my-4 font-medium  capitalize ">
          services
        </h3>
        <div className=" bg-[url('/images/92723fd12ca70c93f3a459325056b1e3.png')] bg-cover bg-center rounded-xl px-4 py-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              className={clsx(
                `h-full border border-gray-200 px-3 py-3 bg-white shadow cursor-pointer overflow-hidden rounded-lg flex flex-col gap-3   bg-cover bg-center`,
              )}
            >
              <p className="text-xl text-black font-medium ">{item.title}</p>
              <div className="text-sm px-4">
                {item.more.map((text, index) => (
                  <div
                    className="text-xs font-medium mb-1 flex gap-3 items-center"
                    key={index}
                  >
                    <div className="rounded-full w-2 h-2 bg-logo-blue"></div>
                    <p className="">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
          <button
            onClick={() => setOpenRequestForm(true)}
            className=" bg-logo-blue cursor-pointer w-fit mx-auto py-2 px-4 font-medium text-white  hover:border-logo-light ease-in-out border shadow border-logo-blue rounded-lg my-2  "
          >
            Request a Quote
          </button>
      </div>
      <div className="flex flex-col gap-3 px-4 py-16">
        <h3 className="text-lg md:text-2xl text-center my-4 text-logo-blue font-medium  capitalize ">
          Projects
        </h3>
        <div className=" container px-4 py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((item, index) => (
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
                  src={`/images/${item.image}`}
                  alt=""
                  className="h-full object-cover w-full "
                />
              </div>
              <button className="bg-primary cursor-pointer text-white font-medium text-sm py-2 px-4 rounded-lg text-center ">
                {" "}
                See Project
              </button>
            </div>
          ))}
        </div>
        <Link
          to={"/projects"}
          className=" bg-logo-blue cursor-pointer w-fit mx-auto py-2 px-4 font-medium text-white  hover:border-logo-light ease-in-out border shadow border-logo-blue rounded-lg my-2  "
        >
          See All Projects
        </Link>
      </div>
      {/* <OurTeams /> */}

      <Feedbacks items={feedbacksItems} />
    </div>
  );
};

const feedbacksItems = [
  {
    message:
      "“Jomart Engineering brought our dream home to life! From planning to finish, their team was professional, communicative, and detail-oriented. The quality of workmanship exceeded our expectations. We couldn’t be happier!”",
    name: "Mrs. Aisha Bello",
    occupation: "Trader",
    location: "Port Harcourt",
    image: "",
  },
  {
    message:
      "“Working with Jomart on our office building project was a seamless experience. They managed the schedule perfectly and delivered on time without compromising quality. Their expertise made a big difference.”",
    name: "Mr. Chinedu Okeke, ",
    occupation: "CEO, Okeke Entaprise",
    location: "Warri, Delta State",
    image: "/images/ai_passport_1.jpeg",
  },
  {
    message:
      "“Jomart Engineering handled our renovation with impressive skill and care. They respected our budget and communicated clearly throughout. The final result transformed our space beautifully.”",
    name: "Mrs. Funke Adeyemi",
    occupation: "Teacher",
    location: "Lagos",
    image: "",
  },
  {
    message:
      "“We are extremely satisfied with Jomart’s workmanship. Their site team was professional and respectful, and the project was completed ahead of schedule. Highly recommended!”",
    name: "Mr. Michael Udo",
    occupation: "CEO, Udo Construction Supplies",
    location: "Delta State",
    image: "",
  },
  {
    message:
      ' “Jomart Engineering provided excellent project management and attention to detail on our commercial project. Their engineers and workers were reliable and skilled. A trustworthy construction partner!”, name: "dummy name"',
    name: "Mrs. Grace Nwosu ",
    occupaton: "Owner of GreenLeaf Supermarket",
    location: "Delta State",
    image: "",
  },
];

const services: { title: string; image: string; more: string[] }[] = [
  {
    title: "General Building Construction",
    image: "achitectural_design.jpeg",
    more: [
      "Residential buildings (houses, apartments)",
      "Commercial buildings (offices, shops, malls)",
      "Industrial structures (warehouses, factories)",
    ],
  },
  {
    title: "Project Planning & Management",
    image: "achitectural_design.jpeg",
    more: [
      "Scheduling and timeline planning",
      "Resource and budget management",
      "Coordination of contractors and subcontractors",
    ],
  },
  {
    title: "Design & Architectural Services",
    image: "achitectural_design.jpeg",
    more: [
      "Concept and architectural design",
      "Structural design",
      "Interior layout planning",
    ],
  },
  {
    title: "Civil & Structural Works",
    image: "achitectural_design.jpeg",
    more: [
      "Earthworks, foundations, slab work",
      "Column, beam, roof construction",
      "Reinforcement and concrete works",
    ],
  },
  {
    title: "Renovation & Remodeling",
    image: "achitectural_design.jpeg",
    more: [
      "Upgrading existing buildings",
      "Structural modifications",
      "Modernizing interiors",
    ],
  },
  {
    title: "Electrical & Mechanical Installations",
    image: "achitectural_design.jpeg",
    more: [
      "Wiring, power distribution",
      "HVAC (heating, ventilation, air conditioning)",
      "Plumbing and drainage systems",
    ],
  },
];

export default Home;
