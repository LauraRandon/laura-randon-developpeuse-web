import React from "react";
import Header from '../../components/header/header';
import HomeBanner from "./homeBanner";
import DisplayCard from "./displayCard";
import CTA from "../../components/cta/cta";
import ProjectContent from "../project/projectContent";
import Contact from "../contact/contactContent";
import Footer from '../../components/footer/footer';
import './home.css';

const Home = () => {
    return(
        <>
            <Header />
            <HomeBanner />
            <DisplayCard />
            <CTA />
            <ProjectContent />
            <Contact />
            <Footer />
        </>
    )
}
export default Home;