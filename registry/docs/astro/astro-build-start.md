### `astro:build:start`

[Section titled “astro:build:start”](#astrobuildstart)

**Previous hook:** [`astro:config:done`](#astroconfigdone)

**Next hook:** [`astro:build:setup`](#astrobuildsetup)

**When:** After the `astro:config:done` event, but before the production build begins.

**Why:** To set up any global objects or clients needed during a production build. This can also extend the build configuration options in the [adapter API](/en/reference/adapter-reference/).

```js
'astro:build:start'?: (options: {
  logger: AstroIntegrationLogger;
  setPrerenderer: (prerenderer: AstroPrerenderer | ((defaultPrerenderer: AstroPrerenderer) => AstroPrerenderer)) => void;
}) => void | Promise<void>;
```

#### `setPrerenderer()` option

[Section titled “setPrerenderer() option”](#setprerenderer-option)

**Type:** `(prerenderer: AstroPrerenderer | ((defaultPrerenderer: AstroPrerenderer) => AstroPrerenderer)) => void`

**Added in:** `astro@6.0.0` New

A callback function to set a custom prerenderer for the build. This allows adapters to provide their own prerendering logic.

The function accepts either an [`AstroPrerenderer` object](#astroprerenderer) directly, or a factory function that receives the default prerenderer and returns a custom one. This is useful when you want to wrap or extend the default behavior.

```js
'astro:build:start': ({ setPrerenderer }) => {
  setPrerenderer((defaultPrerenderer) => ({
    name: 'my-prerenderer',
    async setup() {
      // Optional: called once before prerendering starts
    },
    async getStaticPaths() {
      // Returns array of { pathname: string, route: RouteData }
      return defaultPrerenderer.getStaticPaths();
    },
    async render(request, { routeData }) {
      // request: Request, options: { routeData: RouteData }
      // Returns: Response
    },
    async teardown() {
      // Optional: called after all pages are prerendered
    }
  }));
}
```

See the [adapter reference](/en/reference/adapter-reference/#custom-prerenderer) for more details on implementing a custom prerenderer.
