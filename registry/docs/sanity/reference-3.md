# Reference

This is the complete reference documentation for Structure Builder. This API lets you configure how the Sanity Studio's Structure tool organizes lists, documents, views, menus, and [initial value templates](https://www.sanity.io/docs/studio/initial-value-templates).

The Structure Builder API is designed as a collection of methods that can be chained and passed in as arguments/parameters. To learn about the central concepts of Structure Builder, go to the [introduction](https://www.sanity.io/docs/studio/structure-builder-introduction) article and dive deeper into the API in [the TypeScript reference documentation](https://www.sanity.io/docs/reference/api/sanity/structure/structureTool).

> \[!TIP]
> Protip
> Looking for quick examples of common use cases? See the [Structure Builder cheat sheet](https://www.sanity.io/docs/studio/structure-builder-cheat-sheet).

## Configuring the structure

You can build custom structures by passing the structure to the [structureTool](https://reference.sanity.io/sanity/structure/structureTool/) configuration. To do this, define the structure resolver function ([StructureResolver](https://reference.sanity.io/sanity/structure/StructureResolver/)), which receives the [StructureBuilder](https://reference.sanity.io/sanity/structure/StructureBuilder/) instance, by convention referred to as `S`, as its first argument, and a [StructureResolverContext](https://reference.sanity.io/sanity/structure/StructureResolverContext/) object as its second.

```javascript
// sanity.config.js

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schema'

export default defineConfig({
  name: 'default',
  title: 'My Cool Project',
  projectId: 'my-project-id',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) => {
        console.log(context) // returns { currentUser, dataset, projectId, schema, getClient, documentStore }
        return S.documentTypeList('post')
      },
    })
  ],
  schema: schemaTypes
})



```

Where you define your structure is up to you - you could define it inline (as in the above example), or you could place it in a separate file and import/use it in your structure tool config:

```javascript
// src/structure.js

export const structure = (S) => S.documentTypeList('post')

// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { structure } from './src/deskStructure'

export default defineConfig({
  // ...
  plugins: [
    structureTool({
      structure
    })
  ]
})
```

In the Structure Builder API, you'll find “convenience methods.” We recommend using these unless you want more fine-grained control.

## Context properties

#### Properties

| Property | Description |
| --- | --- |
| dataset | Name of the current dataset |
| projectId | Unique ID for the project |
| schema | The schema registry of your project. Use \`schema.get("schemaTypeName") to retrieve any schema by name. |
| currentUser | An object with info about the currently logged in user. |
| getClient | Callback function that returns a configured client |
| documentStore |  |
| perspectiveStack | The stacked array of perspective ids ordered chronologically to represent the state of documents at the given point in time. Can be used as the perspective param in the client to get the correct view of the documents.

Example values: \["published"] | \["drafts"] | \["releaseId2", "releaseId1", "drafts"] |
| i18n | Contains information about the current and avaliable locale configuration. |

## Lists

These methods define how lists and list items appear in the collapsible panes within the Studio’s structure tool. There are methods you can consider as “primitives” and methods that take a document schema type and automatically configure menus, initial value templates, and similar from the schema configuration.

> \[!TIP]
> Protip
> You should generally opt for `documentTypeList` and `documentList` when you can since these give you good defaults and sets up a lot of things automatically for you.

list(): List

A primitive for defining the list content of the collapsible pane, including its title and representation in the URL bar. Typically used when you want to group different list items within a pane. See the [ListBuilder](https://reference.sanity.io/sanity/structure/ListBuilder/) reference for the full type definition.

> \[!TIP]
> Protip
> Are you getting the error `Structure node id cannot contain character ...`? This is typically caused when the `title` contains a character that is not in the domain of (or cannot be automatically converted to the domain of) web-safe characters.
> The solution is to explicitly specify an `id` that includes only web-safe characters.

### Methods

| Method | Description |
| --- | --- |
| id(id): List | Set the id for the list. |
| title(title): List | Set the title for the list. |
| items(items): List | Set the list items to display.

You would typically use a method that returns an array of list items, such as documentTypeListItems, or list item methods inserted into their own array, such as listItem and documentListItem.
|
| showIcons(showIcons): List | Set whether or not to show the icons of the list items.

|
| initialValueTemplates(templateItems): List | Sets which initial value templates should be available for this pane (which items appear when using "new document" on the pane).

Use S.initialValueTemplateItem(templateId, parameters) to get a reference to a template. By passing an object of parameters, you can contextualize the template for the specific pane. See the initial value template documentation for more information. |
| menuItemsGroups(groups): List | Defines which groups of menu items should be available for the pane. This also defines the order of the groups.

You can either build these groups by using the builder method:
\[S.menuItemGroup().id('some-id').title('Some title')]

or by passing an array of objects containing id and title properties:
\[{id: 'some-id', title: 'Some title'}] |
| menuItems(menuItems): List | Sets the list of menu items to appear in the pane menu. |
| defaultLayout(layout): List | Sets the default layout for this list. Currently the only supported layouts are default and detail. |
| child(child): List | Sets which structure node to use as the child of this list, when an item in the list is selected.

Can either be a structure node (any list, document, component etc) or a child resolver - a function that either syncronously or asyncronously resolves to a structure node.

Read more about child resolvers in the conceptual guide for the structure builder. |
| canHandleIntent(intentChecker): List | Sets the method used to determined whether or not the pane can handle an intent of a certain type.

The intent checker receives three arguments: intentName, params and context. It should return a boolean indicating whether or not it can handle the intent.

intentName is generally create or edit.

params usually contains id and type, representing the document ID and schema type to be created. Often it will also have template, a string representing the ID of an initial value template.

context is an object containing pane and index |
| getCanHandleIntent(): function | Returns the configured intent checker |
| getChild(): node | function | Returns the configured child or child resolver for this pane |
| getDefaultLayout(): string | Returns the defined default layout for this pane (if any) |
| getId(): string | Returns the configured ID for this pane, if any |
| getInitialValueTemplates(): InitialValueTemplateItem\[] | Returns the list of configured initial value templates, if any |
| getItems(): node\[] | Returns the list of configured list items, if any |
| getMenuItemGroups(): MenuItemGroup\[] | Returns an array of the configured menu item groups, if any |
| getMenuItems(): MenuItem\[] | Returns an array of the configured menu items, if any |
| getShowIcons(): boolean | Returns whether or not the pane is configured to show icons for the list items |
| getTitle(): string | Returns the configured title for the pane, if any |

documentTypeList(schemaType): DocumentList

Convenience method for `documentList()`. Returns a list node for the specified document type with its configuration for list items, menus, initial value templates, and views.

#### Arguments

#### Properties

| Property | Description |
| --- | --- |
| schemaType \* | The schema type name of an existing document type that's defined in the Studio’s schema file. |

#### Methods

[See the methods summary for documentList](https://www.sanity.io#methods-38c3f64ec08f)

#### Example

```javascript
// src/structure.js (.ts)

// Exports a list of documents with the schema type “post”
export const structure = (S) => S.documentTypeList('post')


```

documentList(): DocumentList

A variant of the list type is made specifically for displaying a list of documents ([DocumentListBuilder](https://reference.sanity.io/sanity/structure/DocumentListBuilder/)). It lets you define which documents to list by using a GROQ filter expression (`filter`) plus optional parameters (`params`).  Note that this list type does not have an `items()` method - if you want to use specific list items, use the [list()](https://www.sanity.io#list-ab6eb182896e) method instead.

#### Methods

[Shares methods from list](https://www.sanity.io#list-ab6eb182896e)

| Method | Description |
| --- | --- |
| filter(filter): DocumentList | Filters the document list based on a GROQ filter expression. |
| params(params): DocumentList | Sets the parameters to use when executing the query specified by the provided GROQ-filter |
| apiVersion(apiVersion): DocumentList | Sets the API version to use for the given filter. Available since studio version v2.20.0. |
| schemaType(schemaType): DocumentList | Sets the schema type of the documents expected to be in the list. This helps provide context for the tooling, but is not strictly required. Set this if you are expecting a single document type to be returned. |
| defaultOrdering(orderings): DocumentList | Sets the default ordering for this document list:
documentList.defaultOrdering(\[{field: 'priority', direction: 'desc'}])  |
| getFilter(): string | Returns the configured GROQ-filter for this list, if any |
| getParams(): object | Returns the configured parameters for the GROQ-filter, if any |
| getApiVersion(): string | Returns the configured API version for this list, if any |
| getSchemaType(): string | Returns the configured schema type for this pane, if any |
| getDefaultOrdering(): SortItem\[] | Returns the configured default ordering for this document list, if any |

#### Example

```javascript
// ./structure.js (.ts)

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Future projects')
        .schemaType('sampleProject')
        .child(
          S.documentList()
            .title('Future projects')
            .filter('_type == "sampleProject" && publishedAt > now()')
        )
      ])
```

> \[!WARNING]
> Gotcha
> Selecting a custom sort order in the Studio will override `defaultOrdering` and retain that custom sort order in local storage. If your `defaultOrdering` configuration doesn't appear to be working, try clearing your local storage or opening the Studio in a different browser.

#### Examples

```javascript
// src/structure.js

export const structure = (S) => S.documentTypeList('sampleProject')
  S.list()
    .title('Content')
    .items([
      S.listItem('category')
        .title('Projects by category')
        .child(
          S.documentList()
            .title('Projects by category')
            .schemaType('sampleProject') // Because we want menu items for “sampleProjects”
            .filter('_type == "category"')
            .child(id => // Returns the id for the selected category document
              S.documentList()
                .title('Projects by category')
                .schemaType('sampleProject')
                .filter('_type == "sampleProject" && $id in categories[]._ref')
                .params({id}) // use the id in the filter to return sampleProjects that has a reference to the category
            )
        )
      ])
```

#### Example

```javascript
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      /* list item(s) goes here */
    ])
