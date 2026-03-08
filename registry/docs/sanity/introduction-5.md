# Introduction

Sanity has powerful APIs for [querying](https://www.sanity.io/docs/content-lake/how-queries-work), [patching](https://www.sanity.io/docs/content-lake/http-patches), and [mutating](https://www.sanity.io/docs/http-reference/mutation) data in the real-time [Content Lake](https://www.sanity.io/docs/content-lake). In addition to our [GROQ](https://www.sanity.io/docs/content-lake/how-queries-work) API, we also support deploying GraphQL APIs to query your content.

GraphQL APIs are deployed [using our command-line interface](https://www.sanity.io#04501f1778aa). The command inspects your studio's schema definitions and generates a GraphQL schema that closely resembles it (type names have their first letter capitalized – *bookAuthor* becomes *BookAuthor*), then adds queries allowing you to find and filter the documents stored in your Sanity dataset.

> \[!TIP]
> Give GROQ a try
> Sanity supports generating and deploying a GraphQL API from your schema, but we really recommend trying GROQ. It covers most—if not all—features you're familiar with from GraphQL including a [playground](https://www.sanity.io/docs/content-lake/the-vision-plugin), [custom functions](https://www.sanity.io/docs/content-lake/custom-groq-functions), and [type generation](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen). [Learn more about GROQ here](https://www.sanity.io/docs/content-lake/groq-introduction).

This article explains how to prepare your Sanity schema, generate and deploy a GraphQL schema, how to query and interact with the schema, and additional advice on working with GraphQL and Sanity.

## GraphQL requires strict schemas

The schemas for Sanity Studio are more flexible than what GraphQL is able to represent. That means that we can't promise that you'll be able to deploy a GraphQL API without any changes to your Sanity projects. Usually, these changes are backward-compatible and do not require any data migration.

You may find that “anonymous“ object types have to be given a name and declared in the top-level scope. Take this example:

**schemas/blogPost.ts**

```typescript
import {defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url'
        }
      ]
    }
  ]
})
```

In the code above, the `sponsor` field is an object type declared inline. This means it cannot be used outside of the `blogPost` type. This is not compatible with GraphQL—all object types have to be defined in a global scope. To fix this, you should move the sponsor declaration to a separate file and import it into your schema explicitly, then have the `sponsor` field refer to it by name.

Example:

**schemas/blogPost.js**

```typescript
import {defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'sponsor'
    }
  ]
})

// schemas/sponsor.js
import {defineType} from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ]
})

```

> \[!TIP]
> Protip
> While "lifting"/"hoisting" the type to the top-level scope, it can be helpful to consider whether the type should be altered to make it more reusable in other contexts. If you think the type is only relevant to the specific schema type, consider prefixing it to make it clearer (e.g., `blogPostSponsor` in the above case).

> \[!WARNING]
> Gotcha
> The type names `reference` and `crossDatasetReference` are considered reserved words by the Sanity CLI and cannot be used as the value of the `name` field in a document.

## Deploying GraphQL APIs

GraphQL APIs are deployed using the Sanity CLI tool. In the many cases, running `sanity graphql deploy` in your Sanity Studio project folder is enough to get started. It will use the default settings and deploy the API to the project ID and dataset configured in your `sanity.config.ts` file.

You can deploy multiple APIs per project/dataset with different API configurations. To do so, you will want to either edit or create a `sanity.cli.ts | js` file.

The configuration file should export a configuration object containing a `graphql` key, which is an array of GraphQL API definitions. Here is an example configuration file:

**sanity.cli.ts**

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  graphql: [
    {
      playground: false,
      tag: 'experiment',
      workspace: 'staging',
      id: 'schema-experiment',
    },
  ]
})
```

In the example above, we are telling the CLI:

- We do not want a playground to be deployed for this API.
- We want to use the custom tag "experiment," which allows us to deploy multiple APIs for a single dataset.
- We want to use the [workspace](https://www.sanity.io/docs/studio/workspaces) with the id "staging" from the studio configuration file. This allows us to use different project IDs, datasets, schemas, and similar.
- We want the ID of this GraphQL API to be "schema-experiment." If multiple GraphQL APIs are defined, this lets us deploy specific ones by using the `--api` flag.

Running `sanity graphql deploy` from your Sanity Studio project folder will now deploy all of the configured APIs from the CLI configuration. To learn about the `deploy` command's available flags and options, visit the [reference article](https://www.sanity.io/docs/cli-reference/cli-graphql).

Deploying multiple GraphQL APIs in a single configuration is not an atomic operation. While the CLI tool attempts to validate/verify the API configuration and schemas ahead of time, there is a theoretical possibility that some APIs might be deployed while others might fail. This may be improved/fixed in the future.

### Keeping the API up to date

Keep in mind that changing the schema in your local Sanity studio does not automatically change the GraphQL API. You'll have to run `sanity graphql deploy` to make the API reflect the changes.

### Tagged endpoints

We also support deploying multiple endpoints of the GraphQL schema to the same dataset by using the `tag` option in the CLI configuration file. This tag will be the last segment in the endpoint URL. This will let you test schema changes without breaking existing applications. If you don't specify any tag, the tag will be `default`.

Since we provide a way to deploy multiple GraphQL endpoints, you can use this CLI command to list all your existing endpoints:

```sh
sanity graphql list
```

> \[!WARNING]
> Gotcha
> Dataset names with dashes `-` in the name currently list incorrectly in the `sanity graphql list` command. If this causes issues for you please use a different delimiter in your dataset names. This is something we are aware of and looking to fix in the future.

### Breaking/dangerous changes

When a GraphQL API has already been deployed, and you want to deploy a new version, the Sanity CLI tool will generate a new API definition and compare it with the previously deployed version. If any changes are considered breaking or dangerous, the CLI will warn and ask for confirmation before deploying.

In a CI environment, the CLI will exit with a non-zero exit code and fail the build. You can use the `--dry-run` flag to only check for breaking/dangerous changes (that is, without deploying the changes), and the -`-force` flag if you are sure you want to deploy even with breaking changes. The rules for determining breaking/dangerous changes are defined in the `findBreakingChanges` and `findDangerousChanges` of the [graphql npm package](https://github.com/graphql/graphql-js). Note that this is currently considered an implementation detail and may change.

### The playground

GraphQL APIs have the option to deploy a "playground". This is an interactive GraphQL user interface that will allow you to more easily run/test queries. This is handy for development, but might not necessarily be something you want to deploy in production - which is why it is configurable. Do note that users can still run an [introspection query](https://graphql.org/learn/introspection/) to discover the properties of the schema without the playground being deployed, however.

> \[!TIP]
> Did you know GROQ has a playground too?
> Much like GraphQL playgrounds, GROQ has the [Vision tool](https://www.sanity.io/docs/content-lake/the-vision-plugin) that integrates with your studio and lets you run queries directly.

If you want to enable/disable this feature, it can be done by using the boolean `playground` flag in the GraphQL CLI configuration.

## GraphQL endpoints

> \[!NOTE]
> GraphQL API Versioning
> This documentation describes the latest version of the GraphQL API: 2025-02-19. If you're running previous versions, please see the changelog entries for details on what differs.
> On 2023-08-01 the first major upgrade to the Sanity GraphQL API with breaking changes was released. If you are working in a project that queries the legacy `v1` API, you can safely continue to do so until you are ready to upgrade. To learn about the new features and breaking changes introduces in `v2023-08-01`, refer to the [release notes](https://www.sanity.io/changelog/9ec89318-a340-4e23-91d9-3154da5b6244).
> You can tell which API version you are targeting by looking at the version segment of the endpoint URL, as shown below:
> **Dated** endpoints, for example:
> `https://<yourProjectId>.api.sanity.io/v2023-08-01/graphql/<dataset>/<tag>`
> Legacy **v1** endpoint:
> `https://.api.sanity.io/v1/graphql//
> `

