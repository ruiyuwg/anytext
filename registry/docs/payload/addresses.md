## Addresses

The `addresses` option is used to configure the addresses collection and supported fields. Defaults to `true` which will create an `addresses` collection with default fields. It also takes an object:

| Option                        | Type                 | Description                                                                                                                                                  |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `addressFields`               | `FieldsOverride`     | A function that is given the `defaultFields` as an argument and returns an array of fields. Use this to customise the supported fields for stored addresses. |
| `addressesCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `addresses` with a function where you can access the `defaultCollection` as an argument.                           |
| `supportedCountries`          | `CountryType[]`      | An array of supported countries in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Defaults to all countries.                 |

You can add your own fields or modify the structure of the existing on in the collection. Example for overriding the default fields:

```ts
addresses: {
  addressesCollectionOverride: ({ defaultCollection }) => ({
    ...defaultCollection,
    fields: [
      ...defaultCollection.fields,
      {
        name: 'googleMapLocation',
        label: 'Google Map Location',
        type: 'text',
      },
    ],
  })
}
```

### supportedCountries

The `supportedCountries` option is an array of country codes in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). This is used to limit the countries that can be selected when creating or updating an address. If not provided, all countries will be supported. Currently used for storing addresses only.

You can import the default list of countries from the plugin:

```ts
import { defaultCountries } from '@payloadcms/plugin-ecommerce/client/react'
```
