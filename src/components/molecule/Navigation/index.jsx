"use client"

import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className='d-flex align-items-center'>
            <Image src='/brand/logo.png' width={60} height={24} alt='Logo' />
          </div>
          <div className={styles.menu}>
            <button className='btn main'>Connect</button>
          </div>
        </div>
      </nav>
      <div className={`${styles.floatingActionContainer} ${scrolled ? styles.fabScrolled : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.fab}>
            Connect
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navigation;
