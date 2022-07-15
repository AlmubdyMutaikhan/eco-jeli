import Button from '../../elements/Button/Button';
import './AuthForm.css';

const AuthForm = ({style}) => {
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
                        />
                </div>
                <div className='authform-input'>
                    <input type="password"
                            placeholder='Пароль'
                    />
                </div>
                <br/>
                <Button
                    text="Войти"
                    hover='btnHover'
                    style={{color:'white', padding:'25px 35px'}}
                />
            </div>
            
        </div>
    )
}

export default AuthForm;