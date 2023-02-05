import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateEventDto from './dto/createEvent.dto';
import { EventsService } from './events.service';
import { UpdateEventDto } from './dto/updateEvent.dto';

@Controller('Events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get(':id')
  getEventById(@Param('id') id: string) {
    return this.eventsService.getEventById(Number(id));
  }

  @Post('/create')
  async createEvent(@Body() event: CreateEventDto) {
    return this.eventsService.createEvent(event);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() event: UpdateEventDto) {
    return this.eventsService.updateEvent(Number(id), event);
  }

  @Delete('/delete/:id')
  async deleteevent(@Param('id') id: string) {
    this.eventsService.deleteEvent(Number(id));
  }
}
