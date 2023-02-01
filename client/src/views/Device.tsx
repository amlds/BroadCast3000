import React from 'react';

import ListCard from '../components/ListCard';
import '../assets/views/device.scss'

const Devices: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Vue devices</h1>
      </section>
      <section>
        <ListCard />
      </section>
    </main>
  );
};

export default Devices;
