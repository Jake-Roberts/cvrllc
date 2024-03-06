
import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

// const NavBarWithClientSide = dynamic(
//   () => import('../../components/NavBar'),
//   { ssr: false} // this will only render the component on the client side 
// )

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <h3>Welcome to const-temp</h3>
      </main>
    </div>
  )
}
