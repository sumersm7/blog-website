<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="post in posts" :key="post.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="post.img ||  `https://picsum.photos/id/${post.id+10}/400/200`" :alt="post.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{post.id+". " + post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.body.slice(0, 100) }}...</p>
          <nuxt-link :to="`/post/${post.id}`" class="text-blue-600 hover:underline">Read more</nuxt-link>
        </div>
      </article>
    </div>
    <div class="mt-8 flex justify-center items-center space-x-4">
      <button 
        @click="changePage(currentPage - 1)" 
        :disabled="currentPage === 1"
        :class="{ 'bg-blue-500 text-white': currentPage !== 1, 'bg-gray-300 text-gray-500 cursor-not-allowed': currentPage === 1 }"
        class="px-4 py-2 rounded"
      >
        Previous
      </button>
      <span class="text-xl font-semibold">Page {{ currentPage }}</span>
      <button 
        @click="changePage(currentPage + 1)" 
        :disabled="posts.length < limit || currentPage === totalPages"
        :class="{ 'bg-blue-500 text-white': posts.length >= limit && currentPage !== totalPages, 'bg-gray-300 text-gray-500 cursor-not-allowed': posts.length < limit || currentPage === totalPages }"
        class="px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      totalPages: 1,
      limit: 9,
    }
  },
  async fetch() {
    await this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      const page = parseInt(this.$route.query.page) || 1
      const start = (page - 1) * this.limit
      const { data, headers } = await this.$axios.get(`/posts`)
      this.posts = data.splice(start, this.limit)
      this.currentPage = page 
      this.totalPages = this.posts.length < this.limit? page  : page+2
      // console.log(`page ${page} posts ${this.posts.length} total ${this.totalPages}`)
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return
      this.$router.push({ query: { page: page.toString() } })
    }
  },
  watch: {
    '$route.query.page': {
      handler() {
        this.fetchPosts()
      },
      immediate: true
    }
  },
  head() {
    return {
      title: 'Blog Posts',
      meta: [
        { hid: 'description', name: 'description', content: 'Browse our latest blog posts' },
        { hid: 'og:title', property: 'og:title', content: 'Blog Posts' },
        { hid: 'og:description', property: 'og:description', content: 'Browse our latest blog posts' },
        { hid: 'og:image', property: 'og:image', content: 'https://blog.asarmtwo.aawssm.in/og-image.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://blog.asarmtwo.aawssm.in' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>