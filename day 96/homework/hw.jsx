import { useState } from "react";

/* ================== Counter ================== */

function CounterView({ count, increase }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function CounterContainer() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return <CounterView count={count} increase={increase} />;
}

/* ================== List ================== */

function ListView({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function ListContainer() {
  const [items] = useState(["Apple", "Banana", "Orange"]);

  return <ListView items={items} />;
}

/* ================== Toggle ================== */

function ToggleView({ isOn, toggle }) {
  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function ToggleContainer() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return <ToggleView isOn={isOn} toggle={toggle} />;
}

/* ================== Form ================== */

function FormView({ value, setValue, submit }) {
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function FormContainer() {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(value);
    setValue("");
  };

  return (
    <FormView
      value={value}
      setValue={setValue}
      submit={submit}
    />
  );
}

/* ================== User ================== */

function UserView({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function UserContainer() {
  const [name] = useState("Vako");
  const [age] = useState(16);

  return <UserView name={name} age={age} />;
}

/* ================== App ================== */

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <ListContainer />
      <hr />
      <ToggleContainer />
      <hr />
      <FormContainer />
      <hr />
      <UserContainer />
    </div>
  );
}

export default App;