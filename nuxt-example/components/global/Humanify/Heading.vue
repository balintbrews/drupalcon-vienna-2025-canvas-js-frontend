<template>
  <h2 class="text-text mx-auto max-w-screen-lg text-balance text-center text-2xl font-extrabold md:text-3xl">
    {{ text }}
  </h2>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * Heading text
   * @example Welcome to Our Service
   * @example Featured Products
   */
  text?: string
}>(), {
  text: '',
})
</script>
