import Image from "next/image";
import styles from "../styles/Hero.module.css"


const Hero = () => {
    <div className= {styles.hero}>
        <div className= {styles.heroContent}>
            <h1>Reaching New Heights</h1>
            <p>Quality Roofing Services you can trust.</p>
            <button> free estimate</button>
        </div>
    </div>
}

export default Hero;