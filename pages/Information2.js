import { useState } from 'react';
import styles from "../styles/Information2.module.css";
import Image from "next/image";

const Information2 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
        {
            text: "Green cloud computing aims to make cloud services environmentally friendly by minimizing energy consumption and reducing e-waste in data centers. It involves eco-friendly planning, utilization, and disposal of hardware and software resources. The focus extends beyond energy consumption to include operational cost, reliability, timeliness, security, and Quality of Service (QoS). By employing energy-efficient components and reusable energy sources, green cloud computing enhances the efficiency of data centers, providing cost-effective and reliable services with minimal environmental impact. The concept originated in 2009 when Liu et al. introduced the term \"green cloud\" and proposed an architecture to reduce energy consumption in data centers. Green data centers, the core of green cloud computing, prioritize energy efficiency in IT equipment, networking, storage, and overall infrastructure. Designing these centers involves implementing energy-efficient components, thermal management, and sustainable construction practices to ensure optimal performance while minimizing e-waste and carbon emissions.",
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: (
                <>
                    Applications of Green Cloud Computing <br />
                    <br />
                    ● Green Internet Of Things (IoT) - As smart devices demand low latency and mobility, edge <br />
                    computing provides real-time services aimed at using computing resources cheaply and <br />
                    without harming nature. <br />
                    ● Autonomous vehicles: Self-driving vehicles send data to manufacturers to better monitor and <br />
                    receive necessary maintenance alerts. <br />
                    ● Smart cities: Records obtained from actuators, sensors and ICT increase operational <br />
                    efficiency. <br />
                    <br />
                    Using a global search algorithm i.e. global optimization algorithm in the Optimal Parameter Search layer, we intend to locate a global optimum. It is well-suited to traverse the entire input search space and get <br />
                    close to (or find exactly) the extrema of the function. <br />
                    ● Green Parallel Computing of Big Data Systems - Big data is typically structured around <br />
                    distributed file systems that can run parallel algorithms for big data analytics. You can map <br />
                    parallel algorithms to focus on common computational metrics such as speedup versus <br />
                    sequential computation and compute node utilization efficiency. <br />
                    ● Green AI Cloud - Easy-to-use platform for AI training with little DevOps/IT required. Runs <br />
                    on 100% renewable energy (hydro and wind) - including carbon dioxide (CO2) gas. <br />
                    Designed for batch or real-time workloads with high throughput and 99.99% uptime. <br />
                    Merits of Green Cloud Computing <br />
                    ❖ Better Infrastructure <br />
                    ❖ Cloud Computing Technology Encourages Virtualization <br />
                    ❖ Enhances Server Utility Rate <br />
                    ❖ Reduces Energy Consumption <br />
                    ❖ Foster Growth of Remote Work Culture <br />
                    ❖ Less Impact on Climate
                </>
            ),
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: (
                <>
                    Data centers and transmission networks are responsible for approximately 1% of energy-related <br />
                    GHG emissions. In 2019 as per the average electricity mix survey, we examined that 30-min. Netflix <br />
                    streaming released approximately 18 gms of carbon dioxide (CO2) gas. Demand for digital services <br />
                    has increased over time. The number of internet users has doubled since 2010, and global traffic on <br />
                    the web is expanding by 20 times. <br />
                    Let us consider how real-time video streaming services impact the energy consumption and carbon <br />
                    footprint of your devices, network infrastructure, and data centers. According to the report [1] by <br />
                    Climate Change Central , widely held estimates of emissions from viewing 30 minutes of Netflix <br />
                    overstate the company's substantial climate blow by upto 90 times. Figures from the Shift Project <br />
                    [1] suggest that Netflix streaming consumes about 94 terawatt hrs./year, i.e. 200 times the 0.45 <br />
                    TWh reported by Netflix in 2019.
                </>
            ),
            image: require("/styles/pictures/Herobild1_DMWT.gif").default
        },
        {
            text: (
                <>
                    Data center sustainability can be achieved by considering factors such as degrading emissions <br />
                    released, enhancing the utility of resources, and preventing waste helps in moving towards green <br />
                    cloud computing has become one of the top priorities for IT and data center operations. Using energy <br />
                    potent technologies marks the easiest way to improve operational efficiency at the edge network. <br />
                    Over 77% users have installed or plan to install energy-potent UPS systems to facilitate locations of <br />
                    edge networks. The advanced medium-sized double-conversion UPS system can secure more than <br />
                    98% operating efficiency through dynamic online optimization. This degrades the energy losses <br />
                    associated with power control when the utility power is satisfactory. It protects the device by <br />
                    seamlessly switching to double-conversion mode when the input power quality degrades.
                </>
            ),
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
                <div className={styles.box}/>
                <div className={styles.greybox}/>
            </div>
        </div>
    );
};
export default Information2;