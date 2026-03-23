# Sidebar

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/frontmatter/sidebar.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Sidebar

## Labels

Labels are controlled by frontmatter properties on a given page, which vary depending on if you are configuring a group or a link.

### Links

In order of precedence:

1. `sidebar.label`
2. `title`

#### On an index page

Index page labels default to `Overview` if `sidebar.label` is not defined.

`title` is not taken into consideration due to `title` being used in group labelling.

### Groups

In order of precedence:

1. `sidebar.group.label`
2. `title`

### Example

For example, given the following pages:

/src/content/docs/foo/bar/index.mdx

```

---

title: Bar

sidebar:

  label: IndexTitle

  group:

    label: GroupTitle

---


```

/src/content/docs/foo/bar/baz.mdx

```

---

title: Baz

sidebar:

  label: PageTitle

---


```

The sidebar structure will look like:

- DirectoryGroupTitle
  - IndexTitle
  - PageTitle

If we remove the `sidebar` property from both, it will now look like this:

- DirectoryBar
  - Overview
  - Baz

## Ordering

Both links and groups use the `sidebar.order` frontmatter property to configure their ordering, where groups are ordered based on the index page's order.

If `sidebar.order` is not specified, it will fallback to alphabetical ordering.

For example, given the following pages:

/src/content/docs/foo/alpha/index.mdx

```

---

title: Alpha

sidebar:

  order: 3

---


```

/src/content/docs/foo/beta/index.mdx

```

---

title: Beta

sidebar:

  order: 2

---


```

The sidebar structure will look like:

- DirectoryBeta
  - ...
- DirectoryAlpha
  - ...

If we remove the `sidebar` property from both, it will now look like this:

- DirectoryAlpha
  - ...
- DirectoryBeta
  - ...

## Hiding pages

There are three properties that can be used for hiding pages from the sidebar.

### Hiding individual pages

#### `hidden`

This property should only be used when the page is **not** an index page for a group.

```

---

title: Placeholder

sidebar:

  hidden: true

---


```

#### `group.hideIndex`

Since index pages are relied on to configure the label and sort order of groups, we have a special property that still makes the page available to our sidebar component and allows us to remove it after labelling and ordering groups.

```

---

title: Placeholder

sidebar:

  group:

    hideIndex: true

---


import { DirectoryListing } from "~/components";


<DirectoryListing />


```

Note

Since these pages are still accessible via other links and directly navigating to the URL, always include a `DirectoryListing` component within the page content.

### Hiding child pages of a group

To make a group render as if it was a single page, which links to the index page, use the top-level `hideChildren` property.

## Badges

### Links

To specify a badge next to the link, use the `sidebar.badge` property.

/src/content/docs/examples/example.mdx

```

---

title: Example

sidebar:

  badge: New!

---


```

- DirectoryExamples
  - Example \[New!]

### Groups

To specify a badge next to the group label, use the `sidebar.group.badge` inside the group's `index.mdx` frontmatter.

/src/content/docs/examples/index.mdx

```

---

title: Examples

sidebar:

  group:

    badge: New!

---


```

- DirectoryExamples \[New!]
  - Example

### Automatic "Beta" badges

A "Beta" badge is automatically added to sidebar links and groups whose URL matches a directory entry with a "Beta" availability status. This badge is **not** controlled by frontmatter — it is derived from the product availability data associated with the entry in `src/content/directory/`.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/frontmatter/","name":"Frontmatter"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/frontmatter/sidebar/","name":"Sidebar"}}]}
```
