import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary Project</h1>
        <Dictionary defaultKeyword="wine" />
        <p>
          Project coded by Ana S.M.{" "}
          <a
            className="githubLink"
            href="https://github.com/anasanmua/DictionaryApp"
            target="_blank"
            rel="noreferrer"
          >
            open-source in Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
