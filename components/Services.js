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
                    <article className={styles.article}>Our roofing process begins with a dedicated lead setting up an appointment to understand your specific needs. During the initial inspection, our skilled team thoroughly assesses your roof to identify any issues and determine the necessary repairs or replacement. Once the inspection is complete, we assist you with filing a claim with your insurance company to ensure you receive the coverage you deserve.
                        <br/>Following the claim filing, we coordinate a meeting with the insurance adjuster to review the damages. This meeting is crucial as it leads to the scope of loss report, which outlines the extent of the damages and the expected costs of repairs. After this, you'll receive the first insurance check, which covers part of the costs minus the deductible. We then schedule the delivery of materials and labor, setting the stage for the installation phase.
                        
                    </article>
                    <article className={styles.article}>Our experienced crew performs the installation, adhering to the highest standards of quality and safety. After the installation is complete, we conduct a final walk-through with you to ensure everything meets your expectations and our standards. Once you are satisfied, we issue a certificate of completion. This certificate triggers the release of the remaining funds from your insurance company.<br/>Finally, we ensure that all financial transactions, including the review and confirmation of payments, are handled smoothly. Once everything is confirmed and closed, we consider the project complete, leaving you with a new, durable roof and peace of mind. Throughout this process, we maintain open communication, keeping you informed every step of the way.</article>
                </div>
                <div className={styles.servicesButtonContainer}>
                    <button className={styles.servicesButton}><a href="#contact">Contact Us!</a></button>
                </div>
            </div>
        </section>
    )
}

export default Services