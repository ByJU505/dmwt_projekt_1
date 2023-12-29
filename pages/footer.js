import React from 'react';
import styles from "../styles/styles.module.css";
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.navLinks}>
                <a href="/posts/commentPage">Home</a>
                <a href="/posts/commentPage">About</a>
                <a href="/posts/commentPage">Contact</a>
            </div>
        </div>
    );
}

export default Footer;