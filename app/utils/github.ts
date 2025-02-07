const GITHUB_API_URL = "https://api.github.com"

export async function fetchAllRepositories(username: string) {
  let allRepos = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?page=${page}&per_page=100`)
    const repos = await response.json()

    if (repos.length === 0) {
      hasNextPage = false
    } else {
      allRepos = [...allRepos, ...repos]
      page++
    }
  }

  return allRepos
}

