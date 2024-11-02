<template>
    <div>
      <header class="bg-white shadow-sm">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <NuxtLink to="/" class="flex items-center text-xl font-bold text-gray-900">
                Nuxt Blog
              </NuxtLink>
            </div>
          </div>
        </nav>
      </header>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <slot />
      </main>
    </div>
  </template>