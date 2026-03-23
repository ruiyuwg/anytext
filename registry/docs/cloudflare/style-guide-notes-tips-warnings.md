# Notes/tips/warnings

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Notes/tips/warnings

## Definition

A colored info box or aside with content (text, images, lists, code blocks) that adds relevant notes that do not fit the text or warns users of specific behavior that can break functionality or impact security.

## Used in

[How to](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/how-to/), [Configuration](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/configuration/), [FAQ](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/faq/), [Concept](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/concept/), [Reference](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/reference/), [Tutorial](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/tutorial/)

## Structure

**Type**: note or warning (defines the background color)

**Aside content**

**(optional) Title/Header**

## Templates

To learn how to format notes, refer to [Notes and other notation types](https://developers.cloudflare.com/style-guide/formatting/notes-and-other-notation-types/).

## Rendered examples

Header text

This is a note with a header.

Note

This is a note without a header.

Warning

This is a warning.

Tip

This is a tip.

## When should I use a note/warning?

Use a note to alert a reader to additional useful information that you cannot integrate into the text.

Use a warning to alert a reader to behavior that could impact the security of a users network or break functionality.

## Recommendations

- **An aside should not contain too much content**, since it breaks the normal text flow. For example, up to 3 paragraphs or bulleted lists up to 3 items. If you need to include more content, consider creating a documentation section "Important notes" or similar.
- **Use asides sparingly.** Each section should not have more than one aside of the same type. The only exception is a possible availability disclaimer right after the heading.
- **Asides inside task step instructions should not have a header.** They take too much space and the background color is enough to distinguish the aside content from regular text.
- **Use a `note` aside to state the restricted availability of a feature** (for example, "Only available for customers on an Enterprise plan.") at the beginning of a page, without a header.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/","name":"Component attributes"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/","name":"Notes/tips/warnings"}}]}
```
