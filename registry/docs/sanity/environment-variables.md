# Environment Variables

**Note:** Make sure you are using version 3.5.0 or later in order to make full use of environment variables.

## Exposed variables

Environment variables prefixed with `SANITY_STUDIO_` are automatically picked up by the Sanity CLI tool, development server and bundler.

Any found environment variables are available as `process.env.SANITY_STUDIO_VARIABLE_NAME` - even in browser code.

By requiring this `SANITY_STUDIO_` prefix, we prevent unrelated (and potentially sensitive) environment variables from getting exposed to the browser bundle.

## Static replacement

It is important to note that these variables are **statically replaced** during production. It is therefore necessary to always reference them using the full static string. For example, dynamic key access like `process.env[key]` will not work (they *might* be accessible this way in development, but will fail in production).

Similarly, logging or iterating over `process.env` will not give you consistent results in development and production - in production, `process.env` will be said to be `undefined`, as all the values are **statically replaced** during the build. In other words:

```javascript
// In development:
const studioTitle = process.env.SANITY_STUDIO_TITLE

// In production:
const studioTitle = "the value of the env var"
```

Note that during a build, it will also replace these references appearing in JavaScript strings. This should be a rare case, but it can have unintended side effects. You may see errors like `Missing semicolon` or `Unexpected token`. One way to work around this behavior is to break the string up with a Unicode zero-width space, e.g. `'process\u200b.env.SANITY_STUDIO_FOO'`.

### Keeping secret things secret

It is common practice to keep secret tokens and API keys as environment variables that are not checked into version control. This is a decent strategy for server-side applications where the runtime is protected. However, since the Studio is a client-side application, you will have to approach secrets differently. We recommend using the [Sanity Secrets library](https://github.com/sanity-io/sanity-studio-secrets) that gives you hooks and UI components for handling secrets.

Make sure that your `.env.local` files are ignored by your version control system (usually git), and do not put sensitive information or keys into the .env files commited.

## Loading variables from `.env` files

Sanity will read `.env` files by default and make its variables available for the development server, production builds, command line actions and similar. Note that you still have to follow the variable naming conventions mentioned above. We also support env loading priorities for situations where you want to differentiate between sharing certain variables in all environments and overwriting them for production builds.

```sh
.env               # loaded in all cases
.env.local         # loaded in all cases, ignored by git
.env.[mode]        # only loaded in specified mode
.env.[mode].local  # only loaded in specified mode, ignored by git

```

Also, Sanity uses [dotenv-expand](https://github.com/motdotla/dotenv-expand) to expand variables out of the box. To learn more about the syntax, check out [their docs](https://github.com/motdotla/dotenv-expand#what-rules-does-the-expansion-engine-follow).

Manually declared environment variables (outside of .env files) take precedence, overriding any values set in .env files.

## Modes

By default, the `build` and `deploy` commands runs in `production` mode, while all other commands run in `development` mode. Other commands can be run in production mode by setting `NODE_ENV` to `production` (note that only this value is supported; for other modes, use `SANITY_ACTIVE_ENV`).

This means when running `sanity build`, it will load the environment variables from `.env.production` if that file exists. For example:

```sh
# .env.production
SANITY_STUDIO_TITLE=My Studio
```

Given this environment variable, you could then render the title in your app using `process.env.SANITY_STUDIO_TITLE`.

In some cases, you may want to run `sanity build` with a different mode to render a different title. You can overwrite the default mode used for a command by setting an environment variable named `SANITY_ACTIVE_ENV`. For example, if you want to build your studio for a staging mode:

```sh
SANITY_ACTIVE_ENV=staging sanity build
```

And create an `.env.staging` file:

```sh
# .env.staging
SANITY_STUDIO_TITLE=My Studio (staging)
```

## Best practices

We encourage you to keep environment variables to a minimum, and not spread them throughout the code base. Common (and valid) use cases are things like configuration files.

To more easily be able to tell which environment variables are used, and keep things as tidy as possible, we recommend having a single file that re-exports environment variables to the rest of your code. For instance:

```typescript
// src/environment.ts
export const myStudioTitle = process.env.SANITY_STUDIO_TITLE
export const myCompanyApiUrl = process.env.SANITY_STUDIO_COMPANY_API_URL

```

Similarly, plugins should generally never use environment variables directly - instead, they should take a configuration object which the user can then choose to pass environment variables to:

```typescript
import {somePluginApiUrl} from './src/environment'

defineConfig({
  plugins: [
    // ...
    somePlugin({
      // process.env.SANITY_STUDIO_SOME_PLUGIN_API_URL
      apiUrl: somePluginApiUrl
    })
  ]
})
```

## Differences from Vite

Sanity's environment variable behavior is heavily inspired by (and partially powered by) Vite. There is however one key difference:

Vite exposes environment variables under `import.meta.env`. While Sanity *also* lets you access them that way, we heavily recommend that you access them using `process.env`.

Using `process.env` allows us to expose the same variables to both the browser and Node.js/Node.js powered tools without too much work. It also eases cross-environment migrations, such as moving from the default Vite-based bundler to (for instance) an embedded setup inside of Next.js.

## Programmatic usage

Should you want to reuse the environment variable handling in other contexts (your own scripts, or using a different bundler etc), you can import and utilize the `getStudioEnvironmentVariables()` method from `sanity/cli`:

```typescript
import {getStudioEnvironmentVariables} from 'sanity/cli'

console.log(getStudioEnvironmentVariables())
// {SANITY_STUDIO_SOME_VAR: 'yourVariableValue'}

```

Note that `.env` files are not loaded by default when using this method. To do so, pass an `envFile` option:

```typescript
import {getStudioEnvironmentVariables} from 'sanity/cli'

console.log(
  getStudioEnvironmentVariables({
    envFile: {
      mode: 'production',
      envDir: '/path/to/some-dotenv-root'
    }
  })
)

```

For usage in bundlers (such as Vite's `define` option or Webpacks `DefinePlugin`), you'll usually want the keys to be fully qualified with the `process.env` prefix, and the values to be JSON-encoded. The method can do all of this for you:

```typescript
import {getStudioEnvironmentVariables} from 'sanity/cli'

console.log(
  getStudioEnvironmentVariables({
    jsonEncode: true,
    prefix: 'process.env.'
  })
)

```

## Built-in Studio Environment Variables

The following environment variables are integrated in the Studio code base and will be picked up when specified in a .env file (see [Loading variables from .env files](https://www.sanity.io/docs/studio/environment-variables) above). Note that they only apply when using the `sanity` CLI; if you render using your own bundler, these will not work.

```text
SANITY_STUDIO_BASEPATH            Sets the base path for the studio
SANITY_STUDIO_SERVER_HOSTNAME     Hostname for the development/preview server
                                  (localhost by default)
SANITY_STUDIO_SERVER_PORT         Port number for the development/preview server
                                  (3333 by default)
SANITY_STUDIO_REACT_STRICT_MODE   Enable React strict mode. Its use is discouraged
                                  unless you know what you're doing, as it leads
                                  to worse performance in development
```
