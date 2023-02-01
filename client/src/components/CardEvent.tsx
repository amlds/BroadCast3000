import React from "react";

interface Props {
  event: {
    id: number;
    name: string;
    description: string;
    start: string;
    end: string;
    location: string;
    image: string;
  };
}

const CardEvent: React.FC<Props> = (event) => {
  const eventRef = React.useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="cardEvent" ref={eventRef}>
        <div className="cardEvent__content">
          <h2 className="cardEvent__content__title">{event.event.name}</h2>
          <p className="cardEvent__content__description">
            {event.event.description}
          </p>
          <p className="cardEvent__content__start">
            {event.event.start} - {event.event.end}
          </p>
          <p className="cardEvent__content__location">{event.event.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
