# Vercel protection bypass

For users of [Vercel's Deployment Protection](https://vercel.com/docs/deployment-protection/methods-to-protect-deployments), you may experience issues that prevent your application from loading in the Presentation Tool preview frame. [Vercel's Protection Bypass](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) is the solution, but to make the setup process easier you can use [the @sanity/vercel-protection-bypass plugin](https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/vercel-protection-bypass) as part of your studio's configuration.

> \[!NOTE]
> This protection is commonly enabled in enterprise environments. If you're not receiving errors related to deployment protection, you likely don't need to set up this plugin.

## Enable protection bypass

### Install the plugin

In your studio directory, add the package.

```sh
pnpm add @sanity/vercel-protection-bypass
```

### Add the plugin to your studio config

Import and add the plugin to the `plugins` array. This adds the new tool to your studio.

**sanity.config.ts**

```
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {vercelProtectionBypassTool} from '@sanity/vercel-protection-bypass'

export default defineConfig({
  //... rest of config
  plugins: [
    presentationTool({
      // ... presentation config
    }),
    vercelProtectionBypassTool()
  ]
})
```

### Launch your studio and complete the instructions

Run your studio and navigate to the new "**Vercel Bypass Protection**" tab. Depending on where the plugin is within the `plugins` array, it may be in a different location in the top toolbar.

![A modal window titled "Vercel Protection Bypass" with instructions on setting up a secret environment variable for automation.](https://cdn.sanity.io/images/3do82whm/next/4396a95c7ab9a67f634f157d855e786d266bb5fe-2272x1356.png)

Once the steps are complete and you've added the secret, you're all set. If you need to remove or change the secret in the future, you can return to this page.

## Limitations and considerations

- Setting a bypass secret in your dataset enables protection bypass automation for *all instances* of `presentationTool` on `sanity@3.70.0` or later. You cannot enable it for only some instances.
- You can't have different secrets for different URLs when using `@sanity/vercel-protection-bypass`. They must all use the same secret. If different secrets are required then this won't work for your needs.

# Sanity CLI

#### Common commands

[Init CLI command reference](https://www.sanity.io/docs/cli-reference/init)

[Dev CLI command reference](https://www.sanity.io/docs/cli-reference/dev)

[Docs CLI command reference](https://www.sanity.io/docs/cli-reference/docs)

[Deploy CLI command reference](https://www.sanity.io/docs/cli-reference/deploy)

[TypeGen CLI command reference](https://www.sanity.io/docs/cli-reference/cli-typegen)

[Schema CLI command reference](https://www.sanity.io/docs/cli-reference/cli-schema)
