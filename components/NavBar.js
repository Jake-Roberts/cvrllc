// NavBar.js
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.hamburger}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a><Image src="/CedarValleyRoofingLogo2.png" alt="Company Logo" width={250} height={250} /></a>
          </Link>
        </div>
      </div>
      
      {/* Nav Links */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/work">Our Work</Link></li>
          <li><Link href="/team">The Team</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <button className={`${styles.hamburger} ${isOpen ? styles.change : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {/* Icon or text for menu toggle */}
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default NavBar;
