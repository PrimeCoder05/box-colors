import React, { useState } from 'react';
import "./App.css";
import Callback from './Callback';

function App() {
  const [UIcolor, setUIColor] = useState(null);

  const getColor = (color) => {
    setUIColor(color);
  }

  return (
    <div>
      <div className="box" style={{ background: `${UIcolor}` }}></div>
      <Callback getColor={getColor} />
      <p>Type in a color in the input field!</p>
      <p>You typed: <span style={{ color: `${UIcolor}` }}>{UIcolor}</span></p>
    </div>
  );
}

export default App;