# Favicons

## Favicons/"website icon"

![A browser tab bar, illustrating the use of favicons](https://cdn.sanity.io/images/3do82whm/next/bf96f8116045e5fc2e6ebeb032c415ee93ff1819-316x75.png)

A favicon is a small icon that appears in the browser's tab or bookmarks.  By default, any Sanity studio will use the Sanity logo as its favicon.

Using a favicon that aligns with a company or projects logo or brand colors can help enhance the visual identity of a studio, differentiate it from other open tabs, as well as create a consistent and cohesive look and feel.

## Individual files

To use a custom favicon that works across all platforms (desktop browsers, mobile browsers and bookmarks and similar), five different files are used:

1. `favicon.svg` - a square vector file in SVG format. This format scales well to many different sizes, and can also support different layouts/colors for [light/dark mode](https://owenconti.com/posts/supporting-dark-mode-with-svg-favicons).
2. `favicon.ico` - a small, square file in ICO format. This serves as the fallback icon for older browsers and environments that do not support resolving the preferred icon from HTML.
3. `favicon-512.png` - a 512x512px image file in PNG format. This is used as the icon defined in a Web Manifest file, and is generally used when bookmarking the studio on mobile devices.
4. `favicon-192.png` - a 192x192px image file in PNG format. Holds the same purpose as the 512px variant, but may be used when smaller icons are needed.
5. `apple-touch-icon.png` - a 180x180px image in PNG format. This is used when bookmarking the studio on iOS devices.

All these files should be placed in the `static` folder within the studio folder. Once they are in place, the studio should automatically use the new icons - though browsers may keep the old icons in their cache for a while.

## Generating the files

The files can either be created by hand, or you can use a tool such as [create-favicon](https://github.com/rexxars/create-favicon) to generate them all based on a source SVG file:

```sh
# From the studio root folder:
npm create favicon <path-or-url-to.svg> static
```

## Troubleshooting

If your custom favicons are not showing up:

- Ensure that all files listed above are present in the static folder, and has the same casing. A common case is that the SVG icon (`favicon.svg`) is missing, in which case it will fall back to the default Sanity favicon.
- When running sanity build, inspect the contents of the `dist/static` folder and see which icons are actually there.
- Your browser might be caching the favicons. Try a hard refresh by pressing `Command+Shift+R` on Mac, or `Ctrl+F5` on Windows/Linux. You can also try the "Disable cache" feature in the network tab of your browser development tools.
