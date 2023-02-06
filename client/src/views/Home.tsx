import React from 'react';
import { Link } from 'react-router-dom';

import EventService from '../services/EventService';
import Event from '../types/Event'

import ListCardNew from '../components/ListCardNew';

const getEvents = async () => {
  const events = await EventService.getEvents();
  return events;
}


const Home: React.FC = () => {
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
    console.log(events);
  }, []);

  return (
    <div>
      <h1>Bienvenue sur broasdcast3000</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/device">Device</Link>

      <section>
        <h2>Les derniers événements</h2>
        <ListCardNew events={events} />
      </section>
    </div>
  );
};

export default Home;
