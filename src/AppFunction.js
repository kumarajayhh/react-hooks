import React, { useState } from 'react';

const App = () => {
  const [counter, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCounter => prevCounter + 1);
  };
  return (
    <button onClick={incrementCounter}>
      i have been clicked {counter} times
    </button>
  );
};

export default App;
