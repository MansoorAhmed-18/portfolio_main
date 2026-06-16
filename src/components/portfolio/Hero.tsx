import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Data Analyst", "AI Tinkerer", "Problem Solver"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-orange">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-orange align-middle ml-1 animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* animated background */}
      <div className="absolute inset-0 grid-bg animate-grid-pulse pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-dark blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/3 right-1/4 text-orange/40 text-2xl animate-float-slow">✦</div>
      <div className="absolute bottom-1/4 left-10 text-orange/30 text-3xl animate-float-slow" style={{ animationDelay: "-4s" }}>✦</div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass text-cream px-4 py-1.5 rounded-full text-xs tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            Open to opportunities · Chennai, India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mt-6 break-words"
          >
            <span className="block text-cream">Hi, I'm</span>
            <span className="gradient-text block">Mansoor</span>
            <span className="text-outline-orange block">Ahmed</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xl md:text-2xl font-display"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-md text-muted-foreground leading-relaxed"
          >
            I love data and anything related to technology. I approach problems rationally
            and seek the simplest, most functional solutions possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-orange text-darker px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform animate-glow-pulse">
              Hire Me <span>🚀</span>
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 glass text-cream px-6 py-3 rounded-full font-medium hover:border-orange/60 transition-colors">
              ↓ View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground"
          >
            {[
              { l: "GitHub", h: "https://github.com/MansoorAhmed-18" },
              { l: "LinkedIn", h: "https://www.linkedin.com/in/mansoor-nagoor-004972282" },
              { l: "Hugging Face", h: "https://huggingface.co" },
              { l: "Email", h: "mailto:mansoor184517@gmail.com" },
            ].map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">
                {s.l} ↗
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* soft outer glow */}
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange/30 via-orange/5 to-transparent blur-3xl" />

          <div className="relative glass rounded-3xl p-6">
            <div className="aspect-square rounded-2xl relative overflow-hidden ring-1 ring-orange/30 bg-darker">
              {/* warm gradient backdrop */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, color-mix(in oklab, var(--orange) 70%, var(--darker)) 0%, var(--darker) 100%)",
                }}
              />
              {/* subtle grid */}
              <div className="absolute inset-0 grid-bg opacity-20" />

              <img
                src="photo.jpg"
                alt="Mansoor Ahmed portrait"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* readable bottom gradient for caption */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-darker via-darker/60 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 font-display text-cream">
                <div className="text-2xl font-bold">Mansoor Ahmed</div>
                <div className="text-[10px] tracking-[0.25em] text-orange/90 mt-1">FRONTEND · DATA</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="font-display text-xl text-cream">Mansoor Ahmed</div>
              <div className="text-sm text-muted-foreground">Frontend Developer · Data Analyst</div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["Python", "SQL", "Power BI"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-orange/15 text-orange border border-orange/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
