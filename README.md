# `drupal-canvas-dev`

An opinionated development environment for brewing
[Drupal Canvas](https://www.drupal.org/project/canvas), built with
[DDEV](https://ddev.com/). I maintain this project to use for my day-to-day
development work, with workflows and tools I prefer.

## Setup

1. Clone the repository
2. Copy `.ddev/.env.example` to `.ddev/.env`
   1. Add your [OpenAI API key](https://platform.openai.com) to be used by the
      Canvas AI module
3. Run `ddev start`

## Commands

| Command                 | Description                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm`                   | Run `npm` inside the UI codebase.                                                                                                                                   |
| `ui`                    | Start the UI app's dev server.<br><br>`--install` `-i`: runs `npm install` before<br>`--build` `-b`: runs `npm run build` before                                    |
| `cy`,<br>`cypress`      | Open Cypress in end-to-end testing mode, accessible via VNC at `https://canvas.ddev.site:6081/vnc.html`.<br><br>`--component` `-c`: opens in component testing mode |
| `si`,<br>`site-install` | Install Drupal site, install and configure modules: Canvas, Canvas AI.                                                                                              |
| `clone-repo`            | Clone the Canvas module's repository. (Runs on the host.)                                                                                                           |

See the [list of commands](https://docs.ddev.com/en/stable/users/usage/cli/)
provided by DDEV out-of-the box.

## Credits

My work on Drupal Canvas is made possible by [Acquia](https://www.acquia.com).
