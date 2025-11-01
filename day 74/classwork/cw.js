

  
    // DOM ნიშნავს დოკუმენტის სტრუქტურას, რასაც js ხედავს და შეუძლია შეცვალოს

    let allDivs = document.getElementsByTagName("div"); 
    // პოულობს ყველა div-ს
    console.log(allDivs);

    let products = document.getElementsByClassName("product");
    // პოულობს ყველა product კლასის ელემენტს
    console.log(products);

    let specialDiv = document.getElementById("special");
    // პოულობს ელემენტს თავისი id-ით
    console.log(specialDiv);

    // აბრუნებს წინა მეზობელ ელემენტს
    console.log(specialDiv.previousElementSibling);

    // აბრუნებს შემდეგ მეზობელ ელემენტს
    console.log(specialDiv.nextElementSibling);

    // აბრუნებს პირველ შვილ ელემენტს
    console.log(specialDiv.firstChild);

    // აბრუნებს ბოლო შვილ ელემენტს
    console.log(specialDiv.lastChild);

