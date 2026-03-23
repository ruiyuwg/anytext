# Dates and times

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/dates-and-times.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Dates and times

## Product content

To account for internationalization and inclusivity of all locales, use the ISO-8601 (YYYY-MM-DD hh:mm:ss) standard when writing dates and times as much as possible.

In general, documentation should strive to represent universal truth, not something time-bound. This is why semgrep may flag uses of explicit dates or month names or years because often become out-of-date and not be revised later.

## Blogs

Since our readership is international, keep date formats international.

When mentioning dates in text, spell them out:

- On Tuesday, May 19, attackers targeted the company's servers.
- On February 11th, 2010, the company went public.

For graphs, charts, and other visual assets use the ISO-8601 (YYYY-MM-DD hh:mm:ss) standard.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/dates-and-times/","name":"Dates and times"}}]}
```
