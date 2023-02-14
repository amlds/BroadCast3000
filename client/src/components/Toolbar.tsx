import React from "react";
import EventContext from "../context/EventContext";

const Toolbar: React.FC = () => {
  const { toggleUpdate } = React.useContext(EventContext);

  return (
    <div>
      <button onClick={toggleUpdate}>Toggle</button>
    </div>
  );
};

export default Toolbar;
