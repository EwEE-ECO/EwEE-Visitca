import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { projects } from "../data/projects"
import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"
import { asset } from "../lib/path"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Projects() {
  const { lang } = useLanguage()

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Portfolio", "Портфолио")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "What I've built", "Что я сделал")}
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mb-16">
          {t(lang, "Websites and projects I've worked on.", "Сайты и проекты, которые я сделал.")}
        </p>
      </ScrollReveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px 0px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="group relative rounded-xl border border-border bg-bg-card overflow-hidden hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden bg-white/[0.02] border-b border-border">
              {project.image ? (
                <img
                  src={asset(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-border flex items-center justify-center">
                      <ExternalLink size={18} className="text-text-muted" />
                    </div>
                    <p className="text-xs text-text-muted font-mono">{project.title}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-display font-bold text-accent mb-2 tracking-[-0.02em]">
                {project.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">
                {lang === "en" ? project.descriptionEn : project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-border text-text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-3 border-t border-border">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={12} />
                    <span>{t(lang, "Live", "Сайт")}</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>{t(lang, "Code", "Код")}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
