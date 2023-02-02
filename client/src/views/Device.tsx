import React from 'react';

import ListCard from '../components/ListCard';
import FocusImage from '../components/FocusImage';
import '../assets/views/device.scss'

const Devices: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  const messageRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
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
          <p>Ajourd'hui on programme : J'ai pas encore récupérer la données désolé</p>
          <FocusImage />
        </div>
      </section>
      <ListCard />
    </main>
  );
};

export default Devices;
