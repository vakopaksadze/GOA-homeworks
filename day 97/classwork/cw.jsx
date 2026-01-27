function App() {
  const objectStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    padding: "10px",
    marginTop: "10px"
  };

  return (
    <div>
      {/* Inline styling */}
      <h1
        style={{
          backgroundColor: "lightgreen",
          color: "darkgreen",
          padding: "10px"
        }}
      >
        Inline Styling
      </h1>

      {/* Object variable styling */}
      <h1 style={objectStyle}>
        Object Variable Styling
      </h1>
    </div>
  );
}

export default App;