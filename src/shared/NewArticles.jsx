import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewArticles = ({ newsArticle }) => {
    // console.log(newsArticle);
    const { img, description, title } = newsArticle;

    return (
        <div className=" pb-5 rounded-xl bg-base-100 shadow-xl">
            <div className='h-[150px]'>
                <img src={img} alt="Shoes" className="rounded-t-xl w-full h-full" />
            </div>
            <div className="mt-2 text-center">
                <h2 className="text-xl font-medium">{title}</h2>
                <p className='text-gray-600 p-5 text-justify'>{description.slice(0, 70)} ...</p>
                <div className="mt-2">
                    <Link to={`/news-articles/${newsArticle.id}`}>
                        <button className=" text-sm border rounded-lg px-5 py-1 border-[#f17092] "><p className=' text-blue-700'>Read Post</p></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

NewArticles.propTypes = {
    newsArticle: PropTypes.object
}

export default NewArticles;