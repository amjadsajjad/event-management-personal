
import { useLoaderData, useParams } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import NavBar from "../../shared/NavBar";



const NewsArticlesRoute = () => {
    const { id } = useParams();
    const articles = useLoaderData();
    console.log(articles);
    console.log(id);

    const article = articles.find(article => article.id === parseInt(id));
    console.log(article);
    const { img, title, description, postDate, postTime } = article;

    return (
        <div>
            <div className="mb-10">
                <NavBar></NavBar>
            </div>
            <div className="lg:w-2/3  mx-auto">
                <div className="">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="flex justify-between px-5">
                    <div className="flex gap-2 items-center">
                        <CiCalendarDate></CiCalendarDate>
                        <p> Date:{postDate}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IoTimeOutline></IoTimeOutline>
                        <p> Time:{postTime}</p>
                    </div>

                </div>
                <div>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-justify text-lg">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default NewsArticlesRoute;