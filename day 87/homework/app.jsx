function SimpleComponent() {
  return <h1>Hello React</h1>;
}

function ClassNameExample() {
  return <div className="box">Content</div>;
  /*
  JSX-ში ვიყენებთ className-ს და არა class-ს,
  რადგან class არის JavaScript-ის reserved keyword
  */
}

function SelfClosingExample() {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="example" />
      <input type="text" placeholder="Type here" />
    </div>
  );
}

function JsInJsx() {
  const name = "React Student";
  return <h2>Hello {name}</h2>;
}

function CurlyBracesExample() {
  return <p>{10 + 5}</p>;
}

function VariableAttributes() {
  const imageUrl = "https://via.placeholder.com/200";
  return <img src={imageUrl} alt="from variable" />;
}

function App() {
  return (
    <div>
      <SimpleComponent />
      <ClassNameExample />
      <SelfClosingExample />
      <JsInJsx />
      <CurlyBracesExample />
      <VariableAttributes />
    </div>
  );
}

export default App;