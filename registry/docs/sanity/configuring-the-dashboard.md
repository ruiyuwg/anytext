# Configuring the Dashboard

## Set up your content operations dashboard

> \[!TIP]
> Find your dashboard
> To find your organization dashboard, visit [www.sanity.io/welcome](https://www.sanity.io/welcome)!

The Sanity Dashboard is the hub for your organization's content operations. Here you'll find your deployed studios, custom apps, and official Sanity apps like [Canvas](https://www.sanity.io/docs/canvas) or [Media Library](https://www.sanity.io/docs/media-library).

![Sanity Studio dashboard](https://cdn.sanity.io/images/3do82whm/next/adc7e803466a5632c74be52f81268b55599cb802-2524x1790.png)

Your dashboard is centered around your organization, and gives access to all deployed studios and apps within the organization, across projects and datasets.

> \[!NOTE]
> Dashboard plugin
> As the keen reader may have observed, there is already a "dashboard" in the Sanity ecosystem, namely the official [dashboard plugin](https://www.sanity.io/docs/studio/dashboard) for Sanity Studio. This plugin will continue to be available for your intra-studio dashboard needs.

## Disable dashboard

You can disable the dashboard for your organization by navigating to the organization in [Sanity Manage](https://www.sanity.io/manage).

![Screenshot of the manage settings screen.](https://cdn.sanity.io/images/3do82whm/next/0d5bc2581522298518ade2793794c8bf25906b1a-2572x1130.png)

From your organization's manage page:

1. Select the "**Settings**" tab.
2. Toggle the "**Dashboard is enabled**" switch to disable the dashboard.

This setting affects all users in your organization.

## Hide a studio from Dashboard

You can hide a studio from the dashboard in [Sanity Manage](https://www.sanity.io/manage).

1. Open [Sanity Manage](https://www.sanity.io/manage) and select your project.
2. Navigate to the **Studios** tab.
3. Open the context menu (⋯) for the studio you want to hide.
4. Click **Hide in Dashboard**.

![Screenshot of the studios settings in Manage](https://cdn.sanity.io/images/3do82whm/next/8a0c1aa26686f791563afc19fe02022ec54d7661-2194x956.png)

## Configure your studios

![Sanity Studio inside the dashboard](https://cdn.sanity.io/images/3do82whm/next/e2c9baef842b76c4a9b06402d2aa6dcb8cb79efc-2480x1746.png)

For almost everyone: Your pre-dashboard studios will automatically work as before, with all your customization intact. To fully enjoy the benefits of the integrated dashboard, a studio deployment is required. Depending on your setup, this process will differ slightly.

### Requirements

Dashboard should work with studios going all the way back to v2.28.0 (shoutout to OGs still running v2), but for the best experience we heartily recommend [upgrading](https://www.sanity.io/docs/studio/upgrade) to `@latest`.

- Studio version must be: - At least >= `v2.28.0`

- Preferably >= `v3.88.1`

- Ideally `@latest`

- Schema and manifest files must be extracted and made available. For a detailed look at how schema deployment works, visit [this article](https://www.sanity.io/docs/apis-and-sdks/schema-deployment).

- Self-hosted and embedded studios must also define the canonical studio URL in the [project management settings](https://sanity.io/manage).

- For self-hosted and embedded studios that are not compiled using Sanity build tools (`sanity build` or `sanity deploy`), you'll also need to add a small bridge script to connect with the dashboard.

## Sanity-hosted studio

If you are using Sanity's hosting service, you get the most straightforward route. To set up your project to automatically generate the necessary schema and manifest files on every deployment, follow these steps:

- Make sure your project is [upgraded](https://www.sanity.io/docs/studio/upgrade) to `v3.88.1` or later of Sanity Studio. `@latest` is always recommended!
- Deploy your studio by running the commmand  `npx sanity deploy`.

The Sanity CLI will automatically build your studio and manifest files and deploy them to the configured host.  The manifest file should be available at `<studioHost>.sanity.studio/static/create-manifest.json`

> \[!TIP]
> Even auto-updating studios?
> Yes! Even if you are opted into [auto-updating studios](https://www.sanity.io/docs/studio/latest-version-of-sanity), you still need to make a one-time manual deployment in order to fully integrate with the dashboard.
> Update your local studio to `sanity@latest`, then run `npx sanity deploy`.

## Self-hosted studio

If you are not using Sanity's hosting service, you will need to manually deploy your studio schema and make sure the resulting files are available at the expected location.

- Make sure your project is updated to `v3.88.1` or later of Sanity Studio. `@latest` is always recommended!
- Generate and deploy the schema and manifest files by running `npx sanity schema deploy`.
- Serve the manifest files over HTTP GET from `<custom-studio-url>/static/<manifest-file>` (see filenames above).
- You can control where the manifest will be stored in your project by using the `--manifest-dir` parameter. For example, to extract the files into `./dist/static` you'd run `npx sanity schema deploy --manifest-dir ./dist/static`
- Ensure the manifest files are publicly accessible on the internet without authentication.
- Add the studio URL in your [project management settings](https://sanity.io/manage).

> \[!NOTE]
> In addition to the above, your studio must be publicaly accessible in order to appear in the dashboard.

### Vercel

To self host your studio and schema files on Vercel, we recommend using the following configuration.

**vercel.json**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "sanity-v3",
  "buildCommand": "sanity build && sanity schema deploy --manifest-dir ./dist/static"
}
```

### Studio embedded in Next.js

For Next.js projects with embedded studios, you should follow the same steps as in the previous section, with a small change to how you generate the manifest files.

- Make sure your project is [upgraded](https://www.sanity.io/docs/studio/upgrade) to `v3.88.1` or later of Sanity Studio. `@latest` is always recommended!
- Generate the manifest files running `npx sanity manifest extract`. You'll need to specify a `--path` for the generated files that corresponds to the path of your studio relative to the root of your Next.js project. E.g., `npx sanity manifest extract --path public/studio/static`
- Generate and deploy your schema by running `npx sanity schema deploy`.
- Next.js will handle serving your manifest over HTTP GET for Dashboard when you deploy your application.
- Add the studio URL in your [project management settings](https://sanity.io/manage). Make sure you include the full path to your studio. E.g., `https://cool-domain.com/admin`.
- Finally, add the dashboard bridge script to your studio route as shown in the next section, and deploy your project.

### Adding the bridge component

For self-hosted and embedded studios that are not compiled using `sanity build` or `sanity deploy`, OR using [next-sanity](https://github.com/sanity-io/next-sanity) you will also need to add a small script to enable the dashboard to properly interact with your studios.

**index.html**

```html
<script src="https://core.sanity-cdn.com/bridge.js" async type="module" />
```

Exactly where you should put the script will vary depending on your exact setup, but a generalized example might look as follows:

**./route/to/studio/layout.tsx**

```tsx
import {preloadModule} from 'react-dom'

const bridgeScript = 'https://core.sanity-cdn.com/bridge.js'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  preloadModule(bridgeScript, {as: 'script'})
  return (
    <>
      <script src={bridgeScript} async type="module" />
      {children}
    </>
  )
}
```

### Allow embedding for protected domains

Some services, such as Cloudflare’s domain protection and Vercel’s deployment previews, may restrict your studio’s ability to be embedded in Dashboard by setting restrictive headers.

#### `X-Frame-Options`

If this is set to `DENY`, Dashboard cannot embed your studio. If set to `SAMEORIGIN`, Dashboard can only embed if the origin matches the URL of the Dashboard (sanity.io). As both of these options alone will prevent Dashboard from embedding your studio, we suggest setting the `frame-ancestors` policy as described below.

#### `Content-Security-Policy: frame-ancestors`

If your service provider allows you to define custom headers, you can allow Dashboard by setting the `Content-Security-Policy` to include the `frame-ancestors` directive. The expression list must include at least one of the following:

- `self`
- `https://www.sanity.io`
- `https://*.sanity.io`
- `https:`

For example:

```text
Content-Security-Policy: frame-ancestors https://*.sanity.io;
```

## Add a token for CI/CD pipelines

If you deploy your studio as part of an automated workflow, you will need to add a deploy token to your project in the Sanity project management settings and include a schema deployment step with the following command:

**Terminal**

```sh
SANITY_AUTH_TOKEN=<deploy_token> npx sanity schema deploy
```

A deploy token can be obtained by navigating to the API section of your [project management dashboard](https://sanity.io/manage).

## Update studio icons in Dashboard

Dashboard retrieves the icon for each studio workspace from the `icon` property defined in the respective studio’s workspace configuration.

**sanity.config.ts**

```tsx
// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {StudioIcon} from './StudioIcon'

export default defineConfig({
  projectId: '<projectId>',
  dataset: '<dataset>',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  icon: StudioIcon,
  // ... rest of config
})
```

**StudioIcon.tsx**

```tsx
// StudioIcon.tsx
import React from 'react'

export const StudioIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 25 25">
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      🤘
    </text>
  </svg>
)
```

This icon must be a simple, serializable React component that renders a static element. Because the icon is extracted from the configuration and added to the studio manifest, it cannot depend on external values, context, hooks, or any dynamic logic. Static, self-contained SVG components work best.

To learn more about configuring studio workspaces, visit[ this article](https://www.sanity.io/docs/studio/configuration).

#### Next steps

[Canvas](https://www.sanity.io/docs/canvas)

[Media Library](https://www.sanity.io/docs/media-library)

[Studio](https://www.sanity.io/docs/studio)

[App SDK](https://www.sanity.io/docs/app-sdk)

# Setting up your studio

## Create a new Studio with Sanity CLI

![Video](https://stream.mux.com/wIMs3CS7T4pP7hRArpQZsBZ01Be02vCjbK)

Run the command in your Terminal to initialize your project on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/docs/help/cli-errors).

**Terminal**

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio-hello-world
cd studio-hello-world
```

## Run Sanity Studio locally

Inside the directory of the Studio, start the development server by running the following command.

**Terminal**

```sh
# in studio-hello-world 
npm run dev
```

## Log in to the Studio

**Open** the Studio running locally in your browser from <http://localhost:3333>.

You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

# Defining a schema

## Create a new document type

![Video](https://stream.mux.com/IfVfAwxfwOKN2khdGCQ3cs5IuF1rYte1)

Create a new file in your Studio’s `schemaTypes` folder called `postType.ts` with the code below which contains a set of fields for a new `post` document type.

**/studio-hello-world/schemaTypes/postType.ts**

```
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
```

## Register the `post` schema type to the Studio schema

Now you can import this document type into the `schemaTypes` array in the `index.ts` file in the same folder.

**/studio-hello-world/schemaTypes/index.ts**

```
import {postType} from './postType'

export const schemaTypes = [postType]
```

## Publish your first document

When you save these two files, your Studio should automatically reload and show your first document type. Click the `+` symbol at the top left to create and publish a new `post` document.

# Querying content with GROQ

## Write your first GROQ query

![Video](https://stream.mux.com/Mc12Sdeu00ugrGuQyz00Du1G4AQZmT36UV)

Open **Vision** in your Studio's top nav bar and paste this query into the **Query** code block field.

**Vision**

```groq
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt
}
```

- `*` represents all documents in a dataset as an array
- `[_type == "post"]` represents a **filter** to only return matching documents
- `{ _id, title, slug, publishedAt }` represents a **projection** which defines the attributes from those documents that you wish to include in the response.

## Run the query

Click **Fetch** to see the JSON output in **Results**. You should see the document you previously published in the results.

Queries run in Vision use your authenticated session, so you will see private documents – which have a `.` in the `_id` key, like `drafts.`. You will not see when queried from your front end in the next step.
