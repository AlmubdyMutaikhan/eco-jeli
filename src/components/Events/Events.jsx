import Header from '../../elements/Header/Header';
import './Events.css';

const Events = () => {
    return(
        <div className="events-section-container">
            <div className='main-side'>
                <img src={require('../../media/manytree.jpg')} alt="tree"/>
            </div>
            <div className='events-main-section'>
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
            <div className='main-side' style={{alignItems:'flex-end'}}>
                <img src={require('../../media/onetree.jpg')} alt="tree"/>
            </div>
        </div>
    )
}

export default Events;