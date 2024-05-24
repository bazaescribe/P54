import React from "react";
import Styles from "./AboutUs.module.css"

import Image from "next/image";

import Title from '@/components/atom/title';
import Sticky from '@/components/molecule/Sticky';
import FancyMockups from '@/components/organism/fancyMockups'

const AboutUs = () =>{
  return(
    <section className={Styles.aboutus}>
      <div className="container">
        <div className="row gap-200">
          <div>
            <Sticky>
              <Title sectionText="About us" titleText="Here's to the crazy ones" />
              <p>
                We believe innovation comes from challenging the norm. Our mission is to transform bold ideas into groundbreaking realities, driving growth and fostering innovation.
              </p>
              <p>
                Our multidisciplinary approach integrates strategy, design, and technology to deliver unique solutions.
              </p>
            </Sticky>
          </div>
          <FancyMockups></FancyMockups>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;