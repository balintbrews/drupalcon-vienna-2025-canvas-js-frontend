// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxtjs-drupal-ce',
    "@nuxt/eslint",
    'nuxt-component-preview',
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/global.css'],

  componentPreview: {
    componentIndex: {
      exclude: {
        components: ['*--default', 'drupal-*', 'canvas-page', 'test-*'],
      }
    }
  },

  drupalCe: {
    drupalBaseUrl: 'https://drupalcon-vienna-2025-canvas-js-frontend.ddev.site',
  },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    server: {
      cors: {
        origin: ['https://drupalcon-vienna-2025-canvas-js-frontend.ddev.site'],
      },
    }
  },
  nitro: {
    routeRules: {
      '/nuxt-component-preview/*.js': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://drupalcon-vienna-2025-canvas-js-frontend.ddev.site',
        },
      },
      '/_nuxt/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://drupalcon-vienna-2025-canvas-js-frontend.ddev.site',
        },
      },
    },
  },
  // Disable appManifest in development only
  $development: {
    experimental: {
      appManifest: false
    }
  },
  compatibilityDate: '2024-09-10',
})
