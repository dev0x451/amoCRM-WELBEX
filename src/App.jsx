//import viteLogo from '/vite.svg'
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
          <div className="main-gifts"></div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
