import React from "react";

const Card = ({ id, title, cover, name, language, guide }) => {
    return(
        <div key={id} className="container-crea">
            <main className="crea">
                <a href={'/creation/' + id} className="card" target="_blank" rel="noreferrer">
                    <header className="card-header">
                        <h3 className="card-title">{title}</h3>
                        <img src={cover} alt={name + ' - ' + title + ' by Laura Randon '} className="fullwidth" />
                    </header>
                    <div className="card-div-name">
                        <h4 className="card-name">{name}</h4>
                    </div>
                    <div className="card-footer">
                        <p className="card-language">{language}</p>
                        <p className="card-guide">{guide}</p>
                    </div>
                </a>   
            </main>     
        </div>
    )
}

export default Card;