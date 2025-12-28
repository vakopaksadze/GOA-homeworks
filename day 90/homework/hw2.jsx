function App() {
  // 3) ცვლადი title ტექსტით
  const title = "Welcome to React";
  // JSX-ში ცვლადის ჩასმა ხდება { } ფრჩხილებით

  // 4) სურათის ლინკი ცვლადში
  const imgUrl = "https://via.placeholder.com/200";
  // Variable Attribute JSX-ში ნიშნავს, რომ HTML ატრიბუტში
  // მნიშვნელობად პირდაპირ JS ცვლადს ვიყენებთ { }-ში

  // 5) boolean ცვლადი
  const isLoggedIn = true;

  // ლოგიკის გამოყოფა JSX-დან:
  // ჯერ ვწერთ if/else ლოგიკას JSX-ის გარეთ
  let message;
  if (isLoggedIn) {
    message = "Hello user";
  } else {
    message = "Please log in";
  }

  // 6) boolean ცვლადი
  const showText = true;
  // && ოპერატორი: თუ მარცხენა მხარე trueა,
  // მაშინ გამოიტანს მარჯვენა JSX-ს

  // 7) boolean ცვლადი
  const isAdmin = false;
  // ternary ოპერატორი: პირობა ? true შედეგი : false შედეგი

  return (
    // 2) Multiline JSX:
    // აუცილებელია ყველა JSX ელემენტი იყოს ერთ მშობელ ელემენტში (აქ <div>)
    // რადგან React ერთ კომპონენტში მხოლოდ ერთ root ელემენტს იღებს
    <div>
      <h1>{title}</h1>

      <p>This is a multiline JSX example.</p>

      <img src={imgUrl} alt="example" />

      {/* 5) JSX-ში გამოტანილია წინასწარ გამოთვლილი message */}
      <p>{message}</p>

      {/* 6) && ოპერატორის გამოყენება */}
      {showText && <p>This text is visible</p>}

      {/* 7) ternary ოპერატორი JSX-ში */}
      {isAdmin ? <p>Admin panel</p> : <p>User panel</p>}
    </div>
  );
}

export default App;