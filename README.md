# AppCraft — Angular creative workshop

A responsive personal website inspired by the layout and typography of https://getartcraft.com/. Rebuilt as an Angular 21 standalone application, with original copy and CSS artwork. AppCraft is a placeholder brand; project names and descriptions are illustrative concepts, not released products.

## Run locally

Use Node.js 22.12+ (supported Angular LTS versions recommended).

```sh
npm install
npm start
```

Open http://localhost:4200.

```sh
npm run build
```

The production site is generated in `dist/appcraft/browser`. It can be served by a static hosting provider; configure it to fall back to `index.html` for unknown paths so routes like `/apps/pixelcraft` load directly. No backend or credentials are required.

## Make it yours

- `src/app/site-content.ts`: brand, craft apps, studio features, pricing plans, tutorials, news posts and FAQ. Download buttons show a "Soon" state until you set `launcherUrl`, `webUrl`, `studioDownloads` or an app's `downloads` to an HTTPS URL.
- `src/app/pages/*.ts`: one standalone component per page (home, apps, app detail, download, pricing, support, tutorials, news, FAQ, press kit, 404). Routes live in `src/app/app.routes.ts`.
- `src/app/app.component.html`: header, Resources menu, mobile menu and footer.
- `src/styles.css`: colors, typography, responsive layout, and artwork.
- `src/index.html`: update page title, search description, and theme color.
- `src/app/shared.ts`: the `Logo` component holds the brand mark used in the header, hero wordmark, footer and press kit; `Rail` is the bordered, numbered section wrapper every page is built from.
- `public/favicon.svg`: replace the placeholder icon (same path as the logo).

Project category filters, native accessible dialogs, Escape-to-close, focus restoration, mobile navigation, reduced-motion support, and a locally saved color theme are included. No signup, payment, download, or notification backend is implied. No external analytics are loaded.

Fonts are locally hosted Archivo, Inter, Instrument Serif, and Geist Mono from the reference website's Google Fonts assets; these are open-source font families distributed under the SIL Open Font License. See `public/fonts/OFL-*.txt`. All decorative artwork is CSS, so there are no external image dependencies.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The checks cover desktop/mobile layouts, project filtering, dialog dismissal and focus, theme persistence, navigation, and asset loading.
# get-app-craft-website

## Coming-soon deployment

The local development server and public build deliberately use different entry points:

| Command | Result |
| --- | --- |
| `npm start` | Full application locally, with all routes and features. |
| `npm run build` | Production coming-soon page, with the existing logo and lavender theme. |
| `npm run build:launch` | Full production application when you are ready to launch. |
| `npm test` | Full application's desktop/mobile checks against the development server. |
| `npm run test:production` | Builds and checks the coming-soon page, including direct app URLs. |

Deploy `dist/appcraft/browser` after running `npm run build`. Configure hosting to serve
`index.html` for unknown routes, so existing URLs such as `/apps` and `/download` also
show the coming-soon page. No hostname detection or visitor-side override is used:
production uses `src/main.coming-soon.ts` instead of `src/main.ts`, excluding the full
application's routes from that build. Previewing this production output locally will
therefore also show coming soon; use `npm start` for the full local experience.

When ready, change your deployment build command to `npm run build:launch` and redeploy.
The `launched` configuration selects the full application entry point while retaining all
production optimizations. Deployments continue showing coming soon until that change.
