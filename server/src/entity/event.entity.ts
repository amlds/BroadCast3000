import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startEvent: string;

  @Column()
  endEvent: string;

  @Column()
  location: string;

  @Column()
  image: string;
}

export default Event;
