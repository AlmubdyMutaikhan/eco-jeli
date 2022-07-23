import { Navigate, NavLink } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({style, date, title, avatar, text, id}) => {
    return (
     
            <NavLink to={'/blog/' + id} className="news-card-container">
            <div className='news-card-text'>
                <div className='news-credits top-left-radius'>
                    <img src={'https://cdn1.iconfinder.com/data/icons/office-322/24/time-date-schedule-event-calendar-appointment-128.png'} alt="date"
                    />
                    <p>{date.slice(0, 10)}</p>
                </div>
                <div className='news-credits news-title-credit'>
                    {title}
                </div>
                <div className='news-credits-desc'>
                {text.length > 400 ? text.slice(0, 400) : text}
                </div>
            </div>
            <img src={avatar} />
            </NavLink>
    
    )
}

export default NewsCard;