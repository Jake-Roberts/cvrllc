import React from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css"



const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.servicesContent}>
                <h2 className={styles.header}>Our Services </h2>
                <p className={styles.subHeader}>Do you know the condition of your roof?</p>
                <div className={styles.articles}>
                    <article className={styles.article}>Cedar Valley Roofing offers a wide range of top-notch roofing solutions to cater to your needs. Our services include:
                        <br/> - Roof Installation and Replacement
                        <br/> - Roof Repair and Maintenance
                        <br/> - Siding Installation and Repair
                        <br/> - Gutter Installation and Maintenance
                        <br/> - Assistance with Insurance Claims
                    </article>
                    <article className={styles.article}>We are committed to delivering exceptional craftsmanship and outstanding customer service to ensure your complete satisfaction.</article>
                </div>
                <div className={styles.servicesButtonContainer}>
                    <button className={styles.servicesButton}><a href="#contact">Contact Us!</a></button>
                </div>
            </div>
        </section>
    )
}

export default Services