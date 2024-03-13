'use client'
import Link from 'next/link';
import React from 'react';
import styles from '../styles/NavBar.module.css'
import Image from 'next/image';


const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false); // For mobile menu toggle

    return (
      <header className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" legacyBehavior>
              <Image src="/Logo.jpg" alt="Company Logo" width={150} height={75} />  
            </Link>
          </div>

          {/* Hamburger Icon*/}
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            {/* Icon or text for menu toggle */}
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Links */}
          <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <ul>
              <li><Link href="/about" legacyBehavior><a>About Us</a></Link></li>
              <li><Link href="/services" legacyBehavior><a>Services</a></Link></li>
              <li><Link href="/projects" legacyBehavior><a>Projects</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default NavBar;
