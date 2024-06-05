
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
  {url: '../../DJI_0205.JPG', alt: 'Aerial view of a residential neighborhood showing several houses with large yards. The focus is on a gray-roofed house with multiple cars parked in the driveway and along the street. Trees and green lawns are visible, and the area appears peaceful and well-maintained.', type: 'image'},
  {url: '../../DJI_0431.JPG', alt: 'Aerial view of a residential neighborhood focused on a house with a dark shingled roof and a large backyard. The yard includes a well-manicured lawn, a trampoline, a basketball hoop, and several trees and shrubs. The surrounding area shows other houses with spacious yards and greenery, set against a backdrop of mountains in the distance.', type: 'image'},
  {url: '../../DJI_0398.JPG', alt: 'Aerial view of a residential neighborhood showing a house with a dark shingled roof and a boat parked in the driveway. The house has a large, well-maintained yard with various trees and shrubs. Surrounding houses also feature spacious driveways and green lawns. Several cars are parked on the street and in the driveways. The area appears peaceful and suburban, with neatly arranged homes and greenery.', type: 'image'},
  {url: '../../DJI_0585.JPG', alt: 'Aerial view of a suburban neighborhood with a focus on a house with a light gray shingled roof. The driveway has a car and a trailer parked, and the backyard is well-maintained with various plants and trees. Surrounding houses have similar features, with green lawns and trees.', type: 'image'},
  {url: '../../DJI_0548.JPG', alt: 'Aerial view of a neighborhood showing a house with a large, dark shingled roof and a well-kept yard. Several cars are parked in the driveway and on the street. The area is green with many trees and well-maintained lawns. Other houses with similar characteristics are visible in the vicinity.', type: 'image'},
  {url: '../../roofing2.JPG', alt: 'Aerial view of a house with a dark shingled roof and a manicured lawn. The driveway has a red car parked, and the yard is surrounded by trees and shrubs. The neighborhood features similar houses with green lawns and a mix of trees and plants.', type: 'image'},
  {url: '../../DJI_0465.JPG', alt: 'Aerial view of a house with a dark shingled roof, surrounded by lush green trees and bushes. The driveway has several cars parked, and the backyard features a wooden deck with outdoor furniture. The neighborhood has a variety of houses with well-maintained lawns and greenery.', type: 'image'},
  {url: '../../Chaves3.mp4', alt: '"A video showing an aerial view of a residential neighborhood. The footage likely includes various houses with different styles of roofs, driveways with cars, and well-maintained lawns and greenery. The video provides a broad view of the suburban area, highlighting the peaceful and organized layout of the neighborhood.', type: 'video'},
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