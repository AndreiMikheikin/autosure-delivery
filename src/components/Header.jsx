// components/Header.jsx
import Logo from "./common/Logo/Logo";
import { FaWhatsapp } from "react-icons/fa";
import TelegramLink from "./common/TelegramLink/TelegramLink";
import "../styles/components/Header.scss";

const Header = () => {
    return (
        <header className="aam_header">
            <Logo />

            <div className="aam_header__info">
                <p className="aam_header__slogan">
                    Доставка автозапчастей из Европы в Крым
                </p>

                <div className="aam_header__contacts">
                    <span>Связаться с нами:</span>
                    <a href="https://wa.me/79101193748" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24} style={{ marginRight: '8px' }}/>
                    </a>
                    <TelegramLink />
                </div>

                <div className="aam_header__phones">
                    <a href="tel:+79101193748">+7 (910) 119-37-48</a>
                    <a href="tel:+79101193753">+7 (910) 119-37-53</a>
                    <a href="tel:+48511028524">+48 (51) 102-85-24</a>
                </div>
            </div>
        </header>
    );
};

export default Header;