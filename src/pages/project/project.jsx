import React from "react";
import Header from '../../components/header/header';

import ProjectContent from "./projectContent";
import Contact from "../contact/contactContent";
import Footer from '../../components/footer/footer';

const Project = () => {
    return(
        <>
            <Header />
            
            <ProjectContent />
            <Contact />
            <Footer />
        </>
    )
}
export default Project;