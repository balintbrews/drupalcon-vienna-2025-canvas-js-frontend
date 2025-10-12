<template>
  <p class="text-text mx-auto max-w-2xl text-balance text-center leading-relaxed" v-html="text" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * Paragraph text (supports HTML)
   * @example This is a paragraph of text
   * @example Learn more about <strong>our services</strong>
   */
  text?: string
}>(), {
  text: '',
})
</script>
