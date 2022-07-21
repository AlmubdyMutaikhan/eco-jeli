import axios from 'axios';

export default function useClub(setLoading, setMsg, setStatus) {
    const getClub = async (leaderID) => {
        try {
            const club = await axios.get('/club', {params:{
                leaderID
            }});
            return club;
        } catch(err) {
            console.log(err);
            throw new Error('Упс, что-то пошло не так...');
        }
    }

    const getAllClubs = async (token) => {
        try {   
            const club = await axios.get('/club/all', {params:{
                token
            }});
            console.log(club);
            return club.data.club;
        } catch(err) {
            console.log(err);
            throw new Error('Упс, что-то пошло не так...');
        }
    }

    const updateClubStruct = async (leaderID, members) => {
        try {
            setLoading(true);
            const club = await axios.put('/club', {
                leaderID,
                members
            });
            console.log(club);
            setMsg('Успешно обновили структуру клуба')
            setLoading(false);
            setStatus(true);
            return club;
        } catch(err) {
            console.log(err);
            throw new Error('Упс, что-то пошло не так...');
        }
    }

    const saveClubData = async (leaderID, club) => {
        try {
            setLoading(true);
            console.log(club);
            const res = await axios.post('/club', {
                leaderID,
                club
            });
            console.log(res);
            setMsg('Успешно обновили данные вашего клуба')
            setLoading(false);
            setStatus(true);
            return club;
        } catch(err) {
            console.log(err);
            throw new Error('Упс, что-то пошло не так...');
        }
    }

    return {
        getClub,
        updateClubStruct,
        saveClubData,
        getAllClubs
    }
}
