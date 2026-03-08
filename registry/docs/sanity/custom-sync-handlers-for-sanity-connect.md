# Custom sync handlers for Sanity Connect

A custom sync handler allows you to provide an endpoint which receives updates from Shopify and passes data into your content lake. Typically, this will be a serverless function where you can reshape the data from Shopify and apply business logic before it is passed to your content lake.

## When to use a custom sync handler

There are a number of scenarios where you may choose to implement a custom sync handler - common examples include:

- Where you need to apply additional logic to the data - for example, querying additional APIs to retrieve more data (e.g. the Shopify API to get additional metafields)
- You may want to reduce your document usage on Sanity by only syncing selected products, or syncing variants as an object on product documents rather than variant documents.
- Where you want to amend the default manner in which Sanity Connect handles a product being deleted on Shopify - by setting `isDeleted` to `true` - to fully delete the document from your content lake.

## How custom sync handlers work

When enabled, the custom sync handler will send a payload on every update from Shopify as a POST request. You can write your custom business logic in your endpoint and [update](https://www.sanity.io/docs/content-lake/transactions) your content lake accordingly in the function, or respond with a set of documents which Sanity Connect will update for you.

Sanity Connect expects a response header with `content-type: application/json` and will regard a `200` status code as a success. Any other status code will be considered a failure.

You can find the [shape of the payload your handler](https://www.sanity.io/docs/apis-and-sdks/sanity-connect-for-shopify-reference) will receive in our Sanity Connect reference.

> \[!WARNING]
> Gotcha
> The request has a 10s timeout and your handler needs to reply before that. Any failed requests will be retried up to 10 times.
> If your handler needs more time to complete updates (for example if it calls a third party API), a common pattern would be to store the payload in a queue for background processing, and respond `200 OK` immediately to acknowledge receipt of the payload.

> \[!WARNING]
> Gotcha
> This operation will be batched when manually syncing, especially when dealing with larger catalogs.

> \[!WARNING]
> Gotcha
> Changes in product inventory (through sales) will also trigger updates to your custom handler.
> Make sure to tailor your custom handler to account for how our [API CDN invalidates cache](https://www.sanity.io/docs/content-lake/api-cdn) on writes to non-draft documents, especially if operating on a high traffic stores with fast moving content.

## Example custom sync handler function

Below is an example of a barebones custom function that will:

- Create/update/delete products (including drafts) in the Content Lake on Shopify product operations
- Only deal with products (variants are included as objects within products)
- Manual sync will create and update products on your dataset, but will not delete products that have since been removed.

For a more complete example, refer to [this gist](https://gist.github.com/snorrees/1ca7c3191d62ede6b9b5d0a1822d7103#file-requirements-md).

```javascript
import {createClient} from "@sanity/client";

// Document type for all incoming synced Shopify products
const SHOPIFY_PRODUCT_DOCUMENT_TYPE = "shopify.product";

// Prefix added to all Sanity product document ids
const SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX = "product-";

// Enter your Sanity studio details here.
// You will also need to provide an API token with write access in order for this
// handler to be able to create documents on your behalf.
// Read more on auth, tokens and securing them: https://www.sanity.io/docs/http-auth
const sanityClient = createClient({
  apiVersion: "2021-10-21",
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_ADMIN_AUTH_TOKEN,
  useCdn: false,
});

/**
 * Sanity Connect sends POST requests and expects both:
 * - a 200 status code
 * - a response header with `content-type: application/json`
 * 
 * Remember that this may be run in batches when manually syncing.
 */
export default async function handler(req, res) {
  // Next.js will automatically parse `req.body` with requests of `content-type: application/json`,
  // so manually parsing with `JSON.parse` is unnecessary.
  const { body, method } = req;

  // Ignore non-POST requests
  if (method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const transaction = sanityClient.transaction();
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
 * Build Sanity document from product payload
 */
function buildProductDocument(product) {
  const {
    featuredImage,
    id,
    options,
    productType,
    priceRange,
    status,
    title,
    variants,
  } = product;
  const productId = extractIdFromGid(id);
  return {
    _id: getDocumentProductId(productId),
    _type: SHOPIFY_PRODUCT_DOCUMENT_TYPE,
    image: featuredImage?.src,
    options: options?.map((option, index) => ({
      _key: String(index),
      name: option.name,
      position: option.position,
      values: option.values,
    })),
    priceRange,
    productType,
    status,
    title,
    variants: variants?.map((variant, index) => {
      const variantId = extractIdFromGid(variant.id);
      return {
        _key: String(index),
        compareAtPrice: Number(variant.compareAtPrice || 0),
        id: variantId,
        inStock: !!variant.inventoryManagement
          ? variant.inventoryPolicy === "continue" ||
            variant.inventoryQuantity > 0
          : true,
        inventoryManagement: variant.inventoryManagement,
        inventoryPolicy: variant.inventoryPolicy,
        option1: variant?.selectedOptions?.[0]?.value,
        option2: variant?.selectedOptions?.[1]?.value,
        option3: variant?.selectedOptions?.[2]?.value,
        price: Number(variant.price || 0),
        sku: variant.sku,
        title: variant.title,
      };
    }),
  };
}

/**
 * Extract ID from Shopify GID string (all values after the last slash)
 * e.g. gid://shopify/Product/12345 => 12345
 */
function extractIdFromGid(gid) {
  return gid?.match(/[^\/]+$/i)[0];
}

/**
 * Map Shopify product ID number to a corresponding Sanity document ID string
 * e.g. 12345 => product-12345
 */
function getDocumentProductId(productId) {
  return `${SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX}${productId}`;
}
```
