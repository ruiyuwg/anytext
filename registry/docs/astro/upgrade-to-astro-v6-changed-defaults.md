## Changed Defaults

[Section titled “Changed Defaults”](#changed-defaults)

Some default behavior has changed in Astro v6.0 and your project code may need updating to account for these changes.

In most cases, the only action needed is to review your existing project’s deployment and ensure that it continues to function as you expect, making updates to your code as necessary. In some cases, there may be a configuration setting to allow you to continue to use the previous default behavior.

### Changed: `i18n.routing.redirectToDefaultLocale` default value

[Section titled “Changed: i18n.routing.redirectToDefaultLocale default value”](#changed-i18nroutingredirecttodefaultlocale-default-value)

[Implementation PR: feat(astro)!: update i18n.redirectToDefaultLocale default (#14406)](https://github.com/withastro/astro/pull/14406)

In Astro v5.0, the `i18n.routing.redirectToDefaultLocale` default value was `true`. When combined with the `i18n.routing.prefixDefaultLocale` default value of `false`, the resulting redirects could cause infinite loops.

In Astro v6.0, `i18n.routing.redirectToDefaultLocale` now defaults to `false`. Additionally, it can now only be used if `i18n.routing.prefixDefaultLocale` is set to `true`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-33)

Review your Astro `i18n` config as you may now need to explicitly set values for `redirectToDefaultLocale` and `prefixDefaultLocale` to recreate your project’s previous behavior.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
  i18n: {
    routing: {
      prefixDefaultLocale: true,
+      redirectToDefaultLocale: true
    }
  }
})
```

If you are using manual routing, you may also need to update your middleware configuration:

src/middleware.js

```diff
import { middleware } from "astro:i18n"; // Astro's own i18n routing config


export const onRequest = middleware({
  prefixDefaultLocale: false,
  prefixDefaultLocale: true,
  redirectToDefaultLocale: true,
})
```

Learn more about [Internationalization routing](/en/guides/internationalization/#routing).

### Changed: `<script>` and `<style>` tags are rendered in the order they are defined

[Section titled “Changed: \ and \ tags are rendered in the order they are defined”](#changed-script-and-style-tags-are-rendered-in-the-order-they-are-defined)

[Implementation PR: feat: stabilize experimental preserveScriptOrder option (#14480)](https://github.com/withastro/astro/pull/14480)

In Astro v5.5, the `experimental.preserveScriptOrder` flag was introduced to render multiple `<style>` and `<script>` tags in the same order as they were declared in the source code. Astro 5.x reversed their order in your generated HTML output. This could give unexpected results, for example, CSS styles being overridden by earlier defined style tags when your site was built.

Astro 6.0 removes this experimental flag and makes this the new default behavior in Astro: scripts and styles are now rendered in the order defined in your code.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-34)

If you were previously using this experimental feature, you must [remove this experimental flag from your configuration](#experimental-flags) as it no longer exists.

Review your `<script>` and `<style>` tags to make sure they behave as desired. You may need to reverse their order:

src/components/MyComponent.astro

```diff
<p>I am a component</p>
<style>
  body {
    -background: red;
    +background: yellow;
  }
</style>
<style>
  body {
    -background: yellow;
    +background: red;
  }
</style>
<script>
    -console.log("hello")
    +console.log("world")
</script>
<script>
    -console.log("world!")
    +console.log("hello!")
</script>
```

Read more about [using `script`](/en/guides/client-side-scripts/) and [`style`](/en/guides/styling/) tags.

### Changed: how responsive image styles are emitted

[Section titled “Changed: how responsive image styles are emitted”](#changed-how-responsive-image-styles-are-emitted)

[Implementation PR: support responsive images (#15407)](https://github.com/withastro/astro/pull/15407)

In Astro 5.x, images were computed at runtime and the `fit` and `pos` responsive image styles were injected in a `style` attribute. This did not allow compatibility with Astro’s Content Security Policy (CSP) for many reasons.

Astro 6 generates image styles inside a virtual module at build time based on project configuration, resulting in a hash class and `data-*` attributes to apply responsive styling to your images.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-35)

Visually inspect your images to ensure that they are rendering as expected. This is an implementation detail that should not affect the expected use of responsive images.

However, if you were relying on the inline styles previously generated for your images:

```html
<img style="--fit: <value>; --pos: <value>" >
```

then you will need to update your project code to account for the new `data-*` attributes instead:

```html
<img class="__a_HaSh350" data-astro-fit="value" data-astro-pos="value" >
```
