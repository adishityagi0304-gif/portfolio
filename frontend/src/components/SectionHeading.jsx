export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--heading)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--text)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
