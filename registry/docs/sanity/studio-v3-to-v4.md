# Studio v3 to v4

> \[!TIP]
> Available now
> Sanity v4 is available now. See the details below and [follow this guide to upgrade your studio](https://www.sanity.io/docs/studio/upgrade).

Sanity Studio moved to v4 to align more closely with actively maintained versions of the Node.js runtime. We've updated the required Node.js version from v18 to v20+. You can [read more about why we're changing that major version](https://www.sanity.io/blog/a-major-version-bump-for-a-minor-reason).

While a major version change often indicates big changes, that's not the case here. In fact, the vast majority of studios and developers won't see a difference.

## What this change means for you

In practice, not much. Your Studios are only built with Node.js, and will continue to operate as compiled, single-page web applications. If you've been deploying to Sanity with `sanity deploy`, your Studios are already built with an LTS version of Node.js and have been for quite a while.

Sanity Studio v4 and above requires Node.js v20.19 or later to run commands from the `sanity` CLI. This means if you're building and deploying a studio yourself, you'll need to update to a supported version of Node.js in order to run versions of `sanity` from 4.0.0 onward.

If you're running an earlier version of node during development, or you've set an older `engines` value in your `package.json` file, you may see an error or warning when attempting to upgrade without first updating Node.js.

You can check your installed version of Node.js with the `--version` flag.

**CLI**

```sh
node --version
```

For details on updating your installation of Node.js, [check their documentation](https://nodejs.org/en/download).

## Upgrade Sanity Studio

Upgrade with your package manager of choice by installing the latest version.

**NPM**

```sh
npm install sanity@latest
```

**PNPM**

```sh
pnpm add sanity@latest
```

You can learn more about upgrading Studio and other packages in our [Upgrading Sanity Studio](https://www.sanity.io/docs/studio/upgrade) guide.

# Email addresses show \[email protection]

If you’re experiencing issues where email addresses in Portable Text cause your page to display content like `[email protection` and cause additional renders, it may be due to your CDN’s protection settings.

One known cause is [Cloudflare’s Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/). This can cause email addresses to briefly, or always, show `[email protection]` instead of an email address string and include a link that contains `cdn-cgi`. Follow their guidance to configure this feature.

# Platform introduction

Sanity is a Content Operating System for the AI era. It provides the structured foundation, automation layer, and agentic context companies need to move faster, work smarter, and power every content experience—from websites to AI agents.

Build a content system that matches how your business operates with three interconnected layers:

- [Content Lake](https://www.sanity.io/docs/content-lake): The content database.
- [AI-first tools](https://www.sanity.io/docs/ai): MCP server, skills, and rules no matter where you build.
- [APIs and SDKs](https://www.sanity.io/docs/apis-and-sdks): Libraries and frameworks to build on top of Sanity.

[The Sanity Dashboard](https://www.sanity.io/docs/dashboard) for running your content operations apps, such as:

- [Studio](https://www.sanity.io/docs/studio): A customizable CMS.
- [Media Library](https://www.sanity.io/docs/media-library): Enterprise asset management.
- [Content Agent](https://www.sanity.io/docs/content-agent): Prompt your content.
- [Canvas](https://www.sanity.io/docs/canvas): AI-powered document editor.
- [Your custom-built apps](https://www.sanity.io/docs/app-sdk): SDK-driven apps for any use case.

Unlike traditional or headless CMSes, Sanity provides a foundation for your entire content lifecycle across all digital channels, with the flexibility to evolve as your needs change.

You can get started with Sanity in minutes. [Go here to explore the different ways](https://www.sanity.io/docs/getting-started).

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
