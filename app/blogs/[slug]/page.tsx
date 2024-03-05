import { Metadata } from "next"
import { getSingleProject } from "@/sanity/sanity.utils"
import type { Blog } from "./../../../types/blog"
import { PortableText } from "@portabletext/react"
import { client } from "@/sanity/sanity.utils"
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image"

type Props = {
  params: {
    slug: string;
  }
}

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

// `components` object you'll pass to PortableText
const components: any = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-2xl indent-0 m-5">{children}</h1>,
    h2: ({children}) => <h2 className="text-xl indent-0 m-5">{children}</h2>,
    h3: ({children}) => <h3 className="text-lg indent-0 m-5">{children}</h3>,
    h4: ({children}) => <h4 className="text-md indent-0 m-5">{children}</h4>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl indent-0">{children}</ul>,
    number: ({children}) => <ol className="mt-lg indent-0">{children}</ol>,
  },
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const blog: Blog = await getSingleProject(slug)

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: blog.mainImage ? urlFor(blog.mainImage).url() : "/dummy_image.png",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default async function Blog({ params }: Props) {

  const slug = params.slug
  const blog: Blog = await getSingleProject(slug)

  return (
    <article>
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              <div className="mx-auto my-10">
                <Image
                  src={blog.mainImage ? urlFor(blog.mainImage).url() : "/logo.png"}
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="mx-auto">
                <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4 m-[2em] lg:m-5">
                    {blog.title}
                </h1>
                <h3 className="font-bold lg:text-3xl text-xl lg:leading-tight mb-4 m-[2em] lg:m-5">
                  created on {blog._createdAt.toString()} by {blog.author.name}
                </h3>
              </div>
              <div className="m-[3em] lg:m-0 indent-8 blog-paragraph">
                  <PortableText value={blog.body} components={components}/>
              </div>
            </div>
        </div>
    </article>
  );
}