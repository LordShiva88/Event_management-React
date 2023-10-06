import { Link } from "react-router-dom";

const Events = ({ aEvent }) => {
  const { image, title, ticket_price, venue, date } = aEvent;
  console.log(aEvent);
  return (
    <div className="border hover:bg-base-200 shadow-xl">
      <div className="relative">
        <img src={image} alt="Shoes" />
        <small className="bg-[#eb347a] text-center px-5 py-2 text-white font-medium absolute top-4">
          {date}
        </small>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h2 className="card-title">{title}</h2>
          <p></p>
          <p>{venue}</p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <button className="">Get Ticket</button>
          <h2>Upcoming</h2>
          <p>{ticket_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
