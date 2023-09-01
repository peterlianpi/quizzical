import React from "react";
import { ReactComponent as Q1 } from "./images/Q1.svg";
import { ReactComponent as Q2 } from "./images/Q2.svg";
import "./Questions.css";
import Questions from "./Qa.js";

// function Questions() {
//   const [selectedAnswer, setSelectedAnswer] = React.useState({});

//   function answer(questionIndex, answerIndex) {
//     setSelectedAnswer((preAnswers) => ({
//       ...preAnswers,
//       [questionIndex]: answerIndex,
//     }));
//     console.log("====================================");
//     console.log("Answer");
//     console.log("====================================");
//     return true;
//   }

//   function check() {
//     console.log("====================================");
//     console.log("Click");
//     console.log("====================================");
//     return true;
//   }
//   return (
//     <div className="main-page">
//       <Q1 className="blobs b3" />
//       <Q2 className="blobs b4" />
//       <div className="text--area">
//         <div className="question--box" onClick={answer}>
//           <div className="question--one">
//             <p className="questions">How would one say goodbye in Spanish?</p>
//             <div className="answer">
//               <div className="box" onClick={answer}>
//                 Adiós
//               </div>
//               <div className="box" onClick={answer}>
//                 Hola
//               </div>
//               <div className="box" onClick={answer}>
//                 Au Revoir
//               </div>
//               <div className="box" onClick={answer}>
//                 Salir
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//         <div className="question--box" onClick={answer}>
//           <div className="question--two">
//             <p className="questions">
//               Which best selling toy of 1983 caused hysteria, resulting in riots
//               breaking in stores?
//             </p>
//             <div className="answer">
//               <div
//                 className={`box ${
//                   selectedAnswers[questionIndex] === answerIndex
//                     ? "selected"
//                     : ""
//                 }`}
//                 onClick={() => answer(questionIndex, answerIndex)}
//               ></div>
//               <div className="box" onClick={answer}>
//                 Cabbage Patch Kids
//               </div>
//               <div className="box" onClick={answer}>
//                 Transformers
//               </div>
//               <div className="box" onClick={answer}>
//                 Care Bears
//               </div>
//               <div className="box" onClick={answer}>
//                 Rubik’s Cube
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//         <div className="question--box" onClick={answer}>
//           <div className="question--three">
//             <p className="questions">
//               What is the hottest planet in our Solar System?
//             </p>
//             <div className="answer">
//               <div className="box" onClick={answer}>
//                 Mercury
//               </div>
//               <div className="box" onClick={answer}>
//                 Venus
//               </div>
//               <div className="box" onClick={answer}>
//                 Mars
//               </div>
//               <div className="box" onClick={answer}>
//                 Saturn
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//         <div className="question--box" onClick={answer}>
//           <div className="question--four">
//             <p className="questions">
//               In which country was the caesar salad invented?
//             </p>
//             <div className="answer">
//               <div className="box" onClick={answer}>
//                 Italy
//               </div>
//               <div className="box" onClick={answer}>
//                 Portugal
//               </div>
//               <div className="box" onClick={answer}>
//                 Mexico
//               </div>
//               <div className="box" onClick={answer}>
//                 France
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//         <div className="question--box" onClick={answer}>
//           <div className="question--five">
//             <p className="questions">How Many Hearts Does An Octopus Have?</p>
//             <div className="answer">
//               <div className="box" onClick={answer}>
//                 One
//               </div>
//               <div className="box" onClick={answer}>
//                 Two
//               </div>
//               <div className="box" onClick={answer}>
//                 Three
//               </div>
//               <div className="box" onClick={answer}>
//                 Four
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//       </div>
//       <button className="btn check" onClick={check}>
//         Check answers
//       </button>
//     </div>
//   );
// }

// export default Questions;

function Quiz() {
  // Your existing questions and answers
  return (
    <div className="main-page">
      <Q1 className="blobs b3" />
      <Q2 className="blobs b4" />
      <div className="text--area">
        <Questions />
      </div>
    </div>
  );
}

export default Quiz;
