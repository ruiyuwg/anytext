# Using custom fonts

> Looking to add some custom typefaces to an Astro website? Use Google Fonts with Fontsource or add a font of your choice.

This guide will show you how to add web fonts to your project and use them in your components.

Experimental Fonts API

Learn about Astro’s [experimental Fonts API](/en/reference/experimental-flags/fonts/) that allows you to use fonts from your filesystem and various font providers through a unified, fully customizable, and type-safe API.

## Using a local font file

[Section titled “Using a local font file”](#using-a-local-font-file)

This example will demonstrate adding a custom font using the font file `DistantGalaxy.woff`.

1. Add your font file to `public/fonts/`.

2. Add the following `@font-face` statement to your CSS. This could be in a global `.css` file you import, a `<style is:global>` block, or a `<style>` block in a specific layout or component where you want to use this font.

   ```css
   /* Register your custom font family and tell the browser where to find it. */
   @font-face {
     font-family: 'DistantGalaxy';
     src: url('/fonts/DistantGalaxy.woff') format('woff');
     font-weight: normal;
     font-style: normal;
     font-display: swap;
   }
   ```

3. Use the `font-family` value from the `@font-face` statement to style elements in your component or layout. In this example, the `<h1>` heading will have the custom font applied, while the paragraph `<p>` will not.

   src/pages/example.astro

   ```astro
   ---
   ---


   In a galaxy far, far away...


   Custom fonts make my headings much cooler!



   h1 {
     font-family: 'DistantGalaxy', sans-serif;
   }

   ```

## Using Fontsource

[Section titled “Using Fontsource”](#using-fontsource)

The [Fontsource](https://fontsource.org/) project simplifies using Google Fonts and other open-source fonts. It provides npm modules you can install for the fonts you want to use.

1. Find the font you want to use in [Fontsource’s catalog](https://fontsource.org/). This example will use [Twinkle Star](https://fontsource.org/fonts/twinkle-star).

2. Install the package for your chosen font.

   - npm

     ```shell
     npm install @fontsource/twinkle-star
     ```

   - pnpm

     ```shell
     pnpm add @fontsource/twinkle-star
     ```

   - Yarn

     ```shell
     yarn add @fontsource/twinkle-star
     ```

   Tip

   You’ll find the correct package name in the “Quick Installation” section of each font page on Fontsource’s website. It will start with `@fontsource/` or `@fontsource-variable/` followed by the name of the font.

3. Import the font package in the component where you want to use the font. Usually, you will want to do this in a common layout component to make sure the font is available across your site.

   The import will automatically add the necessary `@font-face` rules needed to set up the font.

   src/layouts/BaseLayout.astro

   ```astro
   ---
   import '@fontsource/twinkle-star';
   ---
   ```

4. Use the font’s name as shown in the `body` example on its Fontsource page as the `font-family` value. This will work anywhere you can write CSS in your Astro project.

   ```css
   h1 {
     font-family: "Twinkle Star", cursive;
   }
   ```

To optimize your website’s rendering times, you may want to preload fonts that are essential for the initial page display. See the [Fontsource guide to preloading fonts](https://fontsource.org/docs/getting-started/preload) for more information and usage.

## Register fonts in Tailwind

[Section titled “Register fonts in Tailwind”](#register-fonts-in-tailwind)

If you are using [Tailwind](/en/guides/styling/#tailwind), you can use either of the previous methods on this page to install your font, with some modifications. You can either add an [`@font-face` statement for a local font](#using-a-local-font-file) or use [Fontsource’s `import` strategy](#using-fontsource) to install your font.

To register your font in Tailwind:

1. Follow either of the guides above, but skip the final step of adding `font-family` to your CSS.

2. Add the typeface name to `src/styles/global.css`.

   This example adds `Inter` to the sans-serif font stack.

   src/styles/global.css

   ```diff
   @import 'tailwindcss';


   +@theme {
     +--font-sans: 'Inter', 'sans-serif';
   +}
   ```

   Now, all sans-serif text (the default with Tailwind) in your project will use your chosen font and the `font-sans` class will also apply the Inter font.

See [Tailwind’s docs on adding custom font families](https://tailwindcss.com/docs/font-family#using-custom-values) for more information.

## More resources

[Section titled “More resources”](#more-resources)

- Learn how web fonts work in [MDN’s web fonts guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts).
- Generate CSS for your font with [Font Squirrel’s Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
