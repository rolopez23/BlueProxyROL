import React from 'react';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      App me down!
      <Counter counter={counter} />
      <button type="button" onClick={() => {setCounter(counter + 1); }}>increment</button>
      <button type="button" onClick={() => {setCounter(counter - 1); }}>deccrement</button>
    </div>
  );
};

export const Counter = ({ counter }) => (
  <div>
    <p>{counter}</p>
  </div>
);

export const testFunction = (object, properties) => ({ ...object, ...properties });

export default App;
