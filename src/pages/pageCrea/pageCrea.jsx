import React from "react";
import Header from '../../components/header/header';
import DisplayCard from "./displayCard";
import Contact from "../contact/contactContent";
import Footer from '../../components/footer/footer';

const PageCrea = () => {
    return(
        <>
            <Header />
            <DisplayCard />
            <Contact />
            <Footer />
        </>
    )
}
export default PageCrea;