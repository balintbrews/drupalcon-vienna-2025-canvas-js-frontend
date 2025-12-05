<template>
  <div class="min-w-sm grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
    <slot />
  </div>
</template>

<script setup lang="ts">

defineSlots<{
  /**
   * Grid content
   */
  default(): any
}>()
</script>
