import { Header } from "./Header";
import { Footer } from "./Footer";
import "./App.css";

export function App() {
  return (
    <div className="app">
      <div className="purple-ball"></div>
      <div className="purple-light"></div>
      <div className="red-ball"></div>
      <div className="red-ball_small"></div>
      <div className="red-light"></div>
      <Header />
      <main className="main">
        <div className="main-left">
          <h1 className="main__heading">
            Зарабатывайте больше{" "}
            <span className="main__heading_gradient">с&nbsp;WELBEX</span>
          </h1>
          <p className="main__subheading">
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className="main-right">
          <h2 className="main__gifts-heading">
            Вместе с
            <span className="main__gifts-heading_gradient">
              &#32;бесплатной
            </span>
            <span className="main__gifts-heading_gradient">
              &#32;консультацией&#32;
            </span>
            мы дарим:
          </h2>
          <div className="main-gifts">
            <div className="main-gift">
              <h3 className="main-gift__heading">Виджеты</h3>
              <p className="main-gift__text">30 готовых решений</p>
            </div>
            <div className="main-gift">
              <h3 className="main-gift__heading">Dashboard</h3>
              <p className="main-gift__text">с показателями вашего бизнеса</p>
            </div>
            <div className="main-gift">
              <h3 className="main-gift__heading">Skype Аудит</h3>
              <p className="main-gift__text">отдела продаж и CRM системы</p>
            </div>
            <div className="main-gift">
              <h3 className="main-gift__heading">35 дней</h3>
              <p className="main-gift__text">использования CRM</p>
            </div>
          </div>
          <div className="main-gifts_mobile">
            <div className="main-gift_mobile">
              <div className="main-gift-line_mobile"></div>
              <h3 className="main-gift__heading_mobile">Skype&nbsp;Аудит</h3>
            </div>
            <div className="main-gift_mobile">
              <div className="main-gift-line_mobile"></div>
              <h3 className="main-gift__heading_mobile">30&nbsp;виджетов</h3>
            </div>
            <div className="main-gift_mobile">
              <div className="main-gift-line_mobile"></div>
              <h3 className="main-gift__heading_mobile">Dashboard</h3>
            </div>
            <div className="main-gift_mobile">
              <div className="main-gift-line_mobile"></div>
              <h3 className="main-gift__heading_mobile">Месяц&nbsp;аmoCRM</h3>
            </div>
          </div>

          <button className="main-CTA-button">Получить консультацию</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
