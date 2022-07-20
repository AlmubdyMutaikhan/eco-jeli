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

    return {
        getClub,
        updateClubStruct
    }
}
