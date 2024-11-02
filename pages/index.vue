<script setup>
const currentPage = ref(1)
const postsPerPage = 10

const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
const totalPages = Math.ceil(posts.value.length / postsPerPage)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return posts.value.slice(start, end)
})

useHead({
  title: 'Home | Nuxt Blog',
  meta: [
    { name: 'description', content: 'Welcome to our blog built with Nuxt 3' },
    { property: 'og:title', content: 'Home | Nuxt Blog' },
    { property: 'og:description', content: 'Welcome to our blog built with Nuxt 3' },
  ]
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Latest Posts</h1>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="post in paginatedPosts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <NuxtLink :to="'/posts/' + post.id">
          <NuxtImg
            :src="'https://picsum.photos/seed/' + post.id + '/800/400'"
            :alt="post.title"
            class="w-full h-48 object-cover"
            width="800"
            height="400"
          />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2 line-clamp-2">{{ post.title }}</h2>
            <p class="text-gray-600 line-clamp-3">{{ post.body }}</p>
          </div>
        </NuxtLink>
      </article>
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-center space-x-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'px-4 py-2 rounded',
          currentPage === page
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        ]"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>