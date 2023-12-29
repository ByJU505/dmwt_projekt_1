import styles from "../styles/hero2.module.css";
import React from 'react';


function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.fixedImage}></div>
            <div className={styles.scrollSection}>
                <div className={styles.saeule1}></div>
                <div className={styles.saeule2}></div>
            </div>
        </div>
    );
}

export default Hero;
