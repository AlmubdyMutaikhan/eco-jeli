import {Link} from 'react-scroll'
import { Link as NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css';
import useAuth from '../../hooks/useAuth';

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


    const [email, setEmail] = useState('');
    const {signoutUser} = useAuth();
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
                      
                            {text[1].menu.about}
                          
                        </Link>
                    </div>
                
                    <div className='navbar-item'>
                        <Link activeClass="active" to="ecoevents" spy={true} offset={-50} smooth={true}>
                          
                                {text[1].menu.calendar}
                             
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        {localStorage.getItem('auth') && localStorage.getItem('token').length > 190 &&
                            <Link activeClass="active" to="myclub" spy={true} offset={-70} smooth={true}>
                     
                                Мой клуб
                      
                        </Link>

                        }
                        {!localStorage.getItem('auth') &&
                        <Link activeClass="active" to="login" spy={true} offset={-70} smooth={true}>
                      
                                {text[1].menu.login}
                          
                        </Link>
                        }
                    </div>
                 
                        {localStorage.getItem('auth') && localStorage.getItem('token').length > 190 &&
                            <img src='https://cdn3.iconfinder.com/data/icons/material-line-thin/1024/enter-128.png'
                                style={{
                                    cursor:'pointer',
                                    height:'50px',
                                    width:'45px',
                                    
                                }}
                                onClick={signoutUser}
                            alt="logout"/>
                        }
                   
                 </div>


            </div>
        </div>
    )
}

export default Navbar;