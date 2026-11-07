import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import EnterpriseProjects from './components/EnterpriseProjects'
import PersonalProjects from './components/PersonalProjects'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return <div id="top" className="min-h-screen bg-neutral-50 text-neutral-900 antialiased transition-colors dark:bg-neutral-950 dark:text-neutral-100"><div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 bg-emerald-600 transition-[width] duration-100 dark:bg-emerald-500" style={{ width: `${scrollProgress}%` }} /><Navbar dark={dark} onToggleTheme={() => setDark((current) => !current)} /><main><Hero /><Skills /><Experience /><EnterpriseProjects /><PersonalProjects /></main><Footer /></div>
}
