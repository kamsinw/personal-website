import { fetchRepos } from "@/lib/github";

export default async function ProjectsPage() {
  const repos = await fetchRepos();

  return (
    <main className="mx-auto max-w-6xl px-5 pt-28 pb-24 sm:px-10 lg:px-16">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">GitHub</h1>
      <p className="mb-10 text-neutral-400">
        Public repositories, sorted by most recently updated.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-6 transition-all duration-200 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
            {repo.description && (
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {repo.description}
              </p>
            )}
            <div className="mt-auto flex gap-4 pt-4 text-xs text-neutral-500">
              {repo.language && <span>{repo.language}</span>}
              {repo.stargazers_count > 0 && (
                <span>&#9733; {repo.stargazers_count}</span>
              )}
            </div>
          </a>
        ))}

        {repos.length === 0 && (
          <p className="text-sm text-neutral-500">No repositories found.</p>
        )}
      </div>
    </main>
  );
}
