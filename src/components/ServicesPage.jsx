import React, { useState } from "react";
import dentalHeal from "../img/main-services-dental-treatment.png";
import hygiene from "../img/main-services-hygiene.png";
import braces from "../img/main-services-braces.png";
import childrensDentistry from "../img/main-services-children's-dentistry.png";
import implants from "../img/main-services-implants.png";
import veneers from "../img/main-services-veneers.png";
import crowns from "../img/main-services-crowns.png";
import surgery from "../img/main-services-surgery.png";
import CreateOffers from "./CreateOffers";
import "../css/ServicesPage.css";

const ServicesPage = ({ openModal }) => {
    const [currentOffers, setCurrentOffers] = useState([
        {id: 1, title: 'Световая пломба', price: '1 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 2, title: 'Лечение кариеса', price: '2 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 3, title: 'Лечение пульпита', price: '3 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 4, title: 'Лечение кисты', price: '4 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'}
    ]);
    const [activeButton, setActiveButton] = useState('dentalHeal');

    const handleButtonClick = (category) => {
        let filteredOffers = allOffers.filter(offer => offer.category === category);
        setCurrentOffers(filteredOffers);
      };

    const allOffers  = [
        {id: 1, title: 'Световая пломба', price: '1 200 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 2, title: 'Лечение кариеса', price: '2 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 3, title: 'Лечение пульпита', price: '3 500 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 4, title: 'Лечение кисты', price: '3 000 руб.', buttonText: 'Записаться', category: 'dentalHeal'},
        {id: 5, title: 'Ультразвук', price: '1 000 руб.', buttonText: 'Записаться', category: 'hygiene'},
        {id: 6, title: 'AirFlow', price: '1 200 руб.', buttonText: 'Записаться', category: 'hygiene'},
        {id: 7, title: 'Ремтерапия', price: '2 000 руб.', buttonText: 'Записаться', category: 'hygiene'},
        {id: 8, title: 'Полировка', price: '2 200 руб.', buttonText: 'Записаться', category: 'hygiene'},
        {id: 9, title: 'Металлические брекеты', price: '54 000 руб.', buttonText: 'Записаться', category: 'braces'},
        {id: 10, title: 'Съёмный аппарат', price: '13 000 руб.', buttonText: 'Записаться', category: 'braces'},
        {id: 11, title: 'Ретенционная пластинка (капа)', price: '10 000 руб.', buttonText: 'Записаться', category: 'braces'},
        {id: 12, title: 'Лечение зубов', price: '1 800 руб.', buttonText: 'Записаться', category: 'childrensDentistry'},
        {id: 13, title: 'Лечение десен', price: '1 500 руб.', buttonText: 'Записаться', category: 'childrensDentistry'},
        {id: 14, title: 'Удаление зуба', price: '2 000 руб.', buttonText: 'Записаться', category: 'childrensDentistry'},
        {id: 15, title: 'Увеличение объема костной ткани', price: '25 000 руб.', buttonText: 'Записаться', category: 'implants'},
        {id: 16, title: 'Операция по установке 1-имплантата Apolonia (Южная Корея)', price: '30 000 руб.', buttonText: 'Записаться', category: 'implants'},
        {id: 17, title: 'Имплантация All-on-4', price: '170 000 руб.', buttonText: 'Записаться', category: 'implants'},
        {id: 18, title: 'MOCK — UP временный винир', price: '2 500 руб.', buttonText: 'Записаться', category: 'veneers'},
        {id: 19, title: 'Винир керамический Е — МАХ Press с нанесением керамических слоёв', price: '20 000 руб.', buttonText: 'Записаться', category: 'veneers'},
        {id: 20, title: 'Восстановление зуба вкладками, виниром, полукоронкои E-max', price: '30 000 руб.', buttonText: 'Записаться', category: 'veneers'},
        {id: 21, title: 'Восстановление зуба коронкой постоянной металлокерамической стандартной', price: '15 000 руб.', buttonText: 'Записаться', category: 'crowns'},
        {id: 22, title: 'Восстановление зуба коронкой временной прямым методом', price: '1 000 руб.', buttonText: 'Записаться', category: 'crowns'},
        {id: 23, title: 'Установка коронки цельнолитой', price: '3 900 руб.', buttonText: 'Записаться', category: 'crowns'},
        {id: 24, title: 'Восстановление зуба коронкой, полукоронкой постоянной цельнокерамической e.max «стандартная эстетика»', price: '18 000 руб.', buttonText: 'Записаться', category: 'crowns'},
        {id: 25, title: 'Удаление зуба мудрости', price: '10 500 руб.', buttonText: 'Записаться', category: 'surgery'},
        {id: 26, title: 'Художественная реставрация зуба', price: '9 000 руб.', buttonText: 'Записаться', category: 'surgery'},
        {id: 27, title: 'Пломбирование канала', price: '6 700 руб.', buttonText: 'Записаться', category: 'surgery'},
        {id: 28, title: 'Вестибулопластика', price: '27 000 руб.', buttonText: 'Записаться', category: 'surgery'}
    ]
    
    const setButton = (category) => {
        setActiveButton(category);
    }

    return (
        <section className="services">
            <h2 className="services-title">Услуги</h2>
            <p className="services-subtitle">Мы постарались сделать прайс, максимально простым и понятным.</p>
            <section className="services-display">
                <section className="services-display__header-buttons">
                    <div className={activeButton === 'dentalHeal' ? 'header-buttons__heal active' : 'header-buttons__heal'} 
                        onClick={() => { 
                        handleButtonClick('dentalHeal'); 
                        setButton('dentalHeal')
                        }}
                    >
                        <img src={dentalHeal} alt="Лечение зубов" className="heal-img"/>
                        <h3 className="heal-title">Лечение зубов</h3>
                    </div>
                    <div className={activeButton === 'hygiene' ? 'header-buttons__hygiene active' : 'header-buttons__hygiene'} 
                        onClick={() => {
                            handleButtonClick('hygiene'); 
                            setButton('hygiene')
                        }}
                    >
                        <img src={hygiene} alt="Гигиена" className="hygiene-img"/>
                        <h3 className="hygiene-title">Гигиена</h3>
                    </div>
                    <div className={activeButton === 'braces' ? 'header-buttons__braces active' : 'header-buttons__braces'}
                        onClick={() => { 
                            handleButtonClick('braces'); 
                            setButton('braces')
                        }}
                    >
                        <img src={braces} alt="Брекеты" className="braces-img"/>
                        <h3 className="braces-title">Брекеты</h3>
                    </div>
                    <div className={activeButton === 'childrensDentistry' ? 'header-buttons__childrensDentistry active' : 'header-buttons__childrensDentistry'}
                        onClick={() => { 
                            handleButtonClick('childrensDentistry'); 
                            setButton('childrensDentistry')
                        }}
                    >
                        <img src={childrensDentistry} alt="Детская стоматология" className="childrensDentistry-img"/>
                        <h3 className="childrensDentistry-title">Детская стоматология</h3>
                    </div>
                    <div className={activeButton === 'implants' ? 'header-buttons__implants active' : 'header-buttons__implants'}
                        onClick={() => {
                            handleButtonClick('implants'); 
                            setButton('implants')
                        }}
                    >
                        <img src={implants} alt="Импланты" className="implants-img"/>
                        <h3 className="implants-title">Импланты</h3>
                    </div>
                </section>
                <section className="services-display__offers">
                    <CreateOffers offers={currentOffers} onOpenModal={openModal}/>
                </section>
                <section className="services-display__footer-buttons">
                    <div className={activeButton === 'veneers' ? 'footer-buttons__veneers active' : 'footer-buttons__veneers'} 
                        onClick={() => { 
                            handleButtonClick('veneers'); 
                            setButton('veneers')
                        }}
                    >
                        <img src={veneers} alt="Виниры" className="veneers-img"/>
                        <h3 className="veneers-title">Виниры</h3>
                    </div>
                    <div className={activeButton === 'crowns' ? 'footer-buttons__crowns active' : 'footer-buttons__crowns'} 
                        onClick={() => { 
                            handleButtonClick('crowns'); 
                            setButton('crowns')
                        }}
                    >
                        <img src={crowns} alt="Коронки" className="crowns-img"/>
                        <h3 className="crowns-title">Коронки</h3>
                    </div>
                    <div className={activeButton === 'surgery' ? 'footer-buttons__surgery active' : 'footer-buttons__surgery'}
                        onClick={() => { 
                            handleButtonClick('surgery'); 
                            setButton('surgery')
                        }}
                    >
                        <img src={surgery} alt="Хирургия" className="surgery-img"/>
                        <h3 className="surgery-title">Хирургия</h3>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default ServicesPage;