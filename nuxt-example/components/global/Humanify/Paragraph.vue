<template>
  <p class="text-text mx-auto max-w-2xl text-balance text-center leading-relaxed" v-html="text" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * Paragraph text
   * @contentMediaType text/html
   * @formattingContext block
   * @example <p>Learn more about <strong>our services</strong></p>
   */
  text?: string
}>(), {
  text: '',
})
</script>
