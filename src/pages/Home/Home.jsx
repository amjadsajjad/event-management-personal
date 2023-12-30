// import Banner from "../../shared/Banner";
import NavBar from "../../shared/NavBar";

const Home = () => {
    return (
        <div>
            <div className=" bg-bannerbg h-[160px] md:h-[400px] lg:h-[710px] border bg-no-repeat bg-cover bg-top">
                <div className="">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-lg md:text-3xl px-2 py-3 rounded-lg text-[#310E60] bg-[#FD96B1] lg:text-3xl font-medium mb-3 ">Our upcoming event</h2>
                <div className="carousel lg:w-2/3 lg:h-[400px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/src/assets/DigitalMarketing.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide10" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/src/assets/StemEducation.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/src/assets/MasteringDataScience.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/src/assets/CyberSecurity.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="/src/assets/TechnologyCareerFair.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="/src/assets/HealthcareCareerExpo.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide7" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide7" className="carousel-item relative w-full">
                        <img src="/src/assets/InternationalEducationalSummit.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide8" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide8" className="carousel-item relative w-full">
                        <img src="/src/assets/InnovationHigherEduConference.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide7" className="btn btn-circle">❮</a>
                            <a href="#slide9" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide9" className="carousel-item relative w-full">
                        <img src="/src/assets/LeadershipExecellenceSummit.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide8" className="btn btn-circle">❮</a>
                            <a href="#slide10" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide10" className="carousel-item relative w-full">
                        <img src="/src/assets/EnvironmentalSustainabilitySeminer.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide9" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Home;