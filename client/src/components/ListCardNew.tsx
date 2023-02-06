import React from 'react';

import Event from '../types/Event';
import CardEvent from './CardEvent';


interface Props {
  events: Event[];
}


const ListCardNew: React.FC<Props> = ({ events }) => {
  console.log("events");
  console.log(events);

  return (
    <div className="listCard">
      <span className='shadow'></span>
      <h2 className='listCard__title'>Nos prochains events :</h2>
      <div className='listCard__content'>
        {Object.values(events).map((event: Event) => (
          <CardEvent event={event}/>
        ))}
      </div>
      <span className='shadow'></span>
    </div>
  );
};

export default ListCardNew;