GraphQL queries can be executed against the [API or API CDN](https://www.sanity.io/docs/content-lake/api-cdn).

- **API** is recommended in development environments or for use cases where you need the latest content to be immediately available.
- **API CDN** is recommended for most use cases to return faster results and scale for high-volume traffic.

The subdomain of your query URL directs the request to the API or API CDN:

`https://<yourProjectId>.apicdn.sanity.io/v2023-08-01/graphql/<dataset>/<tag>`

## Basic querying concepts

### Queries

For each document type in your Sanity schema, two top-level query fields are added:

- `all<TypeName>` - used to fetch all documents of the given type. You can add additional filters, sorting, limits, and offsets. Read more about filters below.
- `<TypeName>` - used to fetch a specific document of the given type by specifying its document ID.

### Filters

For each object and document type in your Sanity schema, an equivalent *filter* type is generated. This can be used to constrain which documents are returned for a given query, much like an SQL query.

Most fields in your schema type will have a corresponding field in the filter. For instance, a book schema type may have a `title` field, which would then have a title *filter*:

Input

```text
{
  allBook(where: {title: {eq: "A Game of Thrones"}}) {
    title
    author {
      name
    }
  }
}
```

Result

```json
{
  "allBook": [
    {
      "title": "A Game of Thrones",
      "author": {
        "name": "George. R. R. Martin"
      }
    }
  ]
}
```

In a similar fashion, the `author` field would also have a filter type:

Input

```text
{
  allBook(where: {author: {name: {eq: "George R.R. Martin"}}}) {
    title
    author {
      name
    }
  }
}
```

Response

```json
{
  "allBook": [
    {
      "title": "A Game of Thrones",
      "author": {
        "name": "George R. R. Martin"
      }
    },
    {
      "title": "A Storm of Swords",
      "author": {
        "name": "George R. R. Martin"
      }
    }
  ]
}
```

Which comparator functions exist depend on the field type. For instance, a number field will have the comparators `eq`, `neq`, `gt`, `gte`, `lt` and  `lte`, while a boolean field will only have `eq` and `neq`.

In addition to filtering on a per-field basis, document types have additional filters available under the `_` field: `references` and `is_draft`:

Input

```text
{
  allBook(where: {_: {references: "jrr-tolkien"}}) {
    title
    author {
      name
    }
  }
}
```

Response

```json
{
  "allBook": [
    {
      "title": "The Lord of the Rings",
      "author": {
        "name": "J. R. R. Tolkien"
      }
    }
  ]
}
```

For a full overview of the available filters, see the [GraphQL filter reference](https://www.sanity.io#ba117ddb05ce) section down below.

### Sorting

You can sort on multiple fields on your top-level documents. You can also sort on your nested objects.

Input

```text
{
  allBook(sort: [ { title: ASC }, { published: DESC } ]) {
    title
  }
}
```

Result

```json
{
  "allBook": [
    {
      "title": "A Game of Thrones",
      "author": {
        "name": "George. R. R. Martin"
      }
    },
    {
      "title": "The Fellowship of the Ring",
      "author": {
        "name": "J. R. R. Tolkien"
      }
    }
  ]
}
```

### Pagination

We support pagination in the form of the take and skip concept. Pagination can easily be achieved like this:

Input

```text
{
  allBook(limit: 10, offset: 10) {
    title
  }
}
```

Result

```json
{
  "allBook": [
    {
      "title": "The Two Towers",
      "author": {
        "name": "J. R. R. Tolkien"
      }
    },
    {
      "title": "The Return of the King",
      "author": {
        "name": "J. R. R. Tolkien"
      }
    }
  ]
}
```

### Query parameters

#### Perspectives

[Perspectives](https://www.sanity.io/docs/content-lake/perspectives) allow your GraphQL queries to run against an alternate view of the content in your dataset. You can set a perspective by adding the query parameter `perspective` to your request. The available options are:

- `published`: The default option if no perspective is set. Excludes all unpublished changes from your results.
- `raw`: Returns drafts, versions, and published content side-by-side for authenticated requests.
- `drafts`: Treats all draft documents and in-flight changes as if they were published.
- Perspective stack: You can also pass a list of perspectives to display content releases. Layers take priority from left to right. For example: `releaseA,releaseB,releaseC`. The `published` perspective is automatically applied to the end.

```
https://<yourProjectId>.apicdn.sanity.io/v2025-02-19/graphql/<dataset>/<tag>?perspective=raw
```

[Perspectives for Content Lake](https://www.sanity.io/docs/content-lake/perspectives)

## Additional features and considerations

### Deprecated fields

You can explicitly deprecate fields in your GraphQL APIs by using the `deprecated` property in [schema-type definitions](https://www.sanity.io/docs/schema-types):

Input

```typescript
export const name = defineField({
  name: 'firstName',
  type: 'string',
  description: `The person's first name`,
  deprecated: {
    reason: 'Use the name field instead'
  }
})
```

GraphQL schema

```json
{
  "name": "type",
  "description": "The person's first name",
  "args": [],
  "type": {
    "kind": "SCALAR",
    "name": "String",
    "ofType": null
  },
  "isDeprecated": true,
  "deprecationReason": "Use fullName and lastName instead"
}
```

### Content Source Maps

[Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps) (CSM) is an [open specification by Sanity](https://github.com/sanity-io/content-source-maps) that enables the embedding of source metadata with your content, and lays the foundation for powerful features such as [Visual Editing](https://www.sanity.io/docs/visual-editing/vercel-visual-editing).

[Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps)

[Visual Editing](https://www.sanity.io/docs/visual-editing/vercel-visual-editing)

To use CSM with GraphQL, add the query parameter `resultSourceMap=true` to your request.

```
https://<yourProjectId>.apicdn.sanity.io/v2025-02-19/graphql/<dataset>/<tag>?resultSourceMap=true
```

The CSM metadata will then be returned in the `sanitySourceMap` extension in the response:

```json
{
  "data": {
    "allPost": [
      {
        "title": "GraphQL CSM"
      }
    ]
  },
  "extensions": {
    "sanitySourceMap": {
      "documents": [
        {
          "_id": "75bbbd60-0aa9-4b20-9c00-0b40cb010ff6"
        },
      ],
      "paths": [
        "$['title']"
      ],
      "mappings": {
        "$['allPost'][0]['title']": {
          "source": {
            "document": 0,
            "path": 0,
            "type": "documentValue"
          },
          "type": "value"
        }
      }
    }
  }
}
```

For an example of how to use Content Source Maps to implement Visual Editing using GraphQL you can visit these repositories which demonstrates how to set things up in Next.JS:

- [Sanity Presentation with Next.JS and GraphQL – App router](https://github.com/sanity-io/demo-graphql-presentation-nextjs)
- [Sanity Presentation with Next.JS and GraphQL – Pages router](https://github.com/sanity-io/demo-graphql-presentation-nextjs/tree/pages-router)

### Security

The GraphQL API generally has the same rules as the GROQ API—dataset visibility is respected. Authenticated users see only the documents they have access to.

However, remember that your GraphQL schema is public, so all types and fields will be [introspectable](https://graphql.org/learn/introspection/) by anonymous users.

### Mutations

Mutations are not exposed through the GraphQL API but rather through our powerful [Mutation API](https://www.sanity.io/docs/http-reference/mutation).

## Troubleshooting

### Schema generation issues

Since the schema is generated in Node.js instead of in a browser environment, certain imported modules might cause issues. Things that reference the `window` in a global context are a prime example. If you encounter issues, we'd be interested in hearing which modules cause problems to see if we can work around them. We invite you to reach out to us in our [Discord community](https://discord.com/servers/sanity-1304483263171264613).

## Filters reference

### Scalars

#### ID, String, Datetime, Date

- Equals: `field { eq: "" }`
- Not equals: `field { neq: "" }`
- In: `field { in: [ "apple", "banana", "pineapple" ] }`
- Not in: `field { nin: [ "apple", "banana", "pineapple" ] }`
- Matches: `field { matches: "" }`

#### Int

- Equals: `field { eq: "" }`
- Not equals: `field { neq: "" }`
- Greater than: `field { gt: 42 }`
- Greater than or equal: `field { gte: 42 }`
- Lesser than: `field { lt: 42 }`
- Lesser than or equal: `field { lte: 42 }`

#### Float

- Equals: `field { eq: 42.0 }`
- Not equals: `field { neq: 42.0 }`
- Greater than: `field { gt: 42.0 }`
- Greater than or equal: `field { gte: 42.0 }`
- Lesser than: `field { lt: 42.0 }`
- Lesser than or equal: `field { lte: 42.0 }`

#### Boolean

- Equals: `field { eq: true|false }`
- Not equals: `field { neq: true|false }`

### Types

The schema generator will generate filtering types for your documents. It will provide filtering options for most fields defined in your schema. On top-level documents, it provides some special filters which can be accessed through `_`.

#### Document

- References: `field { references: "jrr-tolkien" }`
- Is draft: `field { is_draft: true }`

#### Array

Unfortunately, we don't provide any filtering for your array fields yet.

#### Portable Text

The schema generator will expose a `<your-type-name>Raw` field, which gives you all Portable Text content in raw JSON. It will not resolve references by default, but if you use one of our source plugins for [Gatsby](https://github.com/sanity-io/gatsby-source-sanity/) or [Gridsome](https://github.com/sanity-io/gridsome-source-sanity/), there are arguments you can pass to resolve references.

> \[!WARNING]
> Gotcha
> Since [Portable Text](https://www.sanity.io/guides/introduction-to-portable-text) by nature is somewhat loosely typed, the generation doesn't take into account all the types you provide for it, yet.

# GROQ and GraphQL

Sanity's primary API for querying is GROQ, but we also offer a [GraphQL API](https://www.sanity.io/docs/content-lake/graphql). Here we look at both of them and how they compare.

[Check out the GraphQL API](https://www.sanity.io/docs/content-lake/graphql)

[GraphQL](http://graphql.org/) is a pattern for designing flexible APIs to structured, connected data. GraphQL is very popular, and there are loads of nice tooling and libraries for it appearing every week. Naturally, we are often asked why we did not design Sanity with GraphQL as the core query language, but rather added it as a mapper.

Take this GROQ-query:

```text
*[_type == "author" && name match "Edgar" && debutYear < 1900]{
  name,
  debutYear
}
```

(Fetch authors, whose name contains the string "Edgar" and debuted before 1900, return the name, year of debut, and the number of books for each author. The results would perhaps include `{"name": "Edgar Allan Poe", "debutYear": 1827}`)

Using our GraphQL mapper you would express it like his:

```text
{
  authors(where: {
      debutedBefore_lt: "1900-01-01T00:00:00Z", 
      name_matches: "Edgar*"
  ) {
    name,
    debutYear,
  }
}
```

This is just one example. We see a lot of different uses of Sanity. Some people prefer GraphQL so they can tie the API to other services and enjoy the tooling of the GraphQL ecosystem.

Sometimes they run up against what you can reasonably express in the built-in GraphQL mapper and build their own APIs. Then it's really good to have GROQ with its free form queries that translate well to GraphQL.

Others simply prefer GROQ for its expressive range and what you can accomplish without any configuration whatsoever.

## What about mutations?

GraphQL mutations are not currently supported. You can learn more about [how to mutate and patch data here](https://www.sanity.io/docs/http-reference/mutation).
