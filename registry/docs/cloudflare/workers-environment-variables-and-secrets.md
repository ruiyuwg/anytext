# Environment variables and secrets

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/development-testing/environment-variables.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Environment variables and secrets

Warning

Do not use `vars` to store sensitive information in your Worker's Wrangler configuration file. Use secrets instead.

Put secrets for use in local development in either a `.dev.vars` file or a `.env` file, in the same directory as the Wrangler configuration file.

Choose to use either `.dev.vars` or `.env` but not both. If you define a `.dev.vars` file, then values in `.env` files will not be included in the `env` object during local development.

These files should be formatted using the [dotenv ↗](https://hexdocs.pm/dotenvy/dotenv-file-format.html) syntax. For example:

.dev.vars / .env

```

SECRET_KEY="value"

API_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"


```

Do not commit secrets to git

The `.dev.vars` and `.env` files should not committed to git. Add `.dev.vars*` and `.env*` to your project's `.gitignore` file.

To set different secrets for each Cloudflare environment, create files named `.dev.vars.<environment-name>` or `.env.<environment-name>`.

When you select a Cloudflare environment in your local development, the corresponding environment-specific file will be loaded ahead of the generic `.dev.vars` (or `.env`) file.

- When using `.dev.vars.<environment-name>` files, all secrets must be defined per environment. If `.dev.vars.<environment-name>` exists then only this will be loaded; the `.dev.vars` file will not be loaded.
- In contrast, all matching `.env` files are loaded and the values are merged. For each variable, the value from the most specific file is used, with the following precedence:
  - `.env.<environment-name>.local` (most specific)
  - `.env.local`
  - `.env.<environment-name>`
  - `.env` (least specific)

Controlling `.env` handling

It is possible to control how `.env` files are loaded in local development by setting environment variables on the process running the tools.

- To disable loading local dev vars from `.env` files without providing a `.dev.vars` file, set the `CLOUDFLARE_LOAD_DEV_VARS_FROM_DOT_ENV` environment variable to `"false"`.
- To include every environment variable defined in your system's process environment as a local development variable, ensure there is no `.dev.vars` and then set the `CLOUDFLARE_INCLUDE_PROCESS_ENV` environment variable to `"true"`.

### Basic setup

Here are steps to set up environment variables for local development using either `.dev.vars` or `.env` files.

1. Create a `.dev.vars` / `.env` file in your project root.
2. Add key-value pairs:\
   .dev.vars/.env

```
API_HOST="localhost:3000"  
DEBUG="true"  
SECRET_TOKEN="my-local-secret-token"  
```

3. Run your `dev` command\
   **Wrangler**
   - [  npm ](#tab-panel-7737)
   - [  yarn ](#tab-panel-7738)
   - [  pnpm ](#tab-panel-7739)\
     Terminal window

```
npx wrangler dev  
```

Terminal window

```
yarn wrangler dev  
```

Terminal window

```
pnpm wrangler dev  
```

**Vite plugin**

- [  npm ](#tab-panel-7740)
- [  yarn ](#tab-panel-7741)
- [  pnpm ](#tab-panel-7742)\
  Terminal window

```
npx vite dev  
```

Terminal window

```
yarn vite dev  
```

Terminal window

```
pnpm vite dev  
```

## Multiple local environments

To simulate different local environments, you can provide environment-specific files. For example, you might have a `staging` environment that requires different settings than your development environment.

1. Create a file named `.dev.vars.<environment-name>`/`.env.<environment-name>`. For example, we can use `.dev.vars.staging`/`.env.staging`.
2. Add key-value pairs:\
   .dev.vars.staging/.env.staging

```
API_HOST="staging.localhost:3000"  
DEBUG="false"  
SECRET_TOKEN="staging-token"  
```

3. Specify the environment when running the `dev` command:\
   **Wrangler**
   - [  npm ](#tab-panel-7743)
   - [  yarn ](#tab-panel-7744)
   - [  pnpm ](#tab-panel-7745)\
     Terminal window

```
npx wrangler dev --env staging  
```

Terminal window

```
yarn wrangler dev --env staging  
```

Terminal window

```
pnpm wrangler dev --env staging  
```

**Vite plugin**

- [  npm ](#tab-panel-7746)
- [  yarn ](#tab-panel-7747)
- [  pnpm ](#tab-panel-7748)\
  Terminal window

```
CLOUDFLARE_ENV=staging npx vite dev  
```

Terminal window

```
CLOUDFLARE_ENV=staging yarn vite dev  
```

Terminal window

```
CLOUDFLARE_ENV=staging pnpm vite dev  
```

- If using `.dev.vars.staging`, only the values from that file will be applied instead of `.dev.vars`.
- If using `.env.staging`, the values will be merged with `.env` files, with the most specific file taking precedence.

## Learn more

- To learn how to configure multiple environments in Wrangler configuration, [read the documentation](https://developers.cloudflare.com/workers/wrangler/environments/#%5Ftop).
- To learn how to use Wrangler environments and Vite environments together, [read the Vite plugin documentation](https://developers.cloudflare.com/workers/vite-plugin/reference/cloudflare-environments/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/development-testing/","name":"Development & testing"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/development-testing/environment-variables/","name":"Environment variables and secrets"}}]}
```
