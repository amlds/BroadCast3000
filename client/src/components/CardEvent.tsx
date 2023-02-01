import React from "react";

interface Props {
  event: {
    id: number;
    name: string;
    description: string;
    start: string;
    image: string;
  };
}

const CardEvent: React.FC<Props> = (event) => {
  const eventRef = React.useRef<HTMLDivElement>(null);
  const iso = /^(\d{4})(?:-?W(\d+)(?:-?(\d+)D?)?|(?:-(\d+))?-(\d+))(?:[T ](\d+):(\d+)(?::(\d+)(?:\.(\d+))?)?)?(?:Z(-?\d*))?$/;  ;

  const structureTime = (time: string) => {
    const parts = time.match(iso);
    if (parts) {
      const date = new Date(
        Date.UTC(
          Number(parts[1]),
          Number(parts[4]) - 1,
          Number(parts[5]),
          Number(parts[6]),
          Number(parts[7]),
          Number(parts[8]),
          Number(parts[9])
        )
      );
      return `${date.toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' })} à ${date.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' })}`;
    }
  }

  return (
    <div className="cardEvent" ref={eventRef}>
      <h2 className="cardEvent__content__start">
          {structureTime(event.event.start)}
      </h2>
      <div className="cardEvent__content">
        <h2 className="cardEvent__content__title">{event.event.name}</h2>
        <p className="cardEvent__content__description">
          {event.event.description}
        </p>
      </div>
    </div>
  );
};

export default CardEvent;
