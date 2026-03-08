# Displaying Sanity content in Shopify

By default, the Sanity Connect application will sync Products, Product Variants, and Collections from Shopify into a Sanity dataset. This guide outlines how to sync additional data from Sanity into Shopify. This allows you to power your storefront with a range of content, provided through Shopify's metaobject and metafield APIs.

## Visual Walkthrough

This video walks through how you can leverage synced metafields and metaobjects within Shopify's native collection and theme tooling.

![Walkthrough of displaying Sanity content within Shopify](https://youtu.be/Obu3ea6J-8k)

## Configuring Synced Objects and Fields

To sync Sanity content:

1. On the Sanity Connect dashboard, enable the option 'Sync content from Sanity to Shopify'.
2. Save the configuration, and you will prompted to grant new access permissions to Sanity Connect. Allow the application to edit metaobjects within your store.
3. After confirming permissions, you will return to the Sanity Connect dashboard. Visit the ‘Metaobject’ tab listed at the top of your page. You will see a list of all document types available within your linked Sanity dataset. Select the document types that you want available within Shopify. These will sync alongside the native Product, Product Variant, and Collection objects.
4. Return to the Sanity Connect dashboard and trigger a full sync.

Only published documents will be synced to Shopify. Drafts are not processed.

## Updating the list of synced fields

After the initial configuration, you can review your synced resources from the 'Metafields' and 'Metaobjects' tabs within the Sanity Connect application.

### Metafields

The Metafields tab displays data for the standard Product, Product Variant, and Collection objects. Within Sanity, these entities sync over with the [native fields from the Shopify API](https://shopify.dev/docs/api/storefront/latest/objects/Product). However, you can extend these documents with custom fields. Your custom fields are available within Shopify as metafields.

On the Metafields tab you can review which custom fields are configured to sync, review the inferred data type for each field, select whether to [pin the field](https://help.shopify.com/en/manual/custom-data/metafields/pinning-metafield-definitions) within your Shopify storefront configuration, or remove the synced metafield definition.

Removing the metafield definition is a temporary action. This feature will be used if you're troubleshooting syncing issues or updating the inferred data type of the field. A removed metafield definition will be reset during the next sync event.

### Metaobjects

The Metaobjects tab displays data for all custom document types within Sanity. Each object is displayed along with its fields, similar to the Metafield tab.

Unique to metaobjects, there is an option to control whether the document type will sync to Shopify.

If you deselect a previously-synced metaobject, we will remove the synced metaobjects and its definition from your Shopify store once you save the configuration.

## Inferring Field Types

When data is synced from Sanity to Shopify, we create each metafield with a static data type. Data is mapped to Shopify using the below table:

| Sanity Schema Types | Shopify Metafield Types |
| --- | --- |
| Date | Date |
| Datetime | Date time |
| Number | Number (either decimal or integer) |
| String | String |
| Url | Url |
| Slug | String |
| Reference | Reference (Product, Variant, Collection) |
| Array | List |
| Block | JSON |
| Span | JSON |
| Text | Multiline text |
| Image  | Shopify File Reference (plugin-enabled) |
| File | Shopify File Reference (plugin-enabled) |
| Geopoint | JSON |
| Object | JSON |

Portable Text is serialized as JSON and can be integrated into Liquid storefronts using [portable-text-to-liquid](https://github.com/portabletext/portable-text-to-liquid).

Images are available in Shopify as a file reference when they are added to Sanity using the [Shopify Assets plugin](https://github.com/sanity-io/sanity-plugin-shopify-assets). Examples rendering these assets are available in the [portable-text-to-liquid](https://github.com/portabletext/portable-text-to-liquid) repository. Images and files added without the Shopify Assets plugin will sync to Shopify as JSON, referencing the asset hosted on Sanity’s CDN.

These data types are inferred from the values available during the first sync. If Sanity Connect encounters a value that doesn't match the expected type, then that field will be skipped. Unaffected fields will continue to sync.

## Accessing Your Data Within Shopify

Metaobjects are available via the [metaobject API](https://shopify.dev/docs/api/storefront/latest/objects/metaobject) and within your Shopify Admin at **Settings > Custom data**.

Metafields on the native Shopify objects are visible on each resource in a dedicated **Metafields** section.

## Collections

You can create a Dynamic Collection referencing metafields on your products. Any of your synced metafields will be available when specifying the conditions to match products.

You will not be able to delete a metafield definition (for example, to reset the type inference) if that field is being used by a Dynamic Collection.

## Pages

You can [create custom pages](https://help.shopify.com/en/manual/custom-data/metaobjects/webpages) in Shopify based on your metaobjects. You will select the metaobject definition to use and then create a template for displaying your content.

When you host pages on Shopify, the page URL is derived from your metaobject's handle. To customize this handle, use the 'Use slug as handle' setting, available on the Metaobjects tab in Sanity Connect.

## Visual Editor

In the [visual theme editor](https://shopify.com/admin/themes/current/editor), you can select metafields to serve as a dynamic source for an element. Compatible elements will have a ‘Connect Dynamic Source’ option available. This option will list available metafields whose type definitions match the inputs required for the component.

## Liquid

### Native object metafields

For Products, Product Variants, and Collections, you'll access metafields using the `app--6007307--sanity-fields` namespace.

```javascript
<div>Spiciness Level: {{ product.metafields['app--6007307--sanity-fields'].spicinessLevel }}</div>
<div>Season: {{ product.metafields['app--6007307--sanity-fields'].season }}</div>
<div>
  <h2>This product pairs well with</h2>
  <ul>
    {%- for p in product.metafields['app--6007307--sanity-fields'].pairsWellWith.value -%}
      <li>{{ p.title }}</li>
    {%- endfor -%}
  </ul>
</div>
```

### Metaobjects

Metaobjects are accessed by their Type ID, which is a concatenation of:

1. `app--6007307`: The Sanity Connect app ID
2. `sanity-documents`: The namespace where Sanity metaobjects are stored
3. `your-document-type-name`: The name of your synced metaobject

For example, this Liquid would list the `name` of all of our `recipe` documents:

```javascript
{% for o in shop.metaobjects['app--6007307--sanity-documents-recipe'].values -%}
	<li>{{ o.name }}</li>
{%- endfor -%}
```

To reference an individual document, you use the metaobject's handle. There are two possible values for the handle depending on your configuration.

1. The default handle is your document's Sanity ID. However you must transform the dashes in the ID to underscores. For example, this Liquid would display the picture associated a specific document:

```javascript
{{
  shop.metaobjects['app--6007307--sanity-documents-recipe'].ea53f398_e42b_4f2c_9495_e750a00eafaf.picture
  | image_url: width: 300
  | image_tag
}}
```

2. On the Metaobjects tab in Sanity Connect, you can enable a setting to 'Use slug as handle.' When enabled, your metaobject's handle will be the value you have set in a `slug`-type field that you have configured on the document. The first slug field found on the document is used. If there is no value for a slug field, then the handle defaults back to the Sanity document ID.

Handle names must follow a set of rules [documented in Shopify's platform](https://shopify.dev/docs/api/liquid/basics#handles). When a slug field is used as the handle, Shopify automatically transforms the field value. So a slug field of `exampleSlug` in Sanity would be `exampleslug` as a Shopify handle.

> \[!NOTE]
> Gotcha
> Updating the slug in Sanity will update the API handle for the object. Beware of hardcoded references to your objects.

## Storefront API

You would use [Metafields](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-product-metafield) and [Metaobjects](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject) within the Storefront API.

- Native Object Metafields- Namespace: `app--6007307--sanity-fields`

- Key: your metafield name

- Metaobjects- Handle: `app--6007307--sanity-documents-foo`, with `foo` replaced with the name of your metaobject

## Troubleshooting

### Stale Data

If you have automatic syncing enabled for Sanity Connect, updates to your documents should sync to Shopify within a few seconds. Most changes should appear right away in your storefronts. Shopify provides different caches for managing the content on your storefronts. Some destinations could take up to five minutes to update.

If you have stale data, first check the 'Logs' tab within Sanity Connect. That will report any sync failures.

Then check your Shopify Admin. You can navigate to your custom metaobjects and metafields to see if the new values have synced.

### Field Types

You may encounter issues syncing if:

1. You change your schema within Sanity and transform the type of data returned by a field
2. The values of your field could be interpreted as multiple data types

For the first situation, you should be able to remove the metafield definition and trigger a new sync. Your next sync should capture the new values and infer your new data type.

For the second situation, you may need to review your data within Sanity.

### String Types

Strings could be evaluated as four different data types in Shopify. They are evaluated in this order:

1. If `YYYY-MM-DD`, then we consider it a `date`.
2. If `YYYY-MM-DD[T]HH:MM:SS`, then we consider it a `date_time`.
3. If the string contains a newline, then we consider it a `multi_line_text_field`.
4. Otherwise, we consider it a `single_line_text_field`.

### Number Types

Sanity has a single [number data type](https://www.sanity.io/docs/studio/number-type) which can represent integers or decimal types. Shopify treats these as two different data types.

During sync, numbers are evaluated in this order:

1. If the number contains a decimal, it is `number_decimal`.
2. Otherwise, it is `number_integer`.

### Setting Your Desired Type

If the sync process fails due to a type mismatch, you’ll need to make updates within the Sanity Connect application to complete your sync.

Consider the following scenario:

> You have a `pageDescription` field that supports multi-line text. The first document that Sanity attempts to sync is a placeholder page you published with the value `"Placeholder description"`. Sanity Connect doesn’t see your schema, so this gets interpreted as a `single_line_text` field in Shopify. The next document that syncs has a longer description value that requires a `multi_line_text` field. Sanity Connect fails to sync this document.

Here you would take the following steps:

1. In Sanity Connect, navigate to the Metaobjects page. Navigate to the document type that failed.
2. Find the `pageDescription` field and select 'Edit Type'. Confirm the update.

We provide automatic type updates for string fields (between `single_line_text_field` and `multi_line_text_field`) and number fields (between `number_integer` and `number_decimal`).

### Missing Document Types

In general, we make any document types within Sanity available to sync. In some situations, a document type may not be available:

1. The document type name must only contain letters, numbers, and underscores (`_`).
2. Document type names must be unique when case-insensitive. For example, `aboutPage` and `aboutpage` will not sync as two metaobjects within Shopify.
