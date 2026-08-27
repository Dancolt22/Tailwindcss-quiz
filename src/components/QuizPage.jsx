import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark.jsx";
import QuestionCard from "./QuestionCard.jsx";

export default function QuizPage({ questions, onFinish }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[index];
  const selected = answers[question.id];

  const select = (i) => {
    setAnswers((prev) => ({ ...prev, [question.id]: i }));
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish(answers);
    }
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-6 py-5 border-b border-gray-100">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <BrandMark />
          <span className="font-mono text-xs text-gray-400">in-progress</span>
        </div>
      </header>

      <main className="flex-1 flex items-start sm:items-center justify-center px-4 py-10">
        <div className="max-w-2xl w-full">
          <QuestionCard
            question={question}
            index={index}
            total={questions.length}
            selected={selected}
            onSelect={select}
          />

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={back}
              disabled={index === 0}
              className="text-sm font-medium text-gray-400 disabled:opacity-30 hover:text-gray-600 transition px-4 py-2"
            >
              ← Back
            </button>
            <button
              onClick={next}
              disabled={selected === undefined}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              {index === questions.length - 1 ? "Finish quiz" : "Next question"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
