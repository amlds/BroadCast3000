import React from 'react';

import EventContext, { defaultState } from '../context/EventContext';

import Event from '../types/Event';
import EventService from '../services/EventService';

import Toolbar from '../components/Toolbar';
import ListCard from '../components/ListCard';
import EventUpdate from '../types/EventUpdate';

const getEvents = async () => {
  const events = await EventService.getEvents();
  return events;
};

const Home: React.FC = () => {
  const [eventsUpdate, setEventsUpdate] = React.useState<EventUpdate[]>(defaultState.eventsUpdate);
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

  const toggleIsUpdate = (id: string) => {
    setEventsUpdate(prevEvents =>
      prevEvents.map(event => {
        if (event.id === id) {
          return { ...event, isUpdate: !event.isUpdate };
        }
        return event;
      })
    );
  };

  return (
    <div>
      <EventContext.Provider value={{ eventsUpdate, toggleIsUpdate }}>
        <Toolbar />
        <ListCard events={events} />
      </EventContext.Provider>
    </div>
  );
};

export default Home;
