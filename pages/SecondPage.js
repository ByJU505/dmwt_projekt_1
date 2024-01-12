import React from 'react';
import Comment from './Komments';
import styles from "../styles/Navigation.module.css";
import Styles from "../styles/footer.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';

const TestPage = () => {
    const router = useRouter();

    const handleDonationButtonClick = () => {
        window.open('https://engage.us.greenpeace.org/onlineactions/GB7jeaDze0eR5tWt3kWG_w2?utm_source=website&utm_medium=hero&utm_campaign=evergreen&sourceid=1018080&_gl=1*zo9wvy*_gcl_au*MTIyMTcwNTQxMy4xNzA0OTc1MDE3&_ga=2.13561783.1460770407.1704975017-1725568931.1704975016', '_Blank');
    }

    const changePage = (event) => {
        event.preventDefault();
        router.push('/');
    };

    const scrollToComment = (event) => {
        event.preventDefault();
        const bottom = document.body.offsetHeight;

        window.scrollTo({
            top: bottom,
            behavior: 'smooth'
        });
    };

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
        <div>
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
                        <a href="#"
                           style={{ color: '#FFFFFF' }} onClick={handleDonationButtonClick}>Donation</a>
                        <a href="" style={{ color: '#FFFFFF' }} onClick={scrollToComment}>Comment</a>
                        <a href="" style={{ color: '#FFFFFF' }} onClick={changePage}>Home</a>
                    </div>
                </div>
            </div>
            <Comment/>
            <div className={Styles.container}>
                <div className={Styles.footer}>
                    <div className={Styles.logo}>
                        <Image
                            src={require("../styles/pictures/CloudIT_Logo.png").default}
                            alt={"Logo"}
                            width={100}
                            height={58}
                            onClick={scrollToTop}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className={Styles.navLinks}>
                        <a href="#" style={{ color: '#FFFFFF' }} onClick={handleAboutClick}>About</a>
                        <a href="#" style={{ color: '#FFFFFF' }} onClick={handleCommunityClick}>Community</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;
