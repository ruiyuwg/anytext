Styling your Components

# LESS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/less.mdx)

[LESS](https://lesscss.org/) is a preprocessor based on JavaScript. It provides the ability to use mixins, variables, and other programmatic tools, making styling code cleaner and less redundant.

***

## [Installation](/guides/styling-components/less#installation)

To utilize LESS in a Solid app, it will need to be installed as a development dependency:

npmpnpmyarnbundeno

```
npm i less -D
```

```
pnpm i less -D
```

```
yarn add less -D
```

```
bun i less -d
```

```
deno add npm:less -D
```

***

## [Using LESS in your app](/guides/styling-components/less#using-less-in-your-app)

Start by creating a `.less` file in the `src` directory:

```
//styles.less.foo {  color: red;}.bar {  background-color: blue;}
```

The basic syntax of LESS is very similar to CSS. However, LESS allows the declaration and usage of variables:

```
//styles.less@plainred: red;@plainblue: blue;.foo {  color: @plainred;}.bar {  background-color: @plainblue;}
```

To use these styles in a Solid component, import the `.less` file:

```
//component.jsximport "./styles.less";
function Component() {  return (    <>      <div class="foo bar">Hello, world!</div>    </>  );}
```

By changing the file extension of the imported styles to `.less`, Vite will recognize it as a LESS file and compile it to CSS on demand.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/less.mdx\&page=https://docs.solidjs.com/guides/styling-components/less)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Using LESS in your app](#using-less-in-your-app)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/less.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/less.mdx\&page=https://docs.solidjs.com/guides/styling-components/less)
