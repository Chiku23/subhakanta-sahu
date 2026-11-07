import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/portfolioData'

const links = [
  ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Enterprise Work', '#enterprise'], ['Personal Projects', '#personal-projects'], ['Contact', '#contact'],
]

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex h-[68px] max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-mono text-[11px] font-medium tracking-wide text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-100 sm:text-xs"><span className="text-emerald-700 dark:text-emerald-400">SS</span><span className="text-neutral-400"> // </span>SUBHAKANTA SAHU</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-400 dark:hover:text-neutral-100">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onToggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <a href="#contact" className="hidden rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 sm:inline-flex">Resume / Contact <span className="sr-only"> for {profile.name}</span></a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-neutral-800 dark:text-neutral-200 lg:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-neutral-200 bg-neutral-50 px-5 py-3 dark:border-neutral-800 dark:bg-neutral-950 lg:hidden"><div className="mx-auto grid max-w-8xl grid-cols-2 gap-1">{links.map(([label, href]) => <a key={href} href={href} onClick={close} className="rounded-md px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-300 dark:hover:bg-neutral-900">{label}</a>)}</div><a href="#contact" onClick={close} className="mt-2 block rounded-lg bg-neutral-900 px-3 py-2.5 text-center text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">Resume / Contact</a></nav>}
    </header>
  )
}
