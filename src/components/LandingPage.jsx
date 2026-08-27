import { useState } from "react";
import { ArrowRight, Layers, BookOpen } from "lucide-react";
import BrandMark from "./BrandMark.jsx";
import ClassChip from "./ClassChip.jsx";
import { QUESTION_BANK, QUIZ_SECTIONS } from "../data/questions.js";

export default function LandingPage({ onStart }) {
  const [selectedSectionId, setSelectedSectionId] = useState("all");

  const currentSection = QUIZ_SECTIONS.find((s) => s.id === selectedSectionId) || QUIZ_SECTIONS[0];

  const handleStart = () => {
    onStart(selectedSectionId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="px-6 py-5 border-b border-gray-100">
        <BrandMark />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-sm font-medium px-3.5 py-1.5 rounded-full mb-8 border border-red-100">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            {QUESTION_BANK.length}-question bank across 25 chapters
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Master
            <span className="block text-red-600">TailwindCSS.</span>
          </h1>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Test what you know about utility classes, layout, states, and configuration. Select a course section or practice the full exam.
          </p>

          {/* Dropdown Section Selector */}
          <div className="mt-8 p-6 bg-gray-50/80 rounded-2xl border border-gray-200/80 text-left shadow-xs">
            <label htmlFor="section-select" className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              Select Quiz Section
            </label>
            <div className="relative">
              <select
                id="section-select"
                value={selectedSectionId}
                onChange={(e) => setSelectedSectionId(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3.5 pr-10 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition shadow-xs cursor-pointer text-sm sm:text-base"
              >
                {QUIZ_SECTIONS.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.name} ({sec.quizLength} of {sec.poolSize} Qs)
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <Layers className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>{currentSection.description}</span>
              <span className="font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100/60 shrink-0 ml-2">
                {currentSection.quizLength} / {currentSection.poolSize} Qs
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <ClassChip>bg-red-600</ClassChip>
            <ClassChip>flex-wrap</ClassChip>
            <ClassChip>hover:scale-110</ClassChip>
            <ClassChip>rounded-xl</ClassChip>
          </div>

          <button
            onClick={handleStart}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition transform hover:-translate-y-0.5 shadow-lg shadow-red-500/25 cursor-pointer"
          >
            Start {currentSection.id === "all" ? "Complete Exam (40 Qs)" : `Chapters ${currentSection.chapterRange} Quiz (${currentSection.quizLength} Qs)`}
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="mt-5 text-sm text-gray-400">No sign-up. No timer. Just Tailwind.</p>
        </div>
      </main>

      <footer className="px-6 py-5 border-t border-gray-100 text-center text-xs text-gray-400 font-mono">
        html → tailwind builder → output.css → browser
      </footer>
    </div>
  );
}
