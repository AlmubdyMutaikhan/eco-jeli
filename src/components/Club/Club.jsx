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



    return (
        <div    className='myclub-container'
        id="myclub"
        style={style}>
         
         
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
                            marginTop:'30px'
                        }}>
            <TabList>
            <Tab>Руководитель</Tab>
            <Tab>SMM-специалист</Tab>
            <Tab>Организатор</Tab>
            <Tab>Админы</Tab>
            <Tab>{key}</Tab>
            </TabList>
            <TabPanel>
                {getMembers('leader')}
                
            </TabPanel>
            <TabPanel>
                {getMembers('smm')}
                        
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