import './NewsCard.css';

const NewsCard = ({style, img}) => {
    return (
        <div className="news-card-container">
            <img src={img} />
            <div className='news-card-text'>
                <p>  
                    НОВОСТИ НОВОСТИ НОВОСТИ АЕЕЕЕ!!!
                </p> 
                
            </div>
        </div>  
    )
}

export default NewsCard;