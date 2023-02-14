import React from 'react';

import EventContext from '../context/EventContext';

import Event from '../types/Event';
import EventService from '../services/EventService';

import Toolbar from '../components/Toolbar';
import ListCard from '../components/ListCard';

const getEvents = async () => {
  const events = await EventService.getEvents();
  return events;
};

const Home: React.FC = () => {
  const [isUpdate, setIsUpdate] = React.useState(false);
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

  const toggleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  React.useEffect(() => {
    console.log('isUpdate', isUpdate);
  }, [isUpdate]);

  return (
    <div>
      <EventContext.Provider value={{ isUpdate, toggleUpdate }}>
        <div className={isUpdate === true ? 'create' : 'update'}>
          <Toolbar />
          <ListCard events={events} />
        </div>
      </EventContext.Provider>
    </div>
  );
};

export default Home;
