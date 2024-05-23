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
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container d-flex justify-content-between">
        <div>
          <Image src='/brand/logo.png' width={60} height={24} alt='Logo' />
        </div>
        <div>
          Connect
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
