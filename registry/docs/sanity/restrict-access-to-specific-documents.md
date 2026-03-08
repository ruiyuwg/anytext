# Restrict Access to Specific Documents

> \[!NOTE]
> This developer guide was contributed by Adam Gray (Solution Architect at Sanity).

Ensure your editors can only publish content they have permission to by implementing document level access control.

> \[!WARNING]
> This guide includes **custom roles** features available exclusively on Sanity’s Enterprise plans.

There are some use cases that require granular, down to the document, access control. Thanks to the flexibility of Sanity, this is entirely possible! We will achieve this by adding metadata to documents that we can then filter on.

### Adding the Metadata

We’ll start by adding a new field to our document called `allowedEditors`. We  want each document to track which users have the ability to edit, so we need to store an array of the user IDs.

One approach is to create an array of strings:

```typescript
// schemaTypes/postType.ts

import {defineField, defineType} from 'sanity'

export const postType = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    // ...all other fields
    defineField({
      name: 'allowedEditors',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
```

This gives us the correct data structure for our field, but isn’t a great user experience (who wants to type in user IDs by hand!)

We can improve the UX dramatically by installing the [User Select Input](https://www.sanity.io/plugins/sanity-plugin-user-select-input) plugin. Following the guide to install the plugin gives us access to the `userSelect` field type.

Let’s update our field type to use it.

```typescript
defineField({
  name: "allowedEditors",
  type: "array",
  of: [{ type: "userSelect" }]
})
```

Much better. Now we can search for users with an intuitive interface.

Currently, all users can modify the “Allowed Editors” for our document. Let’s update the field type so that this field is hidden to all users, except for administrators.

```typescript
defineField({
  name: "allowedEditors",
  type: "array",
  of: [{ type: "userSelect" }],
  hidden: ({ currentUser }) => currentUser.role !== "administrator",
})
```

Great! Our metadata field is set up. Next, we need to create a new content resource that will allow us to assign users to a role that can only modify documents they’ve been allowed to edit.

### Creating a Content Resource

Define a new [Content Resource](https://www.sanity.io/docs/user-guides/roles) by visiting [sanity.io/manage](https://sanity.io/manage), or using the CLI with:

```sh
npx sanity@latest manage
```

Then, selecting the project, navigating to “Access”, then “Resources” in the sidebar.

From here, create a new Content Resource. Feel free to name it whatever you like, I went with “Allowed to Edit”. In the “GROQ filter” section, define the filter that will return documents that the user has the ability to edit. We can use the [identity GROQ function](https://www.sanity.io/docs/specifications/groq-functions) to achieve this. The identity function returns the ID of the current user. As our document stores an array of user IDs, this filter will check if the current user is one of those IDs.

```text
identity() in allowedEditors
```

### Attaching the Content Resource to a Custom Role

Now that we’ve created our Content Resource, apply it to a role by navigating to “Roles” by selecting it in the sidebar.

From here, if you already have a custom role you wish to apply this resource too, select it. If not, create a new role.

In the “Content permissions” section, select Edit, then set the permissions for your content resource to “Publish”.

Users that are assigned this role will now only be able to publish documents that an administrator has allowed them to!

### A Better Structure

Now that we’ve implemented both the data structure to store the allowed editors, and created the permissions, the only thing that’s left is to customize the structure tool so that editors only see documents they have the ability to edit.

This section will require some experience with Structure Builder, [we have great documentation](https://www.sanity.io/docs/studio/structure-builder-introduction) if you’ve not customized your structure before!

The following function defines a new list item that shows all posts if the user is an administrator, and only editable posts if the user is not.

```typescript
function posts(S: StructureBuilder) {
  let documentFilter = "";

  if (S.context.currentUser?.role === "administrator") {
    documentFilter = '_type == "post"';
  } else {
    documentFilter = '_type == "post" && identity() in allowedEditors';
  }

  return S.listItem()
    .title("Posts")
    .id("posts")
    .child(S.documentList().title("Posts").filter(documentFilter));
}
```

With that, you now have a system to define editors for specific documents, along with a great user experience!
