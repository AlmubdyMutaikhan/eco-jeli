import axios from 'axios';
import { getCookie } from '../utils/cookies';

export default function useEvent() {

    const getAllEvents = async () => {
        try {
            const res = await axios.get('/event/all');
            return res.data.events;
        } catch(err) {
            console.log(err);
            return null;
        }
    }


    const addEvent = async (body) => {
        try {
            const res = await axios.post(('event/new?token='+getCookie('token')), body);
            return res.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    const removeEvent = async (id) => {
        try {
            const res = await axios.delete(('/event/'+id)+'?token='+(getCookie('token')));
            return res.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
    return {
        getAllEvents,
        addEvent,
        removeEvent
    }
}

