import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveness = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 3,
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
    message?: string;
    name?: string;
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
        arrows 
        className=" w-full"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        transitionDuration={600}
      >
        {items.map((item, index) => (
          <div className="px-2 sm-px-3 border border-gray-200 mr-4 rounded-lg h-full " key={index}>
            <div className="   py-2 px-3 rounded-lg flex-col flex gap-y-6 ">
              <h4 className="text-xl font-semibold ">{item.name}</h4>
              {item.message && (
                <p className="text-gray-200  font-medium  text-base">
                  {item.message}
                </p>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
