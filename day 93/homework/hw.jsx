import { useState } from "react";

/* Button */
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

/* Input */
function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

/* ListItem */
function ListItem({ item }) {
  return <li>{item}</li>;
}

/* List */
function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

/* Wrapper */
function Wrapper({ children }) {
  return <div>{children}</div>;
}

/* Card */
function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

/* Counter */
function Counter({ count, increment }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

/* Layout */
function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

/* App */
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [items] = useState(["Apple", "Banana", "Orange"]);

  return (
    <Layout>
      {/* 3 */}
      <h2>Counter with Button</h2>
      <p>{count}</p>
      <Button label="Increase" onClick={() => setCount(count + 1)} />

      {/* 4 */}
      <h2>Input Text</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>

      {/* 5 */}
      <h2>List</h2>
      <List items={items} />

      {/* 6 */}
      <Wrapper>
        <h2>Wrapper</h2>
        <p>Text inside Wrapper</p>
        <button>Click</button>
      </Wrapper>

      {/* 7 */}
      <Card>
        <h3>Card 1</h3>
        <p>Some text</p>
      </Card>

      <Card>
        <button>Card Button</button>
      </Card>

      {/* 8 */}
      <h2>Counter Component</h2>
      <Counter count={count} increment={() => setCount(count + 1)} />
    </Layout>
  );
}

export default App;