import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";


const MyContext = createContext(null);


const MyProviderWrapper = ({ children }) => {
  const [value, setValue] = useState("გამარჯობა, Context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};


const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue("Context შეიცვალა!")}>
        შეცვლა
      </button>
    </div>
  );
};


const App = () => {
  return (
    <MyProviderWrapper>
      <ChildComponent />
    </MyProviderWrapper>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
