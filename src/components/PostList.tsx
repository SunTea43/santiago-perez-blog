import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/lib/mdx'

function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return 'No date'
  }
  
  try {
    // Ensure the date string is in a valid format
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day) // month is 0-indexed in JS Date
    return format(date, 'MMMM d, yyyy')
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString // Return the original string if formatting fails
  }
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="space-y-2">
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
          </Link>
          <div className="text-gray-500">
            {formatDate(post.date)}
          </div>
          <p className="text-gray-600">{post.description}</p>
        </article>
      ))}
    </div>
  )
} 