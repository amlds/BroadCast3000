import React from 'react';

const FormulaireEvent: React.FC = () => {
  return (
    <form>
      <label htmlFor="name">Name
        <input className='input--txt' type="name" name="name" id="name" placeholder="Alumni drink"/>
      </label>
      <label htmlFor="Date">Date
        <input className='input--txt' type="date" name="date" id="date" />
      </label>
      <label htmlFor="description">Description
        <textarea className='input--txt' name="description" id="description" placeholder="Get an hangorver for free with your Le Wagon mates !"/>
      </label>
      <input className='input--file' type="file" accept='.jpg,.png' name="image" id="image" />
      <button type="submit">Add event</button>
    </form>
  );
};

export default FormulaireEvent;
