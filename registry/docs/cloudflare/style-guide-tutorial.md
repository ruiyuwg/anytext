# Tutorial

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/tutorial.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Tutorial

A tutorial is a practical lesson that takes you from a clear starting to ending point.

The goal is to connect products to real-world scenarios to meet a user’s goal.

Note

If you are unsure about when to categorize something as a how-to or tutorial, remember:

Tutorials are typically longer form and contain multiple steps, usually involving multiple products, and help users connect products to real-world scenarios.

A how-to helps a user complete a singular task within a single product.

## Guidelines

**A tutorial is:**

- User-focused
- Aligned to a user's goal or job-to-be-done
- Descriptive and guiding

**A tutorial can:**

- Describe how to integrate with a third party
- Be delivered in the Cloudflare dashboard
- Describe how to set up multiple products to complete a single job-to-be-done

**A tutorial is not:**

- Product configuration information, how-to (or any of the other content types)
- How to complete a task in the UI or API
- A dumping ground for screenshots
- Content with no end goal or job-to-be-done

### Tone

Guiding, straightforward, educational, authoritative

### content\_type

```

pcx_content_type: tutorial


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

### Components

#### Most used

- [GitHubCode](https://developers.cloudflare.com/style-guide/components/github-code/)
- [ListTutorials](https://developers.cloudflare.com/style-guide/components/list-tutorials/)

#### Required

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): Short verb phrase in second-person imperative.

**Context**: An introductory paragraph on the user's goal or job-to-be-done and how they will accomplish that in the tutorial. Consider including the intended audience for the tutorial. Refer to [Context](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/context/) for more information.

**Consider the user story framing**: "As a `___`, I want to `___` so I can `___`."

[**Steps**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/steps-tasks-procedures/): Numbered steps that complete a task.

#### Optional

[**Notes/warnings**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/)

[**Examples**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/examples/)

**Screenshots**

[**Links**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/links/)

**Boundaries**

## Examples

[Workers Tutorials](https://developers.cloudflare.com/workers/tutorials)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/tutorial/","name":"Tutorial"}}]}
```
