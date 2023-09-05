import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'

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
    <div className="text-primary dark:test-primaryDark">
      <div>
        {props.fontMatter.title}
      </div>
      <div>
        <MDXRemote source={props.content}></MDXRemote>
      </div>
    </div>
  )
}