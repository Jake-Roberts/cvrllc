
'use client'
import React, {useRef, useEffect, useCallback} from "react";
import  useEmblaCarousel  from 'embla-carousel-react';
import styles from '../styles/Gallery.module.css';


const Gallery = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center',});
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);


  // After the embla instance is initialized, bind the button 
  useEffect(() => {
    // Directly use scrollPrev and scrollNext since they're now stable references
    if (emblaApi) {
      const prevBtn = prevButtonRef.current;
      const nextBtn = nextButtonRef.current;
      
      if (prevBtn) prevBtn.addEventListener('click', scrollPrev);
      if (nextBtn) nextBtn.addEventListener('click', scrollNext);
  
      // Return cleanup function
      return () => {
        if (prevBtn) prevBtn.removeEventListener('click', scrollPrev);
        if (nextBtn) nextBtn.removeEventListener('click', scrollNext);
      };
    }
  }, [emblaApi, scrollPrev, scrollNext]); // Add scrollPrev and scrollNext to the dependency array
  

    return (
      <>
        <div className={styles.container}>
          <h2 className={styles.ourWork}>Our Work</h2>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {images.map((item, index) => (
                <div className={styles.embla__slide} key={index}>
                {item.type === 'image' ? (
                  <img src={item.url} alt={images.alt} className={styles.embla__image}/>
                ) : (
                  <video controls className={styles.embla__image}>
                    <source src={item.url} type="video/mp4"/>
                  </video>
                )}
                </div>
              ))}
            </div>
            <div className={styles.buttonsContainer}>
              <button ref={prevButtonRef} className={`${styles.customArrow} ${styles.prevArrow}`}>&#10094;</button>
              <button ref={nextButtonRef} className={`${styles.customArrow} ${styles.nextArrow}`}>&#10095;</button>
            </div>
          </div>
          
          <button className={styles.seeMore} ><a href="https://www.facebook.com/cedarvalleyroofingllc">See More!</a></button>
        </div>
        
      </>
    );
  };

  export default Gallery;
