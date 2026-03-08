# Introduction

By combining the tool with the builder API, Studio provides a way to organize your content and create intuitive workflows for your content editors. With the Structure Builder API, you can customize how lists, documents, views, and menus are organized within Studio.

Here are some ways you can use the Structure tool with the Structure Builder API:

- **Customize document browsing** by organizing content into logical groups, making it easier for editors to find what they need.
- **Create specialized document views** that provide contextual information or alternative ways to interact with your content.
- **Build custom editing workflows** that guide editors through complex content creation processes.
- **Design intuitive navigation** that reflects the structure of your content model.

> \[!TIP]
> Where's the desk?
> In earlier versions of Sanity, Structure was called the "Desk" tool. You may still see reference to this in filenames or tutorials around the web.

## Requirements

- New projects come pre-configured with the Structure tool. For existing projects, you'll need to [install it by updating your project's configuration file](https://www.sanity.io/docs/studio/structure-tool).

## Core concepts

### Structure Builder API

Customizing the structure tool centers around using the Structure Builder API. It uses a structure builder object (often displayed as `S`) to chain builder methods. For example:

```typescript
 export default defineConfig({
  // ...
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Document Types')
          .items([...S.documentTypeListItems()]),
    }),
  ],
})
```

The most common builder methods are:

- `S.list()`: creates a list (a container of items).
- `S.listItem()`: creates an item in a list.
- `S.documentTypeList()`: list of documents of a given schema type.
- `S.document()`: a single document editor node.
- `S.divider()`: adds a visual divider.

### Collapsable panes

Collapsable panes are the building blocks of the Structure tool's interface. These panes have a title and contain a list of document types, a list of documents, a form, or a custom component. They can be collapsed to make more space within the window, providing a flexible way to navigate complex content structures.

Panes can be nested, with child panes opening to the right of their parent. This creates a visual hierarchy that helps editors understand where they are in the content structure.

### Pane types

There are four main types of panes you can work with:

#### List

A list contains one or more list items and is generally considered to be static. It's useful for displaying a fixed set of options, such as document types within your schema.

#### Document list

Optimized for displaying a collection of documents, a document list keeps itself updated in real-time as documents are created, modified, or deleted. It uses GROQ filters to determine which documents to display and supports infinite scrolling for large collections.

#### Document (and views)

A document pane displays a single document and can include multiple views, such as the default form view and custom views you create. Each view can show different aspects of the document or provide specialized interfaces for working with the content.

### Child resolvers

Child resolvers are functions that determine what should be displayed when a user navigates to a specific item. They allow you to create dynamic, nested structures that respond to user actions and content changes.

#### Get started with structure builder

[Structure Builder tutorial](https://www.sanity.io/docs/studio/structure-builder-introduction)

## Limitations

- The Structure tool's document list has a limited view of 2000 documents. If you find yourself running into this limitation, consider customizing your Structure configuration to organize documents into narrower categories.
- Custom views cannot directly modify document content outside of the standard form fields without additional configuration. For highly complex custom views, consider using the App SDK instead.
- Complex custom structures may impact performance, especially in projects with large numbers of documents.
