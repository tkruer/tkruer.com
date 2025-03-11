import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app", "notes", "posts");

export function getAllPostsData(): {
  slug: string;
  metadata: any;
  content: string;
}[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: any[] = fileNames.map((fileName) => {
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