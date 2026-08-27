import { useState } from "react";
import FlipStage from "./components/FlipStage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import { useFlipNavigator } from "./hooks/useFlipNavigator.js";
import { QUIZ_SECTIONS, getQuestionsBySection } from "./data/questions.js";
import { shuffle } from "./utils/shuffle.js";

export default function App() {
  const { screen, rotation, transitionOn, navigate } = useFlipNavigator("landing");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [results, setResults] = useState({ review: [], score: 0 });

  const startQuiz = (sectionId = "all") => {
    const section = QUIZ_SECTIONS.find((s) => s.id === sectionId) || QUIZ_SECTIONS[0];
    const pool = getQuestionsBySection(sectionId);
    const targetLength = section.quizLength || 30;
    const count = Math.min(targetLength, pool.length);
    setQuizQuestions(shuffle(pool).slice(0, count));
    navigate("quiz");
  };

  const finishQuiz = (answers) => {
    const review = quizQuestions.map((q) => ({ question: q, userIndex: answers[q.id] }));
    const score = review.filter((r) => r.userIndex === r.question.answer).length;
    setResults({ review, score });
    navigate("results");
  };

  const restart = () => navigate("landing");

  return (
    <div className="min-h-screen bg-white font-sans">
      <FlipStage rotation={rotation} transitionOn={transitionOn}>
        {screen === "landing" && <LandingPage onStart={startQuiz} />}
        {screen === "quiz" && <QuizPage questions={quizQuestions} onFinish={finishQuiz} />}
        {screen === "results" && (
          <ResultsPage
            review={results.review}
            score={results.score}
            total={quizQuestions.length}
            onRestart={restart}
          />
        )}
      </FlipStage>
    </div>
  );
}
