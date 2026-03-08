Meta reference

# useHead

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/use-head.mdx)

`useHead` is a low-level API for registering custom `<head>` tags with the nearest [`MetaProvider`](/solid-meta/reference/meta/metaprovider).

***

## [Import](/solid-meta/reference/meta/use-head#import)

```
import { useHead } from "@solidjs/meta";
```

***

## [Type](/solid-meta/reference/meta/use-head#type)

```
type TagDescription = {  tag: string;  props: Record<string, unknown>;  setting?: {    close?: boolean;    escape?: boolean;  };  id: string;  name?: string;  ref?: Element;};
function useHead(tag: TagDescription): void;
```

***

## [Parameters](/solid-meta/reference/meta/use-head#parameters)

### [`tag`](/solid-meta/reference/meta/use-head#tag)

- **Type:** `string`
- **Required:** Yes

The tag name to render in `<head>` (eg. `<script>`, `<meta>`, `<title>`).

### [`props`](/solid-meta/reference/meta/use-head#props)

- **Type:** `Record<string, unknown>`
- **Required:** Yes

Attributes and properties applied to the rendered element.

If `props.children` is provided, is provided, it is used as the element’s content for tags such as `title`, `style`, and `script`. During server-side rendering, arrays of strings are concatenated without commas.

### [`setting`](/solid-meta/reference/meta/use-head#setting)

- **Type:** `{ close?: boolean; escape?: boolean }`
- **Required:** No

SSR-only rendering options for the tag contents.

#### [`close`](/solid-meta/reference/meta/use-head#close)

- **Type:** `boolean`
- **Required:** No

Required for elements that cannot be self-closing, such as `script`, `style`, and `title`. When `true`, the server renders a closing tag and includes `children`. If `false`, `children` is not rendered.

#### [`escape`](/solid-meta/reference/meta/use-head#escape)

- **Type:** `boolean`
- **Required:** No

When `true`, HTML-escapes `children` during SSR. If omitted or `false`, renders `children` as raw HTML.

### [`id`](/solid-meta/reference/meta/use-head#id)

- **Type:** `string`
- **Required:** Yes

A stable identifier used to match server-rendered tags during hydration. Value should remain consistent for the lifetime of the component.

### [`name`](/solid-meta/reference/meta/use-head#name)

- **Type:** `string`
- **Required:** No

An optional label for the tag. With `meta` tags, can mirror `props.name` or `props.property`.

### [`ref`](/solid-meta/reference/meta/use-head#ref)

- **Type:** `Element`
- **Required:** No

An existing element to reuse instead of creating a new one, typically managed internally.

***

## [Return value](/solid-meta/reference/meta/use-head#return-value)

`useHead` does not return a value.

***

## [Examples](/solid-meta/reference/meta/use-head#examples)

### [Simple custom tag](/solid-meta/reference/meta/use-head#simple-custom-tag)

```
import { useHead } from "@solidjs/meta";
useHead({  tag: "link",  id: "rss-feed",  props: {    rel: "alternate",    type: "application/rss+xml",    title: "Solid RSS",    href: "/rss.xml",  },});
```

### [JSON-LD per page (script with `close` and `escape`)](/solid-meta/reference/meta/use-head#json-ld-per-page-script-with-close-and-escape)

```
import { useHead } from "@solidjs/meta";
const jsonLD = JSON.stringify({  "@context": "https://schema.org",  "@type": "WebSite",  name: "Solid Docs",  url: "https://docs.solidjs.com/",});
useHead({  tag: "script",  setting: { close: true, escape: false },  id: "schema-home",  props: {    type: "application/ld+json",    children: jsonLD,  },});
```

### [Reactive updates](/solid-meta/reference/meta/use-head#reactive-updates)

```
import { createSignal } from "solid-js";import { useHead } from "@solidjs/meta";
const [pageTitle, setPageTitle] = createSignal("Getting started");
useHead({  tag: "title",  setting: { close: true, escape: true },  id: "page-title",  props: {    get children() {      return `${pageTitle()} | Solid`;    },  },});
```

***

## [Related](/solid-meta/reference/meta/use-head#related)

- [`<MetaProvider />`](/solid-meta/reference/meta/metaprovider)
- [`<Title />`](/solid-meta/reference/meta/title)
- [`<Meta />`](/solid-meta/reference/meta/meta)
- [`<Link />`](/solid-meta/reference/meta/link)
- [`<Style />`](/solid-meta/reference/meta/style)
- [`<Base />`](/solid-meta/reference/meta/base)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/use-head.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/use-head)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [tag](#tag)
   2. [props](#props)
   3. [setting](#setting)
   4. [id](#id)
   5. [name](#name)
   6. [ref](#ref)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Simple custom tag](#simple-custom-tag)
   2. [JSON-LD per page (script with close and escape)](#json-ld-per-page-script-with-close-and-escape)
   3. [Reactive updates](#reactive-updates)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/use-head.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/use-head.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/use-head)
