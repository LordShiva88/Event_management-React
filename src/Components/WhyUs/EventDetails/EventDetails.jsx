import { useLoaderData, useParams } from "react-router-dom";
import "./Banner.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";

const EventDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const filterData = data.find((detail) => detail.id === id);

  console.log(filterData);
  const {
    image,
    description,
    start_date,
    end_date,
    venue,
    address,
    title,
    image_urls,
  } = filterData;
  console.log(image_urls);

  return (
    <div className="relative">
      <div className="banner w-full h-[400px] flex justify-between md:flex-row flex-col items-center p-10">
        <div className="flex-1">
          <h2 className="lg:text-7xl text-4xl font-bold text-black">
            Are You Ready For This Exited Event?
          </h2>
        </div>
        <div className="flex-end">
          <button
            to={"/#slide2"}
            className="text-white font-bold md:text-2xl px-10 py-5 bg-[#eb347a]"
          >
            Register Event Now
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 my-10">
        <div className="bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 p-6">
          <img className="rounded-t-lg" src={image} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <hr />
            <div className="flex justify-center gap-10 text-2xl mt-5 ">
              <div className="flex gap-3 items-center text-[#eb347a]">
                <BsShareFill></BsShareFill>
                <p className="text-xl font-bold">Share</p>
              </div>
              <FaFacebook className="hover:text-[#eb347a]"></FaFacebook>
              <FaTwitter className="hover:text-[#eb347a]"></FaTwitter>
              <FaInstagram className=""></FaInstagram>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="space-y-2 mb-10 lg:mt-0 mt-10">
            <h2 className="text-2xl font-bold">EVENTS DETAIL</h2>
            <div className="w-32 h-1 bg-[#eb347a] border-dotted"></div>
          </div>
          <div className="space-y-2 mb-10 text-gray-400">
            <h3 className="text-xl font-bold">
              Start Date:
              <small className="ml-10 text-gray-400 font-bold">
                {start_date}
              </small>
            </h3>
            <h3 className="text-xl font-bold">
              End Date:<small className="ml-11 text-gray-400">{end_date}</small>
            </h3>
            <h3 className="text-xl font-bold">
              Venue :<small className="ml-16 text-gray-400">{venue}</small>
            </h3>
            <h3 className="text-xl font-bold">
              Address:<small className="ml-12 text-gray-400">{address}</small>
            </h3>
          </div>
          <h3 className="text-xl font-bold">Map:</h3>
          <iframe
            className="w-full h-auto"
            src="https://www.google.com/maps/embed?LINK"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
