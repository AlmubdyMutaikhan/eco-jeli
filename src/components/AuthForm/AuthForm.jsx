import Button from '../../elements/Button/Button';
import './AuthForm.css';

const AuthForm = ({style}) => {
    return(
        <div className='authform-container' style={style}>
            <div className='auth-label'>
                Войти в личный кабинет
            </div>
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
            <Button
                text="Войти"
                hover='btnHover'
                style={{color:'white', padding:'25px 35px'}}
            />
        </div>
    )
}

export default AuthForm;