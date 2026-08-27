import ProgressBar from "./ProgressBar.jsx";

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({ question, index, total, selected, onSelect }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 mb-4">
        <ProgressBar current={index + 1} total={total} />
      </div>

      {question.chapter && (
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
          Chapter {question.chapter}
        </span>
      )}

      <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-snug">
        {question.q}
      </h2>

      <div className="mt-6 space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl border transition ${
                isSelected
                  ? "border-red-600 bg-red-50 text-red-700"
                  : "border-gray-200 hover:border-red-300 hover:bg-red-50/40 text-gray-700"
              }`}
            >
              <span
                className={`font-mono text-xs w-6 h-6 shrink-0 flex items-center justify-center rounded-md border ${
                  isSelected ? "bg-red-600 text-white border-red-600" : "border-gray-300 text-gray-400"
                }`}
              >
                {LETTERS[i]}
              </span>
              <span className="text-sm sm:text-base">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
