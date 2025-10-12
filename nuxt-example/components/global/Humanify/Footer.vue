<template>
  <footer :class="footerVariants({ colorScheme: darkVariant ? 'dark' : 'light', backgroundColor })">
    <div class="min-w-sm mx-auto flex max-w-screen-md flex-col items-center gap-12 p-12 md:p-16">
      <div class="h-12 flex-shrink-0 items-center justify-start">
        <slot name="branding">
          <component :is="useDrupalCe().renderCustomElements(branding)" />
        </slot>
      </div>
      <p v-if="copyrightNotice" class="text-text text-sm" v-html="copyrightNotice" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import type { CustomElementContent } from '#nuxtjs-drupal-ce/types'

withDefaults(defineProps<{
  /**
   * Branding/logo slot
   */
  branding?: CustomElementContent
  /**
   * Copyright notice text (supports HTML)
   * @example &copy; 2025 Humanify. All rights reserved.
   */
  copyrightNotice?: string
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
  branding: undefined,
  copyrightNotice: '',
  darkVariant: false,
  backgroundColor: 'base',
})

defineSlots<{
  /**
   * Branding/logo slot
   */
  branding?(): unknown
}>()

const footerVariants = cva("", {
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
