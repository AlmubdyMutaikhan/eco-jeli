import './About.css';
import Button from '../../elements/Button/Button';
import Header from '../../elements/Header/Header';
const About = ({style}) => {
    return (
        <div className="about-container" style={style}>
            <div className='about-text'>
                <br/>
                <Button text={'Eco Jeli'} style={{width:'120px'}}/>
                <br/>
                 <Header    text={'Мы группа лю'}
                            title={'О нас'}
                            icon={require('../../media/leaf.jpg')}
                            />
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