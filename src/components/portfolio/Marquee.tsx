const items = [
  "Python", "SQL", "Power BI", "Pandas", "NumPy",
  "Gemini AI", "OpenAI", "Hugging Face", "Streamlit", "MySQL", "Gradio",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-hidden className="relative py-10 border-y border-orange/20 bg-darker/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-darker to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-darker to-transparent" />
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl md:text-5xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-cream/70 hover:text-orange transition-colors">{t}</span>
            <span className="text-orange/60">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
