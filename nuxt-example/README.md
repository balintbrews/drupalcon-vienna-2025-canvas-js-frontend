# Setup

First, make sure you have lupus-decoupled install. In order to make a fresh site-install with lupus-decoupled run:

    ddev install-lupus --full


Now, run nuxt-example and register components (fix IP as needed) and install recipe with demo-content:

    cd nuxt-example
    npm run dev -- --host=0.0.0.0
    ddev drush canvas:extjs-register http://172.18.0.1:3000/nuxt-component-preview/component-index.json
    ddev drush recipe ../recipes/canvas_nuxt_example

Ready!
Keep the dev-server running during testing.

There is now a "Home Nuxt" canvas page using the Nuxt components.
You can access the decoupled, Nuxt server-rendered version of the page in your
dev-server at:
    
    http://localhost:3000/nuxt-home

