import React from "react";
import "./Main.css";
import { ReactComponent as Blobs } from "./images/blobs.svg";
import { ReactComponent as Blobs2 } from "./images/blobs2.svg";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  const startquiz = () => {
    navigate("/quiz");
  };

  return (
    <main>
      
      <div className="main-page">
        <Blobs className="blobs b1" />
        <Blobs2 className="blobs b2" />
        <h2 className="header">Quizzical</h2>
        <p className="description">Some description if needed</p>
        <button className="start--button" onClick={startquiz}>
          Start quiz
        </button>
      </div>
    </main>
  );
}

export default Main;
