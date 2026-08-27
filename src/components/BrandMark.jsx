import { Terminal } from "lucide-react";

export default function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
        <Terminal className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <span className="font-mono font-bold text-gray-900 tracking-tight">tw-quiz</span>
    </div>
  );
}
