import "./App.css";
import { ReactComponent as Blobs } from "./images/blobs.svg";
import { ReactComponent as Blobs2 } from "./images/blobs2.svg";

function App() {
  return (
    <main>
      <div className="intro-page">
        <Blobs />
        <Blobs2 />
        <h2 className="header">Quizzical</h2>
        <p className="description">Some description if needed</p>
        <button className="start--button">Start quiz</button>
      </div>
    </main>
  );
}

export default App;
