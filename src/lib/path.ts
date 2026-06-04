const BASE = import.meta.env.BASE_URL

export function asset(p: string) {
  return BASE + p.replace(/^\//, "")
}
