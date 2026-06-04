import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"
import { asset } from "../lib/path"

interface Skill {
  label: string
  icon: string
}

const skills: Skill[] = [
  { label: "Python", icon: "python" },
  { label: "TypeScript", icon: "typescript" },
  { label: "React", icon: "react" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "Vite", icon: "vite" },
  { label: "HTML/CSS", icon: "html5" },
  { label: "Discord API", icon: "discord" },
  { label: "Git", icon: "git" },
]

export function Skills() {
  const { lang } = useLanguage()

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Stack", "Стек")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "Technologies", "Технологии")}
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mb-16">
          {t(lang, "Tools and languages I work with daily.", "Инструменты и языки, с которыми работаю.")}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="group rounded-xl border border-border bg-bg-card p-5 md:p-6 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img
                  src={asset(`icons/${skill.icon}.svg`)}
                  alt={skill.label}
                  className="w-8 h-8 md:w-9 md:h-9 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-text-secondary group-hover:text-accent transition-colors duration-300">
                {skill.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
