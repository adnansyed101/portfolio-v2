import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Briefcase, FileCheck } from 'lucide-react'

export const Route = createFileRoute('/experience')({
  head: () => ({
    meta: [
      { title: 'Experience — Md Adnan' },
      {
        name: 'description',
        content:
          'Professional experience timeline of Md Adnan — internships at Arbree Solutions and Akaay Foundation.',
      },
      { property: 'og:title', content: 'Experience — Md Adnan' },
    ],
  }),
  component: ExperiencePage,
})

const items = [
  {
    role: 'Junior Web Developer (Internship)',
    company: 'Arbree Solutions Limited',
    period: 'August 2025 — Present',
    projects: ['EducateU'],
    notes: [],
  },
  {
    role: 'Front End Developer (Internship)',
    company: 'Akaay Foundation',
    period: 'April 2025 — June 2025',
    projects: ['Gigfloww', 'GoldFish Ladder'],
    notes: ['Job Certificate available', 'Letter of Recommendation available'],
  },
]

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-brand">Experience</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          A short, meaningful journey so far.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Hands-on internship work shipping real-world features in production
          teams.
        </p>
      </header>

      <ol className="relative mt-14 border-l border-border pl-8">
        {items.map((it, idx) => (
          <li key={idx} className="group relative pb-12 last:pb-0">
            <span className="absolute -left-9.25 grid h-7 w-7 place-items-center rounded-full border border-border bg-background text-brand shadow-sm transition group-hover:border-brand">
              <Briefcase className="h-3.5 w-3.5" />
            </span>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:border-brand/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-lg font-semibold">
                  {it.role}
                </h2>
                <span className="text-xs font-mono text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-brand">{it.company}</p>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Highlighted Projects
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {it.projects.map((p) => (
                    <Badge key={p} variant="secondary" className="rounded-full">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>

              {it.notes.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {it.notes.map((n) => (
                    <div
                      key={n}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <FileCheck className="h-3.5 w-3.5 text-brand" />
                      {n}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
