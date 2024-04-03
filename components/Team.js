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
          <img src="../Profileplaceholder.jpeg" alt="First Team Member" className={styles.memberImage} />
          <div className={styles.textContainer}>
            <h2>Nelson</h2>
            <p>Description of the first team member.</p>
          </div>
        </div>
        {/* Second Team Member */}
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <h2>Landon</h2>
            <p>Description of the first team member.</p>
          </div>
          <img src="../Profileplaceholder.jpeg" alt="Second Team Member" className={styles.memberImage}/>
        </div>
        {/* Third Team Member */}
        <div className={styles.teamMember}>
          <img src="../Profileplaceholder.jpeg" alt="Third Team Member" className={styles.memberImage}/>
          <div className={styles.textContainer}>
            <h2>Ronnie</h2>
            <p>Description of the first team member.</p>
          </div>
        </div>
        {/* Second Team Member */}
        <div className={styles.teamMember}>
          <div className={styles.textContainer}>
            <h2>Jose</h2>
            <p>Description of the first team member.</p>
          </div>
          <img src="../Profileplaceholder.jpeg" alt="fourth Team Member" className={styles.memberImage}/>
        </div>
      </div>
    </section>
  );
};

export default TheTeam;

