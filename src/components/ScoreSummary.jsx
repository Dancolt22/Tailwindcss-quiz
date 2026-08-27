import { Trophy } from "lucide-react";

export default function ScoreSummary({ score, total }) {
  const pct = Math.round((score / total) * 100);
  const message =
    pct >= 90
      ? "Utility-class virtuoso."
      : pct >= 70
      ? "Solid grip on Tailwind."
      : pct >= 50
      ? "Getting there - review the misses below."
      : "Worth another pass through the material.";

  return (
    <div className="bg-red-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
      <div className="absolute -bottom-14 -left-8 w-32 h-32 bg-white/10 rounded-full" />
      <Trophy className="w-10 h-10 mx-auto mb-3 text-white/90" />
      <p className="font-mono text-sm text-red-100">final-score</p>
      <p className="font-serif text-6xl font-bold mt-1">{pct}%</p>
      <p className="mt-2 text-red-100">
        {score} of {total} correct
      </p>
      <p className="mt-4 text-sm text-red-100 max-w-sm mx-auto">{message}</p>
    </div>
  );
}
