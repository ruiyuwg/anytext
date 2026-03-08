# .env

::important
This file should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/directory-structure/gitignore) file to avoid pushing secrets to your repository.
::

## Dev, Build and Generate Time

Nuxt CLI has built-in [dotenv](https://github.com/motdotla/dotenv){rel=""nofollow""} support in development mode and when running [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build) and [`nuxt generate`](https://nuxt.com/docs/3.x/api/commands/generate).

In addition to any process environment variables, if you have a `.env` file in your project root directory, it will be automatically loaded **at dev, build and generate time**. Any environment variables set there will be accessible within your `nuxt.config` file and modules.

```ini [.env]
MY_ENV_VARIABLE=hello
```

::note
Note that removing a variable from `.env` or removing the `.env` file entirely will not unset values that have already been set.
::

## Custom File

If you want to use a different file - for example, to use `.env.local` or `.env.production` - you can do so by passing the `--dotenv` flag when using the Nuxt CLI.

```bash [Terminal]
npx nuxt dev --dotenv .env.local
```

When updating `.env` in development mode, the Nuxt instance is automatically restarted to apply new values to the `process.env`.

::important
In your application code, you should use [Runtime Config](https://nuxt.com/docs/3.x/guide/going-further/runtime-config) instead of plain env variables.
::

## Production

**After your server is built**, you are responsible for setting environment variables when you run the server.

Your `.env` files will not be read at this point. How you do this is different for every environment.

This design decision was made to ensure compatibility across various deployment environments, some of which may not have a traditional file system available, such as serverless platforms or edge networks like Cloudflare Workers.

Since `.env` files are not used in production, you must explicitly set environment variables using the tools and methods provided by your hosting environment. Here are some common approaches:

- You can pass the environment variables as arguments using the terminal: :br`$ DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs`
- You can set environment variables in shell configuration files like `.bashrc` or `.profile`.
- Many cloud service providers, such as Vercel, Netlify, and AWS, provide interfaces for setting environment variables via their dashboards, CLI tools or configuration files.

::important
`runtimeConfig` \[won't pick up environment variables that don't start with `NUXT_` in production] (<https://nuxt.com/docs/3.x/guide/going-further/runtime-config#environment-variables>{rel=""nofollow""}).
::

## Production Preview

For local production preview purpose, we recommend using [`nuxt preview`](https://nuxt.com/docs/3.x/api/commands/preview) since using this command, the `.env` file will be loaded into `process.env` for convenience. Note that this command requires dependencies to be installed in the package directory.

Or you could pass the environment variables as arguments using the terminal. For example, on Linux or macOS:

```bash [Terminal]
DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs
```

Note that for a purely static site, it is not possible to set runtime configuration config after your project is prerendered.

:read-more{to="https://nuxt.com/docs/3.x/guide/going-further/runtime-config"}

::note
If you want to use environment variables set at build time but do not care about updating these down the line (or only need to update them reactively *within* your app) then `appConfig` may be a better choice. You can define `appConfig` both within your `nuxt.config` (using environment variables) and also within an `~/app.config.ts` file in your project.

:read-more{to="https://nuxt.com/docs/3.x/directory-structure/app-config"}
::

# .gitignore

A `.gitignore` file specifies intentionally untracked files that git should ignore.

::read-more

# the git documentation

::

We recommend having a `.gitignore` file that has **at least** the following entries present:

```bash [.gitignore]
# Nuxt dev/build outputs
.output
.data
.nuxt
.nitro
.cache
dist

# Node dependencies
node_modules

# Logs
logs
*.log

# Misc
.DS_Store

# Local env files
.env
.env.*
!.env.example
```

# .nuxtignore

The `.nuxtignore` file tells Nuxt to ignore files in your project’s root directory ([`rootDir`](https://nuxt.com/docs/3.x/api/nuxt-config#rootdir)) during the build phase.

It is subject to the same specification as [`.gitignore`](https://nuxt.com/docs/3.x/directory-structure/gitignore) and `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.

::tip
You can also configure [`ignoreOptions`](https://nuxt.com/docs/3.x/api/nuxt-config#ignoreoptions), [`ignorePrefix`](https://nuxt.com/docs/3.x/api/nuxt-config#ignoreprefix) and [`ignore`](https://nuxt.com/docs/3.x/api/nuxt-config#ignore) in your `nuxt.config` file.
::

## Usage

```bash [.nuxtignore]
# ignore layout foo.vue
layouts/foo.vue
# ignore layout files whose name ends with -ignore.vue
layouts/*-ignore.vue

# ignore page bar.vue
pages/bar.vue
# ignore page inside ignore folder
pages/ignore/*.vue

# ignore route middleware files under foo folder except foo/bar.js
middleware/foo/*.js
!middleware/foo/bar.js
```

::read-more

# the git documentation

More details about the spec are in the **gitignore documentation**.
::

# .nuxtrc

The `.nuxtrc` file can be used to configure Nuxt with a flat syntax. It is based on [`unjs/rc9`](https://github.com/unjs/rc9){rel=""nofollow""}.

::tip
For more advanced configurations, use [`nuxt.config`](https://nuxt.com/docs/3.x/directory-structure/nuxt-config).
::

## Usage

```bash [.nuxtrc]
# Disable SSR
ssr=false

# Configuration for `@nuxt/devtools`
devtools.enabled=true

# Add Nuxt modules
modules[]=@nuxt/image
modules[]=nuxt-security

# Module setups (automatically added by Nuxt)
setups.@nuxt/test-utils="3.23.0"
```

If present, the properties in the `nuxt.config` file will overwrite the properties in `.nuxtrc` file.

::note
Nuxt automatically adds a `setups` section to track module installation and upgrade state. This is used internally for [module lifecycle hooks](https://nuxt.com/docs/3.x/api/kit/modules#using-lifecycle-hooks-for-module-installation-and-upgrade) and should not be modified manually.
::

::read-more{to="https://nuxt.com/docs/3.x/api/configuration/nuxt-config"}
Discover all the available options in the **Nuxt configuration** documentation.
::

## Global `.nuxtrc` File

You can also create a global `.nuxtrc` file in your home directory to apply configurations globally.

- On macOS/Linux, this file is located at:
  ```md
  ~/.nuxtrc
  ```
- On Windows, it is located at:
  ```md
  C:\Users\{username}\.nuxtrc
  ```

This global `.nuxtrc` file allows you to define default settings that apply to all Nuxt projects on your system. However, project-level `.nuxtrc` files will override these global settings, and `nuxt.config` will take precedence over both.
