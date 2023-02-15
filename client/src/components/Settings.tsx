import React from 'react';

const Settings: React.FC = () => {
  return (
    <section className='settings'>
      <div className='settings__batch'>
        <h3>Actual batches</h3>
        <div>
          <p><span className='md-1'>Batch #1102 :</span> Web development - Started on January 16 2023</p>
          <p><span className='md-1'>Batch #1104 :</span> Data science - Started on January 16 2023</p>
        </div>
        <button className='btn btn--primary'>Add a new batch</button>
      </div>
      <div className='settings__carousel'>
        <h3>Carousel</h3>
        <div>
          <p>Number of images</p>
          <label htmlFor='1'>1</label>
          <input type='radio' id='1' name='number' value='1' />
          <label htmlFor='2'>2</label>
          <input type='radio' id='2' name='number' value='2' />
          <label htmlFor='3'>3</label>
          <input type='radio' id='3' name='number' value='3' />
          <label htmlFor='4'>4</label>
          <input type='radio' id='4' name='number' value='4' />
          <label htmlFor='5'>5</label>
          <input type='radio' id='5' name='number' value='5' />
        </div>
      </div>
      <div className="settings__sadBad">
        <button className="button--secondary">You’re sad ? Click here !</button>
        <button className="button--secondary">
          Log out !
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.75 7V3.25C11.75 2.65326 11.5129 2.08097 11.091 1.65901C10.669 1.23705 10.0967 1 9.5 1H3.5C2.90326 1 2.33097 1.23705 1.90901 1.65901C1.48705 2.08097 1.25 2.65326 1.25 3.25V16.75C1.25 17.3467 1.48705 17.919 1.90901 18.341C2.33097 18.7629 2.90326 19 3.5 19H9.5C10.0967 19 10.669 18.7629 11.091 18.341C11.5129 17.919 11.75 17.3467 11.75 16.75V13M8 7L5 10M5 10L8 13M5 10H17.75" stroke="#E60F05" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>
      </div>
    </section>
  );
};

export default Settings;
