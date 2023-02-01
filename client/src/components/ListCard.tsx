import React from 'react';

import Event from '../data/event.json';

import CardEvent from './CardEvent';


interface Props {
  id: number;
  start: string;
}

const getEventByTime = (time: string) => {
  return Object.values(Event).filter((event: Props) => {
    console.log(event.start);
    console.log(time);
    return event.start > time;
  });
};

const ListCard: React.FC = () => {
  let Time = new Date().toISOString();
  const [time, setTime] = React.useState(Time);
  const [allEvent, setAllEvent] = React.useState(getEventByTime(time));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toISOString());
    }, 10000);
    return () => clearInterval(interval);
  }, [time]);

  React.useEffect(() => {
    setAllEvent(getEventByTime(time));
  }, [time]);

  return (
    <div>
      <div className="listCard">
        <div className="listCard__content">
          {Object.values(allEvent).map((event) => (
            <CardEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
