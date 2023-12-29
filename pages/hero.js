import React from 'react';
import styles from "../styles/Hero1.module.css";
import Image from "next/image";

function Hero() {
    const scrollTo = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    };
    return (
        <div className={styles.hero}>
            <Image className={styles.Image}
                   src={require("../styles/pictures/Herobild1_DMWT.gif").default}
            />
            <div className={styles.grey}>
                <div className={styles.greybox}/>
                <p className={styles.greyboxText}>Do <span className={styles.GreenIT}> IT </span> to save the World</p>
                <div className={styles.greenbox} onClick={scrollTo}>
                    <p className={styles.greenboxText}>Learn Now</p>
                </div>
            </div>
        </div>


    );
}

export default Hero;
