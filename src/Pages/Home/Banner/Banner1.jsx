import Countdown from "react-countdown";
import "./banner.css";
import moment from "moment/moment";
const Banner1 = () => {

  return (
    <div className="bg-image w-full h-[500px]">
      <div className="container mx-auto flex md:flex-row flex-col p-10 items-center gap-7">
      <div className="flex-1">
        <h2 className="text-5xl text-black">
          Feel the Beat, Live the Melody: Where Music Meets Soul
        </h2>
        <p className="">
          Step into a World Where Every Note Sings a Story, Every Chord Paints a
          Memory, and Every Beat Echoes Love and Unity. Discover the Magic of
          Music at Harmony Haven, Where Your Heart Finds Its Song.
        </p>
      </div>

      <div className="flex-1">
        <p>{moment().format("MMMM Do YYYY")}</p>
        <h2>Christmas Event In the City</h2>
        <div className=" text-center bg-[#eb347a] text-white rounded-lg text-6xl p-6 border">
          <Countdown date={Date.now() + 300000000}></Countdown>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner1;
