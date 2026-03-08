# Integrating external data sources with Sanity

> \[!NOTE]
> This developer guide was contributed by Chris LaRocque (Senior Solution Architect).

This guide will explain the 2 common patterns for integrating external data sources with Sanity. Our [plugins page](https://www.sanity.io/plugins) includes pre-built integrations for popular platforms, but if an integration doesn’t exist this guide can help walk you through how to build one of your own.

## 2 ways to integrate

There are 2 primary ways to bring external data into Sanity:

1. Creating documents for each external “item” (commonly referred to in Sanity terms as a **sync plugin**), or…
2. Saving an “item” as a field’s value on an as-needed basis (often referred to as an **input plugin**)

## Creating a document for each item (sync plugin)

### Overview

Creating a document for each item in an external system is often referred to as a **sync plugin** in Sanity terminology. The best example of a Sanity sync plugin would be [Sanity Connect for Shopify](https://www.sanity.io/docs/apis-and-sdks/sanity-connect-for-shopify), which has excellent [documentation showing custom handlers](https://www.sanity.io/docs/developer-guides/custom-sync-handlers-for-sanity-connect) that illustrate the approximate process a sync plugin uses to keep Sanity up to date with external data:

1. **A sync is triggered** - this could be from a webhook (if the external system supports them) or something less granular like a cron job
2. **Determine the data to be synced** - Most webhooks will provide exactly what changed, but some cases may require comparing updated timestamps between the external data and Sanity documents
3. **Create or update the relevant Sanity documents** - Use our [client](https://www.sanity.io/docs/js-client) or our [Actions API](https://www.sanity.io/docs/http-actions) to create or update the relevant documents

### Pros and cons

**Pros**

- Data for the front-end can all be fetched from Sanity’s API in 1 query, as opposed to one call to Sanity and a 2nd call to the external service
- Can be expanded to allow 2-way syncing, where changes in Sanity are “pushed” back to the external system (via [GROQ webhooks](https://www.sanity.io/docs/content-lake/webhooks))
- Studio users can see all data for each item

**Cons**

- More infrastructure usage required for sync process - usually a serverless function to run the sync and a cron job or webhook to trigger the syncs
- Typically a more involved development task than adding data to a field
- Depending on external system’s capabilities, changes may not be synced with Sanity immediately
- The schema for the external items used by the Sanity Studio must be kept up to date with the external data

### Example

The following is a simplified breakdown of the [code example](https://www.sanity.io/docs/developer-guides/custom-sync-handlers-for-sanity-connect) shown in the Shopify Sanity Connect docs. It shows a serverless function that receives a webhook from Shopify when products are created, updated, or deleted, and syncs those changes to documents in Sanity.

```typescript
// ./src/pages/api/sync-handler.ts
import { createClient } from "@sanity/client";

// Create a Sanity client with a write token to allow creating and updating of documents
// Read more on auth, tokens and securing them: https://www.sanity.io/docs/http-auth
const sanityClient = createClient({
  apiVersion: "2025-02-04",
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_ADMIN_AUTH_TOKEN,
  useCdn: false,
});

/**
 * A Next.js API route handler for the pages router
 * Takes incoming webhooks and creates/updates/deletes documents based on external system's changes
 */
export default async function handler(req, res) {
  const { body } = req;

  try {
    // Create a transaction to batch operations to Sanity
    const transaction = sanityClient.transaction();

    // Perform different operations based on the webhook action type
    switch (body.action) {
      case "create":
      case "update":
      case "sync":
        await createOrUpdateProducts(transaction, body.products);
        break;
      case "delete":
        const documentIds = body.productIds.map((id) =>
          getDocumentProductId(id)
        );
        await deleteProducts(transaction, documentIds);
        break;
    }
    await transaction.commit();
  } catch (err) {
    console.error("Transaction failed: ", err.message);
  }

  res.status(200).json({ message: "OK" });
}

/**
 * Creates (or updates if already existing) Sanity documents of type `shopify.product`.
 * Patches existing drafts too, if present.
 *
 * All products will be created with a deterministic _id in the format `product-${SHOPIFY_ID}`
 */
async function createOrUpdateProducts(transaction, products) {
  // Extract draft document IDs from current update
  const draftDocumentIds = products.map((product) => {
    const productId = extractIdFromGid(product.id);
    return `drafts.${getDocumentProductId(productId)}`;
  });

  // Determine if drafts exist for any updated products
  const existingDrafts = await sanityClient.fetch(`*[_id in $ids]._id`, {
    ids: draftDocumentIds,
  });

  products.forEach((product) => {
    // Build Sanity product document
    const document = buildProductDocument(product);
    const draftId = `drafts.${document._id}`;

    // Create (or update) existing published document
    transaction
      .createIfNotExists(document)
      .patch(document._id, (patch) => patch.set(document));

    // Check if this product has a corresponding draft and if so, update that too.
    if (existingDrafts.includes(draftId)) {
      transaction.patch(draftId, (patch) =>
        patch.set({
          ...document,
          _id: draftId,
        })
      );
    }
  });
}

/**
 * Delete corresponding Sanity documents of type `shopify.product`.
 * Published and draft documents will be deleted.
 */
async function deleteProducts(transaction, documentIds) {
  documentIds.forEach((id) => {
    transaction.delete(id).delete(`drafts.${id}`);
  });
}

/**
 * Build Sanity document from webhook product payload
 */
function buildProductDocument(product) {
  const {
    featuredImage,
    id,
    productType,
    priceRange,
    status,
    title,
    productId
  } = product;

  // Build Sanity document 
  return {
    _id: getDocumentProductId(productId),
    _type: "shopify.product",
    image: featuredImage?.src,
    priceRange,
    productType,
    status,
    title,
  };
}

/**
 * Map Shopify product ID number to a corresponding Sanity document ID string
 * e.g. 12345 => product-12345
 */
function getDocumentProductId(productId) {
  return `product-${productId}`;
}

```

Again, this is simplified to illustrate a typical workflow, check out the example in the Sanity Connect docs for a better real world example, including things like better error handling that were removed here for brevity.

## Saving as fields (input plugin)

### Overview

Integrating external data as field values is typically referred to as an **input plugin**. Input plugins will provide a custom field type that includes an input for browsing the data in the external system from the Studio, where selecting an item sets the field’s value. The data saved to the field can vary in complexity to match your use case, some plugins will save just a string for an item’s name or ID, others will copy an object with several properties, like a set of URLs for different image formats.

> \[!TIP]
> [@sanity/sanity-plugin-async-list](https://www.npmjs.com/package/@sanity/sanity-plugin-async-list) provides an easy starting point for this type of implementation

### Pros and cons

**Pros**

- Less time to implement
- Overall simpler integration - less points of failure and less potential ongoing maintenance
- Allows external system to be the source of truth - can be beneficial if the external data is frequently changing

Cons

- If the data changes in the external system, the data in Sanity will not be updated automatically and will be outdated until a [content migration](https://www.sanity.io/docs/content-lake/schema-and-content-migrations) is ran. For this reason it’s best to sync fields that are considered immutable in the external system, like an `id`.

### Example

Here’s an example using [@sanity/sanity-plugin-async-list](https://www.npmjs.com/package/@sanity/sanity-plugin-async-list) to fetch the names of Disney Characters and add them as an input in a document.

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'
import {asyncList} from '@sanity/sanity-plugin-async-list'

export default defineConfig({
	// ...rest of config
  plugins: [
    asyncList({
      schemaType: 'disneyCharacter',
      loader: async () => {
        const response = await fetch('https://api.disneyapi.dev/character')
        const result: {data: {name: string}[]} = await response.json()

        return result.data.map((item) => {
          return {value: item.name, ...item}
        })
      },
    }),
   // ...rest of plugins
  ],
})
```

Add the name from schemaType to the document type where you want to use the field

```typescript
// post.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'disney',
      type: 'disneyCharacter',
    }),
  ],
})
```

Then see the field in your Studio

# Klaviyo (email campaigns)

This guide explains how two Sanity Functions working together create and send marketing campaigns through [Klaviyo](https://help.klaviyo.com/hc/en-us/articles/115005054847), integrated with [Sanity Connect for Shopify](https://www.sanity.io/docs/apis-and-sdks/sanity-connect-for-shopify) setup. [This is the setup we use for the Sanity Swag store](https://www.sanity.io/blog/studio-to-inbox).

> \[!TIP]
> E-Commerce Not Required
> We're using the Shopify Connect app here because our use case is sending out email campaigns with products. You could use this to suit any of your needs outside of commerce.

With this guide you will:

- Build a flow using Klaviyo Campaigns directly in the Sanity Studio.
- Update Klaviyo HTML templates directly without opening Klaviyo.
- Send Campaigns to your Klaviyo customers directly from the Sanity Studio with your own editorial workflows.

## Prerequisites

- An existing or [new Klaviyo account](https://www.klaviyo.com/sign-up)
- An existing or [new Sanity project with a studio ](https://www.sanity.io/docs/getting-started)
- Familiarity with Sanity Functions

[Create a Document Function](https://www.sanity.io/docs/functions/function-quickstart)

[Official Function recipes](https://www.sanity.io/exchange/type=schemas/by=sanity)

## Overview

The marketing campaign system consists of two main [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction) that work in tandem:

1. `marketing-campaign-create`: Creates and updates marketing campaigns and email templates
2. `marketing-campaign-send`: Sends campaigns to subscribers

These functions automatically process content changes and integrate with [Klaviyo's API ](https://developers.klaviyo.com/en/reference/api_overview)for email marketing automation.

## How to set up Klaviyo

Before using these functions, you need to set up your Klaviyo account:

1. **Create a Klaviyo Account:** Sign up at [klaviyo.com](https://www.klaviyo.com) and complete account verification

2. **Create a List**1. Navigate to Audience → Lists & Segments in your Klaviyo dashboard

3. Create a new list (e.g., "Newsletter Subscribers")

4. Take note the List ID from the URL or in list settings (you'll need this later)

5. \*\*Generate an API Key: \*\*Go to Account → Settings → API Keys- Create a new Private API key with the following scopes:1. `campaigns:read`

6. `campaigns:write`

7. `templates:read`

8. `templates:write`

9. **Copy the API key** for environment configuration

### Sanity Connect for Shopify (optional)

These functions work with content synced from Shopify via [Sanity Connect for Shopify](https://www.sanity.io/docs/apis-and-sdks/sanity-connect-for-shopify). The system expects:

- Products synced from Shopify as `shopify.product` documents
- Emails created in Sanity that reference these products
- Marketing campaigns that can be created from email content

## Implementation
