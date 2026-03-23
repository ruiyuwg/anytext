# File conventions

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/file-conventions.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# File conventions

Our docs have a few conventions around files.

## Naming

When creating new files, follow specific conventions for your naming.

Filenames should:

- Semantically communicate the purpose of the file
- Be lowercased
- Use dashes between words

Acceptable file names

```

/src/content/docs/fundamentals/concepts/what-is-cloudflare.mdx

/src/assets/images/api-shield/api-shield-call-sequence.png


```

Unacceptable file names

```

/src/content/docs/fundamentals/concepts/What is Cloudflare.mdx

/src/content/docs/fundamentals/concepts/What-is-Cloudflare.mdx

/src/assets/images/api-shield/API_Image_1.png


```

These conventions are important for user readability, SEO conventions, and making sure our GitHub actions do not break.

## Folders

Each folder should have a file named `index.mdx`.

```

/src/content/docs/fundamentals/concepts/index.mdx


```

The content at `/src/content/docs/fundamentals/concepts/index.mdx` will be rendered at `https://developers.cloudflare.com/fundamentals/concepts/`.

## Content files

Add regular content files to the `/src/content/docs/{product_folder}/` directory.

```

/src/content/docs/fundamentals/concepts/what-is-cloudflare.mdx


```

## Image files

Add image files to the `/src/assets/images/{product_folder}/` directory.

```

/src/assets/images/api-shield/api-shield-call-sequence.png


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/file-conventions/","name":"File conventions"}}]}
```
