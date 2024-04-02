import React from "react";
import "../css/AboutUsPatientsTrustUs.css";

const AboutUsPatientsTrustUs = () => {
    return (
        <section className="patients-trust">
            <h2 className="patients-trust__title">Нам доверяют пациенты</h2>
            <section className="patients-trust__reasons">
                <div className="reasons-one">
                    <h3 className="reasons-one__count">1</h3>
                    <p className="reasons-one__title">Честные цены, без хитрых уловок</p>
                    <p className="reasons-one__subtitle">Фиксируем цены в плане лечения, не повышаем в процессе.</p>
                </div>
                <div className="reasons-two">
                    <h3 className="reasons-two__count">2</h3>
                    <p className="reasons-two__title">Опытные Врачи</p>
                    <p className="reasons-two__subtitle">Врачи постоянно совершенствуются 
                    в своей специальности, несмотря 
                    на богатый опыт работы.</p>
                </div>
                <div className="reasons-three">
                    <h3 className="reasons-three__count">3</h3>
                    <p className="reasons-three__title">Комфортные условия</p>
                    <p className="reasons-three__subtitle">Уютная обстановка и отзывчивый
                    персонал сделают поход к стоматологу максимально приятным.</p>
                </div>
            </section>
        </section>
    )
}

export default AboutUsPatientsTrustUs;