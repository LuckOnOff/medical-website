import React from "react";
import doctor from "../img/main-description-doctor-icon.svg";
import armchair from "../img/main-description-armchair-icon.svg";
import location from "../img/location-icon.svg";
import "../css/MainDescription.css";



const MainDescription = () => {
    return (
        <section className="main-description">
            <div className="info-decorate-container">
            <section className="main-description__info">
                <p className="info-conteiner__location">— Стоматология в Москве</p>
                <h1 className="info-conteiner__title">Лечение зубов в тот же день</h1>
                <p className="info-conteiner__subtitle">Мы проведем полную консультацию, профессиональную
                гигиену полости рта, лечение зубов и десен</p>
                <button className="primary-button info-conteiner__button">Записаться на приём</button>
            </section>
            </div>
            <section className="main-description__pluses">
                <div className="main-description__pluses-team">
                    <div className="pluses-team__icon-box">
                        <img src={doctor} alt="Команда" className="pluses-team__icon"/>
                    </div>
                    <div className="pluses-team__text-box">
                        <p className="pluses-team__text">Команда квалифицированных специалистов</p>
                    </div>
                </div>
                <div className="main-description__pluses-cabinet">
                    <div className="pluses-cabinet__icon-box">
                        <img src={armchair} alt="Кабинет" className="pluses-cabinet__icon"/>
                    </div>
                    <div className="pluses-cabinet__text-box">
                        <span className="pluses-cabinet__amount">3</span>
                        <p className="pluses-cabinet__text">стоматологических кабинета</p>
                    </div>
                </div>
                <div className="main-description__pluses-location">
                    <div className="pluses-location__icon-box">
                        <img src={location} alt="локация" className="pluses-location__icon"/>
                    </div>
                    <div className="pluses-location__text-box">
                        <p className="pluses-location__text">Удобное расположение</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MainDescription;