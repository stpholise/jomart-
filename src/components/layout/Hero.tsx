import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router";

const responsiveness = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};



const Hero = () => {
  return (
    <div className="w-full">
      <Carousel
        swipeable
        arrows
        showDots
        className="  w-full"
        responsive={responsiveness}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        transitionDuration={600}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="hero  relative  w-full h-100  bg-cover bg-center   "
          >
            <div className=" w-full h-full ">
                <img  src={item.image} alt="hero" loading="eager" fetchPriority="high"  className="w-full h-full object-cover" />
            </div>
            <div className="  absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 h-full sm:px-8 py-12 sm:py-8 gap-8 md:gap-12 ">
              <h2 className=" max-w-150 text-3xl md:text-5xl text-white text-center font-medium ">
                {item.title}
              </h2>
              <p className="text-base max-w-150 text-white text-center">
                {item.description}
              </p>
              <Link to={"/about"} className="text-white bg-logo-blue px-6 py-1.5 rounded-lg font-medium text-sm mt-auto " >About us</Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const slides = [
  {
    title: "Boost Your Company's Productivity",
    description:
      "Jomart Engineering Services Limited is a 21st century engineering company founded in 2012, delivering innovative construction solutions that enhance operational efficiency.",
    image: "/images/hero_1.jpeg",
    cta: "Optimize Your Space",
  },
  {
    title: "Engineering Excellence Since 2012",
    description:
      "Over a decade of delivering quality construction projects across residential, commercial, and industrial sectors with unwavering commitment to safety and innovation.",
    image: "/images/hero_2.png",
    cta: "View Our Portfolio",
  },
  {
    title: "Building Sustainable Futures",
    description:
      "Pioneering green construction practices that reduce environmental impact while creating spaces that inspire productivity and growth.",
    image: "/images/hero_3.jpeg",
    cta: "Sustainable Solutions",
  },
];

export default Hero;
