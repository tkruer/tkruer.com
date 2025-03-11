import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app", "notes", "posts");

export function getAllPostsData(): {
  slug: string;
  metadata: {
    title?: string;
    publishedAt?: string;
    summary?: string;
    image?: string;
  };
  content: string;
}[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: {
    slug: string;
    metadata: {
      title?: string;
      publishedAt?: string;
      summary?: string;
      image?: string;
    };
    content: string;
  }[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    return {
      slug,
      metadata,
      content,
    };
  });

  return allPostsData;
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: metadata, content } = matter(fileContents);
  return { metadata, content };
}
