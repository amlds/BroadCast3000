import React from "react";

import EventService from "../services/EventService";

import Edit from "./svg/Edit";
import event from "../types/Event";
import { Link } from "react-router-dom";

const deleteEvent = async (id: number) => {
  // eslint-disable-next-line no-restricted-globals
  let submit = confirm('Are you sure?');
  if(submit) {
    await EventService.deleteEvent(id);
  }
}

type props = {
  event: event;
};

const CardEvent: React.FC<props> = (event: props) => {
  const eventRef = React.useRef<HTMLDivElement>(null);

  const structureTime = (time: string) => {
    const date = new Date(time);
    return `${date.toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' })} à ${date.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' })}`;
  };

  return (
    <div className="cardEvent" ref={eventRef}>
      <div className="cardEvent__header">
        <h3>
          {structureTime(event.event.startEvent)}
        </h3>
        <div className="cardEvent__header__button">
          <Link className="button--edit cardEvent__content__buttonEdit" to={`/dashboard/${event.event.id}`}><Edit /> Edit</Link>
          <button onClick={() => deleteEvent(event.event.id)} className="button--delete">X</button>
        </div>
      </div>
      <div className="cardEvent__content">
        <h3 className="cardEvent__content__title">{event.event.name}</h3>
        <p className="cardEvent__content__description">
          {event.event.description}
        </p>
      </div>
    </div>
  );
};

export default CardEvent;
