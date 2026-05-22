import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Md Adnan — Full Stack Web Developer' },
      {
        name: 'description',
        content:
          'Md Adnan builds robust full-stack web applications with React, Next.js, TypeScript, and modern tooling.',
      },
      { property: 'og:title', content: 'Md Adnan — Full Stack Web Developer' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-10%] h-105 w-205 -translate-x-1/2 rounded-full bg-linear-to-r from-brand/30 to-brand-glow/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-brand" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Md Adnan —
            <br />
            <span className="text-gradient">Full Stack Web Developer</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            I design and build robust, production-grade full-stack web
            applications using modern technologies like React, Next.js,
            TypeScript, and PostgreSQL.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground hover:bg-accent"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: 'Stack', v: 'Next.js + TS' },
            { k: 'Focus', v: 'Full Stack' },
            { k: 'Languages', v: 'JS / TS' },
            { k: 'Based in', v: 'Dhaka, BD' },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-xl border border-border bg-card p-4 text-center shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-1 font-display text-sm font-semibold">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
