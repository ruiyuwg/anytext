# Embeddings Index CLI reference

> \[!TIP]
> Deprecation notice
> The **Embeddings Index API** is deprecated and will be sunset in a future release. We recommend migrating to the new **Embeddings** feature, now natively available within Sanity datasets.
> The new Embeddings feature offers a more integrated experience with improved performance and full support going forward. No new features or fixes will be made to this package.
> **Migrate today:** [Dataset Embeddings documentation](https://www.sanity.io/docs/content-lake/dataset-embeddings)
> If you have questions or need migration support, please open a discussion or reach out in the [Sanity Community](https://snty.link/community).

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

> Using this feature requires Sanity to send data to OpenAI and Pinecone to store vector interpretations of documents.

> \[!WARNING]
> Gotcha
> Embeddings Index API is currently in **beta**. Features and behavior may change without notice.
> Embeddings Index API is available to users on the [Team plan and above](https://www.sanity.io/docs/platform-management/plans-and-payments).

> \[!NOTE]
> [Embeddings Index API](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview) functionality is available through the [Embeddings Index CLI](https://www.npmjs.com/package/@sanity/embeddings-index-cli), the [Embeddings Index UI](https://www.npmjs.com/package/@sanity/embeddings-index-ui) for Sanity Studio, and the [Embeddings Index HTTP API](https://www.sanity.io/docs/http-reference/embeddings-index).

The Sanity Embeddings Index CLI offers commands to create, delete, fetch, and query embeddings indexes in a Sanity project.

You can install the Embeddings Index CLI:

- Globally, to make its commands available in the terminal regardless of the current directory path.
- Locally, on a per-project basis.

To execute the commands without installing the Embeddings Index CLI, invoke them through the [npx](https://www.npmjs.com/package/npx) package runner.

The Embeddings Index CLI commands work only in the context of a local Sanity project:

```sh
# Go to the root directory of a Sanity project
cd path-to/my-sanity-project/root-dir

# Invoke the embeddings-index CLI commands
embeddings-index-cli <command> [<arguments>]

# Alternatively: invoke the commands without installing
npx @sanity/embeddings-index-cli <command> [<arguments>]
```

## Prerequisites

- The Sanity CLI. The CLI ships with the [main Sanity package](https://www.npmjs.com/package/sanity).
  You need it to log in to Sanity, which enables consuming the Embeddings Index CLI.
- The [Embeddings Index CLI](https://www.npmjs.com/package/@sanity/embeddings-index-cli).

## Installing the Embeddings Index CLI

```sh
# Installing the Embeddings Index CLI globally
npm install --global --save-dev @sanity/embeddings-index-cli

# Installing the Embeddings Index CLI for a specific Sanity project
cd path-to/my-sanity-project/root-dir
npm install --save-dev @sanity/embeddings-index-cli

# Running the Embeddings Index CLI commands without installation
npx @sanity/embeddings-index-cli <command> [<arguments>]
```

## Embeddings Index CLI commands

To view the built-in help, run:

```
# Prints the help for the available commands and arguments
embeddings-index-cli --help

# Alternatively, without installing the CLI
npx @sanity/embeddings-index-cli --help
```

### Commands

#### Properties

| Property | Description |
| --- | --- |
| create | Creates a new embeddings index in the current Sanity project.
It requires the following arguments:

\--indexName: assign a descriptive name to the index.

\--dataset: specify the name of an existing dataset. This is the target dataset to index. Note that the embeddings index API does not support dataset aliases.

\--filter: specify the filtering criteria to include in the index only the selected subset of documents from the database.
The filter must be a valid GROQ filter without the square brackets that wrap the value assigned to \_type.
Example: \_type=='tutorial'

\--projection: specify the projection criteria to include in the index only the selected subset of properties from the filtered documents.
The projection must be a valid GROQ projection, including curly brackets.
Example: {title, author}

Alternatively, you can create an embeddings index by passing a JSON manifest file with the --manifest argument:

\--manifest <manifest-file-name>.json

For more information on creating a JSON manifest file, see the CLI manifest command in this reference. |
| delete | Deletes an existing embeddings index in the current Sanity project.
It requires the following argument:

\--indexName: the name of the index to delete.

Alternatively, you can specify an existing JSON manifest file instead of indexName:

\--manifest <manifest-file-name>.json |
| get | Retrieves status information about a specific embeddings index in the current Sanity project.
It requires the following argument:

\--indexName: the name of the index whose status you want to retrieve.

Alternatively, you can specify an existing JSON manifest file instead of indexName:

\--manifest <manifest-file-name>.json |
| list | Gets the status of all existing embeddings indexes in a Sanity project. |
| manifest | Creates a JSON manifest file with the configuration of an embeddings index, and saves the file to the specified location.

It requires the following arguments:

\--out: specify the name of the JSON manifest file and, if necessary, the path to the directory to save it to.
If you don't specify a path, the JSON manifest file is saved to the current location in the Sanity project.
Example: <manifest-file-name>.json

\--indexName: see the same argument under create.

\--dataset: see the same argument under create.

\--filter: see the same argument under create.

\--projection: see the same argument under create. |
| query | Queries an embeddings index.
Returns an array of document IDs with their relevance score, based on the queried input string.

It requires the following arguments:

\--indexName: the name of the index you want to query

\--text: enter the content that you want to retrieve from the database using the embeddings index.
The content can be a string of text or a valid JSON-formatted document.

Examples

Query the embeddings index to retrieve relevant documents whose content matches the following text string:

"This is a song about vegetables."

Query the embeddings index to retrieve relevant documents whose content matches the following JSON document:

'{"\_type": "lyrics", "title": "Call Any Vegetable"}' |

### Options

#### Properties

| Property | Description |
| --- | --- |
| --debug | Prints the stack trace. Useful to inspect errors. |
| --help | Prints the CLI built-in help. |
| --silent | Doesn't print any information or warning messages.
Use either --silent or --verbose. Don't specify both options. |
| --verbose | Logs extensive information and warning messages.
Use either --silent or --verbose. Don't specify both options. |
| --version | Prints the version number of the currently installed embeddings index CLI. |

## Further reading

[embeddings-index-cli package on the npm registry](https://www.npmjs.com/package/@sanity/embeddings-index-cli)

# HTTP API reference

The Embeddings Index API allows you to create, manage, and query embeddings indexes for semantic search in your Sanity project.

> \[!TIP]
> Deprecation notice
> The **Embeddings Index API** is deprecated and will be sunset in a future release. We recommend migrating to the new **Embeddings** feature, now natively available within Sanity datasets.
> The new Embeddings feature offers a more integrated experience with improved performance and full support going forward. No new features or fixes will be made to this package.
> **Migrate today:** [Dataset Embeddings documentation](https://www.sanity.io/docs/content-lake/dataset-embeddings)
> If you have questions or need migration support, please open a discussion or reach out in the [Sanity Community](https://snty.link/community).

*This is a paid feature, available on the Growth plan.*

Note: Using this feature requires Sanity to send data to OpenAI and Pinecone to store vector interpretations of documents.

#### Want to get started?

[Embeddings index introduction](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

## Known limitations

- Creating an embeddings index for very large datasets can be slow.
- The Embeddings Index HTTP API rate limit depends on the OpenAI rate limit, which sets a cap for the HTTP API at about 8,000 tokens per minute.
- The embeddings-index API does not support dataset aliases—you must use the real dataset name in all requests.
