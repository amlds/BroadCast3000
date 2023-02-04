import Event from '../types/Event';

export class EventController {
  constructor(private eventsService: Event) {}

  async getEvents(): Promise<Event[]> {
    return fetch('http://localhost:4000/events')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  async getEvent(id: number): Promise<Event> {
    return fetch(`http://localhost:4000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  async createEvent(event: Event): Promise<Event> {
    return fetch('http://localhost:4000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  async updateEvent(event: Event): Promise<Event> {
    return fetch(`http://localhost:4000/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  async deleteEvent(id: number): Promise<Event> {
    return fetch(`http://localhost:4000/events/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }
    ).catch((error) => {
      console.log(error);
    });
  }
}
