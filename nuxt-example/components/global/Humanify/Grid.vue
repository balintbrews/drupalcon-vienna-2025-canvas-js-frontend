<template>
  <div class="min-w-sm grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
    <slot name="content">
      <component :is="useDrupalCe().renderCustomElements(content)" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { CustomElementContent } from '#nuxtjs-drupal-ce/types'

defineProps<{
  /**
   * Grid content
   */
  content?: CustomElementContent
}>()

defineSlots<{
  /**
   * Grid content
   */
  content?(): unknown
}>()
</script>
