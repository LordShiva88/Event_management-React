import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UseData from "../../Hooks/useData";

const WhyUs = () => {
  const { whyUs } = UseData();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="grid lg:max-w-5xl mx-auto lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 ">
      {whyUs.map((why) => (
        <div
          data-aos="fade-down"
          className="border p-3 text-center space-y-4"
          key={why.id}
        >
          <div className="flex md:flex-row flex-col gap-4 ">
            <div>
              <p className="p-3 rounded-full bg-red-400 w-10 h-10 text-white font-semibold text-center">
                {why.id}
              </p>
            </div>
            <div className="text-left space-y-5">
              <h2 className="text-xl font-semibold">{why.title}</h2>
              <p>{why.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
