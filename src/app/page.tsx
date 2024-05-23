import Image from "next/image";
import styles from "./page.module.css";

// component imports
import Hero from '@/components/organism/herotwo';
import Navigation from '@/components/molecule/Navigation';
import AboutUs from '@/components/sections/AboutUs';
import Clients from '@/components/sections/Clients/clients';
import Services from '@/components/sections/Services'


export default function Home() {

  return (
    <main className={styles.main}>
      <Navigation></Navigation>
      
      <Hero></Hero>

      <AboutUs></AboutUs>
      <section className="container d-flex flex-direction-column gap-1000 py-1000">
        <Services></Services>
        <Clients></Clients>
      </section>

    </main>
  );
}