```

## List items

listItem(): ListItem

A primitive for defining a list item ([ListItemBuilder](https://reference.sanity.io/sanity/structure/ListItemBuilder/)) within a list in a collapsible pane. Usually used within the array of `S.list().items([/* here */])`.

By using the `child` method on the item, you can control what opens in the next pane when you interact with a `listItem`. If not defined, it will use the parents' child resolver to determine the next pane.

### Methods

| Method | Description |
| --- | --- |
| id(id): ListItem | Sets the ID for this list item.

Setting an ID is highly recommended, but if no ID is provided it will be inferred from the title of the list item. |
| title(title): ListItem | Set the title of the list item. |
| icon(icon): ListItem | Set an icon for the list item. |
| child(child): ListItem | Sets the child that should be rendered if this item is selected. If you have many list items that should resolve to the same type of child, you should usually set the child resolver on the parent (usually a list) and use the ID to resolve the correct child. |
| schemaType(schemaType): ListItem | Sets the schema type of this list item, if any. Only used if the list item represents a document. |
| showIcon(showIcon): ListItem | Decide whether or not to show the icon for the list item. |
| getId(): string | Get the id of the list item, if any |
| getTitle(): string | Gets the title of the list item, if defined |
| getChild(): node | function | Get the child or child resolver of the list item, if defined |
| getSchemaType(): string | Gets the schema type for the list item, if defined |
| getShowIcon(): boolean | Gets whether or not the icon is shown. |

documentListItem(): DocumentListItem

Convenience method for returning a list item representing a document.

Prefer this over a regular *listItem* when manually building a list of items representing documents.

#### Methods

[Shares the same methods as listItem](https://www.sanity.io#methods-7566a867c0a3).

documentTypeListItem(schemaType): ListItem

Convenience method for returning a list item representing a document type. In other words, if you want a list item that opens a list of documents of a specific type when clicked, use this. It will automatically configure the title, icon, schema type, and similar.

#### Arguments

#### Properties

| Property | Description |
| --- | --- |
| schemaType | Name of the schema type. |

documentTypeListItems(): ListItem\[]

Convenience method. Returns an array of list items for all defined document types in your schema, and configure them with the correct titles, icons, initial value templates and similar.

#### Example

```javascript
export const structure = (S) =>
  S.list()
    .title('Content')
    .items(
      // List all document types except "siteSettings"
      S.documentTypeListItems().filter(
        item => item.getId() !== 'siteSettings'
      )  
    )
