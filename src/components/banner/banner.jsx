import React from "react";
import './banner.css';

const Banner = (props) => {
    return(
    <div className="banniere">
        <img src={props.src} alt="Bannière portfolio Laura Randon" />
    </div>
    )
}

export default Banner;