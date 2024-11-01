<template>
    <div>
      <header class="bg-gray-800 text-white py-4">
        <div class="container mx-auto px-4">
          <nav class="flex justify-between items-center">
            <nuxt-link to="/" class="text-2xl font-bold">My Blog</nuxt-link>
            <ul class="flex space-x-4">
              <li><nuxt-link to="/" class="hover:text-gray-300">Home</nuxt-link></li>
              <li><nuxt-link to="/about" class="hover:text-gray-300">About</nuxt-link></li>
              <li><nuxt-link to="/contact" class="hover:text-gray-300">Contact</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Nuxt />
      </main>
      <footer class="bg-gray-800 text-white py-4 mt-8">
        <div class="container mx-auto px-4 text-center">
          &copy; {{ new Date().getFullYear() }} My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  </template>