# Manually group items in a pane

![A screenshot of the structure builder](https://cdn.sanity.io/images/3do82whm/next/16010730db213f3f7f4200b06ed84e54b7c33886-1439x764.png)

We've now learned how to override our studio's default structure and make a list of custom items. Now, let's look at how we can group our single documents in a manually-created group to open a secondary list for our settings.

If you're unfamiliar with setting up the Structure Builder API, be sure to check out the previous articles in this series.

> \[!NOTE]
> Learning the Structure Builder API
> This collection of articles will walk you through all the basics of using Structure Builder to create custom editing experiences.
>
> - [Introduction to concepts](https://www.sanity.io/docs/studio/structure-builder-introduction)
> - [Set up structure builder in your project](https://www.sanity.io/docs/studio/set-up-structure-builder-to-override-the-default-list-view)
> - [Create a link to a single edit page in your main document type list](https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list)
> - **Manually group items in your main document type list**
> - [Dynamically group documents in a document list](https://www.sanity.io/docs/studio/dynamically-group-list-items-with-a-groq-filter)
> - [Create custom document pane](https://www.sanity.io/docs/studio/create-custom-document-views-with-structure-builder)

## Creating our new singletons

We'll create a list of "Settings Documents" to allow our editors clear, structured navigation through all the different global settings our frontend will require.

Before we change our structure to group our new documents, we need to create two new singletons. Review [this article's steps on creating a singleton](https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list) and create a "Colors" and "Main Navigation" document. These can have whatever schema makes sense for your site (or just a title, if you want to get to this article's main topics). These documents should have a type of `colors` and `navigation` and matching IDs.

## Adjusting the site settings child to show a custom list instead of the settings document

Now that we have more than one document governing our site's settings, it would make sense to group these into one pane instead of having three individual items in our first panel.

To do this, we'll change the `.child()` method on our "Settings" list item to reflect a new list instead of a document.

**structure.ts**

```typescript
import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
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
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'colors', 'navigation'].includes(listItem.getId())
      ),
    ])
```

Each singleton document is now a specific item under the "Settings Documents" list. They each also need to be removed from the main document type list, as well. To do that, add the singletons' IDs to the array used to filter the `S.documentTypeListItems()`.

## Next steps

Now that we have a manually grouped set of settings for our site, let's [add a set of dynamic groups](https://www.sanity.io/docs/studio/dynamically-group-list-items-with-a-groq-filter) to filter documents by category or author.
