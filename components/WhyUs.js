'use client '
import React from "react";
import Image from "next/image";
import styles from "../styles/WhyUs.module.css"; // Make sure the path is correct

import YearsIcon from '../public/homeicon.svg'; // Adjust path
import PeopleIcon from '../public/peopleicon2.svg'; // Adjust path
import RoofsIcon from '../public/toolboxicon2.svg'; // Adjust path

const WhyUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <h1 className={styles.whyUsTitle}>Why Us!</h1>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <Image src={YearsIcon} width={400} height={400} alt="Years in Business" className={styles.statIcon} />
          <p>Years in Business:</p>
          <strong>5</strong>
        </div>
        <div className={styles.statItem}>
          <Image src={PeopleIcon} width={400} height={400} alt="People Served" className={styles.statIcon} />
          <p>People Served:</p>
          <strong>100+</strong>
        </div>
        <div className={styles.statItem}>
          <Image src={RoofsIcon} width={400} height={400} alt="Roofs Completed" className={styles.statIcon} />
          <p>Roofs Completed:</p>
          <strong>100+</strong>
        </div>
      </div>
      <div className={styles.owensPreferredImage}>
        <Image src="/../owenPreferredContractor.png" alt="owens preferred contractor" width={800} height={400}/>
      </div>
    </section>
  );
};

export default WhyUs;
