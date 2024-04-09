
'use client'
import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from "../../components/hero";
import Gallery from "../../components/Gallery";
import OurMission from "../../components/OurMission";
import Services from "../../components/Services";
import TheTeam from "../../components/Team";
import WhyUs from "../../components/WhyUs";
import GoogleReviewsSection from "../../components/Review";
import Contact from "../../components/Contact";

const imagesList = [
  {url: '../../DJI_0205.JPG', alt: 'First Image'},
  {url: '../../DJI_0363.JPG', alt: 'Second Image'},
  {url: '../../DJI_0398.JPG', alt: 'Third Image'},
  {url: '../../DJI_0585.JPG', alt: 'Fourth Image'},
  {url: '../../DJI_0548.JPG', alt: 'Fifth Image'},
  {url: '../.', alt: 'six Image'},
];


export default function Home() {
  return (
    <div>
      <header className= {styles.navBar}><NavBar /></header>
      <main>
        <div className={styles.hero}>
          <Hero />
        </div>
        <section className={styles.ourMission}>
          <OurMission />
        </section> 
        <section className={styles.services}>
          <Services/>
        </section>
        <div className={styles.gallery}>
          <Gallery images= {imagesList}/>
        </div> 
        <section className={styles.theTeam}>
          <TheTeam />
        </section>
        <section className={styles.whyUs}>
          <WhyUs />
        </section>
        <section className={styles.googleReviewsSection}>
          <GoogleReviewsSection />
        </section>
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  )
}
