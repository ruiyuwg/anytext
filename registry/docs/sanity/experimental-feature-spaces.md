# Experimental feature: Spaces

A feature request we often get is the ability to switch between datasets from within Sanity Studio. This has a number of usages:

- Managing multiple departments within the same organization, each with their own, separate datasets, but all sharing the same schema.
- Modifying an existing schema type and testing how it works using a *staging* dataset.
- Using the same studio across multiple *projects* with separate sets of both documents and users.

To facilitate this, we are proposing "*spaces*". A *space* is simply a mapping from a name/title to an API config. Spaces can be configured in your studio's `sanity.json` (under the `__experimental_spaces` key). Here's an example:

```javascript
{
  "project": {
    "name": "Studio with spaces"
  },
  "__experimental_spaces": [
    {
      "name": "production",
      "title": "Prod",
      "default": true,
      "api": {
        "projectId": "ppsg7ml5",
        "dataset": "production"
      }
    },
    {
      "name": "staging",
      "title": "Staging",
      "api": {
        "projectId": "ppsg7ml5",
        "dataset": "staging"
      }
    }
  ],
  "//...": "..."
}
```

This will render a dropdown to switch between **spaces** in the studio:

Switching to another space will connect to the dataset configured for that space.

### Disclaimer: Experimental feature

Did we mention that this is an experimental feature? That means it may or may not become a feature in its current form. But we acknowledge the need for a feature that supports the above use cases.

#### Found bugs / have feedback?

Please. Do let us know, either by filing an issue on [GitHub](https://github.com/sanity-io/sanity/issues) or ping us on [Gitter](https://gitter.im/sanity-io/sanity).

List of things we'd love to get feedback on in particular:

- Naming things is hard. Is *spaces* a good word the feature? Maybe *configuration* is better? Suggestions?
- Would you expect to be able to search for content *across* spaces? Currently thats not possible.
- UX considerations: Would you expect to use one client to query for data across *spaces*, or would you typically configure one frontend per *space.*
- Other issues?

# Client API CDN configuration

Sanity provides a CDN-distributed, cached API that is faster and cheaper to use if you are exposing the API to end-users. If you are building static sites you should use the live API to ensure you always get the freshest version.

A full explanation of the differences between these APIs is outlined in the [API CDN documentation](https://www.sanity.io/docs/content-lake/api-cdn).

The [Sanity JavaScript client](https://www.sanity.io/docs/js-client) can be configured to use either the API CDN or the API by setting the `useCdn` option to `true` or `false`, respectively, when configuring the client:

```javascript
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  apiVersion: '2022-08-12',
  useCdn: true
})

```

> \[!TIP]
> Protip
> In most cases, we recommend setting your `apiVersion` to [today's date](https://www.sanity.io/docs/js-client#specifying-api-version). This ensures you get the most recent bugfixes and improvements, and if it works today it will continue to work tomorrow.

Note that the client will automatically fall back to using the live API in the following scenarios:

- When a mutation is performed (create/edit/delete).
- When listeners are used (subscribing to changes).

> \[!WARNING]
> Gotcha
> Prior to `v3.0.0` of the JavaScript Client, the API CDN could not be used in combination with a token (i.e., on private datasets or to query documents on a non-root path)—setting both would ignore `useCdn: true` and fall back on the live API.
> Versions `3.0.0` and later of the JavaScript Client [remove this limitation](https://www.sanity.io/changelog#change-2965cfa8-5fe4-4c52-b307-135e13116dc7), allowing you to specify a token and `useCdn: true` together to make authenticated queries to the API CDN.
