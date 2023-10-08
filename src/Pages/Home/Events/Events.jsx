import { CiLocationOn } from "react-icons/Ci";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Events = ({ aEvent }) => {
  const { image, title, ticket_price, venue, date, description, id } = aEvent;

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="border hover:bg-base-200 shadow-xl" data-aos="zoom-in">
      <div className="relative">
        <img src={image} alt="Shoes" />
        <small className="bg-[#eb347a] text-center px-5 py-2 text-white font-bold absolute -bottom-3 left-1/3 rounded-full">
          {date}
        </small>
      </div>
      <div className="card-body space-y-3">
        <div className="space-y-3">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.slice(0, 100)}....
            <Link to={`/${id}`} className="text-[#eb347a]">
              {" "}
              Details
            </Link>
          </p>
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-3xl"></CiLocationOn>
            <p>{venue}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-6 py-5">
        <Link className="hover:text-[#eb347a]">Get Ticket</Link>
        <h2 className="text-sky-600">Upcoming</h2>
        <p className="text-[#eb347a]">{ticket_price}</p>
      </div>
    </div>
  );
};

Events.propTypes = {
  aEvent: PropTypes.object,
};

export default Events;
