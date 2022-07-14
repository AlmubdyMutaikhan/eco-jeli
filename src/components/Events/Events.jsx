import Header from '../../elements/Header/Header';
import './Events.css';

const Events = () => {
    return(
            <div className='events-main-section' id="ecoevents">
                <div className='events-header'>
                    <Header
                    title="ЭКО-события"
                    text="Бла бла бла бала бола балобол балоабол" 
                    mtop="-20px"
                    />
                    
                </div>
                <div className='calendar'>

                </div>
            </div>
    )
}

export default Events;