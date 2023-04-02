import "./Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer-left">
          <div className="footer__menu-column">
            <h3 className="footer__menu-heading">О Компании</h3>
            <ul className="footer__menu-items">
              <li className="footer__menu-item footer__menu-item_nowrap">
                Партнёрская программа
              </li>
              <li className="footer__menu-item">Вакансии</li>
            </ul>
          </div>
          <div className="footer__menu-column">
            <h3 className="footer__menu-heading">Меню</h3>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">Расчёт стоимости</li>
              <li className="footer__menu-item">Услуги</li>
              <li className="footer__menu-item">Виджеты</li>
              <li className="footer__menu-item">Интеграции</li>
              <li className="footer__menu-item">Наши клиенты</li>
              <li className="footer__menu-item">Кейсы</li>
              <li className="footer__menu-item footer__menu-item_mobile_invisible">
                Благодарственные письма
              </li>
              <li className="footer__menu-item footer__menu-item_desktop_invisible">
                Благодарность клиентов
              </li>
              <li className="footer__menu-item">Сертификаты</li>
              <li className="footer__menu-item">Блог на Youtube</li>
              <li className="footer__menu-item">Вопрос / Ответ</li>
            </ul>
          </div>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__menu-heading">Контакты</h3>

          <div className="footer__contacts-tel">
            <a className="contacts__tel" href="tel:+75555555555">
              +7 555 555-55-55
            </a>
          </div>
          <div className="footer__social">
            <div className="contacts__social-icons contacts__telegram"></div>
            <div className="contacts__social-icons contacts__viber"></div>
            <div className="contacts__social-icons contacts__whatsapp"></div>
          </div>
          <div className="footer__address">
            Москва, Путевой проезд 3с1, к 902
          </div>
        </div>
      </nav>
      <div className="footer__copyright">
        <p className="footer__copyright-text">
          ©WELBEX 2022. Все права защищены.
        </p>
        <p className="footer__copyright-policy">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
