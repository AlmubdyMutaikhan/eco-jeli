import React from "react";
import { NavLink } from "react-router-dom";

const CardEvent = ({title, desc, style, date, place, bgImg, index, link, intro, logo, onClick}) => {
    return(
        <div className="slide-content-container">
                        <div className="slide-content-text">
                            <div className="slide-content-index">
                                <h1><span>{index}/</span>4</h1>
                            </div>
                            <div className="slide-content-title">
                                <h1>{title}</h1>
                                <img className="slide-content-img" src={logo}/>
                            </div>
                            <div className="slide-content-p">
                                <p>
                                    {desc}
                                </p>
                            </div>
                            <div className="slide-content-event">
                                <h3>Өткізілу күні: {date}</h3>
                                <h3>Өту орны: {place}</h3>
                            </div>
                            <div className="slide-content-btn">
                                <p onClick={onClick}>
                                    Тіркелу
                                </p>
                            </div>
                        </div>
                        <div className="slide-content-image" style={{background:`url(${bgImg})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                            
                        </div>
                    </div>
    )
}


export default CardEvent;