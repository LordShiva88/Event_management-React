import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseData from "../../Hooks/useData";

const Testimonials = () => {
  const { testimonials } = UseData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mx-auto lg:w-2/3 my-20">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-[#eb347a]">Testimonial</span>
        </h2>
        <p className="text-gray-500">What Our Customer says</p>
        <div className="flex justify-center">
          <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
        </div>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="max-w-sm h-auto md:h-[250px]  p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 mt-10">
              <p className=" text-gray-500 dark:text-gray-400">
                {testimonial.description}
              </p>

              <div className="flex flex-grow items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.author_name}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