```

## Dividers

divider(): void

Inserts a visual divider in a list.

![The section divider](https://cdn.sanity.io/images/3do82whm/next/5111066a15571e6a71ef8f17364cdef9b56a5d03-664x236.png)

### Methods

| Method | Description |
| --- | --- |
| title(title): Divider | Set the title of the divider. |
| i18n(i18n): Divider | Set the i18n key and namespace used to populate the localized title. |
| getTitle(): string | Gets the title of the divider, if defined |
| getI18n(): object | Gets the internationalized title of the divider, if defined |

#### Example

```javascript
//sanity.config.js

import {structure} from './structure'

export default defineConfig({
  ...
  plugins: [
    structureTool({
      structure
    }),
  ],
  schema: schemaTypes
})

// ./structure.js (.ts)

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Make a singleton of the document with ID “siteSettings”
      S.documentListItem()
        .id('siteSettings')
        .schemaType('siteSettings'),
      // Add a visual divider
      S.divider()
        .title('Divider title')
        .i18n({title: {key: 'text-divider-title', ns: structureLocaleNamespace}}),
      // Add the rest of the document types, but filter out the siteSettings type defined above
      ...S.documentTypeListItems().filter(
        item => item.getId() !== 'siteSettings'
      )
    ])

```

## Document nodes

The document node type represents (as the title implies) a document. Often, it is referred to as "the editor node" since it's common for it to render a form allowing you to edit the document in question. However, it can also render other "views" of the document, which is why it has a more generic name.

The following methods let you configure what happens when you open a document. If no views are specified for a document node, it will return the default form view.

document(): Document

A primitive for defining a document node. See the [DocumentBuilder](https://reference.sanity.io/sanity/structure/DocumentBuilder/) reference for the full type definition.

### Methods

| Method | Description |
| --- | --- |
| id(id): Document | Set the id for the document node. Usually picking something like document or documentView is enough to differentiate it. Alternatively, you can use the document ID. |
| title(title): Document | Set the title for the document. Leave blank to use the document title. |
| documentId(documentId): Document | Sets the document ID this document node represents |
| schemaType(schemaType): Document | Sets the schema type for this document |
| initialValueTemplate(templateId, parameters): Document | Sets which initial value template should be used for this document (if any).

|
| views(views): Document | Defines which views should be rendered for this document. If not defined, it will use the default form view as the only view.

Currently, there are two view types: form and component.

The S.form method renders the form for a given document, allowing it to be edited.

A component renders a custom React component. See the document node views documentation for example usage. |
| child(child): Document | Sets which structure node to use as the child of this document, in the case where a view allows navigating to one.

Can either be a structure node (any list, document, component etc) or a child resolver - a function that either synchronously or asynchronously resolves to a structure node.

Read more about child resolvers in the conceptual guide for the structure builder. |
| getId(): string | Returns the configured ID for this pane, if any |
| getTitle(): string | Returns the configured title for the pane, if any |
| getDocumentId(): string | Returns the configured document ID for this document node |
| getSchemaType(): string | Returns the configured schema type for this editor, if any |
| getInitialValuesTemplate(): string | Returns the configured initial value template ID, if any |
| getInitialValueTemplateParameters(): object | Returns the configured parameters for the initial value template, if any |
| getViews(): View\[] | Returns an array of the configured views, if any |
| getChild(): node | function | Returns the configured child or child resolver for this pane |

documentWithInitialValueTemplate(templateId, parameters): Document

Convenience method for building a document node with a specific initial value template and set of parameters. Automatically configures the document with the correct schema type.

Returns a document node and as such, has the same builder methods as [document()](https://www.sanity.io#document-cbba11c7a572).

## Default document node

Many of the nodes in the structure builder (such as the document type list)  automatically render a document node as a child if none is provided. While you can take full control of every node in the structure, this is sometimes a bit tedious if you usually return the same document node for every document or schema type.

The structure definition allows for defining a function which is called when the "default" should be resolved.

> \[!WARNING]
> Gotcha
> **Note that this is** **not** a function exposed on the Structure Builder API itself - rather, it is a function you declare and export for the Structure Builder to use as a fallback.

While the structure definition you provide is exported as the *default* export, you can also export a function named *getDefaultDocumentNode* that will be called in these situations:

getDefaultDocumentNode(options): Document

Export a function named `getDefaultDocumentNode` that returns an `S.document()` node to set the default configuration for document nodes (also often referred to as an "editor node" since it often contains the form view used to edit a document).

### Arguments

#### Properties

| Property | Description |
| --- | --- |
| options | Object of contextual information that can be used to determine which properties the document node should have. Properties:

schemaType - The value of a document’s \_type.

documentId - The ID of the document. |

#### Example

```javascript
// sanity.config.ts (.js)

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure, defaultDocumentNode} from './structure'
import { schemaTypes } from './schema'

