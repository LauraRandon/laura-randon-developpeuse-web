import React from 'react';
import { useState } from "react";
import './collaspe.css';

const Collapse = (props) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <>
            <div onClick={openTabHandler} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!openTab ? <i className="fas fa-angle-down collapse_header_icon"></i> : <i className="fas fa-angle-up collapse_header_icon"></i>}
            </div>
            {openTab && 
                <div className="collapse_content">{props.content}</div>
            }
        </>
    )
}

export default Collapse;