export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-gray-500">
          question-{current}
          <span className="text-gray-300">/{total}</span>
        </span>
        <span className="font-mono text-xs text-red-600">{pct}%</span>
      </div>
      <div className="w-full h-2 bg-red-50 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
