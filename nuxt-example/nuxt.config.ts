// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxtjs-drupal-ce',
    "@nuxt/eslint",
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/global.css'],

  drupalCe: {
    drupalBaseUrl: 'http://drupalcon-vienna-2025-canvas-js-frontend.ddev.site',
  },

  nitro: {
    compressPublicAssets: true,
  },
  compatibilityDate: '2024-09-10',
})
