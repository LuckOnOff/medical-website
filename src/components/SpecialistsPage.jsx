import React from "react";
import specialistMan from "../img/specialist-cart-man.png";
import CreateSpecialistCart from "./CreateSpecialistCart";
import "../css/SpecialistsPage.css";

const SpecialistsPage = () => {
    const dataSpecialist = [
        {
            id: 1, 
            name: 'Иванов Иван Иванович', 
            speciality: 'Директор, Главный врач, Врач ортодонт', 
            exp: 'Стаж работы 25 лет', 
            img: specialistMan
        },
        {
            id: 2, 
            name: 'Роботин Алексей Николаевич', 
            speciality: 'Зам директора, Врач стоматолог терапевт', 
            exp: 'Стаж работы более 11 лет', 
            img: specialistMan
        },
        {
            id: 3, 
            name: 'Лыщиков Павел Анатольевич', 
            speciality: 'Врач стоматолог ортопед, хирург-имплантолог', 
            exp: 'Стаж работы более 15 лет', 
            img: specialistMan
        },
        {
            id: 4, 
            name: 'Жирнов Дмитрий Александрович', 
            speciality: 'Врач стоматолог ортопед, хирург-имплантолог', 
            exp: 'Стаж работы более 10 лет', 
            img: specialistMan
        },
        {
            id: 5, 
            name: 'Калашников Никита Игоревич', 
            speciality: 'Врач стоматолог детский', 
            exp: 'Стаж работы более 10 лет', 
            img: specialistMan
        },
    ]
    return (
        <section className="specialists">
            <CreateSpecialistCart dataSpec={dataSpecialist}/>
        </section>
    )
}

export default SpecialistsPage;