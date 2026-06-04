import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import type { PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { projects } from "../data/projects"
import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"
import { asset } from "../lib/path"

const controlVars = {
  light: {
    "--color-bg-base": "#f5f5f5",
    "--color-bg-elevated": "#eee",
    "--color-bg-card": "#ffffff",
    "--color-bg-card-hover": "#f0f0f0",
    "--color-border": "#ddd",
    "--color-border-hover": "#bbb",
    "--color-text": "#1a1a1a",
    "--color-text-secondary": "#555",
    "--color-text-muted": "#999",
    "--color-accent": "#111",
  } as React.CSSProperties,
  dark: {
    "--color-bg-base": "#070708",
    "--color-bg-elevated": "#0c0c0e",
    "--color-bg-card": "#121214",
    "--color-bg-card-hover": "#1a1a1d",
    "--color-border": "#222",
    "--color-border-hover": "#333",
    "--color-text": "#f0f0f0",
    "--color-text-secondary": "#909090",
    "--color-text-muted": "#505050",
    "--color-accent": "#ffffff",
  } as React.CSSProperties,
}

export function ProjectsCarousel() {
  const { lang } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentTheme = projects[activeIndex].theme
  const themeVars = controlVars[currentTheme]
  const bgColor = currentTheme === "light" ? "#f5f5f5" : "#070708"

  const CARD_WIDTH_RATIO = typeof window !== "undefined" && window.innerWidth < 768 ? 0.8 : 0.55
  const CARD_GAP = 24

  const cardWidth = containerWidth * CARD_WIDTH_RATIO
  const trackWidth = projects.length * (cardWidth + CARD_GAP) - CARD_GAP
  const offset = -(activeIndex * (cardWidth + CARD_GAP)) + (containerWidth - cardWidth) / 2

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const goTo = useCallback((index: number) => {
    const len = projects.length
    setActiveIndex((((index % len) + len) % len))
  }, [])

  useEffect(() => {
    if (isHovered || projects.length <= 1) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % projects.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = cardWidth * 0.2
    if (info.offset.x < -threshold) goTo(activeIndex + 1)
    else if (info.offset.x > threshold) goTo(activeIndex - 1)
  }

  const cardAnim = (index: number) => {
    const dist = Math.abs(index - activeIndex)
    return {
      scale: dist === 0 ? 1 : Math.max(0.75, 1 - dist * 0.1),
      opacity: dist === 0 ? 1 : Math.max(0.2, 1 - dist * 0.35),
    }
  }

  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32 transition-colors duration-700"
      style={{ backgroundColor: bgColor, ...themeVars }}
    >
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium mb-3" style={{ color: "var(--color-text-muted)" }}>
          <span className="px-3 py-1.5 border rounded-full" style={{ borderColor: "var(--color-border)" }}>
            {t(lang, "Portfolio", "Портфолио")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 max-w-2xl tracking-[-0.03em]" style={{ color: "var(--color-accent)" }}>
          {t(lang, "What I've built", "Что я сделал")}
        </h2>
        <p className="text-sm mb-16 max-w-lg" style={{ color: "var(--color-text-secondary)" }}>
          {t(lang, "Websites and projects I've worked on.", "Сайты и проекты, которые я сделал.")}
        </p>
      </ScrollReveal>

      <div
        ref={containerRef}
        className="relative select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: CARD_GAP }}
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: -(trackWidth - containerWidth), right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
          >
          {projects.map((project, index) => {
            const anim = cardAnim(index)
            const isActive = index === activeIndex
            return (
              <motion.div
                key={project.title}
                className="shrink-0 rounded-xl overflow-hidden cursor-pointer"
                style={{
                  width: cardWidth,
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg-card)",
                }}
                animate={anim}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => goTo(index)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      filter: isActive ? "grayscale(0)" : "grayscale(1)",
                    }}
                  />
                </div>
                <div
                  className="p-5"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <blockquote
                    className="text-sm md:text-base font-display font-bold mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    &ldquo;{lang === "en" ? project.quoteEn : project.quote}&rdquo;
                  </blockquote>
                  <p
                    className="text-xs leading-relaxed mb-3 line-clamp-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {lang === "en" ? project.descriptionEn : project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md font-mono"
                        style={{
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border)",
                          backgroundColor: "rgba(255,255,255,0.04)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-3" style={{ borderTop: "1px solid var(--color-border)" }}>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs transition-colors"
                        style={{ color: "var(--color-text-secondary)" }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
                      >
                        <ExternalLink size={12} />
                        {t(lang, "Live", "Сайт")}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs transition-colors"
                        style={{ color: "var(--color-text-secondary)" }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        {t(lang, "Code", "Код")}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        </div>

        <button
          onClick={() => goTo(activeIndex - 1)}
          className="absolute left-0 top-[calc(50%-60px)] -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all -ml-5 z-20 backdrop-blur-sm"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-card)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.borderColor = "var(--color-border-hover)" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)" }}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo(activeIndex + 1)}
          className="absolute right-0 top-[calc(50%-60px)] -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all -mr-5 z-20 backdrop-blur-sm"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-card)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.borderColor = "var(--color-border-hover)" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)" }}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex justify-center gap-2.5 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? 24 : 8,
                height: 8,
                backgroundColor: index === activeIndex ? "var(--color-accent)" : "var(--color-border)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
