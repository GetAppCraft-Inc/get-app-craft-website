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
