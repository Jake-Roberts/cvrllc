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
                <h2>Committed to Serving Our Community</h2>
                <h3>Your Journey to a New Roof Starts Here</h3>
                <p>At Cedar Valley Roofing, our humble beginnings trace back to Nelson and his two brothers, Rony and Jose, along with their indispensable partner, Landon. <br/> <br/> Nelson, Rony, and Jose, hailing from Guatemala, brought with them an unparalleled work ethic fostered from an early age. In search of new opportunities, they ventured to Cedar City, where they crossed paths with Landon, a local entrepreneur with deep roots in the community and a wealth of business acumen from founding his own siding company. Together, they established Cedar Valley Roofing, uniting their skills and passions to serve the community with top-tier roofing and siding services. Our commitment runs deep, and every day we strive to deliver the exceptional quality and service that our neighbors deserve. </p>
            </div>

        </section>
    )
}

export default OurMission