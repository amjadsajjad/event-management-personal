import dgmarketing from '../../src/assets/DigitalMarketing.png';
import stemEdu from '../../src/assets/StemEducation.png';
import masterDataScience from '../../src/assets/MasteringDataScience.png';
import CyberSecurity from '../../src/assets/CyberSecurity.png';
import techCareerFair from '../../src/assets/TechnologyCareerFair.png'
import healthExpo from '../../src/assets/HealthcareCareerExpo.png'
import InEduSummit from '../../src/assets/InternationalEducationalSummit.png'
import InoHigherEdu from '../../src/assets/InnovationHigherEduConference.png'
import leadership from '../../src/assets/LeadershipExecellenceSummit.png'
import environmment from '../../src/assets/EnvironmentalSustainabilitySeminer.png'

const Slider = () => {
    return (
        <div className="carousel lg:w-2/3 lg:h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={dgmarketing} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide10" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={stemEdu} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={masterDataScience} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={CyberSecurity} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={techCareerFair} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={healthExpo} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
                <img src={InEduSummit} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide8" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide8" className="carousel-item relative w-full">
                <img src={InoHigherEdu} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" className="btn btn-circle">❮</a>
                    <a href="#slide9" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide9" className="carousel-item relative w-full">
                <img src={leadership} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" className="btn btn-circle">❮</a>
                    <a href="#slide10" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide10" className="carousel-item relative w-full">
                <img src={environmment} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide9" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;