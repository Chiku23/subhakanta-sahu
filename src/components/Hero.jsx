import { useState } from 'react'
import { ArrowDownRight, Check, Copy, Download, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 2200) } catch { window.location.href = `mailto:${profile.email}` }
  }
  return <section id="about" className="scroll-mt-24 px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pt-24">
    <div className="mx-auto max-w-8xl">
      <div>
      <div className="max-w-4xl">
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">{profile.title} <span className="text-neutral-300 dark:text-neutral-700">/</span> {profile.stack}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-neutral-950 dark:text-neutral-50 sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.04]">{profile.name}<span className="text-emerald-700 dark:text-emerald-500">.</span></h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">Full-stack web developer building enterprise applications, custom CMS solutions, and modern React interfaces.</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400"><MapPin size={15} /><span>{profile.location}</span><span className="text-neutral-300 dark:text-neutral-700">·</span><span>{profile.currentLocation}</span></div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#enterprise" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300">View Enterprise Case Studies <ArrowDownRight size={16} /></a>
          <a href={`${import.meta.env.BASE_URL}Subhakanta_Sahu_Resume.pdf`} download="Subhakanta_Sahu_Resume.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-800 transition hover:border-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500"><Download size={15} />Download Resume</a>
          <button onClick={copyEmail} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-800 transition hover:border-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500" aria-label={`Copy ${profile.email}`}>{copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={15} />}{copied ? 'Copied!' : 'Copy Email'}</button>
          <div className="flex items-center gap-1 sm:ml-2"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-200 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-200 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"><Linkedin size={18} /></a><a href={profile.phoneLink} aria-label={`Call ${profile.phone}`} className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-200 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"><Phone size={17} /></a></div>
        </div>
      </div>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">Profile</p><p className="max-w-4xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{profile.summary}</p></div>
    </div>
  </section>
}
