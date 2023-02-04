import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Event from '../entity/event.entity';
import CreateEventDto from './dto/createEvent.dto';
import { UpdateEventDto } from './dto/updateEvent.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  // find all
  getAllEvents() {
    return this.eventRepository.find();
  }

  // find by id
  async getEventById(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    if (event) {
      return event;
    }

    throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createEvent(event: CreateEventDto) {
    const newEvent = await this.eventRepository.create(event);
    await this.eventRepository.save(newEvent);

    return newEvent;
  }

  // update
  async updateEvent(id: number, post: UpdateEventDto) {
    await this.eventRepository.update(id, post);
    const updatedEvent = await this.eventRepository.findOneBy({ id });
    if (updatedEvent) {
      return updatedEvent;
    }

    throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteEvent(id: number) {
    const deletedEvent = await this.eventRepository.delete(id);
    if (!deletedEvent.affected) {
      throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }
  }
}

export default EventsService;
