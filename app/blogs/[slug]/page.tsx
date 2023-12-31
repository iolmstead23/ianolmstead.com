import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

const blogDir: string = "blogs"

export async function generateStaticParams() {

  const files = fs.readdirSync(path.join(blogDir))

  const paths = files.map(filename => ({
    slug: filename.replace('.mdx','')
  }))

  return paths
}

function getPost({slug}: {slug: string}) {
  const markdownFile = fs.readFileSync(path.join(blogDir, slug + '.mdx'), 'utf-8')

  const{data: fontMatter, content} = matter(markdownFile)

  return {
    fontMatter,
    slug,
    content
  }
}

export default function Page({params}: any) {
  const props = getPost(params)

  return (
      <article className="my-10 prose prose-xl dark:prose-invert max-w-full">

        <div className="flex justify-center p-10">
          <Image src={props.fontMatter.thumbnail} alt="Blog Thumbnail" height={500} width={500}/>
        </div>

        <div className="text-center text-5xl font-bold">
          {props.fontMatter.title}
        </div>

        <div className="text-justified px-10 my-10">
          <MDXRemote source={props.content}></MDXRemote>
        </div>
      </article>
  )
}