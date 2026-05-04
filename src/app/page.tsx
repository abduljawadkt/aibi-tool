import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-24 text-center dark:bg-zinc-950 font-sans">
      <div className="mx-auto max-w-3xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-white/10 dark:hover:ring-white/20">
            Internal Alpha Build v0.1.0
          </div>
        </div>
        
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          AiBi Diagnostic Engine
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to the core of the AiBi product ecosystem. Generate comprehensive Diagnostic Study Reports and streamline legal document reviews with automated, data-driven insights.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            Start New Diagnostic
          </button>
          <button className="text-sm font-semibold leading-6 text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300">
            View Recent Reports <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </main>
  );
}
