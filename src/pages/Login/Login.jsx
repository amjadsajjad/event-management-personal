import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import NavBar from "../../shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { signInUser, errorMessage, successfullMessage, setErrorMessage, setSuccessfullMessage,googleLogin } = useContext(AuthContext);

    const handleToast = () => {
        toast('Your Account Login Successfully');

    }

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {

        googleLogin(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccessfullMessage('Sign In Successfully Done!');
                e.target.reset();
                handleToast();
                navigate('/');

            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message)
            })

        setErrorMessage('')
        setSuccessfullMessage('')

    }
    console.log(errorMessage);

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="pt-1 mb-10">
                <NavBar></NavBar>
            </div>
            <div className='pt-5 grid grid-cols-1 lg:grid-cols-2 lg:mx-20'>
                <div className="mx-auto">
                    <img className="w-96 mt-10" src="/src/assets/Wavy_Tech-28_Single-10_prev_ui.png" alt="" />
                </div>
                <div className='pb-5'>
                    <h2 className='text-[#310E60] mb-3 text-xl '>Sign in account</h2>
                    <form onSubmit={handleSubmitLogin} className=' w-2/3 mx-auto'>
                        <input type="email" placeholder="Email" className="border focus:outline-none focus:border-[3px] focus:border-[#f16f92] input-field block mb-3 w-full rounded-md placeholder:text-sm" name="email" />
                        <input type="password" name="password" className="border focus:border-[3px] focus:outline-none focus:border-[#f16f92] input-field block w-full mb-3 rounded-md placeholder:text-sm" placeholder="Password" />

                        {
                            errorMessage && <p className="text-red-500 text-[14px]">{errorMessage}</p>
                        }
                        {
                            successfullMessage && <p className="text-green-500 mb-2 text-[14px]">{successfullMessage}</p>

                        }


                        <button className='bg-[#f16f92] hover:bg-[#310E60] w-full text-white rounded-md '>
                            <input className='text-[13px] lg:text-[15px]' type="submit" value="Sign in account" />
                        </button>
                    </form>

                    <p className="text-sm lg:text-lg">Have not an account ? <Link className='text-[#310e60] hover:text-[#f16f92] font-semibold' to="/register">Register</Link></p>
                    <div className='flex gap-0 justify-center items-center'>
                        <hr className='w-[115px] ' /> <span className='mx-5'>Or</span>  <hr className='w-[115px] ' />
                    </div>

                    <div className='w-2/3 mx-auto '>
                        <div className='border rounded-full hover:bg-[#f16f92] hover:text-white mx-auto flex items-center justify-center mobile-s:px-2 lg:px-5 lg:gap-5 gap-2 py-1 text-[#f16f92] mobile-m:px-6'>
                            <FaFacebook></FaFacebook>
                            <p className="text-sm lg:text-lg">Continue with Facebook</p>
                        </div>
                        <button className="w-full" onClick={handleGoogleLogin}>
                            <div className='border rounded-full mx-auto flex justify-center items-center gap-2 lg:gap-5 py-1 lg:px-10 text-center mt-3 hover:bg-[#f16f92] mobile-s:px-2 px-5 mobile-m:px-6 hover:text-white  text-[#f16f92]'>
                                <FaGoogle></FaGoogle>
                                <p className="text-sm lg:text-lg">Continue with Google</p>
                            </div>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;