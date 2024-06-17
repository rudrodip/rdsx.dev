type ProjectLayoutProps = {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <section className="w-full">
      {children}
    </section>
  )
}