import Button from '../Button/Button';

const Header = ({title, text}) => {
    return(
        <>
            <Button text={'Eco Jeli'} style={{width:'30%'}}/>
                 <div className='header-container'>
                    <h1>{title}</h1>
                    <img src={require('../../media/leaf.jpg')} alt="leaf"/>
                 </div>
                 <div className='about-text-text'>
                    {text}
                 </div>
        </>
    )
}

export default Header;