import React from 'react';
import { Link } from 'react-router-dom';

import { createContext } from "react";

import SwitchTheme from '../components/SwitchTheme';

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("light");

const Home: React.FC = () => {
  const [theme, setTheme] = React.useState<ThemeContextType>("light");

  return (
    <div>
      <h1>Bienvenue sur broasdcast3000</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/device">Device</Link>

      <ThemeContext.Provider value={theme}>
        <SwitchTheme setTheme={setTheme} />
      </ThemeContext.Provider>
    </div>
  );
};

export default Home;
