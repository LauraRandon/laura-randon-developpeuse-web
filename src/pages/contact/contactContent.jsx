import React from "react";
import tel from '../../assets/img/icon-tel.png'
import mail from '../../assets/img/icon-mail.png'
import linkedin from '../../assets/img/icon-linkedin.png'
import './contact.css';

const ContactContent = () => {
    return(
        <section className="section-contact">
            <h2 id="contact">Contact-moi !</h2>
            <hr className="deco-h2" />
            <div className="container-contact">
                <main className="contact">
                    <div className="tel">
                        <a href="tel:+33635505420"><img src={tel} alt="icon téléphone portfolio laura randon" width="180px" height="180px" /></a>
                        <p>+33 6 35 50 54 20</p>
                    </div>
                    <div className="mail">
                        <a href="mailto:laura.randon@outlook.com"><img src={mail} alt="icon mail portfolio laura randon" width="180px" height="180px" /></a>
                        <p>laura.randon@outlook.com</p>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/laura-randon/" target="_blank" rel='noreferrer' ><img src={linkedin} alt="icon linkedin portfolio laura randon" width="180px" height="180px" /></a>
                        <p>@Laura Randon</p>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default ContactContent;