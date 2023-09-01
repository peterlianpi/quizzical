import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
