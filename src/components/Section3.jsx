import Button from "./common/Button/Button";
import TelegramLink from "./common/TelegramLink/TelegramLink";
import "../styles/components/Section3.scss";

const Section3 = () => {
    return (
        <section className="aam_section3">
            <h2 className="aam_section3__title">Доставка автозапчастей из Европы</h2>
            <p className="aam_section3__subTitle">Доставляем запасные части тремя способами:</p>
            <ul className="aam_section3__features">
                <li>Товар перемещается в Беларусь, далее производится отправка транспортными компаниями ПЭК, СДЭК (учитывается габарит той или иной запасной части).</li>
                <li>Товар перемещается в Беларусь и по согласованию с клиентом, возможна доставка товара нашим транспортом в любой город Крыма.</li>
                <li>Товар перемещается на наш склад в Крыму и далее производиться отправка ЕМС Почта России по указанному адресу клиента. Также возможен самовывоз с нашего склада.</li>
            </ul>
            <TelegramLink asButton>
                <Button variant="primary" size="large">Заказать запчасть</Button>
            </TelegramLink>
        </section>
    );
};

export default Section3;