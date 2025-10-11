# `drupalcon-vienna-2025-canvas-js-frontend`

DrupalCon Vienna 2025 session demo —
[JavaScript frontend development with Drupal Canvas: Beyond decoupling](https://events.drupal.org/vienna2025/session/javascript-frontend-development-drupal-canvas-beyond-decoupling).

## Setup

```
$ ddev composer install
$ ddev site-install
$ ddev launch
```

The latest RC of Canvas is downloaded via Composer. It being a tagged release,
it already contains the UI build artifacts. Run `ddev n run build` to rebuild,
or `ddev drush en canvas_vite && ddev ui` for using the development server.

## Commands

| Command                 | Description                                                                                                                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `n`                     | Run `npm` inside the UI directory.<br><br>`--canvas-dir=<directory>`: runs `npm` inside specified directory<br>(`root`, `ui`, `astro`, `cli`, or `docs`)                                                                         |
| `ui`                    | Start the UI app's dev server.<br><br>`--install` `-i`: runs `npm install` before<br>`--build` `-b`: runs `npm run build` before                                                                                                 |
| `playwright`            | Run Playwright in UI mode.<br>(Accessible via VNC at `https://canvas.ddev.site:6081/vnc.html`)<br><br>`--spec <path-to-spec>`: runs a spec in headless mode                                                                      |
| `cy`,<br>`cypress`      | Run the Cypress UI in end-to-end testing mode<br>(Accessible via VNC at `https://canvas.ddev.site:6081/vnc.html`)<br><br>`--spec <path-to-spec>`: runs a spec in headless mode<br>`--component` `-c`: use component testing mode |
| `phpunit [path]`        | Run PHPUnit tests in the module's codebase<br><br>`[path]`: narrows to the path, relative to the module directory                                                                                                                |
| `phpcs [path]`          | Run PHP Code Beautifier and Fixer in the module's codebase<br><br>`[path]`: narrows to the path, relative to the module directory                                                                                                |
| `phpstan`               | Run PHPStan in the module's codebase                                                                                                                                                                                             |
| `si`,<br>`site-install` | Install Drupal site, install and configure modules: Canvas, Canvas OAuth.                                                                                                                                                        |
| `clone-repo`            | Clone the Canvas module's repository. (Runs on the host.)                                                                                                                                                                        |

See the [list of commands](https://docs.ddev.com/en/stable/users/usage/cli/)
provided by DDEV out-of-the box.
