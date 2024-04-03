'use client'
import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css"
import handler from "../pages/api/create-lead";

const submitForm = async (formData) => {
    const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        // Handle success
        alert('Form submitted successfully');
      } else {
        // Handle error
        alert('There was an error submitting the form');
      }
  }
  



const Hero = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const form = event.target;
        const formData = {
            name: form.elements.name.value, // Assuming your form has an input with name="name"
            email: form.elements.email.value, // Assuming an input with name="email"
            phone: form.elements.phone.value, // Assuming an input with name="email"
            address: form.elements.address.value, // Assuming an input with name="email"
            // Add other fields as necessary
        };
        
        await submitForm(formData);
    };
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
                <form id={styles.form} onSubmit={handleFormSubmit}>
                    <input type="text" name="name" placeholder= "Full Name" required />
                    <input type="tel" name="phone" placeholder= "Phone" required />
                    <input type="email" name="email" placeholder= "Email" required />
                    <input type="text" name="address" placeholder= "address" required />
                    <button type="submit"  className={styles.heroBtn}>Get your Free estimate</button>
                </form>
                
            </div>
        </div>
    </div>
  );
}

export default Hero;