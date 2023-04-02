import "./Header.css";
import logo from "./assets/logo_welbex.svg";
export function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <img className="header__logo" src={logo} />
          <nav>
            <ul className="header__menu">
              <li className="header__menu-item">Услуги</li>
              <li className="header__menu-item">Виджеты</li>
              <li className="header__menu-item">Интеграции</li>
              <li className="header__menu-item">Кейсы</li>
              <li className="header__menu-item">Сертификаты</li>
            </ul>
          </nav>
        </div>
        <div className="header__contacts">
          <tel className="header__tel">+7 555 555-55-55</tel>
          <div className="header__social">
            <div className="header__social-telegram"></div>
            <div className="header__social-viber"></div>
            <div className="header__social-whatsapp"></div>
          </div>
        </div>
      </div>

      <p className="header__logo-caption">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </header>
  );
}
