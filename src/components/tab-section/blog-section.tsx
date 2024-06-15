import { blogs } from '#site/content'

export default function BlogSection() {
  return (
    <div>
      <h1>hello</h1>
      {blogs.map(blog => (
        <div key={blog.slugAsParams}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
      </div>
      ))}
    </div>
  )
}