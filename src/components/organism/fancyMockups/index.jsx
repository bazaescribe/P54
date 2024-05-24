"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from './FancyMockups.module.css';

const FancyMockups = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document.querySelectorAll('.mockup').forEach((mockup, index) => {
        const speed = mockup.getAttribute('data-speed') || 0.1 * (index + 1);
        const rotation = scrollPosition * speed * (index % 2 === 0 ? 1 : -1); // Clockwise for even indexes, counterclockwise for odd
        mockup.style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className={Styles.mockupContainer}>
          <Image className="mockup" data-speed="0.02" src="/assets/mock-1.png" height={500} width={250} alt="Concepts images" />
          <Image className="mockup" data-speed="0.04" src="/assets/mock-2.png" height={500} width={250} alt="Concepts images" />
          <Image className="mockup" data-speed="0.08" src="/assets/mock-3.png" height={500} width={250} alt="Concepts images" />
          <Image className="mockup" data-speed="0.04" src="/assets/mock-4.png" height={500} width={250} alt="Concepts images" />
          <Image className="mockup" data-speed="0.02" src="/assets/mock-5.png" height={500} width={250} alt="Concepts images" />
        </div>
    </div>
  );
}

export default FancyMockups;
