export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-28 pb-24 sm:px-10 lg:px-16">
      <div className="h-10 w-40 animate-pulse rounded-lg bg-white/5" />
      <div className="mt-3 h-5 w-72 animate-pulse rounded-lg bg-white/5" />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-6"
          >
            <div className="h-6 w-36 animate-pulse rounded bg-white/5" />
            <div className="mt-4 h-4 w-full animate-pulse rounded bg-white/5" />
            <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-white/5" />
            <div className="mt-4 h-3 w-20 animate-pulse rounded bg-white/5" />
          </div>
        ))}
      </div>
    </main>
  );
}
