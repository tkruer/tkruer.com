import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { formatDate, getBlogPosts } from "../blog-utils";

describe("formatDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-16T12:00:00"));
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("formats a plain date as a long US date", async () => {
    expect(await formatDate("2025-03-10")).toBe("March 10, 2025");
  });

  it("accepts a full ISO timestamp", async () => {
    expect(await formatDate("2025-02-01T15:30:00")).toBe("February 1, 2025");
  });

  it("adds a relative time when asked", async () => {
    expect(await formatDate("2025-03-10", true)).toBe("March 10, 2025 (1y ago)");
    expect(await formatDate("2026-11-16", true)).toBe("November 16, 2026 (Today)");
  });
});

describe("getBlogPosts", () => {
  it("parses frontmatter for every note and removes quotes", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const posts = await getBlogPosts();
    const microdb = posts.find((p) => p.slug === "microdb");
    expect(posts).toHaveLength(3);
    expect(microdb?.metadata).toMatchObject({
      title: "MicroDB",
      publishedAt: "2025-03-10",
    });
    expect(microdb?.content.startsWith("---")).toBe(false);
  });
});
