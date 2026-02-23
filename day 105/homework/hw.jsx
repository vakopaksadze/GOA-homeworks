import { useState, useEffect } from "react";

/*
==============================
2) useEffect და useState ახსნა
==============================

Side effect React-ში არის ისეთი მოქმედება, რომელიც არ ეხება პირდაპირ UI-ის დახატვას:
მაგ: API-დან მონაცემის წამოღება, localStorage, ტაიმერი, event listener.

ჩვეულებრივი ლოგიკა სრულდება ყოველი render-ის დროს,
useEffect-ში მოთავსებული ლოგიკა კი სრულდება კონტროლირებად დროს.

useEffect იძახება:
- კომპონენტის ჩატვირთვისას
- state/props ცვლილებისას
- ან ყოველ render-ზე (თუ dependency array არ აქვს)

useEffect არგუმენტები:
1) callback ფუნქცია – ასრულებს side effect-ს
2) dependency array – აკონტროლებს როდის გაეშვას effect

თუ array არ გვაქვს → ყოველ render-ზე
თუ [] არის → მხოლოდ ერთხელ
თუ [value] → value-ის ცვლილებისას

useState ინახავს კომპონენტის მდგომარეობას (state)
ის იძახება კომპონენტის ჩატვირთვისას

მაგალითები:
- counter
- input ტექსტი
*/

// =======================
// I კომპონენტი – Form
// =======================
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("მონაცემები შენახულია!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ფორმა</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />

      <button type="submit">შენახვა</button>
    </form>
  );
}

// =======================
// II კომპონენტი – Display
// =======================
function Display() {
  const [data, setData] = useState(null);

  const getData = () => {
    const saved = localStorage.getItem("userData");
    setData(JSON.parse(saved));
  };

  return (
    <div>
      <h2>შენახული მონაცემები</h2>
      <button onClick={getData}>მონაცემების ჩვენება</button>

      {data?.name && <p>Name: {data.name}</p>}
      {data?.email && <p>Email: {data.email}</p>}
      {data?.age && <p>Age: {data.age}</p>}
    </div>
  );
}

// =======================
// App კომპონენტი
// =======================
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("კომპონენტი ჩაიტვირთა");
  }, []);

  return (
    <div>
      <h1>React დავალება</h1>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        გაზრდა
      </button>

      <Form />
      <Display />
    </div>
  );
}

/*
==============================
4) ტერმინების ახსნა
==============================

state – კომპონენტის მონაცემები  
hook – React-ის ფუნქცია  
built-in hook – React-ის ჩაშენებული hook  
useState – state-ის შესანახად  
setter function – state-ის შესაცვლელად  
component re-render – კომპონენტის თავიდან დახატვა
*/