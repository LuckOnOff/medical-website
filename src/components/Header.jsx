import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../img/website-logo.png';
import calendar from '../img/calendar-icon.svg';
import phone from '../img/phone-icon.svg';
import '../css/Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-logo-box">
                <Link to="/">
                    <img src={logo} alt="логотип сайта" className="header-logo-item"/>
                </Link>
            </div>
            <nav>
            <ul className="header-nav-list">
                <li>
                    <NavLink 
                        className={`header-nav-list__item about-item ${location.pathname === '/' ? 'active' : ''}`} 
                        to="/" 
                    >
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={`header-nav-list__item services-item ${location.pathname === '/services' ? 'active' : ''}`}  
                        to="/services" 
                    >
                        Услуги
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={`header-nav-list__item specialists-item ${location.pathname === '/specialists' ? 'active' : ''}`} 
                        to="/specialists"
                    >
                        Специалисты
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={`header-nav-list__item patients-item ${location.pathname === '/patients' ? 'active' : ''}`} 
                        to="/patients"
                    >
                        Пациентам
                    </NavLink>
                </li>
            </ul>
        </nav>
            <section className="header-connections">
                <section className="header-connections__schedule">
                    <div className="schedule-icon-box">
                        <img src={calendar} alt="Календарь" className="schedule-icon-item"/>
                    </div>
                    <span className="schedule-text-time">
                        с 09:00 - 20:00 
                    </span>
                    <span className="schedule-text-days">
                        пн-сб
                    </span>
                </section>
                <section className="header-connections__phone">
                <a href="tel:+7 900 333 10 40" className="phone-box">
                    <div className="phone-icon-box">
                        <img src={phone} alt="Телефон" className="phone-icon-item"/>
                    </div>
                    <span className="phone-number">
                        +7 900 333 10 40 
                    </span>
                </a>
                </section>
            </section>
            <Link to="/logIn">
            <button className="primary-button header-button">
                войти
            </button>
            </Link>
        </header>
    )
}

export default Header;