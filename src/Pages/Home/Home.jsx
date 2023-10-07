import Banner1 from "./Banner/Banner1";
import Banner2 from "./Banner/Banner2";
import { useLoaderData } from "react-router-dom";
import Events from "./Events/Events";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Marquee from "react-fast-marquee";

import sponsor1 from "../../assets/sp-1.png";
import sponsor2 from "../../assets/sp-2.png";
import sponsor3 from "../../assets/sp-3.png";
import sponsor4 from "../../assets/sp-4.png";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="">
        <div className="carousel lg:h-[800px] w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <Banner1></Banner1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Banner2></Banner2>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-[#eb347a]">Events</span>
          </h2>
          <p className="text-gray-500">
            Where Moments Shine: Explore Our Featured Events!
          </p>
          <div className="flex justify-center">
            <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {data.map((aEvent) => (
            <Events key={aEvent.id} aEvent={aEvent}></Events>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-[#eb347a]">Why </span>Choose{" "}
          </h2>
          <p className="text-gray-500">
            Where Moments Shine: Explore Our Featured Events!
          </p>
          <div className="flex justify-center">
            <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
          </div>
        </div>
        <WhyUs></WhyUs>
      </div>
      <div className="mb-10 space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-[#eb347a]">Our </span>Sponsor{" "}
          </h2>
          <p className="text-gray-500">
            Where Moments Shine: Explore Our Featured Events!
          </p>
          <div className="flex justify-center">
            <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
          </div>
        </div>

        <Marquee pauseOnHover speed={50}>
          <img src={sponsor1} className="w-60" alt="" />
          <img src={sponsor2} className="w-60" alt="" />
          <img src={sponsor3} className="w-60" alt="" />
          <img src={sponsor4} className="w-60" alt="" />
          {/* <img src={sponsor7} className="w-60" alt="" />
          <img src={sponsor8} className="w-60" alt="" /> */}
        </Marquee>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
