
'use client'
import Image from "next/image";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

import Hero from "../../components/hero";
import Gallery from "../../components/Gallery";
import OurMission from "../../components/OurMission";
import Services from "../../components/Services";
import TheTeam from "../../components/Team";
import WhyUs from "../../components/WhyUs";
import GoogleReviewsSection from "../../components/Review";
import Contact from "../../components/Contact";

const imagesList = [
  {url: '../../DJI_0205.JPG', alt: 'First Image', type: 'image'},
  {url: '../../DJI_0431.JPG', alt: 'Second Image', type: 'image'},
  {url: '../../DJI_0398.JPG', alt: 'Third Image', type: 'image'},
  {url: '../../DJI_0585.JPG', alt: 'Fourth Image', type: 'image'},
  {url: '../../DJI_0548.JPG', alt: 'Fifth Image', type: 'image'},
  {url: '../../roofing2.JPG', alt: 'sixth Image', type: 'image'},
  {url: '../../DJI_0465.JPG', alt: 'Seventh Image', type: 'image'},
  {url: '../../Chaves3.mp4', alt: 'Video3', type: 'video'},
];


export default function Home() {
  return (
  <>
    <div>
      <NavBar />
      <main>
        <Hero />
        <OurMission />
        <Services/>
        <div id="ourWork" className={styles.gallery}>
          <Gallery images= {imagesList}/>
        </div> 
        <TheTeam />
        <WhyUs />
        <GoogleReviewsSection />
      </main>
      <Contact/>
    </div>
  </>
  )
}