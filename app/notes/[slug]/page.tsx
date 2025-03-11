import { Note } from '@/components/note'

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  "use server"
  const { slug } = await params
  return (
    <main className="min-h-screen">
      <Note note={slug} />
    </main>
  )
}