export default defineConfig({
  name: 'default',
  title: 'My Cool Project',
  projectId: 'my-project-id',
  dataset: 'production',
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
  ],
  schema: schemaTypes
})

// ./structure.js (.ts)
import { WebPreview, JsonView } from './previews'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      ...S.documentTypeListItems()
    ])

export const getDefaultDocumentNode = (S, {schemaType}) => {
 // Conditionally return a different configuration based on the schema type
 if (schemaType === "post") {
   return S.document().views([
     S.view.form(),
     S.view.component(WebPreview).title('Web')
   ])  
 }
 return S.document().views([
   S.view.form(),
   S.view.component(JsonView).title('JSON')
 ])
}

export default S.defaults()
```

## Document node views

Within a document pane, there can be one or more *views*. If there are more than one view node, they will appear as tabs. The views can be built using methods exposed on `S.view` - eg `S.view.form()`

### View types

form(): FormView

The form method returns the default form-based editor for the specified document type. See the [FormViewBuilder](https://reference.sanity.io/sanity/structure/FormViewBuilder/) reference for the full type definition.

#### Methods

| Method | Description |
| --- | --- |
| id(id): FormView | ID for the view, used for the URL |
| title(title): FormView | Sets the title of the view. Appears when there are more than a single view for a document node. |
| icon(icon): FormView | Sets an icon for the views tab |
| getId(): string | Returns the ID of the view, if any |
| getTitle(): string | Returns the title of the view, if any |
| getIcon(): function | Returns the defined icon for this view, if any |

#### Example

```javascript
S.view.form()
```

component(reactComponent): ComponentView

The `component` method takes a React component and renders it into the document view ([ComponentViewBuilder](https://reference.sanity.io/sanity/structure/ComponentViewBuilder/)). It's most often used for showing the values of a document in alternative ways to the default document form.

#### Methods

| Method | Description |
| --- | --- |
| id(id): ComponentView | ID for the view, used for the URL |
| title(title): ComponentView | Sets the title of the view. Appears when there are more than a single view for a document node. |
| canHandleIntent(intentChecker): ComponentView | Sets the method used to determined whether or not the pane can handle an intent of a certain type. This method is especially useful for routing to custom components from global search results or other links.

The intent checker receives three arguments: intentName, params and context. It should return a boolean indicating whether or not it can handle the intent.

intentName is generally create or edit.

params usually contains id and type, representing the document ID and schema type to be created. Often it will also have template, a string representing the ID of an initial value template.

context is an object containing pane and index |
| component(component): ComponentView | Sets the React component |
| icon(icon): Component | Sets an icon for the views tab |
| options(options): ComponentView | Sets additional user-defined options that will be passed to the React component as the options property. |
| getId(): string | Returns the ID of the view, if any |
| getTitle(): string | Returns the title of the view, if any |
| getComponent(): function | Component | Returns the defined React component to use for the view, if any |
| getIcon(): function | Returns the defined icon for this view, if any |
| getOptions(): object | Returns the user-defined options for this view, if any |

#### Example

```jsx

