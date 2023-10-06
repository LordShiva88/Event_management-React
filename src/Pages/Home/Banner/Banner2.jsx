import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="bg-image2 w-full flex lg:flex-row flex-col lg:p-20   p-10 items-center gap-7">
      <div className="flex-1 space-y-5 text-center lg:text-left">
        <h2 className="md:text-5xl text-3xl font-bold text-black ">
          Feel the Beat, Live the Melody:{" "}
          <span className="text-[#eb347a]">Where Music Meets Soul</span>
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

      <div className="flex-1 space-y-4 lg:w-1/2 w-2/3">
        <div className="flex items-center justify-center bg-cover bg-no-repeat bg-form">
          <div className="rounded-xl bg-gray-700 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-white">
              <div className="mb-8 flex flex-col items-center">
                <h1 className="mb-2 text-2xl">Register Event Free</h1>
              </div>
              <form action="#">
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="name"
                    placeholder="id@email.com"
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    name="name"
                    placeholder="*********"
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button className="px-4 py-2 bg-[#eb347a] hover:bg-[#eb075e] rounded text-white font-bold">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
