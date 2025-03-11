"use client";
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const child = React.Children.only(children) as React.ReactElement;
  const { className, children: code } = child.props as { 
    className?: string; 
    children: string;
  };

  const language = className ? className.replace(/language-/, '') : 'javascript';

  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;