import { useState, useEffect } from 'react'

interface GitHubRepoData {
  stargazers_count: number
}

export function useGitHubStars(repoUrl: string) {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Extract owner/repo from GitHub URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/)
    if (!match) {
      setError(new Error('Invalid GitHub URL'))
      setLoading(false)
      return
    }

    const [, owner, repo] = match
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }
        return response.json()
      })
      .then((data: GitHubRepoData) => {
        setStars(data.stargazers_count)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [repoUrl])

  return { stars, loading, error }
}
