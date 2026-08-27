import { CheckCircle2, XCircle } from "lucide-react";

const LETTERS = ["A", "B", "C", "D"];

export default function ReviewRow({ item, number }) {
  const correct = item.userIndex === item.question.answer;

  return (
    <div className="border border-gray-100 rounded-xl p-5 bg-white">
      <div className="flex items-start gap-3">
        {correct ? (
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <p className="font-mono text-xs text-gray-400 mb-1">q-{number}</p>
          <p className="font-semibold text-gray-900">{item.question.q}</p>

          <div className="mt-3 space-y-1.5 text-sm">
            <p className={correct ? "text-green-700" : "text-red-600"}>
              Your answer:{" "}
              {item.userIndex === undefined
                ? "- skipped -"
                : `${LETTERS[item.userIndex]}. ${item.question.options[item.userIndex]}`}
            </p>
            {!correct && (
              <p className="text-green-700">
                Correct answer: {LETTERS[item.question.answer]}. {item.question.options[item.question.answer]}
              </p>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-500 border-t border-gray-100 pt-3">
            {item.question.explain}
          </p>
        </div>
      </div>
    </div>
  );
}
