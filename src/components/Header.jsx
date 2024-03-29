import React from "react";
import logo from '../img/logo.jpg';
import location from '../img/location-icon.svg';
import calendar from '../img/calendar-icon.svg';
import phone from '../img/phone-icon.svg'
import '../css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo-box">
                <a href="#">
                    <img src={logo} alt="логотип сайта" className="header-logo-item"/>
                </a>
            </div>
            <nav>
                <ul className="header-nav-list">
                    <li><a href="#" className="header-nav-list__item">О нас</a></li>
                    <li><a href="#" className="header-nav-list__item">Услуги</a></li>
                    <li><a href="#" className="header-nav-list__item">Специалисты</a></li>
                    <li><a href="#" className="header-nav-list__item">Пациентам</a></li>
                    <li><a href="#" className="header-nav-list__item">Контакты</a></li>
                </ul>
            </nav>
            <section className="header-connections">
                <section className="header-connections__adress">
                    <a href="https://yandex.ru/maps/213/moscow/house/volgogradskiy_prospekt_4a/Z04YcABgTEUGQFtvfXtycHxhYA==/?ll=37.740006%2C55.739554&z=11.71" target="_blank" className="adress-box">
                        <div className="adress-icon-box">
                            <img src={location} alt="Местоположение" className="adress-icon-item"/>
                        </div>
                        <p className="adress-text">
                            Москва, Волгоградский просп., 4А
                        </p>
                    </a>
                </section>
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
                <a href="tel:+79003331040" className="phobe-box">
                    <div className="phone-icon-box">
                        <img src={phone} alt="Телефон" className="phone-icon-item"/>
                    </div>
                    <span className="phone-number">
                        +7 900 333 10 40 
                    </span>
                </a>
                </section>
            </section>
            <button className="header-button">
                Заказать звонок
            </button>
        </header>
    )
}

export default Header;