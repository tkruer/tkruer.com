import { Notes } from "@/components/notes";
import { personalInfo } from "@/lib/config";
import Image from "next/image";

export default function Home() {
  const notePosts = [
    {
      date: "January 1, 2025",
      title: "Writing a Serverless Vector Database",
      slug: "serverless-vector-database",
    },
  ]
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mt-16 mb-4">{personalInfo.name}</h1>
        <p className="text-lg mb-12">
          {personalInfo.title}
        </p>
        <div className="space-y-6">
        {notePosts.map((post) => (
          <Notes key={post.slug}  />
        ))}
      </div>
      </div>
    </main>
  )
}
