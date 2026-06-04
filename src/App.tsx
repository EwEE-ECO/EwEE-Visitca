import { LanguageProvider, useLanguage } from "./hooks/useLanguage"
import type { Lang } from "./data/translations"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Reviews } from "./components/Reviews"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { ScrollToTop } from "./components/ScrollToTop"

function LangToggle() {
  const { lang, toggle } = useLanguage()
  const other: Lang = lang === "ru" ? "en" : "ru"
  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-lg border border-border bg-bg-card text-text-muted hover:bg-bg-card-hover hover:text-accent hover:border-border-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      aria-label={`Switch to ${other}`}
    >
      {other}
    </button>
  )
}

function Content() {
  return (
    <div className="relative z-10">
      <LangToggle />
      <Hero />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  )
}

export default App
