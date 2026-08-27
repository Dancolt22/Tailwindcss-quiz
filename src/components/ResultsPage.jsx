import { useState } from "react";
import { ListChecks, RotateCcw } from "lucide-react";
import BrandMark from "./BrandMark.jsx";
import ScoreSummary from "./ScoreSummary.jsx";
import ReviewRow from "./ReviewRow.jsx";

const FILTERS = ["all", "correct", "incorrect"];

export default function ResultsPage({ review, score, total, onRestart }) {
  const [filter, setFilter] = useState("all");

  const filtered = review.filter((item) => {
    const correct = item.userIndex === item.question.answer;
    if (filter === "correct") return correct;
    if (filter === "incorrect") return !correct;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-5 border-b border-gray-100">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <BrandMark />
          <span className="font-mono text-xs text-gray-400">results</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        <ScoreSummary score={score} total={total} />

        <div className="mt-10 flex items-center justify-between flex-wrap gap-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-red-600" />
            Corrections
          </h3>
          <div className="flex gap-2 font-mono text-xs">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full border transition ${
                  filter === f
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-gray-200 text-gray-500 hover:border-red-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {filtered.map((item) => (
            <ReviewRow key={item.question.id} item={item} number={review.indexOf(item) + 1} />
          ))}
        </div>

        <div className="mt-10 flex justify-center pb-10">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition transform hover:-translate-y-0.5 shadow-lg shadow-red-500/25"
          >
            <RotateCcw className="w-4 h-4" />
            Try again with new questions
          </button>
        </div>
      </main>
    </div>
  );
}
