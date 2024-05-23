import React from "react";
import Styles from './Hero.module.css';

import Blobs from '@/components/atom/blobs'

const Hero = () => {
  return(
    <header className={Styles.hero}>
      <Blobs></Blobs>
      <div className={Styles.content}>
        <div className="container">
        <h1>Innovation unleashed</h1>
        <h5>We ignite bold ideas and transform them into groundbreaking realities, driving growth and innovation.</h5>
        </div>
        
      </div>
    </header>
  );

};

export default Hero;