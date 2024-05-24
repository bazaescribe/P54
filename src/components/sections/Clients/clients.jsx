import React from 'react';
import styles from './Clients.module.css';

import ClientsGrid from '../../molecule/clientsGrid';
import Title from '@/components/atom/title';
import Sticky from '@/components/molecule/Sticky';

const Clients = ({}) => {
  const clients = [
    { src: 'clients/telcel.png', alt: 'Client 1' },
    { src: 'clients/liverpool.png', alt: 'Client 1' },
    { src: 'clients/nyt.png', alt: 'Client 1' },
    { src: 'clients/allianz.png', alt: 'Client 1' },
    { src: 'clients/tupperware.png', alt: 'Client 1' },
    { src: 'clients/fandeli.png', alt: 'Client 1' },
    { src: 'clients/recubre.png', alt: 'Client 1' },
    { src: 'clients/homely.png', alt: 'Client 1' },
    { src: 'clients/aliada.png', alt: 'Client 1' },
    { src: 'clients/cementosfortaleza.png', alt: 'Client 1' },
    { src: 'clients/gruposalinas.png', alt: 'Client 1' },
    { src: 'clients/microsoft.png', alt: 'Client 1' },
    { src: 'clients/cementosfortaleza.png', alt: 'Client 1' },,
    { src: 'clients/banorte.png', alt: 'Client 1' },
    // Add more client objects as needed
  ];

  return (
    <article className="">
      <div className="row gap-200">
        <ClientsGrid clients={clients} />
        <div className={styles.right}>
          <Sticky>
            <Title sectionText="Our partners" titleText="Delivering innovation" />
              <p>
                For over a decade, we&#39;ve partnered with clients ranging from small startups to large enterprises, all united by a common goal: innovation.
              </p>
              <p>
                Our clients benefit from our deep expertise and commitment to pushing the boundaries of what&#39;s possible. Together, we&#39;re not just meeting today&#39;s challenges; we&#39;re anticipating and shaping the future.
              </p>
          </Sticky>
        </div>
      </div>
    </article>
  );
};



export default Clients;
