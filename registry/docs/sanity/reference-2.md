# Reference

You will find all data synced from Shopify under the `store` property of each document. Typically, you want to set these fields as `readOnly` or `hidden` in your Sanity Studio schemas.

## Sanity Publish State

All products sync from Shopify into Sanity, and we attempt to keep the `Status` in Shopify linked to the publishing state in Sanity.

- If a product is 'Draft' in Shopify- The document is created as unpublished in Sanity.

- Any changes to the product cascade to the unpublished draft in Sanity.

- If a product is 'Active' in Shopify- The document is created as published in Sanity.

- Any changes to the product cascade to the published document as well as any unpublished draft.

If a product is Archived or switched to the 'Draft' status, then we attempt to unpublish the matched document in Sanity. This operation will fail if the published Sanity document is referenced by another document in your dataset. We allow the operation to fail, and we will attempt to unpublish the document again on the next sync.

Because 'Draft' products are not published, we do not support syncing custom fields as [Shopify metafields](https://www.sanity.io/docs/developer-guides/displaying-sanity-content-in-shopify) on draft products. These custom fields will sync once the product is switched to 'Active'.

## **Product document**

This is an example of a product document. Note the array of references to variant documents.

```json
{
  "_createdAt": "2022-05-18T07:45:26Z",
  "_id": "shopifyProduct-7696133062907",
  "_rev": "sERZ3ZJ9MtNiP4BmT5zftt",
  "_type": "product",
  "_updatedAt": "2022-08-31T21:41:10Z",
  "body": [],
  "store": {
    "createdAt": "2022-05-12T17:39:51+01:00",
    "descriptionHtml": "",
    "gid": "gid://shopify/Product/7696133062907",
    "id": 7696133062907,
    "isDeleted": false,
    "options": [
      {
        "_key": "Color",
        "_type": "option",
        "name": "Color",
        "values": [
          "Blue",
          "Ecru",
          "Pink"
        ]
      }
    ],
    "previewImageUrl": "https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Green_1.jpg?v=1655598944",
    "priceRange": {
      "maxVariantPrice": 25.5,
      "minVariantPrice": 25
    },
    "productType": "",
    "slug": {
      "_type": "slug",
      "current": "soap-dish"
    },
    "status": "active",
    "tags": "",
    "title": "AUTOGRAF Soap Dish",
    "variants": [
      {
        "_key": "c8b492e1-3c24-527d-bffd-accc634177c7",
        "_ref": "shopifyProductVariant-43068621422843",
        "_type": "reference",
        "_weak": true
      },
      {
        "_key": "9128c62c-f887-594c-b9b8-ddaaf850ce84",
        "_ref": "shopifyProductVariant-43068621455611",
        "_type": "reference",
        "_weak": true
      },
      {
        "_key": "5d861cdf-bcfe-5781-81dd-d62db159442b",
        "_ref": "shopifyProductVariant-43068621488379",
        "_type": "reference",
        "_weak": true
      }
    ],
    "vendor": "Lucy Holdberg"
  }
}
```

## **Variant document**

This is an example of a variant document.

```json
{
  "_createdAt": "2022-05-27T08:49:54Z",
  "_id": "shopifyProductVariant-43068621422843",
  "_rev": "sERZ3ZJ9MtNiP4BmT5zftt",
  "_type": "productVariant",
  "_updatedAt": "2022-08-31T21:32:01Z",
  "store": {
    "compareAtPrice": 35,
    "createdAt": "2022-05-27T09:49:52+01:00",
    "gid": "gid://shopify/ProductVariant/43068621422843",
    "id": 43068621422843,
    "inventory": {
      "isAvailable": true,
      "management": "SHOPIFY",
      "policy": "CONTINUE"
    },
    "isDeleted": false,
    "option1": "Blue",
    "option2": "",
    "option3": "",
    "previewImageUrl": "https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Blue_1.jpg?v=1655598950",
    "price": 25.5,
    "productGid": "gid://shopify/Product/7696133062907",
    "productId": 7696133062907,
    "sku": "AGSD_BLUE",
    "status": "active",
    "title": "Blue"
  }
}
```

## **Collection document**

This is an example of a collection document:

```json
{
  "_createdAt": "2022-06-07T10:00:11Z",
  "_id": "shopifyCollection-396461834491",
  "_rev": "0penztPZlC32Cv2tesREk7",
  "_type": "collection",
  "_updatedAt": "2022-08-26T15:07:57Z",
  "store": {
    "createdAt": "2022-08-26T15:07:56.895Z",
    "descriptionHtml": "",
    "disjunctive": false,
    "gid": "gid://shopify/Collection/396461834491",
    "id": 396461834491,
    "imageUrl": "https://cdn.shopify.com/s/files/1/0639/3285/8619/collections/BLOMST_print.jpg?v=1655599663",
    "isDeleted": false,
    "rules": [
      {
        "_key": "7803ad21-682e-56b6-ae2a-4d380d0d120c",
        "_type": "object",
        "column": "TYPE",
        "condition": "Poster",
        "relation": "CONTAINS"
      }
    ],
    "slug": {
      "_type": "slug",
      "current": "prints"
    },
    "sortOrder": "BEST_SELLING",
    "title": "Prints"
  }
}
```

Below are the data types for the properties of a collection document:

```javascript
export type ShopifyDocumentCollection = {
  _id: `shopifyCollection-${string}` // Shopify product ID
  _type: 'collection'
  store: {
    id: number
    gid: `gid://shopify/Collection/${string}`
    createdAt: string
    isDeleted: boolean
    descriptionHtml: string
    imageUrl?: string
    rules?: {
      _key: string
      _type: 'object'
      column: Uppercase<string>
      condition: string
      relation: Uppercase<string>
    }[]
    disjunctive?: boolean
    slug: {
      _type: 'slug'
      current: string
    }
    sortOrder: string
    title: string
    updatedAt: string
  }
}
```

## **Custom webhook sync payload**

If you use the custom webhook sync, your handler will receive the shape described `Product` (and `Collection` if enabled) below. You can still use JavaScript or any other programming language in your custom handler even though we describe the payload using [TypeScript](https://www.typescriptlang.org/) syntax.

```typescript
export type Product = {
  id: `gid://shopify/Product/${string}`
  title: string
  description: string
  descriptionHtml: string
  featuredImage?: ProductImage
  handle: string
  images: ProductImage[]
  options: ProductOption[]
  priceRange: ProductPriceRange
  productType: string
  tags: string[]
  variants: ProductVariant[]
  vendor: string
  status: 'active' | 'archived' | 'draft' | 'unknown'
  publishedAt: string
  createdAt: string
  updatedAt: string
}
export type ProductImage = {
  id: `gid://shopify/ProductImage/${string}`
  altText?: string
  height?: number
  width?: number
  src: string
}
export type ProductOption = {
  id: `gid://shopify/ProductOption/${string}`
  name: string
  position: number
  values: string[]
}
export type ProductPriceRange = {
  minVariantPrice?: number
  maxVariantPrice?: number
}
export type ProductVariant = {
  id: `gid://shopify/ProductVariant/${string}`
  title: string
  compareAtPrice?: number
  barcode?: string
  inventoryPolicy: string
  inventoryQuantity: number
  inventoryManagement: string
  position: number
  requiresShipping: boolean
  sku: string
  taxable: boolean
  weight: number
  weightUnit: string
  price: string
  createdAt: string
  updatedAt: string
  image?: ProductImage
  product: {
    id: `gid://shopify/Product/${string}`
    status: 'active' | 'archived' | 'draft' | 'unknown'
  }
  selectedOptions: {
    name: string
    values: string
  }[]  
}
export type Collection = {
  id: `gid://shopify/Collection/${string}`
  createdAt: string
  handle: string
  descriptionHtml: string
  image?: CollectionImage
  rules?: {
    column: string
    condition: string
    relation: string
  }[]
  disjunctive?: boolean
  sortOrder: string
  title: string
  updatedAt: string
}
export type CollectionImage = {
  altText: string
  height?: number
  width?: number
  src: string
}

// When products are created, updated or manually synced
export type payloadProductsSync = {
  action: 'create' | 'update' | 'sync'
  products: Product[]
}

// When products are deleted
export type payloadProductsDelete = {
  action: 'delete'
  productIds: number[]
}

// When collections are created, updated or manually synced
export type payloadCollectionsSync = {
  action: 'create' | 'update' | 'sync'
  collections: Collection[]
}

// When collections are deleted
export type payloadCollectionsDelete = {
  action: 'delete'
  collectionIds: number[]
}

export type requestPayload = payloadProductsDelete | payloadProductsSync | payloadCollectionsDelete | payloadCollectionsSync
```

# Content Agent

#### Get started

[Get started with Sanity Content Agent](https://www.sanity.io/docs/content-agent/introduction)

[How AI Credits work](https://www.sanity.io/docs/platform-management/how-ai-credits-work)

#### Additional resources

[Community discord](https://snty.link/community)
