import NewsSlider from '../NewsSlider/NewsSlider';
import About from '../About/About';
import './Main.css';
import Events from '../Events/Events';
import AuthPage from '../AuthPage/AuthPage';
import Footer from '../Footer/Footer';

const Main = () => {
    return(
        <div className="main-container">
            <img src={require('../../media/onetreeline.jpg')}
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
               <Footer/>
            </div>
            <img src={require('../../media/onetree.jpg')}
                 alt="side trees"
                 style={{
                    position:'fixed',
                    bottom:"10px",
                    right:'15px',
                    height:'25%',
                    width:'13%'
                 }}
                 />
        </div>
    )
}



export default Main;