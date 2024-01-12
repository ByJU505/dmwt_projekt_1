import React from 'react';
import styles from "../styles/Buttons.module.css";
import { useRouter } from 'next/router';


function Buttons() {
    const router = useRouter();

    const handleDonationButtonClick = () => {
        window.open('https://engage.us.greenpeace.org/onlineactions/GB7jeaDze0eR5tWt3kWG_w2?utm_source=website&utm_medium=hero&utm_campaign=evergreen&sourceid=1018080&_gl=1*zo9wvy*_gcl_au*MTIyMTcwNTQxMy4xNzA0OTc1MDE3&_ga=2.13561783.1460770407.1704975017-1725568931.1704975016', '_Blank');
    }

    const handleCommentButtonClick = () => {
        router.push('/SecondPage');
    }
    return (
        <div className={styles.container}>
            <div className={styles.Buttons}>
                <p>Your time to donate</p>
                <p>Your time to comment</p>
                <button className={styles.Donation} onClick={handleDonationButtonClick}>Donation</button>
                <button className={styles.Comment} onClick={handleCommentButtonClick}>Comment</button>
            </div>
        </div>
    );
}

export default Buttons;