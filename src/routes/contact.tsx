import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — Md Adnan' },
      {
        name: 'description',
        content:
          'Get in touch with Md Adnan via email, phone, or the contact form.',
      },
      { property: 'og:title', content: 'Contact — Md Adnan' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      toast.success("Message sent — I'll get back to you soon.")
      ;(e.target as HTMLFormElement).reset()
    }, 700)
  }

  const details = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mdadnan44588@gmail.com',
      href: 'mailto:mdadnan44588@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801725290448',
      href: 'tel:+8801725290448',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mohammadpur, Dhaka, Bangladesh',
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-brand">Contact</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Let's build something great.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have a project in mind, a role to discuss, or just want to say hi?
          Send a message.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {details.map((d) => {
            const Inner = (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:border-brand/40">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-linear-to-br from-brand/15 to-brand-glow/15 text-brand">
                  <d.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {d.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{d.value}</div>
                </div>
              </div>
            )
            return d.href ? (
              <a key={d.label} href={d.href}>
                {Inner}
              </a>
            ) : (
              <div key={d.label}>{Inner}</div>
            )
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              required
              placeholder="What is this about?"
            />
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me a bit about your project or idea..."
            />
          </div>
          <Button
            type="submit"
            className="mt-6 w-full"
            size="lg"
            disabled={submitting}
          >
            <Send className="mr-1.5 h-4 w-4" />
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  )
}
