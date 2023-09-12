import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from '@/components/ui/portfolio card'

export default function Blog() {
  const blogDir = "blogs"

  const files = fs.readdirSync(path.join(blogDir))

  const blogs = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8")

    const {data: frontMatter} = matter(fileContent)

    return {
      meta: frontMatter,
      slug: filename.replace('.mdx','')
    }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold p-10">
        Blogs <br />
      </h1>

      <div className="md:flex md:flex-row md:flex-wrap justify-center">
        {blogs.map(blog => (
          <Card title={blog.meta.title} text={blog.meta.description.slice(0,200) + "..."} image={blog.meta.thumbnail} url={'/blogs/' + blog.slug} key={blog.slug}/>
        ))}
      </div>
    </div>
  )
}