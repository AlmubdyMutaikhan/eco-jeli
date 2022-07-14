import Button from '../Button/Button';

const Header = ({title, text, mtop}) => {
    return(
        <>
            <Button text={'Eco Jeli'} style={{width:'120px'}}/>
                 <div className='header-container' style={{
                    marginTop:mtop
                 }}>
                    <h1>{title}</h1>
                    <img src={require('../../media/leaf.jpg')} alt="leaf"/>
                 </div>
                 <div className='about-text-text' style={{
                    width:'200px',
                    marginTop:mtop
                 }}>
                    {text}
                 </div>
        </>
    )
}

export default Header;