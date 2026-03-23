# Banner

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/frontmatter/banner.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Do **not** use banners in the [Frontmatter](https://developers.cloudflare.com/style-guide/frontmatter/) unless a change will cause customer application to break.

Copy page

# Banner

One of the fields you can add to the [Frontmatter](https://developers.cloudflare.com/style-guide/frontmatter/) is `banner`. It displays a prominent section at the top of the page and supports the use of HTML for links and formatting.

Only use it to alert about disruptive situations and take note to remove it when applicable.

## Example

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: Do <strong>not</strong> use banners in the <a href="https://developers.cloudflare.com/style-guide/frontmatter/">Frontmatter</a> unless a change will cause customer application to break.

---


```

## Dismissible

You can make a banner dismissible (for some number of days) by adding the `dismissible` property to the banner object.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: Do <strong>not</strong> use banners in the <a href="https://developers.cloudflare.com/style-guide/frontmatter/">Frontmatter</a> unless a change will cause customer application to break.

  dismissible:

    id: banner-example

    days: 7 # default

---


```

Any other banner with the same `dismissible_id` will be dismissed when the banner is displayed.

## Styles / Types

### Note

The note banner is used to alert about important information.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: Ensure you read this!

  type: note

---


```

### Tip

The tip banner is used to alert about important suggestions.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: Consider this alternative!

  type: tip

---


```

### Caution

The caution banner is used to warn readers of upcoming disruptive changes.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: This is deprecated and will break on <strong>1970-01-01</strong>!

  type: caution

---


```

### Danger

The danger banner is used to alert about errors.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: This has been removed!

  type: danger

---


```

### Default

The default banner is used in all other circumstances.

```

---

title: Banner

description: How to display a banner at the top of the page and when to use it.

banner:

  content: Do <strong>not</strong> use banners in the <a href="https://developers.cloudflare.com/style-guide/frontmatter/">Frontmatter</a> unless a change will cause customer application to break.

---


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/frontmatter/","name":"Frontmatter"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/frontmatter/banner/","name":"Banner"}}]}
```
