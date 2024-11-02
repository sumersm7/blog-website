<template>
    <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <NuxtLink :to="`/post/${post.id}`" class="block">
        <img 
          :src="post.img || `https://picsum.photos/800/400?random=${post.id}`" 
          :alt="post.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 line-clamp-3">{{ post.body }}</p>
        </div>
      </NuxtLink>
    </article>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    post: {
      id: number
      title: string
      body: string
      img?: string
    }
  }>()
  </script>