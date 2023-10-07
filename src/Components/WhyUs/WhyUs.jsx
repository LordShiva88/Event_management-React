import { useEffect } from "react";
import useWhyUs from "../../Hooks/UseWhyUs";
import AOS from 'aos'
import 'aos/dist/aos.css'


const WhyUs = () => {
  const { whyUs } = useWhyUs();

  useEffect(()=>{
    AOS.init({duration: 3000})
  },[])

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 ">
      {whyUs.map((why) => (
        <div data-aos="zoom-in"
          className="hover:shadow-md border p-3 text-center space-y-2"
          key={why.id}
        >
          <div className="flex justify-center">
            <p className="p-3 rounded-full bg-red-400 w-10 h-10 text-white font-semibold text-center">
              {why.id}
            </p>
          </div>
          <h2 className="text-2xl font-semibold">{why.title}</h2>
          <p>{why.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
