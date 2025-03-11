import Link from 'next/link'
import { getAllPostsData } from '@/lib/get-notes'

export async function Notes() {
  "use server"
  const allBlogs = await getAllPostsData()
  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            a.metadata.publishedAt &&
            b.metadata.publishedAt &&
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/notes/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.metadata.publishedAt ? new Date(post.metadata.publishedAt).toLocaleDateString() : ''}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}