<template>
  <div v-if="post" class="max-w-3xl mx-auto">
    <img 
      :src="post.img || `https://picsum.photos/800/400?random=${post.id}`" 
      :alt="post.title"
      class="w-full h-64 object-cover rounded-lg mb-8"
    />
    <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
    <div class="prose prose-lg max-w-none">
      <p>{{ post.body }}</p>
    </div>
    <NuxtLink 
      to="/"
      class="inline-block mt-8 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
    >
      Back to Posts
    </NuxtLink>
  </div>
  <div v-else class="text-center py-8">
    <p class="text-xl text-gray-600">Loading post...</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { fetchPost } = usePosts()
const post = ref<any>(null)

const fetchCurrentPost = async () => {
  post.value = await fetchPost(route.params.id as string)
}

onMounted(() => {
  fetchCurrentPost()
})

useHead(() => ({
  title: post.value ? `${post.value.title} - Nuxt Blog` : 'Post - Nuxt Blog',
  meta: [
    { name: 'description', content: post.value?.body?.substring(0, 160) || 'Blog post content'},
    { property: 'og:title', content: post.value?.title },
    { property: 'og:description', content: post.value?.body?.substring(0, 160) },
    { property: 'og:image', content: post.value?.img || `https://picsum.photos/1200/630?random=${post.value?.id}` },
    { property: 'og:type', content: 'article' },
    { property: 'twitter:title', content: post.value?.title },
    { property: 'twitter:description', content: post.value?.body?.substring(0, 160) },
    { property: 'twitter:image', content: post.value?.img || `https://picsum.photos/1200/630?random=${post.value?.id}` }
  ]
}))</script>