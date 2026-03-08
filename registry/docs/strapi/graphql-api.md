# GraphQL API

The GraphQL API allows performing queries and mutations to interact with the [content-types](/cms/backend-customization/models#content-types) through Strapi's [GraphQL plugin](/cms/plugins/graphql). Results can be [filtered](#filters), [sorted](#sorting) and [paginated](#pagination).

To use the GraphQL API, install the [GraphQL](/cms/plugins/graphql) plugin:

Once installed, the GraphQL playground is accessible at the `/graphql` URL and can be used to interactively build your queries and mutations and read documentation tailored to your content-types:

#### Fetch relations

You can ask to include relation data in your flat queries or in your

### Fetch media fields

Media fields content is fetched just like other attributes.

The following example fetches the `url` attribute value for each `cover` media field attached to each document from the "Restaurants" content-type:

```graphql
{
  restaurants {
    images {
      documentId
      url
    }
  }
}
```

For multiple media fields, you can use flat queries or

### Fetch components

Components content is fetched just like other attributes.

The following example fetches the `label`, `start_date`, and `end_date` attributes values for each `closingPeriod` component added to each document from the "Restaurants" content-type:

```graphql
{
  restaurants {
    closingPeriod {
      label
      start_date
      end_date
    }
  }
}
```

### Fetch dynamic zone data

Dynamic zones are union types in GraphQL so you need to use

```graphql title="Simple examples for membership operators (in, notIn)"
# in - returns restaurants with category either "pizza" or "burger"
{
  restaurants(filters: { category: { in: ["pizza", "burger"] } }) {
    name
  }
}

# notIn - returns restaurants whose category is neither "pizza" nor "burger"
{
  restaurants(filters: { category: { notIn: ["pizza", "burger"] } }) {
    name
  }
}
```

```graphql title="Simple examples for null checks operators (null, notNull)"
# null - returns restaurants where description is null
{
  restaurants(filters: { description: { null: true } }) {
    name
  }
}

# notNull - returns restaurants where description is not null
{
  restaurants(filters: { description: { notNull: true } }) {
    name
  }
}
```

```graphql title="Simple examples for logical operators (and, or, not)"
# and - both category must be "pizza" AND averagePrice must be < 20
{
  restaurants(filters: {
    and: [
      { category: { eq: "pizza" } },
      { averagePrice: { lt: 20 } }
    ]
  }) {
    name
  }
}

# or - category is "pizza" OR category is "burger"
{
  restaurants(filters: {
    or: [
      { category: { eq: "pizza" } },
      { category: { eq: "burger" } }
    ]
  }) {
    name
  }
}

# not - category must NOT be "pizza"
{
  restaurants(filters: {
    not: { category: { eq: "pizza" } }
  }) {
    name
  }
}
```

```graphql title="Example with nested logical operators: use and, or, and not to find pizzerias under 20 euros"
{
  restaurants(
    filters: {
      and: [
        { not: { averagePrice: { gte: 20 } } }
        {
          or: [
            { name: { eq: "Pizzeria" } }
            { name: { startsWith: "Pizzeria" } }
          ]
        }
      ]
    }
  ) {
    documentId
    name
    averagePrice
  }
}
```

### Fetch a document in a specific locale

To fetch a documents

### Create a new localized document

The `locale` field can be passed to create a localized document

# OpenAPI specification

Source: //cms/api/openapi
