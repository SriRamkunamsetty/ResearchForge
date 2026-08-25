const statusCards = [
  {
    label: 'Current milestone',
    value: 'M1.5',
    detail: 'Scaffold foundation',
    accent: 'bg-cyan-400',
  },
  {
    label: 'Platform layers',
    value: '04',
    detail: 'Web, API, AI, data',
    accent: 'bg-violet-400',
  },
  {
    label: 'Open source',
    value: '100%',
    detail: 'Built in the open',
    accent: 'bg-emerald-400',
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
      <path d="m10 2 1.35 5.65L17 9l-5.65 1.35L10 16l-1.35-5.65L3 9l5.65-1.35L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m16 14 .45 1.55L18 16l-1.55.45L16 18l-.45-1.55L14 16l1.55-.45L16 14Z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-18rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent_86%)]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="#top" className="group inline-flex items-center gap-3" aria-label="ResearchForge home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/30 transition group-hover:border-cyan-200/60 group-hover:bg-cyan-300/20">
              <SparkIcon />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-100">RESEARCHFORGE</span>
          </a>
          <a href="https://github.com/JanmejaiPratapTonk-123/ResearchForge" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200">
            View repository
            <ArrowUpRight />
          </a>
        </header>

        <section id="top" className="grid flex-1 items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              Scaffold active · milestone M1.5
            </div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">The research operating system</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Turn scattered knowledge into <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">research momentum.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              ResearchForge is an open-source workspace for discovering, understanding, and connecting scientific knowledge with AI-assisted tools built for researchers.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/JanmejaiPratapTonk-123/ResearchForge" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-950/40 transition hover:bg-cyan-200">
                Explore the project
                <ArrowUpRight />
              </a>
              <a href="#status" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5">
                See platform status
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Open-source by design</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Built for reproducibility</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Research workspace</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">Build the knowledge graph</h2>
                </div>
                <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-200">LIVE</span>
              </div>
              <div className="space-y-3 py-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-4 flex items-center justify-between text-xs text-slate-500"><span>Discovery pipeline</span><span className="text-emerald-300">Ready</span></div>
                  <div className="flex items-center gap-2"><span className="h-2 flex-1 rounded-full bg-cyan-300" /><span className="h-2 w-10 rounded-full bg-cyan-300/40" /><span className="h-2 w-10 rounded-full bg-cyan-300/20" /></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="text-xs text-slate-500">Connected papers</p><p className="mt-2 text-2xl font-semibold text-white">01.2k</p></div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="text-xs text-slate-500">Active threads</p><p className="mt-2 text-2xl font-semibold text-white">024</p></div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-violet-300/15 bg-violet-300/[0.07] p-4 text-sm text-slate-300">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-300/10 text-violet-200"><SparkIcon /></span>
                <span>One connected view for papers, ideas, and the next meaningful question.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="status" className="border-t border-white/10 py-10">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Project pulse</p><h2 className="mt-2 text-2xl font-semibold text-white">A foundation you can build on.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">The current milestone focuses on a clear, runnable scaffold for the platform ahead.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {statusCards.map((card) => (
              <div key={card.label} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
                <div className={`mb-8 h-1 w-10 rounded-full ${card.accent}`} />
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{card.label}</p>
                <div className="mt-2 flex items-baseline gap-3"><p className="text-3xl font-semibold tracking-tight text-white">{card.value}</p><p className="text-sm text-slate-500">{card.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>ResearchForge · open-source AI research infrastructure</span>
          <span>Next.js frontend scaffold · ready for the next milestone</span>
        </footer>
      </div>
    </main>
  );
}
