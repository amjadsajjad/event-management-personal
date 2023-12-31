// import Banner from "../../shared/Banner";
import { useContext } from "react";
import Categories from "../../shared/Categories";
import NavBar from "../../shared/NavBar";
import Slider from "../../shared/Slider";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import EventData from "../../shared/EventData";



const Home = () => {
    const { searchCategory } = useContext(AuthContext);
    const datas = useLoaderData();
    const eventDatas = datas.events;
    // console.log(eventDatas);

    console.log(searchCategory)

    const filterData = eventDatas.filter(event => event.type.toLowerCase().includes(searchCategory.toLowerCase()));
    console.log(filterData);


    return (
        <div>
            <div className=" bg-bannerbg h-[160px] md:h-[400px] lg:h-[710px] border bg-no-repeat bg-cover bg-top">
                <div className="">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="mt-10 mb-10">
                <h2 className="text-lg mx-auto lg:w-2/3 md:text-3xl px-2 py-1 text-[#310E60] border-b-2 border-[#FD96B1] rounded-b-lg lg:text-3xl font-medium mb-3 ">Our upcoming <span className="text-[#f17092]">event</span></h2>
                <Slider></Slider>
                <Categories></Categories>
                <div>
                    <h2 className="text-lg mx-auto lg:w-2/3 md:text-3xl px-2 py-1 text-[#310E60] border-b-2 border-[#FD96B1] rounded-b-lg lg:text-3xl font-medium mb-3 ">Explore Top <span className="text-[#f17092]">Events</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto lg:w-2/3  ">
                        {
                            searchCategory ? filterData.map(eventData => <EventData key={eventData.id} eventData={eventData}></EventData>) : eventDatas.map(eventData => <EventData key={eventData.id} eventData={eventData}></EventData>)
                        }

                    </div>
                </div>



            </div>



        </div>
    );
};

export default Home;