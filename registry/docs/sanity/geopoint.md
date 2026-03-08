# Geopoint

An object signifying a global latitude/longitude/altitude coordinate. Longitude and latitude is stored as decimal degrees, while altitude is stored as a floating point representing meters above sea level. See the [GeopointDefinition](https://reference.sanity.io/sanity/index/GeopointDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to geopoint. |
| name | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal value or a resolver function that returns either a literal value or a promise resolving to the initial value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |

## Validation ([GeopointRule](https://reference.sanity.io/sanity/index/GeopointRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

Input

```javascript
{
  title: 'Launchpad Location',
  name: 'location',
  type: 'geopoint'
}
```

Response

```json
{
  "_type": "geopoint",
  "lat": 58.63169011423141,
  "lng": 9.089101352587932,
  "alt": 13.37
}
```

While the `geopoint` type is available in Sanity by default, you will probably want to install a plugin that provides a more visual way to input the coordinates. For instance, you could use the [@sanity/google-maps-input](https://www.npmjs.com/package/@sanity/google-maps-input) plugin:

```sh
cd my-project
npm install --save @sanity/google-maps-input
```

Then add the plugin to your `sanity.config.ts|js` with your Google maps API key:

```typescript
import { googleMapsInput } from "@sanity/google-maps-input";

export default defineConfig({
  // ...
  plugins: [
      googleMapsInput({
          apiKey: "my-api-key"
     })
  ] 
})
```

Make sure the key has access to all of the following APIs:

- Google Maps JavaScript API
- Google Places API Web Service
- Google Static Maps API

You can create such keys and grant API access in the [Google Developer Console](https://console.developers.google.com/apis).

> \[!WARNING]
> Gotcha
> *Be careful with your API keys*. If you use this functionality, it's a good idea to make your repository private.
