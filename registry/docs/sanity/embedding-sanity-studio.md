# Embedding Sanity Studio

Sanity Studio is a React application distributed as [a single dependency on npm](https://www.npmjs.com/package/sanity). In principle, this means you can embed the Studio in any web application, as long as you can control the routing to redirect all Studio URLs to the page it‘s hosted.

## Adding the Studio as a dependency with `npm`

If you work on a project where [node package manager](https://www.npmjs.com/) is supported, you can add the Studio as a dependency using the following command:

```sh
npm install sanity@latest
```

> \[!TIP]
> Protip
> If you plan to do Studio customization, then it can be useful to install `@sanity/ui` and `@sanity/icons` as well.

## Accommodating the Studio

> \[!WARNING]
> Gotcha
> It's easy to forget, but you will always have to add the domain where you host your Studio to [your project's CORS origins settings](https://www.sanity.io/docs/content-lake/cors) with authenticated requests **enabled**.

### Styling

The Studio is built as a responsive web app. For the best editor experience, it should take the full width and height of the browser window. This means that you have to make sure that the DOM node that the Studio is mounted on is styled accordingly:

```css
/* This assumes no margin or padding on #app's parent(s) */
#app {
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
}

```

### Routing

If you embed the Studio inside of another app, it's likely you want to access it on a sub-route, e.g `/studio` or `/admin`. This means that you have to:

1. Add this route to `basePath` in the Studio‘s configuration object
2. Make sure that the app's routing redirects all the Studio's sub routes to the page/view where the Studio is mounted.

Frontend frameworks with file-based routing like [Next.js](https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes), [Nuxt.js](https://nuxtjs.org/docs/features/file-system-routing/#unknown-dynamic-nested-routes), [Svelte](https://kit.svelte.dev/docs/advanced-routing), [Remix](https://remix.run/docs/en/v1/guides/routing#splats), [Astro](https://docs.astro.build/en/core-concepts/routing/#rest-parameters), and others, have conventions for “catch-all”, “rest”, or “splat” routes. These can be used to make sure that all routes under the Studio‘s basePath will be redirected and resolved by the Studio application.

If you are embedding the Studio outside of a framework like this, then you need to control the redirects on the server or hosting level. For example, if you host with [Netlify](https://docs.netlify.com/routing/redirects/), then you need to add a setting like this:

```
# netlify.toml
[[redirects]]
  from = "/admin/*"
  to = "/admin"
  status = 301
  force = true
```

### Rendering the Studio in React applications

The `sanity` package exports a `<Studio />` component that renders a Studio given a `config` object like so:

```jsx
// StudioRoute.tsx
import { defineConfig, Studio } from "sanity";

const config = defineConfig({
  projectId: "your_project_id",
  dataset: "your_dataset",
  basePath: "/some-route-in-your-app"
});

export default function StudioRoute() {
  return <Studio config={config} />
}
```

As mentioned in "Routing" below, you need to ensure all sub-routes of the `basePath` are redirected to this route.

## Embedding Sanity Studio in a Next.js app

If you want to embed Sanity Studio in a Next.js project, then you can use the official next-sanity library. In addition to making embedding the studio easier, it also comes with tools for live preview and other useful things.

[Learn more about next-sanity](https://github.com/sanity-io/next-sanity#next-sanitystudio-dev-preview)

## Rendering the Studio in non-React applications

> \[!CAUTION]
> This approach is deprecated
> The `esm.sh/build` service has been deprecated. We suggest [deploying your studio](https://www.sanity.io/docs/studio/deployment) to Sanity when possible. If you must embed and aren’t in an environment where you can do so in a React application, you may wish to pre-bundle Studio with a tool like [Vite](https://vite.dev/) or similar.

If you aren't in a React project, then you can use the `renderStudio` function to mount it on a DOM node:

```javascript
const {default: build} = await import("https://esm.sh/build")

const mod = await build({
  dependencies: {
    "sanity": "^3.27.0",
    "@sanity/vision": "^3.27.0",
  },
  source: `
      import { defineConfig, renderStudio } from "sanity";
      import { structureTool } from "sanity/structure";
      import {presentationTool} from 'sanity/presentation';
      import { visionTool } from "@sanity/vision";

      const config = defineConfig({
        basePath: '/',
        projectId: "pv8y60vp",
        dataset: "production",
        schema: {
          types: [
            {
              type: "document",
              name: "post",
              title: "Post",
              fields: [
                {
                  type: "string",
                  name: "title",
                  title: "Title"
                }
              ]
            }
          ]
        },
        plugins: [structureTool(), presentationTool({}), visionTool()]
      });
const div = document.createElement('div')
document.body.innerHTML = ''
document.body.appendChild(div)
export const render = () => renderStudio(div, config);
  `,
  // for types checking and LSP completion
  types: `
    export function render(): string;
  `,
});

// import module
const { render } = await import(mod.bundleUrl);

render()
```
