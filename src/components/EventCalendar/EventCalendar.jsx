import React, { useState } from "react";
import CardEvent from '../CardEvent/CardEvent';
import Notification from '../Notification/Notification';

import './EventCalendar.css';



const EventCalendar = () => {
    const [not, setNot] = useState('');

    const showNot = () => {
        console.log('ok');
        setNot(true);
        setTimeout(() => {
            setNot(false);
        }, 3500)
    }

    return(
        <div className="event-container">
    
                    <CardEvent 
                        title={'Буккроссинг'}
                        index={1}
                        date={'25.04.22'}
                        place={'Қарағанды қаласы, ХББ НЗМ мектебі'}
                        logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                        desc={
                            `ХББ НЗМ мектебінде жыл сайын өтетін кітап алмасу іс-шарасын өткізуге өз үлесіңді қос`
                        }
                        
                        link={'/'}
                        onClick={showNot}
                        bgImg={`https://pbs.twimg.com/media/EKjQnXNWkAAOe7b.jpg`}
                    />
                
    </div>
    )

}

export default EventCalendar;