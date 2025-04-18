import { getAllPosts } from '@/lib/mdx'
import PostList from '@/components/PostList'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Santiago Pérez</h1>
        <p className="text-xl text-gray-600">
          Welcome to my personal blog where I share my thoughts and experiences.
        </p>
      </div>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <PostList posts={posts} />
      </section>
    </main>
  )
}
