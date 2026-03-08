## Prefetch Options

[Section titled “Prefetch Options”](#prefetch-options)

**Type:** `boolean | object`

Enable prefetching for links on your site to provide faster page transitions. (Enabled by default on pages using the `<ClientRouter />` router. Set `prefetch: false` to opt out of this behaviour.)

This configuration automatically adds a prefetch script to every page in the project giving you access to the `data-astro-prefetch` attribute. Add this attribute to any `<a />` link on your page to enable prefetching for that page.

```html
<a href="/about" data-astro-prefetch>About</a>
```

Further customize the default prefetching behavior using the [`prefetch.defaultStrategy`](#prefetchdefaultstrategy) and [`prefetch.prefetchAll`](#prefetchprefetchall) options.

See the [Prefetch guide](/en/guides/prefetch/) for more information.

### prefetch.prefetchAll

[Section titled “prefetch.prefetchAll”](#prefetchprefetchall)

**Type:** `boolean`

Enable prefetching for all links, including those without the `data-astro-prefetch` attribute. This value defaults to `true` when using the `<ClientRouter />` router. Otherwise, the default value is `false`.

```js
prefetch: {
  prefetchAll: true
}
```

When set to `true`, you can disable prefetching individually by setting `data-astro-prefetch="false"` on any individual links.

```html
<a href="/about" data-astro-prefetch="false">About</a>
```

### prefetch.defaultStrategy

[Section titled “prefetch.defaultStrategy”](#prefetchdefaultstrategy)

**Type:** `'tap' | 'hover' | 'viewport' | 'load'`\
**Default:** `'hover'`

The default prefetch strategy to use when the `data-astro-prefetch` attribute is set on a link with no value.

- `'tap'`: Prefetch just before you click on the link.
- `'hover'`: Prefetch when you hover over or focus on the link. (default)
- `'viewport'`: Prefetch as the links enter the viewport.
- `'load'`: Prefetch all links on the page after the page is loaded.

You can override this default value and select a different strategy for any individual link by setting a value on the attribute.

```html
<a href="/about" data-astro-prefetch="viewport">About</a>
```
