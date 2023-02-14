import React from 'react';

import EventUpdate from '../types/EventUpdate';



interface IEventContext {
  eventsUpdate: EventUpdate[];
  toggleIsUpdate: () => void;
}

const defaultState = {
  eventsUpdate: [],
};

const EventContext = React.createContext(defaultState as unknown as IEventContext);

export default EventContext;
