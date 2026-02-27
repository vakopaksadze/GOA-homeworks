import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [double, setDouble] = useState(0);

  function slowFunction(num) {
    for (let i = 0; i < 10000000; i++) {}
    return num * 2;
  }

  const getDouble = () => {
    const result = slowFunction(number);
    setDouble(result);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <p>Double: {double}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase count

      
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={getDouble}>
        Get Double (slow)
      </button>
    </div>
  );
}

export default App;