import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

function SectionHeader({ label, title, outline }: { label: string; title: string; outline?: string }) {
  return (
    <Reveal>
      <p className="text-xs tracking-[0.3em] uppercase text-orange mb-2">{label}</p>
      <h2 className="font-display text-4xl md:text-6xl font-black leading-none mb-12">
        {title} {outline && <span className="text-outline-orange">{outline}</span>}
      </h2>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-10 bg-darker/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Who am I" title="Hello," outline="I'm Mansoor!" />
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <p className="text-cream/80 leading-relaxed mb-4">
              I'm a B.Sc Computer Science student with skills in data analysis and a strong
              interest in front-end development. I enjoy working with data, building user-friendly
              web applications, and solving real-world problems through technology.
            </p>
            <p className="text-cream/80 leading-relaxed mb-6">
              I continuously explore new tools and technologies while building projects that
              strengthen both my analytical and development skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {["#DataDriven", "#ProblemSolver", "#AIEnthusiast", "#QuickLearner"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-dark border border-orange/20 text-cream text-sm">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-4">
            {[
              { h: "Location", p: "Chennai, India · Pallavaram" },
              { h: "Contact", p: "mansoor184517@gmail.com\n+91-8838201232" },
              { h: "Currently", p: "B.Sc. Computer Science, 2023–2026\nDG Vaishnav College, Chennai" },
            ].map((c, i) => (
              <Reveal key={c.h} delay={0.15 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "var(--orange)" }}
                  className="glass rounded-2xl p-6 border border-border"
                >
                  <h4 className="font-display text-orange mb-1">{c.h}</h4>
                  <p className="text-cream/70 text-sm whitespace-pre-line">{c.p}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { h: "Languages", items: ["Python", "SQL", "MySQL", "JavaScript", "ASP.NET"] },
  { h: "Web", items: ["HTML", "CSS"] },
  { h: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Streamlit"] },
  { h: "Tools", items: ["Power BI", "MS Excel", "GitHub"] },
  { h: "AI / APIs", items: ["Gemini AI", "OpenAI", "Hugging Face", "Gradio"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader label="What I work with" title="Technical" outline="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.h} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-6 h-full transition-all hover:border-orange/60"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/10 group-hover:to-transparent transition-all" />
                <h4 className="relative text-orange text-xs tracking-[0.2em] uppercase mb-4">{g.h}</h4>
                <div className="relative flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="text-sm px-3 py-1 rounded-full bg-cream/5 text-cream border border-cream/10">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const items = [
    {
      date: "Apr 2025",
      title: "Data Science Intern",
      company: "Commonwealth Bank (Online)",
      body: "Performed data analysis and anonymization on sample banking datasets. Proposed data workflows and designed sample databases. Gained exposure to real-world data processing and analytics tasks.",
    },
  ];
  return (
    <section id="experience" className="relative py-28 px-6 md:px-10 bg-darker/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Work history" title="Experience" />
        <div className="relative pl-8 md:pl-12 border-l border-orange/30">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative mb-10">
                <span className="absolute -left-[2.4rem] md:-left-[3.4rem] top-2 w-4 h-4 rounded-full bg-orange ring-4 ring-orange/20" />
                <div className="text-orange text-sm font-medium mb-1">{it.date}</div>
                <h3 className="font-display text-2xl text-cream">{it.title}</h3>
                <div className="text-muted-foreground text-sm mb-3">{it.company}</div>
                <p className="text-cream/70 max-w-2xl leading-relaxed">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { n: "01", t: "AI SQL Query Generator", d: "Built an AI tool that converts natural language into SQL queries. Integrated Hugging Face & OpenAI APIs with Gemini AI.", tags: ["Gemini AI", "SQL", "Python"] },
  { n: "02", t: "Password Masking Tool", d: "Secure password masking system using encryption/decryption keys, built with Python for robust data protection.", tags: ["Python", "Encryption", "Security"] },
  { n: "03", t: "AI Calculator", d: "Natural-language calculator for AI-based arithmetic, deployed via Gradio.", tags: ["Gradio", "Python"] },
  { n: "04", t: "Sales Performance Dashboard", d: "Designed the database in MySQL and loaded data into Power BI for rich visual analytics.", tags: ["MySQL", "Power BI", "SQL"] },
  { n: "05", t: "Sportify", d: "An e-commerce website for sports gear with product browsing, cart, and checkout flows. Built with React on the front-end and Strapi as a headless CMS for content & APIs.", tags: ["React", "JavaScript", "Strapi"] },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader label="What I've built" title="Selected" outline="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-7 h-full overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange to-orange/40 transition-all duration-500" />
                <div className="font-display text-6xl font-black text-orange/15 leading-none mb-2">{p.n}</div>
                <h3 className="font-display text-2xl text-cream mb-2">{p.t}</h3>
                <p className="text-cream/70 leading-relaxed mb-4">{p.d}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-orange/10 text-orange border border-orange/30">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  const cards = [
    { i: "🏆", h: "International Conference Paper", p: "Presented on AI in Automation · DG Vaishnav College" },
    { i: "📊", h: "Microsoft Power BI for Beginners", p: "Certified by Simplilearn" },
    { i: "🛢", h: "Introduction to SQL", p: "Certified by Simplilearn" },
  ];
  return (
    <section id="awards" className="relative py-28 px-6 md:px-10 bg-darker/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Recognition" title="Awards &" outline="Certifications" />
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.h} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 border-l-4 border-l-orange h-full">
                <div className="text-3xl mb-3">{c.i}</div>
                <h3 className="text-cream font-medium mb-1">{c.h}</h3>
                <p className="text-muted-foreground text-sm">{c.p}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const items = [
    { y: "2023 – 2026", t: "B.Sc. Computer Science", p: "DG Vaishnav College, Chennai" },
    { y: "2023", t: "12th Standard", p: "Govt. ADW HR Sec School, Meenambakkam" },
    { y: "2021", t: "10th Standard", p: "Cantonment Board High School, Pallavaram" },
  ];
  return (
    <section id="education" className="relative py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Academic background" title="Education" />
        <div className="grid gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 6 }}
                className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 hover:border-orange/50"
              >
                <div className="text-orange text-sm font-medium md:w-32">{it.y}</div>
                <div>
                  <h3 className="font-display text-cream text-xl">{it.t}</h3>
                  <p className="text-muted-foreground text-sm">{it.p}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 bg-orange text-darker overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-darker/20 rounded-full blur-3xl animate-blob" />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
            Let's Work<br />
            <span className="text-outline-dark">Together!</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl mx-auto text-darker/70">
            Open to internships, freelance projects, and collaboration. Let's build something great.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="mailto:mansoor184517@gmail.com" className="px-6 py-3 rounded-full bg-darker text-cream hover:scale-105 transition-transform">
              mansoor184517@gmail.com
            </a>
            <a href="tel:+918838201232" className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors">
              +91-8838201232
            </a>
            <a href="https://github.com/MansoorAhmed-18" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mansoor-nagoor-004972282" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors">
              LinkedIn
            </a>
            <a
              href="https://instagram.com/its_me_mansoor_.18"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors"
            >
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-darker border-t border-border py-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
        <span className="font-display text-cream">✦ Mansoor Ahmed N G</span>
        <span>© 2025 · Built with passion from Chennai</span>
      </div>
    </footer>
  );
}
