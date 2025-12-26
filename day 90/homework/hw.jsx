function MyComponent() {
  // 3) ცვლადი ტექსტით "Welcome to React"
  // JSX-ში ცვლადები ჩაისმება { } ფრჩხილებით
  const title = "Welcome to React";

  // 4) ცვლადი სურათის ლინკით
  // Variable Attribute ნიშნავს, რომ JSX ატრიბუტში (src) ვიყენებთ JS ცვლადს
  const imgUrl = "https://via.placeholder.com/150";

  // 5) boolean ცვლადი
  const isLoggedIn = true;

  // ლოგიკის გამოყოფა JSX-დან ნიშნავს,
  // რომ if / else ლოგიკას ვწერთ JSX-ის გარეთ,
  // რათა JSX იყოს სუფთა და წაკითხვადი
  let message;
  if (isLoggedIn) {
    message = "Hello user";
  } else {
    message = "Please log in";
  }

  // 6) boolean ცვლადი
  const showText = true;

  // 7) boolean ცვლადი
  const isAdmin = false;

  return (
    // 2) Multiline JSX აუცილებლად უნდა იყოს ერთ მშობელ ელემენტში (აქ <div>)
    // React არ უშვებს რამდენიმე root ელემენტის დაბრუნებას ერთდროულად
    <div>
      {/* Multiline JSX ნიშნავს, რომ JSX რამდენიმე ხაზზეა გაწერილი,
          მაგრამ მაინც ერთ მშობელ ტეგში უნდა იყოს მოქცეული */}

      <h1>{title}</h1>

      <p>ეს არის მრავალსტრიქონიანი JSX-ის მაგალითი</p>

      {/* 4) img-ის src ატრიბუტში ცვლადის გამოყენება */}
      <img src={imgUrl} alt="example" />

      {/* 5) JSX-ში გამოგვაქვს წინასწარ გამოთვლილი message */}
      <p>{message}</p>

      {/* 6) && ოპერატორი:
          თუ showText === true → <p> გამოჩნდება
          თუ false → არაფერი დაირენდერება */}
      {showText && <p>This text is visible</p>}

      {/* 7) ternary ოპერატორი:
          პირობა ? true-ის შედეგი : false-ის შედეგი */}
      {isAdmin ? (
        <p>Admin panel</p>
      ) : (
        <p>User panel</p>
      )}
    </div>
  );
}

export default MyComponent;
