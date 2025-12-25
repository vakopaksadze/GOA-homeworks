import React from "react";

// 10) ორი მარტივი კომპონენტი Fragment-ის მაგალითისთვის
function FirstComponent() {
  return <p>First Component</p>;
}

function SecondComponent() {
  return <p>Second Component</p>;
}

function App() {
  // 2) boolean ცვლადი
  const isActive = true;

  // 3) if JSX-ის გარეთ (JSX-ში if პირდაპირ არ მუშაობს)
  let message;
  if (isActive) {
    message = <p>User is active (from if)</p>;
  }

  // 4) რიცხვების მასივი
  const numbers = [1, 2, 3, 4, 5];

  // 5) ობიექტების მასივი
  const users = [
    { id: 1, name: "Giorgi" },
    { id: 2, name: "Nino" },
    { id: 3, name: "Vako" },
  ];

  // 6) ternary ოპერატორისთვის boolean
  const isLoggedIn = false;

  // 7) რიცხვითი ცვლადი
  const notificationsCount = 3;

  // 😎 ღილაკის event handler
  const handleClick = () => {
    console.log("Button clicked");
  };

  // 11) მასივი index/value მაგალითისთვის
  const values = [10, 20, 30];

  return (
    <>
      {/* 2) && ოპერატორი */}
      {/* && ლოგიკა: თუ მარცხენა მხარე true არის, რენდერდება მარჯვენა მხარე */}
      {isActive && <p>User is active</p>}

      {/* 3) JSX-ში if არ მუშაობს, ამიტომ შედეგი ვამზადებთ JSX-ის გარეთ */}
      {message}

      {/* 4) map() JSX-ში */}
      {/* map() გამოიყენება მასივიდან ახალი JSX ელემენტების მისაღებად */}
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>
            {num % 2 === 0 ? num * 2 : num}
          </li>
        ))}
      </ul>

      {/* 5) key აუცილებელია, რომ React-მა სწორად ამოიცნოს ელემენტები */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* 6) ternary ოპერატორი */}
      {/* სინტაქსი: condition ? trueResult : falseResult */}
      {isLoggedIn ? (
        <p>Welcome back</p>
      ) : (
        <p>Please log in</p>
      )}

      {/* 7) && მუშაობს იმიტომ, რომ 0 არის false, ხოლო >0 არის true */}
      {notificationsCount > 0 && (
        <p>You have new notifications</p>
      )}

      {/* 😎 event handling JSX-ში */}
      {/* onClick იღებს ფუნქციას, რომელიც შესრულდება მოვლენაზე */}
      <button onClick={handleClick}>Click me</button>

      {/* 9) React.createElement JSX-ის გარეშე */}
      {/* JSX სინამდვილეში React.createElement-ის შემოკლებული ფორმაა */}
      {React.createElement("h1", null, "Hello without JSX")}

      {/* 10) Fragment */}
      {/* Fragment გვაძლევს საშუალებას დავაბრუნოთ რამდენიმე ელემენტი ზედმეტი div-ის გარეშე */}
      <>
        <FirstComponent />
        <SecondComponent />
      </>

      {/* 11) index და value map()-ში */}
      {values.map((value, index) => (
        <p key={index}>
          Index: {index}, Value: {value}
        </p>
      ))}
    </>
  );
}

export default App;