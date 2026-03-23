## Legacy

[Section titled “Legacy”](#legacy)

The following features are now considered legacy features. They should function normally but are no longer recommended and are in maintenance mode. They will see no future improvements and documentation will not be updated. These features will eventually be deprecated, and then removed entirely.

### Legacy: content collections backwards compatibility

[Section titled “Legacy: content collections backwards compatibility”](#legacy-content-collections-backwards-compatibility)

In Astro 5.x, projects could delay upgrading to the new Content Layer API introduced for content collections because of some existing automatic backwards compatibility that was not previously behind a flag. This meant that it was possible to upgrade from Astro 4 to Astro 5 without updating your content collections, even if you had not enabled the `legacy.collections` flag. Projects would continue to build, and no errors or warnings would be displayed.

Astro v6.0 removes this automatic legacy content collections support, along with [the `legacy.collections` flag](#removed-legacy-content-collections). All content collections must now use [the Content Layer API introduced in Astro v5.0](https://astro.build/blog/content-layer-deep-dive/) that powers all content collections.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-6)

If you experience content collections errors after updating to v6, [check your project for any removed legacy features](#if-you-have) that may need updating to the Content Layer API.

See [the Astro v5 upgrade guide](/en/guides/upgrade-to/v5/#legacy-v20-content-collections-api) for detailed instructions on upgrading legacy collections to the new Content Layer API.

If you are unable to update immediately, you can enable [the `legacy.collectionsBackwardsCompat` flag](/en/reference/legacy-flags/#collectionsbackwardscompat) as a temporary migration helper:

astro.config.mjs

```js
export default defineConfig({
  legacy: {
    collectionsBackwardsCompat: true,
  },
});
```

This flag preserves some legacy v4 content collections features:

- Supports the legacy configuration file `src/content/config.ts`
- Supports `type: 'content'` and `type: 'data'` without loaders
- Preserves legacy entry API: `entry.slug` and `entry.render()`
- Uses path-based entry IDs instead of slug-based IDs

**This is a temporary migration helper.** Migrate your collections to the Content Layer API as soon as possible, then disable this flag.
