import React from 'react';

import EventsConfig from './EventsConfig';
import Settings from './Settings';


const DashboardConfig: React.FC = () => {
  const [menu, setMenu] = React.useState('Settings');
  const buttons = document.querySelectorAll('.nav__button');

  const handlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent)
    setMenu(e.currentTarget.textContent);
    buttons.forEach((button) => {
      button.classList.remove('nav__button--active');
    });
    e.currentTarget.classList.add('nav__button--active');
  };

  return (
    <section className="dashboard__config">
      <nav>
        <button className="nav__button"
                onClick={handlClick}>
                Events
        </button>
        <button className="nav__button"
                onClick={handlClick}>
                Settings
        </button>
      </nav>
      {menu === 'Events' && <EventsConfig />}
      {menu === 'Settings' && <Settings />}
    </section>
  )
};

export default DashboardConfig;
