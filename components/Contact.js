import React from 'react';
import Image from 'next/image';
import styles from '../styles/Contacts.module.css'; // Adjust path as needed
import InstagramLogo from '../public/InstagramLogo.svg'
import faceBookIcon from '../public/facebookIcon.svg'
import youtubeIcon from '../public/youtubeIcon2.svg'

const Contact = () => {
  return (
    <>
        <section id="contact" className={styles.contactContainer}>
            <div className={styles.contactContent}>
            <h2>Let's Talk!</h2>
            <div className={styles.info} >
                <div className={styles.address}>
                    <address>
                    Cedar Valley Roofing.<br/>
                    369 N 100 W #8.<br/>
                    Cedar City, UT 84720
                    </address>
                </div>
                <div className={styles.contactInfo}>
                    <div>
                        Phone: 435-559-7134 <br/>
                        Email: cvrroofing32@gmail.com <br/>
                        <p>Our Socials: <a href="https://www.instagram.com/cedarvalleyroofing" target="_blank" rel="noopener noreferrer" className={styles.socials}>
                            <Image src={InstagramLogo} alt="Instagram" width={50} height={50} />
                        </a><a href="https://www.facebook.com/cedarvalleyroofingllc" target="_blank" rel="noopener noreferrer" className={styles.socials}>
                            <Image src={faceBookIcon} alt="Instagram" width={50} height={50} />
                        </a>
                        <a href="https://www.youtube.com/channel/UC0cT-9ueYeQYfRkSApQedJw" target="_blank" rel="noopener noreferrer" className={styles.socials}>
                            <Image src={youtubeIcon} alt="Instagram" width={50} height={50} />
                        </a>
                        </p>
                        
                    </div>
                    
                    
                </div>
                
            </div>      
                <div className={styles.estimate}>
                    <button className={styles.estimateBtn}><a href="#hero">Get Your Free Estimate</a></button>
                </div>
            </div>
        </section>
        <footer className={styles.footer}>
            <p className={styles.copyright}>Copyright © 2024 Cedar Valley Roofing, LLC.<br/>All Rights Reserved.</p>
        </footer>
    </>
  );
};

export default Contact;
