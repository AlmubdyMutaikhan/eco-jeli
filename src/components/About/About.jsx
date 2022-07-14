import './About.css';
import Button from '../../elements/Button/Button';
import Header from '../../elements/Header/Header';
const About = () => {
    return (
        <div className="about-container">
            <div className='about-text'>
                 <Header    text={'Мы группа лю'}
                            title={'О нас'}/>
                <Button text='Форма обращения'
                        style={{width:'50%', marginTop:'15px'}}
                />
            </div>
            <div className='about-img'>
                <img src={require('../../media/club.jpg')} alt="club"/>
            </div>
        </div>
    )
}

export default About;