import { useState, useEffect } from "react";

/*
2) useEffect hook – ახსნა

useEffect არის React-ის hook, რომელიც გამოიყენება "side effect"-ებისთვის.

Side effect არის ისეთი მოქმედება, რომელიც არ ეხება პირდაპირ UI-ის დახატვას:
მაგალითად:
- background color-ის შეცვლა
- alert-ის გამოჩენა
- API-დან მონაცემის წამოღება
- eventListener-ის დამატება

useEffect იძახება:
- კომპონენტის ჩატვირთვისას
- state ან props ცვლილებისას
- ან ყოველ render-ზე (თუ dependency array არ აქვს)

useEffect-ის გარეშე შესრულებული ლოგიკა სრულდება ყოველ render-ზე,
useEffect-ში მოთავსებული ლოგიკა კი კონტროლირებად დროს სრულდება.
*/

// =======================
// 3) BackgroundColor
// =======================
function BackgroundColor() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    // ეს არის side effect, რადგან პირდაპირ DOM-ს ვცვლით
    document.body.style.backgroundColor = color;
  }, [color]); // effect გაეშვება მხოლოდ მაშინ, როცა color შეიცვლება

  return (
    <div>
      <h2>Background Color</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("pink")}>Pink</button>
    </div>
  );
}

// =======================
// 4) CounterAlert
// =======================
function CounterAlert() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ეს ლოგიკა უნდა იყოს useEffect-ში,
    // რადგან alert არის side effect
    if (count === 7) {
      alert("Lucky number");
    }
  }, [count]);

  return (
    <div>
      <h2>Counter Alert</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// =======================
// 5) WindowResize
// =======================
function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    // იძახება მაშინ, როცა კომპონენტი იშლება ან effect ხელახლა ეშვება
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Width</h2>
      <p>{width}px</p>
    </div>
  );
}

// =======================
// 6) RandomDog
// =======================
function RandomDog() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  }, []); // გაეშვება მხოლოდ ერთხელ

  return (
    <div>
      <h2>Random Dog</h2>
      {dog && <img src={dog} width="300" />}
    </div>
  );
}

// =======================
// 😎 CountryInfo
// =======================
function CountryInfo() {
  const [code, setCode] = useState("");
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!code) return;

    fetch(https://restcountries.com/v3.1/alpha/${code})
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [code]); // გაეშვება მხოლოდ მაშინ, როცა code შეიცვლება

  return (
    <div>
      <h2>Country Info</h2>

      <input
        placeholder="Enter country code (ge, us, fr)"
        onChange={(e) => setCode(e.target.value)}
      />

      {country && (
        <div>
          <p>Name: {country.name.common}</p>
          <p>Region: {country.region}</p>
        </div>
      )}
    </div>
  );
}

// =======================
// App კომპონენტი
// =======================
export default function App() {
  return (
    <div>
      <h1>useEffect დავალებები</h1>

      <BackgroundColor />
      <CounterAlert />
      <WindowResize />
      <RandomDog />
      <CountryInfo />
    </div>
  );
}