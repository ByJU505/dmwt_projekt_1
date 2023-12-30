import styles from "../styles/hero3.module.css";
import React, { useEffect, useRef } from 'react';

function Hero3() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 4000;

            if (scrollPosition >= threshold) {
                scrollRef.current.classList.add(styles.changedImage);
            } else {
                scrollRef.current.classList.remove(styles.changedImage);
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
                <div className={styles.saeule1}></div>
                <div className={styles.saeule2}></div>
            </div>
        </div>
    );
}

export default Hero3;
