# `drupal-canvas-dev`

An opinionated development environment for brewing
[Drupal Canvas](https://www.drupal.org/project/canvas). I maintain this project
to use for my day-to-day development work, with workflows and tools I prefer.

## Setup

```bash
git clone git@github.com:balintbrews/drupal-canvas-dev.git canvas && \
cd canvas && \
ddev start && \
ddev clone-repo && \
ddev composer install && \
ddev site-install && \
ddev ui --install --build && \
ddev launch
```

## Commands

| Command        | Description                                                                                                      | Environment   |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ------------- |
| `npm`          | Run `npm` inside the UI codebase.                                                                                | web container |
| `site-install` | Install Drupal site.                                                                                             | web container |
| `ui`           | Run the UI app's dev server.<br />`--install` `-i`: runs `npm install`<br />`--build` `-b`: runs `npm run build` | web container |
| `clone-repo`   | Clone the Canvas module's repository                                                                             | host          |

You can also refer to the output of `ddev | grep "Drupal Canvas"`.

## Credits

My work on Drupal Canvas is made possible by [Acquia](https://www.acquia.com).
