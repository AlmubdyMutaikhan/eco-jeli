import { useState } from "react";
import Button from "../Button/Button";

const EditPartCard = ({addUser}) => {
    const [fname, setFName] = useState('');
    const [sname, setSName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('u');


    return (
        <div className='participant-card'>
                        <h3>Добавление нового участника</h3>
                            <br/>
                            <p style={{
                                fontWeight:'bold'
                            }}>ФИО:</p>
                            <br/>
                            <input type={'text'} required 
                                onChange={(e) => {
                                    setFName(e.target.value);
                                }}
                                placeholder="Имя"/>
                            <br/>
                            <input type={'text'}
                                    onChange={
                                        (e) => {
                                            setSName(e.target.value)
                                        }
                                    }
                                    placeholder="Фамилия"/>
                            <br/>
                            <p style={{
                                fontWeight:'bold'
                            }}>Контакты:</p>
                            <br/>
                            <div className='contacts'>
                                <input type={'text'} required 
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                placeholder="e-mail"/>
                                <br/>
                                <input type={'text'} 
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                style={{
                                    marginTop:'15px'
                                }} placeholder="номер телефона"/>
                            </div>
                            <br/>
                            <p style={{
                                fontWeight:'bold'
                            }}>Роль:</p>
                            <br/>
                            <select className='select' onChange={(e) => {
                                setRole(e.target.value);
                            }}
                            value={role}
                            >
                                    <option value='u'>Выберите роль</option>
                                    <option value='leader'>Руководитель</option>
                                    <option value='smm'>SMM-специалист</option>
                                    <option value='org'>Организатор</option>
                                    <option value='admin'>Админ</option>
                                    <option value='prt'>Участник</option>
                            </select>
                            <br/>
                            <Button text={'Добавить'}
                                    onClick={() => {
                                        addUser({fname, sname, role, email, phone});
                                        
                                    }}
                                    style={{
                                        color:'white',
                                        fontWeight:'bold'
                                    }}
                                    />
                        </div>
    )
}

export default EditPartCard;