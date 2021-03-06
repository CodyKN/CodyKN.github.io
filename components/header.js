import Link from 'next/link'
import { BLOG_NAME } from '../lib/constants'

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">{BLOG_NAME}</a>
        </Link>
        .
      </h2>
      <div>
        <span className="mr-5">
          <Link href="/">
            <a className="hover:underline">home</a>
          </Link>
        </span>
        <span className="mr-5">
          <Link href="/about">
            <a className="hover:underline">about</a>
          </Link>
        </span>
        <span className="mr-5">
          <Link href="/contact">
            <a className="hover:underline">contact</a>
          </Link>
        </span>
      </div>
    </section>
  )
}
