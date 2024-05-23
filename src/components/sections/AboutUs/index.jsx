import React from "react";
import Styles from "./AboutUs.module.css"

import Image from "next/image";

import Title from '@/components/atom/title';
import Sticky from '@/components/molecule/Sticky';

const AboutUs = () =>{
  return(
    <section className={Styles.aboutus}>
      <div className="container row gap-200">
        <div>
          <Sticky>
            <Title sectionText="About us" titleText="Here's to the crazy ones" />
            <p>
              At P54, we celebrate the unconventional, the bold, and the visionary. We believe that the greatest innovations come from those who challenge the norm. Our mission is to ignite bold ideas and transform them into groundbreaking realities, driving growth and fostering innovation.
            </p>
            <p>
              Built on the pillars of creativity, collaboration, and excellence, P54 has empowered leading organizations to shape their future. Our multidisciplinary approach integrates strategy, design, and technology to deliver solutions that are as unique as the challenges they address.
            </p>
            <p>
              Join us in celebrating the crazy ones – the dreamers, the innovators, the pioneers. Together, let&#39;s create the future.
            </p>
          </Sticky>
        </div>
        <div>
          <Image src="/assets/concepts.png" height={1700} width={600} alt="Concepts images"></Image>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;