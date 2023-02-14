import React from 'react';

import Toolbar from '../components/Toolbar';

import ThemeContext from '../context/ThemeContext';



const Home: React.FC = () => {
  const [theme, setTheme] = React.useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);


  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === true ? 'dark' : 'light'}>
          <Toolbar />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Home;
