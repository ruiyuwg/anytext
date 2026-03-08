# Create and query an embeddings index

> \[!TIP]
> Deprecation notice
> The **Embeddings Index API** is deprecated and will be sunset in a future release. We recommend migrating to the new **Embeddings** feature, now natively available within Sanity datasets.
> The new Embeddings feature offers a more integrated experience with improved performance and full support going forward. No new features or fixes will be made to this package.
> **Migrate today:** [Dataset Embeddings documentation](https://www.sanity.io/docs/content-lake/dataset-embeddings)
> If you have questions or need migration support, please open a discussion or reach out in the [Sanity Community](https://snty.link/community).

You can create an embeddings index in one of the following ways:

- With the [Embeddings Index CLI](https://www.npmjs.com/package/@sanity/embeddings-index-cli).
- With the [Embeddings Index UI](https://www.npmjs.com/package/@sanity/embeddings-index-ui) for Sanity Studio.
- With the [Embeddings Index HTTP API](https://www.sanity.io/docs/http-reference/embeddings-index).

This guide walks you through configuring an embeddings index for a Sanity project using the Embeddings Index CLI.

## Prerequisites

- The Sanity CLI. The CLI ships with the [main Sanity package](https://www.npmjs.com/package/sanity).
  You need it to log in to Sanity, which enables consuming the Embeddings Index CLI.
- The example assumes that the CLI is run from within a local Sanity project.

> \[!WARNING]
> Gotcha
> In its current state, the embeddings-index API does not support dataset aliases. This means that you have to use the **real dataset name** in all requests.

## Creating an embeddings index

To create an embeddings index, open a terminal session, and then the command that matches how you plan to create an index:

```sh
# Create an embeddings index by passing arguments
npx @sanity/embeddings-index-cli create --indexName "<name-of-the-index>" --dataset "<name-of-the-dataset>" --filter "<GROQ-filter>" --projection "<GROQ-projection>"

# Alternatively, create an embeddings index by passing a JSON manifest
npx @sanity/embeddings-index-cli create --manifest <manifest-file-name>.json
```

Creating an index can take time, depending on the number of existing documents and the indexer load.

> \[!TIP]
> The commands in this guide use `npx` to run the library, but you can also install the CLI globally and use the `embeddings-index` command as shown in the [CLI readme](https://www.npmjs.com/package/@sanity/embeddings-index-cli).

You can define the configuration of an embeddings index in one of the following ways:

- By passing configuration arguments when you create the index in the CLI.
- By storing the configuration details in a JSON manifest file.

### Defining the index in the CLI

To define a new embeddings index in the root directory of a Sanity project, pass the following required arguments with the `embeddings-index create` command:

- `--indexName`: assign a descriptive name to the index.
- `--dataset`: specify the name of an existing dataset. This is the target dataset to index.
- `--filter`: specify the filtering criteria to include in the index only the selected subset of documents from the database.
  The filter must be a valid [GROQ filter](https://www.sanity.io/docs/content-lake/how-queries-work) *without the square brackets* that wrap the value assigned to `_type`.
  Example: `_type=='tutorial'`
- `--projection`: specify the projection criteria to include in the index only the selected subset of properties from the filtered documents.
  The projection must be a valid [GROQ projection](https://www.sanity.io/docs/content-lake/query-cheat-sheet), including curly brackets.
  Example: `{title, author}`

Alternatively, you can create an embeddings index by passing a JSON manifest file with the `--manifest` argument:

- `--manifest <manifest-file-name>.json`

**Example**

```sh
# Create embeddings index with arguments
# 'filter' has no '[]' square brackets
# 'projection' keeps '{}' curly brackets
npx @sanity/embeddings-index-cli create --indexName "my-embeddings-index" --dataset "production" --filter "_type=='myDocumentType'" --projection "{...}"

# Create embeddings index with JSON manifest
# The JSON manifest is in the project root directory
npx @sanity/embeddings-index-cli create --manifest embeddings-index-manifest.json
```

### Defining the index in a JSON manifest

To store, reuse, and manage embeddings indexes with source code control and versioning, define their configuration in a JSON manifest file. Save the embeddings indexes `manifest.json` file to the root directory of a Sanity project.

A JSON manifest file defining an embeddings index must contain the following required fields:

```json
{
  indexName: string,
  dataset: string,
  filter: string,
  projection: string
}
```

**Example**

```json
{
  "indexName": "my-embeddings-index",
  "dataset": "production",
  "filter": "_type=='myType'", // No '[]' square brackets
  "projection": "{...}" // Keeps '{}' square brackets
}
```

To create a JSON manifest file, invoke the [manifest command](https://www.sanity.io/docs/libraries/embeddings-index-cli-reference):

```sh
npx @sanity/embeddings-index-cli manifest --out manifest.json --indexName "<name-of-the-index>" --dataset "<name-of-the-dataset>" --filter "<GROQ-filter>" --projection "<GROQ-projection>"
```

To replace/update an existing index configuration, you'll need to first run the `delete` command, followed by the `create` process again.

### Checking an embeddings index status

You can check the status of your embeddings indices to monitor the creation progress or the completeness of the indexes.

To check the status of all embeddings indexes in a Sanity project, run:

```sh
npx @sanity/embeddings-index-cli list
```

To check the status of a specific embeddings index in a Sanity project, run:

```sh
npx @sanity/embeddings-index-cli get --indexName "<name-of-the-index>"
```

## Query an index

To query an index, make a request with the [Embeddings Index HTTP API](https://www.sanity.io/docs/http-reference/embeddings-index).

**JS client**

```
import { createClient } from '@sanity/client'
const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<dataset-name>',
  apiVersion: 'vX', // vX is required for embeddings API calls
  token: process.env.SANITY_API_TOKEN,
});
const dataset = '<dataset-name>'
const indexName = '<index-name>'

await response = client.request({
  url: `/embeddings-index/query/${dataset}/${indexName}`,
  method: 'POST',
  body: {
    query: 'your search query',
    maxResults: 15,
  }
})
```

**CURL**

```sh
curl --request POST 'https://<project-id>.api.sanity.io/<api-version>/embeddings-index/query/<dataset>/<index-name>' \
     --header 'Authorization: Bearer <bearer-token>' \
     --header 'Content-Type: application/json' \
     --header 'Accept: application/json' \
     --data '{  
                "query": "sci-fi adventure with cowboys and aliens",
                "maxResults": 10,
                "filter": {
                  "type": ["summary", "synopsis", "userReview"]
                }
             }'
```

This example uses the query endpoint to search against an index and filter by document type. [Learn more about querying the API](https://www.sanity.io/docs/embeddings-index-http-api-reference#ce88034da6ac).
