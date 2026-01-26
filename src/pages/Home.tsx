import clsx from "clsx";
import Feedbacks from "../components/utils/Feedbacks";
import Footer from "../components/layout/Footer";


const Home = () => {
  return (
    <div className="">
      <div className="hero bg-[url('/images/hero1.jpeg')] relative  w-full h-100  bg-cover bg-center   ">
        <div className=" absolute inset-0 bg-black/30 flex flex-col items-center justify-center h-full px-8 py-4 gap-12">
          <h2 className="text-3xl text-white text-center font-medium ">
            Boost you company’s productivity
          </h2>
          <p className="text-sm text-gray-200 text-center">
            Jomart engineering services limited is a 21’st sentuar engieering
            company founded in 2012y{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-12 pb-8 px-4 container mx-auto">
        <h3 className="text-sm font-medium text-gray-500">ABOUT US</h3>
        <h4 className="text-black text-xl font-medium">
          We are committed to providing the best
        </h4>
        <p className="text-gray-800 text-sm font-normal">
          Jomart Engineering Services Ltd is committed to providing the best in
          integrated construction solutions. For years, we have delivered
          high-quality projects built on a foundation of consistency,
          reliability, and excellence. Our reputation today is the result of our
          unwavering dedication to quality, speed, efficiency, and total client
          satisfaction.
        </p>
        <h5 className=" text-lg text-center font-medium">Our Goals</h5>
        <p className="text-sm text-gray-800">
          We believe in a proactive approach to every aspect of our business,
          with special emphasis on quality, safety, and on-time delivery.
        </p>
        <h5 className="text-lg font-medium text-center"> Our Mission</h5>
        <p className="text-sm text-gray-800">
          To deliver exceptional engineering and construction services that not
          only meet but exceed client expectations—through innovation, skilled
          workmanship, and an uncompromising commitment to safety and
          sustainability.
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4">
        <h3 className="text-lg text-center mb-3 font-medium text-black uppercase ">
          services
        </h3>
        <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <div
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
              <p className="text-xl text-black font-medium ">{item.title}</p>
              <p className="text-sm">{item.message}</p>
              <button className="bg-primary text-white font-medium text-sm py-2 px-4 rounded-lg text-center ">
                {" "}
                Request Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="text-lg text-center mb-3 font-medium text-logo-blue uppercase ">
          Team
        </h3>
        <div className="py-4 px-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div className=" ">
                <img
                  src={`${item.image}`}
                  alt="image"
                  className="w-full object-cover first:object-cover h-80 xs:h-40 md:h-50 overflow-hidden object-center"
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
      <div className="">
        <h3 className="text-lg text-center mb-3 font-medium text-black uppercase ">
          Feedbacks
        </h3>

        <div className=" min-h-12 h-fit py-4 w-full px-4 flex items-center">
          <Feedbacks items={feedbacksItems} />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

const feedbacksItems = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
    name: "dummy name",
  },
];

const services = [
  {
    title: "Architectural Design",
    image: "achitectural_design.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
  },
  {
    title: "Architectural Design",
    image: "achitectural_design.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
  },
  {
    title: "Architectural Design",
    image: "achitectural_design.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
  },
  {
    title: "Architectural Design",
    image: "achitectural_design.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur nam dolor eos deserunt voluptas quidem ab autem nostrum quae?",
  },
];

const team = [
  {
    image: "/images/EngrNwanzeTobechukwuJoseph1.jpeg",
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

export default Home;
