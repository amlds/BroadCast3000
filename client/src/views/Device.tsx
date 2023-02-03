import React from 'react';

import ListCard from '../components/ListCard';
import FocusImage from '../components/FocusImage';
import LectureDay from '../components/LectureDay'

import '../assets/views/device.scss'

const Devices: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  const [dayMonth, setDayMonth] = React.useState(date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'numeric', day: 'numeric'}));
  const messageRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setDayMonth(date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'numeric', day: 'numeric'}));
    }, 5000);
    return () => clearInterval(interval);
  }, [date]);

  React.useEffect(() => {
    if (messageRef.current) {
      messageRef.current.innerHTML = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', weekday: 'long',});
    }
  }, [date]);

    return (
    <main className='device'>
      <section className='device__content'>
        <img className='logo' src='./images/Logo_wagon.png' alt='Wagon Logo'></img>
        <div className='device__content--text'>
          <h1>Hello wagoners !</h1>
          <p>Nous somme le <span className='text-medium' ref={messageRef}></span></p>
          <LectureDay date={dayMonth}/>
          <FocusImage />
        </div>
      </section>
      <ListCard />
    </main>
  );
};

export default Devices;
