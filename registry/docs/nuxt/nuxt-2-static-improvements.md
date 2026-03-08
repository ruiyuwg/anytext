# Nuxt 2 Static Improvements

## Introduction

With Nuxt version 2.13, the [full-static mode](https://nuxt.com/blog/going-full-static) has been introduced. In addition, a new command `nuxt export` was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... \**until now.*\*

## Faster Static Deployments

With v2.14, `nuxt generate` will **automagically skip webpack build step when no code has been changed** and use the previous build using cache. This will help to drastically improve static deployments time by avoiding unnecessary builds which is usually the most time-consuming part of generation process. Cache support is **platform-agnostic** and works on Netlify, Vercel, or any other CI/CD setup that is caching `node_modules`.

:video{autoplay controls autoPlay="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate\_pjaat1.jpg"}

## Generate time: cache vs full webpack build

See the comparison in seconds between two `nuxt generate`:

- `Build` is when a webpack build is required
- `Cache` is only when the content has changed (webpack build skipped)

![Comparison between build VS cache time](https://nuxt.com/assets/blog/bar-chart-cache-build.png)

::tip
The static site generation of our projects on content changes are now **~3.6x times** faster 🚀
::

Project links: [Basic](https://github.com/pi0/nuxt-static-demo){rel=""nofollow""}, [Strapi Module Docs](https://github.com/nuxt-community/strapi-module/tree/master/docs){rel=""nofollow""}, [Content Module Docs](https://github.com/nuxt/content/tree/master/docs){rel=""nofollow""} and [Nuxt 2 Docs](https://github.com/nuxt/website-v2){rel=""nofollow""}.

## Using in your projects

1. Update `nuxt` to the latest minor version, which is v2.14.

::code-group

```bash [npm]
npm update
```

```bash [yarn]
yarn upgrade nuxt
```

::

2. Ensure `target` is `static` inside your `nuxt.config.js`

```js [nuxt.config.js]
export default {
  target: 'static'
  // ...
}
```

`nuxt generate` will behave as before to avoid breaking changes and provide legacy compatibility if you keep `target: ‘server’` or don't specify target.

3. That’s it 🙌

Now, the `nuxt generate` command will build the project only if necessary, which is the case when files inside the project have been changed. It will always re-render your routes to static HTML files, like `nuxt export` is doing already.

Now you only have to change your build command back from `nuxt build && nuxt export` to `nuxt generate` on the platform you are using. If you are using a CI, ensure that you are properly caching `node_modules`.

### Excluding Files from Cache

By default, nuxt ignores these directories so if any change happens inside them, build will not be triggered:

- Build directory (`.nuxt/`)
- Static directory (`static/`)
- Generate dist (`dist/`)
- `node_modules`
- `README.md`
- Hidden dotfiles (like `.npmrc`)

You can add more patterns using [generate.cache.ignore](https://v2.nuxt.com/docs/configuration-glossary/configuration-generate/#cache){rel=""nofollow""} option in `nuxt.config`:

```js [nuxt.config.js]
export default {
  generate: {
    cache: {
      ignore: [
        // When something changed in the docs folder, do not re-build via webpack
        'docs'
      ]
    }
  }
}
```

It is also possible to use a function for `ignore` option to override default ignore entries.

### Module Authors

What if you are developing a nuxt module that is working with files that should not trigger a rebuild? The best example is for [@nuxt/content](https://content.nuxt.com){rel=""nofollow""} module that reads markdown files from the repository. In this case, these files are used within a runtime module, which is the case when using `@nuxt/content`, the module itself can tell nuxt to ignore these files for you already so you don't have to do anything! Module authors can use the new `generate:cache:ignore` hook to do so:

```js
nuxt.hook('generate:cache:ignore', ignore => ignore.push('content'))
```

## How it works

When using the new `nuxt generate` with `static` target, a snapshot including checksum of non-ignored project files as well as nuxt version and some other configuration will be written `.nuxt/build.json`. In addition, we also move the build directory to `node_modules/.cache/nuxt`. Because `node_modules` is cached by all major platforms (Netlify, Vercel, ...) and common CI/CD scripts, this solution works out of the box without additional configuration.

When `nuxt generate` is called subsequently, it will again create a checksum based on your project files and then compare it to the existing one inside `node_modules/.cache/nuxt/build.json`.

If they match, it means that nothing is changed that needs rebuild so we can directly start rendering pages.

If a mismatch is detected, it means that a full rebuild would be necessary. You can also see what file caused rebuild by checking console logs. After the build, nuxt generate will save the new checksum inside `.nuxt/build.json`. You can check full implementation [here](https://github.com/nuxt/nuxt.js/pull/7712){rel=""nofollow""}.

### Back to old school commands

With Nuxt v2.13, we introduced `nuxt export` and `nuxt serve` specially designed for the static target. With Nuxt v2.14, they are deprecated as `nuxt generate` and `nuxt start` is smart to detect the target and build when necessary.

Server target:

- `nuxt dev` = development server
- `nuxt build` = build your application for production
- `nuxt start` = start the production server (use it for Node.js hosting like Heroku, DigitalOcean, etc)

Static target:

- `nuxt dev` = development server
- `nuxt generate` = build if needed and statically export to `dist/`
- `nuxt start` = serve the `dist/` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying

## What to do next

- Upgrade your project to [nuxt@2.14.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.14.0){rel=""nofollow""}
- Use `nuxt generate` instead of `nuxt export`
- Use `nuxt start` instead of `nuxt serve`
- Enjoy fast deployments 🤙

# Nuxt 2: From Terminal to Browser

> Nuxt is a Vue.js framework to create different kind of web applications with the **same directory structure & conventions**: Universal, Single Page, PWA or Static Generated.

*ℹ️ These features are all available with [v2.8.0 release](https://github.com/nuxt/nuxt.js/releases/tag/v2.8.0){rel=""nofollow""}.*

## Problems

1. Developing JavaScript applications with Webpack or any bundler requires to switch between your browser and terminal for debugging purpose.
2. Using `console.log` to debug when the app is server rendered requires to remember that logs will be displayed on the terminal when refreshing the page.

## Solutions

1. Forwarding Webpack build state right in the browser and display them in a fancy manner.

![forward-webpack-build-state](https://nuxt.com/assets/blog/forward-webpack-build-state.gif){.rounded-lg.border.border-gray-700}

2. Same for Hot Module Replacement (really useful when the project gets bigger and takes more time to re-build).

![nuxt-build-indicator-hmr](https://nuxt.com/assets/blog/nuxt-build-indicator-hmr.gif){.rounded-lg.border.border-gray-700}

3. Forwarding SSR logs to the browser in development mode

![nuxt-ssr-logs-forwarding](https://nuxt.com/assets/blog/nuxt-ssr-logs-forwarding.gif){.rounded-lg.border.border-gray-700}

## Nuxt Vision

The purpose to these changes is to use the terminal for commands only.

Now you can focus right on your code and its visual result 🙂

> Be lazy, be smart, be Nuxt.

Links:

- Nuxt 2 docs: <https://v2.nuxt.com>{rel=""nofollow""}
- GitHub: <https://github.com/nuxt/nuxt.js>{rel=""nofollow""}
- Loading Screen source code: <https://github.com/nuxt/loading-screen>{rel=""nofollow""}
- Twitter: <https://x.com/nuxt_js>{rel=""nofollow""}
