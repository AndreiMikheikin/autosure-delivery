import { FaTruck, FaShieldAlt, FaCar, FaComments, FaShippingFast } from "react-icons/fa";
import Button from "./common/Button/Button";
import TelegramLink from "./common/TelegramLink/TelegramLink";
import "../styles/components/MainSection.scss";

const MainSection = () => {
  return (
    <main className="aam_main">
      <div className="aam_main__overlay" />
      <div className="aam_main__content">
        <h1 className="aam_main__title">Надёжная доставка автозапчастей в Крым - <p>с гарантией и выгодой!</p></h1>
        <p className="aam_main__sub-title">Тут всё просто: ты говоришь, что нужно. Мы подбираем, сверяем, доставляем - быстро и в 1.5 раза дешевле, чем на местном рынке.
        </p>
        <ul className="aam_main__features">
          <li><FaTruck className="aam_main__icon" /> Оригинал или аналог - найдём и привезём</li>
          <li><FaShieldAlt className="aam_main__icon" /> Выгодные цены, напрямую от поставщиков</li>
          <li><FaCar className="aam_main__icon" /> Подбор по VIN и фото</li>
          <li><FaComments className="aam_main__icon" /> Проверка, фото, отчёт по каждому заказу</li>
          <li><FaShippingFast className="aam_main__icon" /> Доставка 10-14 дней по всему Крыму</li>
        </ul>
        <TelegramLink asButton>
          <Button variant="primary" size="large">Заказать запчасть</Button>
        </TelegramLink>
      </div>
    </main>
  );
};

export default MainSection;
