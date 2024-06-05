'use client '
import React from "react";
import Image from "next/image";
import styles from "../styles/WhyUs.module.css"; // Make sure the path is correct

import YearsIcon from '../public/house.svg'; // Adjust path
import PeopleIcon from '../public/customer.svg'; // Adjust path
import RoofsIcon from '../public/briefcase.svg'; // Adjust path

const WhyUs = () => {
  return (
    <section id="whyUS" className={styles.whyUs}>
      <h2 className={styles.whyUsTitle}>Why Cedar Valley Roofing?</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <Image src={YearsIcon} width={200} height={200} alt="Years in Business" className={styles.statIcon} />
          <strong>110+</strong>
          <p>Roofs Completed</p>
        </div>
        <div className={styles.statItem}>
          <Image src={RoofsIcon} width={200} height={200} alt="Roofs Completed" className={styles.statIcon} />
          <strong>40+</strong>
          <p>Communities Served</p>
        </div>
        <div className={styles.statItem}>
          <Image src={PeopleIcon} width={200} height={200} alt="People Served" className={styles.statIcon} />
          <strong>110+</strong>
          <p>Happy Homeowners</p>
        </div>
      </div>
      <div className={styles.owensPreferredImage}>
        <Image src="/owenPreferredContractor.png" alt="owens preferred contractor" width={800} height={0} style={{width: '100%', height: 'auto'}}/>
      </div>
    </section>
  );
};

export default WhyUs;
