import React from "react";

import Edit from "./svg/Edit";


type props = {
  event: {
    name: string,
    description: string,
    startEvent: string,
    endEvent: string,
    location: string,
    image: string,
  }
}

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
        <button className="button--edit"><Edit /> Edit</button>
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
