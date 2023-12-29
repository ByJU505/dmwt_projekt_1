import { useState } from 'react';
import styles from "../styles/Information2.module.css";
import Image from "next/image";

const Information2 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
        {
            text: "quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora..quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. quia non numquam eius modi tempora.Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora..",
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: "Text für Tab 2. Hier könnte Text für den zweiten Tab stehen.",
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: "Text für Tab 3. Hier könnte Text für den dritten Tab stehen.",
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: "Text für Tab 4. Hier könnte Text für den vierten Tab stehen.",
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        }
    ];

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={styles.tabbedGrid}>
            <p className={styles.ueberschrift}>Dig Deeper</p>
            <div className={styles.tabs}>
                {[1, 2, 3, 4].map((tabIndex) => (
                    <div
                        key={tabIndex}
                        className={`${styles.tab} ${activeTab === tabIndex - 1 ? styles.active : ''}`}
                        onClick={() => changeTab(tabIndex - 1)}
                    >
                        <span>Tab {tabIndex}</span>
                    </div>
                ))}
            </div>
            <div className={styles.tabContent}>
                {[0, 1, 2, 3].map((tabIndex) => (
                    <div
                        key={tabIndex}
                        className={`${styles.tabPane} ${activeTab === tabIndex ? styles.active : ''}`}
                    >
                        <p className={styles.scrollableText}>
                            <Image
                                src={tabContent[tabIndex].image}
                                alt={`Bild für Tab ${tabIndex + 1}`}
                                width={500}
                                height={300}
                                className={styles.contentImage}
                            />
                            <br/>
                            {tabContent[tabIndex].text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Information2;