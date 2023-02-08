import React from 'react';

import FormulaireCreateEvent from './FormulaireCreateEvent';


const DashboardConfig: React.FC = () => {
  const [menu, setMenu] = React.useState('event');

  return (
    <section className="dashboard__config">
      <nav>
        <button className="dashboard__config__menu__item__button"
                onClick={() => setMenu('event')}>
                event
        </button>
        <button className="dashboard__config__menu__item__button"
                onClick={() => setMenu('challenge')}>
                challenge
        </button>
        <button className="dashboard__config__menu__item__button"
                onClick={() => setMenu('config')}>
                config
        </button>
      </nav>
      <div>
        {menu === 'event' && <FormulaireCreateEvent/>}
        {menu === 'challenge' && <p>challenge</p>}
        {menu === 'config' && <p>config</p>}
      </div>
    </section>
  )
};

export default DashboardConfig;
