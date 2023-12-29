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
            top: 500, // Beispielposition für das Diagramm (anpassen nach Bedarf)
            behavior: 'smooth'
        });
    };
    const scrollToInformation = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 1000, // Beispielposition für die Information (anpassen nach Bedarf)
            behavior: 'smooth'
        });
    };
    const scrollToQuiz = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 1500, // Beispielposition für das Quiz (anpassen nach Bedarf)
            behavior: 'smooth'
        });
    };

    return (
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
                <a href="#" style={{ color: '#FFFFFF' }}>Donation</a>
                <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToDiagramm}>Diagramm</a>
                <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToInformation}>Information</a>
                <a href="#" style={{ color: '#FFFFFF' }} onClick={scrollToQuiz}>Quiz</a>
            </div>
        </div>
    );
}

export default Navigation;

