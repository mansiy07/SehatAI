// ==========================================
// Health Quiz
// ==========================================

import "./../styles/Quiz.css";

import { useState } from "react";
import { FaClipboardCheck } from "react-icons/fa";

function Quiz() {

  const [score, setScore] = useState(null);

  const submitQuiz = () => {

    setScore(2);

  };

  return (

    <div className="quiz-page">

      <div className="quiz-card">

        <FaClipboardCheck className="quiz-icon"/>

        <h1>Health Quiz</h1>

        <p>

          Test your healthcare knowledge.

        </p>

        <div className="question">

          <h3>

            1. How much water should an adult drink daily?

          </h3>

          <label>

            <input type="radio" name="q1"/>

            1 Litre

          </label>

          <label>

            <input type="radio" name="q1"/>

            2-3 Litres

          </label>

          <label>

            <input type="radio" name="q1"/>

            5 Litres

          </label>

        </div>

        <div className="question">

          <h3>

            2. Which vitamin is mainly obtained from sunlight?

          </h3>

          <label>

            <input type="radio" name="q2"/>

            Vitamin A

          </label>

          <label>

            <input type="radio" name="q2"/>

            Vitamin C

          </label>

          <label>

            <input type="radio" name="q2"/>

            Vitamin D

          </label>

        </div>

        <button onClick={submitQuiz}>

          Submit Quiz

        </button>

        {

          score !== null &&

          <div className="result">

            Your Score : {score}/2 🎉

          </div>

        }

      </div>

    </div>

  );

}

export default Quiz;