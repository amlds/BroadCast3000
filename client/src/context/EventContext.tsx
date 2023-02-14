import React from 'react';

interface IEventContext {
  isUpdate: boolean;
  toggleUpdate: () => void;
}

const defaultState = {
  isUpdate: false,
};

const EventContext = React.createContext(defaultState as IEventContext);

export default EventContext;
