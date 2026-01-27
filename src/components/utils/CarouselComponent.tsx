import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveness = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface Tesponsive {
  breakpoint: { max: number; min: number };
  items: number;
  slidesToSlide?: number;
}

interface CarouselProps {
  items: {
    message: string;
    name: string;
  }[];
  responsive?: {
    desktop: Tesponsive;
    tablet: Tesponsive;
    mobile: Tesponsive;
  };
}

const CarouselComponent = ({
  items,
  responsive = responsiveness,
}: CarouselProps) => {
  return (
    <div>
      <Carousel
        swipeable
        showDots
        className=" w-full"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={0}
        infinite={true}
        transitionDuration={600}
        // customTransition="transform 9000ms linear"
        // additionalTransfrom={0}
      >
        {items.map((item, index) => (
          <div className="px-2 sm-px-3" key={index}>
            <div className=" bg-gray-200 py-3 px-3 rounded-lg flex-col flex gap-y-6 ">
              <p className="text-gray-600  font-medium  text-sm">
                {item.message}
              </p>
              <h4 className="text-base font-semibold ">{item.name}</h4>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
