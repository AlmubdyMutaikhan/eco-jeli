import axios from 'axios';
import {eraseCookie, getCookie, setCookie} from '../utils/cookies';

export default function useAuth( setLoading, setMessage, setStatus ) {

    const isAuthenticated = async () => {
        const token = getCookie('token');
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
            setCookie('token', user.data.token);
            setCookie('super', user.data.super);
            setLoading(false);
            setMessage("Успешная авторизация!");
            setStatus('ok');

            setTimeout(async () => {
                setCookie('auth',true);
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
        eraseCookie('token');
        eraseCookie('auth');
        window.location.reload();
    } 


    return {
        isAuthenticated,
        signInUser,
        signoutUser,

    }
}