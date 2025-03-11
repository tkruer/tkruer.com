"use client";
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './code-block';

// 1) Define the custom components you'd like to map to MDX elements
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

  // Code blocks
  pre: CodeBlock,

  // Bold text (strong)
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
  ),

  // Italic text (em)
  em: (props: React.HTMLProps<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
};

// 2) Wrap children with MDXProvider so the overrides apply to all MDX inside
export function MdxWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}