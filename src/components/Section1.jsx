import InfoBox from "./common/InfoBox/InfoBox";
import { FaCar, FaSearch, FaHandHoldingUsd, FaMoneyCheckAlt, FaBoxOpen, FaMapMarkedAlt, FaHandshake, FaArrowRight } from "react-icons/fa";
import "../styles/components/Section1.scss";

const steps = [
    { icon: <FaCar />, label: "Сообщаете VIN автомобиля" },
    "arrow",
    { icon: <FaSearch />, label: "Говорите, какая запчасть нужна" },
    "arrow",
    /* 
    { icon: <FaHandHoldingUsd />, label: "Мы находим необходимую запчасть" },
    "arrow",
     */
    { icon: <FaHandshake />, label: "Согласовываем стоимость" },
    "arrow",
    { icon: <FaMoneyCheckAlt />, label: "Вносите оплату" },
    "arrow",
    { icon: <FaBoxOpen />, label: "Мы приобретаем запчасть" },
    "arrow",
    { icon: <FaMapMarkedAlt />, label: "Доставляем в Крым" },
];

const Section1 = () => {
    const filteredSteps = steps.filter(s => s !== "arrow");

    return (
        <section className="aam_section1">
            <h2 className="aam_section1__title">Как мы работаем</h2>
            <div className="aam_section1__steps">
                {filteredSteps.map((step, index) => (
                    <div key={index} className="aam_section1__step-group">
                        <InfoBox icon={step.icon} label={step.label} />
                        {index !== filteredSteps.length - 1 && (
                            <span className="aam_section1__arrow">
                                <FaArrowRight />
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section1;