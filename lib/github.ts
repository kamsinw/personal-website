export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/kamsinw/repos?sort=updated&per_page=30",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();
  return repos.sort(
    (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}
