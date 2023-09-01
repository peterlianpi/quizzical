import React from "react";
import Confetti from "react-confetti";
function Qa(props) {
  const questionsAndAnswers = [
    {
      question: "How would one say goodbye in Spanish?",
      answers: ["Adiós", "Hola", "Au Revoir", "Salir"],
    },
    {
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
      answers: [
        "Cabbage Patch Kids",
        "Transformers",
        "Care Bears",
        "Rubik’s Cube",
      ],
    },
    {
      question: "What is the hottest planet in our Solar System?",
      answers: ["Mercury", "Venus", "Mars", "Saturn"],
    },
    {
      question: "In which country was the Caesar salad invented?",
      answers: ["Italy", "Portugal", "Mexico", "France"],
    },
    {
      question: "How Many Hearts Does An Octopus Have?",
      answers: ["One", "Two", "Three", "Four"],
    },
  ];
  // Correct answers for each question
  const correctAnswers = [0, 0, 1, 0, 2];
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const totalQuestions = questionsAndAnswers.length;
  const [answeredQuestions, setAnsweredQuestions] = React.useState(0);

  function answer(questionIndex, answerIndex) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
    setAnsweredQuestions(answeredQuestions + 1);
  }

  function check() {
    let correctCount = 0;
    // Compare each selected answer with the correct answer
    for (let i = 0; i < totalQuestions; i++) {
      if (selectedAnswers[i] === correctAnswers[i]) {
        correctCount++;
      }
    }
    setScore(correctCount);
    setShowScore(true);
  }

  function playAgain() {
    setSelectedAnswers({});
    setShowScore(false);
  }

  return (
    <div>
      {score === totalQuestions && showScore ? <Confetti /> : null}
      {questionsAndAnswers.map((qa, questionIndex) => (
        <div className="question--box" key={questionIndex}>
          <p className="questions">{qa.question}</p>
          <div className="answer">
            {qa.answers.map((answerText, answerIndex) => (
              <div
                key={answerIndex}
                className={`box ${
                  selectedAnswers[questionIndex] === answerIndex
                    ? "selected"
                    : ""
                }`}
                onClick={() => answer(questionIndex, answerIndex)}
              >
                {answerText}
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
      {showScore ? (
        <div className="footer">
          <p className="score">
            You scored {score}/{totalQuestions} correct answers
          </p>
          <button className="btn play--again" onClick={playAgain}>
            Play again
          </button>
        </div>
      ) : (
        <button
          className="btn check"
          onClick={check}
          disabled={answeredQuestions < totalQuestions}
        >
          Check answers
        </button>
      )}
    </div>
  );
}
export default Qa;
