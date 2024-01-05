import errorImg from '../../assets/6333074_prev_ui.png'
const ErrorPage = () => {
    return (
        <div className='bg-pink-100 py-20'>
            <img className='w-2/3 mx-auto' src={errorImg} alt="" />
            <h2 className='font-semibold text-xl'>The page could not found.</h2>
            <h2 className='font-semibold text-xl'>Sorry! Try again please!!!</h2>
            
            
        </div>
    );
};

export default ErrorPage;