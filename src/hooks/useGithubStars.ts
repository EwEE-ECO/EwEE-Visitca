import { useState, useEffect } from "react"

let cached: number | null = null

export function useGithubStars(username: string) {
  const [stars, setStars] = useState<number | null>(cached)

  useEffect(() => {
    if (cached !== null) return
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data)) {
          const total = data.reduce((s: number, repo: any) => s + (repo.stargazers_count || 0), 0)
          cached = total
          setStars(total)
        }
      })
      .catch(() => {})
  }, [username])

  return stars
}
