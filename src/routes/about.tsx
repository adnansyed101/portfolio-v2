import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Wrench, Languages } from 'lucide-react'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About & Skills — Md Adnan' },
      {
        name: 'description',
        content:
          'About Md Adnan — technical skills across JavaScript, TypeScript, React, Next.js, databases, and modern dev tools.',
      },
      { property: 'og:title', content: 'About & Skills — Md Adnan' },
    ],
  }),
  component: AboutPage,
})

const groups = [
  {
    icon: Code,
    title: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    icon: Code,
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Express.js', 'TailwindCSS'],
  },
  {
    icon: Database,
    title: 'Database & ORMs',
    items: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma'],
  },
  {
    icon: Wrench,
    title: 'Tools & Tech',
    items: [
      'GitHub',
      'VSCode',
      'SSLCommerz',
      'Stripe',
      'Clerk',
      'NextAuth',
      'Firebase',
      'TanStack Query',
    ],
  },
]

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-brand">About</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Building things for the web, end to end.
        </h1>
        <p className="mt-4 text-muted-foreground">
          I'm Md Adnan, a Full Stack Web Developer passionate about crafting
          performant, accessible, and maintainable applications. I enjoy turning
          complex problems into clean, well-architected solutions — from
          database schema to pixel-perfect UI.
        </p>
      </header>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:border-brand/40"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-brand/15 to-brand-glow/15 text-brand">
                <g.icon className="h-4 w-4" />
              </div>
              <h2 className="font-display text-lg font-semibold">{g.title}</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-xs font-medium"
                >
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card)">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-brand/15 to-brand-glow/15 text-brand">
            <Languages className="h-4 w-4" />
          </div>
          <h2 className="font-display text-lg font-semibold">
            Spoken Languages
          </h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            Bengali — Native
          </Badge>
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            English — Professional
          </Badge>
        </div>
      </div>
    </div>
  )
}
