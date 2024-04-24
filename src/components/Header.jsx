import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../img/website-logo.jpg';
import calendar from '../img/calendar-icon.svg';
import phone from '../img/phone-icon.svg';
import '../css/Header.css';

const Header = () => {
    const [activeButton, setActiveButton] = useState('about-item');

    const setButton = (page) => {
        setActiveButton(page);
    }

    return (
        <header className="header">
            <div className="header-logo-box">
                <a href="#">
                    <img src={logo} alt="логотип сайта" className="header-logo-item"/>
                </a>
            </div>
            <nav>
                <ul className="header-nav-list">
                    <li>
                        <Link 
                            className={`header-nav-list__item about-item ${activeButton === 'about-item' ? 'active' : ''}`} 
                            to="/medical-website" 
                            onClick={() => setButton('about-item')}
                        >
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`header-nav-list__item services-item ${activeButton === 'services-item' ? 'active' : ''}`}  
                            to="/medical-website/services" 
                            onClick={() => setButton('services-item')}
                        >
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/medical-website/specialists"
                            className={`header-nav-list__item specialists-item ${activeButton === 'specialists-item' ? 'active' : ''}`} 
                            onClick={() => setButton('specialists-item')}
                        >
                            Специалисты
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/medical-website/patients" 
                            className={`header-nav-list__item patients-item ${activeButton === 'patients-item' ? 'active' : ''}`}
                            onClick={() => setButton('patients-item')}>
                            Пациентам
                        </Link>
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
            <Link to="/medical-website/logIn">
            <button className="primary-button header-button" onClick={() =>setActiveButton('')}>
                войти
            </button>
            </Link>
        </header>
    )
}

export default Header;