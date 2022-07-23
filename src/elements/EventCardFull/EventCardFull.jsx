import { useEffect } from 'react';
import Button from '../Button/Button';
import './EventCard.css';

const EventCardFull = ({title, date, id, avatar, desc, link}) => {
    useEffect(() => {
        console.log(link);
    }, []);
    
    return (
        <>
        <div className="event-card" style={{
            width:'50%'
        }}>
            <div className="event-title">
                <h3>{title}</h3>
                <div className='news-credits top-left-radius' style={{
                    display:'flex',
                    alignItems:'center',
                    marginTop:'10px'
                }}>
                    <img src={'https://cdn1.iconfinder.com/data/icons/office-322/24/time-date-schedule-event-calendar-appointment-128.png'} alt="date"
                    />
                    <p>{date ? date : ''}</p>
                </div>
            </div>
            <div className="event-btns" style={{width:'50%'}}>
                <Button text='Участвовать' onClick={() => {
                    window.open(link, "_blank");
                }}/>
                <br/>
                <p style={{width:'100%'}}>
                   {desc}
                </p>
            </div>
        </div>
        <img src={avatar} alt="event" style={{
            width:'50%'
        }}/>
        </>
    )
}

export default EventCardFull;