# Set up resource tags

Source: https://docs.langchain.com/langsmith/set-up-resource-tags

Create and manage resource tags to organize projects, datasets, prompts, and other resources within a LangSmith workspace.

Resource tags are available for [Plus and Enterprise plans](/langsmith/pricing-plans).

While [workspaces](/langsmith/administration-overview#workspaces) help separate trust boundaries and access control, tags help you organize resources within a workspace. Tags are key-value pairs that you can attach to resources.

**Not to be confused with commit tags**: Resource tags are key-value pairs used to organize and filter workspace resources (projects, datasets, prompts, etc.). [Commit tags](/langsmith/manage-prompts#commit-tags) are labels that reference specific versions in a prompt's commit history. While both types of tags can use similar terminology (like `prod` or `staging`), resource tags help you *organize resources* across your workspace, while commit tags control *which version* of a prompt is used in your code.

Before diving into this content, it might be helpful to read the [Conceptual guide on organizations and workspaces](/langsmith/administration-overview).

## Create a tag

To create resource tags, you must have the [`workspaces:manage` permission](/langsmith/organization-workspace-operations) (granted to the [workspace admin](/langsmith/rbac#workspace-admin) role by default). Editors can apply **Application** tags to resources they have update access to, but creating tag keys or applying other tag types requires this permission. For more on applying tags to resources, refer to the workspace operations [Tags section](/langsmith/organization-workspace-operations#tags).

To create a tag:

1. Navigate to the workspace **Settings** page and click on **Resource tags** in the left-hand sidebar.
2. Here, you'll find the existing tag values, grouped by key. LangSmith creates the **Application** and **Environment** keys by default. You can use the **Application** key to filter resources shown in the UI.
3. Select  **New Tag** at the top of the page. You'll be prompted to enter a key and a value for the tag. Note that you can use an existing key or create a new one.

## Assign a tag to a resource

Within the same side panel for creating a new tag, you can also assign resources to tags. Search for corresponding resources in the **Assign resources** section and select the resources you want to tag.

You can only tag workspace-scoped resources with resource tags. This includes Tracing Projects, Annotation Queues, Deployments, Experiments, Datasets, and Prompts.

To un-assign a tag from a resource, click the  trash icon next to the tag, both in the tag panel and the resource tag panel.

## Delete a tag

You can delete either a key or a value of a tag from the [**Settings** page > **Resource tags** page](https://smith.langchain.com/settings/workspaces/resource_tags). To delete a key, click the  trash icon next to the key. To delete a value, click the  trash icon next to the value.

If you delete a key, LangSmith will delete all values associated with that key. When you delete a value, you will lose all associations between that value and resources.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/set-up-resource-tags.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
