import React from "react";
import { Link } from 'react-router-dom';
import vk from "../img/social-network-vk-icon.svg";
import tg from "../img/social-network-tg-icon.svg";
import email from "../img/email-icon.svg";
import logo from "../img/website-logo.png";
import "../css/Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Делает прокрутку плавной, если браузер поддерживает
        });
    };
    return (
        <footer className="footer">
            <section className="footer-media-network">
                <a href="https://vk.com" className="footer-media-network__vk-box">
                    <img src={vk} alt="Вконтакте" className="footer-media-network__vk"/>
                </a>
                <a href="https://telegram.org/" className="footer-media-network__tg-box">
                    <img src={tg} alt="Телеграм" className="footer-media-network__tg"/>
                </a>
                <a href="mailto:anyemail123@gmail.com" className="footer-media-network__email-box">
                    <img src={email} alt="Почта" className="footer-media-network__email"/>
                </a>
            </section>
            <section className="footer__adaptive-container">
                <section className="footer-license">
                    <div className="footer-license__item">
                    ООО «Дент», лицензия №ЛО-86-8681-01868686047 от 13.02.2019
                    </div>
                    <div className="footer-license__date">
                        © 2024
                    </div>
                </section>
                <section className="footer-personal-info">
                    <span className="footer-personal-info__text">
                        Политика в отношении обработки персональных данных
                    </span>
                </section>
            </section>
            <section className="footer-logo-box">
                <Link to="/" onClick={scrollToTop}>
                    <img src={logo} alt="Логотип сайта" className="footer-logo-box__img"/>
                </Link>
            </section>
        </footer>
    )
}

export default Footer;