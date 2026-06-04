export interface Project {
  title: string
  description: string
  descriptionEn: string
  tags: string[]
  github: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "DS-Motier",
    description:
      "Open-source Discord бот на Python для сборки серверов из DSL-шаблонов. Гибкая система конфигурации, модульная архитектура, автоматическая установка ролей, каналов и прав через декларативные спецификации.",
    descriptionEn:
      "Open-source Discord bot in Python for building servers from DSL templates. Flexible configuration, modular architecture, automatic role/channel/permission setup via declarative specs.",
    tags: ["Python", "Discord API", "DSL", "SQLite", "YAML"],
    github: "https://github.com/EwEE-ECO/DS-Motier",
    featured: true,
  },
  {
    title: "AutoFishBot",
    description:
      "Инструмент автоматизации для MajesticRP. Fullstack Master — от обработки изображений до бэкенд-логики. Оптимизация пайплайнов и интеграция с игровым API.",
    descriptionEn:
      "Automation tool for MajesticRP. Fullstack Master — from image processing to backend logic. Pipeline optimization and game API integration.",
    tags: ["Python", "OpenCV", "Automation", "API"],
    github: "https://github.com/EwEE-ECO",
  },
  {
    title: "KITT_2",
    description:
      "Многофункциональный инструмент для автоматизации рутинных задач. Гибкая система плагинов, CLI-интерфейс, кроссплатформенность.",
    descriptionEn:
      "Multi-purpose tool for automating routine tasks. Flexible plugin system, CLI interface, cross-platform.",
    tags: ["Python", "CLI", "Automation", "Plugins"],
    github: "https://github.com/EwEE-ECO",
  },
]
