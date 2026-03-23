# Reference

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/reference.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Reference

## Purpose

The purpose of reference content is to provide supplemental information for further learning on settings, values, or options. While reference information is helpful for users, reference information should not block or prevent users from completing tasks.

## Tone

plain, straightforward

## content\_type

```

pcx_content_type: reference


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Structure

### Required components

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): For a single Reference page, use "Reference" as the title. For a reference section with child pages, use nouns in the title. For example, [Common Cf-Polished statuses ↗](https://developers.cloudflare.com/images/polish/cf-polished-statuses/).

[**Context**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/context/): Provide an introductory paragraph to explain how and why a user might utilize the information on this page.

### Optional components

**Code snippets**: Examples of API responses or commands to run certain tasks.

[**Dynamic Lists**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/dynamic-lists/): Long lists of fields (more than 20).

[**Examples**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/examples/): Code samples that reference a specific configuration or API call.

[**Notes/tips/warnings**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/): Relevant information that can help or simplify concepts or warn users of potential impacts.

**Screenshots**: Images of a completed configuration for complicated tasks.

**Tables**: Longer lists of features and an associated number value or terms and their definitions.

## Examples

[Cache: Common Cf-Polished statuses](https://developers.cloudflare.com/images/polish/cf-polished-statuses/)

[Logpush: Logpush API configuration](https://developers.cloudflare.com/logs/logpush/logpush-job/api-configuration/)

## Template

Single reference page

```

---

weight: xx

pcx_content_type: reference

---


# Reference


Write an overview of the reference information on this page. If this section has child pages, add navigation links below using the DirectoryListing snippet to add links for each child page in a bulleted list.


<DirectoryListing path="/reference"/>


## Concise noun title


Brief description of content in this section.


## Concise noun title


Brief description of content in this section.


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/reference/","name":"Reference"}}]}
```
