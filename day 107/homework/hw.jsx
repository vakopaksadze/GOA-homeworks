import React, { useState, useMemo } from "react";

function ExpensiveCalculator() {
  const [counter, setCounter] = useState(0);
  const [inputNumber, setInputNumber] = useState(1);
  const [result, setResult] = useState(0);

  function expensiveCalculation(num) {
    for (let i = 0; i < 100000000; i++) {}
    return num * num;
  }

  const cachedValue = useMemo(() => {
    return expensiveCalculation(inputNumber);
  }, [inputNumber]);

  return (
    <div>
      <h2>Expensive Calculator</h2>

      <p>Counter value: {counter}</p>
      <p>Input number: {inputNumber}</p>
      <p>Cached calculated value: {cachedValue}</p>
      <p>Final result: {result}</p>

      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>

      <button onClick={() => setResult(cachedValue)}>
        Calculate
      </button>
    </div>
  );
}

export default ExpensiveCalculator;import React, { useState, useMemo } from "react";

function ExpensiveCalculator() {
  const [counter, setCounter] = useState(0);
  const [inputNumber, setInputNumber] = useState(1);
  const [result, setResult] = useState(0);

  function expensiveCalculation(num) {
    for (let i = 0; i < 100000000; i++) {}
    return num * num;
  }

  const cachedValue = useMemo(() => {
    return expensiveCalculation(inputNumber);
  }, [inputNumber]);

  return (
    <div>
      <h2>Expensive Calculator</h2>

      <p>Counter value: {counter}</p>
      <p>Input number: {inputNumber}</p>
      <p>Cached calculated value: {cachedValue}</p>
      <p>Final result: {result}</p>

      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>

      <button onClick={() => setResult(cachedValue)}>
        Calculate
      </button>
    </div>
  );
}

export default ExpensiveCalculator;