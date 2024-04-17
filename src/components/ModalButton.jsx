import React, { useState, useEffect } from "react";
import "../css/ModalButton.css";

const ModalButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const body = document.querySelector('body');

    const addModalOpenClass = () => { 
        body.classList.add('modal-open'); 
    }; 
 
    const removeModalOpenClass = () => { 
        body.classList.remove('modal-open'); 
    };

    const toggleModal = () => {
        setIsOpen(!isOpen); 
 
        if (!isOpen) { 
            addModalOpenClass(); 
        } else { 
            removeModalOpenClass(); 
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !document.querySelector(".window").contains(event.target) && !document.querySelector(".modal-button").contains(event.target)) {
                setIsOpen(false);
                removeModalOpenClass();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <form className="window">
                    <label htmlFor="tel-number" className="window__text">Укажите ваш номер для связи с вами</label>
                    <input type="text" autoComplete="on" placeholder="Ваш номер телефона" className="window__input" id="tel-number"/>
                    <div className="button-box">
                        <input
                        className="primary-button button-box__button-submit" 
                        value='Заказать звонок' 
                        type="submit" 
                        onClick={toggleModal}
                        />
                        <input className="primary-button button-box__button-reset" value='Очистить поле' type="reset"/>
                    </div>
                </form>
            )}
            <button onClick={toggleModal} className={props.className + ' ' + 'modal-button'}>{props.children}</button>
        </>
    );
}

export default ModalButton;