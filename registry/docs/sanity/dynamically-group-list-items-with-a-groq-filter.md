# Dynamically group list items with a GROQ filter

![A screenshot illustrating a "Filtered Posts" list that allows an editor to filter by category or author](https://cdn.sanity.io/images/3do82whm/next/4663eac51572134b8723b4ebae92dc31e8ec853b-1854x1010.png)

It's often useful to group documents automatically by some field's value or a combination of field values. Common examples are grouping documents by author, publishing date periods, editorial status, category, or even the dominant background color in a document’s main image. In this article, we'll create lists of filtered blog posts to allow for quicker discovery and editing.

If you're unfamiliar with setting up the Structure Builder API, be sure to check out the previous articles in this series.

> \[!NOTE]
> Learning the Structure Builder API
> This collection of articles will walk you through all the basics of using Structure Builder to create custom editing experiences.
>
> - [Introduction to concepts](https://www.sanity.io/docs/studio/structure-builder-introduction)
> - [Set up structure builder in your project](https://www.sanity.io/docs/studio/set-up-structure-builder-to-override-the-default-list-view)
> - [Create a link to a single edit page in your main document type list](https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list)
> - [Manually group items in your main document type list](https://www.sanity.io/docs/studio/manually-group-items-in-a-pane)
> - **Dynamically group documents in a document list**
> - [Create custom document pane](https://www.sanity.io/docs/studio/create-custom-document-views-with-structure-builder)

## Setting up the schema

In this article, we'll need some basic schema for a blog. For the sake of simplicity, we'll use the default schema that comes from creating a new Sanity project from the Sanity CLI.

To get the schema, run `npx sanity init` and create a new project. When prompted, select `yes` to `Use default dataset configuration?` and `Blog` from the `Select project template` options.

This will give you a project structure that contains the schema for `post`, which contains references for `author` and `category` schema. Combining this with the singletons made in the previous articles, we should have a desk structure that looks like this:

## Creating a manual group for two filters

Before we create filters, we'll first create a manual group to house our two dynamic lists. For a review, read this article on [creating a manual group with Structure Builder](https://www.sanity.io/docs/studio/manually-group-items-in-a-pane).

Next, we'll create a new `listItem()` for our "Base" list. We'll give it the title "Filtered Posts" and a `.child()` node that will be a static list with the title "Filters."

This list will have two items, our filtered lists "Posts by Category" and "Posts by Author."

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem().title('Posts By Category').child(),
              S.listItem().title('Posts By Author').child(),
            ])
          ),
      // The rest of this document is from the original manual grouping in this series of articles
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'navigation', 'colors'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ])
        ),
    ])
```

This will create a list of two items. Neither of those items will have children yet. To populate them, we'll use dynamic lists using [GROQ queries](https://www.sanity.io/docs/groq-reference).

## Creating dynamic children with an `S.documentList()` and a GROQ filter

To grab blog posts by category, we need to create a child for our `listItem` that will pull a `documentTypeList`. This list will show all categories in the dataset.

This will create a list of items with a document type that matches the string `'category'`. From here, we need to fill in what this item's child will be. In our case, we want to create a list of all the documents that match the category clicked. Replace the `child` after the “Posts By Category” `title` as shown below.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Posts By Category')
                .child(
                  S.documentTypeList('category')
                  .title('Posts by Category')
                  .child(categoryId => 
                    S.documentList()
                      .title('Posts')
                      .filter('_type == "post" && $categoryId in categories[]._ref')
                      .params({ categoryId })
                    )
                  ),
              S.listItem().title('Posts By Author').child(),
            ])
        ),
     // .. rest of structure
    ])
```

The `.child()` method can accept an anonymous "arrow function", which will have the `_id` of the current item passed into it. From there, we need to define what type of child we're creating.

### `S.documentList()`

The `.documentList()` method will pull a list of documents given a filter. It accepts most of the same chained methods as the `.list()` method but has a few special methods.

### `.filter()`

The `.filter()` method is not the normal JavaScript filter method. In this case, it's a function that will accept a GROQ query as a string and return an array of documents that match that query. We can optionally chain a `.parameter()` method to pass a parameter into our query. In this case, the `categoryId` from our current function scope.

The GROQ query here will match all documents with a `_type` of `post`, containing the `$categoryId` as a reference in its `categories` array.

At this point, we have the post documents that match our query pulling into the next pane.

### Adding "Posts by author" child node

Now, let's do the same process to pull posts by author reference into the "Post by Author" node.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Posts By Category')
                .child(
                  S.documentTypeList('category')
                  .title('Posts by Category')
                  .child(categoryId => 
                    S.documentList()
                      .title('Posts')
                      .filter('_type == "post" && $categoryId in categories[]._ref')
                      .params({ categoryId })
                    )
                  ),
              S.listItem()
                .title('Posts By Author')
                .child(
                  S.documentTypeList('author')
                    .title('Posts by Author')
                    .child(authorId =>
                      S.documentList()
                      .title('Posts')
                      .filter('_type == "post" && $authorId == author._ref')
                      .params({ authorId })
                    )
                ),
            ])
        ),
     // .. rest of structure
    ])
```

## Renaming the "Post" document type list item

Now that we have a "Filtered Posts" group, let's rename our "Post" document type list. To do this, we'll create a new manual list item in the "Base" list group. For a more in-depth explanation, see [this article on creating singleton documents](https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list). In this example, we'll create a new `listItem()` for the post document type, give it a new title, and create a child panel with a document list filtering all posts. From there, we'll add the `'post'` ID to our exclusion filter for all other document types in this list.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(/* Dynamic lists created earlier in here */ ),
      S.listItem()
        .title('All Posts')
        .child(
          // Create a list of all posts
          S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post','siteSettings', 'navigation', 'colors'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ])
        ),
    ])
```

This is beginning to look finished. We can help increase an editor's understanding of the grouping by adding dividers between the various sections.

## Create visual sections in the base list with `.divider()`

To group things together, we'll use the `S.divider()` method in our `.items()` array. We want to group "All Posts" and "Filtered Posts" together, then allow the rest of our document types to flow in the middle, then our "Settings." To do this, we'll insert the divider method in the order we want it to appear.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(/* Dynamic lists created earlier in here */ ),
      S.listItem()
        .title('All Posts')
        .child(
          // Create a list of all posts
          S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post','siteSettings', 'navigation', 'colors'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ])
        ),
    ])
```

## Final code

Putting together all the examples from this series of articles we get the following desk structure.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Filtered Posts')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Posts By Category')
                .child(
                  S.documentTypeList('category')
                  .title('Posts by Category')
                  .child(categoryId => 
                    S.documentList()
                      .title('Posts')
                      .filter('_type == "post" && $categoryId in categories[]._ref')
                      .params({ categoryId })
                    )
                  ),
              S.listItem()
                .title('Posts By Author')
                .child(
                  S.documentTypeList('author')
                    .title('Posts by Author')
                    .child(authorId =>
                      S.documentList()
                      .title('Posts')
                      .filter('_type == "post" && $authorId == author._ref')
                      .params({ authorId })
                    )
                ),
            ])
      ),
      S.listItem()
        .title('All Posts')
        .child(
          // Create a list of all posts
          S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post','siteSettings', 'navigation', 'colors'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ])
        ),
    ])
```

## Next steps

Now that we've created singletons, static lists, and dynamic lists, we need to look at [creating tabs and custom previews for our document views](https://www.sanity.io/docs/studio/create-custom-document-views-with-structure-builder).
