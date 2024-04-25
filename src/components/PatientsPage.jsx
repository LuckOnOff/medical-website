import React from "react";
import logo from "../img/website-logo.png";
import voxelLogo from "../img/patients-page-voxel.png";
import ortholightLogo from "../img/patients-page-ortholight.png";
import rocadamedLogo from "../img/patients-page-rocadamed.png";
import sliderImgOne from "../img/patients-page-slider-img-one.png";
import sliderImgTwo from "../img/patients-page-slider-img-two.jpg";
import sliderImgThree from "../img/patients-page-slider-img-three.jpg";
import sliderImgFour from "../img/patients-page-slider-img-four.jpg";
import sliderImgFive from "../img/patients-page-slider-img-five.jpg";
import CreateSlider from "./CreateSlider";
import "../css/PatientsPage.css";

const PatientsPage = () => {
    const slideImages = [
        sliderImgOne,
        sliderImgTwo,
        sliderImgThree,
        sliderImgFour,
        sliderImgFive
    ];
    return (
        <section className="patients">
            <section className="patients__description-healing">
                <h2 className="healing-title">Лечение у нас</h2>
                <p className="healing-subtitle">Просто и безболезненно, с предоставлением всего спектра стоматологических услуг</p>
                <div className="clinic-logo-container">
                    <img src={logo} alt="Логотип сайта" className="clinic-logo"/>
                    <span className="clinic-name">клиника</span>
                </div>
                <p className="healing-services-list-text">предоставляет весь спектр стоматологических услуг таких как:</p>
                <ul className="healing-services-list">
                    <li className="healing-services-list__item">- Терапия</li>
                    <li className="healing-services-list__item">- Хирургия</li>
                    <li className="healing-services-list__item">- Ортодонтия</li>
                    <li className="healing-services-list__item">- Детская стоматология</li>
                </ul>
                <p className="healing-text-priorities">Приоритетным направлением является восстановление
                функциональных возможностей зубочелюстной системы и профилактика заболевания полости рта.</p>
                <div className="healing-box-img">
                    <img src={voxelLogo} alt="Логотип нашего партнера voxel" className="voxel-logo"/>
                    <img src={ortholightLogo} alt="Логотип нашего партнера ortholight" className="ortholight-logo"/>
                    <img src={rocadamedLogo} alt="Логотип нашего партнера rocadamed" className="rocadamed-logo"/>
                </div>
            </section>
            <section className="patients__slider">
                <CreateSlider slides={slideImages}/>
            </section>
        </section>
    )
}

export default PatientsPage;