import { motion } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"
import { projects } from "../data/projects"
import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Projects() {
  const { lang } = useLanguage()
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Projects", "Проекты")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "Things I've built", "Что я создал")}
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mb-16">
          {t(lang, "Open-source and commercial projects.", "Open-source и коммерческие проекты.")}
        </p>
      </ScrollReveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px 0px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-3"
      >
        {featured && (
          <motion.div
            variants={item}
            className="lg:col-span-2 group relative rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300"
          >
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center">
                    <Code2 size={16} className="text-text-secondary" />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-text-muted px-2.5 py-1 rounded-full border border-border">
                    {t(lang, "Featured", "Главный")}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-accent mb-3 tracking-[-0.02em]">
                {featured.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6 max-w-xl">
                {lang === "en" ? featured.descriptionEn : featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-border text-text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors w-fit"
              >
                <ExternalLink size={14} />
                <span>{t(lang, "View on GitHub", "На GitHub")}</span>
              </a>
            </div>
          </motion.div>
        )}

        {rest.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="group relative rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300"
          >
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-5">
                <Code2 size={16} className="text-text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-accent mb-3 tracking-[-0.02em]">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                {lang === "en" ? project.descriptionEn : project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-border text-text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors w-fit"
              >
                <ExternalLink size={14} />
                <span>{t(lang, "View on GitHub", "На GitHub")}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
