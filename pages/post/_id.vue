<template>
    <div class="container mx-auto px-4 py-8">
      <article class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <img :src="post.img || `https://picsum.photos/id/${post.id+10}/800/400`" :alt="post.title" class="w-full h-64 object-cover mb-8">
        <div class="prose lg:prose-xl" v-html="post.body"></div>
      </article>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      const post = await $axios.$get(`/posts/${params.id}`)
      return { post }
    },
    head() {
      return {
        title: this.post.title,
        meta: [
          { hid: 'description', name: 'description', content: this.post.body.slice(0, 160) },
          { hid: 'og:title', property: 'og:title', content: this.post.title },
          { hid: 'og:description', property: 'og:description', content: this.post.body.slice(0, 160) },
          { hid: 'og:image', property: 'og:image', content: this.post.img || `https://picsum.photos/id/${this.post.id+10}/800/400` },
          { hid: 'og:url', property: 'og:url', content: `https://nuxtblog.ssamdtwo.aawssm.in/post/${this.post.id}` },
          { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        ],
      }
    },
  }
  </script>