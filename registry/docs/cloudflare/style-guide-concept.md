# Concept

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/concept.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Concept

## Purpose

The purpose of a concept is to provide conceptual or descriptive information so users understand the background and context of a particular topic.

## Tone

instructional, descriptive, approachable, supportive

## content\_type

```

pcx_content_type: concept


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Structure

### Required components

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): Use "About" for concept pages that describe the functionality of your product. Otherwise, use a short noun phrase (feature name, functionality, Internet concept - Health checks, Status resource protection, CDN)

[**Context**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/context/): Provide a brief description of why users should care about this information.

**Explanation**: Explain the page topic. Keep paragraphs short and concise to avoid large blocks of text. Feel free to use bulleted lists, notes, and headings for visual breaks.

## Template

```

---

title: About (for high-level product concept page only - otherwise omit this line)

weight: xx

pcx_content_type: concept

---


# About <product> or noun phrase


Provide a brief description of why users should care about this information.


Explain the page topic. Keep paragraphs short and concise to avoid large blocks of text. Feel free to use bulleted lists, notes, and headings for visual breaks.


```

## Additional information

Do not recreate information that's already available online. Instead, consider why a topic needs to be explained, what Cloudflare's perspective is on that topic, and what users need to understand about the topic in order to successfully use our products.

## Examples

[Load Balancing](https://developers.cloudflare.com/load-balancing/)

[WAF](https://developers.cloudflare.com/waf/)

[Magic Transit](https://developers.cloudflare.com/magic-transit/about/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/concept/","name":"Concept"}}]}
```
