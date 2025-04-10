import { Note } from '@/components/note'
import { Redis } from '@upstash/redis';

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  "use server"
  const redis = Redis.fromEnv();

  const { slug } = await params
  const noteViews = await redis.get(`note:${slug}`)
  console.log(noteViews)
  if (noteViews === null) {
    await redis.set(`note:${slug}`, 0)
  }
  await redis.incr(`note:${slug}`)

  return (
    <main className="min-h-screen">
      <Note note={slug} />
    </main>
  )
}
