import './MyClub.css';
import Button from '../../elements/Button/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../../elements/Header/Header';
import Footer from '../Footer/Footer';
const MyClub = ({style}) => {
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
                        
                    </div>
                    <div className='myclub-profile-data'>
                        <div className='myclub-profile-data-item'>
                            <p>Город:</p>
                            <p className='myclub-data-value'>Караганда</p>
                        </div>
                        <div className='myclub-profile-data-item'>
                            <p>Название:</p>
                            <p className='myclub-data-value'>Эко-шахтеры</p>
                        </div>
                        <div className='myclub-profile-data-item'>
                            <p>ID клуба</p>
                            <p className='myclub-data-value'>abced45890</p>
                        </div>
                    </div>
                </div>
                <div className='myclub-profile-about'>
                    <h2 className='underlined'>О клубе</h2>
                    <p>
                    Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.
                    </p>
                </div>
            </div>
            
            <div className='myclub-profile-buttons'>
                <Button text={'Журнал'} style={{color:'white', fontWeight:'bold'}}/>
                <Button text={'Написать обращение'} style={{color:'white', fontWeight:'bold'}}/>
                
            </div>

            <div className='myclub-struct-container'>
                <h2 className='underlined'>Структура клуба</h2>
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
                        <div className='card'>
                            <h3>Name name</h3>
                            <p>Контакты:</p>
                            <div className='contacts'>
                                <p>email: ali@gmail.com</p>
                                <p>phone: +7 700 000 00 00</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
            <Footer/>
        </div>
    )
}

export default MyClub;