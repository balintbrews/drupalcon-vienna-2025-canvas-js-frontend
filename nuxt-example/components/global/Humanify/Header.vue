<template>
  <header :class="headerVariants({ colorScheme: darkVariant ? 'dark' : 'light', backgroundColor })">
    <div class="min-w-sm mx-auto flex h-24 max-w-screen-xl items-center justify-between gap-x-12 px-4 sm:px-12 md:h-32 lg:gap-x-16 lg:px-16">
      <div class="h-12 flex-shrink-0 items-center justify-start md:h-16">
        <slot name="branding">
          <component :is="useDrupalCe().renderCustomElements(branding)" />
        </slot>
      </div>
      <div class="flex h-12 flex-grow items-center justify-end md:h-16">
        <slot name="navigation">
          <component :is="useDrupalCe().renderCustomElements(navigation)" />
        </slot>
      </div>
    </div>
  </header>
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
   * Navigation slot
   */
  navigation?: CustomElementContent
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
  navigation: undefined,
  darkVariant: false,
  backgroundColor: 'base',
})

defineSlots<{
  /**
   * Branding/logo slot
   */
  branding?(): unknown
  /**
   * Navigation slot
   */
  navigation?(): unknown
}>()

const headerVariants = cva("", {
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
