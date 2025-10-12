<template>
  <div class="md:flex md:items-center md:gap-12">
    <nav aria-label="Global" class="hidden md:!block">
      <ul class="flex items-center gap-6 text-sm">
        <li v-for="item in navigationItems" :key="item.title">
          <a
            :href="item.href"
            class="text-text hover:text-text/75 transition-colors"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-4">
      <div class="sm:flex sm:gap-4">
        <a
          class="bg-teal text-inverted-text hover:bg-teal/90 rounded-md px-5 py-2.5 text-sm font-medium shadow-sm transition-colors"
          href="#"
        >
          Login
        </a>

        <div class="hidden sm:!flex">
          <a
            class="bg-surface-0/75 text-text hover:text-text/75 rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
            href="#"
          >
            Register
          </a>
        </div>
      </div>

      <div class="block md:hidden">
        <button class="bg-surface-2 text-text rounded-sm p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigationItems = [
  { href: "#", title: "Services" },
  { href: "#", title: "Blog" },
  { href: "#", title: "About" },
  { href: "#", title: "Careers" },
]
</script>
