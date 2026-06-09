import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import profileImage from "./assets/anshi_profile.png";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  certifications,
  contactLinks,
  education,
  experience,
  heroStats,
  linkedinHighlights,
  navigation,
  profile,
  projectHighlights,
  roleTargets,
  skillGroups,
  strengths,
} from "./content";

const resumeText = `${profile.name}
${profile.location}
Email: ${profile.email}
Phone: ${profile.phone}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}

Headline
${profile.headline}

Professional Summary
${profile.summary}

Core Skills
${skillGroups.flatMap((group) => group.skills).join(", ")}

Project Highlights
${projectHighlights
  .map(
    (project) =>
      `${project.title} | ${project.stack.join(", ")}\n- ${project.summary}\n- ${project.features.join(
        "\n- ",
      )}\n- Impact: ${project.impact.join(" | ")}`,
  )
  .join("\n\n")}

Experience
${experience
  .map(
    (item) =>
      `${item.role} | ${item.organization} | ${item.period}\n- ${item.points.join(
        "\n- ",
      )}`,
  )
  .join("\n\n")}

Education
${education
  .map((item) => `${item.degree} | ${item.school} | ${item.period}\n${item.details}`)
  .join("\n\n")}

Certifications
${certifications.map((item) => `${item.title} | ${item.issuer}`).join("\n")}
`;

const projectTone = {
  electric: "from-cyan-400/35 via-sky-500/20 to-slate-900",
  aurora: "from-emerald-400/30 via-teal-500/18 to-slate-900",
  ember: "from-amber-400/28 via-orange-500/18 to-slate-900",
};

function downloadResume() {
  const file = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${profile.name.replace(/\s+/g, "-")}-Resume.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function getGitHubUsername(urlOrHandle) {
  if (!urlOrHandle) return "";
  const trimmed = urlOrHandle.trim();
  if (trimmed.includes("github.com/")) {
    const parts = trimmed.split("github.com/");
    if (parts[1]) {
      return parts[1].split("/")[0].split("?")[0].trim();
    }
  }
  return trimmed;
}

function App() {
  const hasLinkedIn = Boolean(profile.linkedin);
  const hasGitHub = Boolean(profile.github);
  const hasCertifications = certifications.length > 0;

  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") {
      return "dark";
    }
    return document.documentElement.dataset.theme || "dark";
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name || "a recruiter"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatusMessage(
      "Your email app is opening with the message pre-filled. If it does not open, use the direct email link below.",
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(80,176,255,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(136,92,255,0.20),transparent_28%),radial-gradient(circle_at_bottom,rgba(15,204,170,0.14),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,16,32,0.08),transparent_25%,transparent_75%,rgba(8,16,32,0.08))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface-strong)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[var(--brand)]/15 text-sm font-semibold text-[var(--heading)] shadow-[var(--shadow-soft)]">
              {profile.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-[var(--heading)]">
                {profile.name}
              </p>
              <p className="text-xs text-[var(--muted)]">
                Internships and entry-level roles
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle
              theme={theme}
              onToggle={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            />
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Let&apos;s connect
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-8 md:px-8 md:pt-12">
        <Reveal>
          <section id="home" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-panel overflow-hidden p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                <Sparkles className="h-4 w-4 text-[var(--brand)]" />
                2026-ready portfolio redesign
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.26em] text-[var(--muted)]">
                {profile.location}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[var(--heading)] md:text-6xl">
                {profile.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text)] md:text-xl">
                {profile.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={downloadResume} className="btn-primary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
                {hasLinkedIn ? (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                    View LinkedIn
                  </a>
                ) : null}
                <a href="#projects" className="btn-ghost">
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-2xl font-semibold text-[var(--heading)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                    Recruiter snapshot
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--heading)]">
                    Why I&apos;m a strong early-career candidate
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-[var(--heading)]">
                  Open now
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-5 shadow-[var(--shadow-soft)]">
                <img
                  src={profileImage}
                  alt={`Portrait of ${profile.name}`}
                  className="h-72 w-full rounded-[1.6rem] object-cover object-top md:h-80"
                />
              </div>

              <div className="mt-6 grid gap-3">
                {roleTargets.map((target) => (
                  <div
                    key={target}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)]"
                  >
                    <Handshake className="h-4 w-4 text-[var(--brand)]" />
                    {target}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="section-shell">
            <SectionHeading
              eyebrow="About Me"
              title="Recruiter-focused positioning that connects learning to practical QA work."
              description={profile.summary}
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="glass-panel p-7 md:p-8">
                <h3 className="text-xl font-semibold text-[var(--heading)]">
                  What I bring to a QA team
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--text)]">
                  I am a motivated Computer Science graduate seeking an
                  entry-level software testing opportunity where I can apply my
                  knowledge of manual testing, test case design, defect
                  reporting, and validation techniques to support software
                  quality in a professional environment.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="chip"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </article>

              <div className="grid gap-4">
                {strengths.map((strength) => (
                  <article key={strength.title} className="glass-panel p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/15 bg-[var(--brand)]/12 p-3 text-[var(--brand)]">
                        <strength.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--heading)]">
                          {strength.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {strength.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="section-shell">
            <SectionHeading
              eyebrow="Skills"
              title="Core QA skills and basic tools aligned to software testing roles."
              description="The skill section is now grouped the way recruiters scan entry-level QA candidates: testing fundamentals, validation tools, documentation, and web basics."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <article key={group.title} className="glass-panel p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/15 bg-[var(--brand)]/12 p-3 text-[var(--brand)]">
                      <group.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--heading)]">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {group.caption}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="projects" className="section-shell">
            <SectionHeading
              eyebrow="Project"
              title="A testing project that directly matches the target role."
              description="Instead of unrelated development projects, this version focuses on a manual testing project that supports QA, software testing, and validation-oriented roles."
            />

            <div className="grid gap-6 xl:grid-cols-1">
              {projectHighlights.map((project) => (
                <article key={project.title} className="glass-panel flex h-full flex-col overflow-hidden">
                  <div
                    className={`project-visual bg-gradient-to-br ${projectTone[project.tone]}`}
                  >
                    <div className="mb-5 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/70" />
                      <span className="h-3 w-3 rounded-full bg-white/40" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                      {project.previewLabel}
                    </p>
                    <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                      {project.previewText}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-base leading-8 text-[var(--text)]">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        Key Features
                      </h4>
                      <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text)]">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        Impact / Results
                      </h4>
                      <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text)]">
                        {project.impact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <FolderGit2 className="h-4 w-4" />
                          GitHub
                        </a>
                      ) : null}
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.liveLabel}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="section-shell">
              <SectionHeading
                eyebrow="Experience"
                title="Honest entry-level positioning without inventing work history."
                description="For a fresher QA candidate, the strongest approach is to show readiness, learning discipline, and role-matched project work."
              />

              <div className="grid gap-4">
                {experience.map((item) => (
                  <article key={item.role} className="timeline-card">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--heading)]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {item.organization}
                        </p>
                      </div>
                      <span className="chip">{item.period}</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text)]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <section id="education" className="section-shell">
                <SectionHeading
                  eyebrow="Education"
                  title="Academic background aligned to testing roles."
                  description="Education is presented with a practical QA-oriented summary instead of broad developer positioning."
                />
                <div className="grid gap-4">
                  {education.map((item) => (
                    <article key={item.degree} className="glass-panel p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-white/15 bg-[var(--brand)]/12 p-3 text-[var(--brand)]">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[var(--heading)]">
                            {item.degree}
                          </h3>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {item.school} • {item.period}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                            {item.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {hasCertifications ? (
                <section id="certifications" className="section-shell">
                  <SectionHeading
                    eyebrow="Certifications"
                    title="Verified learning that strengthens the profile."
                    description="Certification links are presented as proof points recruiters can validate quickly."
                  />
                  <div className="grid gap-4">
                    {certifications.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-panel block p-6 transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                              {item.issuer}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-[var(--heading)]">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                              {item.note}
                            </p>
                          </div>
                          <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        </Reveal>

        {hasGitHub || hasLinkedIn ? (
          <Reveal>
            <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
              {hasGitHub ? (
                <section id="github" className="section-shell">
                  <SectionHeading
                    eyebrow="GitHub Stats"
                    title="Visible coding activity makes the profile feel more alive."
                    description="These cards add quick credibility and give recruiters one more reason to click into your repositories."
                  />
                  <div className="grid gap-4">
                    <div className="glass-panel overflow-hidden p-4">
                      <img
                        src={`https://github-readme-stats.vercel.app/api?username=${getGitHubUsername(profile.github)}&show_icons=true&hide_border=true&bg_color=00000000&title_color=38bdf8&icon_color=22c55e&text_color=94a3b8`}
                        alt={`GitHub statistics for ${profile.name}`}
                        className="w-full rounded-3xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="glass-panel overflow-hidden p-4">
                      <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${getGitHubUsername(profile.github)}&layout=compact&hide_border=true&bg_color=00000000&title_color=38bdf8&text_color=94a3b8`}
                        alt={`Top GitHub languages used by ${profile.name}`}
                        className="w-full rounded-3xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
              ) : null}

              {hasLinkedIn ? (
                <section id="linkedin" className="section-shell">
                  <SectionHeading
                    eyebrow="LinkedIn Integration"
                    title="A dedicated networking section helps recruiters continue the conversation."
                    description="Instead of a single icon in the hero area, the redesigned layout gives LinkedIn its own conversion-focused space."
                  />
                  <article className="glass-panel p-7">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                          Connect on LinkedIn
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-[var(--heading)]">
                          {profile.linkedinHandle}
                        </h3>
                      </div>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        <BriefcaseBusiness className="h-4 w-4" />
                        Visit Profile
                      </a>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {linkedinHighlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-7 text-[var(--text)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </section>
              ) : null}
            </section>
          </Reveal>
        ) : null}

        <Reveal>
          <section id="contact" className="section-shell">
            <SectionHeading
              eyebrow="Contact"
              title="Simple, fast contact flow for recruiters and hiring teams."
              description="The form uses a mailto fallback so there is no broken backend. It still looks polished, works quickly, and keeps the barrier to outreach low."
            />

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <aside className="glass-panel p-7">
                <h3 className="text-2xl font-semibold text-[var(--heading)]">
                  Let&apos;s improve software quality
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--text)]">
                  I am actively seeking internships and entry-level
                  opportunities in manual testing, QA, software testing, and
                  quality-focused support roles.
                </p>

                <div className="mt-6 space-y-4">
                  <a href={`mailto:${profile.email}`} className="contact-row">
                    <Mail className="h-5 w-5 text-[var(--brand)]" />
                    <span>{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`} className="contact-row">
                    <Phone className="h-5 w-5 text-[var(--brand)]" />
                    <span>{profile.phone}</span>
                  </a>
                  <div className="contact-row">
                    <MapPin className="h-5 w-5 text-[var(--brand)]" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={downloadResume} className="btn-secondary">
                    <Download className="h-4 w-4" />
                    Resume Download
                  </button>
                  {hasGitHub ? (
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      <FolderGit2 className="h-4 w-4" />
                      GitHub Profile
                    </a>
                  ) : null}
                </div>
              </aside>

              <form onSubmit={handleSubmit} className="glass-panel p-7">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="input-shell">
                    <span>Name</span>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="input-shell">
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </label>
                </div>

                <label className="input-shell mt-5">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, internship, or opportunity."
                    required
                  />
                </label>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button type="submit" className="btn-primary">
                    <Mail className="h-4 w-4" />
                    Send Message
                  </button>
                  {hasLinkedIn ? (
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                      <BriefcaseBusiness className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  ) : null}
                </div>

                {statusMessage ? (
                  <p className="mt-4 text-sm text-[var(--muted)]">{statusMessage}</p>
                ) : null}
              </form>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-[var(--heading)]">
              {profile.name}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Portfolio redesigned for stronger recruiter appeal, clearer
              storytelling, better responsiveness, and a more premium visual
              system.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {hasGitHub ? (
              <a href={profile.github} target="_blank" rel="noreferrer" className="chip">
                <FolderGit2 className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {hasLinkedIn ? (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="chip">
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className="chip">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
