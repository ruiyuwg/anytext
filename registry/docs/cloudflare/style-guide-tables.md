# Tables

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/component-attributes/tables.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Tables

Tables make complex information easier to understand by presenting it in a clear structure.

Warning

Limit tables to three columns (or four if the information is very condensed). Otherwise, mobile users will have a hard time consuming tabular information.

## Use cases

The purpose of a table is to provide a scannable content experience.

Use tables for:

- Simple mappings of data and values
- Categories of things with examples
- Collections of things with different attributes

Each cell within a table should not contain more than **one sentence** of content.

## Usage

We use standard Markdown tables for our documentation.

### Example

| Category             | Range                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------- |
| **Not computed**     | Bot scores of 0.                                                                       |
| **Automated**        | Bot scores of 1.                                                                       |
| **Likely automated** | Bot scores of 2 through 29.                                                            |
| **Likely human**     | Bot scores of 30 through 99.                                                           |
| **Verified bot**     | Non-malicious automated traffic (used to power search engines and other applications). |

Markdown table

```

| Category | Range |

| ---- | ---- |

| **Not computed** | Bot scores of 0. |

| **Automated** | Bot scores of 1. |

| **Likely automated** | Bot scores of 2 through 29. |

| **Likely human** | Bot scores of 30 through 99. |

| **Verified bot** | Non-malicious automated traffic (used to power search engines and other applications). |


```

### Guidelines

When using tables:

- Check whether the tables work for both desktop and mobile users.
- Limit tables to three columns (or four if the information is very condensed).
- Avoid long sentences or information that is so dense that it defeats the purpose of having tabular displays

### Alternatives

If your information does not fit within the [guidelines](#guidelines), consider using the following methods of presentation:

- Lists
- Subsections
- [Tabs](https://developers.cloudflare.com/style-guide/components/tabs)
- [Details](https://developers.cloudflare.com/style-guide/components/details/)

### Large tables

As stated in the [guidelines](#guidelines), we generally avoid large tables in our documentation.

However, if you have a unique use case, use the `{{</*table-wrap*/>}}` shortcode to make your table responsive and scrollable.

| Header 1 | Header 2 | Header 3 | Header 4 |
| -------- | -------- | -------- | -------- |
| test     | test     | test     | test     |

table-wrap example

```

{{</*table-wrap*/>}}


| Header 1 | Header 2 | Header 3 | Header 4 |

| --- | --- | --- | --- |

| test | test | test | test |


{{</*/table-wrap*/>}}


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/","name":"Component attributes"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/tables/","name":"Tables"}}]}
```
