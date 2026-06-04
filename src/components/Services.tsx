import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"
import { IconLayout2, IconLayersDifference, IconWindow, IconBrandDiscord, IconBrandTelegram, IconSearch, IconCode } from "@tabler/icons-react"

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
    price: "от 17 000 ₽",
  },
  {
    icon: "app",
    title: "Веб-приложение",
    titleEn: "Web App",
    desc: "Админки, дашборды, CRM. Сложная логика, авторизация, API.",
    descEn: "Dashboards, admin panels, CRM. Auth, API, complex logic.",
    price: "от 25 000 ₽",
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
    price: "от 10 000 ₽",
  },
]

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "layout": return <IconLayout2 size={20} />
    case "layers": return <IconLayersDifference size={20} />
    case "app": return <IconWindow size={20} />
    case "discord": return <IconBrandDiscord size={20} />
    case "telegram": return <IconBrandTelegram size={20} />
    case "search": return <IconSearch size={20} />
    case "code": return <IconCode size={20} />
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
