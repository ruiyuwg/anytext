## Breaking Changes

[Section titled “Breaking Changes”](#breaking-changes)

The following changes are considered breaking changes in Astro v5.0. Breaking changes may or may not provide temporary backwards compatibility. If you were using these features, you may have to update your code as recommended in each entry.

### Renamed: `<ViewTransitions />` component

[Section titled “Renamed: \ component”](#renamed-viewtransitions--component)

[Implementation PR: Rename the ViewTransitions component to ClientRouter (#11980)](https://github.com/withastro/astro/pull/11980)

In Astro 4.x, Astro’s View Transitions API included a `<ViewTransitions />` router component to enable client-side routing, page transitions, and more.

Astro 5.0 renames this component to `<ClientRouter />` to clarify the role of the component within the API. This makes it more clear that the features you get from Astro’s `<ClientRouter />` routing component are slightly different from the native CSS-based MPA router.

No functionality has changed. This component has only changed its name.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-13)

Replace all occurrences of the `ViewTransitions` import and component with `ClientRouter`:

src/layouts/MyLayout.astro

```diff
-import { ViewTransitions } from 'astro:transitions';
+import { ClientRouter } from 'astro:transitions';


<html>
  <head>
    ...
   -<ViewTransitions />
   +<ClientRouter />
  </head>
</html>
```

Read more about [view transitions and client-side routing in Astro](/en/guides/view-transitions/).

### Changed: TypeScript configuration

[Section titled “Changed: TypeScript configuration”](#changed-typescript-configuration)

[Implementation PR: better tsconfig (#11859)](https://github.com/withastro/astro/pull/11859)

In Astro v4.x, Astro relied on a `src/env.d.ts` file for type inferencing and defining modules for features that relied on generated types.

Astro 5.0 instead uses a `.astro/types.d.ts` file for type inferencing, and now recommends setting `include` and `exclude` in `tsconfig.json` to benefit from Astro types and avoid checking built files.

Running `astro sync` no longer creates, nor updates, `src/env.d.ts` as it is not required for type-checking standard Astro projects.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-14)

To update your project to Astro’s recommended TypeScript settings, add the following `include` and `exclude` properties to your existing `tsconfig.json`:

tsconfig.json

```diff
{
  "extends": "astro/tsconfigs/base",
  +"include": [".astro/types.d.ts", "**/*"],
  +"exclude": ["dist"]
}
```

Note that `src/env.d.ts` is only necessary if you have added custom configurations, or if you’re not using a `tsconfig.json` file.

Read more about [TypeScript configuration in Astro](/en/guides/typescript/#setup).

### Changed: Actions submitted by HTML forms no longer use cookie redirects

[Section titled “Changed: Actions submitted by HTML forms no longer use cookie redirects”](#changed-actions-submitted-by-html-forms-no-longer-use-cookie-redirects)

[Implementation PR: Actions middleware (#12373)](https://github.com/withastro/astro/pull/12373)

In Astro 4.x, actions called from an HTML form would trigger a redirect with the result forwarded using cookies. This caused issues for large form errors and return values that exceeded the 4 KB limit of cookie-based storage.

Astro 5.0 now renders the result of an action as a POST result without any forwarding. This will introduce a “confirm form resubmission?” dialog when a user attempts to refresh the page, though it no longer imposes a 4 KB limit on action return value.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-15)

You should update handling for action results that relies on redirects, and optionally address the “confirm form resubmission?” dialog with middleware.

##### To redirect to the previous route on error

[Section titled “To redirect to the previous route on error”](#to-redirect-to-the-previous-route-on-error)

If your HTML form action is directed to a different route (i.e. `action={"/success-page" + actions.name}`), Astro will no longer redirect to the previous route on error. You can implement this behavior manually using redirects from your Astro component. This example instead redirects to a new route on success, and handles errors on the current page otherwise:

src/pages/newsletter.astro

```diff
---
import { actions } from 'astro:actions';


+const result = Astro.getActionResult(actions.newsletter);
+if (!result?.error) {
  +// Embed relevant result data in the URL if needed
  +// example: redirect(`/confirmation?email=${result.data.email}`);
  +return redirect('/confirmation');
+}
---


<form method="POST" action={'/confirmation' + actions.newsletter}>
  <label>E-mail <input required type="email" name="email" /></label>
  <button>Sign up</button>
</form>
```

##### (Optional) To remove the confirm dialog on refresh

[Section titled “(Optional) To remove the confirm dialog on refresh”](#optional-to-remove-the-confirm-dialog-on-refresh)

To address the “confirm form resubmission?” dialog on refresh, or to preserve action results across sessions, you can now [customize action result handling from middleware](/en/guides/actions/#advanced-persist-action-results-with-a-session).

We recommend using a session storage provider [as described in our Netlify Blob example](/en/guides/actions/#advanced-persist-action-results-with-a-session). However, if you prefer the cookie forwarding behavior from 4.X and accept the 4 KB size limit, you can implement the pattern as shown in this sample snippet:

src/middleware.ts

```ts
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  // Skip requests for prerendered pages
  if (context.isPrerendered) return next();


  const { action, setActionResult, serializeActionResult } = getActionContext(context);


  // If an action result was forwarded as a cookie, set the result
  // to be accessible from `Astro.getActionResult()`
  const payload = context.cookies.get('ACTION_PAYLOAD');
  if (payload) {
    const { actionName, actionResult } = payload.json();
    setActionResult(actionName, actionResult);
    context.cookies.delete('ACTION_PAYLOAD', { path: '/' });
    return next();
  }


  // If an action was called from an HTML form action,
  // call the action handler and redirect with the result as a cookie.
  if (action?.calledFrom === 'form') {
    const actionResult = await action.handler();


    context.cookies.set('ACTION_PAYLOAD', {
      actionName: action.name,
      actionResult: serializeActionResult(actionResult),
    }, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60
    });


    if (actionResult.error) {
    // Redirect back to the previous page on error
      const referer = context.request.headers.get('Referer');
      if (!referer) {
        throw new Error('Internal: Referer unexpectedly missing from Action POST request.');
      }
      return context.redirect(referer);
    }
    // Redirect to the destination page on success
    return context.redirect(context.originPathname);
  }


  return next();
})
```

### Changed: `compiledContent()` is now an async function

[Section titled “Changed: compiledContent() is now an async function”](#changed-compiledcontent-is-now-an-async-function)

[Implementation PR: Remove TLA by making compiledContent async (#11782)](https://github.com/withastro/astro/pull/11782)

In Astro 4.x, top level await was included in Markdown modules. This caused some issues with custom image services and images inside Markdown, causing Node to suddenly exit with no error message.

Astro 5.0 makes the `compiledContent()` property on Markdown import an async function, requiring an `await` to resolve the content.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-16)

Update your code to use `await` when calling `compiledContent()`.

src/pages/post.astro

```diff
---
import * as myPost from "../blog/post.md";


-const content = myPost.compiledContent();
+const content = await myPost.compiledContent();
---


<Fragment set:html={content} />
```

Read more about the [`compiledContent()` function](/en/guides/markdown-content/#importing-markdown) for returning compiled Markdown.

### Changed: `astro:content` can no longer be used on the client

[Section titled “Changed: astro:content can no longer be used on the client”](#changed-astrocontent-can-no-longer-be-used-on-the-client)

[Implementation PR: Prevent usage of \`astro:content\` in the client (#11827)](https://github.com/withastro/astro/pull/11827)

In Astro 4.x, it was possible to access the `astro:content` module on the client.

Astro 5.0 removes this access as it was never intentionally exposed for client use. Using `astro:content` this way had limitations and bloated client bundles.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-17)

If you are currently using `astro:content` in the client, pass the data you need through props to your client components instead:

src/pages/blog.astro

```astro
---
import { getCollection } from 'astro:content';
import ClientComponent from '../components/ClientComponent';


const posts = await getCollection('blog');
const postsData = posts.map(post => post.data);
---


<ClientComponent posts={postsData} />
```

Read more about [the `astro:content` API](/en/reference/modules/astro-content/).

### Renamed: Shiki `css-variables` theme color token names

[Section titled “Renamed: Shiki css-variables theme color token names”](#renamed-shiki-css-variables-theme-color-token-names)

[Implementation PR: Update to new shiki token names (#11661)](https://github.com/withastro/astro/pull/11661)

In Astro v4.x, the Shiki `css-variables` theme used the `--astro-code-color-text` and `--astro-code-color-background` tokens for styling the foreground and background colors of code blocks respectively.

Astro v5.0 renames them to `--astro-code-foreground` and `--astro-code-background` respectively to better align with the Shiki v1 defaults.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-18)

You can perform a global find and replace in your project to migrate to the new token names.

src/styles/global.css

```diff
:root {
  ---astro-code-color-text: #000;
  ---astro-code-color-background: #fff;
  +--astro-code-foreground: #000;
  +--astro-code-background: #fff;
}
```

Read more about [syntax highlighting in Astro](/en/guides/syntax-highlighting/).

### Changed: internal Shiki rehype plugin for highlighting code blocks

[Section titled “Changed: internal Shiki rehype plugin for highlighting code blocks”](#changed-internal-shiki-rehype-plugin-for-highlighting-code-blocks)

[Implementation PR: Refactor createShikiHighlighter (#11825)](https://github.com/withastro/astro/pull/11825)

In Astro 4.x, Astro’s internal Shiki rehype plugin highlighted code blocks as HTML.

Astro 5.0 updates this plugin to highlight code blocks as hast. This allows a more direct Markdown and MDX processing and improves the performance when building the project. However, this may cause issues with existing Shiki transformers.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-19)

If you are using Shiki transformers passed to `markdown.shikiConfig.transformers`, you must make sure they do not use the `postprocess` hook. This hook no longer runs on code blocks in `.md` and `.mdx` files. (See [the Shiki documentation on transformer hooks](https://shiki.style/guide/transformers#transformer-hooks) for more information).

Code blocks in `.mdoc` files and Astro’s built-in `<Code />` component do not use the internal Shiki rehype plugin and are unaffected.

Read more about [syntax highlighting in Astro](/en/guides/syntax-highlighting/).

### Changed: Automatic `charset=utf-8` behavior for Markdown and MDX pages

[Section titled “Changed: Automatic charset=utf-8 behavior for Markdown and MDX pages”](#changed-automatic-charsetutf-8-behavior-for-markdown-and-mdx-pages)

[Implementation PR: Unset charset=utf-8 content-type for md/mdx pages (#12231)](https://github.com/withastro/astro/pull/12231)

In Astro 4.0, Markdown and MDX pages (located in `src/pages/`) automatically responded with `charset=utf-8` in the `Content-Type` header, which allowed rendering non-ASCII characters in your pages.

Astro 5.0 updates the behaviour to add the `<meta charset="utf-8">` tag instead, and only for pages that do not use Astro’s special `layout` frontmatter property. Similarly for MDX pages, Astro will only add the tag if the MDX content does not import a wrapping `Layout` component.

If your Markdown or MDX pages use the `layout` frontmatter property, or if the MDX page content imports a wrapping `Layout` component, then the HTML encoding will be handled by the designated layout component instead, and the `<meta charset="utf-8">` tag will not be added to your page by default.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-20)

If you require `charset=utf-8` to render your page correctly, make sure that your layout components contain the `<meta charset="utf-8">` tag. You may need to add this if you have not already done so.

Read more about [Markdown layouts](/en/basics/layouts/#markdown-layouts).

### Changed: Astro-specific metadata attached in remark and rehype plugins

[Section titled “Changed: Astro-specific metadata attached in remark and rehype plugins”](#changed-astro-specific-metadata-attached-in-remark-and-rehype-plugins)

[Implementation PR: Clean up Astro metadata in vfile.data (#11861)](https://github.com/withastro/astro/pull/11861)

In Astro 4.x, the Astro-specific metadata attached to `vfile.data` in remark and rehype plugins was attached in different locations with inconsistent names.

Astro 5 cleans up the API and the metadata is now renamed as below:

- `vfile.data.__astroHeadings` -> `vfile.data.astro.headings`
- `vfile.data.imagePaths` -> `vfile.data.astro.imagePaths`

The types of `imagePaths` has also been updated from `Set<string>` to `string[]`. The `vfile.data.astro.frontmatter` metadata is left unchanged.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-21)

While we don’t consider these APIs public, they can be accessed by remark and rehype plugins that want to re-use Astro’s metadata. If you are using these APIs, make sure to access them in the new locations.

Read more about [using Markdown plugins in Astro](/en/guides/markdown-content/#markdown-plugins).

### Changed: image endpoint configuration

[Section titled “Changed: image endpoint configuration”](#changed-image-endpoint-configuration)

[Implementation PR: Allow customising the route of the image endpoint (#11908)](https://github.com/withastro/astro/pull/11908)

In Astro 4.x, you could set an endpoint in your `image` configuration to use for image optimization.

Astro 5.0 allows you to customize a `route` and `entrypoint` of the `image.endpoint` config. This can be useful in niche situations where the default route `/_image` conflicts with an existing route or your local server setup.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-22)

If you had previously customized `image.endpoint`, move this endpoint to the new `endpoint.entrypoint` property. Optionally, you may customize a `route`:

astro.config.mjs

```diff
import { defineConfig } from "astro/config";


defineConfig({
  image: {
-    endpoint: './src/image-endpoint.ts',
+    endpoint: {
+      route: "/image",
+      entrypoint: "./src/image_endpoint.ts"
+    }
  },
})
```

Read more about [setting an endpoint to use for image optimization](/en/reference/configuration-reference/#imageendpoint).

### Changed: `build.client` and `build.server` resolve behavior

[Section titled “Changed: build.client and build.server resolve behavior”](#changed-buildclient-and-buildserver-resolve-behavior)

[Implementation PR: Fix build.client and build.server resolve behaviour (#11916)](https://github.com/withastro/astro/pull/11916)

In Astro v4.x, the `build.client` and `build.server` options were documented to resolve relatively from the `outDir` option, but it didn’t always work as expected.

Astro 5.0 fixes the behavior to correctly resolve from the `outDir` option. For example, if `outDir` is set to `./dist/nested/`, then by default:

- `build.client` will resolve to `<root>/dist/nested/client/`
- `build.server` will resolve to `<root>/dist/nested/server/`

Previously the values were incorrectly resolved:

- `build.client` was resolved to `<root>/dist/nested/dist/client/`
- `build.server` was resolved to `<root>/dist/nested/dist/server/`

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-23)

If you were relying on the previous build paths, make sure that your project code is updated to the new build paths.

Read more about [`build` configuration options in Astro](/en/reference/configuration-reference/#build-options).

### Changed: JS dependencies in config file are no longer processed by Vite

[Section titled “Changed: JS dependencies in config file are no longer processed by Vite”](#changed-js-dependencies-in-config-file-are-no-longer-processed-by-vite)

[Implementation PR: Set external: true when loading astro config (#11819)](https://github.com/withastro/astro/pull/11819)

In Astro 4.x, locally-linked JS dependencies (e.g. `npm link`, in a monorepo, etc) were able to use Vite features like `import.meta.glob` when imported by the Astro config file.

Astro 5 updates the Astro config loading flow to ignore processing locally-linked JS dependencies with Vite. Dependencies exporting raw TypeScript files are unaffected. Instead, these JS dependencies will be normally imported by the Node.js runtime the same way as other dependencies from `node_modules`.

This change was made as the previous behavior caused confusion among integration authors who tested against a package that worked locally, but not when published. It also restricted using CJS-only dependencies because Vite required the code to be ESM. While this change only affects JS dependencies, it’s also recommended for packages to export JavaScript instead of raw TypeScript where possible to prevent accidental Vite-specific usage as it’s an implementation detail of Astro’s config loading flow.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-24)

Make sure your locally-linked JS dependencies are built before running your Astro project. Then, the config loading should work as before.

Read more about [Vite configuration settings in Astro](/en/reference/configuration-reference/#vite).

### Changed: URLs returned by `paginate()`

[Section titled “Changed: URLs returned by paginate()”](#changed-urls-returned-by-paginate)

[Implementation PR: Add base to paginate (#11253)](https://github.com/withastro/astro/pull/11253)

In Astro v4.x, the URL returned by `paginate()` (e.g. `page.url.next`, `page.url.first`, etc.) did not include the value set for `base` in your Astro config. You had to manually prepend your configured value for `base` to the URL path.

Astro 5.0 automatically includes the `base` value in `page.url`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-25)

If you are using the `paginate()` function for these URLs, remove any existing `base` value as it is now added for you:

```diff
---
export async function getStaticPaths({ paginate }) {
  const astronautPages = [{
    astronaut: 'Neil Armstrong',
  }, {
    astronaut: 'Buzz Aldrin',
  }, {
    astronaut: 'Sally Ride',
  }, {
    astronaut: 'John Glenn',
  }];
  return paginate(astronautPages, { pageSize: 1 });
}
const { page } = Astro.props;
// `base: /'docs'` configured in `astro.config.mjs`
-const prev = "/docs" + page.url.prev;
+const prev = page.url.prev;
---
<a id="prev" href={prev}>Back</a>
```

Read more about [pagination in Astro](/en/guides/routing/#pagination).

### Changed: non-boolean HTML attribute values

[Section titled “Changed: non-boolean HTML attribute values”](#changed-non-boolean-html-attribute-values)

[Implementation PR: Fix attribute rendering for boolean values (take 2) (#11660)](https://github.com/withastro/astro/pull/11660)

In Astro v4.x, non-[boolean HTML attributes](https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML) may not have included their values when rendered to HTML.

Astro v5.0 renders the values explicitly as `="true"` or `="false"`, matching proper attribute handling in browsers.

In the following `.astro` examples, only `allowfullscreen` is a boolean attribute:

src/pages/index.astro

```astro
<!-- `allowfullscreen` is a boolean attribute -->
<p allowfullscreen={true}></p>
<p allowfullscreen={false}></p>
<!-- `inherit` is *not* a boolean attribute -->
<p inherit={true}></p>
<p inherit={false}></p>
<!-- `data-*` attributes are not boolean attributes -->
<p data-light={true}></p>
<p data-light={false}></p>
```

Astro v5.0 now preserves the full data attribute with its value when rendering the HTML of non-boolean attributes:

```diff
<p allowfullscreen></p>
<p></p>


<p inherit="true"></p>
<p inherit></p>
<p inherit="false"></p>


<p data-light></p>
<p data-light="true"></p>
<p></p>
<p data-light="false"></p>
```

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-26)

If you rely on attribute values, for example, to locate elements or to conditionally render, update your code to match the new non-boolean attribute values:

```diff
-el.getAttribute('inherit') === ''
+el.getAttribute('inherit') === 'false'


-el.hasAttribute('data-light')
+el.dataset.light === 'true'
```

Read more about [using HTML attributes in Astro](/en/reference/astro-syntax/#dynamic-attributes).

### Changed: adding values to `context.locals`

[Section titled “Changed: adding values to context.locals”](#changed-adding-values-to-contextlocals)

[Implementation PR: TODOs (#11987)](https://github.com/withastro/astro/pull/11987)

In Astro 4.x, it was possible to completely replace the entire `locals` object in middleware, API endpoints, and pages when adding new values.

Astro 5.0 requires you to append values to the existing `locals` object without deleting it. Locals in middleware, API endpoints, and pages, can no longer be completely overridden.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-27)

Where you previously were overwriting the object, you must now instead assign values to it:

src/middleware.js

```diff
-ctx.locals = {
Object.assign(ctx.locals, {
  one: 1,
  two: 2
-}
+})
```

See more about [storing data in `context.locals`](/en/guides/middleware/#storing-data-in-contextlocals).

### Changed: `params` no longer decoded

[Section titled “Changed: params no longer decoded”](#changed-params-no-longer-decoded)

[Implementation PR: decode pathname early, don't decode params (#12079)](https://github.com/withastro/astro/pull/12079)

In Astro v4.x, `params` passed to `getStaticPath()` were automatically decoded using `decodeURIComponent`.

Astro v5.0 no longer decodes the value of `params` passed to `getStaticPaths`. You must manually decode them yourself if needed.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-28)

If you were previously relying on the automatic decoding, use `decodeURI` when passing `params`.

src/pages/\[id].astro

```diff
---
export function getStaticPaths() {
  return [
-    { params: { id: "%5Bpage%5D" } },
+    { params: { id: decodeURI("%5Bpage%5D") } },
  ]
}


const { id } = Astro.params;
---
```

Note that the use of [`decodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) is discouraged for `getStaticPaths` because it decodes more characters than it should, for example `/`, `?`, `#` and more.

Read more about [creating dynamic routes with `params`](/en/guides/routing/#static-ssg-mode).

### Changed: `RouteData` type replaced by `IntegrationsRouteData` (Integrations API)

[Section titled “Changed: RouteData type replaced by IntegrationsRouteData (Integrations API)”](#changed-routedata-type-replaced-by-integrationsroutedata-integrations-api)

[Implementation PR: send \`IntegrationRouteData\` to integrations (#11864)](https://github.com/withastro/astro/pull/11864)

In Astro v4.x, the `entryPoints` type inside the `astro:build:ssr` and `astro:build:done` hooks was `RouteData`.

Astro v5.0 the `entryPoints` type is now `IntegrationRouteData`, which contains a subset of the `RouteData` type. The fields `isIndex` and `fallbackRoutes` were removed.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-29)

Update your adapter to change the type of `entryPoints` from `RouteData` to `IntegrationRouteData`.

```diff
-import type {RouteData} from 'astro';
+import type {IntegrationRouteData} from "astro"


-function useRoute(route: RouteData) {
+function useRoute(route: IntegrationRouteData) {
}
```

See the [API reference for `IntegrationRouteData`](/en/reference/integrations-reference/#integrationroutedata).

### Changed: `distURL` is now an array (Integrations API)

[Section titled “Changed: distURL is now an array (Integrations API)”](#changed-disturl-is-now-an-array-integrations-api)

[Implementation PR: send \`IntegrationRouteData\` to integrations (#11864)](https://github.com/withastro/astro/pull/11864)

In Astro v4.x, `RouteData.distURL` was `undefined` or a `URL`.

Astro v5.0 updates the shape of `IntegrationRouteData.distURL` to be `undefined` or an array of `URL`s. This fixes a previous error because a route can generate multiple files on disk, especially when using dynamic routes such as `[slug]` or `[...slug]`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-30)

Update your code to handle `IntegrationRouteData.distURL` as an array.

```diff
if (route.distURL) {
  -if (route.distURL.endsWith('index.html')) {
    -// do something
-  }
  +for (const url of route.distURL) {
    +if (url.endsWith('index.html')) {
      +// do something
+    }
+  }
}
```

See the [API reference for `IntegrationRouteData`](/en/reference/integrations-reference/#integrationroutedata).

### Changed: Arguments passed to `app.render()` (Adapter API)

[Section titled “Changed: Arguments passed to app.render() (Adapter API)”](#changed-arguments-passed-to-apprender-adapter-api)

[Implementation PR: TODOs (#11987)](https://github.com/withastro/astro/pull/11987)

In Astro 4.x, The Adapter API method `app.render()` could receive three arguments: a mandatory `request`, an object of options or a `routeData` object, and `locals`.

Astro 5.0 combines these last two arguments into a single options argument named `renderOptions`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-31)

Pass an object as the second argument to `app.render()`, which can include `routeData` and `locals` as properties.

```diff
-const response = await app.render(request, routeData, locals);
+const response = await app.render(request, {routeData, locals});
```

See the [Adapter API reference for `renderOptions`](/en/reference/adapter-reference/#renderoptions).

### Changed: Properties on `supportedAstroFeatures` (Adapter API)

[Section titled “Changed: Properties on supportedAstroFeatures (Adapter API)”](#changed-properties-on-supportedastrofeatures-adapter-api)

[Implementation PR: rework supportedAstroFeatures (#11806)](https://github.com/withastro/astro/pull/11806)

In Astro 4.x, `supportedAstroFeatures`, which allows adapter authors to specify which features their integration supports, included an `assets` property to specify which of Astro’s image services were supported.

Astro 5.0 replaces this property with a dedicated `sharpImageService` property, used to determine whether the adapter is compatible with the built-in sharp image service.

v5.0 also adds a new `limited` value for the different properties of `supportedAstroFeatures` for adapters, which indicates that the adapter is compatible with the feature, but with some limitations. This is useful for adapters that support a feature, but not in all cases or with all options.

Additionally, the value of the different properties on `supportedAstroFeatures` for adapters can now be objects, with `support` and `message` properties. The content of the `message` property will show a helpful message in the Astro CLI when the adapter is not compatible with a feature. This is notably useful with the new `limited` value, to explain to the user why support is limited.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-32)

If you were using the `assets` property, remove this as it is no longer available. To specify that your adapter supports the built-in sharp image service, replace this with `sharpImageService`.

You may also wish to update your supported features with the new `limited` option and include a message about your adapter’s support.

my-adapter.mjs

```diff
supportedAstroFeatures: {
-  assets: {
-    supportKind: "stable",
-    isSharpCompatible: true,
-    isSquooshCompatible: true,
-  },
+  sharpImageService: {
+    support: "limited",
+    message: 'This adapter supports the built-in sharp image service, but with some limitations.'
+  }
}
```

Read more about [specifying supported Astro features in an adapter](/en/reference/adapter-reference/#astro-features).

### Removed: Deprecated definition shape for dev toolbar apps (Dev Toolbar API)

[Section titled “Removed: Deprecated definition shape for dev toolbar apps (Dev Toolbar API)”](#removed-deprecated-definition-shape-for-dev-toolbar-apps-dev-toolbar-api)

[Implementation PR: Remove deprecated dev toolbar app shape (#11987)](https://github.com/withastro/astro/pull/11987)

In Astro 4.x, when building a dev toolbar app, it was still possible to use the previously deprecated `addDevToolbarApp(string);` signature. The `id`, `title`, and `icon` properties to define the app were then made available through the default export of the app’s `entrypoint`.

Astro 5.0 completely removes this option entirely in favor of the current object shape when defining a dev toolbar app in an integration that’s more intuitive and allows Astro to provide better errors when toolbar apps fail to load correctly.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-33)

If you were using the deprecated shape, update your dev toolbar app to use the new shape:

my-integration.mjs

```diff
-// Old shape
-addDevToolbarApp("./my-dev-toolbar-app.mjs");


+// New shape
+addDevToolbarApp({
+  id: "my-app",
+  name: "My App",
+  icon: "<svg>...</svg>",
+  entrypoint: "./my-dev-toolbar-app.mjs",
+});
```

my-dev-toolbar-app.mjs

```diff
export default {
-  id: 'my-dev-toolbar-app',
-  title: 'My Dev Toolbar App',
-  icon: '🚀',
  init() {
    // ...
  }
}
```

Read more about [developing a dev toolbar app for Astro using the Dev Toolbar API](/en/reference/dev-toolbar-app-reference/).

### Removed: configuring Typescript during `create-astro`

[Section titled “Removed: configuring Typescript during create-astro”](#removed-configuring-typescript-during-create-astro)

[Implementation PR: create-astro updates (#12083)](https://github.com/withastro/astro/pull/12083)

In Astro v4.x, it was possible to choose between Astro’s three TypeScript settings when creating a new project using `create astro`, either by answering a question or by passing an associated `--typescript` flag with the desired TypeScript setting.

Astro 5.0 updates the `create astro` CLI command to remove the TypeScript question and its associated `--typescript` flag. The “strict” preset is now the default for all new projects created with the command line and it is no longer possible to customize this at that time. However, the TypeScript template can still be changed manually in `tsconfig.json`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-34)

If you were using the `--typescript` flag with `create-astro`, remove it from your command.

- npm

  ```diff
  -npm create astro@latest -- --template <example-name> --typescript strict
  +npm create astro@latest -- --template <example-name>
  ```

- pnpm

  ```diff
  -pnpm create astro@latest --template <example-name> --typescript strict
  +pnpm create astro@latest --template <example-name>
  ```

- Yarn

  ```diff
  -yarn create astro --template <example-name> --typescript strict
  +yarn create astro --template <example-name>
  ```

See [all the available `create astro` command flags](https://github.com/withastro/astro/blob/main/packages/create-astro/README.md)

## Community Resources

[Section titled “Community Resources”](#community-resources)

Know a good resource for Astro v5.0? [Edit this page](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/upgrade-to/v5.mdx) and add a link below!

## Known Issues

[Section titled “Known Issues”](#known-issues)

Please check [Astro’s issues on GitHub](https://github.com/withastro/astro/issues/) for any reported issues, or to file an issue yourself.
