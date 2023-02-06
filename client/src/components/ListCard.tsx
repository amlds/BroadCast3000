import React from 'react';

import EventService from '../services/EventService';
import Event from '../types/Event'

import CardEvent from './CardEvent';

const getEvents = async () => {
  const events = await EventService.getEvents();
  return events;
}

const ListCard: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([]);

  React.useEffect(() => {
    getEvents().then((events) => {
      const sortedEvents = events.sort((a, b) => {
        return new Date(a.endEvent).getTime() - new Date(b.endEvent).getTime();
      });
      const filteredEvents = sortedEvents.filter((event) => {
        return new Date(event.endEvent).getTime() > new Date().getTime();
      });
      setEvents(filteredEvents);
    });
  }, []);

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

export default ListCard;
