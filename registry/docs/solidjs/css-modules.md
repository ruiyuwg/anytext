Styling your Components

# CSS modules

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/css-modules.mdx)

CSS Modules are CSS files where class names, animations, and media queries are scoped locally by default. These provide a way to encapsulate styles within components, preventing global conflicts and optimizing the final output by bundling only the used selectors.

***

## [Creating CSS module files](/guides/styling-components/css-modules#creating-css-module-files)

Begin by creating a CSS module file. Conventionally, these files have a `.module.css` extension, like `style.module.css`. However, you can also use other extensions, such as `.scss` and `.sass`.

```
/* styles.module.css */.foo {  color: red;}.bar {  background-color: blue;}
```

**Note:** Avoid the use of HTML tags in CSS modules. Since they are not considered pure selectors, it can lead to specificity issues which can make it more difficult to override with other styles and lead to unexpected behaviors.

***

## [Using modules in components](/guides/styling-components/css-modules#using-modules-in-components)

1. **Importing styles:** In your component file (eg. `Component.jsx`), import the styles from the CSS module.

```
// component.jsximport styles from "styles.module.css";
```

2. **Applying styles:** Use the imported styles by referencing them as properties of the styles object in your JSX:

```
function Component() {  return (    <>      <div class={`${styles.foo} ${styles.bar}`}>Hello, world!</div>    </>  );}
```

3. **Using a single style:** If you only need one style from the module, import and apply it directly:

```
// component.jsximport styles from "styles.module.css";
function Component() {  return (    <>      <div class={styles.foo}>Hello, world!</div>    </>  );}
```

4. **Mixing with regular class names:** You can combine CSS module syntax with regular string class names, as well:

```
// component.jsximport styles from "styles.module.css";
function Component() {  return (    <>      <div class={`${styles.foo} container`}>Hello, world!</div>    </>  );}
```

**Note:** If your styles have dashes in their names, use bracket notation:

```
const className = styles["foo-with-dash"];
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/css-modules.mdx\&page=https://docs.solidjs.com/guides/styling-components/css-modules)

On this page

1. [Overview](#_top)
2. [Creating CSS module files](#creating-css-module-files)
3. [Using modules in components](#using-modules-in-components)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/css-modules.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/css-modules.mdx\&page=https://docs.solidjs.com/guides/styling-components/css-modules)
