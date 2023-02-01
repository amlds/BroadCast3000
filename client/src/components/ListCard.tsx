import React from 'react';

import Event from '../data/event.json';

import CardEvent from './CardEvent';


interface Props {
  id: number;
  start: string;
  end: string;
}

const getEventByTime = (time: string) => {
  return Object.values(Event).filter((event: Props) => {
    return event.end > time;
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
    <div className="listCard">
      {Object.values(allEvent).map((event) => (
        <CardEvent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default ListCard;
