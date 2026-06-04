export type Lang = "ru" | "en"

export const translations = {
  hero: {
    badge: {
      en: "Fullstack Developer",
      ru: "Фулстек-разработчик",
    },
    tagline: {
      en: "I build digital products \u2014 websites, Discord bots,\nand automation tools.",
      ru: "Создаю цифровые продукты \u2014 сайты, Discord ботов\nи инструменты для автоматизации.",
    },
    creator: {
      en: "Creator of",
      ru: "Создатель",
    },
    cta: {
      en: "View projects",
      ru: "Посмотреть проекты",
    },
    terminal: {
      line1: {
        en: "Fullstack developer",
        ru: "Фулстек-разработчик",
      },
      line2: {
        en: "Stack: Python, TypeScript, React",
        ru: "Стек: Python, TypeScript, React",
      },
      line3: {
        en: "Open-source: DS-Motier",
        ru: "Open-source: DS-Motier",
      },
      ready: {
        en: "ready",
        ru: "готов",
      },
    },
  },
  projects: {
    badge: {
      en: "Projects",
      ru: "Проекты",
    },
    title: {
      en: "Things I\u2019ve built",
      ru: "Что я создал",
    },
    desc: {
      en: "Open-source and commercial projects.",
      ru: "Open-source и коммерческие проекты.",
    },
    featured: {
      en: "Featured",
      ru: "Главный",
    },
    github: {
      en: "View on GitHub",
      ru: "На GitHub",
    },
  },
  skills: {
    badge: {
      en: "Stack",
      ru: "Стек",
    },
    title: {
      en: "Technologies",
      ru: "Технологии",
    },
    desc: {
      en: "Tools and languages I work with daily.",
      ru: "Инструменты и языки, с которыми работаю.",
    },
  },
  contact: {
    badge: {
      en: "Contact",
      ru: "Контакты",
    },
    title: {
      en: "Let\u2019s connect",
      ru: "Давай на связи",
    },
    desc: {
      en: "Open for collaborations, freelance, or just a chat about tech.",
      ru: "Открыт для коллабораций, фриланса или просто поболтать о технологиях.",
    },
    links: {
      github: {
        en: "Code & open-source",
        ru: "Код и open-source проекты",
      },
      discord: {
        en: "@ewee_eco",
        ru: "@ewee_eco",
      },
      yoomoney: {
        en: "Support projects",
        ru: "Поддержать проекты",
      },
    },
    footer: {
      en: "Built with React & Tailwind",
      ru: "Сделано на React & Tailwind",
    },
  },
} as const

export type TranslationKey = typeof translations
