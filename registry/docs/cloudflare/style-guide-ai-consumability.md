# AI consumability

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/ai-consumability.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# AI consumability

We have various approaches for making our content visible to AI as well as making sure it's easily consumed in a plain-text format.

## AI discoverability

The primary proposal in this space is [llms.txt ↗](https://llmstxt.org/), offering a well-known path for a Markdown list of all your pages.

We have implemented `llms.txt` and `llms-full.txt` as follows:

- [llms.txt](https://developers.cloudflare.com/llms.txt) — A directory of all Cloudflare documentation products, grouped by category. Each entry links to that product's own `llms.txt` — for example, [/workers/llms.txt](https://developers.cloudflare.com/workers/llms.txt) — which lists every page for that product in Markdown format.
- [llms-full.txt](https://developers.cloudflare.com/llms-full.txt) — The full contents of all Cloudflare documentation in a single file, intended for offline indexing, bulk vectorization, or large-context models. We also provide a `llms-full.txt` file on a per-product basis — for example, [/workers/llms-full.txt](https://developers.cloudflare.com/workers/llms-full.txt).

To obtain a Markdown version of a single documentation page, you can:

- Send a request to any page with an `Accept: text/markdown` header — Uses [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) to convert the page to Markdown at the network layer. For example:\
  Terminal window

```
curl "https://developers.cloudflare.com/style-guide/ai-tooling/" \  
  --header "Accept: text/markdown"  
```

- Send a request to `/$page/index.md` — Add `/index.md` to the end of any page to get the Markdown version. For example, [/style-guide/ai-tooling/index.md](https://developers.cloudflare.com/style-guide/ai-tooling/index.md).

Both methods return the same Markdown output, powered by [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/).

In the top right of this page, you will see a `Page options` button where you can copy the current page as Markdown that can be given to your LLM of choice.

![Page options
button](https://developers.cloudflare.com/_astro/page-options.T2MlgPLy_Z1s8r6.webp)

## Textual representation of interactive elements

HTML is easily parsed - after all, the browser has to parse it to decide how to render the page you're reading now - it tends to not be very *portable*. This limitation is especially painful in an AI context, because all the extra presentation information consumes additional tokens.

For example, given our [Tabs](https://developers.cloudflare.com/style-guide/components/tabs/), the panels are hidden until the tab itself is clicked:

- [ One ](#tab-panel-7126)
- [ Two ](#tab-panel-7127)

One Content

Two Content

If we run the resulting HTML from this component through a solution like [turndown ↗](https://www.npmjs.com/package/turndown):

```

- [One](#tab-panel-6)

- [Two](#tab-panel-7)


One Content


Two Content


```

The references to the panels `id`, usually handled by JavaScript, are visible but non-functional.

### Turning our components into "Markdownable" HTML

To solve this, we use [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/), which converts HTML to Markdown at the Cloudflare network layer. It handles:

- Removing non-content tags (`script`, `style`, `link`, etc.)
- Transforming custom elements like `starlight-tabs` into standard unordered lists
- Adapting code block HTML into clean Markdown fenced code blocks

Taking the `Tabs` example from the previous section, Markdown for Agents will give us a normal unordered list with the content properly associated with a given list item:

```

- One


  One Content


- Two


  Two Content


```

You can request any page as Markdown in two ways:

- Send a request with an `Accept: text/markdown` header:\
  Terminal window

```
curl "https://developers.cloudflare.com/style-guide/ai-tooling/" \  
  --header "Accept: text/markdown"  
```

- Append `index.md` to the URL — for example, [/style-guide/ai-tooling/index.md](https://developers.cloudflare.com/style-guide/ai-tooling/index.md)

### Saving on tokens

Most AI pricing is around input & output tokens and Markdown greatly reduces the amount of input tokens required.

For example, let's take a look at the amount of tokens required for the [Workers Get Started](https://developers.cloudflare.com/workers/get-started/guide/) using [OpenAI's tokenizer ↗](https://platform.openai.com/tokenizer):

- HTML: 15,229 tokens
- Markdown: 2,110 tokens (7.22x less than HTML)

When providing our content to AI, we can see a real-world ~7x saving in input tokens cost.

## Curating content

Other than the work making our content [discoverable](#ai-discoverability), most of the other work of making content for AI aligns with SEO or content best practices, such as:

- Using semantic HTML
- Adding headings
- Reducing inconsistencies in naming or outdated information

For more details, refer to [Google's AI guidance ↗](https://developers.google.com/search/docs/appearance/ai-features#seo-best-practices).

### `noindex` directives

The only *special* work we have done is adding a [noindex directives ↗](https://developers.google.com/search/docs/crawling-indexing/block-indexing) to specific types of content (via a [frontmatter tag](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#noindex)).

noindex meta tag

```

<meta name="robots" content="noindex">


```

For example, we have certain pages that discuss deprecated features, such as [Wrangler 1](https://developers.cloudflare.com/workers/wrangler/migration/v1-to-v2/wrangler-legacy/). While technically accurate, they are no longer advisable to follow and could potentially confuse AI outputs.

At the moment, it's unclear whether all AI crawlers will respect these directives, but it's the only signal we have to exclude something from their indexing (and we do not want to set up [WAF](https://developers.cloudflare.com/waf/) rules for individual pages).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/ai-consumability/","name":"AI consumability"}}]}
```
