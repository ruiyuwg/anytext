Styling your Components

# SASS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/sass.mdx)

[SASS](https://sass-lang.com/) is a popular CSS preprocessor that makes authoring CSS easier. It is a superset of CSS and offers two syntaxes: SCSS and the indented syntax (often referred to as just "SASS").

***

## [Installation](/guides/styling-components/sass#installation)

Depending on your package manager, SASS can be installed as a development dependency:

npmpnpmyarnbundeno

```
npm i sass -D
```

```
pnpm i sass -D
```

```
yarn add sass -D
```

```
bun i sass -d
```

```
deno add npm:sass -D
```

***

## [Convert filename extensions](/guides/styling-components/sass#convert-filename-extensions)

After installation, the `.css` filename extensions will have to be changed to `.scss` or `.sass`. The `.scss` syntax is a strict superset of CSS, while `.sass` offers a more relaxed syntax. Vite, which is integrated with Solid, supports both. However, `.scss` is generally recommended.

```
// Card.scss.grid {  display: grid;  &-center {    place-items: center;  }}.screen {  min-height: 100vh;}.card {  height: 160px;  aspect-ratio: 2;  border-radius: 16px;  background-color: white;  box-shadow: 0 0 0 4px hsl(0 0% 0% / 15%);}
```

In a Solid component:

```
// Card.jsximport "./card.scss";
function Card() {  return (    <>      <div class="grid-center screen grid">        <div class="card">Hello, world!</div>      </div>    </>  );}
```

By simply changing the file extension from `.css` to `.scss` or `.sass` , Vite will automatically recognize these files and compile SASS to CSS on demand. When building in production, all SASS files are converted to CSS. This ensures compatibility with most modern browsers.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/sass.mdx\&page=https://docs.solidjs.com/guides/styling-components/sass)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Convert filename extensions](#convert-filename-extensions)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/sass.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/sass.mdx\&page=https://docs.solidjs.com/guides/styling-components/sass)
