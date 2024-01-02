import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { BsStopwatch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbUserDollar } from "react-icons/tb";
import HoverRating from "./Rating";
import PropTypes from 'prop-types';







const EventData = ({ eventData }) => {
    // console.log(eventData);
    const { img, date, time, duration, location, totalCost, costPerPerson, title, rating,type } = eventData;
    return (
        <div className="rounded-xl bg-base-100 shadow-xl ">
            <div className="w-full relative">

                <div>
                <img src={img} alt="Shoes" className="rounded-t-xl h-36 w-full" />
                </div>
                <div>
                    <button disabled className="bottom-2 right-[165px]  absolute px-5 py-1 rounded-xl disabled:font-thin text-[10px] disabled:text-white disabled:bg-[#f17092] btn-secondary">{type}</button>
                </div>

            </div>
            <div className="items-center text-center">
                <div className="flex justify-between items-center px-3 pt-1">
                    <div className="flex items-center gap-2">
                        <CiCalendarDate></CiCalendarDate>
                        <p className="text-sm">{date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm">{time}</p>
                        <IoTimeOutline></IoTimeOutline>
                    </div>
                </div>
                <hr />

                <h2 className="text-lg">{title}</h2>
                <hr />
                <div className="flex justify-between items-center px-3 pt-1">
                    <div className="flex items-center gap-2">
                        <BsStopwatch></BsStopwatch>
                        <p className="text-sm">{duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[12px]">{location}</p>
                        <IoLocationOutline></IoLocationOutline>
                    </div>
                </div>
                <div className="flex justify-between items-center px-3 pt-1">
                    <div className="flex items-center gap-2">
                        <AiOutlineDollarCircle></AiOutlineDollarCircle>
                        <p className="text-sm">{totalCost}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm">{costPerPerson}</p>
                        <TbUserDollar></TbUserDollar>
                    </div>
                </div>
                <div className="mb-5">
                    <HoverRating>{rating}</HoverRating>
                </div>


            </div>
        </div>
    );
};
EventData.propTypes = {
    eventData: PropTypes.object
}
export default EventData;