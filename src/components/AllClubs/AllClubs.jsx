import { useEffect, useState } from "react";
import useClub from "../../hooks/useClub"
import { getCookie } from "../../utils/cookies";
import Club from "../Club/Club";

import Header from "../../elements/Header/Header";
const AllClubs = () => {
    const { getAllClubs } = useClub();
    const [clubs, setClubs] = useState([]);

    const loadClubs = async () => {
        try {
            const token = getCookie('token');
            const clubs = await getAllClubs(token);
            setClubs(clubs);         
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        loadClubs();
    }, []);

    return (
        <>

             <div className='green-header'>
                    <Header
                    title="Все эко-клубы"
                    text="Тут представлены все эко-клубы" 
                    
                    icon={require('../../media/calendaricon.jpeg')}
                    calendaricon="calendaricon"
                    />    
            </div> 
            {clubs.map((club, key) => {
               
                return <> <Club 
                            key={key}
                            name={club.name}
                            description={club.description}
                            logo={club.logo}
                            members={club.members}
                            _id={club._id}
                            city={club.city}
                            last={clubs.length === key + 1}
                />
                <br/>
         
                </>
            }) }
            <br/>
           
        </>
    )
}

export default AllClubs;