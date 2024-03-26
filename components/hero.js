'use client'
import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css"


const Hero = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const heroElement = document.querySelector('.' + styles.hero); // get the hero DOM element 

        const handleScroll = () => {
            const {top, height } = heroElement.getBoundingClientRect(); // Get Heros position and height
            const startFade = height / 2 // Start fade effect at half the height of the hero 
            const fadeEnd = height; // end fade effect when the hero is out of view 

            //calculate opacity based on scroll position within the fade range 

            const newOpacity = Math.min(1, Math.max(0, (fadeEnd - top) / (fadeEnd - startFade)));
            setOpacity(newOpacity)
        };

        //Attach the scroll event listener
        window.addEventListener('scroll', handleScroll)
        
        // Clean up the event listener on component unmount 
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return ( 
    <div className={styles.hero} style = {{ opacity}}>
        <div className={styles.heroContent}>
            <h1 className= {styles.heroH1}>Reaching New Heights</h1>
            <p className={styles.heroP}>Quality Roofing Services you can trust.</p>
            <button className= {styles.heroButton}>Free estimate</button>
        </div>
    </div>
  );
}

export default Hero;