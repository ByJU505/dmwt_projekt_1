import React from 'react';
import styles from "../styles/Information1.module.css";


function Information1() {
    return (
        <div className={styles.body1}>
            <p className={styles.ueberschrift}><span className={styles.Green}>IT</span>‘s good to know:</p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Digital Services and Environmental Impact</h2>
                    Data centers and transmission networks contribute to around 1% of energy-related greenhouse gas emissions,
                    and the demand for digital services has significantly risen, with internet users doubling since 2010.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Streaming's Climate Impact: Unveiling the Numbers</h2>
                    Real-time video streaming, especially on platforms like Netflix, significantly impacts energy consumption and carbon footprint.
                    The climate impact of 30 minutes of Netflix viewing may be overstated by up to 90 times, with an annual energy consumption of approximately 94 terawatt hours.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Sustainable Data Centers: Prioritizing Green Cloud Computing</h2>
                    Achieving sustainability in data centers involves reducing emissions, optimizing resource utility, and preventing waste. Green cloud computing is a top priority,
                    and adopting energy-efficient technologies, such as UPS systems, is crucial for operational efficiency.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Energy-Efficiency Trends in Data Centers</h2>
                    Users are increasingly prioritizing energy-efficient solutions for data centers, with over 77% planning to install energy-potent UPS systems for edge networks.
                    These advanced systems can achieve more than 98% operating efficiency through dynamic online optimization, minimizing energy losses and ensuring device protection.
                </div>
            </div>
        </div>
    );
}

export default Information1;