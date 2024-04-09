'use client'
import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css"
import handler from "../pages/api/create-lead";

const Hero = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = {
            display_name: event.target.elements.display_name.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            address: event.target.elements.address.value,
            record_type_name: "Retail",
            status_name: "Lead",
            company: event.target.elements.company ? event.target.elements.company.value : "",
        };

        try {
            const response = await fetch('/api/create-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create lead');
            }

            // Handle success
            console.log('Lead created successfully');
            alert('Form submitted successfully');
        } catch (error) {
            console.error('Error in form submission:', error);
            alert('There was an error submitting the form');
        }
    };

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const heroElement = document.querySelector('.' + styles.hero);

        const handleScroll = () => {
            const { top, height } = heroElement.getBoundingClientRect();
            const startFade = height / 2;
            const fadeEnd = height;
            const newOpacity = Math.min(1, Math.max(0, (fadeEnd - top) / (fadeEnd - startFade)));
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.hero} style={{ opacity }}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroH1}>Reaching New Heights</h1>
                <p className={styles.heroP}>Quality Roofing Services you can trust.</p>
                <div className={styles.ctaForm}>
                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <input type="text" name="first_name" placeholder="First Name"  required/>
                        <input type="text" name="last_name" placeholder="Last Name" required/>
                        <input type="text" name="display_name" placeholder="Full Name" required />
                        <input type="tel" name="phone" placeholder="Phone" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="address" placeholder="Address" required />
                        <button type="submit" className={styles.heroButton}>Get your Free estimate</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;