export const structure = (S) =>
  S.documentTypeList('sampleProject')
    .child(id =>
      S.document()
        .schemaType('sampleProject')
        .documentId(id)
        .views([
          // The default form for editing a document
          S.view.form(),
          
          // Render the current selected document’s values as JSON
          S.view.component(({document}) => (
            <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
          )).title('View JSON')
        ])
    )

```

## Menus

Each pane may have a menu in its upper right corner. This is where you usually find ordering options and affordances for adding new documents. Menus can also hold initial value templates. The convenience list methods will automatically set up default menus for you (some of these may also require that you add `schemaType()`). See the [MenuItemBuilder](https://reference.sanity.io/sanity/structure/MenuItemBuilder/) reference for the full type definition.

menuItem(): MenuItem

### Methods

| Method | Description |
| --- | --- |
| title(title): MenuItem | Sets the title for the menu item. |
| icon(icon): MenuItem | Sets the icon for the menu item. |
| action(action): MenuItem | Sets the action that should be performed when the menu item is selected. Can either be a function or a string.

If specifying a function, that function will be called with any configured params as the first argument when the item is clicked.

If specifying a string, the menu will attempt to look for an object named actionHandlers on the React pane component holding the menu, and find a method with a matching name there. The function will be called with any configured params as the first argument when the item is clicked. |
| params(params): MenuItem | Sets an arbitrary object of parameters to pass to the action handler defined by action(), when clicked. |
| intent(intent): MenuItem | Sets an intent that should be performed when clicking this menu item.

An intent is an object with a type key with either the value create or edit, and an optional set of parameters specified as params.

For the edit intent, the type and id properties are required (document type name and document ID, respectively): {type: 'edit', params: {id: 'documentID', type: 'person'}}

For the create intent, specifying a type is required. If you want to use a specific Initial Value Template, you can specify a template parameter with the ID of the template you want to use: {type: 'create', params: {type: 'person', template: 'book-author'}}

If you want to pass arbitrary parameters to the initial value template, you can use the array form of specifying parameters, where the first element of the array defines the actual intent parameters, while the second element defines the arbitrary template parameters: {type: 'create', params: \[{type: 'person', template: 'book-author'}, {some: 'template-param'}]}

Note that intent and action are mutually exclusive. |
| showAsAction(showAsAction): MenuItem | Sets whether or not the menu item should be displayed as an action instead of being part of the dropdown menu.

Actions appear next to the pane title and must be given an icon, since they have no room for a title unless hovered. |
| getTitle(): string | Returns the title of the menu item. |
| getIcon(): function | Returns the icon for the menu item.
|
| getAction(): function | string | Returns the defined action for the menu item, if any |
| getParams(): object | Returns the parameters for the menu item. |
| getIntent(): Intent | Returns the intent for the menu item. |
| getShowAsAction(): boolean | Returns whether or not the menu item is set to show as an action or not. |

orderingMenuItem({title, by}): MenuItem

Convenience method for populating the menu for selecting different fields and directions for ordering a list of documents.

#### Arguments

#### Properties

| Property | Description |
| --- | --- |
| title \* | Title of the ordering to show in the menu |
| by \* | An array of objects consisting of the field to sort by and the direction of the ordering (asc or desc). See example below. |

#### Example

```javascript
 S.documentList()
  .title("Products")
  .filter("_type == $type")
  .params({ type: "product" })
  .menuItems([
    ...S.documentTypeList("product").getMenuItems(),
    S.orderingMenuItem({title: 'Title ascending', by: [{field: 'title', direction: 'asc'}]}),
    S.orderingMenuItem({title: 'Title descending', by: [{field: 'title', direction: 'desc'}]})
  ])
