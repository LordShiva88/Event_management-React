import { useContext } from "react";
import { UserAuthContext } from "../../AuthContext/AuthContext";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner1 from "./Banner/Banner1";
import Banner2 from "./Banner/Banner2";
import { useLoaderData } from "react-router-dom";
import Events from "./Events/Events";

const Home = () => {
  const { name } = useContext(UserAuthContext);


  const data = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {data.map((aEvent) => (
          <Events key={aEvent.id} aEvent={aEvent}></Events>
        ))}
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
