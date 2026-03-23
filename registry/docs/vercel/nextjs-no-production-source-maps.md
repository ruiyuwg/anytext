# NEXTJS\_NO\_PRODUCTION\_SOURCE\_MAPS

> **🔒 Permissions Required**: Conformance

Enabling production source maps in your Next.js application will publicly share your
application's source code and should be done with caution. This rule flags any
usage of `productionBrowserSourceMaps` for review. If intentional, the exception
should be added to an allowlist.

For further reading, see:

- [`productionBrowserSourceMaps` documentation](https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps)

## Examples

This rule will catch the following code.

```next.config.js {2}
module.exports = {
  productionBrowserSourceMaps: true,
};
```

## How to fix

To fix this issue, either set the value of `productionBrowserSourceMaps` configuration to false,
or if intentional add an exception to an allowlist.

## Considerations

### Tradeoffs of Disabling Source Maps

Disabling source maps in production has the benefit of not exposing your source code publicly, but it also means that errors in production will lack helpful stack traces, complicating the debugging process.

### Protected Deployments

For [protected deployments](/docs/security/deployment-protection/methods-to-protect-deployments), it is generally safe to enable source maps, as these deployments are only accessible by authorized users who would already have access to your source code. Preview deployments are protected by default, making them a safe environment for enabling source maps.

### Third-Party Error Tracking Services

If you use a third-party error tracking service like [Sentry](https://sentry.io/), you can safely enable source maps by:

1. Uploading the source maps to your error tracking service
2. Emptying or deleting the source maps before deploying to production

Many third-party providers like Sentry offer built-in configuration options to automatically delete sourcemaps after uploading them. Check your provider's documentation for these features before implementing a manual solution.

If you need to implement this manually, you can use an approach like this:

```ts
// Empty the source maps after uploading them to your error tracking service
const sourcemapFiles = await findFiles('.next', /\.js\.map$/);
await Promise.all(
  sourcemapFiles.map(async (file) => {
    await writeFile(file, '', 'utf8');
  }),
);
```

title: "NEXTJS\_NO\_SELF\_HOSTED\_VIDEOS"
description: "Prevent video files from being added to Next.js applications."
last\_updated: "2026-03-23T09:40:07.605Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_SELF\_HOSTED\_VIDEOS"

# NEXTJS\_NO\_SELF\_HOSTED\_VIDEOS

Video files, which are typically large, can consume a lot of bandwidth for
your Next.js application. Video files are better served from a dedicated video
CDN that is optimized for serving videos.

## How to fix

Vercel Blob can be used for storing and serving large files such as videos.

You can use either [server uploads or client uploads](/docs/storage/vercel-blob#server-and-client-uploads) depending on the file size:

- [Server uploads](/docs/storage/vercel-blob/server-upload) are suitable for files up to **4.5 MB**
- [Client uploads](/docs/storage/vercel-blob/client-upload) allow for uploading larger files directly from the browser to Vercel Blob, supporting files up to **5 TB (5,000 GB)**

See the [best practices for hosting videos on Vercel](/kb/guide/best-practices-for-hosting-videos-on-vercel-nextjs-mp4-gif) guide to learn more about various other options for hosting videos.

title: "NEXTJS\_NO\_TURBO\_CACHE"
description: "Prevent Turborepo from caching the Next.js .next/cache folder to prevent an oversized cache."
last\_updated: "2026-03-23T09:40:07.609Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_TURBO\_CACHE"

# NEXTJS\_NO\_TURBO\_CACHE

> **🔒 Permissions Required**: Conformance

This rule prevents the `.next/cache` folder from being added to the Turborepo cache.
This is important because including the `.next/cache` folder in the Turborepo cache can cause
the cache to grow to an excessive size. Vercel also already includes this cache in the build
container cache.

## Examples

The following `turbo.json` config will be caught by this rule for Next.js apps:

```json filename="turbo.json" {5}
{
  "extends": ["//"],
  "pipeline": {
    "build": {
      "outputs": [".next/**"]
    }
  }
}
```

## How to fix

To fix, add `"!.next/cache/**"` to the list of outputs for the task.

```json filename="turbo.json" {5}
{
  "extends": ["//"],
  "pipeline": {
    "build": {
      "outputs": [".next/**", "!.next/cache/**"]
    }
  }
}
```

title: "NEXTJS\_REQUIRE\_EXPLICIT\_DYNAMIC"
description: "Requires explicitly setting the "
last\_updated: "2026-03-23T09:40:07.631Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_REQUIRE\_EXPLICIT\_DYNAMIC"
