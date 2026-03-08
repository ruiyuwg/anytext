# Content Source Maps

The Content Lake can enrich all queries with metadata describing the **source** (the document and attribute) of every content fragment retrieved in the query. This metadata is useful for tooling that runs on the front end and interprets this information to provide additional ways of interacting with the content for users: for example, displaying content provenance details for compliance reviewers, providing direct links to where to edit the content for editors, and even allowing in-line editing directly in the front-end experience.

This metadata is called Content Source Maps, and it follows the Content Source Maps specification. You can find details about the Content Source Maps specification in the [official specification GitHub repository](https://github.com/sanity-io/content-source-maps).

> \[!NOTE]
> Further reading
> If you want to see how to take advantage of content source maps in your frontends, please see the following articles:
>
> - [Sanity Client: Get started with Content Source Maps](https://github.com/sanity-io/client#fetching-content-source-maps)
> - [Preview Kit: Content Source Maps](https://github.com/sanity-io/preview-kit#sanitypreview-kitclient)

To request a Content Source Map on a GROQ query, you need to pass the parameter `resultSourceMap=true` when you send your query to the Content Lake HTTP API. When you provide this parameter, the result of your query will include an additional element with the corresponding content source map.

> \[!WARNING]
> Gotcha
> Content Source Maps are supported only in versions `2021-03-25` or later of the Content Lake API.

For example, imagine these three documents exist in your dataset:

- A document representing the author George Orwell

```json
{
  "_id": "author-george-orwell-4c9f",
  "_type": "author",
  "died": "1950-01-21",
  "dob": "1903-05-25",
  "firstName": "George",
  "lastName": "Orwell"
}
```

- Another document representing the book “Animal Farm” by author George Orwell (a reference to the document for this author above)

```json
{
  "_id": "book-animal-farm-3856",
  "_type": "book",
  "description": "It tells the story of a group of farm animals who rebel against their human farmer",
  "title": "Animal Farm",
  "author": {
    "_ref": "author-george-orwell-4c9f"
  }
}
```

- And another document representing the book “Nineteen Eighty-Four” by author George Orwell as well (as before, a reference to the first document above)

```json
{
  "_id": "book-1984-12eb",
  "_type": "book",
  "description": "Nineteen Eighty-Four (also published as 1984) is a dystopian social science fiction novel and cautionary tale by English writer George Orwell.",
  "title": "Nineteen Eighty-Four",
  "author": {
    "_ref": "author-george-orwell-4c9f"
  }
}
```

You can run the following GROQ query to obtain a consolidated view that provides the author's last name and a set with the names of the books they have written:

```groq
*[_type ==  'author'] {
  "authorName": lastName,
  "booksWritten": *[_type == 'book' && references(^._id)].title
}
```

If you run this query passing the `resultSourceMap` parameter (i.e. `https://<project-id>.api.sanity.io/v2023-05-03/data/query/<dataset>?query=<GROQ-query>&resultSourceMap=true`), the response will look like this:

```json
{
  "result": [
    {
      "authorName": "Orwell",
      "booksWritten": ["Nineteen Eighty-Four", "Animal Farm"]
    }
  ],
  "resultSourceMap": {
    "documents": [
      {
        "_id": "author-george-orwell-4c9f"
      },
      {
        "_id": "book-1984-12eb"
      },
      {
        "_id": "book-animal-farm-3856"
      }
    ],
    "paths": ["$['lastName']", "$['title']"],
    "mappings": {
      "$[0]['authorName']": {
        "source": {
          "document": 0,
          "path": 0,
          "type": "documentValue"
        },
        "type": "value"
      },
      "$[0]['booksWritten'][0]": {
        "source": {
          "document": 1,
          "path": 1,
          "type": "documentValue"
        },
        "type": "value"
      },
      "$[0]['booksWritten'][1]": {
        "source": {
          "document": 2,
          "path": 1,
          "type": "documentValue"
        },
        "type": "value"
      }
    }
  }
}

```

Observe that the `resultsSourceMap` entry includes:

- Under `documents`, a list of documents from where the content in the query results comes from, i.e.: - author document with id `author-george-orwell-4c9f`,

- book document with id `book-1984-12eb`

- and book document with id `book-animal-farm-3856`

- Under `paths`, a list of the attribute names from where the content in the query results comes from, i.e.:- attribute name `lastName`(specified as `"$['lastName']"`)

- and attribute name `title` (specified as `"$['title']"`)

- Under mappings, a map where each entry indicates, for each element of the response, what document and path (attribute) from the lists above it comes from.

In this example:

```json
"$[0]['authorName']": {
    "source": {
      "document": 0,
      "path": 0,
      "type": "documentValue"
    },
    "type": "value"
}
```

The first map entry describes that in the first element in the response (`$[0]`), the attribute "authorName" (`['authorName']`) comes from (`source:`) the document in the first position of the “documents” set (`"document": 0`, which is `author-george-orwell-4c9f` ), and the attribute in the first position in the “paths” set (`"path": 0`, which is `lastName`); i.e. the value `"authorName": "Orwell"` in the response, comes from the `document author-george-orwell-4c9f`, and attribute `lastName`.

```json
"$[0]['booksWritten'][0]": {
  "source": {
    "document": 1,
    "path": 1,
    "type": "documentValue"
  },
  "type": "value"
}
```

The second map entry describes that in the first element in the response (`$[0]`), the attribute “booksWritten” (`['booksWritten']`), its first element (`[0]`) comes from (`source:`) the document in the second position of the “documents” set (`"document": 1`, which is `book-1984-12eb` ), and the attribute in the second position in the “paths” set (`"path": 1`, which is `title`); i.e. the value in the first element of `booksWritten` in the response (the string `"Nineteen Eighty-Four"`), comes from the document `book-1984-12eb`, and attribute `title`.

```json
"$[0]['booksWritten'][1]": {
  "source": {
    "document": 2,
    "path": 1,
    "type": "documentValue"
  },
  "type": "value"
}
```

The third map entry describes that in the first element in the response (`$[0]`), the attribute “booksWritten” (`['booksWritten']`), its second element (`[1]`) comes from (`source:`) the document in the third position of the “documents” set (`"document": 2`, which is `book-animal-farm-3856`), and the attribute in the second position in the “paths” set (`"path": 1`, which is `title`); i.e. the value in the second element of `booksWritten` in the response (the string `"Animal Farm"`), comes from the document `book-animal-farm-3856`, and attribute `title`.

## GROQ compatibility

> \[!WARNING]
> Gotcha
> In the current version of the Content Source Maps capability, only the GROQ functions listed below will provide content source metadata in a query. Also note that the feature is currently only supported in the Content Lake, (i.e. implementations such as groq-js are not yet supported).

Types:

- [Object](https://www.sanity.io/docs/object-type) (includes Portable Text)
- [Array](https://www.sanity.io/docs/array-type)
- [Number](https://www.sanity.io/docs/number-type)
- [String](https://www.sanity.io/docs/string-type)

Traversal:

- Attribute access traversal
- Element access traversal
- Slice traversal
- Filter traversal
- Array postfix traversal
- Projection traversal
- Dereference traversal

Conditionals:

- Select (partially supported: result only, for string and number type)
- Conditional projection traversal (partially supported: result only, for string and number type)

Operators:

- Dereference

Functions:

- string (coercing) (partially supported: string(number) only)
- lower
- upper
- pt::text()

## GraphQL

Content Source Maps are supported in the Sanity [GraphQL API v2023-08-01](https://www.sanity.io/changelog?platforms=GraphQL#change-9ec89318-a340-4e23-91d9-3154da5b6244) and later. Read more about this in the [GraphQL docs](https://www.sanity.io/docs/content-lake/graphql).
