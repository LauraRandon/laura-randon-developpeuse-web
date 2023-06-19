import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoLinkedin from '../../assets/img/logo-linkedin.png';
import LogoGithhub from '../../assets/img/logo-github.png';
import "./header.css";

const Header = () => {
    return(
        <section className='section-header'>
            <div className="little-nav" id="home"> 
                <p className="text">Portfolio</p>
                <a href="https://www.linkedin.com/in/laura-randon/" target="_blank" rel='noreferrer'><img src={LogoLinkedin} alt="logo linkedin portfolio laura randon" width="18px" height="18px" className="rs" /></a>
                <a href="https://github.com/LauraRandon?tab=repositories" target="_blank" rel='noreferrer'><img src={LogoGithhub} alt="logo github portfolio laura randon" width="18px" height="18px" className="rs" /></a>
            </div>
            <header className="header">
                <a href="/home"><h1 className="header-title">Laura Randon</h1></a>
                <nav className="header-nav">
                    <a href="/home" className="nav-title"> 
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Home'
                            end to='/home'
                        >
                            Home
                        </NavLink>
                    </a>
                    <a href="/creations" className='nav-title'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Mes Créations'
                            end to='/creations'
                        >
                            Mes créations
                        </NavLink>
                    </a>
                    <a href="/projet" className='nav-title'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Mon projet'
                            end to='/project'
                        >
                            Mon projet
                        </NavLink>
                    </a>
                    <a href="/contact" className='nav-title'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Me contacter'
                            end to='/contact'
                        >
                            Me contacter
                        </NavLink>
                    </a>
                </nav>
            </header>
        </section>
    )
}

export default Header