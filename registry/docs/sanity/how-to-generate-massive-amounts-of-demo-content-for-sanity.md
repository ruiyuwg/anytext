# How to generate massive amounts of demo content for Sanity

> \[!NOTE]
> This developer guide was contributed by Simeon Griggs (Principal Educator).

Being able to query demo content through your API can make building and testing front ends, plugins, and integrations easier. Learn how with Faker.js and a Sanity CLI script.

Fake content is useful when you want to build, test, and demo schema, plugins, and integrations. And sometimes you want to generate more than it's reasonable to type out in the Studio. This guide will teach you how to create fake demo content at scale directly in the Sanity Content Lake.

You'll begin by logging your Sanity project's details in a terminal and step-by-step create an advanced content creation script, including:

- Using Sanity CLI to execute scripts with authentication to change content
- Creating documents in transactions for reduced API request usage
- Programmatically generating references when creating new documents
- Uploading image assets during a content creation script
- Converting HTML to block content with Portable Text
- Processing API requests in batches to avoid rate limits

## Prerequisites

- You’re familiar with Sanity Studio and the command line.
- You have a non-production project and/or a non-production dataset where deleting and inserting content won’t get you in trouble!
- The code examples here are written in TypeScript, but you won’t *need* to know or use TypeScript to get the same outcome.

> \[!TIP]
> While this guide covers generating fake content, the ideas and examples explored may give you some insight into how to write **content migration scripts** from existing sources. Solving for things like image uploads, concurrency, and avoiding rate limits.

### Getting setup

You may wish to adapt the content creation scripts in this guide to suit your own content model. However, if you’d prefer to use the script as-is, you’ll need to add the following schema types to your Studio to see the content it will create.

First, add the Post type schema:

```typescript
// ./schemas/postType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'fake',
      type: 'boolean',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category.title',
    },
  },
})
```

And the Category type schema:

```typescript
// ./schemas/categoryType.ts

import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
```

Make sure you import both of these into the schema types of your `sanity.config.ts` file.

Let’s begin!

### Configuring the Sanity CLI

These details were found in your CLI client configuration, held in a file likely generated for you when you created a new Studio. Open `sanity.cli.ts` and take a look. If you don't have this file in your project, create it with the code example below.

Yours should look something like this:

```typescript
// ./sanity.cli.ts

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'sbbltfn5',
    dataset: 'production',
  },
})
```

If you’d prefer to run your CLI commands using a different dataset, you could update the configuration here in this file.

Or you could overwrite the CLI client config in your script like this:

```typescript
// ./scripts/createData.ts

const client = getCliClient().withConfig({
  dataset: 'development'
})
```

