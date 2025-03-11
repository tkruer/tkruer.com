
"use client"
import { notFound } from "next/navigation"
import { MdxWrapper } from "@/components/mdx-client-wrapper"

export default async function IndividualNotePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/notes/posts/${slug}.mdx`)
    if (!Post) {
        return notFound()
    }

  return (
    <section className="mx-auto my-8 max-w-3xl">
      <MdxWrapper>
        <Post />
      </MdxWrapper>
    </section>
  )
}
   