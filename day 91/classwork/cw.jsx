function App() {
  const languages = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'PHP',
    'Ruby',
    'Swift',
    'Kotlin',
    'Go',
    'Rust'
  ];

  return (
    <div>
      <h2>Programming Languages</h2>

      <ul>
        {languages.map((language, index) => (
          <li
            key={index}
            onClick={(event) => {
              console.log('Language:', language);
              console.log('Index:', index);
              console.log('Event:', event);
            }}
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;