<script setup>
const route = useRoute()
const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

useHead({
  title: post.value?.title + ' | Nuxt Blog',
  meta: [
    { name: 'description', content: post.value?.body },
    { property: 'og:title', content: post.value?.title + ' | Nuxt Blog' },
    { property: 'og:description', content: post.value?.body },
    { property: 'og:image', content: `https://picsum.photos/seed/${post.value?.id}/800/400` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value?.title },
    { name: 'twitter:description', content: post.value?.body },
    { name: 'twitter:image', content: `https://picsum.photos/seed/${post.value?.id}/800/400` },
  ]
})
</script>

<template>
  <article v-if="post" class="max-w-4xl mx-auto">
    <NuxtImg
      :src="'https://picsum.photos/seed/' + post.id + '/800/400'"
      :alt="post.title"
      class="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
      width="800"
      height="400"
    />
    <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
    <div class="prose prose-lg max-w-none">
      <p>{{ post.body }}</p>
    </div>
    <NuxtLink
      to="/"
      class="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      ← Back to Posts
    </NuxtLink>
  </article>
</template>