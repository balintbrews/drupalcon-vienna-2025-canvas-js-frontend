<template>
  <HumanifyGrid>
    <template #content>
      <component
        :is="useDrupalCe().renderCustomElements(row)"
        v-for="(row, index) in rows"
        :key="index"
      />
    </template>
  </HumanifyGrid>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  rows?: object[]
  pager?: object
}>()
</script>
