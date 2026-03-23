# Notes and other notation types

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/notes-and-other-notation-types.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Notes and other notation types

When adding a note to a page, always use this special note formatting. There are three types of formatted notes: `note`, `caution`, and `tip`.

Here is some additional information about notes:

- The color of the note depends on the type of note: `note` is blue, `caution` is yellow, and `tip` is purple.
- For every note type, the header text is optional.
- All note types can contain text and additional formatting like lists, code blocks, and images.

To learn how notes fit into our content strategy, refer to [Notes/tips/warnings](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/).

## Note

Use Note for small additions or when you need to provide extra context that is not essential to the main content.

If you do not provide a header, this aside will default to `Note`.

```

:::note[Header]

Hello, world!

:::


```

Header

Hello, world!

## Caution/Warning

Use Caution to highlight actions that could cause issues for a user.

If you do not provide a header, this aside will default to `Warning`.

```

:::caution[Feature conflict]

If you use feature A and feature B together, your configuration will not work.

:::


```

Feature conflict

If you use feature A and feature B together, your configuration will not work.

## Tip

Use Tip to share best practices or opinionated use cases that do not fit into the main documentation.

If you do not provide a header, this aside will default to `Tip`.

```

:::tip[Best practice]

Cloudflare recommends you use [1.1.1.1](/1.1.1.1/) as your DNS resolver.

:::


```

Best practice

Cloudflare recommends you use [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) as your DNS resolver.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/notes-and-other-notation-types/","name":"Notes and other notation types"}}]}
```
