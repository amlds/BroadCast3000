import React from 'react';

import { Link } from 'react-router-dom';
import ListCard from '../components/ListCard';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur broasdcast3000</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/device">Device</Link>

      <section>
        <h2>Les derniers événements</h2>
        <ListCard />
      </section>
    </div>
  );
};

export default Home;
