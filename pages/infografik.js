import {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';
import styles from "../styles/infografik.module.css";
import React from 'react';

const Infografik = () => {
    const chartRef = useRef(null);
    Chart.defaults.font.size = 26;
    Chart.defaults.font.family = "'Joystix', monospace" ;
    Chart.defaults.font.color = 'FFFFFF';

    useEffect(() => {
        const xValues = ["Nigeria", "Colombia", "Argentina", "Egypt", "South Africa", "Data centers", "Indonesia", "UK"];
        const yValues = [29, 73, 124, 153, 208, 250, 266, 286];
        const secondColor = 'blue'
        const firstColor = 'yellow'
        const barColors = [secondColor,secondColor,secondColor,secondColor,secondColor,firstColor,secondColor,secondColor,]
        const joystixFont = "'Joystix', monospace";
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                indexAxis: 'y',
                plugins: {
                    legend: {display: false},
                    tooltip: {
                        padding:20,
                        cornerRadius: 0,
                        titleFont:{
                            family: joystixFont,
                            size:16
                        },
                        bodyFont:{
                            family: joystixFont,
                            size:16
                        }
                    },
                    title: {
                        display: false,
                        text: "Use of electricity in TWh datacenters worldwide vs. selected countries"

                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'consumer',
                            font: {
                                family: joystixFont
                            }
                        },
                        type: 'category',
                        position: 'left',
                        grid: {
                            color: 'grey',
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'TWh consumed over 1 year',
                            font: {
                                family: joystixFont
                            }
                        },
                        type: 'linear',
                        position: 'bottom',
                        grid: {
                            color: 'grey',
                        },

                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className={styles.container}>
            <p><span>IT</span> was found:</p>
            <div className={styles.gridContainer}>
                <canvas className={styles.myChart} style={{ width: '100%', maxWidth: '50vw', height: '100%', maxHeight: '70vh' }} ref={chartRef}/>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Use of electricity in TWh datacenters worldwide vs. selected countries</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur mi vel felis sollicitudin, ac eleifend nunc pulvinar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infografik;