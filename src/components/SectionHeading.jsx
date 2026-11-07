export default function SectionHeading({ index, title, description, id }) {
  return <div className="mb-8 sm:mb-10"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">{index} <span className="text-neutral-400">//</span> {title}</p><h2 id={id} className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-3xl">{title}</h2>{description && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">{description}</p>}</div>
}
