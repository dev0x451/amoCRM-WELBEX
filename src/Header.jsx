import "./Header.css";
import "./shared/styles.css";
import logo from "./assets/logo_welbex.svg";
export function Header() {
  return (
    <header className="header">
      <div className="header-desktop">
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
            <a className="contacts__tel" href="tel:+75555555555">
              +7 555 555-55-55
            </a>
            <div className="header__social">
              <div className="contacts__social-icons contacts__telegram"></div>
              <div className="contacts__social-icons contacts__viber"></div>
              <div className="contacts__social-icons contacts__whatsapp"></div>
            </div>
          </div>
        </div>

        <p className="header__logo-caption">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <div className="header-mobile">
        <nav>
          <ul className="header__menu header__menu_mobile">
            <li className="header__menu-item_mobile">Услуги</li>
            <li className="header__menu-item_mobile">Виджеты</li>
            <li className="header__menu-item_mobile">Интеграции</li>
            <li className="header__menu-item_mobile">Кейсы</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
