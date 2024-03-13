import Image from "next/image";
import styles from "../styles/Hero.module.css"


const Hero = () => {
    return ( 
    <div className={styles.hero}>
        <div className={styles.ctaForm}>
            <form>
                <input type="text" placeholder="First Name" required/>
                <input type="text" placeholder="Last Name" required/>
                <input type="tel" placeholder="Phone" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Address (if it's a remodel)"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
        <div className={styles.heroContent}>
            <h1 className= {styles.heroH1}>Reaching New </h1>
            <h1 className= {styles.heroH1}>Heights</h1>
            <p className={styles.heroP}>Quality Roofing Services you can trust.</p>
            <button className= {styles.heroButton}>Free estimate</button>
        </div>
    </div>
  );
}

export default Hero;