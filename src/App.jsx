import React, { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you click ${count} times`;
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const getAlphabetValue = (count) => {
    const index = count % alphabet.length;
    return alphabet[index];
  };
  return (
    <>
      <div className="App">
        <button onClick={() => setCount(num + 1)}>
          {getAlphabetValue(count)}
        </button>
      </div>
    </>
  );
};

export default App;
