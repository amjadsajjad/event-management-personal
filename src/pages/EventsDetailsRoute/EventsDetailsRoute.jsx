import { useLoaderData, useParams } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { BsStopwatch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbUserDollar } from "react-icons/tb";
import HoverRating from "../../shared/Rating";
import NavBar from "../../shared/NavBar";

const EventsDetailsRoute = () => {
    const { events } = useLoaderData();
    const { id } = useParams();
    console.log(events);
    console.log(id);

    const event = events.find(event => event.id === parseInt(id));
    console.log(event);
    const { img, title, type, date, time, duration, location, totalCost, costPerPerson, rating,description } = event;


    return (
        <div className="pb-10">
            <div className="mb-10">
            <NavBar></NavBar>
            </div>
            <div className="rounded-xl bg-base-100 lg:w-2/3 mx-auto  ">
                <div className="w-full relative">

                    <div className="h-[300px]">
                        <img src={img} alt="Shoes" className="rounded-t-xl h-full w-full" />
                    </div>
                    <div>
                        <button disabled className="bottom-2 right-[165px]  absolute px-5 py-1 rounded-xl disabled:font-thin text-[10px] disabled:text-white disabled:bg-[#f17092] btn-secondary">{type}</button>
                    </div>

                </div>
                <div className="items-center text-center">
                    <div className="flex justify-between items-center px-3 pt-1">
                        <div className="flex items-center gap-2">
                            <CiCalendarDate className="text-2xl"></CiCalendarDate>
                            <p className="text-xl">{date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl">{time}</p>
                            <IoTimeOutline className="text-2xl"></IoTimeOutline>
                        </div>
                    </div>
                    <hr />

                    <h2 className="text-3xl">{title}</h2>
                    <hr />
                    <div className="flex justify-between items-center px-3 pt-1">
                        <div className="flex items-center gap-2">
                            <BsStopwatch className="text-2xl"></BsStopwatch>
                            <p className="text-xl">{duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl">{location}</p>
                            <IoLocationOutline className="text-2xl"></IoLocationOutline>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-3 pt-1">
                        <div className="flex items-center gap-2">
                            <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
                            <p className="text-xl">{totalCost}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl">{costPerPerson}</p>
                            <TbUserDollar className="text-2xl"></TbUserDollar>
                        </div>
                    </div>
                    <div className="mb-5 text-2xl">
                        <HoverRating className="text-2xl">{rating}</HoverRating>
                    </div>
                    <div className="mt-10">
                        <p className="text-lg text-justify px-10 pb-10">{description}</p>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default EventsDetailsRoute;