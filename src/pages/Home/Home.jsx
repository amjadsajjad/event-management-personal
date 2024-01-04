// import Banner from "../../shared/Banner";
import { useContext, useEffect, useState } from "react";
import Categories from "../../shared/Categories";
import NavBar from "../../shared/NavBar";
import Slider from "../../shared/Slider";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import EventData from "../../shared/EventData";
import { FcBusinessman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import NewArticles from "../../shared/NewArticles";
import Footer from "../../shared/Footer";






const Home = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [newsArticlesLength, setNewsArticlesLength] = useState([3])
    const { searchCategory } = useContext(AuthContext);
    const datas = useLoaderData();
    const eventDatas = datas.events;
    // console.log(eventDatas);

    console.log(searchCategory)

    const filterData = eventDatas.filter(event => event.type.toLowerCase().includes(searchCategory.toLowerCase()));
    console.log(filterData);

    useEffect(() => {
        fetch('/public/fakeData2.json')
            .then(res => res.json())
            .then(data => setNewsArticles(data))
    }, [])
    // console.log(newsArticles);


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

                <div className="mt-10 pb-[250px] lg:pb-10">
                    <h2 className="text-lg mx-auto lg:w-2/3 md:text-3xl px-2 py-1 text-[#310E60] border-b-2 border-[#FD96B1] rounded-b-lg lg:text-3xl font-medium mb-3 ">Our Clients <span className="text-[#f17092]">Review</span></h2>
                    <p className="text-sm mx-auto px-5 text-justify lg:w-2/3">

                        Discover what our valued clients have to say about their experiences with our services. In the Clients Review section, we proudly showcase testimonials from individuals and businesses who have entrusted us with their needs. These authentic reviews reflect the satisfaction and success stories of our clients.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 mt-5 lg:w-2/3 mx-auto ">
                        <div className="flex flex-col justify-center gap-3  ">
                            <div>
                                <div className=" bg-white rounded-md border">

                                    <p className="font-[100] text-gray-500 text-[10px] px-5">
                                        Impressed with the professionalism and attention to detail at every turn. <span className="text-[#f17092]">EduEvent Manager</span> made our special occasion truly unforgettable.
                                    </p>

                                    <div className="flex">
                                        <div className="flex justify-between items-center px-2 py-3 gap-5 w-full">
                                            <div className="flex items-center gap-2">
                                                <FcBusinessman className="text-3xl "></FcBusinessman>
                                                <div className="text-[12px]">
                                                    <h2>Jhon Blody</h2>
                                                    <p className="text-[8px] text-gray-500">Corporate Client</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className=" bg-white rounded-md border">

                                    <p className="font-[100] text-gray-500 text-[10px] px-3">
                                        Exceptional event coordination! Our experience with <span className="text-[#f17092]">EduEvent Manager </span>
                                        was seamless from precise planning to flawless execution, they brought our vision to life

                                    </p>

                                    <div className="flex">
                                        <div className="flex justify-between items-center px-2 py-3 gap-5 w-full">
                                            <div className="flex items-center gap-2">
                                                <FcManager className="text-3xl"></FcManager>
                                                <div className="text-[12px]">
                                                    <h2>Smith Black</h2>
                                                    <p className="text-[8px] text-gray-500">Educator</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#f17092]" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="relative tablet:left-[150px] mobile-l:right-5 mobile-s:right-16 lg:left-[20px] lg:bottom-5 mobile-m:right-10 ">
                            <div className=" overflow-hidden absolute z-10  w-[300px] left-[70px]">
                                <img className="w-[210px] rounded-b-full block  " src="/src/assets/reviewgirl_prev_ui.png" alt="" />
                            </div>
                            <div className="bg-[#f17092] rounded-b-full absolute  border top-[114px] left-[76px] -z-2 w-[200px] h-[100px]">



                            </div>

                        </div>
                    </div>


                </div>

                <div className="mx-auto">
                    <h2 className="text-lg mx-auto lg:w-2/3 md:text-3xl px-2 py-1 text-[#310E60] border-b-2 border-[#FD96B1] rounded-b-lg lg:text-3xl font-medium mb-3 ">Latest News <span className="text-[#f17092]">& Articles</span></h2>
                    <p className="text-sm mx-auto px-5 text-justify lg:w-2/3">
                        Stay informed with our latest news and articles section, where we bring you curated insights, industry updates, and thought-provoking content. Explore the latest trends and expert perspectives to stay ahead in your field
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto lg:w-2/3 ">
                        {
                            newsArticles.slice(0, newsArticlesLength).map(newsArticle => <NewArticles key={newsArticle.ig} newsArticle={newsArticle}></NewArticles>)
                        }
                    </div>
                    <button onClick={() => { setNewsArticlesLength(newsArticles.length) }} className={`bg-[#f17092] ${newsArticlesLength === 5 ? 'hidden' : ''} mt-5 px-10 py-2 rounded-xl text-white`}>See All</button>

                </div>


            </div>

            <Footer></Footer>



        </div>
    );
};

export default Home;