Or even overwrite the dataset dynamically by passing in an argument to `sanity exec`; there are examples of [how to do this in the documentation](https://www.sanity.io/docs/cli-reference/exec).

For this guide, you’ll just use the default CLI client configuration.

## Creating a Sanity CLI script

First, a new directory for your scripts in the root of your Sanity Studio project, and in it, create a new file called `createData.ts`

```typescript
// ./scripts/createData.ts

import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function createData() {
  console.log(`Create new data with:`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)
}

createData()
```

Now, from the command line [execute the script](https://www.sanity.io/docs/cli-reference/exec) with:

```text
npx sanity@latest exec scripts/createData.ts
```

In the console, you should see something like…

```text
Create new data with:
Project ID: sbbltfn5
Dataset: production
```

…but with *your* project ID and dataset name.

## Install Faker

[Faker](https://fakerjs.dev/) is a package containing various kinds of fake content for all common use cases. [Their API reference](https://fakerjs.dev/api/) shows the extensive list of available fake content types.

Add the Faker package to your Studio with the following install command:

```text
npm install @faker-js/faker --save-dev
```

Let’s update the `createData` script to generate five blog posts with just the `_id` and `title`.

```typescript
// ./scripts/createData.ts

import {faker} from '@faker-js/faker'
import type {SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const COUNT = 5

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  const posts: SanityDocumentLike[] = []

  for (let i = 0; i < COUNT; i++) {
    posts.push({
      _type: 'post',
      _id: faker.string.uuid(),
      title: faker.company.catchPhrase(),
    })
  }

  console.log(posts)
}

createData()
```

> \[!TIP]
> It’s optional to supply the `_id` when creating new documents in Sanity. But if you are programmatically building references between new documents, you’ll need to know them in advance.

Now run the script again:

```text
npx sanity@latest exec scripts/createData.ts
```

Now you should see the same messages as before, along with an array of five new post documents with new titles; they look like this:

```json
{
  _type: 'post',
  _id: '732488ef-b2a7-4bae-8c93-f007133afe2f',
  title: 'Polarised multi-tasking array'
}
```

Now you have fake data; the last step is to write it to Sanity.

## Create new documents in a transaction

Update your script again, and this time, instead of creating an array of post objects, you’ll add them to a single [transaction](https://www.sanity.io/docs/content-lake/transactions), which is then committed to perform all the document creation mutations at once.

Update your `createData` script:

```typescript
// ./scripts/createData.ts

import {faker} from '@faker-js/faker'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const COUNT = 5

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  const transaction = client.transaction()

  for (let i = 0; i < COUNT; i++) {
    transaction.create({
      _type: 'post',
      _id: faker.string.uuid(),
      title: faker.company.catchPhrase(),
    })
  }

  transaction
    .commit()
    .then((res) => {
      console.log(`Complete!`, res)
    })
    .catch((err) => {
      console.error(err)
    })
}

createData()
```

> \[!WARNING]
> Above, five documents will be created in each transaction based on the `COUNT` constant. You can increase this number, but there are limits to how much data you can send in a single transaction. See [Technical Limits](https://www.sanity.io/docs/content-lake/technical-limits) for more information. Examples later in this guide perform transactions in batches.

Run the script again, this time with the `--with-user-token` argument so that your Sanity credentials are used to write the content:

```text
npx sanity@latest exec scripts/createData.ts --with-user-token
```

You should get a “Complete!” message and a list of all the results and affected document IDs in the transaction. Open your Studio to find your newly created documents.

Note that because you used your own authentication to run this script – these created documents are attributed to you.

You could generate an [API Token in Manage](https://www.sanity.io/manage) and use that in your client config to assign these documents to a robot.

## Faking references between documents

While Sanity Content Lake can auto-generate `_id`s for new documents, you can also determine it when you create the document. This lets you create [references](https://www.sanity.io/docs/studio/reference-type) between new documents in the same transaction. To do this, you'll need to modify the script to create all the data ahead of time in memory before committing it.

In this version of the script, both posts and categories are created in advance so that each post can pick a category at random. References are created by taking the published `_id` of another document and assigning it to a `_ref` key.

```typescript
// ./scripts/createData.ts

// Create 10 posts and 5 categories
// Every post has a random category

import {faker} from '@faker-js/faker'
import type {SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const POST_COUNT = 10
const CATEGORY_COUNT = 5

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  const categories: SanityDocumentLike[] = []

  for (let categoryI = 0; categoryI < CATEGORY_COUNT; categoryI++) {
    categories.push({
      _type: 'category',
      _id: faker.string.uuid(),
      title: faker.company.catchPhraseAdjective(),
    })
  }

  const posts: SanityDocumentLike[] = []

  for (let postI = 0; postI < POST_COUNT; postI++) {
    posts.push({
      _type: 'post',
      _id: faker.string.uuid(),
      title: faker.company.catchPhrase(),
      category: {
        _type: 'reference',
        _ref: categories[Math.floor(Math.random() * CATEGORY_COUNT)]._id,
      },
    })
  }

  const data = [...categories, ...posts]

  const transaction = client.transaction()

  for (let dataI = 0; dataI < data.length; dataI++) {
    transaction.create(data[dataI])
  }

  transaction
    .commit()
    .then((res) => {
      console.log(`Complete!`, res)
    })
    .catch((err) => {
      console.error(err)
    })
}

createData()
```

Now run your script again:

```text
npx sanity@latest exec scripts/createData.ts --with-user-token
```

You should see the new `post` and `category` documents where every `post` has a `category` reference.

## Create a lot of documents while avoiding rate limits

Our script works when making small numbers of documents. However, if you increase the number in the script to hundreds or thousands, you may [run into rate limits while bulk-creating content](https://www.sanity.io/docs/content-lake/technical-limits).

To solve this, update the code to create documents in batches. There are several packages you could use to do this. For this tutorial, you’ll use [p-limit](https://www.npmjs.com/package/p-limit). This gives you a function to control how many requests run concurrently. In the code below, you’ll run them one at a time.

Note that the content creation script becomes somewhat more complicated. However, the extra complexity unlocks the ability to write greater volumes of fake content as well as perform asynchronous operations during the process, which is useful for image uploads.

Install p-limit into your Studio dev dependecies:

```text
npm install --save-dev p-limit
```

In the updated code below are several key changes:

1. Every newly created document has a boolean field named `fake` set to `true`.
2. A `client.delete()` method first runs to remove all existing `post` and `category` documents from the dataset that have this boolean field of `fake` set to `true`. This helps clear out any previously generated fake content each time you run the script.
3. The transactions to create `category` and `post` documents are separated. Categories are created first so that references to them in the Post creation transactions will succeed.
4. The script still creates five categories and ten posts, and those ten posts will be created for as many “batches” as specified when running the script. These batches run one at a time.
5. An optional argument to define the number of batches can be used when running the script.

Here’s the updated, asynchronous, more limit-friendly script:

```typescript
// ./scripts/createData.ts

// Create 2 batches of 10 posts with references to one of 5 categories

import {faker} from '@faker-js/faker'
import pLimit from 'p-limit'
import type {SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const POST_COUNT = 10
const CATEGORY_COUNT = 5
const BATCHES_COUNT = 2
const args = process.argv.slice(2)
const batchesArg = args.find((arg) => arg.startsWith('batches='))?.split('=')[1]
const batches = batchesArg ? parseInt(batchesArg) : BATCHES_COUNT
const limit = pLimit(1)

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  console.log(`Deleting previously faked posts and categories...`)
  await client.delete({query: `*[_type in ["post", "category"] && fake == true]`})

  const categories: SanityDocumentLike[] = []

  for (let categoryI = 0; categoryI < CATEGORY_COUNT; categoryI++) {
    categories.push({
      _type: 'category',
      _id: faker.string.uuid(),
      title: faker.company.catchPhraseAdjective(),
      fake: true,
    })
  }

  const categoriesTransaction = client.transaction()

  for (let categoryI = 0; categoryI < categories.length; categoryI++) {
    categoriesTransaction.create(categories[categoryI])
  }

  const categoriesBatch = limit(async () => {
    return categoriesTransaction
      .commit()
      .then(() => {
        console.log(`Created ${CATEGORY_COUNT} categories`)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  console.log(`Preparing ${batches} batches of ${POST_COUNT} posts...`)

  const postsBatches = Array.from({length: batches}).map((_, batchIndex) => {
    limit(async () => {
      const posts: SanityDocumentLike[] = []

      for (let postI = 0; postI < POST_COUNT; postI++) {
        posts.push({
          _type: 'post',
          _id: faker.string.uuid(),
          title: faker.company.catchPhrase(),
          category: {
            _type: 'reference',
            _ref: categories[Math.floor(Math.random() * CATEGORY_COUNT)]._id,
          },
          fake: true,
        })
      }

      const postTransaction = client.transaction()

      for (let postI = 0; postI < posts.length; postI++) {
        postTransaction.create(posts[postI])
      }

      return postTransaction
        .commit()
        .then(() => {
          console.log(`Post batch ${batchIndex + 1} Complete`)

          if (limit.pendingCount === 0) {
            console.log(`All batches complete!`)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })

  await Promise.all([categoriesBatch, ...postsBatches])
}

createData()
```

Run the script now, including an argument for the number of batches to create:

```text
npx sanity@latest exec scripts/createData.ts --with-user-token -- batches=3
```

You should now see a number of messages in the console as each transaction completes individually.

You may want to include a timeout function after each transaction to add a delay between each operation. Or, for more advanced controls, replace p-limit with [p-queue](https://github.com/sindresorhus/p-queue).

## Uploading fake demo images

When uploading images to Sanity, the Content Lake generates an [asset document](https://www.sanity.io/docs/content-lake/assets) with a unique ID and metadata (dimensions, color palette, etc.). This means uploading the same image twice would return the same `_id` and only result in one image being stored.

Because adding images to documents involves this two-step process – upload first, receive an `_id` second – you need the document creation to be asynchronous. Fortunately, your script now supports that!

In your updated script are these three lines:

```typescript
const imageUrl = faker.image.urlPicsumPhotos({width: 800, height: 600})
const imageBuffer = await fetch(imageUrl).then((res) => res.arrayBuffer())
const imageAsset = await client.assets.upload('image', Buffer.from(imageBuffer))
```

Here's how image uploads work:

1. First, you'll create a new image URL from Faker.
2. Next, you'll need to fetch the image data and return a “[Buffer](https://developer.mozilla.org/en-US/docs/Glossary/Buffer).”
3. This buffer can then be uploaded to the Content Lake using `client.assets.upload`.
4. You'll receive an `_id` to the image asset, which can be used as a reference in the new document.

Here’s the full script now:

```typescript
// ./scripts/createData.ts

// Create 2 batches of 10 posts with references to one of 5 categories

import {faker} from '@faker-js/faker'
import pLimit from 'p-limit'
import type {SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const POST_COUNT = 10
const CATEGORY_COUNT = 5
const BATCHES_COUNT = 2
const args = process.argv.slice(2)
const batchesArg = args.find((arg) => arg.startsWith('batches='))?.split('=')[1]
const batches = batchesArg ? parseInt(batchesArg) : BATCHES_COUNT
const limit = pLimit(1)

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  console.log(`Deleting previously faked posts and categories...`)
  await client.delete({query: `*[_type in ["post", "category"] && fake == true]`})

  const categories: SanityDocumentLike[] = []

  for (let categoryI = 0; categoryI < CATEGORY_COUNT; categoryI++) {
    categories.push({
      _type: 'category',
      _id: faker.string.uuid(),
      title: faker.company.catchPhraseAdjective(),
      fake: true,
    })
  }

  const categoriesTransaction = client.transaction()

  for (let categoryI = 0; categoryI < categories.length; categoryI++) {
    categoriesTransaction.create(categories[categoryI])
  }

  const categoriesBatch = limit(async () => {
    return categoriesTransaction
      .commit()
      .then(() => {
        console.log(`Created ${CATEGORY_COUNT} categories`)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  console.log(`Preparing ${batches} batches of ${POST_COUNT} posts...`)

  const postsBatches = Array.from({length: batches}).map((_, batchIndex) => {
    limit(async () => {
      const posts: SanityDocumentLike[] = []

      for (let postI = 0; postI < POST_COUNT; postI++) {
        const imageUrl = faker.image.urlPicsumPhotos({width: 800, height: 600})
        const imageBuffer = await fetch(imageUrl).then((res) => res.arrayBuffer())
        const imageAsset = await client.assets.upload('image', Buffer.from(imageBuffer))

        posts.push({
          _type: 'post',
          _id: faker.string.uuid(),
          title: faker.company.catchPhrase(),
          category: {
            _type: 'reference',
            _ref: categories[Math.floor(Math.random() * CATEGORY_COUNT)]._id,
          },
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
          },
          fake: true,
        })
      }

      const postTransaction = client.transaction()

      for (let postI = 0; postI < posts.length; postI++) {
        postTransaction.create(posts[postI])
      }

      return postTransaction
        .commit()
        .then(() => {
          console.log(`Post batch ${batchIndex + 1} Complete`)

          if (limit.pendingCount === 0) {
            console.log(`All batches complete!`)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })

  await Promise.all([categoriesBatch, ...postsBatches])
}

createData()
```

Now, run the script. It’s likely to take a little more time with each individual post waiting for an image to be uploaded. You may prefer to modify the script to upload 5–10 images first and then randomly pick from them.

```text
npx sanity@latest exec scripts/createData.ts --with-user-token -- batches=3
```

If run multiple times, this script may begin to populate your dataset with many unused images. Fortunately, there is a [script for removing images without references](https://www.sanity.io/schemas/delete-unused-assets-2ef651b5).

## Turning HTML into Portable Text

Turning HTML into Portable Text is simplified by [@sanity/block-tools](https://www.npmjs.com/package/@sanity/block-tools). For the final variation of the fake demo content creation script, you‘ll create an HTML string of paragraphs, convert it to Portable Text, and add it to each new fake post.

As the script runs in a Node environment, you’ll need [JSDOM](https://www.npmjs.com/package/jsdom) to turn these HTML strings into DOM elements.

Install both the block tools and JSDOM packages into your Studio:

```text
npm i --save-dev @sanity/block-tools jsdom @types/jsdom
```

Block Tools uses a compiled Studio schema definition to correctly convert different HTML elements into Portable Text objects. It can be as simple as the `body` field in the `post` document type – or support many custom styles, definitions, and blocks. See the [block schema type definition](https://www.sanity.io/docs/studio/block-type) for a complete list of options.

There’s a new `createFakeBlockContent` function at the top of your import script now, which takes the `blockContent` schema above and uses it to inform the conversion of 2–5 HTML paragraphs of text into Portable Text.

Here’s the script updated with some placeholder Portable Text:

```typescript
// ./scripts/createData.ts

// Create 2 batches of 10 posts with references to one of 5 categories

import {faker} from '@faker-js/faker'
import {htmlToBlocks} from '@sanity/block-tools'
import {Schema} from '@sanity/schema'
import {JSDOM} from 'jsdom'
import pLimit from 'p-limit'
import type {FieldDefinition, SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

import {schemaTypes} from '../schemas'

const client = getCliClient()
const POST_COUNT = 10
const CATEGORY_COUNT = 5
const BATCHES_COUNT = 2
const args = process.argv.slice(2)
const batchesArg = args.find((arg) => arg.startsWith('batches='))?.split('=')[1]
const batches = batchesArg ? parseInt(batchesArg) : BATCHES_COUNT
const limit = pLimit(1)

const defaultSchema = Schema.compile({types: schemaTypes})
const blockContentSchema = defaultSchema
  .get('post')
  .fields.find((field: FieldDefinition) => field.name === 'body').type

// Create 2-5 paragraphs of fake block content
function createFakeBlockContent() {
  const html = Array.from({length: faker.number.int({min: 2, max: 5})})
    .map(() => `<p>${faker.lorem.paragraph({min: 2, max: 5})}</p>`)
    .join(``)
  return htmlToBlocks(html, blockContentSchema, {
    parseHtml: (html) => new JSDOM(html).window.document,
  })
}

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  console.log(`Deleting previously faked posts and categories...`)
  await client.delete({query: `*[_type in ["post", "category"] && fake == true]`})

  const categories: SanityDocumentLike[] = []

  for (let categoryI = 0; categoryI < CATEGORY_COUNT; categoryI++) {
    categories.push({
      _type: 'category',
      _id: faker.string.uuid(),
      title: faker.company.catchPhraseAdjective(),
      fake: true,
    })
  }

  const categoriesTransaction = client.transaction()

  for (let categoryI = 0; categoryI < categories.length; categoryI++) {
    categoriesTransaction.create(categories[categoryI])
  }

  const categoriesBatch = limit(async () => {
    return categoriesTransaction
      .commit()
      .then(() => {
        console.log(`Created ${CATEGORY_COUNT} categories`)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  console.log(`Preparing ${batches} batches of ${POST_COUNT} posts...`)

  const postsBatches = Array.from({length: batches}).map((_, batchIndex) => {
    limit(async () => {
      const posts: SanityDocumentLike[] = []

      for (let postI = 0; postI < POST_COUNT; postI++) {
        const imageUrl = faker.image.urlPicsumPhotos({width: 800, height: 600})
        const imageBuffer = await fetch(imageUrl).then((res) => res.arrayBuffer())
        const imageAsset = await client.assets.upload('image', Buffer.from(imageBuffer))

        posts.push({
          _type: 'post',
          _id: faker.string.uuid(),
          title: faker.company.catchPhrase(),
          category: {
            _type: 'reference',
            _ref: categories[Math.floor(Math.random() * CATEGORY_COUNT)]._id,
          },
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
          },
          body: createFakeBlockContent(),
          fake: true,
        })
      }

      const postTransaction = client.transaction()

      for (let postI = 0; postI < posts.length; postI++) {
        postTransaction.create(posts[postI])
      }

      return postTransaction
        .commit()
        .then(() => {
          console.log(`Post batch ${batchIndex + 1} Complete`)

          if (limit.pendingCount === 0) {
            console.log(`All batches complete!`)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })

  await Promise.all([categoriesBatch, ...postsBatches])
}

createData()
```

Run the script again.

```text
npx sanity@latest exec scripts/createData.ts --with-user-token -- batches=3
```

You should now have 30 posts, each with an image, some paragraph text, a title, and a reference to one of five category documents.

## Wrap-up

You could now extend the `createData` script to add random booleans, numbers, and more. The concepts you’ve learned here can also extend to being able to [import existing data](https://www.sanity.io/docs/content-lake/importing-data) or create new Sanity content on demand or automatically with a deployed version of a similar script.
