import React from "react";
import Image from "next/image";
import styles from "../styles/OurMission.module.css"
import { useEffect, useRef } from "react";



const OurMission = () => {
    
    return (
        <section className={styles.ourMission}>
            <div className={styles.missionImage}>
                <video controls>
                    <source src='../Chaves1.mp4' type="video/mp4"/>
                  </video>
            </div>
            <div className={styles.missionContent}>
                <h2>We build homes with a personal touch</h2>
                <h3>From dreams to blueprints to reality!
                    Cedar Valley Roofing can help!
                </h3>
                <p>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them.</p>
            </div>

        </section>
    )
}

export default OurMission