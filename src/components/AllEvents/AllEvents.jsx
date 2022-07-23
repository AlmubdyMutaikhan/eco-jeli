import { useEffect, useState } from 'react';
import EventCardFull from '../../elements/EventCardFull/EventCardFull';


import useEvent from '../../hooks/useEvent';
import './AllEvents.css';

const AllEvents = () => {
    const [events, setEvents] = useState([{
        avatar:'aa',
        desc:'aaa'
    }]);
    const {getAllEvents} = useEvent();

    const loadEvents = async () => {
        const eventsDoc = await getAllEvents();
        if(eventsDoc && eventsDoc.length > 0) {
            setEvents(eventsDoc);
           
            } 
        
        console.log(eventsDoc);
    }

    useEffect(() => {
        loadEvents();
    }, []);


    return (
        <div className="all-events">
            {events.map((event, key) => {
                return <EventCardFull title={event.name}
                date={event.date}
                key={key}
                id={key}
                avatar={event.avatar}
                link={event.link}
                desc={event.desc}
                />
                
            })}
        </div>
    )
}

export default AllEvents;