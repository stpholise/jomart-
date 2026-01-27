import CarouselComponent from "../components/utils/CarouselComponent";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 pt-12 pb-8 px-4 container mx-auto">
        <h3 className="text-sm font-medium text-gray-500">ABOUT US</h3>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="">
            <h4 className="text-black text-xl font-medium md:text-3xl mb-2">
              We are committed to providing the best
            </h4>
            <p className="text-gray-800 text-sm font-normal md:text-lg md:font-medium">
              Jomart Engineering Services Ltd is committed to providing the best
              in integrated construction solutions. For years, we have delivered
              high-quality projects built on a foundation of consistency,
              reliability, and excellence. Our reputation today is the result of
              our unwavering dedication to quality, speed, efficiency, and total
              client satisfaction.
            </p>
          </div>
          <div className="flex flex-col  w-full md:w-18/12 gap-4">
            <div className="px-2 py-2 rounded-lg bg-logo-light">
              <h5 className=" text-lg text-left font-medium mb-1 text-logo-blue">
                Our Goals
              </h5>
              <p className="text-sm text-gray-100">
                We believe in a proactive approach to every aspect of our
                business, with special emphasis on quality, safety, and on-time
                delivery.
              </p>
            </div>
            <div className="px-2 py-2 rounded-lg bg-logo-light">
              <h5 className="text-lg font-medium text-left text-logo-blue mb-1">
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
      <div className="">

      <div className=""> Our values</div>
      <CarouselComponent items={feedbacksItems} />
      </div>
        <div className="">
            Be a part of our team
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

export default About;
