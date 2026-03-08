# Embeddings

Dataset embeddings add semantic search to GROQ. For enabled datasets, search your content for semantic meaning using the `text::semanticSimilarity()` GROQ function.

## Quickstart

### Create an embeddings-enabled dataset

**TERMINAL**

```sh
sanity dataset create <name> --embeddings
```

Optionally scope what gets embedded with a projection.

**TERMINAL**

```sh
sanity dataset create <name> --embeddings --embeddings-projection='{ title, summary, category }'
```

### Check that embeddings are ready

Embeddings generation may take a few minutes, especially on larger datasets. When the status shows `ready`, your dataset is set up for semantic search.

**TERMINAL**

```sh
sanity dataset embeddings status <name>
```

### Query with semantic similarity using [GROQ](https://www.sanity.io/docs/content-lake/groq-introduction)

Query results are ranked by semantic relevance, even when there's no exact keyword overlap. Each result includes a \_score field. This is an opaque, unitless value used only for ranking results relative to each other within a single query. It is not a measure of general match quality and should not be compared across different queries.

```groq
* | score(text::semanticSimilarity("how to handle user authentication"))
```

**Next steps:** See [Control your embeddings with projections](https://www.sanity.io/docs/content-lake/dataset-embeddings) to fine-tune what content gets embedded, or [Querying with embeddings](https://www.sanity.io/docs/content-lake/dataset-embeddings) for additional search patterns, keyword matching and boosting.

## Core concepts

### What are embeddings?

An embedding is a numerical representation of text (a vector) that captures meaning rather than just characters. Words and phrases that are semantically close end up with similar vectors, even if they share no words in common. "Authentication flow" and "login process" would be close together, "authentication flow" and "authentic basketball jersey" would be far apart.

When you enable embeddings on a dataset, Sanity processes each document's content (or the subset you define with a projection) into a vector. At query time, your search term is converted into a vector too, and results are ranked by proximity in that vector space.

Embeddings in Sanity datasets give your GROQ queries the ability to understand the meaning behind text content your team or customers might want to understand, not just match specific keywords in the text.

### Why use embeddings?

Traditional keyword search relies on matching exact words in your content. If your docs say "authentication" but someone searches "login," traditional search misses it. Embeddings close that gap by matching on concepts.

Embeddings on datasets bring this capability directly into GROQ, so you don't need an external vector database or a separate search pipeline. Your content stays in the Content Lake, your queries stay in GROQ, and semantic scoring is just another function you can use alongside the filters and boosts you already use.

## Getting started

> \[!NOTE]
> Embeddings for existing datasets
> The ability to create *new* embeddings-enabled datasets is available for all Sanity plans. Enabling embeddings on *existing* datasets is temporarily limited to Enterprise plans.

When you create an embeddings-enabled dataset, Sanity asynchronously analyzes and computes embeddings for its documents, in its entirety or according to any projection you provide.

Each document's content is processed into a vector representation, its "embedding", which is what makes semantic search possible.

A few key points:

- Enabling embeddings on a dataset triggers an **initial embeddings generation**, where all existing documents are processed. This can take a some time, particularly on large datasets. You can track progress using the status command (see [Checking embedding status](https://www.sanity.io/docs/content-lake/dataset-embeddings) below).
- After the generation is complete, **embeddings are kept up to date automatically**. When a document is updated, its embedding is recomputed asynchronously. Mutations are batched to avoid constant recomputation on frequently updated datasets, which means embedding results may lag slightly behind the document update. Normally this lag will be less than 1 minute, but may in some cases be longer depending on the size and frequency of document updates.
- The embedding model is managed by Sanity and may be updated for optimized performance. When this happens, your dataset will be recomputed automatically.

> \[!WARNING]
> Performance considerations
> Depending on system load, write speeds may be slower on datasets with embeddings enabled. Sanity may apply rate limits to manage resource usage and ensure system stability. These behaviors are subject to change as we continue to optimize the feature.

## Enabling embeddings

You can enable embeddings when creating a dataset. Enterprise clients can enable embeddings on existing datasets. Both paths are available through the CLI and the HTTP API.

### When creating a dataset

**TERMINAL**

```sh
sanity dataset create <name> --embeddings
```

To include a projection at creation time:

**TERMINAL**

```sh
sanity dataset create <name> --embeddings --embeddings-projection='{ title, summary, category }'
```

Note that expanding references will not work in these projections. Only what’s in the document!

### For an existing dataset

> \[!NOTE]
> Embeddings for existing datasets
> The ability to create *new* embeddings-enabled datasets is available for all Sanity plans. Enabling embeddings on *existing* datasets is temporarily limited to Enterprise plans.

**TERMINAL**

```sh
sanity dataset embeddings enable <name>
```

By default this returns immediately and runs asynchronously in the background. Add `--wait` to block until the embeddings generation completes:

**TERMINAL**

```sh
sanity dataset embeddings enable <name> --wait
```

To enable with a projection:

**TERMINAL**

```sh
sanity dataset embeddings enable <name> --projection='{ title, summary, category }'
```

### Via the HTTP API

Create a new dataset with embeddings:

```text
PUT /projects/:projectId/datasets/:name HTTP/1.1
Content-Type: application/json

{
  "aclMode": "public",
  "embeddings": {
    "enabled": true,
    "projection": "{ title, summary, category }"
  }
}

```

Enable or update embeddings on an existing dataset:

```text
PUT /projects/:projectId/datasets/:name/settings/embeddings HTTP/1.1
Content-Type: application/json

{
  "enabled": true,
  "projection": "{ title, summary, category }"
}
```

This endpoint returns `202 Accepted` immediately. Embeddings generation will then complete asynchronously.

Read current configuration and status:

```text
GET /projects/:projectId/datasets/:name/settings/embeddings HTTP/1.1

# Response
{
  "enabled": true,
  "projection": "{ title, summary, category }",
  "status": "ready"  // "updating" | "ready" | "error"
}

```

## Control your embeddings with projections

Projections define what content gets embedded. This directly affects the size of your embeddings, the time of initial generation and ongoing recomputation, the efficiency of each query, and the relevance of your search results. If no projection is specified, Sanity embeds the entire document for you.

For small datasets with simple content, this may be fine. For most production datasets, a targeted projection is recommended, as every field you include in a projection increases the size of each document's embedding and the time it takes to generate.

By scoping your projection to only the fields your users actually search against, you speed up initial generation, recomputation and query times, and improve result relevance by keeping noise out of the vector space.

Avoid including fields that update frequently but have no semantic value for search, since each change will trigger a recomputation cycle without improving results.

**Basic projection**

If your users only search by a few shared fields, a simple projection may be all you need:

**GROQ**

```groq
{ 
  title, 
  description, 
  category 
}  
```

**Type-specific projections**

Many datasets contain multiple document types with different schemas. Use conditional projections to target the right fields per document type:

**GROQ**

```groq
{
  _type == "article" => {
    title,
    description,
    "body": body
  },
  _type == "product" => {
    name,
    "description": description,
    category
  },
  _type == "helpArticle" => {
    title,
    "body": body
  }
}
```

This projection generates embeddings for articles, products, and help articles only, pulling different fields from each. Document types not listed in the projection are not embedded.

You can also combine shared fields with type-specific ones:

**GROQ**

```groq
{
  title,
  _type == "article" => { description, "body": body },
  _type == "product" => { "specs": specifications }
}
```

Here, `title` is embedded for all document types, while each type contributes additional fields specific to its schema.

Field names from your projection are preserved as metadata and used as semantic context during embeddings computation. For example, `{ "musical_genre": category }` helps the model interpret a value like "classical" in a musical context rather than an engineering one. Field names and position data are also returned as part of search result metadata (see Search result metadata below).

## Checking embedding status

To check the current state of embedding processing on a dataset:

**TERMINAL**

```sh
sanity dataset embeddings status <name>
```

The underlying status values are `updating`, `ready`, and `error`.

## Disabling embeddings

**TERMINAL**

```sh
sanity dataset embeddings status <name>
```

> \[!WARNING]
> Destructive operation!
> Disabling embeddings should be treated as a destructive operation. The computed embedding data may be immediately deleted, and re-enabling will trigger a full recompute of all documents. Do not disable embeddings unless you intend to permanently remove them or are prepared for a full recomputation cycle.

## Querying with embeddings

`text::semanticSimilarity()` is a GROQ function introduced with dataset embeddings. It converts your search term into a vector and ranks results by proximity to each document's embedding. The function is only valid as an argument to `score()` — using it elsewhere returns an error.

Once embeddings are enabled, you can use `text::semanticSimilarity()` inside a `score()` expression in any GROQ query.

### Semantic search

**GROQ**

```groq
* | score(text::semanticSimilarity("leather waterproof boots"))
```

### Filtered semantic search

Use a filter to restrict which documents are scored. Documents that don't match the filter are excluded entirely:

**GROQ**

```groq
*[_type == "product" && category == "footwear"]
    | score(text::semanticSimilarity("leather waterproof boots"))
```

In this example, only products in the footwear category are considered. Results are ranked by semantic similarity.

### Hybrid search, combining semantic scoring with keyword matching

Use `score()` with multiple expressions to rank by both keywords and meaning. When multiple score terms are combined, each expression increases the overall score. Unlike a filter, documents don't need to match every expression to appear in results:

**GROQ**

```groq
*[_type == "product"]
    | score(
        [title, body] match text::query("leather waterproof boots"),
        text::semanticSimilarity("leather waterproof boots")
      )
```

In this example, keyword matching surfaces products containing "leather", "waterproof", or "boots" in their text. Semantic similarity surfaces products related to the concept, even if they use different words like "water-resistant hiking footwear". Products that match on both score highest.

> \[!TIP]
> Running a `text::semanticSimilarity()` query against a dataset that does not have embeddings enabled will return an error.

### Search result metadata

When a query uses `text::semanticSimilarity()`, Sanity automatically includes an `_embeddings` field on each result. This contains the specific text fragments that contributed to the match, along with their source fields and character positions, which is useful for highlighting matches or tracing which part of a document drove the result.

**Response**

```json
{
  "_score": 8.341205,
  "_embeddings": [
    {
      "fragments": [
        "OAuth 2.0 provides a secure delegation protocol for authorizing third-party access.",
        "Implementing token-based authentication with refresh tokens",
        "Security"
      ],
      "fields": ["body", "title", "category"],
      "startPositions": [0, 0, 0],
      "endPositions": [74, 55, 8],
      "score": 8.341205
    }
  ],
  "_id": "article-auth-guide",
  "_type": "article"
}
```

Each entry in `_embeddings` contains the text fragments that contributed to the semantic match, along with metadata about where they came from.

- `fragments` are extracts of the original text
- `fields` are the GROQ-style field paths they came from (e.g. `reviews[0].text`)
- `startPositions` and `endPositions` are character offsets within each field

## Troubleshooting

### Results don't seem relevant to my query

Check your projection. If no projection is set, the entire document is being embedded, which can lead to matches against irrelevant fields. Define a projection that scopes your embeddings to the content your users actually search against.

### Status shows `error`

Some failed enablements require manual intervention. [Ask in Discord](https://www.sanity.io/community/join) (community) for assistance. Enterprise customers with enterprise-level support should contact support through their dedicated channels.

### Query results appear stale

Embedding updates are asynchronous and debounced. After a document is updated, its embedding may take a few minutes to reflect the change.
