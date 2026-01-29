import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 460 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface Items {
  message?: string;
  name?: string;
}

const Feedbacks = ({ items }: { items: Items[] }) => {
  return (
    <div className="container mx-auto mb-8">
      {items && (
        <Carousel
          swipeable
          showDots
          className=" w-full"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          transitionDuration={500}
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
      )}
    </div>
  );
};

export default Feedbacks;
