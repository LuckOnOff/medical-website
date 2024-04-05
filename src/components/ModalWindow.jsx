import React, { useEffect, useRef } from "react";
import "../css/ModalWindow.css";

const ModalWindow = ({ closeModal }) => {
    const modalRef = useRef();

    const handleCloseModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseModal);
        return () => {
            document.removeEventListener("mousedown", handleCloseModal);
        };
    }, []);

    return (
        <form ref={modalRef} className="window">
            <label htmlFor="tel-number" className="window__text">Укажите ваш номер для связи с вами</label>
            <input type="text" autoComplete="on" placeholder="Ваш номер телефона" className="window__input" id="tel-number"/>
            <div className="button-box">
                <input className="primary-button button-box__button-submit" value='Заказать звонок' type="submit"/>
                <input className="primary-button button-box__button-reset" value='Очистить поле' type="reset"/>
            </div>
        </form>
    )
}

export default ModalWindow;