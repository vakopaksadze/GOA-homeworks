import React from "react";

/* ========== 2) Inline Style via props ========== */
function InlineStyleContainer() {
  const style = {
    backgroundColor: "lightblue",
    padding: "20px",
    textAlign: "center",
  };

  return <InlineStyleView style={style} />;
}

function InlineStyleView({ style }) {
  return <div style={style}>Inline Style via Props</div>;
}

/* ========== 3) Style Object ========== */
function StyleObjectContainer() {
  const titleStyle = {
    color: "darkgreen",
    marginBottom: "10px",
  };

  const boxStyle = {
    border: "2px solid green",
    padding: "15px",
  };

  return (
    <StyleObjectView titleStyle={titleStyle} boxStyle={boxStyle} />
  );
}

function StyleObjectView({ titleStyle, boxStyle }) {
  return (
    <div style={boxStyle}>
      <h3 style={titleStyle}>Style Object Title</h3>
      <p>Different style objects</p>
    </div>
  );
}

/* ========== 4) CSS Module (იმიტაცია) ========== */
/*
Card.module.css იქნებოდა ასე:
.title { color: purple; }
.text { font-size: 14px; }
.button { background: purple; color: white; }
*/

const moduleStyles = {
  title: { color: "purple" },
  text: { fontSize: "14px" },
  button: {
    backgroundColor: "purple",
    color: "white",
    padding: "5px 10px",
  },
};

function ModuleStyleContainer() {
  return <ModuleStyleView />;
}

function ModuleStyleView() {
  return (
    <div>
      <h3 style={moduleStyles.title}>Module Title</h3>
      <p style={moduleStyles.text}>Module text</p>
      <button style={moduleStyles.button}>Click</button>
    </div>
  );
}

/* ========== 5) Stylesheet CSS (იმიტაცია) ========== */
/*
styles.css:
.box { border: 1px solid black; padding: 10px; }
.highlight { color: red; }
*/

function StylesheetContainer() {
  return <StylesheetView />;
}

function StylesheetView() {
  return (
    <div>
      <div className="box">Styled Box</div>
      <p className="highlight">Highlighted Text</p>
    </div>
  );
}

/* ========== 6) Tailwind CSS ========== */
function TailwindContainer() {
  return <TailwindView text="Tailwind Card Example" />;
}

function TailwindView({ text }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg m-4">
      <h3 className="text-lg font-bold">{text}</h3>
      <p className="mt-2">Using Tailwind styles</p>
    </div>
  );
}

/* ========== 7) Mixed Styles ========== */
function MixedStylesContainer() {
  return <MixedStylesView />;
}

function MixedStylesView() {
  const inlineStyle = { color: "blue" };

  return (
    <div className="p-4 bg-yellow-100 rounded">
      {/* Inline */}
      <p style={inlineStyle}>Inline Style</p>

      {/* CSS Module (იმიტაცია) */}
      <p style={{ fontWeight: "bold" }}>CSS Module Style</p>

      {/* Tailwind */}
      <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
        Tailwind Button
      </button>
    </div>
  );
}

/* ========== APP ========== */
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <InlineStyleContainer />
      <StyleObjectContainer />
      <ModuleStyleContainer />
      <StylesheetContainer />
      <TailwindContainer />
      <MixedStylesContainer />
    </div>
  );
}