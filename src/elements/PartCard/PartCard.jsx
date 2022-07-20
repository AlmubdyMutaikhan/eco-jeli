import Button from "../Button/Button";

const PartCard = ({fname, sname, email, phone, editMode, deletePrt, id}) => {
    return (
        <div className='participant-card'>
                            <h3 style={{
                                color:'#75a20b'
                            }}>{fname} {sname}</h3>
                            <br/>
                            <p style={{
                                fontWeight:'bold'
                            }}>Контакты:</p>
                            <br/>
                            <div className='contacts'>
                                <p>email: {email}</p>
                                <p>phone: {phone}</p>
                            </div>
                          {editMode && <Button text={'Удалить'} style={{
                                        color:'white',
                                        fontWeight:'bold',
                                        background:'red',
                                        width:'30%',
                                        marginLeft:'70%'
                           }}
                            onClick={() => {deletePrt(email)}}
                           />}
                        </div>
    )
}

export default PartCard;