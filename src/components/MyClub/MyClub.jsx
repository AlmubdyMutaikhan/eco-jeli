import './MyClub.css';
import Button from '../../elements/Button/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../../elements/Header/Header';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useClub from '../../hooks/useClub';
import PartCard from '../../elements/PartCard/PartCard';
import EditPartCard from '../../elements/PartCard/EditPartCard';
import Loading from '../Loading/Loading';
import Warning from '../Warning/Warning';

const MyClub = ({style}) => {

    const {isAuthenticated} = useAuth();
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);
    const {getClub, updateClubStruct} = useClub(setLoading, setMsg, setStatus);
    const [clubName, setClubName] = useState('loading...');
    const [logo, setLogo] = useState('');
    const [city, setCity] = useState('loading...');
    const [description, setDescription] = useState('loading...');

    const [members, setMembers] = useState([]);
    const [origMembers, setOrigMembers] = useState([]);

    const [clubObj, setClubObj] = useState({});
    const [editMode, setMode] = useState(false); 
    const [editMode2, setMode2] = useState(false); 

    


    const loadData = async () => {
        try {
            const user = await isAuthenticated();

            if(user.status && user.payload) {
                const doc = await getClub(user.payload.user._id);
                const club = doc.data.club;
                setClubObj(club);
                setClubName(club.name);
                setCity(club.city);
                setLogo(club.logo);
                setDescription(club.description);
                setMembers(club.members);
                setOrigMembers(club.members);
                //console.log(logo);
            }
        } catch(err) {
            console.log(err);
        }
    }


    const updateMembers = async () => {
        try {
            const user = await isAuthenticated();
            
            if(user.status && user.payload) {
                const res = await updateClubStruct(user.payload.user._id, members);
                setTimeout(()=>{
                    setStatus(false);
                }, 1100);
                console.log(res.data);
                setMembers(members);
                setOrigMembers(members);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const getMembers = (type) => {
        const memberRes = members.map((member, key) => {
            //console.log(key);
            return type === member.role && <PartCard 
                    fname={member.fname}
                    sname={member.sname}
                    phone={member.phone}
                    email={member.email}
                    editMode={editMode2}
                    id={key}
                    deletePrt={deletePrt}
            />
        })

        //console.log(memberRes);
        return memberRes;
    }

    const addUser = (member) => {
        setMembers(prev => [...prev, member]);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deletePrt = (email) => {
        const index = members.findIndex(val => val.email === email);
        members.splice(index, 1);
        const newArr = [...members];
        setMembers(newArr);
    }


    return(
        <div    className='myclub-container'
                id="myclub"
                style={style}>
                    <br/>
                    <br/>
               <div className='green-header'>
                    <Header
                    title="Мой эко-клуб"
                    text="Бла бла бла бала бола балобол балоабол" 
                    
                    icon={require('../../media/calendaricon.jpeg')}
                    calendaricon="calendaricon"
                    />    
            </div> 
            <div className='myclub-data-container'>
                <div className='myclub-profile-container'>
                    <div className='myclub-avatar'>
                        <img src={logo}
                             alt="logo"
                        />
                    </div>
                    <div className='myclub-profile-data'>
                        <div className='myclub-profile-data-item'>
                            <p>Город:</p>
                            {!editMode && <p className='myclub-data-value'>{city}</p> }
                            {editMode && 
                                <select className='select'>
                                    <option>Выберите город</option>
                                    <option>Нур-Султан</option>
                                    <option>Караганда</option>
                                    <option>Алматы</option>
                                    <option>Шымкент</option>
                                    <option>Актау</option>
                                    <option>Атырау</option>
                                    <option>Кокшетау</option>
                                    <option>Караганда</option>
                                </select>
                            }
                            
                        </div>
                        <div className='myclub-profile-data-item'>
                            <p>Название:</p>
                            {!editMode  && <p className='myclub-data-value'>{clubName}</p>}
                            {editMode && 
                                <input type="text" placeholder={clubName} required/>
                            }
                        </div>
                        <div className='myclub-profile-data-item'>
                            <p>ID клуба</p>
                            <p className='myclub-data-value'>{clubObj._id}</p>
                        </div>
                    </div>
                </div>
                <div className='myclub-profile-about'>
                    <div className='myclub-profile-about-label'>
                        <h2 className='underlined'>О клубе</h2>
                    </div>
                    <div className='myclub-profile-about-text'>
                        { !editMode && <p>
                            {description}
                            </p>
                        }
                        {editMode && <textarea>
                            {description}
                            </textarea>}
                    </div>
                    
                </div>
            </div>
            
            <div className='myclub-profile-buttons'>
                {!editMode && <Button text={'Журнал'} style={{color:'white', fontWeight:'bold'}}/>}
                {editMode && <Button text={'Сохранить'} style={{color:'white', fontWeight:'bold'}}/>}
                <Button text={editMode ? 'Сбросить' :'Редактировать'} 
                        onClick={() => {
                            setMode(prev => !prev);
                        }}
                        style={ editMode ? {backgroundColor:'red', color:'white',fontWeight:'bold'} : {color:'white', fontWeight:'bold'}}/>
                
            </div>

            <div className='myclub-struct-container'>
                <div className='myclub-struct-labels'>
                    <div className='myclub-struct-label'>
                        <h2 className='underlined'>Структура клуба | {members.length} участников</h2>
                    </div>
                    <div className='myclub-struct-edit-btns'>
                    {editMode2 && <Button text={'Сохранить'}
                        onClick={updateMembers}
                    style={{color:'white', fontWeight:'bold'}}/>}
                    {loading && <Loading/>}
                    {status && <Warning status="ok">
                        {msg}
                        </Warning>}

                    <Button text={editMode2 ? 'Сбросить' :'Редактировать'} 
                        onClick={() => {
                            setMode2(prev => !prev);
                            setMembers(origMembers);
                        }}
                        style={ editMode2 ? {backgroundColor:'red', color:'white',fontWeight:'bold'} : {color:'white', fontWeight:'bold'}}/>
                    </div>
                </div>
              
                <Tabs style={{
                                    marginTop:'30px'
                                }}>
                    <TabList>
                    <Tab>Руководитель</Tab>
                    <Tab>SMM-специалист</Tab>
                    <Tab>Организатор</Tab>
                    <Tab>Админы</Tab>
                    <Tab>Участники</Tab>
                    </TabList>
                    <TabPanel>
                        {getMembers('leader')}
                        {editMode2 && <EditPartCard addUser={addUser}/>}
                    </TabPanel>
                    <TabPanel>
                        {getMembers('smm')}
                        {editMode2 && <EditPartCard addUser={addUser}/>}
                    </TabPanel>
                </Tabs>
            </div>
            <Footer/>
        </div>
    )
}

export default MyClub;