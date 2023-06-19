import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Creation from '../pages/creation/creation';
import PageCrea from '../pages/pageCrea/pageCrea';
import Project from '../pages/project/project';
import Contact from '../pages/contact/contact';
import NoMatch from '../pages/noMatch/noMatch';



const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/creation/:id" element={<Creation />} />
                <Route exact path="/creations" element={<PageCrea />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;