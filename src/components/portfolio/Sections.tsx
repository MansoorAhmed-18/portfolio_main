import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

function SectionHeader({
  label,
  title,
  outline,
}: {
  label: string;
  title: string;
  outline?: string;
}) {
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
              I'm a Computer Science student with practical exposure to Python, SQL, Power BI,
              Excel, and data analysis. Experienced in building data dashboards, web applications,
              working with modern databases, and exploring AI-related technologies.
            </p>
            <p className="text-cream/80 leading-relaxed mb-6">
              A quick learner with strong problem-solving skills who is eager to contribute to data
              analytics, business intelligence, or web development projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "#DataAnalytics",
                "#PowerBI",
                "#Python",
                "#WebDevelopment",
                "#ProblemSolver",
                "#QuickLearner",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-dark border border-orange/20 text-cream text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-4">
            {[
              { h: "Location", p: "Chennai, India · Pallavaram" },
              { h: "Contact", p: "mansoor184517@gmail.com\n+91 88382 01232" },
              {
                h: "Currently",
                p: "B.Sc. Computer Science (2023–2026)\nD.G. Vaishnav College, Chennai",
              },
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
  { h: "Programming", items: ["Python", "JavaScript"] },
  { h: "Databases", items: ["MySQL", "Oracle"] },
  {
    h: "Data & Visualization",
    items: ["Power BI", "Microsoft Excel", "Pandas", "NumPy", "Matplotlib"],
  },
  { h: "Web Development", items: ["HTML", "CSS"] },
  { h: "Tools & Platforms", items: ["GitHub", "Vercel", "AWS"] },
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
                <h4 className="relative text-orange text-xs tracking-[0.2em] uppercase mb-4">
                  {g.h}
                </h4>
                <div className="relative flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-sm px-3 py-1 rounded-full bg-cream/5 text-cream border border-cream/10"
                    >
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
      date: "2026",
      title: "Freelance Web Developer",
      company: "Client Projects (Chennai)",
      body: "Built websites for two local business clients: a salon and a photography business. Worked directly with clients to understand requirements and update website content and layout based on feedback. Developed responsive pages using HTML, CSS, JavaScript, and React with GitHub and Vercel for version control and deployment. Handled live website setup, domain configuration, and practiced on-page SEO.",
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
  {
    n: "01",
    t: "Restaurant Billing System & Power BI Analytics",
    d: "Building a restaurant billing workflow with a frontend and Supabase-backed data storage for orders, items, quantities, prices, and payment records. Connected to an interactive Power BI dashboard analyzing sales performance, best-selling items, peak business hours, and sales trends.",
    tags: ["Power BI", "Supabase", "SQL", "Data Analytics"],
    liveUrl: "https://tanskitchen.vercel.app/",
  },
  {
    n: "02",
    t: "Harinee Photography — Studio Website",
    d: "Production photography studio website built to showcase portfolio galleries, service packages, and client booking inquiries with clean responsive layout and optimized on-page SEO.",
    tags: ["React", "JavaScript", "HTML/CSS", "SEO", "Vercel"],
    liveUrl: "https://www.harineephotography.in/",
  },
  {
    n: "03",
    t: "Sales Performance Dashboard",
    d: "Designed a relational database in MySQL and connected data pipelines into Power BI to create an executive dashboard for visualizing sales metrics, regional KPIs, and performance trends.",
    tags: ["MySQL", "Power BI", "SQL", "Dashboards"],
    liveUrl:
      "https://app.fabric.microsoft.com/links/CDqI8oYZJB?ctid=11d5f58b-5d18-41e4-8cc7-d9398022dec0&pbi_source=linkShare&bookmarkGuid=f32c88e9-ba6c-4d2b-a686-4bd40604dfbb",
  },
  {
    n: "04",
    t: "Password Masking with Python",
    d: "A Python script that securely connects to MySQL using an encrypted password (Fernet cryptography & custom masked strings) to demonstrate how to handle database connections safely and cleanly.",
    tags: ["Python", "Cryptography", "MySQL", "Security"],
    liveUrl: "https://github.com/MansoorAhmed-18/password_masking-using-python",
    downloadUrl: "/password_masking_python.zip",
    btnLabel: "Run / Code",
  },
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
                className="group relative glass rounded-2xl p-7 h-full overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange to-orange/40 transition-all duration-500" />
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="font-display text-6xl font-black text-orange/15 leading-none">
                      {p.n}
                    </div>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.t}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-orange text-darker hover:bg-cream hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange/15 shrink-0"
                    >
                      <span>{p.btnLabel || "Run"}</span>
                      <span className="text-[10px]" aria-hidden>
                        ▶
                      </span>
                    </a>
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-2">{p.t}</h3>
                  <p className="text-cream/70 leading-relaxed mb-4">{p.d}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-cream/10 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-orange/10 text-orange border border-orange/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.downloadUrl && (
                    <a
                      href={p.downloadUrl}
                      download="password_masking_python.zip"
                      aria-label={`Download ${p.t} zip`}
                      className="inline-flex items-center gap-1 text-xs text-orange hover:text-cream font-medium transition-colors"
                    >
                      <span>Download .zip ↓</span>
                    </a>
                  )}
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
    {
      i: "🏆",
      h: "International Conference Paper",
      p: "Presented on Artificial Intelligence in Automation · D.G. Vaishnav College",
    },
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
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border-l-4 border-l-orange h-full"
              >
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
    {
      y: "2023 – 2026",
      t: "B.Sc. Computer Science",
      p: "D.G. Vaishnav College, Chennai (Presented International Conference Paper on AI in Automation)",
    },
    {
      y: "2023",
      t: "Higher Secondary (12th)",
      p: "Govt. ADW HR Sec School, Meenambakkam",
    },
    {
      y: "2021",
      t: "SSLC (10th)",
      p: "Cantonment Board High School, Pallavaram",
    },
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
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 bg-orange text-darker overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-darker/20 rounded-full blur-3xl animate-blob" />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
            Let's Work
            <br />
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
            <a
              href="mailto:mansoor184517@gmail.com"
              className="px-6 py-3 rounded-full bg-darker text-cream hover:scale-105 transition-transform"
            >
              mansoor184517@gmail.com
            </a>
            <a
              href="tel:+918838201232"
              className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors"
            >
              +91-8838201232
            </a>
            <a
              href="https://github.com/MansoorAhmed-18"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mansoor-nagoor-004972282"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border-2 border-darker text-darker hover:bg-darker hover:text-cream transition-colors"
            >
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
