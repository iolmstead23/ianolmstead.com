import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from '../components/card'

export default function Page() {
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
      <main>
        <h1 className="text-3xl font-bold text-primary dark:text-primaryDark">
          Blogs
        </h1>

        <h1 className="text-2xl font-bold text-primary dark:text-primaryDark ">
          Latest Blogs
        </h1>

        <div className="container w-full md:flex md:flex-row md:flex-wrap">
          {blogs.map(blog => (
            <Card title={blog.meta.title} text={blog.meta.description} image="/dummy_image.png" url={'/blogs/' + blog.slug} />
          ))}
        </div>
      </main>
    )
  }