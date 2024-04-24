import React from "react";
import { Link } from 'react-router-dom';
import "../css/RegistrationPage.css";

const RegistrationPage = () => {

  return (
    <form className="reg-form">
      <div className="reg-form__first-name-box">
        <input 
          className="reg-form__first-name" 
          type="text" 
          name="firstName" 
          placeholder="" 
          required 
          autoComplete="on"
        />
        <p className="reg-form__subtitle-first-name">Имя</p>
      </div>
      <div className="reg-form__last-name-box">
        <input 
          className="reg-form__last-name" 
          type="text" 
          name="lastName" 
          placeholder="" 
          required 
          autoComplete="on"
        />
        <p className="reg-form__subtitle-last-name">Фамилия</p>
      </div>
      <div className="reg-form__email-box">
        <input 
          className="reg-form__email" 
          type="email" 
          name="email" 
          placeholder="" 
          required 
          autoComplete="on"
        />
        <p className="reg-form__subtitle-email">Email</p>
      </div>
      <div className="reg-form__password-box">
        <input 
          className="reg-form__password" 
          type="password" 
          name="password" 
          minLength={6} 
          maxLength={20} 
          placeholder="" 
          required 
          autoComplete="on"
        />
        <p className="reg-form__subtitle-password">Пароль</p>
      </div>
      <button className="primary-button reg-form__submit-button" type="submit">Зарегистрироваться</button>
      <p className="reg-form__log-in" type="button">
        <Link to="/medical-website/logIn">
          Войти
        </Link>
      </p>
    </form>
  )

}

export default RegistrationPage;