```

orderingMenuItemsForType(typeName): MenuItem\[]

Convenience method for returning an array of menu items used to order documents of a given schema type, based on the orderings defined in the schema definition.

#### Arguments

#### Properties

| Property | Description |
| --- | --- |
| schemaType \* | Schema type name to return orderings for |

menuItemsFromInitialValueTemplateItems(items): MenuItem\[]

Convenience method for returning an array of menu items used to create new documents based on the given initial value template items.

Note: You should consider using the `initialValueTemplates()` method on the pane instead of this method unless you want the menu items to be nested inside the actual menu.

#### Arguments

#### Properties

| Property | Description |
| --- | --- |
| items \* | Initial value template items. Use S.initialValueTemplateItem() to generate these. |

#### Example

```javascript
 S.documentList()
  .title('Craft beer & cider')
  .filter('_type in $types && isCraft == true')
  .params({types: ['beer', 'cider']})
  .menuItems(
    S.menuItemsFromInitialValueTemplateItems([
      S.initialValueTemplateItem('beer', {isCraft: true}),
      S.initialValueTemplateItem('cider', {isCraft: true}),
    ])
  )
```

#### Hide menu checkmark / selection indicator

Use the `hideSelectionIndicator` boolean.

```
S.menuItem()
   .title('No checkmark')
   .icon(EmptyIcon)
   .action(() => console.log('you clicked!'))
   .params({hideSelectionIndicator: true}),
```

#### Check if menu item is selected

Use the `action` callback and the `isSelected` parameter.

```
S.menuItem()
  .title('View Mode: Default')
  .icon(DocumentIcon)
  .group('view')
  .params({value: 'default'})
  .action((params) => console.log('default', params?.isSelected, params)),
```
