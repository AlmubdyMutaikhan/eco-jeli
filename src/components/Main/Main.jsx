import NewsSlider from '../NewsSlider/NewsSlider';
import About from '../About/About';
import './Main.css';

const Main = () => {
    return(
        <div className="main-container">
            <div className='main-side'>
                <img src={require('../../media/manytreeline.jpg')} alt="tree"/>
            </div>
            <div className='main-content'>
               <NewsSlider style={{height:'50%', width:'100%'}}/>
               <About/>
            </div>
            <div className='main-side' style={{alignItems:'flex-end'}}>
                <img src={require('../../media/onetreeline.jpg')} alt="tree"/>
            </div>
        </div>
    )
}



export default Main;