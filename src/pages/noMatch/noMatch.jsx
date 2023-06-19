import React from "react";
import Header from '../../components/header/header';
import NoMatchContent from './noMatchContent';
import Footer from '../../components/footer/footer';

const NoMatch = () => {
    return(
        <>
            <Header />
            <NoMatchContent />
            <Footer />
        </>
    )
}

export default NoMatch;