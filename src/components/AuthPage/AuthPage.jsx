import Header from '../../elements/Header/Header';
import AuthForm from '../AuthForm/AuthForm';

import './AuthPage.css';

const AuthPage = ({style}) => {
    return(
        <div className="page-main-section"
             id="login"
             style={style}
        >
            <div className='green-header'>
                <Header title="Авторизация"
                        text="Авторизуйтесь, чтобы войти в систему и начать работать"
                        icon={require('../../media/authicon.jpg')}
                        calendaricon="authicon"
                    />
            </div>
            <div className='authform-wrapper'>
                <AuthForm style={{height:'450px',width:'45%'}}/>
            </div>
            
        </div>
    )
}

export default AuthPage;