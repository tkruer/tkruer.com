import { describe, expect, it } from "vitest";
import { getAllPostsData, getPostData } from "../get-notes";

describe("getAllPostsData", () => {
  const posts = getAllPostsData();

  it("returns one entry per note in app/notes/posts", () => {
    expect(posts.map((p) => p.slug).sort()).toEqual(
      ["conv-nn-scratch", "microdb", "nvim-timer"]
    );
  });

  it("gives every note a title, summary and valid publishedAt date", () => {
    for (const post of posts) {
      expect(post.metadata.title, post.slug).toBeTruthy();
      expect(post.metadata.summary, post.slug).toBeTruthy();
      expect(post.metadata.publishedAt, post.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(post.metadata.publishedAt!)), post.slug).toBe(false);
    }
  });

  it("strips the frontmatter from the content", () => {
    for (const post of posts) {
      expect(post.content.startsWith("---"), post.slug).toBe(false);
      expect(post.content, post.slug).not.toMatch(/^publishedAt:/m);
    }
  });
});

describe("getPostData", () => {
  it("reads a single note by slug", () => {
    const { metadata, content } = getPostData("microdb");
    expect(metadata.title).toBe("MicroDB");
    expect(metadata.publishedAt).toBe("2025-03-10");
    expect(content).toContain("minikvdb");
  });

  it("throws for a slug that does not exist", () => {
    expect(() => getPostData("does-not-exist")).toThrow();
  });
});
