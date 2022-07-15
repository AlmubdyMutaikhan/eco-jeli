
const Header = ({title, text, mtop, icon, calendaricon}) => {
    return(
        <>
                 <div className={'header-container ' + calendaricon } style={{
                    marginTop:mtop
                 }}>
                    <h1 style={{
                     borderBottom:"3px solid #67854D",
                     paddingBottom:'5px'
                    }}>{title}</h1>
                    <img src={icon} alt="icon" />
                 </div>
                 <div className='about-text-text' style={{
                    width:'200px',
                    marginTop:'3px'
                 }}>
                    {text}
                 </div>
        </>
    )
}

export default Header;