# Paragraphs and line breaks

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/structure/paragraphs-and-line-breaks.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Paragraphs and line breaks

## Paragraphs in Markdown

To start a new paragraph, leave an empty line (with no spaces) before adding the new paragraph content.

```

This sentence is the first one in this paragraph.

This second sentence also belongs to the first paragraph.


This is the first sentence of the second paragraph.


```

## Line breaks in Markdown

Avoid line breaks when possible. Considering creating a separate paragraph, even inside numbered lists.

If you need to add a line break, use the `<br/>` HTML element.

Example inside a table:

```

| Feature                          | Enabled |

|----------------------------------|---------|

| Feature name<br/>Additional info | Yes     |


```

This is how the table looks:

| Feature                     | Enabled |
| --------------------------- | ------- |
| Feature nameAdditional info | Yes     |

Warning

Do not use two spaces at the end of a sentence to create a forced line break. Although this Markdown syntax is supported, it is not immediately visible and can easily miss these line breaks during peer reviews.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/structure/","name":"Structure"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/formatting/structure/paragraphs-and-line-breaks/","name":"Paragraphs and line breaks"}}]}
```
