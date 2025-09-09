const GITHUB_API_URL = "https://api.github.com";

type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  default_branch: string;
  homepage: string | null;
  [key: string]: any;
};

export async function fetchAllRepositories(username: string) {
  let allRepos: GitHubRepository[] = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos?page=${page}&per_page=100`
    );
    const repos = await response.json();

    if (repos.length === 0) {
      hasNextPage = false;
    } else {
      allRepos = [...allRepos, ...repos];
      page++;
    }
  }

  return allRepos;
}

// Nova função para buscar repositórios com GIFs
export async function fetchRepositoriesWithGif(username: string) {
  try {
    // Primeiro, buscar todos os repositórios usando a função existente
    const allRepos = await fetchAllRepositories(username);

    // Filtrar repositórios que possuem GIF
    const reposWithGifs = await Promise.all(
      allRepos.map(async (repo: GitHubRepository) => {
        try {
          // Verificar se existe um arquivo GIF no repositório
          const gifSearchResponse = await fetch(
            `${GITHUB_API_URL}/search/code?q=extension:gif+repo:${repo.full_name}`
          );

          if (!gifSearchResponse.ok) {
            return null;
          }

          const gifData = await gifSearchResponse.json();

          if (gifData.items && gifData.items.length > 0) {
            // Encontrar o primeiro GIF (você pode ajustar essa lógica conforme necessário)
            const gifItem = gifData.items[0];

            // Construir URL raw para o GIF
            const gifUrl = `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/${gifItem.path}`;

            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              gif_url: gifUrl,
            };
          }

          return null;
        } catch (error) {
          console.error(`Error checking for GIF in ${repo.name}:`, error);
          return null;
        }
      })
    );

    // Filtrar apenas os repositórios que têm GIFs
    return reposWithGifs.filter((repo) => repo !== null);
  } catch (error) {
    console.error("Error fetching repositories with GIFs:", error);
    return [];
  }
}
