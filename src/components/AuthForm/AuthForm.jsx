import { useState } from 'react';
import Button from '../../elements/Button/Button';
import useAuth from '../../hooks/useAuth';
import './AuthForm.css';
import Loading from '../Loading/Loading';
import Warning from '../Warning/Warning';

const AuthForm = ({style}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus ] = useState('');

    const { signInUser } = useAuth(setLoading, setMessage, setStatus);

    const loginUser = async (e) => {
        try {
            e.preventDefault();
            await signInUser({email, password});
        } catch(err) {
            console.log(err);
        }
        setTimeout(clearState, 1800);
    }

    const clearState = () => {
        setEmail('');
        setPassword('');
        setMessage('');
        setStatus('');
        setLoading(false);
      }


    return(
        <div className='authform-container' style={style}>
            <div className='auth-label'>
                <h1> Войти </h1>
                <img src={require('../../media/leaf.jpg')} style={{
                    height:'70px',width:'90px'
                }} alt="leaf"/>
            </div>
            <div className='authform-inside'>
                <div className='authform-input'>
                    <input type="email"
                            placeholder='Логин'
                            value={email}
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                                setEmail(e.target.value);
                            }}
                        />
                </div>
                <div className='authform-input'>
                    <input type="password"
                            placeholder='Пароль'
                            value={password}
                            required
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                    />
                </div>
                <br/>
                <Button
                    text="Войти"
                    hover='btnHover'
                    style={{color:'white', padding:'25px 35px'}}
                    onClick={loginUser}
                />
                <div className='loading-div' style={{
                    width:'100%',
                    height:'auto',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                { loading &&
                <Loading/> 
              }
                </div>
                

            </div>
            <Warning status={status}>
                {message}
            </Warning>
        </div>
    )
}

export default AuthForm;