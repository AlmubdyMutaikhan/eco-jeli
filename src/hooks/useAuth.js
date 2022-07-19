import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function useAuth( setLoading, setMessage, setStatus ) {
    const navigate = useNavigate();

    const isAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(!token || token === null || token === undefined || token === '') { return false; }
        
        try {
            const status = await axios.get('/auth/payload', {params : { token }});
            if(status.data.msg === 'ok' && status.data.payload) {
                return {status : true, payload : status.data.payload};
            } else {
                return {status : false, payload : null};
            }
        } catch(err) {
            console.log(err);
            return {status : false, payload : null}
        }
    }

    const signInUser = async ({email, password}) => {
        try {
            console.log(email, password);
            setLoading(true);
            const user = await axios.post('/auth/signin', {email, password});
            localStorage.setItem('token', user.data.token);
            setLoading(false);
            setMessage("Успешная авторизация!");
            setStatus('ok');

            setTimeout(async () => {
                localStorage.setItem('auth',true);
                window.location.reload();
            }, 1000);

            return true;
        } catch(err) {
            console.log(err);
            setMessage('Неверный пароль или логин...');
            setLoading(false);
            setStatus('nok');
            throw new Error('Упс, что то пошло не так...');
        }
    }

    const signoutUser = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        window.location.reload();
    } 


    return {
        isAuthenticated,
        signInUser,
        signoutUser,

    }
}