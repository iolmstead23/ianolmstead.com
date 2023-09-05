import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

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
      <main className="flex flex-col text-primary dark:text-primaryDark">
        <h1 className="text-3xl font-bold">
          Blogs
        </h1>

        <section className="py-10">
          <h1 className="text-2xl font-bold">
            Latest Blogs
          </h1>
          <div className="py-2">
            {blogs.map(blog => (
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                <div className="py-2 flex justify-between align-middle gap-2">
                  <h3 className="text-lg font-bold">
                    {blog.meta.title}
                  </h3>
                  <div>
                    <p>
                      {blog.meta.description}
                    </p>
                  </div>
                  <div className="my-auto">
                    <p>
                      {blog.meta.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }