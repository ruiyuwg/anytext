# Overview

> Learn more about Nitro deploy providers.

Nitro can generate different output formats suitable for different hosting providers from the same code base.
Using built-in presets, you can easily configure Nitro to adjust its output format with almost no additional code or configuration!

## Default output

The default production output preset is [Node.js server](https://nitro.build/deploy/node).

When running Nitro in development mode, Nitro will always use a special preset called `nitro-dev` using Node.js with ESM in an isolated Worker environment with behavior as close as possible to the production environment.

## Zero-Config Providers

When deploying to production using CI/CD, Nitro tries to automatically detect the provider environment and set the right one without any additional configuration required. Currently, the providers below can be auto-detected with zero config.

- [aws amplify](https://nitro.build/deploy/providers/aws-amplify)
- [azure](https://nitro.build/deploy/providers/azure)
- [cloudflare](https://nitro.build/deploy/providers/cloudflare)
- [firebase app hosting](https://nitro.build/deploy/providers/firebase#firebase-app-hosting)
- [netlify](https://nitro.build/deploy/providers/netlify)
- [stormkit](https://nitro.build/deploy/providers/stormkit)
- [vercel](https://nitro.build/deploy/providers/vercel)
- [zeabur](https://nitro.build/deploy/providers/zeabur)

::warning
For Turborepo users, zero config detection will be interferenced by its Strict Environment Mode. You may need to allowing the variables explictly or use its Loose Environment Mode (with `--env-mode=loose` flag).
::

## Changing the deployment preset

If you need to build Nitro against a specific provider, you can target it by defining an environment variable named `NITRO_PRESET` or `SERVER_PRESET`, or by updating your Nitro [configuration](https://nitro.build/guide/configuration) or using `--preset` argument.

Using the environment variable approach is recommended for deployments depending on CI/CD.

**Example:** Defining a `NITRO_PRESET` environment variable

```bash
nitro build --preset cloudflare_pages
```

**Example:** Updating the `nitro.config.ts` file

```ts
export default defineNitroConfig({
  preset: 'cloudflare_pages'
})
```

## Compatibility date

Deployment providers regularly update their runtime behavior. Nitro presets are updated to support these new features.

To prevent breaking existing deployments, Nitro uses compatibility dates. These dates let you lock in behavior at the project creation time. You can also opt in to future updates when ready.

When you create a new project, the `compatibilityDate` is set to the current date. This setting is saved in your project's configuration.

You should update the compatibility date periodically. Always test your deployment thoroughly after updating. Below is a list of key dates and their effects.

| Compatibility date | Platform   | Description                                        |
| ------------------ | ---------- | -------------------------------------------------- |
| **≥ 2024-05-07**   | netlify    | Netlify functions v2                               |
| **≥ 2024-09-19**   | cloudflare | Static assets support for cloudflare-module preset |
| **≥ 2025-01-30**   | deno       | Deno v2 Node.js compatibility                      |
