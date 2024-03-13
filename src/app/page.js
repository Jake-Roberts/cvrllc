
import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Hero from "../../components/hero";


export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  )
}
