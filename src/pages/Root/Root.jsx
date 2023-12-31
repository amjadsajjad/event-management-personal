import { Outlet } from "react-router-dom";
// import NavBar from "../../shared/NavBar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-oswald bg-pink-50 ">
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;