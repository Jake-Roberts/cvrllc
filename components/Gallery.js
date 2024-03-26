'use client'
import React, {useRef, useEffect} from "react";
import  useEmblaCarousel  from 'embla-carousel-react';
import styles from '../styles/Gallery.module.css';


const Gallery = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center',});
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev
  const scrollNext = () => emblaApi && emblaApi.scrollNext

  // After the embla instance is initialized, bind the button 
  useEffect(() => {
    if (emblaApi) {
      prevButtonRef.current.addEventListener('click', scrollPrev);
      nextButtonRef.current.addEventListener('click', scrollNext);
    }
    return () => {
      if (emblaApi) {
        prevButtonRef.current.removeEventListener('click', scrollPrev);
        nextButtonRef.current.removeEventListener('click', scrollNext);
      }
    };
  }, [emblaApi]);

    return (
      <>
        <div className={styles.container}>
          <p className={styles.ourWork}>Our Work</p>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {images.map((images, index) => (
                <div className={styles.embla__slide} key={index}>
                  <img src={images.url} alt={images.alt} className={styles.embla__image}/>
                </div>
              ))}
            </div>
            <button ref={prevButtonRef} className={`${styles.customArrow} ${styles.prevArrow}`}>Prev</button>
            <button ref={nextButtonRef} className={`${styles.customArrow} ${styles.nextArrow}`}>Next</button>
          </div>
          <button className={styles.seeMore} >SeeMore</button>
        </div>
        
      </>
    );
  };

  export default Gallery;
