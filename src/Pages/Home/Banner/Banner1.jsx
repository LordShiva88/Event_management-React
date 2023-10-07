import Countdown from "react-countdown";
import "./banner.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Banner1 = () => {
  return (
    <div className="bg-image1 w-full flex lg:flex-row flex-col lg:p-20   p-10 items-center gap-7">
      <div className="flex-1 space-y-5 text-center lg:text-left">
        <h2 className="md:text-5xl text-3xl font-bold text-black ">
          Feel the Beat, Live the Melody:{" "}
          <span className="text-[#eb347a]">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                "Where Music Meets with ",
                1000,
                "Where Music Meets with Our Soul ",
              ]}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p className="text-black font-medium">
          Step into a World Where Every Note Sings a Story, Every Chord Paints a
          Memory, and Every Beat Echoes Love and Unity. Discover the Magic of
          Music at Harmony Haven, Where Your Heart Finds Its Song.
        </p>
        <Link to={"/register"} className="btn bg-[#eb347a]">
          Register Now
        </Link>
      </div>

      <div className="flex-1 space-y-4 ">
        <p className="text-2xl font-semibold">
          {moment().format("MMMM Do YYYY")}
        </p>
        <h2 className="text-3xl font-bold">Christmas Event In the City</h2>
        <div className="lg:w-2/3 text-center bg-[#eb347a] text-white rounded-lg md:text-6xl text-3xl p-6 border">
          <Countdown date={Date.now() + 300000000}></Countdown>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
