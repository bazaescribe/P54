import React from 'react';

import CardsGrid from '../../molecule/CardsGrid';
import Title from '@/components/atom/title';

const Services = ({}) => {

  const cards = [
    {
      image: '/services/cloud.png',
      title: 'Cloud',
      paragraph: 'Harness the power of cloud computing to drive innovation, scalability, and agility in your organization.'
    },
    {
      image: '/services/cybersecurity.png',
      title: 'Cybersecurity',
      paragraph: 'Protect your digital assets with advanced cybersecurity solutions and strategies.'
    },
    {
      image: '/services/data-ai.png',
      title: 'Data & AI',
      paragraph: 'Leverage data analytics and artificial intelligence to gain insights and drive intelligent decisions.'
    },
    {
      image: '/services/enterprise.png',
      title: 'Enterprise Platforms',
      paragraph: 'Transform your business operations with robust enterprise platforms tailored to your needs.'
    },
    {
      image: '/services/strategy.png',
      title: 'Strategy',
      paragraph: 'Develop effective strategies that drive growth and competitive advantage.'
    },
    {
      image: '/services/digitaltransformation.png',
      title: 'Digital Transformation',
      paragraph: 'Transform your business with cutting-edge digital solutions and strategies.'
    },
    {
      image: '/services/learning.png',
      title: 'Learning',
      paragraph: 'Empower your team with cutting-edge learning and development programs.'
    },
    {
      image: '/services/branding.png',
      title: 'Branding',
      paragraph: 'Create a strong brand identity that resonates with your target audience and sets you apart.'
    },
    {
      image: '/services/design.png',
      title: 'Design',
      paragraph: 'Enhance user experience with innovative and intuitive design solutions.'
    },
    {
      image: '/services/development.png',
      title: 'Development',
      paragraph: 'Build robust and scalable applications with our expert development services.'
    },
    {
      image: '/services/metaverse.png',
      title: 'Metaverse',
      paragraph: 'Explore new opportunities and create immersive experiences in the metaverse.'
    }
  ];  

  return (
    <article className="">
      <div>
        <Title sectionText="Our services" titleText="What we do?" />
        <CardsGrid cards={cards} />
      </div>
    </article>
  );
};



export default Services;
