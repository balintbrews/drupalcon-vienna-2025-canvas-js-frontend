<template>
  <!-- NuxtLayout disabled for demo purposes to show Canvas components without wrapper layout -->
  <!-- <NuxtLayout :name="layout"> -->
    <LazyDrupalTabs
      v-if="page.local_tasks"
      :tabs="page.local_tasks"
    />
    <component :is="renderCustomElements(page.content)" />
  <!-- </NuxtLayout> -->
</template>

<script lang="ts" setup>
const { fetchPage, renderCustomElements, usePageHead, getPageLayout } = useDrupalCe()
const page = await fetchPage(useRoute().path, { query: useRoute().query })
const layout = getPageLayout(page)
usePageHead(page)

definePageMeta({
  key: (route) => {
    const params = new URLSearchParams(route.query as Record<string, any>).toString()
    return params ? `${route.path}?${params}` : route.path
  },
})
</script>
