import Header from '../../elements/Header/Header';
import './Events.css';

const Events = () => {
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
                <div className='calendar'>

                </div>
            </div>
    )
}

export default Events;