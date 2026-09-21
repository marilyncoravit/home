import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="text-muted">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Button to="/">Back home</Button>
    </section>
  )
}
