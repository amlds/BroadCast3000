import React from 'react';

import FormulaireCreateEvent from './FormulaireCreateEvent';


const DashboardConfig: React.FC = () => {
  const [menu, setMenu] = React.useState('event');

  return (
    <section className="dashboard__config">
      <nav>
        <button className="nav_button"
                onClick={() => setMenu('event')}>
                Event
        </button>
        <button className="nav_button"
                onClick={() => setMenu('challenge')}>
                Challenge
        </button>
        <button className="nav_button"
                onClick={() => setMenu('config')}>
                Config
        </button>
      </nav>
      {menu === 'event' && <FormulaireCreateEvent/>}
      {menu === 'challenge' && <p>challenge</p>}
      {menu === 'config' && <p>config</p>}
    </section>
  )
};

export default DashboardConfig;
