# Enable and configure Comments

Comments are available for all paid plans in Sanity Studio. This article walks studio maintainers through enabling and configuring comments for their projects.

[Comments for Sanity Studio](https://www.sanity.io/docs/studio/comments)

[Enabling Tasks for Sanity Studio](https://www.sanity.io/docs/studio/configuring-tasks)

*This is a paid feature, available on the Growth plan.*

### Prerequisites:

- Sanity Studio v3.40.0 or later (latest is always recommended)
- Project on a supported plan

> \[!NOTE]
> Permissions needed for tasks and comments
> All roles need to have these permissions to be able to use comments and tasks fully:
> **Management permissions**
> "Project details" `read` => For feature flag
> "Project members" `read` => @mention members
> "Project datasets" `read` => View all comments with count
> **Content permissions**
> "All documents" `read` on **main** dataset(s) used in your Studio/workspaces

## Enabling and disabling comments

Comments are enabled by default for all paid plans. To disable comments, set `document.comments.enabled` to `false` in your studio configuration file:

```typescript
// ./sanity.config.ts|js

export default defineConfig({
  // ... rest of config
  document: {
    comments: {
      enabled: false,
    },
  },
});
```

> \[!WARNING]
> Gotcha
> Disabling comments hides them in the studio, but existing comments persist in the add-on comment dataset.

### Enabling comments for specific document types

To enable comments only for specific document types, use an arrow function:

```typescript
// ./sanity.config.ts|js

export default defineConfig({
  // ... rest of config
  document: {
    comments: {
      enabled: (ctx) => {
        return ctx.documentType == 'whitepaper';
      },
    },
  },
});
```

To enable comments for multiple document types, use an array:

```typescript
// ./sanity.config.ts|js
const COMMENTS_ENABLED = ['article', 'blog', 'whitepaper'];

export default defineConfig({
  // ... rest of config
  document: {
    comments: {
      enabled: (ctx) => {
        return COMMENTS_ENABLED.includes(ctx.documentType);
      },
    },
  },
});
```

## Where are comments stored?

To keep everything neat and tidy, comments are stored parallel to your content in a complimentary [dataset](https://www.sanity.io/docs/content-lake/datasets), along with other workflow and collaboration data, such as Comments.

These datasets:

- Do not count toward the data limit of your current plan.

- Do not incur any extra costs for your project.

- Are listed in the [project management pages](https://sanity.io/manage) under **Datasets**, along with all existing datasets for a project.

- Include a distinctive suffix in the dataset name. This is a best-effort attempt, and the result may vary, depending on the character length of the name of the related document dataset. Examples: - `<related-document-dataset>-comments`

- `<related-document-dataset>-cmts`

- `<related-document-dataset>-cmt`

- `<related-document-dataset>-c`

- Are searchable: you can query comment datasets with [GROQ](https://www.sanity.io/docs/groq) or [GraphQL](https://www.sanity.io/glossary/graphql). This means they can also be used with [GROQ-powered Webhooks](https://www.sanity.io/docs/content-lake/webhooks).

> \[!WARNING]
> Gotcha
> Deleting an add-on comment dataset permanently removes all comments. To restore commenting after deletion, reload the studio instance to create a new, empty comment dataset.

## Copy comments to a Cloud Cloned dataset

When you export or [Cloud Clone](https://www.sanity.io/docs/content-lake/how-to-use-cloud-clone-for-datasets) a dataset, the comments don’t migrate with the data. To copy comments to a new dataset or studio, you’ll need to perform the following steps:

1. Identify the name of the comment dataset you wish to copy.
2. Export the comment dataset.
3. Enable comments in the new primary dataset and identify the name of the comments dataset.
4. Modify the exported comments data file to point to all cross dataset references to the new dataset.
5. Import the comment dataset file into the new comment dataset
6. Confirm that the process was successful

For the following examples, we’ll use the terms “production” and “staging” to represent the original and new primary datasets. If you haven’t already, make sure to Cloud Clone your primary dataset.

### Identify the name of the comment dataset

Comments live alongside regular datasets in an add-on dataset. You can find the name by visiting [manage](https://www.sanity.io/manage), selecting your project, and selecting the datasets screen. You can also run the `dataset list` command in the CLI.

Input

```sh
npx sanity@latest dataset list
```

Response

```sh
production
production-comments
staging
```

Make note of the name of the comments dataset that matches your primary dataset. In this case, `production-comments`.

### Export the comment dataset

Export the comment dataset to a local file using the `dataset export` command.

```sh
npx sanity@latest dataset export production-comments production-comments-export.tar.gz
```

Make note of the file name and location. You'll need it shortly.

### Enable comments in the new dataset

If you haven't already, reload Sanity Studio with the new primary dataset configured.

```typescript
// sanity.config.ts

export default defineConfig({
  // ... rest of config
  dataset: 'staging'
})
```

If the `dataset list` command does not list a comments add-on dataset for your primary dataset, such as `staging-comments`, you'll need to trigger the creation of the dataset by manually making a comment in Sanity Studio. Once that's done, you should see the new comments dataset in the results of `dataset list`.

Input

```sh
npx sanity@latest dataset list
```

Response

```sh
production
production-comments
staging
staging-comments
```

### Update the export file

The export is compressed. For this step, you need to uncompress the file. You can do so in the terminal with the following command. Make sure to replace `dataset-comments.tar.gz` with the filename of your export.

```sh
tar -xzf dataset-comments.tar.gz
```

Now locate the `data.ndjson` file. Each comment in the `data.ndjson` file uses a [global document reference](https://www.sanity.io/docs/studio/global-document-reference-type) to link the comment to a document in your dataset. Once you have the ID of your new project and the name of your new dataset, update this file and **replace every instance of the old projectId and dataset name with the new ones**. For example, here's a snippet of a line from the ndjson file with the key lines highlighted.

**example.json**

```json
{
  "_createdAt": "2025-03-03T18:17:29Z",
  // ...
  "target": {
    "document": {
      "_dataset": "production", // update with new dataset name, if needed
      "_projectId": "3do82whm", // update with new projectId
      "_ref": "9a6d2a23-b480-45a0-9427-29ab5409ee95",
      "_type": "crossDatasetReference",
      "_weak": true
    },
    // ...
  }
}

```

How you replace them all is up to you, but a find/replace with the editor of your choice is the least-involved option.

Once you're finished, you can move on to the next step. No need to recompress the directory.

### Import the comments dataset

Use the `dataset import` command to import the local comments export into the new comments dataset.

```sh
npx sanity@latest dataset import production-comments-export-folder staging-comments
```

### Confirm the import

Reload and visit your Studio. Confirm that the imported comments are as expected and delete the test comment if you created one earlier.
