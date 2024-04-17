import React from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css"



const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.servicesContent}>
                <h1 className={styles.header}>Do You Know the Condition of Your Roof </h1>
                <h3 className={styles.subHeader}>Schedule a roof inspection Today</h3>
                <div className={styles.articles}>
                    <article className={styles.article}>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them.</article>
                    <article className={styles.article}>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them.</article>
                </div>
                <div className={styles.servicesButtonContainer}>
                    <button className={styles.servicesButton}><a href="#contact">Contact Us!</a></button>
                </div>
            </div>
        </section>
    )
}

export default Services