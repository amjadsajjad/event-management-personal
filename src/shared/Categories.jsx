
import { GrWorkshop } from "react-icons/gr";
import { GiVideoConference } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";







const Categories = () => {
    const { searchCategory, setSearchCategory } = useContext(AuthContext)

    console.log(searchCategory)


    return (
        <div className="mt-10 mb-10 mx-5">
            <h2 className="text-lg mx-auto lg:w-2/3 md:text-3xl px-2 py-1 text-[#310E60] border-b-2 border-[#FD96B1] rounded-b-lg lg:text-3xl font-medium mb-3 ">Explore Top <span className="text-[#f17092]">Categories</span></h2>
            <div className="grid grid-cols-3 gap-3 lg:w-2/3 mx-auto mb-10">
                <button onClick={() => { setSearchCategory('workshop') }}>
                    <div  className={` ${searchCategory === 'workshop' ? 'bg-[#f17092] text-white ' : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <GrWorkshop></GrWorkshop>
                        <h2 className={`text-[#310E60] ${searchCategory === 'workshop' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>Workshop</h2>

                    </div>
                </button>
                <button onClick={() => { setSearchCategory('webinar') }}>
                    <div className={` ${searchCategory === 'webinar' ? 'bg-[#f17092] text-white' : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <BsPersonWorkspace></BsPersonWorkspace>
                        <h2 className={`text-[#310E60] ${searchCategory === 'webinar' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>Webinar</h2>

                    </div>
                </button>
                <button onClick={() => { setSearchCategory('career fair') }}>
                    <div className={` ${searchCategory === 'career fair' ? 'bg-[#f17092]  text-white' : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <FaPeopleGroup></FaPeopleGroup>
                        <h2 className={`text-[#310E60] ${searchCategory === 'career fair' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>Career Fair</h2>

                    </div>
                </button>
                <button onClick={() => { setSearchCategory('conference') }}>
                    <div className={` ${searchCategory === 'conference' ? 'bg-[#f17092] text-white '  : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <GiVideoConference></GiVideoConference>
                        <h2 className={`text-[#310E60] ${searchCategory === 'conference' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>Conference</h2>

                    </div>
                </button>
                <button onClick={() => { setSearchCategory('seminar') }}>
                    <div className={` ${searchCategory === 'seminar' ? 'bg-[#f17092] text-white ' : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <TbUsersGroup></TbUsersGroup>
                        <h2 className={`text-[#310E60] ${searchCategory === 'seminar' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>Seminar</h2>

                    </div>
                </button>
                <button onClick={() => { setSearchCategory('') }}>
                    <div className={` ${searchCategory === '' ? 'bg-[#f17092] text-white ' : 'bg-white'} flex tablet:flex-row flex-col lg:flex-row  mobile-s:gap-1 gap-3 items-center text-center justify-center py-3 rounded-lg`}>
                        <GoStack></GoStack>
                        <h2 className={`text-[#310E60] ${searchCategory === '' ? 'text-white':''} mobile-s:text-[12px] tablet:text-lg`}>All</h2>

                    </div>
                </button>

            </div>
        </div>
    );
};

export default Categories;
