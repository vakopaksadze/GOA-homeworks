import React, { useState, createContext, useContext } from "react";

////////////////////////////////////////////////////////////
/*
2) რას ნიშნავს props drilling

props drilling არის პროცესი, როდესაც მონაცემი გადაეცემა
ერთ კომპონენტიდან მეორე კომპონენტამდე props-ის გამოყენებით
მრავალი შუალედური კომპონენტის გავლით, მაშინაც კი როცა
შუალედურ კომპონენტებს ეს მონაცემი არ სჭირდებათ.

პრობლემა:
- კოდი ხდება რთული წასაკითხი
- ბევრი props უნდა გადავცეთ ზედმეტად
- maintenance რთულდება

ხშირად ხდება:
- როდესაც ღრმა კომპონენტს სჭირდება parent-ის state
- მაგალითად user, theme, auth info
*/
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
/*
3) Props Drilling Example
App → Component1 → Component2 → Component3
*/
////////////////////////////////////////////////////////////


function Component3({ user }) {
  return (
    <div>
      <h3>Component3</h3>

      {/* აქ გამოვიტანეთ user */}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      {/*
      ეს არის props drilling რადგან:

      user არ გამოიყენება Component1 და Component2-ში
      მაგრამ მაინც უნდა გადავცეთ მათ props-ით,
      მხოლოდ იმისთვის რომ მივიდეს Component3-მდე
      */}
    </div>
  );
}

function Component2({ user }) {
  return (
    <div>
      <h3>Component2</h3>
      <Component3 user={user} />
    </div>
  );
}

function Component1({ user }) {
  return (
    <div>
      <h3>Component1</h3>
      <Component2 user={user} />
    </div>
  );
}



////////////////////////////////////////////////////////////
/*
4) Context API Example (UserContext)

Context აგვარებს props drilling-ის პრობლემას
რადგან აღარ გვჭირდება props-ის გადაცემა
შუალედურ კომპონენტებში
*/
////////////////////////////////////////////////////////////


const UserContext = createContext();

function Component3WithContext() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Component3 using Context</h3>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      {/*
      პრობლემა რომელიც მოგვარდა:

      აღარ გვჭირდება Component1 და Component2-ში props გადაცემა

      Component3 იღებს მონაცემს პირდაპირ Context-დან
      */}
    </div>
  );
}

function Component2WithContext() {
  return (
    <div>
      <h3>Component2</h3>
      <Component3WithContext />
    </div>
  );
}

function Component1WithContext() {
  return (
    <div>
      <h3>Component1</h3>
      <Component2WithContext />
    </div>
  );
}



////////////////////////////////////////////////////////////
/*
5) AuthContext Example
*/
////////////////////////////////////////////////////////////


const AuthContext = createContext();


// Provider component
function AuthProvider({ children, email, password }) {
  const value = { email, password };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}



/*
რატომ არის Context კარგი მსგავსი მონაცემებისთვის:

- auth info გამოიყენება ბევრ კომპონენტში
- აღარ გვჭირდება props გადაცემა ყველგან
- global access გვაქვს
- კოდი უფრო სუფთაა
*/



////////////////////////////////////////////////////////////
/*
6) custom hook useAuth
*/
////////////////////////////////////////////////////////////


function useAuth() {
  return useContext(AuthContext);
}


/*
რატომ ჯობს wrapper hook:

- აღარ გვჭირდება useContext(AuthContext) ყოველ ჯერზე
- კოდი უფრო მოკლე და სუფთაა
- easier maintenance
- future-ში შეგვიძლია დავამატოთ logic აქ
*/


function AuthConsumer() {
  const { email, password } = useAuth();

  return (
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}



////////////////////////////////////////////////////////////
/*
7) Comparison

props drilling მინუსი:
- რთულია და არაეფექტური ღრმა კომპონენტებში

Context API უპირატესობა:
- პირდაპირი access ნებისმიერ კომპონენტში

როდის ჯობს props:
- როცა მხოლოდ 1 ან 2 დონეზე გადავცემთ
- Context ზედმეტია პატარა პროექტში
*/
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
/*
MAIN APP
*/
////////////////////////////////////////////////////////////


export default function App() {

  const [user, setUser] = useState({
    name: "Luka",
    age: 20,
  });


  return (
    <div>

      <h1>Props Drilling Example</h1>

      {/* props drilling */}
      <Component1 user={user} />


      <hr />


      <h1>Context API Example</h1>

      {/* Context Provider */}
      <UserContext.Provider value={user}>
        <Component1WithContext />
      </UserContext.Provider>



      <hr />


      <h1>AuthContext Example</h1>

      {/* 3 different providers */}

      <AuthProvider email="user1@gmail.com" password="1111">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="user2@gmail.com" password="2222">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="user3@gmail.com" password="3333">
        <AuthConsumer />
      </AuthProvider>


    </div>
  );
}