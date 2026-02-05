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
  name: string;
  image?: string;
  occupation?: string;
  location?: string;
}

const Feedbacks = ({ items }: { items: Items[] }) => {
  const getInitials = (name: string) => {
    const titles = ["mr", "mrs", "miss", "ms", "dr", "prof"];

    return name
      .trim()
      .split(/\s+/)
      .filter((word) => !titles.includes(word.toLowerCase()))
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <div className="container mx-auto py-16">
      <h3 className="text-lg capitalize md:text-2xl text-center mb-3 font-medium text-logo-blue  ">
        Clients That Trust Our Services
      </h3>
      <div className=" min-h-12 h-fit py-4 w-full px-4 flex items-center">
        {items && (
          <Carousel
            swipeable
            className=" w-full"
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            transitionDuration={500}
          >
            {items.map((item, index) => (
              <div className="px-3 sm-px-3 h-full " key={index}>
                <div className=" bg-gray-200 py-4 px-4 h-full rounded-lg flex-col flex gap-y-6 ">
                  <p className="text-gray-700  font-medium  text-sm">
                    {item.message}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="rounded-full bg-amber-50 text-logo-blue size-8 overflow-hidden border-gray-100 border font-medium text-sm flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt="" />
                      ) : (
                        <p className="">{getInitials(item.name)}</p>
                      )}
                    </div>
                    <div className="">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs font-medium text-gray-700">
                        {item.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
