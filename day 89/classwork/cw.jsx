import React from "react";

function App() {
  // Boolean ცვლადი
  const isSuccess = true; // შეგიძლია false ჩასვათ, რომ მეორე ტექსტი ნახო

  return (
    <div>
      {/* ტერნარი ოპერატორის გამოყენება */}
      {isSuccess ? (
        <p>ოპერაცია წარმატებით დასრულდა!</p>
      ) : (
        <p>ოპერაცია ვერ განხორციელდა.</p>
      )}
    </div>
  );
}

export default App;