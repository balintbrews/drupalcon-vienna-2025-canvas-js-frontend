# Setup

Run nuxt-example and register components (fix IP as needed):

    cd nuxt-example
    npm run dev -- --host=0.0.0.0
    ddev drush canvas:extjs-register http://172.18.0.1:3000/nuxt-component-preview/component-index.json
    ddev drush recipe ../recipes/canvas_nuxt_example


    # Access decoupled version of the page:
    http://localhost:3000/nuxt-home
