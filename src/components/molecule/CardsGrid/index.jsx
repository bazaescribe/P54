import React from 'react';
import styles from './CardsGrid.module.css';

import Image from 'next/image';

const CardsGrid = ({ cards }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <Image src={card.image} alt={card.title} className={styles.image} width={600} height={600}></Image>
          <div className={styles.content}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.paragraph}>{card.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
