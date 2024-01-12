import styles from "../styles/hero3.module.css";
import React, { useEffect, useRef } from 'react';

function Hero3() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Überprüfen, ob scrollRef.current nicht null ist
            if (scrollRef.current) {
                const scrollPosition = window.scrollY;
                const threshold = document.body.offsetHeight / 1.5;

                if (scrollPosition >= threshold) {
                    scrollRef.current.classList.add(styles.changedImage);
                } else {
                    scrollRef.current.classList.remove(styles.changedImage);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={`${styles.fixedImage} ${styles.defaultImage}`} ref={scrollRef}></div>
            <div className={styles.scrollSection}>
                <div className={styles.whiteBox}/>
                    <p className={styles.GreenIT}>
                        How <span>IT</span> could save the World
                    </p>
                <div className={styles.saeule1}></div>
                <div className={styles.saeule2}></div>
            </div>
        </div>
    );
}

export default Hero3;
