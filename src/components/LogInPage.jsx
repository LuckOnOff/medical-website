import React from "react";
import "../css/LogInPage.css";

  const LogInPage = ({ onPageChange }) => {

    return (
      <form className="log-in-form">
        <div className="log-in-form__email-box">
          <input
            className="log-in-form__email"
            type="email"
            name="email"
            placeholder=""
            required
            autoComplete="on"
          />
          <p className="log-in-form__subtitle-email">E-mail</p>
        </div>
        <div className="log-in-form__password-box">
          <input
          className="log-in-form__password"
          type="password"
          name="password"
          placeholder=""
          required
          autoComplete="on"
          minLength={6}
          maxLength={20}
          />
          <p className="log-in-form__subtitle-password">Пароль</p>
        </div>
        <button
          className="primary-button log-in-form__button-submit" 
          type="submit" 
          onClick={(e) => e.preventDefault()}
        >
          Войти
        </button>
        <div className="log-in-form__text-container">
          <p className="log-in-form__button-forgot-password">Забыли пароль?</p>
          <p className="log-in-form__button-reg" onClick={() => onPageChange('registration')}>Зарегистрироваться</p>
        </div>
      </form>
    );
  };

export default LogInPage;