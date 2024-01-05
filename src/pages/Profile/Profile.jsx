import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoIosShareAlt } from "react-icons/io";



const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="lg:w-2/3 rounded-lg lg:mx-auto mx-5 pb-10">
            <h2 className="mb-20 text-2xl">Your Account Information</h2>
            <div className="bg-white rounded-lg relative pb-10">
                <img className="rounded-full mx-auto absolute lg:left-[270px] mobile-s:left-[65px] mobile-s:bottom-[150px]
                mobile-m:left-[85px] mobile-m:bottom-[140px]
                mobile-l:left-[115px] mobile-l:bottom-[140px] 
                tablet:left-[280px] tablet:bottom-[140px]   lg:bottom-[150px] laptop-l:left-[350px]" src={user.photoURL} alt="" />
                <div className="pt-20">
                    <h3 className="">{user.displayName}</h3>
                    <h2 >Email:{user.email}</h2>
                </div>
                <button className="flex mx-auto bg-[#f16f92] text-white items-center gap-2 rounded-sm px-4 py-1"> <IoIosShareAlt></IoIosShareAlt> Share Profile</button>

            </div>

        </div>
    );
};

export default Profile;