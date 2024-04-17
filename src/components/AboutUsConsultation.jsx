import React from "react";
import callWoman from "../img/main-consultation-woman.png";
import "../css/AboutUsConsultation.css";

const AboutUsConsultation = () => {
    return (
        <section className="main-consultation">
            <section className="main-consultation__connection">
                <h2 className="connection-title">Онлайн консультация специалиста по аудио и видео связи, бесплатно.</h2>
                <p className="connection-subtitle">Укажите cвой номер телефона, мы перезвоним
                и подберем для вас удобное время для консультации.
                <span className="connection-subtitle-two">Или позвоните нам сами — <a href="tel:+7 900 333 10 40" className="connection-subtitle__tel">+7 900 333 10 40</a></span></p>
                <form name="call" className="connection-form">
                    <label htmlFor="phone" className="connection-form__label">
                        <input type="tel" autoComplete="on" placeholder="Телефон" className="connection-form__input" id="phone"/>
                        <button 
                            className="primary-button connection-form__button" 
                            type="submit"
                        >
                            Записаться на прием
                        </button>
                    </label>
                </form>
                <p className="connection-agreement-text">Записываясь на услугу вы даёте согласие
                на <a href="#" className="personal-data">обработку своих персональных данных</a></p>
            </section>
            <section className="main-consultation__img">
                <div className="main-consultation__img-box">
                    <img src={callWoman} alt="Позвоните нам" className="main-consultation__img-item"/>
                </div>
            </section>
        </section>
    )
}

export default AboutUsConsultation;