# Configuring Tasks

The Tasks feature for Sanity Studio enables your content creation team to collaborate more effectively right where the work is done. The feature is enabled by default for any eligible project, but can be disabled with a single line of configuration, should you wish to do so.

[Tasks workflow in Sanity Studio](https://www.sanity.io/docs/studio/tasks)

[Comments in Sanity Studio](https://www.sanity.io/docs/studio/configuring-comments)

*This is a paid feature, available on the Growth plan.*

## Enable and configure tasks in your studio

Tasks are enabled by default for all eligible projects. If you’d rather opt out for now, you can do so by adding the following property to your main studio configuration:

```tsx
// ./sanity.config.ts|js

export default defineConfig({
  // ... rest of config
	tasks: { enabled: false },
})
```

## Where are tasks stored?

To keep everything neat and tidy, tasks are stored parallel to your content in a complimentary dataset, along with other workflow and collaboration data, such as Comments.

**These datasets:**

- Do not count toward the data limit of your current plan.

- Do not incur any extra costs for your project.

- Are listed in the [project management pages](https://sanity.io/manage) under **Datasets**, along with all existing datasets for a project.

- Include a distinctive suffix in the dataset name. This is a best-effort attempt, and the result may vary, depending on the character length of the name of the related document dataset. Examples: - `<related-document-dataset>-comments`

- `<related-document-dataset>-cmts`

- `<related-document-dataset>-cmt`

- `<related-document-dataset>-c`

- Are searchable: you can query comment datasets with [GROQ](https://www.sanity.io/docs/groq) or [GraphQL](https://www.sanity.io/glossary/graphql).

## Permissions for tasks and comments

All roles need to have these permissions to be able to use comments and tasks fully:

**Management permissions**
"Project details" `read` => For feature flag
"Project members" `read` => @mention members
"Project datasets" `read` => View all comments with count

**Content permissions**
"All documents" `read` on **main** dataset(s) used in your Studio/workspaces
