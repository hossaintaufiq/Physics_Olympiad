'use client';

import React, { useState } from 'react';
import { Sparkles, HelpCircle, Check, Eye, ChevronDown, Award, Lightbulb, Calculator } from 'lucide-react';
import { PROBLEM_OF_THE_WEEK } from '@/data/bdphoData';

export const ProblemOfTheWeek: React.FC = () => {
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [userGuess, setUserGuess] = useState('');
  const [guessFeedback, setGuessFeedback] = useState<'correct' | 'close' | 'try-again' | null>(null);
  const [showFullSolution, setShowFullSolution] = useState(false);

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const g = userGuess.toLowerCase().replace(/\s+/g, '');
    if (g.includes('2.82') || g.includes('2sqrt(2)') || g.includes('2.83') || g.includes('sqrt(8)')) {
      setGuessFeedback('correct');
    } else if (g.includes('2') || g.includes('3') || g.includes('sqrt')) {
      setGuessFeedback('close');
    } else {
      setGuessFeedback('try-again');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-2xl">
          {/* Subtle gold radial background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 radial-glow-gold pointer-events-none opacity-20 blur-3xl" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Problem of the Week • Interactive Challenge
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PROBLEM_OF_THE_WEEK.title}
              </h2>
            </div>
            <span className="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider self-start sm:self-center font-mono">
              {PROBLEM_OF_THE_WEEK.category}
            </span>
          </div>

          {/* Problem Statement */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 space-y-3">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
              {PROBLEM_OF_THE_WEEK.problemStatement}
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <span className="text-amber-400 font-semibold font-sans">Given Constants:</span>{' '}
              {PROBLEM_OF_THE_WEEK.constants}
            </div>
          </div>

          {/* Interactive Hints Progression */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Progressive Socratic Hints ({hintLevel} of 3 revealed)
              </span>
              {hintLevel < 3 && (
                <button
                  type="button"
                  onClick={() => setHintLevel((prev) => Math.min(3, prev + 1))}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline transition"
                >
                  Unlock Next Hint (+1)
                </button>
              )}
            </div>

            {hintLevel >= 1 && (
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-sky-500/30 text-xs text-sky-200 animate-fadeIn">
                <strong className="text-sky-400 block mb-0.5">Hint 1:</strong>
                {PROBLEM_OF_THE_WEEK.hint1}
              </div>
            )}
            {hintLevel >= 2 && (
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-sky-500/30 text-xs text-sky-200 animate-fadeIn">
                <strong className="text-sky-400 block mb-0.5">Hint 2:</strong>
                {PROBLEM_OF_THE_WEEK.hint2}
              </div>
            )}
            {hintLevel >= 3 && (
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-amber-500/30 text-xs text-amber-200 animate-fadeIn">
                <strong className="text-amber-400 block mb-0.5">Hint 3 (Final Clue):</strong>
                {PROBLEM_OF_THE_WEEK.hint3}
              </div>
            )}
          </div>

          {/* Interactive Answer Verification Form */}
          <form onSubmit={checkAnswer} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6">
            <label htmlFor="userGuessInput" className="block text-xs font-semibold text-slate-300 mb-2">
              Test Your Coefficient (e.g. enter numeric multiplier for (m0 c)/(e B) or write 2*sqrt(2)):
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                id="userGuessInput"
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="e.g. 2.828 or 2*sqrt(2)"
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400 transition"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow-md shadow-amber-500/20"
              >
                Submit Check
              </button>
            </div>

            {guessFeedback === 'correct' && (
              <div className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn font-semibold">
                <Check className="w-4 h-4 text-emerald-400" />
                Brilliant! Exactly correct: R = 2√2 (m0 c) / (e B) ≈ 2.828 (m0 c)/(e B).
              </div>
            )}
            {guessFeedback === 'close' && (
              <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs animate-fadeIn">
                You are very close! Check your calculation of (3² - 1) under the square root.
              </div>
            )}
            {guessFeedback === 'try-again' && (
              <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs animate-fadeIn">
                Not quite. Remember that Kinetic Energy K = 2 m0 c², so total energy E = K + m0 c² = 3 m0 c². Unlock the hints above!
              </div>
            )}
          </form>

          {/* Toggle Full Mathematical Derivation */}
          <div>
            <button
              type="button"
              onClick={() => setShowFullSolution(!showFullSolution)}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white flex items-center justify-between transition"
            >
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-sky-400" />
                {showFullSolution ? 'Hide Complete Mathematical Derivation' : 'Reveal Complete Step-by-Step Derivation'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFullSolution ? 'rotate-180' : ''}`} />
            </button>

            {showFullSolution && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs font-mono text-slate-200 animate-fadeIn">
                <div className="text-amber-400 font-bold uppercase tracking-wider mb-2 font-sans">
                  Rigorous Olympiad Derivation:
                </div>
                {PROBLEM_OF_THE_WEEK.solutionSteps.map((step, idx) => (
                  <div key={idx} className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                    {step}
                  </div>
                ))}
                <div className="pt-3 text-sm font-bold text-emerald-400 font-sans">
                  Final Analytical Invariant: {PROBLEM_OF_THE_WEEK.numericalAnswer}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
