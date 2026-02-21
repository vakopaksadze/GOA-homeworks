import React, { createContext, useContext } from "react";

/*
2) ვქმნით 2 context-ს:
- MyContext
- OtherContext
*/
const MyContext = createContext();
const OtherContext = createContext();

/*
როდის შეიძლება დაგჭირდეს ერთი context-ის შიგნით სხვა context-ის ჩასმა?
- როცა გვინდა სხვადასხვა ტიპის მონაცემების დაყოფა (მაგ: user, theme, language)
- რომ კოდი იყოს უფრო ორგანიზებული
- რომ ერთი დიდი context არ გავხადოთ ყველაფრისთვის

რა პლიუსი აქვს wrapper Provider-ს?
- გვაძლევს სისუფთავეს კოდში
- არ გვიწევს ბევრი Provider ხელით ჩაწერა ყველგან
- შეგვიძლია ერთ კომპონენტში მოვაქციოთ რამდენიმე Provider
*/


/*
3) NestedProvider კომპონენტი:
- ვიყენებთ OtherContext.Provider
- ვიღებთ children და ვსვამთ Provider-ის შიგნით
*/
function NestedProvider({ children }) {
  return (
    <OtherContext.Provider value="Hello from OtherContext">
      {children}
    </OtherContext.Provider>
  );
}

/*
რატომ არის wrapper კომპონენტი კარგი მრავალი Provider-ისთვის?
- თუ ბევრი Provider გვაქვს, ერთმანეთში ჩაწერა რთულდება
- wrapper კომპონენტი ამარტივებს სტრუქტურას
- კოდი ხდება უფრო წაკითხვადი
*/


/*
4) Child კომპონენტი:
- ვიყენებთ useContext ორივე context-ისთვის
- ვაჩვენებთ მიღებულ მნიშვნელობებს UI-ში
*/
function Child() {
  const myValue = useContext(MyContext);
  const otherValue = useContext(OtherContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>MyContext value: {myValue}</p>
      <p>OtherContext value: {otherValue}</p>
    </div>
  );
}

/*
როგორ აცილებს props drilling-ს?
- Child პირდაპირ იღებს მონაცემს context-იდან
- არ გვჭირდება App → NestedProvider → Child გზით props-ის გადაცემა
- ანუ აღარ ვაწვდით მონაცემს თითოეულ შუალედურ კომპონენტს
*/


/*
5) App.jsx-ში ვაერთიანებთ ყველაფერს:
- MyContext.Provider არის გარე Provider
- NestedProvider არის შიგნით
- Child არის ყველაზე შიგნით
*/
export default function App() {
  return (
    <MyContext.Provider value="Hello from MyContext">
      <NestedProvider>
        <Child />
      </NestedProvider>
    </MyContext.Provider>
  );
}

/*
როგორ იღებს Child მონაცემებს ორივე context–დან props drilling–ის გარეშე?

- Child იყენებს useContext(MyContext)
- Child იყენებს useContext(OtherContext)
- React ავტომატურად პოულობს შესაბამის Provider-ს ზემოთ tree-ში
- ამიტომ არ გვჭირდება props-ების გადაცემა შუაში არსებული კომპონენტების გავლით
*/