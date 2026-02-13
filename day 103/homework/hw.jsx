function Greeting(props) {
  // props არის ობიექტი, რომლითაც App კომპონენტი
  // შვილ კომპონენტს გადასცემს მონაცემს
  return <h1>{props.text}</h1>;
}

function User(props) {
  // props-ით მიღებული მონაცემებია name და age
  return (
    <div>
      <p>სახელი: {props.name}</p>
      <p>ასაკი: {props.age}</p>
    </div>
  );
}

function Button(props) {
  // ერთი და იგივე Button კომპონენტი
  // სხვადასხვა ტექსტით შეგვიძლია გამოვიყენოთ
  return <button>{props.buttonText}</button>;
}

function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function Profile(props) {
  return <p>Welcome, {props.username}</p>;
}

function Product(props) {
  // props ვიყენებთ, რომ კომპონენტებს შორის
  // გადავცეთ მონაცემები და კოდი განმეორებით გამოვიყენოთ
  return (
    <div>
      <p>პროდუქტი: {props.productName}</p>
      <p>ფასი: {props.price}₾</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* 2) Greeting კომპონენტი */}
      <Greeting text="Hello React" />

      {/* 3) User კომპონენტი */}
      <User name="ვაკო" age={20} />
      {/* props-ით მონაცემების გადაცემა ნიშნავს,
          რომ მშობელი კომპონენტი (App)
          შვილ კომპონენტს აძლევს ინფორმაციას */}

      {/* 4) Button კომპონენტი ორჯერ */}
      <Button buttonText="Login" />
      <Button buttonText="Register" />

      {/* 5) Card კომპონენტი */}
      <Card
        title="React Card"
        description="ეს არის Card კომპონენტი props-ით"
      />

      {/* 6) Profile კომპონენტი */}
      <Profile username="ვაკო" />

      {/* 7) Product კომპონენტი */}
      <Product productName="Laptop" price={2500} />
    </div>
  );
}

export default App;