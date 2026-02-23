import React, { useState } from "react";
import { ErrorBoundary as LibErrorBoundary } from "react-error-boundary";

/* =====================================================
   1️⃣ CUSTOM ERROR BOUNDARY (class component)
===================================================== */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };

    this.resetError = this.resetError.bind(this);
  }

  // render/lifecycle error-ის დროს
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // error + componentStack ლოგირება
  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Component Stack:", info.componentStack);
  }

  // reset მექანიზმი
  resetError() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>{this.props.message || "Something crashed!"}</h2>
          <button onClick={this.resetError}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

/* =====================================================
   2️⃣ BUGGY COMPONENTS (ტესტისთვის)
===================================================== */

// Button click-ზე აგდებს error-ს
function BuggyClick() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Crash from click");
  }

  return (
    <button onClick={() => setCrash(true)}>
      Click to crash
    </button>
  );
}

// პირდაპირ აგდებს error-ს
function BuggyOne() {
  throw new Error("Buggy One crashed");
}

function BuggyTwo() {
  throw new Error("Buggy Two crashed");
}

/* =====================================================
   3️⃣ LIBRARY VERSION (react-error-boundary)
   npm install react-error-boundary
===================================================== */

function LibFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Library Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

/* =====================================================
   4️⃣ APP
===================================================== */

function App() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Custom ErrorBoundary</h1>

      {/* თითოეული risky კომპონენტი ცალკე boundary-ში */}
      <ErrorBoundary message="First component failed">
        <BuggyClick />
      </ErrorBoundary>

      <ErrorBoundary message="Second component failed">
        <BuggyOne />
      </ErrorBoundary>

      <ErrorBoundary message="Third component failed">
        <BuggyTwo />
      </ErrorBoundary>

      <hr />

      <h1>Library ErrorBoundary</h1>

      <button onClick={() => setResetKey(prev => prev + 1)}>
        Change reset key
      </button>

      <LibErrorBoundary
        FallbackComponent={LibFallback}
        onReset={() => console.log("Library reset triggered")}
        resetKeys={[resetKey]}
      >
        <BuggyClick />
      </LibErrorBoundary>
    </div>
  );
}

export default App;

/* =====================================================
   კომენტარები
===================================================== */

/*
რატომ მუშაობს ErrorBoundary მხოლოდ class კომპონენტში?
- რადგან იყენებს lifecycle მეთოდებს:
  getDerivedStateFromError
  componentDidCatch
  რომლებიც მხოლოდ class კომპონენტში არსებობს.

რა ტიპის შეცდომებს იჭერს?
✔ render-ში
✔ lifecycle მეთოდებში
✔ constructor-ში

რა ტიპის შეცდომებს ვერ იჭერს?
✖ event handler-ში
✖ async ფუნქციებში
✖ setTimeout-ში
✖ server-side rendering-ში

რატომ არის კარგი risky კომპონენტის გარშემო ცალკე boundary?
- ერთი კომპონენტის crash არ ანადგურებს მთელ აპლიკაციას.

როგორ აუმჯობესებს UX-ს reset ღილაკი?
- მომხმარებელს შეუძლია ხელახლა სცადოს გვერდის refresh-ის გარეშე.

რა პლიუსი აქვს ready library-ს?
- ნაკლები boilerplate
- built-in resetKeys
- production-ready behavior
- უკეთესი DX (developer experience)

როდის ჯობია production-ში library?
- დიდ პროექტებში
- როცა გჭირდება სტაბილური და ტესტირებული გადაწყვეტა
*/