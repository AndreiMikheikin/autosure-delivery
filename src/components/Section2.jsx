import NoIconBox from "./common/NoIconBox/NoIconBox";
import { FaCar, FaWrench } from "react-icons/fa";
import "../styles/components/Section2.scss";

const steps = [
    { label: "качественный подбор" },
    { label: "Быстрая доставка\n(10-14 дней)" },
    { label: "Прямые поставки без посредников" },
    { label: "Наличный и безналичный расчёт" },
    { label: "Программа лояльности для постоянных клиентов" }
];

const Section2 = () => {
    const filteredSteps = steps.filter(s => s);

    return (
        <section className="aam_section2">
            <div className="aam_section2__overlay" />
            <h2 className="aam_section2__title">Наши преимущества</h2>
            <div className="aam_section2__steps">
                {filteredSteps.map((step, index) => (
                    <div key={index} className="aam_section2__step-group">
                        <NoIconBox label={step.label} />
                    </div>
                ))}
            </div>
            <div className="aam_section2__conditions">
                <h3 className="aam_section2__subTitle">Мы работаем с вами, если Вы:</h3>
                <ul className="aam_section2__features">
                    <li><FaCar className="aam_section2__icon" /><span><strong>Автовладелец</strong>, которому нужна оригинальная запчасть, но ее нет на местном рынке.</span></li>
                    <li><FaWrench className="aam_section2__icon" /><span><strong>Автосервис</strong>, которому важны проверенные запчасти и быстрая доставка для оперативного ремонта.</span></li>
                </ul>
            </div>
        </section>
    );
};

export default Section2;