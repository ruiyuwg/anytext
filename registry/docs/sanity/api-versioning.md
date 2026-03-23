# API Versioning

From time to time, we may need to make breaking changes to our API functionality. We try very hard to avoid this, but it is *sometimes* necessary, e.g., to fix bugs when some users may have code that relies on incorrect behavior.

> \[!NOTE]
> Changelog
> Looking for the latest changes? Check them out in [the changelog](https://www.sanity.io/changelog).

To improve our APIs while also preventing existing code from breaking, we offer a versioned API. The URL of every API call includes an explicit version as the first path segment – the following call uses API version `v2021-10-21`:

`https://example.api.sanity.io/v2021-10-21/data/query/production?query=*`

To the best of our ability, we try to ensure that old versions of the API don't change, even as our services evolve. This may sometimes include "wrong" behavior that we may choose to maintain if we deem that the fix might negatively impact users.

As long as we don't see the change as a breaking change, we may choose to introduce it also in older versions of the API.

> \[!WARNING]
> Gotcha
> \*\*API Versioning for v1 GraphQL queries. \*\*
> `/v2023-03-01/graphql/** ` endpoints use the same GROQ resolution as `/v1/graphql/**`.
> GraphQL API v2023-08-01 introduced [breaking changes](https://www.sanity.io/changelog/9ec89318-a340-4e23-91d9-3154da5b6244#5712319a77e4) to v1. You can opt-in to new features or continue using the v1 API. See the [GraphQL documentation](https://www.sanity.io/docs/content-lake/graphql) for additional GraphQL endpoint and usage details.

## Version scheme

[Stripe inspired us](https://stripe.com/blog/api-versioning) to use dates instead of incremental version numbers (although our initial version is `v1`). We much prefer to release frequent small improvements rather than saving them up for a huge `v2` release. This allows us to get fixes into the hands of our users much sooner and makes it easier for our users to upgrade incrementally. With new versions released regularly, we believe it is more informative to use dates rather than rapidly increasing numbers.

Version dates are ISO 8601-formatted and use the UTC time zone. You don't have to use specific dates, any past or present date is valid, and today's date will always give you the latest version - no need to check release history.

## Experimental API version

The special version `X` is used to test experimental changes. This version may change at any time in any way and is used at your own risk - not only will it be backward-incompatible, but it may also cause data loss and other problems.

When using a version that isn't considered completely stable, the API will return a warning message in the `X-Sanity-Warning` header.

## Client configuration and API upgrades

Clients should be configured with an explicit, static API version - see the [individual clients' documentation](https://www.sanity.io/docs/client-libraries) for details on how to do this. When starting new projects, clients should typically be given today's UTC date to get the most recent bugfixes and improvements. Older clients which do not support versioning will default to `v1`, our initial and outdated API version.

> \[!WARNING]
> Gotcha
> While it's tempting to use a dynamic date (e.g. the current date) as a version, this can be a risky idea. Using a static date, you pin your project to a specific version of the API, which prevents any sudden changes that can break your implementation.

To upgrade an application to a newer API version, first read our list of API changes to determine which (if any) modifications must be made to the application. Then, with a local instance of the application, set the newer API version for the client, make the necessary changes to the code, and then test the application either locally or in a staging environment. Once you are confident that the application correctly handles the new API version you can deploy it to production.

We recommend making multiple smaller upgrades rather than a single larger upgrade, to reduce the chance of anything breaking and make the job more manageable, but this is up to you to decide.

### Example client configuration with the JavaScript client

The [official Sanity JavaScript client](https://www.sanity.io/docs/js-client) supports API versioning. In the following example, the client will use the most recent API version released on or before June 7, 2021.

> \[!WARNING]
> Gotcha
> The apiVersion property of the JavaScript client is optional. If no value is provided, the client will issue a deprecation warning and default to using v1 of the API.

> \[!WARNING]
> Gotcha
> When using the HTTP API, the version number is prefixed with the `v` character. In the JavaScript client, no prefix is needed.

```javascript
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  apiVersion: '2021-10-21', // use a UTC date string
  token: '<sanity-auth-token>', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})
```

## Deprecation and removal

The burden of supporting older versions of the API grows as our services evolve. At times we will have to deprecate and then remove certain older versions of the API. We will always give appropriate notice when this is necessary.

In addition to notices on our website and to your registered email address, these versions will receive a warning through the `X-Sanity-Warning` header and also be tagged as deprecated via an `X-Sanity-Deprecated: true` HTTP header. Once an API version is removed, all calls to that version will return errors with code `410`.

## Backward-compatible changes

We consider the following changes to be backward-compatible and may therefore introduce them retroactively in old API versions:

- Adding new object attributes in JSON responses (outside of documents or query results)
- Changing the order of object attributes in JSON responses
- Adding new `_`-prefixed metadata attributes to stored or modified documents
- Adding new functionality to GROQ, e.g., operators, functions, and data types
- Adding new, optional parameters to API calls
- Adding new HTTP headers in responses
- Adding new endpoints to the API, or new methods to existing API endpoints

Note that this list is not exhaustive.
