import Link from 'next/link'

export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Ian Olmstead</h1>
      <Link href="/">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}