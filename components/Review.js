'use client'
import React from 'react';
import styles from '../styles/Review.module.css'; // Adjust path as needed
import Image from 'next/image';
import googleLogo from '../public/googlelogo.svg'; // Adjust path as needed

const GoogleReviewsSection = () => {
  return (
    <section id="googleReviews" className={styles.reviewsSection}>
        <div className={styles.leftContent}>
            <div className={styles.reviewsHeader}>
                <Image className={googleLogo} src={googleLogo} alt="Google Logo" width={120} height={120} style={{width: '15%', height: 'auto'}} />
                <h2>Google Reviews</h2>
            </div>
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.reviewsContent}>
              <div className={styles.reviewsEmbed}>
                  <iframe 
                    src='https://e1bccc40dca247b392f6c1865c66fae5.elf.site' 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none'}} 
                    scrolling='no'
                    title='Google reviews gallery'
                    allow="encrypted-media">
                  </iframe>
              </div> 
                <div className={styles.reviewButtonWrapper}>
                {/* Star ratings and review button */}
                <button className={styles.reviewButton} onClick={() => window.open("https://www.google.com/search?q=cedar+valley+roofing+llc&rlz=1C1GCEA_enUS844US844&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkyMDcxajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0xaf6c561aa9bbcc29:0x54fa30af42bfd3da,1,,,,", "_blank")}>Leave a Review</button>
                </div>
            </div>
        </div>  
        
      
    </section>
  );
};

export default GoogleReviewsSection;
