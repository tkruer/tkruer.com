
type notePost = {
  slug: string
  metadata: {
    publishedAt: string
  }
}

function getnotePosts(): notePost[] {
  return []
}


export const baseUrl = 'https://tkruer.com/'

export default async function sitemap() {
  "use server"
  const notes = (await getnotePosts()).map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['/notes'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...notes]
}
