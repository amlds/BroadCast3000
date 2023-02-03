import React from 'react';

import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur broasdcast3000</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/device">Device</Link>
    </div>
  );
};

export default Home;
