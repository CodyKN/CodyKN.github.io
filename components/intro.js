import { BLOG_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_NAME}
      </h1>
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
