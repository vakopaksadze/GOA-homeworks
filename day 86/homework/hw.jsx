function SimpleGreeting() {
  return <h1>Hello React!</h1>;
}

function MyInfo() {
  return <p>მე ვსწავლობ React-ს</p>;
}

function NumbersList() {
  return (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  );
}

function ImagesBlock() {
  return (
    <div>
      <img src="https://picsum.photos/200" alt="Random" />
      <img src="https://picsum.photos/201" alt="Random" />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <SimpleGreeting />

      <MyInfo />
      <MyInfo />

      <NumbersList />

      <ImagesBlock />
    </div>
  );
}