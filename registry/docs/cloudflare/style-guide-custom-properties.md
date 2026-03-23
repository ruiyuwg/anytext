# Custom properties

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/frontmatter/custom-properties.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Custom properties

We have added specific custom [frontmatter](https://developers.cloudflare.com/style-guide/frontmatter/) properties to meet specific needs.

## Properties

### banner

**Type:** object optional

**Description:** Displays a [Banner](https://developers.cloudflare.com/style-guide/frontmatter/banner/) on the current docs page.

### canonical

**Type:** string optional

**Description:** A canonical URL or path to set as the `<link rel="canonical">` in the page `<head>`, overriding the default derived from the page URL.

### chatbot\_deprioritize

**Type:** boolean optional

**Description:** If true, this property will de-prioritize this page in the responses surfaced by Support AI. Helpful for pages that are historically accurate, but no longer recommended, such as [Workers Sites](https://developers.cloudflare.com/workers/configuration/sites/). Companion to the `noindex` property.

### difficulty

**Type:** string optional

**Description:** Difficulty is displayed as a column in the [ListTutorials component](https://developers.cloudflare.com/style-guide/components/list-tutorials/).

### external\_link

**Type:** string optional

**Description:** Path to another page in our docs or elsewhere. Used to add a crosslink entry to the lefthand navigation sidebar.

### feedback

**Type:** boolean

**Description:** Whether to show the FeedbackPrompt on the page, defaults to true

### hideChildren

**Type:** boolean optional

**Description:** Renders this group as a single link on the sidebar, to the index page. Refer to [Sidebar](https://developers.cloudflare.com/style-guide/frontmatter/sidebar/).

### noindex

**Type:** boolean optional

**Description:** If true, this property adds a `noindex` declaration to the page, which will tell internal / external search crawlers to ignore this page. Helpful for pages that are historically accurate, but no longer recommended, such as [Workers Sites](https://developers.cloudflare.com/workers/configuration/sites/). Companion to the `chatbot_deprioritize` property.

### pcx\_content\_type

**Type:** string optional

**Description:** The purpose of the page, and defined through specific pages in [Content strategy](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/).

### preview\_image

**Type:** string optional

**Description:** A `src` path to the image that you want to use as a custom preview image for social sharing.

### products

**Type:** array

**Description:** The names of related directory entries (according to their file name in `src/content/directory`). Usually, these correspond to file paths, but not always, such as with `cloudflare-tunnel`

### release\_notes\_file\_name

**Type:** array optional

**Description:** Required for the [ProductReleaseNotes](https://developers.cloudflare.com/style-guide/components/usage/#productreleasenotes) component.

### reviewed

**Type:** string optional

**Description:** A `YYYY-MM-DD` value that signals when the page was last explicitly reviewed from beginning to end.

### sidebar

**Type:** object

**Description:** Used to configure various sidebar options. Refer to [Sidebar](https://developers.cloudflare.com/style-guide/frontmatter/sidebar/).

### styleGuide

**Type:** object optional

**Description:** Used by overrides for style guide component documentation, which helps us display the [usage counts](https://developers.cloudflare.com/style-guide/components/usage/) for components directly on the component page itself.

### summary

**Type:** string optional

**Description:** Renders a summary description directly below the page title.

### tags

**Type:** array optional

**Description:** A group of related keywords relating to the purpose of the page. Refer to [Tags](https://developers.cloudflare.com/style-guide/frontmatter/tags/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/frontmatter/","name":"Frontmatter"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/frontmatter/custom-properties/","name":"Custom properties"}}]}
```
