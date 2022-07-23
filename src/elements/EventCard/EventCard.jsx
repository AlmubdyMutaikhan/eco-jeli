import Button from '../Button/Button';
import './EventCard.css';

const EventCard = ({title, date, id, changeShow}) => {
    return (
        <div className="event-card">
            <div className="event-title">
                <h3>{title}</h3>
                <div className='news-credits top-left-radius' style={{
                    display:'flex',
                    alignItems:'center',
                    marginTop:'10px'
                }}>
                    <img src={'https://cdn1.iconfinder.com/data/icons/office-322/24/time-date-schedule-event-calendar-appointment-128.png'} alt="date"
                    />
                    <p>{date.slice(0, 10)}</p>
                </div>
            </div>
            <div className="event-btns">
                <Button text='Участвовать'/>
                <br/>
                <Button text='Подробнее' 
                    onClick={() => {
                    //    console.log('btn ckicked ' + id);
                        changeShow(id);
                    }}
                />
            </div>
        </div>
    )
}

export default EventCard;