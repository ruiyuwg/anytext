# Vercel Content Link

Source: https://payloadcms.com/docs/integrations/vercel-content-link

[Vercel Content Link](https://vercel.com/docs/workflow-collaboration/edit-mode#content-link) will allow your editors to navigate directly from the content rendered on your front-end to the fields in Payload that control it. This requires no changes to your front-end code and very few changes to your Payload Config.

![Versions](/images/docs/vercel-visual-editing.jpg)

Vercel Content Link is an enterprise-only feature and only available for
deployments hosted on Vercel. If you are an existing enterprise customer,
[contact our sales team](https://payloadcms.com/for-enterprise) for help with
your integration.

## How it works

To power Vercel Content Link, Payload embeds Content Source Maps into its API responses. Content Source Maps are invisible, encoded JSON values that include a link back to the field in the CMS that generated the content. When rendered on the page, Vercel detects and decodes these values to display the Content Link interface.

For full details on how the encoding and decoding algorithm works, check out [`@vercel/stega`](https://www.npmjs.com/package/@vercel/stega).

## Getting Started

Setting up Payload with Vercel Content Link is easy. First, install the `@payloadcms/plugin-csm` plugin into your project. This plugin requires an API key to install, [contact our sales team](https://payloadcms.com/for-enterprise) if you don't already have one.

```bash
npm i @payloadcms/plugin-csm
```

Then in the `plugins` array of your Payload Config, call the plugin and enable any collections that require Content Source Maps.

```ts
import { buildConfig } from 'payload/config'
import contentSourceMaps from '@payloadcms/plugin-csm'

const config = buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'slug',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],
  plugins: [
    contentSourceMaps({
      collections: ['pages'],
    }),
  ],
})

export default config
```

## Enabling Content Source Maps

Now in your Next.js app, you need to add the `encodeSourceMaps` query parameter to your API requests. This will tell Payload to include the Content Source Maps in the API response.

**Note:** For performance reasons, this should only be done when in draft mode
or on preview deployments.

#### REST API

If you're using the REST API, include the `?encodeSourceMaps=true` search parameter.

```ts
if (isDraftMode || process.env.VERCEL_ENV === 'preview') {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL}/api/pages?encodeSourceMaps=true&where[slug][equals]=${slug}`,
  )
}
```

#### Local API

If you're using the Local API, include the `encodeSourceMaps` via the `context` property.

```ts
if (isDraftMode || process.env.VERCEL_ENV === 'preview') {
  const res = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    context: {
      encodeSourceMaps: true,
    },
  })
}
```

And that's it! You are now ready to enter Edit Mode and begin visually editing your content.

## Edit Mode

To see Content Link on your site, you first need to visit any preview deployment on Vercel and login using the Vercel Toolbar. When Content Source Maps are detected on the page, a pencil icon will appear in the toolbar. Clicking this icon will enable Edit Mode, highlighting all editable fields on the page in blue.

![Versions](/images/docs/vercel-toolbar.jpg)

## Troubleshooting

### Date Fields

The plugin does not encode `date` fields by default, but for some cases like text that uses negative CSS letter-spacing, it may be necessary to split the encoded data out from the rendered text. This way you can safely use the cleaned data as expected.

```ts
import { vercelStegaSplit } from '@vercel/stega'
const { cleaned, encoded } = vercelStegaSplit(text)
```

### Blocks and array fields

All `blocks` and `array` fields by definition do not have plain text strings to encode. For this reason, they are automatically given an additional `_encodedSourceMap` property, which you can use to enable Content Link on entire *sections* of your site.

You can then specify the editing container by adding the `data-vercel-edit-target` HTML attribute to any top-level element of your block.

```ts
<div data-vercel-edit-target>
  <span style={{ display: "none" }}>{_encodedSourceMap}</span>
  {children}
</div>
```

# Building without a DB connection

Source: https://payloadcms.com/docs/production/building-without-a-db-connection

One of the most common problems when building a site for production, especially with Docker - is the DB connection requirement.

The important note is that Payload by itself does not have this requirement, But [Next.js' SSG ](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) does if any of your route segments have SSG enabled (which is default, unless you opted out or used a [Dynamic API](https://nextjs.org/docs/app/deep-dive/caching#dynamic-apis)) and use the Payload Local API.

Solutions:

## Using the experimental-build-mode Next.js build flag

You can run Next.js build using the `pnpm next build --experimental-build-mode compile` command to only compile the code without static generation, which does not require a DB connection. In that case, your pages will be rendered dynamically, but after that, you can still generate static pages using the `pnpm next build --experimental-build-mode generate` command when you have a DB connection.

When running `pnpm next build --experimental-build-mode compile`, environment variables prefixed with `NEXT_PUBLIC` will not be inlined and will be `undefined` on the client. To make these variables available, either run `pnpm next build --experimental-build-mode generate` if a DB connection is available, or use `pnpm next build --experimental-build-mode generate-env` if you do not have a DB connection.

[Next.js documentation](https://nextjs.org/docs/pages/api-reference/cli/next#next-build-options)

## Opting-out of SSG

You can opt out of SSG by adding this all the route segment files:

```ts
export const dynamic = 'force-dynamic'
```

**Note that it will disable static optimization and your site will be slower**.
More on [Next.js documentation](https://nextjs.org/docs/app/deep-dive/caching#opting-out-2)
