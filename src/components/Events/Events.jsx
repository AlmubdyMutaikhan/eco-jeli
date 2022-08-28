import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../elements/Button/Button';
import EventCard from '../../elements/EventCard/EventCard';
import Header from '../../elements/Header/Header';
import useEvent from '../../hooks/useEvent';
import './Events.css';

const Events = () => {
    
    const [events, setEvents] = useState([{
        avatar:'aa',
        desc:'aaa'
    }]);
    const {getAllEvents} = useEvent();

    const loadEvents = async () => {
        const eventsDoc = await getAllEvents();
        if(eventsDoc && eventsDoc.length > 0) {
            setEvents(eventsDoc);
            setShow({img:eventsDoc[0].avatar, desc:eventsDoc[0].desc});
            } 
        
        console.log(eventsDoc);
    }

    useEffect(() => {
        loadEvents();
    }, []);

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
                    text="Тут представлен список эко-событий. " 
                    
                    icon={require('../../media/calendaricon.jpeg')}
                    calendaricon="calendaricon"
                    />
                    
                </div>
                <div className='main-events'>
                    <div className='main-events-cards'>
                        {events.map((event, key) => (
                            <EventCard title={event.name}
                                        date={event.date}
                                        key={key}
                                        id={key}
                                        changeShow={changeShow}
                                        avatar={event.avatar}
                                        link={event.link}
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
                <br/>
                <NavLink to='/events'>
                    <Button text={'Все события'} style={{width:'20%',marginLeft:'80%'}} />
                </NavLink>
                
                
            </div>
    )
}

export default Events;