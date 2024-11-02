export const usePosts = () => {
  const config = useRuntimeConfig()
  
  const fetchPosts = async (page = 1, limit = 10) => {
    try {
      const start = (page - 1) * limit
      const posts = await $fetch(`${config.public.apiBase}/posts?_start=${start}&_limit=${limit}`)
      return posts
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }

  const fetchPost = async (id: string) => {
    try {
      const post = await $fetch(`${config.public.apiBase}/posts/${id}`)
      return post
    } catch (error) {
      console.error('Error fetching post:', error)
      return null
    }
  }

  return {
    fetchPosts,
    fetchPost
  }
}