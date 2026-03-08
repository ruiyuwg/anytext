## Integration types reference

[Section titled “Integration types reference”](#integration-types-reference)

The following types can be imported from the `astro` module:

```ts
import type {
  AstroIntegrationLogger,
  AstroIntegrationMiddleware,
  AstroMiddlewareInstance,
  AstroRenderer,
  ClientDirectiveConfig,
  HookParameters,
  IntegrationResolvedRoute,
  RedirectConfig,
  RouteData,
  RoutePart,
  RouteType,
  SSRComponentMetadata,
  SSRLoadedRenderer,
  SSRLoadedRendererValue,
  SSRManifest,
  ValidRedirectStatus,
  // The following are deprecated:
  IntegrationRouteData,
} from "astro";
```

### `AstroIntegrationLogger`

[Section titled “AstroIntegrationLogger”](#astrointegrationlogger)

An instance of the Astro logger, useful to write logs. This logger uses the same [log level](/en/reference/cli-reference/#--verbose) configured via CLI.

**Methods available** to write to terminal:

- `logger.info("Message")`;
- `logger.warn("Message")`;
- `logger.error("Message")`;
- `logger.debug("Message")`;

All the messages are prepended with a label that has the same value as the name of the integration.

integration.ts

```ts
import type { AstroIntegration } from "astro";
export function formatIntegration(): AstroIntegration {
  return {
    name: "astro-format",
    hooks: {
      "astro:build:done": ({ logger }) => {
        // do something
        logger.info("Integration ready.");
      }
    }
  }
}
```

The example above will log a message that includes the provided `info` message:

```shell
[astro-format] Integration ready.
```

To log some messages with a different label, use the `.fork` method to specify an alternative to the default `name`:

integration.ts

```ts
import type { AstroIntegration } from "astro";
export function formatIntegration(): AstroIntegration {
  return {
    name: "astro-format",
    hooks: {
      "astro:config:done": ({ logger }) => {
        // do something
        logger.info("Integration ready.");
      },
      "astro:build:done": ({ logger }) => {
        const buildLogger = logger.fork("astro-format/build");
        // do something
        buildLogger.info("Build finished.")
      }
    }
  }
}
```

The example above will produce logs with `[astro-format]` by default, and `[astro-format/build]` when specified:

```shell
[astro-format] Integration ready.
[astro-format/build] Build finished.
```

### `AstroIntegrationMiddleware`

[Section titled “AstroIntegrationMiddleware”](#astrointegrationmiddleware)

**Type:** `{ order: "pre" | "post"; entrypoint: string | URL; }`

Describes a [middleware added by an integration](#addmiddleware-option).

#### `AstroIntegrationMiddleware.order`

[Section titled “AstroIntegrationMiddleware.order”](#astrointegrationmiddlewareorder)

**Type:** `"pre" | "post"`

Specifies whether the middleware should run before (`pre`) or after (`post`) other middleware.

#### `AstroIntegrationMiddleware.entrypoint`

[Section titled “AstroIntegrationMiddleware.entrypoint”](#astrointegrationmiddlewareentrypoint)

**Type:** `string | URL`

Defines the import path of the middleware.

### `AstroMiddlewareInstance`

[Section titled “AstroMiddlewareInstance”](#astromiddlewareinstance)

**Type:** `{ onRequest?: MiddlewareHandler; }`

An object containing an [`onRequest()`](/en/reference/modules/astro-middleware/#onrequest) property defined with the project’s middleware function when it exists.

### `AstroRenderer`

[Section titled “AstroRenderer”](#astrorenderer)

**Type:** `{ name: string; clientEntrypoint?: string | URL; serverEntrypoint: string | URL; }`

Describes a [component framework renderer added by an integration](#addrenderer-option).

#### `AstroRenderer.name`

[Section titled “AstroRenderer.name”](#astrorenderername)

**Type:** `string`

The name of the component framework renderer.

#### `AstroRenderer.clientEntrypoint`

[Section titled “AstroRenderer.clientEntrypoint”](#astrorenderercliententrypoint)

**Type:** `string | URL`

Defines the import path of the renderer that runs on the client whenever your component is used.

#### `AstroRenderer.serverEntrypoint`

[Section titled “AstroRenderer.serverEntrypoint”](#astrorendererserverentrypoint)

**Type:** `string | URL`

Defines the import path of the renderer that runs during server-side requests or static builds whenever your component is used.

### `ClientDirectiveConfig`

[Section titled “ClientDirectiveConfig”](#clientdirectiveconfig)

**Type:** `{ name: string; entrypoint: string | URL; }`

Describes a [custom client directive added by an integration](#addclientdirective-option).

#### `ClientDirectiveConfig.name`

[Section titled “ClientDirectiveConfig.name”](#clientdirectiveconfigname)

**Type:** `string`

A custom name for the event triggered by the directive.

#### `ClientDirectiveConfig.entrypoint`

[Section titled “ClientDirectiveConfig.entrypoint”](#clientdirectiveconfigentrypoint)

**Type:** `string | URL`

Defines the import path of the code executed whenever the directive is used.

### `HookParameters`

[Section titled “HookParameters”](#hookparameters)

You can get the type of a hook’s arguments by passing the hook’s name to the `HookParameters` utility type.

In the following example, a function’s `options` argument is typed to match the parameters of the [`astro:config:setup` hook](#astroconfigsetup):

```ts
import type { HookParameters } from 'astro';


function mySetup(options: HookParameters<'astro:config:setup'>) {
  options.updateConfig({ /* ... */ });
}
```

### `IntegrationResolvedRoute`

[Section titled “IntegrationResolvedRoute”](#integrationresolvedroute)

A subset of [`RouteData`](#routedata) with remapped properties.

```ts
interface IntegrationResolvedRoute extends Pick<
    RouteData,
    'generate' | 'params' | 'pathname' | 'segments' | 'type' | 'redirect' | 'origin'
  > & {
  pattern: RouteData['route'];
  patternRegex: RouteData['pattern'];
  entrypoint: RouteData['component'];
  isPrerendered: RouteData['prerender'];
  redirectRoute?: IntegrationResolvedRoute;
}
```

#### `IntegrationResolvedRoute.pattern`

[Section titled “IntegrationResolvedRoute.pattern”](#integrationresolvedroutepattern)

**Type:** [`RouteData['route']`](#routedataroute)

Allows you to identify the type of route based on its path. Here are some examples of paths associated with their pattern:

- `src/pages/index.astro` will be `/`
- `src/pages/blog/[...slug].astro` will be `/blog/[...slug]`
- `src/pages/site/[blog]/[...slug].astro` will be `/site/[blog]/[...slug]`

#### `IntegrationResolvedRoute.patternRegex`

[Section titled “IntegrationResolvedRoute.patternRegex”](#integrationresolvedroutepatternregex)

**Type:** [`RouteData['pattern']`](#routedatapattern)

Allows you to access a regex used for matching an input URL against a requested route.

For example, given a `[fruit]/about.astro` path, the regex will be `/^\/([^/]+?)\/about\/?$/`. Using `pattern.test("banana/about")` will return `true`.

#### `IntegrationResolvedRoute.entrypoint`

[Section titled “IntegrationResolvedRoute.entrypoint”](#integrationresolvedrouteentrypoint)

**Type:** [`RouteData['component']`](#routedatacomponent)

The URL pathname of the source component.

#### `IntegrationResolvedRoute.isPrerendered`

[Section titled “IntegrationResolvedRoute.isPrerendered”](#integrationresolvedrouteisprerendered)

**Type:** [`RouteData['prerender']`](#routedataprerender)

Determines whether the route use [on demand rendering](/en/guides/on-demand-rendering/). The value will be `true` for projects configured with:

- `output: 'static'` when the route does not export `const prerender = true`
- `output: 'server'` when the route exports `const prerender = false`

#### `IntegrationResolvedRoute.redirectRoute`

[Section titled “IntegrationResolvedRoute.redirectRoute”](#integrationresolvedrouteredirectroute)

**Type:** `IntegrationResolvedRoute | undefined`

When the value of `IntegrationResolvedRoute.type` is `redirect`, the value will be the `IntegrationResolvedRoute` to redirect to. Otherwise, the value will be undefined.

### `RedirectConfig`

[Section titled “RedirectConfig”](#redirectconfig)

**Type:** `string | { status: ValidRedirectStatus; destination: string; }`

Describes the destination of a redirect. This can be a string or an object containing information about the status code and its destination.

### `RouteData`

[Section titled “RouteData”](#routedata)

Describes the information about a route.

#### `RouteData.route`

[Section titled “RouteData.route”](#routedataroute)

**Type:** `string`

Defines the current route pattern. Here are some examples of paths associated with their pattern:

- `src/pages/index.astro` will be `/`
- `src/pages/blog/[...slug].astro` will be `/blog/[...slug]`
- `src/pages/site/[blog]/[...slug].astro` will be `/site/[blog]/[...slug]`

#### `RouteData.component`

[Section titled “RouteData.component”](#routedatacomponent)

**Type:** `string`

Specifies the source component URL.

#### `RouteData.generate()`

[Section titled “RouteData.generate()”](#routedatagenerate)

**Type:** `(data?: any) => string`

A function that provides the optional parameters of the route, interpolates them with the route pattern, and returns the path name of the route.

For example, with a route such as `/blog/[...id].astro`, the `generate()` function could return:

```js
generate({ id: 'presentation' }) // will output `/blog/presentation`
```

#### `RouteData.params`

[Section titled “RouteData.params”](#routedataparams)

**Type:** `string[]`

Allows you to access the route `params`. For example, when a project uses the following [dynamic routes](/en/guides/routing/#dynamic-routes) `/pages/[lang]/[...slug].astro`, the value will be `['lang', '...slug']`.

#### `RouteData.pathname`

[Section titled “RouteData.pathname”](#routedatapathname)

**Type:** `string | undefined`

For regular routes, the value will be the URL pathname where this route will be served. When the project uses [dynamic routes](/en/guides/routing/#dynamic-routes) (ie. `[dynamic]` or `[...spread]`), the pathname will be undefined.

#### `RouteData.distURL`

[Section titled “RouteData.distURL”](#routedatadisturl)

**Type:** `URL[] | undefined`

**Added in:** `astro@5.0.0`

Defines the paths of the physical files emitted by this route. When a route isn’t prerendered, the value is either `undefined` or an empty array.

#### `RouteData.pattern`

[Section titled “RouteData.pattern”](#routedatapattern)

**Type:** `RegExp`

Specifies a regex to use for matching an input URL against a requested route.

For example, given a `[fruit]/about.astro` path, the regex will be `/^\/([^/]+?)\/about\/?$/`. Using `pattern.test("banana/about")` will return `true`.

#### `RouteData.segments`

[Section titled “RouteData.segments”](#routedatasegments)

**Type:** `RoutePart[][]`

Allows you to access the route [`params`](#routedataparams) with additional metadata. Each object contains the following properties:

- `content`: the `param` name,
- `dynamic`: whether the route is dynamic or not,
- `spread`: whether the dynamic route uses the spread syntax or not.

For example, the following route `/pages/[blog]/[...slug].astro` will output the segments:

```js
[
  [ { content: 'pages', dynamic: false, spread: false } ],
  [ { content: 'blog', dynamic: true, spread: false } ],
  [ { content: '...slug', dynamic: true, spread: true } ]
]
```

#### `RouteData.type`

[Section titled “RouteData.type”](#routedatatype)

**Type:** [`RouteType`](#routetype)

Allows you to identify the [type of route](#routetype).

#### `RouteData.prerender`

[Section titled “RouteData.prerender”](#routedataprerender)

**Type:** `boolean`

Determines whether a route uses [on demand rendering](/en/guides/on-demand-rendering/) or is statically prerendered at build time.

See also [`prerendered`](/en/reference/routing-reference/#prerender) in the routing reference.

#### `RouteData.redirect`

[Section titled “RouteData.redirect”](#routedataredirect)

**Type:** `RedirectConfig | undefined`

Allows you to access the route to redirect to.

#### `RouteData.redirectRoute`

[Section titled “RouteData.redirectRoute”](#routedataredirectroute)

**Type:** `RouteData | undefined`

Specifies the `RouteData` to redirect to when [`RouteData.type`](#routedatatype) is `redirect`.

#### `RouteData.fallbackRoutes`

[Section titled “RouteData.fallbackRoutes”](#routedatafallbackroutes)

**Type:** `RouteData[]`

**Added in:** `astro@3.5.6`

Defines a list of `RouteData` to fallback to when [`i18n.fallback`](/en/reference/configuration-reference/#i18nfallback) has a list of locales.

#### `RouteData.isIndex`

[Section titled “RouteData.isIndex”](#routedataisindex)

**Type:** `boolean`

Specifies if the route is a directory index (e.g. `src/pages/index.astro`, `src/pages/blog/index.astro`).

#### `RouteData.origin`

[Section titled “RouteData.origin”](#routedataorigin)

**Type:** `'internal' | 'external' | 'project'`

**Added in:** `astro@5.0.0`

Determines if a route comes from Astro core (`internal`), an integration (`external`) or the user’s project (`project`).

### `RoutePart`

[Section titled “RoutePart”](#routepart)

**Type:** `{ content: string; dynamic: boolean; spread: boolean; }`

Describes a route segment.

#### `RoutePart.content`

[Section titled “RoutePart.content”](#routepartcontent)

**Type:** `string`

Specifies the parameter name for the route. For example:

- `about.astro` has the name `about`
- `[slug].astro` has the name `slug`
- `[...id].astro` has the name `id`

#### `RoutePart.dynamic`

[Section titled “RoutePart.dynamic”](#routepartdynamic)

**Type:** `boolean`

Whether the route is dynamic or not.

#### `RoutePart.spread`

[Section titled “RoutePart.spread”](#routepartspread)

**Type:** `boolean`

Whether the dynamic route uses the spread syntax or not.

### `RouteType`

[Section titled “RouteType”](#routetype)

**Type:** `'page' | 'endpoint' | 'redirect' | 'fallback'`

A union of supported route types:

- `page`: a route that lives in the file system, usually an Astro component
- `endpoint`: a route that lives in the file system, usually a JS file that exposes endpoints methods
- `redirect`: a route points to another route that lives in the file system
- `fallback`: a route that doesn’t exist in the file system that needs to be handled with other means, usually a middleware

### `SSRComponentMetadata`

[Section titled “SSRComponentMetadata”](#ssrcomponentmetadata)

**Type:** `{ propagation: PropagationHint; containsHead: boolean; }`

Describes the build metadata of a component rendered by the server.

#### `SSRComponentMetadata.propagation`

[Section titled “SSRComponentMetadata.propagation”](#ssrcomponentmetadatapropagation)

**Type:** `'none' | 'self' | 'in-tree'`

A description of how to render head content from this component, including whether the Astro runtime needs to wait for a component:

- `none`: The component does not propagate the head content.
- `self`: The component appends the head content.
- `in-tree`: Another component within this component’s dependency tree appends the head content.

#### `SSRComponentMetadata.containsHead`

[Section titled “SSRComponentMetadata.containsHead”](#ssrcomponentmetadatacontainshead)

**Type:** `boolean`

Determines whether the component contains the head content.

### `SSRLoadedRenderer`

[Section titled “SSRLoadedRenderer”](#ssrloadedrenderer)

**Type:** `{ name: string; clientEntrypoint?: string | URL; ssr: SSRLoadedRendererValue; }`

Describes a renderer available for the server to use. This is a subset of [`AstroRenderer`](#astrorenderer) with additional properties.

#### `SSRLoadedRenderer.ssr`

[Section titled “SSRLoadedRenderer.ssr”](#ssrloadedrendererssr)

**Type:** [`SSRLoadedRendererValue`](#ssrloadedrenderervalue)

Defines the functions and configuration used by the server for this framework.

### `SSRLoadedRendererValue`

[Section titled “SSRLoadedRendererValue”](#ssrloadedrenderervalue)

Contains the functions and configuration necessary to render components on the server from a specific UI framework.

#### `SSRLoadedRendererValue.name`

[Section titled “SSRLoadedRendererValue.name”](#ssrloadedrenderervaluename)

**Type:** `string`

Specifies the name identifier for the renderer.

#### `SSRLoadedRendererValue.check()`

[Section titled “SSRLoadedRendererValue.check()”](#ssrloadedrenderervaluecheck)

**Type:** `AsyncRendererComponentFn<boolean>`

Determines whether the renderer should handle the component.

#### `SSRLoadedRendererValue.renderToStaticMarkup()`

[Section titled “SSRLoadedRendererValue.renderToStaticMarkup()”](#ssrloadedrenderervaluerendertostaticmarkup)

**Type:** `AsyncRendererComponentFn<{ html: string; attrs?: Record<string, string>; }>`

Renders a framework component to static HTML markup on the server.

#### `SSRLoadedRendererValue.supportsAstroStaticSlot`

[Section titled “SSRLoadedRendererValue.supportsAstroStaticSlot”](#ssrloadedrenderervaluesupportsastrostaticslot)

**Type:** `boolean`

**Added in:** `astro@2.5.0`

Indicates whether the renderer supports Astro’s static slot optimization. When true, Astro prevents the removal of nested slots within islands.

#### `SSRLoadedRendererValue.renderHydrationScript()`

[Section titled “SSRLoadedRendererValue.renderHydrationScript()”](#ssrloadedrenderervaluerenderhydrationscript)

**Type:** `() => string`

**Added in:** `astro@4.1.0`

Returns a framework-specific hydration script that must be injected into the HTML before the first component that uses this renderer.

### `SSRManifest`

[Section titled “SSRManifest”](#ssrmanifest)

An object containing build configuration and project metadata that the server adapters use at runtime to serve on-demand rendered pages.

#### `SSRManifest.hrefRoot`

[Section titled “SSRManifest.hrefRoot”](#ssrmanifesthrefroot)

**Type:** `string`

**Added in:** `astro@4.12.0`

Specifies the root path used to generate URLs.

#### `SSRManifest.adapterName`

[Section titled “SSRManifest.adapterName”](#ssrmanifestadaptername)

**Type:** `string`

Defines the name of the [server adapter](/en/guides/on-demand-rendering/#server-adapters) used for on-demand rendering.

#### `SSRManifest.routes`

[Section titled “SSRManifest.routes”](#ssrmanifestroutes)

**Type:** `RouteInfo[]`

A list of information about the routes available in this project. Each entry contains the following properties.

##### `RouteInfo.routeData`

[Section titled “RouteInfo.routeData”](#routeinforoutedata)

**Type:** [`RouteData`](#routedata)

An object describing known information about a route.

##### `RouteInfo.file`

[Section titled “RouteInfo.file”](#routeinfofile)

**Type:** `string`

Specifies the file path to the built route entrypoint.

##### `RouteInfo.links`

[Section titled “RouteInfo.links”](#routeinfolinks)

**Type:** `string[]`

Defines a list of [HTML `link` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) required by this route.

##### `RouteInfo.scripts`

[Section titled “RouteInfo.scripts”](#routeinfoscripts)

**Type:** `Array<{ children: string; stage: string } | { type: 'inline' | 'external'; value: string }>`

Defines a list of scripts associated with this route. This includes both integration-injected scripts with `children` and `stage` properties and hoisted scripts with `type` and `value` properties.

##### `RouteInfo.styles`

[Section titled “RouteInfo.styles”](#routeinfostyles)

**Type:** `Array<{ type: "inline"; content: string; } | { type: "external"; src: string; }>`

**Added in:** `astro@2.4.0`

Defines the list of stylesheets associated with this route. This includes both inline styles and stylesheet URLs.

#### `SSRManifest.site`

[Section titled “SSRManifest.site”](#ssrmanifestsite)

**Type:** `string`

Specifies the [configured `site`](/en/reference/configuration-reference/#site).

#### `SSRManifest.base`

[Section titled “SSRManifest.base”](#ssrmanifestbase)

**Type:** `string`

Specifies the [configured `base` path](/en/reference/configuration-reference/#base) to deploy to.

#### `SSRManifest.userAssetsBase`

[Section titled “SSRManifest.userAssetsBase”](#ssrmanifestuserassetsbase)

**Type:** `string | undefined`

**Added in:** `astro@5.3.1`

Specifies the base path to use in development mode for user-generated assets, such as scripts and styles.

#### `SSRManifest.trailingSlash`

[Section titled “SSRManifest.trailingSlash”](#ssrmanifesttrailingslash)

**Type:** [`AstroConfig['trailingSlash']`](/en/reference/configuration-reference/#trailingslash)

**Added in:** `astro@3.5.4`

Specifies the [configured behavior for trailing slashes](/en/reference/configuration-reference/#trailingslash) in development mode and for on-demand rendered pages.

#### `SSRManifest.buildFormat`

[Section titled “SSRManifest.buildFormat”](#ssrmanifestbuildformat)

**Type:** [`NonNullable<AstroConfig['build']>['format']`](/en/reference/configuration-reference/#buildformat)

**Added in:** `astro@4.2.2`

Specifies the [configured output file format](/en/reference/configuration-reference/#buildformat).

#### `SSRManifest.compressHTML`

[Section titled “SSRManifest.compressHTML”](#ssrmanifestcompresshtml)

**Type:** `boolean`

**Added in:** `astro@2.7.2`

Determines whether [HTML minification is enabled in the project configuration](/en/reference/configuration-reference/#compresshtml).

#### `SSRManifest.assetsPrefix`

[Section titled “SSRManifest.assetsPrefix”](#ssrmanifestassetsprefix)

**Type:** `string | ({ fallback: string; } & Record<string, string>) | undefined`

**Added in:** `astro@2.3.1`

Specifies the [configured prefix for Astro-generated asset links](/en/reference/configuration-reference/#buildassetsprefix).

#### `SSRManifest.renderers`

[Section titled “SSRManifest.renderers”](#ssrmanifestrenderers)

**Type:** `SSRLoadedRenderer[]`

A list of renderers (e.g. React, Vue, Svelte, MDX) available for the server to use.

#### `SSRManifest.clientDirectives`

[Section titled “SSRManifest.clientDirectives”](#ssrmanifestclientdirectives)

**Type:** `Map<string, string>`

**Added in:** `astro@2.5.0`

Defines a mapping of client directive names (e.g. `load`, `visible`) to their implementation code. This includes both [built-in client directives](/en/reference/directives-reference/#client-directives) and [custom client directives](/en/reference/directives-reference/#custom-client-directives).

#### `SSRManifest.entryModules`

[Section titled “SSRManifest.entryModules”](#ssrmanifestentrymodules)

**Type:** `Record<string, string>`

Defines a mapping of entrypoints to their output file paths.

#### `SSRManifest.inlinedScripts`

[Section titled “SSRManifest.inlinedScripts”](#ssrmanifestinlinedscripts)

**Type:** `Map<string, string>`

**Added in:** `astro@4.5.0`

Defines a mapping of script identifiers to their content for scripts that will be inlined in the HTML output.

#### `SSRManifest.assets`

[Section titled “SSRManifest.assets”](#ssrmanifestassets)

**Type:** `Set<string>`

Defines a set of file paths for all assets that are part of the build.

#### `SSRManifest.componentMetadata`

[Section titled “SSRManifest.componentMetadata”](#ssrmanifestcomponentmetadata)

**Type:** `Map<string, SSRComponentMetadata>`

**Added in:** `astro@2.1.7`

Defines a mapping of component identifiers to their build metadata. Each entry contains information about the [`propagation`](#ssrcomponentmetadatapropagation) behavior and whether it contains head elements.

#### `SSRManifest.pageModule`

[Section titled “SSRManifest.pageModule”](#ssrmanifestpagemodule)

**Type:** `{ page: ImportComponentInstance; onRequest?: MiddlewareHandler; renderers: SSRLoadedRenderer[]; }`

**Added in:** `astro@2.7.0`

Specifies information about a page module.

##### `SSRManifest.pageModule.page()`

[Section titled “SSRManifest.pageModule.page()”](#ssrmanifestpagemodulepage)

**Type:** `() => Promise<ComponentInstance>`

A function to retrieve an instance of the page component.

##### `SSRManifest.pageModule.onRequest()`

[Section titled “SSRManifest.pageModule.onRequest()”](#ssrmanifestpagemoduleonrequest)

**Type:** [`MiddlewareHandler`](/en/reference/modules/astro-middleware/#middlewarehandler)

**Added in:** `astro@3.0.3`

An [Astro middleware function](/en/reference/modules/astro-middleware/#onrequest) when defined in the user project.

##### `SSRManifest.pageModule.renderers`

[Section titled “SSRManifest.pageModule.renderers”](#ssrmanifestpagemodulerenderers)

**Type:** `SSRLoadedRenderer[]`

A list of renderers that a server can use for this page.

#### `SSRManifest.pageMap`

[Section titled “SSRManifest.pageMap”](#ssrmanifestpagemap)

**Type:** `Map<string, () => Promise<typeof pageModule>>`

Defines a mapping of component paths to their importable instances.

#### `SSRManifest.serverIslandMap`

[Section titled “SSRManifest.serverIslandMap”](#ssrmanifestserverislandmap)

**Type:** `Map<string, () => Promise<ComponentInstance>>`

**Added in:** `astro@4.12.0`

Defines a mapping of server island IDs to their component instances.

#### `SSRManifest.serverIslandNameMap`

[Section titled “SSRManifest.serverIslandNameMap”](#ssrmanifestserverislandnamemap)

**Type:** `Map<string, string>`

**Added in:** `astro@4.12.0`

Defines a mapping of server island component paths to their assigned names.

#### `SSRManifest.key`

[Section titled “SSRManifest.key”](#ssrmanifestkey)

**Type:** `Promise<CryptoKey>`

**Added in:** `astro@4.13.4`

Determines the [cryptographic key](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) used for encrypting server island props.

#### `SSRManifest.i18n`

[Section titled “SSRManifest.i18n”](#ssrmanifesti18n)

**Type:** `SSRManifestI18n | undefined`

**Added in:** `astro@3.5.0`

Specifies the resolved [`i18n` configuration](/en/reference/configuration-reference/#i18n) when enabled in the project.

##### `SSRManifest.i18n.strategy`

[Section titled “SSRManifest.i18n.strategy”](#ssrmanifesti18nstrategy)

**Type:** `"manual" | "pathname-prefix-always" | "pathname-prefix-other-locales" | "pathname-prefix-always-no-redirect" | "domains-prefix-always" | "domains-prefix-other-locales" | "domains-prefix-always-no-redirect"`

Defines the [i18n routing strategy](/en/reference/configuration-reference/#i18nrouting) configured. This determines how locales are handled in URLs and whether redirects occur.

##### `SSRManifest.i18n.locales`

[Section titled “SSRManifest.i18n.locales”](#ssrmanifesti18nlocales)

**Type:** `Locales`

Specifies a list of [supported locales configured in the project](/en/reference/configuration-reference/#i18nlocales).

##### `SSRManifest.i18n.defaultLocale`

[Section titled “SSRManifest.i18n.defaultLocale”](#ssrmanifesti18ndefaultlocale)

**Type:** `string`

Determines the [default locale configured in the project](/en/reference/configuration-reference/#i18ndefaultlocale).

##### `SSRManifest.i18n.fallback`

[Section titled “SSRManifest.i18n.fallback”](#ssrmanifesti18nfallback)

**Type:** `Record<string, string> | undefined`

Specifies a mapping of locales to their fallback locales as [configured in `i18n.fallback`](/en/reference/configuration-reference/#i18nfallback).

##### `SSRManifest.i18n.fallbackType`

[Section titled “SSRManifest.i18n.fallbackType”](#ssrmanifesti18nfallbacktype)

**Type:** `"redirect" | "rewrite"`

Determines the [configured fallback strategy for the project](/en/reference/configuration-reference/#i18nroutingfallbacktype).

##### `SSRManifest.i18n.domainLookupTable`

[Section titled “SSRManifest.i18n.domainLookupTable”](#ssrmanifesti18ndomainlookuptable)

**Type:** `Record<string, string>`

A mapping of [configured domains](/en/reference/configuration-reference/#i18ndomains) to their associated locales.

#### `SSRManifest.middleware`

[Section titled “SSRManifest.middleware”](#ssrmanifestmiddleware)

**Type:** `() => Promise<AstroMiddlewareInstance> | AstroMiddlewareInstance`

**Added in:** `astro@4.2.5`

Defines an instance to load the middleware.

#### `SSRManifest.actions`

[Section titled “SSRManifest.actions”](#ssrmanifestactions)

**Type:** `() => Promise<{ server: Record<string, ActionClient>; }> | { server: Record<string, ActionClient>; }`

**Added in:** `astro@5.4.2`

An object, or a function that returns an object, with a `server` property that maps action names to their callable functions.

#### `SSRManifest.checkOrigin`

[Section titled “SSRManifest.checkOrigin”](#ssrmanifestcheckorigin)

**Type:** `boolean`

**Added in:** `astro@4.6.0`

Determines whether [origin checking is enabled in the security configuration](/en/reference/configuration-reference/#securitycheckorigin).

#### `SSRManifest.allowedDomains`

[Section titled “SSRManifest.allowedDomains”](#ssrmanifestalloweddomains)

**Type:** `Partial<RemotePattern>[]`

Specifies the [configured list of permitted host patterns](/en/reference/configuration-reference/#securityalloweddomains) for incoming requests when using on-demand rendering.

#### `SSRManifest.sessionConfig`

[Section titled “SSRManifest.sessionConfig”](#ssrmanifestsessionconfig)

**Type:** `SessionConfig<TDriver> & { driverModule?: () => Promise<{ default: () => unstorage.Driver }>; }`

**Added in:** `astro@5.1.0`

An object containing the [resolved session configuration](/en/reference/configuration-reference/#session-options) and an additional property defining the driver in use.

#### `SSRManifest.cacheDir`

[Section titled “SSRManifest.cacheDir”](#ssrmanifestcachedir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Specifies the [configured directory for caching build artifacts](/en/reference/configuration-reference/#cachedir).

#### `SSRManifest.srcDir`

[Section titled “SSRManifest.srcDir”](#ssrmanifestsrcdir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Specifies the [configured directory that Astro will read the site from](/en/reference/configuration-reference/#srcdir).

#### `SSRManifest.outDir`

[Section titled “SSRManifest.outDir”](#ssrmanifestoutdir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Specifies the [configured directory in which to write the final build](/en/reference/configuration-reference/#outdir).

#### `SSRManifest.publicDir`

[Section titled “SSRManifest.publicDir”](#ssrmanifestpublicdir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Specifies the [configured directory for the static assets](/en/reference/configuration-reference/#publicdir).

#### `SSRManifest.buildClientDir`

[Section titled “SSRManifest.buildClientDir”](#ssrmanifestbuildclientdir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Determines the path where client-side build artifacts (e.g. JavaScript, CSS) are output within the build directory.

#### `SSRManifest.buildServerDir`

[Section titled “SSRManifest.buildServerDir”](#ssrmanifestbuildserverdir)

**Type:** `string | URL`

**Added in:** `astro@5.2.0`

Determines the path where server-side build artifacts are output within the build directory.

#### `SSRManifest.csp`

[Section titled “SSRManifest.csp”](#ssrmanifestcsp)

**Type:** `SSRManifestCSP | undefined`

**Added in:** `astro@5.9.0`

Describes the [Content Security Policy configuration](/en/reference/experimental-flags/csp/).

##### `SSRManifest.csp.cspDestination`

[Section titled “SSRManifest.csp.cspDestination”](#ssrmanifestcspcspdestination)

**Type:** `'adapter' | 'meta' | 'header' | undefined`

Specifies whether CSP directives should be injected as a `meta` element, as a response `header`, or by the [`adapter` when it supports setting response headers](/en/reference/adapter-reference/#experimentalstaticheaders).

##### `SSRManifest.csp.algorithm`

[Section titled “SSRManifest.csp.algorithm”](#ssrmanifestcspalgorithm)

**Type:** `'SHA-256' | 'SHA-384' | 'SHA-512'`

Specifies the [configured hash function](/en/reference/experimental-flags/csp/#algorithm).

##### `SSRManifest.csp.scriptHashes`

[Section titled “SSRManifest.csp.scriptHashes”](#ssrmanifestcspscripthashes)

**Type:** `string[]`

Specifies a list of generated hashes for project scripts and [user-supplied hashes](/en/reference/experimental-flags/csp/#hashes) for external scripts.

##### `SSRManifest.csp.scriptResources`

[Section titled “SSRManifest.csp.scriptResources”](#ssrmanifestcspscriptresources)

**Type:** `string[]`

Specifies a list of valid sources combining the [configured script resources](/en/reference/experimental-flags/csp/#resources) and the [injected script resources](/en/reference/experimental-flags/csp/#cspinsertscriptresource).

##### `SSRManifest.csp.isStrictDynamic`

[Section titled “SSRManifest.csp.isStrictDynamic”](#ssrmanifestcspisstrictdynamic)

**Type:** `boolean`

Determines whether support for [dynamic script injection is enabled in the configuration](/en/reference/experimental-flags/csp/#strictdynamic).

##### `SSRManifest.csp.styleHashes`

[Section titled “SSRManifest.csp.styleHashes”](#ssrmanifestcspstylehashes)

**Type:** `string[]`

Specifies a list of generated hashes for project styles and [user-supplied hashes](/en/reference/experimental-flags/csp/#hashes) for external styles.

##### `SSRManifest.csp.styleResources`

[Section titled “SSRManifest.csp.styleResources”](#ssrmanifestcspstyleresources)

**Type:** `string[]`

Specifies a list of valid sources combining the [configured style resources](/en/reference/experimental-flags/csp/#resources) and the [injected style resources](/en/reference/experimental-flags/csp/#cspinsertstyleresource).

##### `SSRManifest.csp.directives`

[Section titled “SSRManifest.csp.directives”](#ssrmanifestcspdirectives)

**Type:** `CspDirective[]`

Specifies the [configured list of valid sources](/en/reference/experimental-flags/csp/#directives) for specific content types.

#### `SSRManifest.internalFetchHeaders`

[Section titled “SSRManifest.internalFetchHeaders”](#ssrmanifestinternalfetchheaders)

**Type:** `Record<string, string>`

**Added in:** `astro@5.15.0`

Specifies the headers that are automatically added to internal fetch requests made during rendering.

### `ValidRedirectStatus`

[Section titled “ValidRedirectStatus”](#validredirectstatus)

**Type:** `301 | 302 | 303 | 307 | 308 | 300 | 304`

A union of supported redirect status code.

### Deprecated type imports

[Section titled “Deprecated type imports”](#deprecated-type-imports)

The following types are deprecated and will be removed in a future major version:

#### `IntegrationRouteData`

[Section titled “IntegrationRouteData”](#integrationroutedata)

Caution

This type is deprecated since v5.0. Use [`IntegrationResolvedRoute`](#integrationresolvedroute) instead.

A smaller version of the [`RouteData`](#routedata) that is used in the integrations.

```ts
type IntegrationRouteData = Omit<
  RouteData,
  'isIndex' | 'fallbackRoutes' | 'redirectRoute' | 'origin'
> & {
  redirectRoute?: IntegrationRouteData;
};
```

##### `redirectRoute`

[Section titled “redirectRoute”](#redirectroute)

**Type:** `IntegrationRouteData | undefined`

When the value of [`RouteData.type`](#routedatatype) is `redirect`, the value will contains the `IntegrationRouteData` of the route to redirect to. Otherwise, the value will be undefined.

## Allow installation with `astro add`

[Section titled “Allow installation with astro add”](#allow-installation-with-astro-add)

[The `astro add` command](/en/reference/cli-reference/#astro-add) allows users to easily add integrations and adapters to their project. If you want *your* integration to be installable with this tool, **add `astro-integration` to the `keywords` field in your `package.json`**:

```json
{
  "name": "example",
  "keywords": ["astro-integration"],
}
```

Once you [publish your integration to npm](https://docs.npmjs.com/cli/v8/commands/npm-publish), running `astro add example` will install your package with any peer dependencies specified in your `package.json`. This will also apply your integration to the user’s `astro.config.*` like so:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import example from 'example';


export default defineConfig({
+  integrations: [example()],
})
```

Caution

This assumes your integration definition is 1) a `default` export and 2) a function. Ensure this is true before adding the `astro-integration` keyword!

## Integration Ordering

[Section titled “Integration Ordering”](#integration-ordering)

All integrations are run in the order that they are configured. For instance, for the array `[react(), svelte()]` in a user’s `astro.config.*`, `react` will run before `svelte`.

Your integration should ideally run in any order. If this isn’t possible, we recommend documenting that your integration needs to come first or last in your user’s `integrations` configuration array.

## Combine integrations into presets

[Section titled “Combine integrations into presets”](#combine-integrations-into-presets)

An integration can also be written as a collection of multiple, smaller integrations. We call these collections **presets.** Instead of creating a factory function that returns a single integration object, a preset returns an *array* of integration objects. This is useful for building complex features out of multiple integrations.

```js
integrations: [
  // Example: where examplePreset() returns: [integrationOne, integrationTwo, ...etc]
  examplePreset()
]
```

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Build your own Astro Integrations](https://www.freecodecamp.org/news/how-to-use-the-astro-ui-framework/#chapter-8-build-your-own-astro-integrations-1) - by Emmanuel Ohans on FreeCodeCamp
- [Astro Integration Template](https://github.com/florian-lefebvre/astro-integration-template) - by Florian Lefebvre on GitHub
