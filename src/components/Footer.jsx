// components/Footer.jsx
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./common/Logo/Logo";
import TelegramLink from "./common/TelegramLink/TelegramLink";
import "../styles/components/Header.scss";

const Footer = () => {
    return (
        <footer className="aam_footer">
            <div className="aam_footer__contacts">
                <h3>Контакты</h3>
                <a href="tel:+79101193748">+7 (910) 119-37-48</a>
                <a href="tel:+79101193753">+7 (910) 119-37-53</a>
                <a href="tel:+48511028524">+48 (51) 102-85-24</a>
                <div className="aam_footer__social">
                    <a href="https://wa.me/79101193748" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24} style={{ marginRight: '8px' }}/>
                    </a>
                    <TelegramLink />
                </div>
            </div>
            <div className="aam_footer__title">Доставка автозапчастей из Европы в Крым</div>
            <Logo />
        </footer>
    );
};

export default Footer;