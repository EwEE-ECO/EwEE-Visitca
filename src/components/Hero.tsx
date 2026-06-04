import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage, t } from "../hooks/useLanguage"
import { useGithubStars } from "../hooks/useGithubStars"
import { useCountUp } from "../hooks/useCountUp"
import { Typewriter } from "./Typewriter"
import { Magnetic } from "./Magnetic"
import { asset } from "../lib/path"

const terminalLines = [
  { text: "[00:00:00] Fullstack developer", className: "text-text-secondary" },
  { text: "[00:00:01] Stack: Python, TypeScript, React", className: "text-text-secondary" },
  { text: "[00:00:02] Open-source: DS-Motier", className: "text-text-secondary" },
  { text: "$ ready", className: "text-accent" },
]

export function Hero() {
  const { lang } = useLanguage()
  const totalStars = useGithubStars("EwEE-ECO")
  const { count: starsCount, ref: starsRef } = useCountUp(totalStars ?? 0)

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black" style={{ zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={asset("bg.jpeg")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) brightness(0.25) contrast(1.4)",
          }}
        >
          <source src={asset("bg.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-text-muted px-3 py-1.5 border border-border rounded-full mb-6">
            {t(lang, "Fullstack Developer", "Фулстек-разработчик")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-[clamp(3rem,12vw,8rem)] font-display font-bold leading-[0.9] tracking-[-0.04em] text-accent"
        >
          EwEE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-6 text-base md:text-lg text-text-secondary font-sans max-w-lg leading-relaxed border border-border rounded-lg bg-black/60 backdrop-blur-sm px-4 py-3"
        >
          {t(
            lang,
            "I build digital products — websites, Discord bots,\nand automation tools.",
            "Создаю цифровые продукты — сайты, Discord ботов и инструменты для автоматизации."
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-3 text-sm text-text-muted font-sans border border-border rounded-lg bg-black/60 backdrop-blur-sm px-4 py-3 max-w-lg"
        >
          {t(lang, "Creator of", "Создатель")}{" "}
          <a
            href="https://github.com/EwEE-ECO/DS-Motier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            DS-Motier
          </a>
          {" · "}{t(lang, "Open-source", "Open-source")} · Python & TypeScript
          <span ref={starsRef}>
            {totalStars !== null ? ` · ☆ ${starsCount}` : null}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic
            as="button"
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-accent text-bg-base text-sm font-semibold hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
          >
            <span>{t(lang, "View projects", "Посмотреть проекты")}</span>
            <ArrowDown size={16} />
          </Magnetic>
          <Magnetic
            as="a"
            href="https://github.com/EwEE-ECO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-bg-card text-text-secondary text-sm font-medium hover:bg-bg-card-hover hover:border-border-hover hover:text-accent transition-all duration-200"
          >
            GitHub
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-lg"
        >
          <div className="border border-border rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-border">
              <span className="w-2 h-2 rounded-full bg-[#555]" />
              <span className="w-2 h-2 rounded-full bg-[#444]" />
              <span className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="ml-auto text-[0.6rem] text-text-muted font-mono">EwEE — about</span>
            </div>
            <div className="px-4 py-3.5 font-mono text-xs leading-relaxed text-text-secondary whitespace-pre">
              <Typewriter lines={terminalLines} />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
