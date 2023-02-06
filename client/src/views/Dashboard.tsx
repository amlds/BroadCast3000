import React from 'react';

import '../assets/views/dashboard.scss'

import ListCard from '../components/ListCard';
import FormulaireEvent from '../components/FormulaireEvent';
import Copy from '../components/svg/CopyIcones';


const Dashboard: React.FC = () => {
  const linkRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    console.log('useEffect');
    console.log(linkRef);
    const newValue = "broadcast3000.io/view/:idSession";
    linkRef.current && (linkRef.current.textContent = newValue);
  }, []);

  const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('click');
    const link = linkRef.current?.textContent;
    console.log(linkRef);
    link && navigator.clipboard.writeText(link);
  };


  return (
    <main className='dashboard'>
      <section className='dashboard__content'>
        <header>
          <img className='logo' src='./images/Logo_wagon_white.png' alt='Wagon Logo'></img>
          <div className='header__txt'>
            <h2>Hello 'const [name, setName] = React.useState(get.api)'</h2>
            <p className='text-normal'>[Insérer une phrase drôle ici]</p>
          </div>
        </header>
        <div className='dashboard__content--form'>
          <div className='link__device'>
            <p>Here is your link to the viewer screen :</p>
            <div className='link__device-copy'>
              <p ref={linkRef}>broadcast3000.io/view/2987nd983p</p>
              <button onClick={copyToClipboard}><Copy /></button>
            </div>
          </div>
          <FormulaireEvent />
        </div>
      </section>
      <ListCard />
    </main>
  );
};

export default Dashboard;
