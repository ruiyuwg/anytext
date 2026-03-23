# External references

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/external-references.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# External references

When referencing external resources, ensure that you are linking to a trustworthy source that is recognized as an authority.

For general websites, consider the following recommendations about the link text:

- Use the website name if you are linking to the home page.
- Use the page name if you are linking to a specific page.
- Authoritative sources for documents such as RFCs can have their own specific format for references, such as the RFC number.

Note

When linking to a Cloudflare blog post, sometimes we use only "blog post" for the link text.

## Referencing RFCs

A Request for Comments (RFC) document is a formal document produced by different entities such as the Internet Engineering Task Force (IETF), covering many aspects of computer networking. RFCs describe the Internet's technical foundations, such as addressing, routing, and transport technologies.

Use the following formatting when referencing an RFC:

`RFC <number>`

(RFC, space, number up to four digits)

Example: CAA is a new DNS resource record type defined in RFC 6844.

## Links

When linking to an RFC (or RFC section), consider using a link to the following website, which is the authoritative source according to IETF:

[https://www.rfc-editor.org ↗](https://www.rfc-editor.org)

To get the link:

1. Go to [RFC Editor ↗](https://www.rfc-editor.org/rfc-index.html) and search for the RFC number.
2. Select **HTML** to open the HTML version. If available, do **not** use **HTML with inline errata** as this version should not be used as reference.
3. (Optional) Go to a specific section, if necessary.
4. Use the current URL as the link target in Developer Documentation.

URL example:

[https://www.rfc-editor.org/rfc/rfc6844.html ↗](https://www.rfc-editor.org/rfc/rfc6844.html)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/external-references/","name":"External references"}}]}
```
