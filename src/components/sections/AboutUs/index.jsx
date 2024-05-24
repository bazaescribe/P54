import React from "react";
import Styles from "./AboutUs.module.css"

import Image from "next/image";

import Title from '@/components/atom/title';
import Sticky from '@/components/molecule/Sticky';

const AboutUs = () =>{
  return(
    <section className={Styles.aboutus}>
      <div className="container">
        <div className="row gap-200">
          <div>
            <Sticky>
              <Title sectionText="About us" titleText="Here's to the crazy ones" />
              <p>
                At P54, we celebrate the bold and visionary. We believe innovation comes from challenging the norm. Our mission is to transform bold ideas into groundbreaking realities, driving growth and fostering innovation.
              </p>
              <p>
                P54 empowers organizations to shape their future with creativity, collaboration, and excellence. Our multidisciplinary approach integrates strategy, design, and technology to deliver unique solutions.
              </p>
              <p>
                Together, let&#39;s create the future.
              </p>
            </Sticky>
          </div>
          <div>
            <Image src="/assets/concepts.png" height={1700} width={600} alt="Concepts images"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;