import NewsSlider from '../NewsSlider/NewsSlider';
import About from '../About/About';
import './Main.css';
import Events from '../Events/Events';
import AuthPage from '../AuthPage/AuthPage';

const Main = () => {
    return(
        <div className="main-container">
            <img src={require('../../media/manytreeline.jpg')}
                 alt="side trees"
                 style={{
                    position:'fixed',
                    bottom:"10px",
                    left:'10px',
                    height:'30%',
                    width:'16%'
                 }}
                 />
            <div className='main-content'>
               <NewsSlider style={{height:'50%', width:'calc(100% - 10px)'}}/>
               <About style={{paddingRight:'10px'}}/>
               <Events/> 
               <AuthPage/>
            </div>
            <img src={require('../../media/onetreeline.jpg')}
                 alt="side trees"
                 style={{
                    position:'fixed',
                    bottom:"10px",
                    right:'-15px',
                    height:'30%',
                    width:'19%'
                 }}
                 />
        </div>
    )
}



export default Main;