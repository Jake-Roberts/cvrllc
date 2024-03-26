
'use client'
import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Hero from "../../components/hero";
import Gallery from "../../components/Gallery";

const imageList = [
  {url: '../../DJI_0205.JPG', alt: 'First Image'},
  {url: '../../DJI_0206.JPG', alt: 'Second Image'},
  {url: '../../DJI_0214.JPG', alt: 'Third Image'},
  {url: '../../DJI_0217.JPG', alt: 'Fourth Image'},
  {url: '../../DJI_0240.JPG', alt: 'Fifth Image'},
];


export default function Home() {
  return (
    <div>
      <header className= {styles.NavBar}><NavBar /></header>
      <main>
        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.Gallery}>
          <Gallery images={imageList}/>
        </div>  
      </main>
    </div>
  )
}
