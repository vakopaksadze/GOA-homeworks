import React, { useState } from "react";

//////////////////////////
// AUTH SERVICE (ლოგიკა ცალკე)
//////////////////////////

const authService = {
  register: (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    return true;
  },

  login: (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) return false;

    if (
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      return true;
    }

    return false;
  },

  logout: () => {
    localStorage.removeItem("isLoggedIn");
  },

  isAuthenticated: () => {
    return localStorage.getItem("isLoggedIn") === "true";
  },
};

//////////////////////////
// CUSTOM HOOK
//////////////////////////

function useForm(initialValues, submitHandler) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

//////////////////////////
// REGISTER COMPONENT
//////////////////////////

function Register() {
  const registerHandler = (data) => {
    authService.register(data);
    alert("Registration successful!");
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    registerHandler
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Register</button>
    </form>
  );
}

//////////////////////////
// LOGIN COMPONENT
//////////////////////////

function Login({ onLoginSuccess }) {
  const loginHandler = (data) => {
    const success = authService.login(data);

    if (success) {
      alert("Login successful!");
      onLoginSuccess();
    } else {
      alert("Wrong email or password");
    }
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    loginHandler
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Login</button>
    </form>
  );
}

//////////////////////////
// MAIN APP
//////////////////////////

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    authService.isAuthenticated()
  );

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Auth App</h1>

      {isLoggedIn ? (
        <div>
          <h2>You are logged in ✅</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Register />
          <hr />
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
}