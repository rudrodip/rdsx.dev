export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-3xl mx-auto">
      {children}
    </section>
  )
}