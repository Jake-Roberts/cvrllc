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
        <div className={styles.heroContent }>
            <h1 className= {styles.heroH1}>Reaching New Heights</h1>
            <p className={styles.heroP}>Quality Roofing Services you can trust.</p>
            <div className={styles.ctaForm}>
                <form id={styles.form}>
                    <input type="text" placeholder= "First Name" required />
                    <input type="text" placeholder= "Last Name" required />
                    <input type="tel" placeholder= "Phone" required />
                    <input type="email" placeholder= "Email" required />
                    <input type="text" placeholder= "address" required />
                    <input type="submit" onSubmit={}>Get free Estimate</input>
                </form>
                
            </div>
        </div>
    </div>
  );
}

export default Hero;