import React from 'react';
import styles from './ClientsGrid.module.css';

const ClientsGrid = ({ clients }) => {
  return (
    <div className={styles.grid}>
      {clients.map((client, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={client.src} alt={client.alt} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ClientsGrid;
