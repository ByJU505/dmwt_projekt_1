import React from 'react';
import styles from "../styles/Information1.module.css";


function Information1() {
    return (
        <div className={styles.body1}>
            <p className={styles.ueberschrift}><span className={styles.Green}>IT</span>‘s good to know:</p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Sed ut perspiciatis</h2>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Sed ut perspiciatis</h2>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Sed ut perspiciatis</h2>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.gridSubtitle}>Sed ut perspiciatis</h2>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </div>
            </div>
        </div>
    );
}

export default Information1;