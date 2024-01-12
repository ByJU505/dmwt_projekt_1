import React from 'react';
import styles from "../styles/Navigation.module.css";
import Image from 'next/image';

function Navigation() {
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const scrollToDiagramm = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: document.body.offsetHeight* (1/8),
            behavior: 'smooth'
        });
    };
    const scrollToInformation = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: document.body.offsetHeight* (2/8),
            behavior: 'smooth'
        });
    };
    const scrollToQuiz = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: document.body.offsetHeight* (5.25/8),
            behavior: 'smooth'
        });
    };

    const handleDonationButtonClick = () => {
        window.open('https://engage.us.greenpeace.org/onlineactions/GB7jeaDze0eR5tWt3kWG_w2?utm_source=website&utm_medium=hero&utm_campaign=evergreen&sourceid=1018080&_gl=1*zo9wvy*_gcl_au*MTIyMTcwNTQxMy4xNzA0OTc1MDE3&_ga=2.13561783.1460770407.1704975017-1725568931.1704975016', '_Blank');
    }

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <Image
                        src={require("../styles/pictures/CloudIT_Logo.png").default}
                        alt={"Logo"}
                        width={100}
                        height={58}
                        onClick={scrollToTop}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className={styles.navLinks}>
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={handleDonationButtonClick}>Donation</a>
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToDiagramm}>Diagram</a>
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToInformation}>Information</a>
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToQuiz}>Quiz</a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

