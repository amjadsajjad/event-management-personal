import { NavLink } from "react-router-dom";
import '../../src/App.css';
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const NavBar = () => {
    const { logOut, user, setSuccessfullMessage } = useContext(AuthContext);
    // conditionally display two logo in the navBar, one is for mobile view and another for desktop view:
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    console.log(user)

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // conditionally open and close menu navbar
    const [open, setOpen] = useState(false);

    // handle function for logOut method
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logOut successfully');
                setSuccessfullMessage('')

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleToast = () => {
        toast('Your Account Logout Successfully')
    }

    const handleClick = () => {
        handleLogOut();
        handleToast();
    }


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/register'>Regiter</NavLink></li>
        {
            user ? <div className="lg:flex items-center gap-2 ">

                <div className="lg:flex">
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink onClick={handleClick}>Logout</NavLink></li>
                </div>
                <img className="w-[50px] mt-2 lg:mt-0 mx-auto rounded-full border" src={user.photoURL} alt="" />
            </div> : <li><NavLink to='/login'>Login</NavLink></li>
        }


    </>
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="mt-2 md:mt-3 lg:mt-5 lg:flex lg:pl-5 lg:gap-5 lg:items-center lg:justify-between ">
                <div className="lg:hidden mobile-s:flex pl-1 tablet:pl-5 mobile-s:gap-[150px] mobile-m:gap-[200px] tablet:gap-[430px] mobile-l:gap-[250px] sm:gap-[400px] items-center">
                    <div className="relative">
                        <div onClick={() => { setOpen(!open) }} tabIndex={0} role="button" className=" lg:hidden ">
                            {
                                open ? <AiOutlineClose className="text-white text-[10px] md:text-3xl lg:text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-white text-[10px] md:text-3xl lg:text-2xl"></AiOutlineMenu>
                            }

                        </div>

                        <ul tabIndex={0} className={` py-4 px-5 links-sm absolute bg-black bg-opacity-60 duration-500 top-[40px] ${open ? 'left-[20px]' : '-left-[500px]'} lg:hidden items-center gap-1  mt-3 z-[1] p-2 rounded-box w-52`}>
                            {links}
                        </ul>
                    </div>
                    <div className={`w-[250px]  ${isMobile && ''} `}>
                        {
                            isMobile ? <img className="w-20 md:w-[200px]" src="/src/assets/logopink.png" alt="" /> : <img className="" src="/src/assets/logofinal.png" alt="" />
                        }
                    </div>
                    {/* <a className="btn btn-ghost text-xl">EduEvent Manager</a> */}
                </div>
                <div className={`w-[250px] ${isMobile ? 'hidden' : ''} `}>
                    {
                        isMobile ? <img className="w-20 md:w-[200px]" src="/src/assets/logopink.png" alt="" /> : <img className="" src="/src/assets/logofinal.png" alt="" />
                    }
                </div>
                <div className=" hidden lg:flex">
                    <ul className=" links-lg flex items-center px-1">
                        {links}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default NavBar;