import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [text, setText] = useState([
        {
            lang:'KZ',
            menu:{
                about:'',
                calendar:'',
                login:'',
            }            
        },
        {
            lang:'RU',
            menu:{
                about:'О нас',
                calendar:'Календарь',
                login:'Войти',
            }            
        }
    ])

    
    return (
        <div className='navbar-wrapper'>
            <div className='navbar-container'>
                 <div className='navbar-logo-container'>
                    <img src={require('../../media/logo.png')}
                         alt="logo"
                    />
                    <h1>Eco Jeli</h1>
                 </div>
                 <div className='navbar-items-container'>
                    <div className='navbar-item'>
                        {text[1].menu.about}
                    </div>
                    <div className='navbar-item'>
                        {text[1].menu.calendar}
                    </div>
                    <div className='navbar-item'>
                        {text[1].menu.login}
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Navbar;