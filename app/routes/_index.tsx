import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@remix-run/react'
import { ThemeToggle } from '~/components/theme-toggle'
import { Button } from '~/components/ui/button'

export default function Index() {
  return (
    <div className="relative size-full bg-white bg-grid-medium-black/[0.2] dark:bg-black dark:bg-grid-medium-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex h-dvh flex-col items-center justify-center gap-5">
        <h1 className="font-serif text-3xl font-bold">Welcome to Remix</h1>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="dashboard">Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <a target="_blank" href="https://github.com/front-loop/remix-netlify-tmpl" rel="noreferrer">
              <GitHubLogoIcon className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
