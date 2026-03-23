# Get started

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/get-started.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Get started

## Purpose

The purpose of Get started content is to help users go from not using a product to successfully configuring and setting up.

## content\_type

```

pcx_content_type: get-started


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Structure

### Required components

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): Should be "Get started"

[**Prerequisites**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/prerequisites/): Which may include:

- An active zone
- Certain subscription / enabled product / plan
- Other tasks you might need to do to set up other things (your origin) outside of CF
- Do you need to make certain decisions before you start?

[**Steps**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/steps-tasks-procedures/): Steps that lead someone to whatever would be considered Product Adoption.

- Often, these can be partialized files from your How-to pages.
- This is usually the bare minimum (a single Bot Management FW rule) + the most general use case for a product.
- This may at times contradict the flow in the Cloudflare dashboard at times. If it does, consider raising it up to the Product team.

### Optional components

**Next steps**: Point someone towards additional configuration options.

## Template

```

---

weight: xx

pcx_content_type: get-started

---


# Get started


Description


## Before you begin


All the things you need to do before you start configuring your product, both within Cloudflare and outside.


## 1. Step description


## 2. Steps until you get to activation


---


## Next steps


Point to more complex setup options.


```

## Example

[Waiting Room: Get started](https://developers.cloudflare.com/waiting-room/get-started/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/get-started/","name":"Get started"}}]}
```
