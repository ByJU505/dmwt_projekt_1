import React from 'react';
import styles from "../styles/footer.module.css";
import Image from "next/image";
function Footer() {
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleAboutClick = () => {
        window.open('https://www.inf.reutlingen-university.de', '_Blank');
    }

    const handleCommunityClick = () => {
        window.open('https://www.instagram.com/inf.reutlingen/', '_Blank');
    }

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
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
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={handleAboutClick}>About</a>
                    <a href="#" style={{ color: '#FFFFFF' }} onClick={handleCommunityClick}>Community</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;