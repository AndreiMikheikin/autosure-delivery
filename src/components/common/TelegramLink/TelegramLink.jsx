// components/common/TelegramLink.jsx
import { useEffect, useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import '../Button/button.scss';

const TelegramLink = ({ username = 'AutoSdelivery_bot', asButton = false, children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const telegramUrl = isMobile
        ? `tg://resolve?domain=${username}`
        : `https://t.me/${username}`;

    if (asButton) {
        return (
            <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aam_button" 
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-link"
        >
            <FaTelegramPlane size={24} style={{ marginRight: '8px' }} />
        </a>
    );
};

export default TelegramLink;