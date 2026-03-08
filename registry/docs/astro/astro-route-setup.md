### `astro:route:setup`

[Section titled “astro:route:setup”](#astroroutesetup)

**Added in:** `astro@4.14.0`

**Previous hook:** [`astro:config:setup`](#astroconfigsetup)

**Next hook:** [`astro:routes:resolved`](#astroroutesresolved)

**When:** In `astro build`, before bundling starts. In `astro dev`, while building the module graph and on every change to a file based route (added/removed/updated).

**Why:** To set options for a route at build or request time, such as enabling [on-demand server rendering](/en/guides/on-demand-rendering/#enabling-on-demand-rendering).

```js
'astro:route:setup'?: (options: {
  route: RouteOptions;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `route` option

[Section titled “route option”](#route-option)

**Type:** `{ readonly component: string; prerender?: boolean; }`

An object with a `component` property to identify the route and the following additional values to allow you to configure the generated route: `prerender`.

##### `route.component`

[Section titled “route.component”](#routecomponent)

**Type:** `string`

**Added in:** `astro@4.14.0`

The `component` property indicates the entrypoint that will be rendered on the route. You can access this value before the routes are built to configure on-demand server rendering for that page.

##### `route.prerender`

[Section titled “route.prerender”](#routeprerender)

**Type:** `boolean`\
**Default:** `undefined`

**Added in:** `astro@4.14.0`

The `prerender` property is used to configure [on-demand server rendering](/en/guides/on-demand-rendering/#enabling-on-demand-rendering) for a route. If the route file contains an explicit `export const prerender` value, the value will be used as the default instead of `undefined`.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  integrations: [setPrerender()],
});


function setPrerender() {
  return {
    name: 'set-prerender',
    hooks: {
      'astro:route:setup': ({ route }) => {
        if (route.component.endsWith('/blog/[slug].astro')) {
          route.prerender = true;
        }
      },
    },
  };
}
```

If the final value after running all the hooks is `undefined`, the route will fall back to a prerender default based on the [`output` option](/en/reference/configuration-reference/#output): prerendered for `static` mode, and on-demand rendered for `server` mode.

### `astro:routes:resolved`

[Section titled “astro:routes:resolved”](#astroroutesresolved)

**Added in:** `astro@5.0.0`

**Previous hook:** [`astro:route:setup`](#astroroutesetup)

**Next hook:** [`astro:config:done`](#astroconfigdone) (only during setup)

**When:** In `astro dev`, it also runs on every change to a file based route (added/removed/updated).

**Why:** To access routes and their metadata

```js
'astro:routes:resolved'?: (options: {
  routes: IntegrationResolvedRoute[];
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `routes` option

[Section titled “routes option”](#routes-option)

**Type:** [`IntegrationResolvedRoute[]`](#integrationresolvedroute)

A list of all routes with their associated metadata.

Example use:

my-integration.mjs

```js
const integration = () => {
  return {
    name: 'my-integration',
    hooks: {
      'astro:routes:resolved': ({ routes }) => {
        const projectRoutes = routes.filter(r => r.origin === 'project').map(r => r.pattern)


        console.log(projectRoutes)
      },
    }
  }
}
```
