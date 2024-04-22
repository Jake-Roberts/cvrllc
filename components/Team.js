import React from "react";
import styles from "../styles/Team.module.css"; // Adjust the path as necessary
import Image from "next/image";

const TheTeam = () => {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.teamTitle}>The Team</h1>
      <div className={styles.teamGrid}>
        {/* First Team Member */}
        <div className={styles.teamMember}>
          <img src="/Nelson.jpg" alt="First Team Member" className={styles.memberImage} width={200} height={200} />
          <div className={styles.textContainer}>
            <h2>Nelson</h2>
            <p>Founder/Roofing Specialist</p>
          </div>
        </div>
        {/* Second Team Member */}
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <h2>Landon</h2>
            <p>Inspection Specialist.</p>
          </div>
          <Image src="/Landon.jpg" alt="Second Team Member" className={styles.memberImage} width={200} height={200}/>
        </div>
        {/* Third Team Member */}
        <div className={styles.teamMember}>
          <Image src="/Danielle.jpg" alt="Third Team Member" className={styles.memberImage} width={200} height={200}/>
          <div className={styles.textContainer}>
            <h2>Danielle</h2>
            <p>Office Manager.</p>
          </div>
        </div>
        {/* Second Team Member */}
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <h2>Jake</h2>
            <p>Social Media Manager.</p>
          </div>
          <Image src="/Jake.jpg" alt="fourth Team Member" className={styles.memberImage} width={200} height={200}/>
        </div>
        <div className={styles.teamMember}>
          <Image src="/david2.jpg" alt="fifth Team Member" className={styles.memberImage} width={200} height={200}/>
          <div className={styles.textContainer}>
            <h2>David</h2>
            <p>Inspection Specialist.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TheTeam;

