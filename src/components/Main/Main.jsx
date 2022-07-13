import NewsSlider from '../NewsSlider/NewsSlider';

import './Main.css';

const Main = () => {
    return(
        <div className="main-container">
            <div className='main-content'>
               <NewsSlider style={{height:'50%', width:'100%'}}/>
            </div>
        </div>
    )
}



export default Main;