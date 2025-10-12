export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig().public.drupalCe

  switch (true) {
    case /^\/((en|de)\/)?user.*$/.test(to.path):
    case /^\/((en|de)\/)?admin.*$/.test(to.path):
    case /^\/((en|de)\/)?(node\/(add|[^/]+\/(edit|delete|translations|revisions))|entity_clone\/node\/[^/]+)/.test(
      to.path
    ):
    case /^\/((en|de)\/)?canvas_page\/editor\//.test(to.path):
    case /^\/((en|de)\/)?canvas\/editor\//.test(to.path):
    case /^\/((en|de)\/)?(page\/(add|[^/]+\/(edit|delete|translations|revisions))|entity_clone\/node\/[^/]+)/.test(
      to.path
    ):
    case /^\/((en|de)\/)?node\/[^/]+\/layout$/.test(to.path):
      return navigateTo(`${config.drupalBaseUrl}${to.fullPath}`, {
        external: true,
        redirectCode: 301,
      })
  }
})
