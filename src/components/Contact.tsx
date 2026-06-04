import { GitFork, Heart } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"
import { asset } from "../lib/path"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/EwEE-ECO",
    icon: GitFork,
    descKey: "github" as const,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/895056583933964299",
    icon: "discord",
    descKey: "discord" as const,
  },
  {
    label: "YooMoney",
    href: "https://yoomoney.ru/to/4100119169295985",
    icon: Heart,
    descKey: "yoomoney" as const,
  },
]

const linkDescs = {
  github: { en: "Code & open-source", ru: "Код и open-source проекты" },
  discord: { en: "895056583933964299", ru: "895056583933964299" },
  yoomoney: { en: "Support projects", ru: "Поддержать проекты" },
}

export function Contact() {
  const { lang } = useLanguage()

  return (
    <footer className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Contact", "Контакты")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "Let's connect", "Давай на связи")}
        </h2>
        <p className="text-sm text-text-secondary max-w-md mb-12">
          {t(
            lang,
            "Open for collaborations, freelance, or just a chat about tech.",
            "Открыт для коллабораций, фриланса или просто поболтать о технологиях."
          )}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
        {links.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 0.08}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-bg-card px-5 py-4 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover"
            >
              {link.icon === "discord" ? (
                <img
                  src={asset("icons/discord.svg")}
                  alt="Discord"
                  className="w-[18px] h-[18px] opacity-40 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                />
              ) : (
                <link.icon
                  size={18}
                  className="text-text-muted group-hover:text-accent transition-colors duration-300 shrink-0"
                />
              )}
              <div className="min-w-0">
                <span className="block text-sm font-medium text-text-secondary group-hover:text-accent transition-colors duration-300">
                  {link.label}
                </span>
                <span className="block text-xs text-text-muted truncate mt-0.5">
                  {lang === "en" ? linkDescs[link.descKey].en : linkDescs[link.descKey].ru}
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <p className="mt-20 text-xs text-text-muted">
          © {new Date().getFullYear()} EwEE. {t(lang, "Built with React & Tailwind", "Сделано на React & Tailwind")}.
        </p>
      </ScrollReveal>
    </footer>
  )
}
