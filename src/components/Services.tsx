import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"

interface Service {
  icon: string
  title: string
  titleEn: string
  desc: string
  descEn: string
  price: string
}

const services: Service[] = [
  {
    icon: "layout",
    title: "Лендинг",
    titleEn: "Landing Page",
    desc: "Одностраничный сайт под ключ. Анимации, адаптив, SEO.",
    descEn: "Single-page site. Animations, responsive, SEO.",
    price: "от 10 000 ₽",
  },
  {
    icon: "layers",
    title: "Многостраничный сайт",
    titleEn: "Multi-page Site",
    desc: "Корпоративные сайты, каталоги, портфолио. До 10 страниц.",
    descEn: "Corporate sites, catalogs, portfolios. Up to 10 pages.",
    price: "от 20 000 ₽",
  },
  {
    icon: "app",
    title: "Веб-приложение",
    titleEn: "Web App",
    desc: "Админки, дашборды, CRM. Сложная логика, авторизация, API.",
    descEn: "Dashboards, admin panels, CRM. Auth, API, complex logic.",
    price: "до 30 000 ₽",
  },
  {
    icon: "discord",
    title: "Discord бот",
    titleEn: "Discord Bot",
    desc: "Модерация, команды, интеграции с API, роли, логи.",
    descEn: "Moderation, commands, API integrations, roles, logs.",
    price: "от 5 000 ₽",
  },
  {
    icon: "telegram",
    title: "Telegram бот",
    titleEn: "Telegram Bot",
    desc: "Автоматизация, уведомления, парсинг, платежи через API.",
    descEn: "Automation, notifications, parsing, payments via API.",
    price: "от 5 000 ₽",
  },
  {
    icon: "search",
    title: "Парсинг / Скрапинг",
    titleEn: "Parsing / Scraping",
    desc: "Сбор данных с сайтов. Экспорт в Excel, CSV, базы данных.",
    descEn: "Data extraction from websites. Export to Excel, CSV, DB.",
    price: "от 10 000 ₽",
  },
  {
    icon: "code",
    title: "Интеграции",
    titleEn: "Integrations",
    desc: "Подключение API, платёжных систем, CI/CD, настройка деплоя.",
    descEn: "API integration, payment gateways, CI/CD, deploy setup.",
    price: "от 5 000 ₽",
  },
]

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "layout":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    case "layers":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case "app":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    case "discord":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M8.5 3c-1.5 0-3 .5-4.5 2-2 5-2 12-2 12s2 2 5 3l1-2" />
          <path d="M15.5 3c1.5 0 3 .5 4.5 2 2 5 2 12 2 12s-2 2-5 3l-1-2" />
          <path d="M10 18l1 2h2l1-2" />
        </svg>
      )
    case "telegram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 2 11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      )
    case "search":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      )
    case "code":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}

export function Services() {
  const { lang } = useLanguage()

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Services", "Услуги")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "What I can do", "Что я умею")}
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mb-16">
          {t(lang, "Development, automation, integration — any complexity.", "Разработка, автоматизация, интеграции — любой сложности.")}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 0.05}>
            <div className="group rounded-xl border border-border bg-bg-card p-5 md:p-6 flex flex-col h-full hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted group-hover:text-accent transition-colors duration-300">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-sm font-medium text-accent">
                  {lang === "en" ? service.titleEn : service.title}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">
                {lang === "en" ? service.descEn : service.desc}
              </p>
              <div className="pt-3 border-t border-border">
                <span className="text-xs font-mono text-text-muted">{service.price}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
