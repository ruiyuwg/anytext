## Deprecated

[Section titled “Deprecated”](#deprecated)

The following deprecated features are no longer supported and are no longer documented. Please update your project accordingly.

Some deprecated features may temporarily continue to function until they are completely removed. Others may silently have no effect, or throw an error prompting you to update your code.

### Deprecated: `Astro.glob()`

[Section titled “Deprecated: Astro.glob()”](#deprecated-astroglob)

[Implementation PR: Deprecate glob (#11826)](https://github.com/withastro/astro/pull/11826)

In Astro v4.x, you could use `Astro.glob()` in your `.astro` components to query multiple files in your project. This had some limitations (where it could be used, performance, etc.), and using querying functions from the Content Collections API or Vite’s own `import.meta.glob()` often provided more function and flexibility.

Astro 5.0 deprecates `Astro.glob()` in favor of using `getCollection()` to query your collections, and `import.meta.glob()` to query other source files in your project.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-3)

Replace all use of `Astro.glob()` with `import.meta.glob()`. Note that `import.meta.glob()` no longer returns a `Promise`, so you may have to update your code accordingly. You should not require any updates to your [glob patterns](/en/guides/imports/#glob-patterns).

src/pages/blog.astro

```diff
---
-const posts = await Astro.glob('./posts/*.md');
+const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
---


{posts.map((post) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
```

Where appropriate, consider using [content collections](/en/guides/content-collections/) to organize your content, which has its own newer, more performant querying functions.

You may also wish to consider using glob packages from NPM, such as [`fast-glob`](https://www.npmjs.com/package/fast-glob).

Learn more about [importing files with `import.meta.glob`](/en/guides/imports/#importmetaglob).

### Deprecated: `functionPerRoute` (Adapter API)

[Section titled “Deprecated: functionPerRoute (Adapter API)”](#deprecated-functionperroute-adapter-api)

[Implementation PR: Remove functionPerRoute option (#11714)](https://github.com/withastro/astro/pull/11714)

In Astro v4.x, you could opt into creating a separate file for each route defined in the project, mirroring your `src/pages/` directory in the build folder. By default, Astro emitted a single `entry.mjs` file, which was responsible for emitting the rendered page on each request.

Astro v5.0 removes the option to opt out of the default behavior. This behavior is now standard, and non-configurable.

Remove the `functionPerRoute` property from your `adapterFeatures` configuration. It is no longer available.

my-adapter.mjs

```diff
export default function createIntegration() {
  return {
    name: '@matthewp/my-adapter',
    hooks: {
      'astro:config:done': ({ setAdapter }) => {
        setAdapter({
          name: '@matthewp/my-adapter',
          serverEntrypoint: '@matthewp/my-adapter/server.js',
          adapterFeatures: {
-              functionPerRoute: true
          }
        });
      },
    },
  };
}
```

Learn more about [the Adapter API](/en/reference/adapter-reference/) for building adapter integrations.

### Deprecated: `routes` on `astro:build:done` hook (Integration API)

[Section titled “Deprecated: routes on astro:build:done hook (Integration API)”](#deprecated-routes-on-astrobuilddone-hook-integration-api)

[Implementation PR: feat(next): astro:routes:resolved (#12329)](https://github.com/withastro/astro/pull/12329)

In Astro v4.x, integrations accessed routes from the `astro:build:done` hook.

Astro v5.0 deprecates the `routes` array passed to this hook. Instead, it exposes a new `astro:routes:resolved` hook that runs before `astro:config:done`, and whenever a route changes in development. It has all the same properties of the deprecated `routes` list, except `distURL` which is only available during build.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-4)

Remove any instance of `routes` passed to `astro:build:done` and replace it with the new `astro:routes:resolved` hook. Access `distURL` on the newly exposed `assets` map:

my-integration.mjs

```diff
const integration = () => {
    let routes
    return {
        name: 'my-integration',
        hooks: {
            +'astro:routes:resolved': (params) => {
                +routes = params.routes
            },
            'astro:build:done': ({
                -routes
                +assets
            }) => {
                for (const route of routes) {
                    const distURL = assets.get(route.pattern)
                    if (distURL) {
                        +Object.assign(route, { distURL })
                    }
                }
                console.log(routes)
            }
        }
    }
}
```

Learn more about [the Integration API `astro:routes:resolved` hook](/en/reference/integrations-reference/#astroroutesresolved) for building integrations.
