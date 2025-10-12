<template>
  <section :class="sectionVariants({ colorScheme: darkVariant ? 'dark' : 'light', backgroundColor })">
    <div class="min-w-sm mx-auto flex max-w-screen-xl flex-col items-center gap-6 p-12 px-4 md:p-16 md:px-12 lg:gap-8 lg:px-16">
      <slot name="content">
        <component :is="useDrupalCe().renderCustomElements(content)" />
      </slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import type { CustomElementContent } from '#nuxtjs-drupal-ce/types'

withDefaults(defineProps<{
  /**
   * Section content
   */
  content?: CustomElementContent
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
  content: undefined,
  darkVariant: false,
  backgroundColor: 'base',
})

defineSlots<{
  /**
   * Section content
   */
  content?(): unknown
}>()

const sectionVariants = cva("", {
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
