# How to

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/how-to.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# How to

## Purpose

The purpose of a how to is to explain how to complete a task within the product.

Note

If you are unsure about when to categorize something as a how-to or tutorial, remember:

Tutorials are typically longer form and contain multiple steps, usually involving multiple products, and help users connect products to real-world scenarios.

A how-to helps a user complete a singular task within a single product.

## Tone

instructional, straightforward

## content\_type

```

pcx_content_type: how-to


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Structure

### Required components

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): Short verb phrase in second-person imperative. Do not use gerund phrases.

[**Steps**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/steps-tasks-procedures/): Numbered steps that complete a task.

[**Next steps**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/next-steps/): What users should see as the end result of the steps and/or actionable next steps.

### Optional components

[**Context**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/context/): An introductory paragraph on the following steps and what they will accomplish.

Provide context to the reader that is not in the section heading.

End with a colon or a period. Use a colon if it immediately precedes the steps. Use a period if there is more material (such as a note) between the context and the procedure.

Do not provide context for steps with a partial sentence that is completed by the numbered steps.

[**Prerequisites**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/prerequisites/): Tasks or conditions that must be completed before a user can complete a series of steps.

[**Notes/warnings**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/)

[**Examples**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/examples/)

**Screenshots**

[**Related links**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/links/): Bulleted list of links to associated resources.

## Template

Single procedure how-to

```

---

weight: xx

pcx_content_type: how-to

---


# Second-person imperative verb phrase


Context for procedure (optional)


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


```

How-to with multiple procedures

```

---

weight: xx

pcx_content_type: how-to

---


# Second-person imperative verb phrase


Context for procedures on page (optional)


## Second-person imperative verb phrase


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


## Second-person imperative verb phrase


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


```

How-to with multiple procedures that must be completed in order

```

---

weight: xx

pcx_content_type: how-to

---


# Second-person imperative verb phrase


Context for procedures on page (optional)


## 1. Second-person imperative verb phrase


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


## 2. Second-person imperative verb phrase


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


## 3. Second-person imperative verb phrase


1. Step one

1. Step two

1. Step three

1. ...


Next steps sentence - what users should see as the end result and/or actionable next steps.


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/how-to/","name":"How to"}}]}
```
