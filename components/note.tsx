"use server"
import { getPostData } from '@/lib/get-notes'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

export async function Note({ note }: { note: string }) {
  const { metadata, content } = await getPostData(note)
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 py-4">{metadata.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
            <MDXRemote 
                source={content} 
                options={{
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
                },
                }}
                components={components}
            />
        </div>
    </div>
  )
}

const components = {
    // Headings
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mb-4" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
    ),
  
    // Paragraph
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <p className="my-4 leading-7" {...props} />
    ),
  
    // Blockquote
    blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic my-4"
        {...props}
      />
    ),
  
    // Lists
    ul: (props: React.HTMLProps<HTMLUListElement>) => (
      <ul className="list-disc list-inside ml-6 my-4" {...props} />
    ),
  
    li: (props: React.HTMLProps<HTMLLIElement>) => (
      <li className="mb-1" {...props} />
    ),
  
    // Links
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
      <a className="text-blue-600 hover:underline" {...props} />
    ),
  
    // Inline code
    code: (props: React.HTMLProps<HTMLElement>) => (
      <code className="bg-gray-100 text-red-600 rounded px-1" {...props} />
    ),
  

    // Bold text (strong)
    strong: (props: React.HTMLProps<HTMLElement>) => (
      <strong className="font-semibold" {...props} />
    ),
  
    // Italic text (em)
    em: (props: React.HTMLProps<HTMLElement>) => (
      <em className="italic" {...props} />
    ),
  };