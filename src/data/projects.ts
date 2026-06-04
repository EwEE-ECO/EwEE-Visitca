export interface Project {
  title: string
  description: string
  descriptionEn: string
  tags: string[]
  url?: string
  github?: string
  image: string
  quote: string
  quoteEn: string
  theme: "light" | "dark"
}

export const projects: Project[] = [
  {
    title: "Барбершоп «Классика»",
    description:
      "Лендинг для барбершопа с каталогом услуг, прайсом и формой записи. Адаптивный дизайн, оптимизация под SEO.",
    descriptionEn:
      "Landing page for a barbershop with service catalog, price list, and booking form. Responsive design, SEO optimized.",
    tags: ["HTML", "CSS", "JavaScript", "Adaptive"],
    image: "screenshots/classica.jpg",
    quote: "Минимализм как Классика",
    quoteEn: "Minimalism like Klassika",
    theme: "light",
  },
  {
    title: "DS-Motier",
    description:
      "Open-source Discord бот на Python для сборки серверов из DSL-шаблонов. Гибкая система конфигурации, модульная архитектура.",
    descriptionEn:
      "Open-source Discord bot in Python for building servers from DSL templates. Flexible config, modular architecture.",
    tags: ["Python", "Discord API", "DSL", "SQLite", "YAML"],
    github: "https://github.com/EwEE-ECO/DS-Motier",
    image: "screenshots/ds-motier.jpg",
    quote: "Дерзко как DS-Motier",
    quoteEn: "Bold like DS-Motier",
    theme: "dark",
  },
  {
    title: "Stoming Clinic",
    description:
      "Сайт стоматологической клиники с каталогом услуг, врачами и онлайн-записью. Современный стек, акцент на скорость и UX.",
    descriptionEn:
      "Dental clinic website with service catalog, doctor profiles, and online booking. Modern stack, speed & UX focused.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    image: "screenshots/stoming.jpg",
    quote: "Технологично как Stoming",
    quoteEn: "Tech-forward like Stoming",
    theme: "light",
  },
]
