import { useEffect } from 'react';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';
import Section3 from '../../components/Section3';
/* import Section4 from './components/Section4'; */
import Footer from '../../components/Footer';
import '../../styles/pages/Home.scss';
import '../../styles/globals.scss';

const Home = () => {
    useEffect(() => {
        const layout = document.querySelector('.aam_page');
        if (!layout) return;

        let ticking = false;

        const checkScroll = () => {
            const scrollTop = window.scrollY;
            const isAtTop = scrollTop <= 0;
            const isAtBottom =
                window.innerHeight + scrollTop >= document.body.scrollHeight;
            return { isAtTop, isAtBottom };
        };

        const handleWheel = (e) => {
            const { isAtTop, isAtBottom } = checkScroll();

            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                if (ticking) return;
                layout.classList.add('stretch');
                ticking = true;

                setTimeout(() => {
                    layout.classList.remove('stretch');
                    ticking = false;
                }, 300);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="aam_page">
            <Header />
            <div className="aam_content">
                <MainSection />
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
