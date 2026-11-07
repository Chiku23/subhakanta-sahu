import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

const tabs = ['All', ...skillGroups.map((group) => group.filter)]

export default function Skills() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? skillGroups : skillGroups.filter((group) => group.filter === active)
  return <section id="skills" className="scroll-mt-24 border-y border-neutral-200 bg-white px-5 py-16 dark:border-neutral-800 dark:bg-neutral-900/40 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto max-w-8xl"><SectionHeading index="01" title="Technical Skills" description="A practical toolkit spanning frontend interfaces, backend services, CMS platforms, and delivery." />
    <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter skills by category">{tabs.map((tab) => <button key={tab} role="tab" aria-selected={active === tab} onClick={() => setActive(tab)} className={`rounded-lg border px-3 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${active === tab ? 'border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' : 'border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600'}`}>{tab}</button>)}</div>
    <div className="grid gap-4 md:grid-cols-2">{visible.map((group) => <article key={group.name} className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 sm:p-6"><h3 className="font-mono text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{group.name}</h3><ul className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">{item}</li>)}</ul></article>)}</div>
  </div></section>
}
