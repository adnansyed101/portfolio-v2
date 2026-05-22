import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects — Md Adnan' },
      {
        name: 'description',
        content:
          'Selected projects by Md Adnan including Prostore, Earnify, and Revive & Rewire.',
      },
      { property: 'og:title', content: 'Projects — Md Adnan' },
    ],
  }),
  component: ProjectsPage,
})

const projects = [
  {
    name: 'Prostore',
    featured: true,
    status: 'In Development',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'NextAuth'],
    features: [
      'Full authentication & admin area',
      'Review system & featured projects',
      'Sorting & search filters',
      'User profiles & image uploading',
      'Payments: PayPal, Stripe, COD',
    ],
  },
  {
    name: 'Earnify',
    stack: [
      'React.js',
      'Express.js',
      'Mongoose',
      'Firebase',
      'Tailwind CSS',
      'DaisyUI',
      'JWT',
      'TanStack Query',
      'RBAC',
    ],
    features: [
      'User dashboard for purchases & tasks',
      'Pagination on tasks',
      'Admin panel for buyer/seller monitoring',
    ],
  },
  {
    name: 'Revive & Rewire (R&R)',
    stack: [
      'React.js',
      'Express.js',
      'Mongoose',
      'Firebase',
      'Tailwind CSS',
      'DaisyUI',
      'JWT',
    ],
    features: [
      'Movie search on main page',
      "Personalized 'My Movies' section",
      'Featured section for highest-rated movies',
    ],
  },
]

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-brand">Projects</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          A few things I've been building.
        </h1>
        <p className="mt-4 text-muted-foreground">
          From a feature-rich commerce platform to task and movie management
          apps.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:border-brand/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-xl font-semibold">{p.name}</h2>
              {p.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                  <Star className="h-3 w-3" /> Featured
                </span>
              )}
            </div>
            {p.status && (
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {p.status}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="rounded-full text-[11px]"
                >
                  {s}
                </Badge>
              ))}
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-2 pt-2">
              <Button size="sm" className="flex-1" asChild>
                <a href="#" aria-label={`${p.name} live link`}>
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                </a>
              </Button>
              <Button size="sm" variant="outline" className="flex-1" asChild>
                <a href="#" aria-label={`${p.name} GitHub`}>
                  <Github className="mr-1.5 h-3.5 w-3.5" /> Repo
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
