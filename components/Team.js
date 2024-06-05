import React from "react";
import styles from "../styles/Team.module.css"; // Adjust the path as necessary
import Image from "next/image";

const TheTeam = () => {
  return (
    <section id="theTeam" className={styles.theTeam}>
      <h2 className={styles.teamTitle}>The Team</h2>
      <div className={styles.teamGrid}>
        <div className={styles.teamMember}>
          <Image src="/NelsonOptimized.jpg" alt="Nelson" className={styles.memberImage} width={200} height={200} />
          <div className={styles.textContainer}>
            <p className={styles.name}>Nelson</p>
            <p className={styles.title}>Roofing Specialist</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <p className={styles.name}>Rony</p>
            <p className={styles.title}>Roofing Specialist</p>
          </div>
          <Image src="/RonyOptimized.jpg" alt="Rony" className={styles.memberImage} width={200} height={200}/>
        </div>
        <div className={styles.teamMember}>
          <Image src="/JoseOptimized.jpg" alt="Jose" className={styles.memberImage} width={200} height={200}/>
          <div className={styles.textContainer}>
            <p className={styles.name}>Jose</p>
            <p className={styles.title}>Roofing Specialist</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <p className={styles.name}>Landon</p>
            <p className={styles.title}>Inspection Specialist</p>
          </div>
          <Image src="/LandonOptimized.jpg" alt="Landon" className={styles.memberImage} width={200} height={200}/>
        </div>
        <div className={styles.teamMember}>
          <Image src="/DavidOptimized.jpg" alt="David" className={styles.memberImage} width={200} height={200}/>
          <div className={styles.textContainer}>
            <p className={styles.name}>David</p>
            <p className={styles.title}>Inspection Specialist</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <p className={styles.name}>Danielle</p>
            <p className={styles.title}>Office Manager</p>
          </div>
          <Image src="/DanielleOptimized.jpg" alt="Danielle" className={styles.memberImage} width={200} height={200}/>
        </div>
        <div className={styles.teamMember}>
          <Image src="/JakeOptimized.jpg" alt="Jake" className={styles.memberImage} width={200} height={200}/>
          <div className={styles.textContainer}>
            <p className={styles.name}>Jake</p>
            <p className={styles.title}>Tech Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTeam;

