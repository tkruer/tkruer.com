import { Notes } from '@/components/notes'

export default async function BlogPage() {
  "use server"
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mt-16 mb-8">notes</h1>
        <p className="text-md mb-12">
          One of the best ways to learn any topic in depth is to write and describe it. 
          Here are some of my notes on various topics.
        </p>
      </div>
      <Notes />
    </main>
  )
}
