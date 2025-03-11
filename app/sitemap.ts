
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
  let notes = (await getnotePosts()).map((post) => ({
    url: `${baseUrl}/note/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/note'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...notes]
}