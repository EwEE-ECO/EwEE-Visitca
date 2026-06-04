import { ScrollReveal } from "./ScrollReveal"
import { useLanguage, t } from "../hooks/useLanguage"

interface Review {
  text: string
  textEn: string
  role: string
  roleEn: string
}

const reviews: Review[] = [
  {
    text: "Для тех кто ищет молодое дарование и крутого специалиста в разработке сайта, я вам гарантирую очень быструю работу, качество, индивидуальный подход к дизайну сайта, вообщем я очень доволен работой и всем буду рекомендовать данного кунг-фу мастера по сайтам. Процветания в личном деле.",
    textEn: "For those looking for a young talent and a cool specialist in website development, I guarantee very fast work, quality, individual approach to site design, overall I'm very satisfied and will recommend this kung-fu master of websites to everyone. Prosperity in your personal endeavor.",
    role: "Владелец барбершопа «Классика»",
    roleEn: "Owner of Barbershop «Klassika»",
  },
  {
    text: "Заказал Discord бота для своего игрового сервера. Сделано за 3 дня, всё работает как часы. Отдельное спасибо за документацию - даже я разобрался как настраивать. Буду обращаться ещё.",
    textEn: "Ordered a Discord bot for my gaming server. Done in 3 days, everything works like clockwork. Special thanks for the documentation - even I figured out how to configure it. Will come back for more.",
    role: "Владелец игрового сообщества",
    roleEn: "Gaming community owner",
  },
  {
    text: "Автоматизировали рутинные процессы в отделе - сэкономили часы работы каждую неделю. Инструмент гибкий, подстроили под наши нужды без проблем. Рекомендую как толкового автоматизатора.",
    textEn: "Automated routine processes in our department - saved hours of work every week. The tool is flexible, adapted to our needs without issues. Recommend as a savvy automation specialist.",
    role: "Руководитель IT-отдела",
    roleEn: "Head of IT department",
  },
]

export function Reviews() {
  const { lang } = useLanguage()

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-3">
          <span className="px-3 py-1.5 border border-border rounded-full">
            {t(lang, "Testimonials", "Отзывы")}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4 max-w-2xl tracking-[-0.03em]">
          {t(lang, "What people say", "Что говорят")}
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mb-16">
          {t(lang, "Feedback from clients and partners.", "Отзывы клиентов и партнёров.")}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {reviews.map((review, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group rounded-xl border border-border bg-bg-card p-6 md:p-7 flex flex-col h-full hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-muted"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                &ldquo;{lang === "en" ? review.textEn : review.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-text-muted">
                  {lang === "en" ? review.roleEn : review.role}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
