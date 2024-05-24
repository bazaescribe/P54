import React from "react";
import Styles from './herotwo.module.css';

import Blobs from '@/components/atom/blobs'

const Hero = () => {
  return(
    <div className={Styles.wrapper}>
      {/* <div className={Styles.background}>
        <Blobs></Blobs>
      </div> */}
      <div className={Styles.animationB}></div>
      <div className={Styles.animationA}></div>
      <div className={Styles.foreground}>
        <div className="container">
        <h1>
          Innovation unleashed
        </h1>
        <p>
          We ignite bold ideas and transform them into groundbreaking realities, driving growth and innovation.
        </p>
        </div>

      </div>
      
    </div>
  );

};

export default Hero;