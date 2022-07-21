import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PartCard from '../../elements/PartCard/PartCard';
import Footer from '../Footer/Footer';

const Club = ({city, name, _id, key, last, description, members, logo, style}) => {

    const getMembers = (type) => {
        
        const memberRes = members.map((member, key) => {
            //console.log(key);

            return type === member.role && <PartCard 
                    fname={member.fname}
                    sname={member.sname}
                    phone={member.phone}
                    email={member.email}
                   
                    id={key}
                 
            />
        })

        //console.log(memberRes);
        return memberRes;
    }

    const setLen = (type) => {
        let col = 1;
        members.map((member) => {
            if(member.role === type) {col+=1;}
        })
        setHeight(col);
    }


    const [height, setHeight] = useState(1);

    const tabStyle = last ? {} : {
        zIndex:'222',
        position:'absolute',
        width:'60%'
    };


    return (
        <div    className='myclub-container'
        id="myclub"
        style={{
            height:(height*45 + 'vh')
        }}>
         
         
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
                    <p className='myclub-data-value'>{city}</p> 
                </div>
                <div className='myclub-profile-data-item'>
                    <p>Название:</p>
                    <p className='myclub-data-value'>{name}</p>
                    
                </div>
                <div className='myclub-profile-data-item'>
            
                        <p>ID клуба</p>
                        <p className='myclub-data-value'>{_id}
                        </p>

                </div>
            </div>
        </div>
        <div className='myclub-profile-about'>
            <div className='myclub-profile-about-label'>
                <h2 className='underlined'>О клубе</h2>
            </div>
            <div className='myclub-profile-about-text'>
                 <p>
                    {description}
                    </p>
                
                 
            </div>
            
        </div>
    </div>

    <div className='myclub-struct-container'>
        <div className='myclub-struct-labels'>
            <div className='myclub-struct-label'>
                <h2 className='underlined'>Структура клуба | {members.length} участников</h2>
            </div>
            
        </div>
      
        <Tabs style={{
                            marginTop:'30px',
                            zIndex:'222',
                          
                           background:'white'
                        }}>
            <TabList>
            <Tab style={{
                background:'white'
            }}
                onClick={() => {
                    setLen('leader');
                }}
            >Руководитель</Tab>
            <Tab style={{
                background:'white'
            }} onClick={() => {
                setLen('smm');
            }}>SMM-специалист</Tab>
            <Tab style={{
                background:'white'
            }} onClick={() => {
                setLen('org');
            }}>Организатор</Tab>
            <Tab style={{
                background:'white'
            }} onClick={() => {
                setLen('admin');
            }}>Админы</Tab>
            <Tab style={{
                background:'white'
            }} onClick={() => {
                setLen('prt');
            }}>Участники</Tab>
            </TabList>
            <TabPanel style={tabStyle}>
                {getMembers('leader')}
                
            </TabPanel>
            <TabPanel style={tabStyle}>
                {getMembers('smm')}
                        
            </TabPanel>
            <TabPanel style={tabStyle}>
                {getMembers('org')}
                        
            </TabPanel>
            <TabPanel style={tabStyle}>
                {getMembers('admin')}
                        
            </TabPanel>
            <TabPanel style={tabStyle}>
                {getMembers('prt')}
                        
            </TabPanel>

        </Tabs>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        {last && <Footer/>}
    </div>

</div>
    )
}

export default Club;