export interface Project {
  title: string
  description: string
  descriptionEn: string
  tags: string[]
  url?: string
  github?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "EwEE-Visitca",
    description:
      "Сайт-визитка с анимированным терминалом, видео-фоном, магнитными кнопками и счётчиком звёзд. Чёрно-белый промышленный стиль DS-Motier.",
    descriptionEn:
      "Business card site with animated terminal, video background, magnetic buttons, and star counter. Black & white industrial DS-Motier style.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/EwEE-ECO/EwEE-Visitca",
  },
  {
    title: "Барбершоп «Классика»",
    description:
      "Лендинг для барбершопа с каталогом услуг, прайсом и формой записи. Адаптивный дизайн, оптимизация под SEO.",
    descriptionEn:
      "Landing page for a barbershop with service catalog, price list, and booking form. Responsive design, SEO optimized.",
    tags: ["HTML", "CSS", "JavaScript", "Adaptive"],
  },
  {
    title: "Проект 3",
    description:
      "Описание третьего проекта. Добавь изображение, ссылку и описание.",
    descriptionEn:
      "Third project description. Add an image, link, and description.",
    tags: ["React", "API"],
  },
]
