import React from "react";
import ThemeContext from "../context/ThemeContext";

const Toolbar: React.FC = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Toolbar;
