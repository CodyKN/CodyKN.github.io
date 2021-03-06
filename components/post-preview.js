import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <b><a className="hover:underline">{title}</a></b>
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
