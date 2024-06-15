export default function BlogPost({ params }: { params: { slug: string }}) {
  const { slug } = params;
  
  return (
    <section>
      <h1>{slug}</h1>
    </section>
  )
}