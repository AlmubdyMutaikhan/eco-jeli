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


import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';


const MyClub = ({style}) => {

    const {isAuthenticated} = useAuth();
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);
    const {getClub, updateClubStruct, saveClubData} = useClub(setLoading, setMsg, setStatus);
    const [clubName, setClubName] = useState('loading...');
    const [logo, setLogo] = useState('');
    const [city, setCity] = useState('loading...');
    const [description, setDescription] = useState('loading...');

    const [members, setMembers] = useState([]);
    const [origMembers, setOrigMembers] = useState([]);
 
    const [clubObj, setClubObj] = useState({});
    const [editMode, setMode] = useState(false); 
    const [editMode2, setMode2] = useState(false); 
    
    const [logoFile, setLogoFile] = useState(null);

    const uploadImage = () => {
        const storageRef = ref(storage, `/logos/logo-${clubObj._id}.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, logoFile);
            setLoading(true);
            uploadTask.on("state_changed", 
                () => {},
                (err) => {
                    console.log(err);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(res => {
                        localStorage.setItem('img', res);
                        updateClubData();

                    })
            });
    }

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


    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setLogo(objectUrl);
        setLogoFile(file);
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

    const setCities = () => {
        const cities = ['Выберите город/школу', 'Караганда НИШ ХБН', 'Көкшетау НИШ ХБН'];
        const options = cities.map((city, key) =>  <option value={city} key={key}>{city}</option>)
        return <select className='select' onChange={(e) => {
            setCity(e.target.value);
        }}>
               {options}                  
              </select>
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

    const reset = () => {
                setClubName(clubObj.name);
                setCity(clubObj.city);
                setLogo(clubObj.logo);
                setDescription(clubObj.description);
    }


    const updateClubData = async () => {
        try {
            const user = await isAuthenticated();
            
            if(user.status && user.payload) {
                const club = {description, clubName, city, logo : localStorage.getItem('img') ? localStorage.getItem('img') : logo};
                const res = await saveClubData(user.payload.user._id, club);
                if(res) {
                    setClubObj({description, clubName, city, logo : localStorage.getItem('img') ? localStorage.getItem('img') : logo, _id:clubObj._id});
                    setTimeout(()=>{
                        setStatus(false);
                        setMode(false);
                        localStorage.removeItem('img');
                    }, 1100);
                }
               
            }
        } catch(err) {
            console.log(err);
        }
    }


    const fullUpdate = async () => {
        if(logoFile) {
            uploadImage();
        } else {
            updateClubData();
        }
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
                        <br/>
                        {
                            editMode && <input type='file' className='avatar-file-submit' onChange={fileHandler} />
                        }

                    </div>
                   
                    <div className='myclub-profile-data'>
                        <div className='myclub-profile-data-item'>
                            <p>Город:</p>
                            {!editMode && <p className='myclub-data-value'>{city}</p> }
                            {editMode && 
                                setCities()
                            }
                            
                        </div>
                        <div className='myclub-profile-data-item'>
                            <p>Название:</p>
                            {!editMode  && <p className='myclub-data-value'>{clubName}</p>}
                            {editMode && 
                                <input type="text" placeholder='Название клуба...' value={clubName} required
                                    onChange={(e) => {
                                        setClubName(e.target.value);
                                    }}
                                />
                            }
                        </div>
                        <div className='myclub-profile-data-item'>
                    
                                <p>ID клуба</p>
                                <p className='myclub-data-value'>{clubObj._id}
                                </p>

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
                        {editMode && <textarea onChange={(e) => {
                            setDescription(e.target.value);
                        }} value={description}>
                            
                            </textarea>}
                    </div>
                    
                </div>
            </div>
            
            <div className='myclub-profile-buttons'>
                {!editMode && <Button text={'Журнал'} style={{color:'white', fontWeight:'bold'}}/>}
                {editMode && <Button text={'Сохранить'} 
                                onClick={fullUpdate}
                            style={{color:'white', fontWeight:'bold'}}/>}
                <Button text={editMode ? 'Сбросить' :'Редактировать'} 
                        onClick={() => {
                            setMode(prev => !prev);
                            reset();
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
                    {status && <Warning status="ok" style={{
                        position:'fixed',
                        right:'10px',
                        bottom:'20px',
                        width:'300px',
                        height:'auto',
                        textAlign:'center'
                    }}>
                        <p style={{fontSize:'27px', fontWeight:'bold'}}>Успех!</p>
                        <br/>
                        {msg}
                        </Warning>
                    }
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
                    <TabPanel>
                        {getMembers('org')}
                        {editMode2 && <EditPartCard addUser={addUser}/>}
                    </TabPanel>
                    <TabPanel>
                        {getMembers('admin')}
                        {editMode2 && <EditPartCard addUser={addUser}/>}
                    </TabPanel>
                    <TabPanel>
                        {getMembers('prt')}
                        {editMode2 && <EditPartCard addUser={addUser}/>}
                    </TabPanel>

                </Tabs>
            </div>
            <Footer/>
        </div>
    )
}

export default MyClub;