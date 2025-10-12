<template>
  <section :class="heroVariants({ colorScheme: darkVariant ? 'dark' : 'light', backgroundColor })">
    <div class="mx-auto max-w-screen-xl sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="flex max-w-xl flex-col gap-8">
          <h2 class="from-peach to-mauve tracking-relaxed text-balance bg-gradient-to-r bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
            {{ title }}
          </h2>
          <p class="text-text text-balance leading-relaxed" v-html="description" />
          <div v-if="buttonLabel && buttonLink">
            <a
              :href="buttonLink"
              class="bg-mauve text-inverted-text hover:bg-mauve/75 focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2 inline-block rounded-sm px-12 py-3 text-sm font-medium transition"
            >
              {{ buttonLabel }}
            </a>
          </div>
        </div>
      </div>
      <div v-if="image" class="h-full w-full overflow-hidden rounded-3xl py-6 md:py-8 lg:py-14">
        <img
          :alt="image.alt"
          :src="image.src"
          :width="image.width"
          :height="image.height"
          class="sm:rounded-l-4xl dark:border-surface-0 h-full w-full object-cover object-right shadow-lg xl:rounded-r-xl dark:border dark:shadow-none"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

withDefaults(defineProps<{
  /**
   * Hero title
   * @example Welcome to Humanify
   * @example Transform Your Business
   */
  title?: string
  /**
   * Hero description (supports HTML)
   * @example We help businesses grow with innovative solutions
   */
  description?: string
  /**
   * Button label
   * @example Get Started
   * @example Learn More
   */
  buttonLabel?: string
  /**
   * Button link URL
   * @example /contact
   * @example https://example.com
   */
  buttonLink?: string
  /**
   * Hero image
   */
  image?: {
    alt: string
    src: string
    width: number
    height: number
  }
  /**
   * Whether to use dark mode
   * @example false
   * @example true
   */
  darkVariant?: boolean
  /**
   * Background color variant
   * @example base
   * @example mantle
   * @example crust
   */
  backgroundColor?: 'base' | 'mantle' | 'crust'
}>(), {
  title: '',
  description: '',
  buttonLabel: '',
  buttonLink: '',
  image: () => ({
    src: 'https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    alt: 'Woman playing the violin',
    width: 1770,
    height: 1180,
  }),
  darkVariant: false,
  backgroundColor: 'base',
})

const heroVariants = cva("", {
  variants: {
    colorScheme: {
      light: "",
      dark: "dark",
    },
    backgroundColor: {
      base: "bg-base",
      mantle: "bg-mantle",
      crust: "bg-crust",
    },
  },
  defaultVariants: {
    colorScheme: "light",
    backgroundColor: "base",
  },
})
</script>
