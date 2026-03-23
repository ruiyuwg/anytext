# Screenshots

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/component-attributes/screenshots.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Screenshots

A screenshot is a picture of a software tool, in this case usually of the Cloudflare dashboard.

We only recommend screenshots in [specific scenarios](#when-to-use), as they have a higher [maintenance cost](#maintenance) than other types of content.

## When to use

Use screenshots sparingly and intentionally. For example, it's appropriate to use a screenshot when the task is simple but often confuses users or is hard to describe with words alone.

A canonical example of this would be [Find account and zone ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/) because:

- It's a high driver of SEO traffic to our [Community ↗](https://community.cloudflare.com).
- We tried explaining with words alone and that did not solve the confusion.
- It's a task specifically related to new users, where they are less familiar with Cloudflare concepts or navigation patterns.

Note

Use screenshots liberally in [Changelog entries](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/changelog/), because this content type is an accepted "point-in-time" reference and it's okay for these screenshots to be outdated.

## Guidelines

Screenshots should:

- Maintain the original aspect-lock ratio.
- Keep resolution at 72dpi.
- Keep width at 500-600 pixels.
- Avoid sharing sensitive information (you may need to edit the underlying HTML in your browser).
- Avoid including visuals that change frequently, such as sidebar navigation.
- Have descriptive alt text.

## Usage

```

![Alt text](~/assets/images/$PRODUCT_NAME/$IMAGE_NAME.png)


```

Add screenshots to the corresponsding `$PRODUCT_NAME` folder under [/src/assets/images/ ↗](https://github.com/cloudflare/cloudflare-docs/tree/production/src/assets/images). You may want to add subfolders for organizational purposes.

## Maintenance

We avoid screenshots without a clear purpose because they are difficult to maintain. This is because:

- The UI might change and our team might not know.
- Even if you do know what changed, it's difficult to *find* which screenshots might reference a particular UI flow.
- If something is changed, you need to fully re-take the screenshot to replace it. This could involve adding fake data or hiding sensitive information.

Note

For more details on how we approach this maintenance, refer to [Image maintenance](https://developers.cloudflare.com/style-guide/how-we-docs/image-maintenance/).

## Related components

- [Diagrams](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/)
- [Mermaid diagrams](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/#mermaid-diagrams)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/","name":"Component attributes"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/screenshots/","name":"Screenshots"}}]}
```
