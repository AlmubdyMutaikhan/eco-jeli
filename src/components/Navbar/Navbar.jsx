import {Link} from 'react-scroll'
import { Link as NavLink } from 'react-router-dom';
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
                    <NavLink to='/'>
                        <h1>Eco Jeli</h1>
                    </NavLink>
                 
                 </div>
                 <div className='navbar-items-container'>

                    <div className='navbar-item'>
                        <Link activeClass="active" to="about" spy={true} offset={-100} smooth={true}>
                            <NavLink to="/">
                            {text[1].menu.about}
                            </NavLink>
                        </Link>
                    </div>
                
                    <div className='navbar-item'>
                        <Link activeClass="active" to="ecoevents" spy={true} offset={-50} smooth={true}>
                            <NavLink to={'/'}>
                                {text[1].menu.calendar}
                            </NavLink>
                            
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link activeClass="active" to="login" spy={true} offset={-70} smooth={true}>
                            <NavLink to={'/'}>
                                {text[1].menu.login}
                            </NavLink>
                        </Link>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Navbar;