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
  message: string;
  name: string;
}

const Feedbacks = ({ items }: { items: Items[] }) => {
  return (
    <>
      {items && (
        <Carousel
          swipeable
          showDots 
          className=" w-full"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true} 
        >
          {items.map((item, index) => (
            <div
              className=" bg-gray-200 py-3 px-3 rounded-lg flex-col flex gap-y-6 mr-4"
              key={index}
            >
              <p className="text-gray-600  font-medium  text-sm">
                {item.message}
              </p>
              <h4 className="text-base font-semibold ">{item.name}</h4>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Feedbacks;
