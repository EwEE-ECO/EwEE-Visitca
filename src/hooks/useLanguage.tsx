import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Lang } from "../data/translations"

interface LanguageContextType {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")
  const toggle = useCallback(() => {
    setLang((l) => (l === "ru" ? "en" : "ru"))
  }, [])
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider")
  return ctx
}

export function t(lang: Lang, en: string, ru: string): string {
  return lang === "en" ? en : ru
}
