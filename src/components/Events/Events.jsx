import { useState } from 'react';
import EventCard from '../../elements/EventCard/EventCard';
import Header from '../../elements/Header/Header';
import './Events.css';

const Events = () => {
    
    const events = [{
        name:'Aa',
        desc:'AAaaa',
        place:'aaa',
        date:'aaa' ,
        avatar:'https://rus.azattyq-ruhy.kz/userfiles/%D0%BA%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD/2009100936484325g.jpg'  
    },
    {
        name:'Aa',
        desc:'AAaaa',
        place:'aaa',
        date:'aaa' ,
        avatar:'https://avatars.mds.yandex.net/i?id=3b5495c213271b6368c176f9a5506b9f-4545247-images-thumbs&n=13'   
    },

    {
        name:'Aa',
        desc:'AAaaa',
        place:'aaa',
        date:'aaa',  
        avatar:'https://avatars.mds.yandex.net/i?id=4f71acfbdb384fa4ed59bddda7dd5c56-4936140-images-thumbs&n=13'  
    },
]

    const [show, setShow] = useState({
        img : events[0].avatar,
        desc: events[0].desc,
    });

    const changeShow = (key) => {
        setShow({img:events[key].avatar, desc:events[key].desc});
    }
    
    return(
            <div className='page-main-section' id="ecoevents">
                <div className='green-header'>
                    <Header
                    title="ЭКО-события"
                    text="Бла бла бла бала бола балобол балоабол" 
                    
                    icon={require('../../media/calendaricon.jpeg')}
                    calendaricon="calendaricon"
                    />
                    
                </div>
                <div className='main-events'>
                    <div className='main-events-cards'>
                        {events.map((event, key) => (
                            <EventCard title={event.name}
                                        date={event.desc}
                                        key={key}
                                        id={key}
                                        changeShow={changeShow}
                            />
                        ))}
                    </div>
                    <div className='main-events-photo'>
                        <img src={show.img} />
                        <p>
                            {show.desc}
                        </p>
                    </div>
                    
                </div>
                
                
            </div>
    )
}

export default Events;