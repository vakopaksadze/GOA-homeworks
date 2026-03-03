import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams
} from "react-router-dom";

/*
რატომ არის BrowserRouter საჭირო?

BrowserRouter აკონტროლებს URL-ს და გვაძლევს
routing-ის შესაძლებლობას SPA აპლიკაციაში.
გვერდი მთლიანად არ იტვირთება თავიდან.
*/

/* -------------------- Navigation -------------------- */

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/contact">Contact</NavLink> |{" "}
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}

/*
რატომ არ ვიყენებთ <a> ტეგს?

<a> მთლიანად ტვირთავს გვერდს თავიდან.
React Router-ის Link / NavLink კი
ცვლის URL-ს refresh-ის გარეშე.

განსხვავება Link-სა და anchor-ს შორის:
Link → SPA ნავიგაცია
<a> → სრული გადატვირთვა
*/

/* -------------------- Pages -------------------- */

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

/* -------------------- Nested Routes -------------------- */

function Products() {
  return (
    <div>
      <h2>Products Page</h2>

      <Link to="/products">All Products</Link> |{" "}
      <Link to="/products/exotic">Exotic</Link> |{" "}
      <Link to="/products/1">Product 1</Link>

      <Outlet />
    </div>
  );
}

/*
index route ნიშნავს default child route-ს.
ანუ როცა შევდივართ /products-ზე,
გამოჩნდება ProductList.

dynamic param (:id) ნიშნავს,
რომ URL-ში ეს ნაწილი ცვლადია.

მაგ:
products/5 → id = 5
*/

function ProductList() {
  return <h3>All Products</h3>;
}

function Exotic() {
  return <h3>Exotic Products</h3>;
}

function Product() {
  const { id } = useParams();

  return <h3>Product ID: {id}</h3>;
}

/*
როგორ მუშაობს useParams?

useParams კითხულობს URL-დან dynamic პარამეტრებს.

რატომ არის dynamic routing მნიშვნელოვანი?

ერთ კომპონენტს ვიყენებთ
მრავალი სხვადასხვა მონაცემისთვის.
*/

/* -------------------- NotFound -------------------- */

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

/*
რატომ არის wildcard route საჭირო?

path="*" იჭერს ყველა არასწორ URL-ს.

თუ "*" არ გვექნება,
არასწორ URL-ზე არაფერი გამოჩნდება.
*/

/* -------------------- App -------------------- */

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="exotic" element={<Exotic />} />
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

/*
რას აკეთებს Routes?

Routes არჩევს რომელი Route უნდა გამოჩნდეს
მიმდინარე URL-ის მიხედვით.
*/

/* -------------------- Render -------------------- */

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)