<template>
  <div>
    <header>
      <SiteLanguageSwitcher v-if="useNuxtApp().$i18n" />
      <NavigationMain />
    </header>
    <SiteMessages />
    <LazySiteBreadcrumbs />
    <main id="main">
      <slot />
    </main>
    <footer>
      <NavigationAccount />
    </footer>
  </div>
</template>

<style>
#main {
  min-height: 70vh;
}
body {
  background-color: white;
}
</style>
