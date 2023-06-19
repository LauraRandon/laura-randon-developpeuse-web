import React from "react";
import Creation from "../../assets/data/creation";
import Card from "./card";
import './pageCrea.css';

const DisplayCard = () => {
    return(
        <section className="creation-container">
            <h2 id="crea">Découvre mes créations et mon univers</h2>
            <hr class="deco-h2"></hr>
            <div className="div-creation">
                {Creation.map(({ id, title, cover, name, language, guide }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                        name={name}
                        language={language}
                        guide={guide}
                    />
                ))}
            </div>
        </section>
    )
}

export default DisplayCard;