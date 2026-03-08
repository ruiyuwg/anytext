# Migrating from Create React App (CRA)

> Tips for migrating an existing Create React App project to Astro

Astro’s [React integration](/en/guides/integrations-guide/react/) provides support for [using React components inside Astro components](/en/guides/framework-components/), including entire React apps like Create React App (CRA)!

src/pages/index.astro

```astro
---
// Import your root App component
import App from '../cra-project/App.jsx';
---
<!-- Use a client directive to load your app -->
<App client:load />
```

See how to [Build a Single Page Application (SPA) with Astro](https://logsnag.com/blog/react-spa-with-astro) External using React Router.

Many apps will “just work” as full React apps when you add them directly to your Astro project with the React integration installed. This is a great way to get your project up and running immediately and keep your app functional while you migrate to Astro.

Over time, you can convert your structure piece-by-piece to a combination of `.astro` and `.jsx` components. You will probably discover you need fewer React components than you think!

Here are some key concepts and migration strategies to help you get started. Use the rest of our docs and our [Discord community](https://astro.build/chat) to keep going!

## Key Similarities between CRA and Astro

[Section titled “Key Similarities between CRA and Astro”](#key-similarities-between-cra-and-astro)

- The [syntax of `.astro` files is similar to JSX](/en/reference/astro-syntax/#differences-between-astro-and-jsx). Writing Astro should feel familiar.

- Astro uses file-based routing, and [allows specially named pages to create dynamic routes](/en/guides/routing/#dynamic-routes).

- Astro is [component-based](/en/basics/astro-components/), and your markup structure will be similar before and after your migration.

- Astro has [official integrations for React, Preact, and Solid](/en/guides/integrations-guide/react/) so you can use your existing JSX components. Note that in Astro, these files **must** have a `.jsx` or `.tsx` extension.

- Astro has support for [installing NPM packages](/en/guides/imports/#npm-packages), including React libraries. Many of your existing dependencies will work in Astro.

## Key Differences between CRA and Astro

[Section titled “Key Differences between CRA and Astro”](#key-differences-between-cra-and-astro)

When you rebuild your CRA site in Astro, you will notice some important differences:

- CRA is a single-page application that uses `index.js` as your project’s root. Astro is a multi-page site, and `index.astro` is your home page.

- [`.astro` components](/en/basics/astro-components/) are not written as exported functions that return page templating. Instead, you’ll split your code into a “code fence” for your JavaScript and a body exclusively for the HTML you generate.

- [content-driven](/en/concepts/why-astro/#content-driven): Astro was designed to showcase your content and to allow you to opt-in to interactivity only as needed. An existing CRA app might be built for high client-side interactivity and may require advanced Astro techniques to include items that are more challenging to replicate using `.astro` components, such as dashboards.

## Add your CRA to Astro

[Section titled “Add your CRA to Astro”](#add-your-cra-to-astro)

Your existing app can be rendered directly inside a new Astro project, often with no changes to your app’s code.

### Create a new Astro project

[Section titled “Create a new Astro project”](#create-a-new-astro-project)

Use the `create astro` command for your package manager to launch Astro’s CLI wizard and select a new “empty” Astro project.

- npm

  ```shell
  npm create astro@latest
  ```

- pnpm

  ```shell
  pnpm create astro@latest
  ```

- Yarn

  ```shell
  yarn create astro@latest
  ```

### Add integrations and dependencies

[Section titled “Add integrations and dependencies”](#add-integrations-and-dependencies)

Add the React integration using the `astro add` command for your package manager. If your app uses other packages supported by the `astro add` command, like Tailwind and MDX, you can add them all with one command:

- npm

  ```shell
  npx astro add react
  npx astro add react tailwind mdx
  ```

- pnpm

  ```shell
  pnpm astro add react
  pnpm astro add react tailwind mdx
  ```

- Yarn

  ```shell
  yarn astro add react
  yarn astro add react tailwind mdx
  ```

If your CRA requires any dependencies (e.g. NPM packages), then install them individually using the command line or by adding them to your new Astro project’s `package.json` manually and then running an install command. Note that many, but not all, React dependencies will work in Astro.

### Add your existing app files

[Section titled “Add your existing app files”](#add-your-existing-app-files)

Copy your existing Create React App (CRA) project source files and folders (e.g. `components`, `hooks`, `styles`, etc.) into a new folder inside `src/`, keeping its file structure so your app will continue to work. Note that all `.js` file extensions must be renamed to `.jsx` or `.tsx`.

Do not include any configuration files. You will use Astro’s own `astro.config.mjs`, `package.json`, and `tsconfig.json`.

Move the contents of your app’s `public/` folder (e.g. static assets) into Astro’s `public/` folder.

- public/

  - logo.png
  - favicon.ico
  - …

- src/

  - cra-project/

    - App.jsx
    - …

  - pages/

    - index.astro

- astro.config.mjs

- package.json

- tsconfig.json

### Render your app

[Section titled “Render your app”](#render-your-app)

Import your app’s root component in the frontmatter section of `index.astro`, then render the `<App />` component in your page template:

src/pages/index.astro

```astro
---
import App from '../cra-project/App.jsx';
---
<App client:load />
```

Client directives

Your app needs a [client directive](/en/reference/directives-reference/#client-directives) for interactivity. Astro will render your React app as static HTML until you opt-in to client-side JavaScript.

Use `client:load` to ensure your app loads immediately from the server, or `client:only="react"` to skip rendering on the server and run your app entirely client-side.

## Convert your CRA to Astro

[Section titled “Convert your CRA to Astro”](#convert-your-cra-to-astro)

After [adding your existing app to Astro](#add-your-cra-to-astro), you will probably want to convert your app itself to Astro!

You will replicate a similar component-based design [using Astro HTML templating components for your basic structure](/en/basics/astro-components/) while importing and including individual React components (which may themselves be entire apps!) for islands of interactivity.

Every migration will look different and can be done incrementally without disrupting your working app. Convert individual pieces at your own pace so that more and more of your app is powered by Astro components over time.

As you convert your React app, you will decide which React components you will [rewrite as Astro components](#converting-jsx-files-to-astro-files). Your only restriction is that Astro components can import React components, but React components must only import other React components:

src/pages/static-components.astro

```diff
---
+import MyReactComponent from '../components/MyReactComponent.jsx';
---
<html>
  <body>
    <h1>Use React components directly in Astro!</h1>
    +<MyReactComponent />
  </body>
</html>
```

Instead of importing Astro components into React components, you can nest React components inside a single Astro component:

src/pages/nested-components.astro

```astro
---
import MyReactSidebar from '../components/MyReactSidebar.jsx';
import MyReactButton from '../components/MyReactButton.jsx';
---
<MyReactSidebar>
  <p>Here is a sidebar with some text and a button.</p>
  <div slot="actions">
    <MyReactButton client:idle />
  </div>
</MyReactSidebar>
```

You may find it helpful to learn about [Astro islands](/en/concepts/islands/) and [Astro components](/en/basics/astro-components/) before restructuring your CRA as an Astro project.

### Compare: JSX vs Astro

[Section titled “Compare: JSX vs Astro”](#compare-jsx-vs-astro)

Compare the following CRA component and a corresponding Astro component:

- JSX

  StarCount.jsx

  ```jsx
  import React, { useState, useEffect } from 'react';
  import Header from './Header';
  import Footer from './Footer';


  const Component = () => {
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState('');


  useEffect(() => {
      const fetchData = async () => {
          const res = await fetch('https://api.github.com/repos/withastro/astro');
          const json = await res.json();


          setStars(json.stargazers_count || 0);
          setMessage(json.message);
      };


      fetchData();
  }, []);


  return (
      <>
          
          <p style={{
              backgroundColor: `#f4f4f4`,
              padding: `1em 1.5em`,
              textAlign: `center`,
              marginBottom: `1em`
          }}>Astro has {stars} 🧑‍🚀
          
      </>
  )
  };


  export default Component;
  ```

- Astro

  StarCount.astro

  ```astro
  ---
  import Header from './Header.astro';
  import Footer from './Footer.astro';
  import './layout.css';
  const res = await fetch('https://api.github.com/repos/withastro/astro')
  const json = await res.json();
  const message = json.message;
  const stars = json.stargazers_count || 0;
  ---

  Astro has {stars} 🧑‍🚀


    .banner {
      background-color: #f4f4f4;
      padding: 1em 1.5em;
      text-align: center;
      margin-bottom: 1em;
    }

  ```

### Converting JSX files to `.astro` files

[Section titled “Converting JSX files to .astro files”](#converting-jsx-files-to-astro-files)

Here are some tips for converting a CRA `.js` component into a `.astro` component:

1. Use the returned JSX of the existing CRA component function as the basis for your HTML template.

2. Change any [CRA or JSX syntax to Astro](#reference-convert-cra-syntax-to-astro) or to HTML web standards. This includes `{children}` and `className`, for example.

3. Move any necessary JavaScript, including import statements, into a [“code fence” (`---`)](/en/basics/astro-components/#the-component-script). Note: JavaScript to [conditionally render content](/en/reference/astro-syntax/#dynamic-html) is often written inside the HTML template directly in Astro.

4. Use [`Astro.props`](/en/reference/api-reference/#props) to access any additional props that were previously passed to your CRA function.

5. Decide whether any imported components also need to be converted to Astro. You can keep them as React components for now, or forever. But, you may eventually want to convert them to `.astro` components, especially if they do not need to be interactive!

6. Replace `useEffect()` with import statements or [`import.meta.glob()`](/en/guides/imports/#importmetaglob) to query your local files. Use `fetch()` to fetch external data.

### Migrating Tests

[Section titled “Migrating Tests”](#migrating-tests)

As Astro outputs raw HTML, it is possible to write end-to-end tests using the output of the build step. Any end-to-end tests written previously might work out-of-the-box if you have been able to match the markup of your CRA site. Testing libraries such as Jest and React Testing Library can be imported and used in Astro to test your React components.

See Astro’s [testing guide](/en/guides/testing/) for more.

## Reference: Convert CRA Syntax to Astro

[Section titled “Reference: Convert CRA Syntax to Astro”](#reference-convert-cra-syntax-to-astro)

### CRA Imports to Astro

[Section titled “CRA Imports to Astro”](#cra-imports-to-astro)

Update any [file imports](/en/guides/imports/) to reference relative file paths exactly. This can be done using [import aliases](/en/guides/typescript/#import-aliases), or by writing out a relative path in full.

Note that `.astro` and several other file types must be imported with their full file extension.

src/pages/authors/Fred.astro

```astro
---
import Card from '../../components/Card.astro';
---
<Card />
```

### CRA Children Props to Astro

[Section titled “CRA Children Props to Astro”](#cra-children-props-to-astro)

Convert any instances of `{children}` to an Astro `<slot />`. Astro does not need to receive `{children}` as a function prop and will automatically render child content in a `<slot />`.

src/components/MyComponent.astro

```diff
---
---
-export default function MyComponent(props) {
    -return (
      <div>
        -{props.children}
      </div>
-    );
-}


<div>
  <slot />
</div>
```

React components that pass multiple sets of children can be migrated to an Astro component using [named slots](/en/basics/astro-components/#named-slots).

See more about [specific `<slot />` usage in Astro](/en/basics/astro-components/#slots).

### CRA Data Fetching to Astro

[Section titled “CRA Data Fetching to Astro”](#cra-data-fetching-to-astro)

Fetching data in a Create React App component is similar to Astro, with some slight differences.

You will need to remove any instances of a side effect hook (`useEffect`) for either `import.meta.glob()` or `getCollection()`/`getEntry()` to access data from other files in your project source.

To [fetch remote data](/en/guides/data-fetching/), use `fetch()`.

These data requests are made in the frontmatter of the Astro component and use top-level await.

src/pages/index.astro

```astro
---
import { getCollection } from 'astro:content';


// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');


// Get all `src/pages/posts/` entries
const allPosts = Object.values(import.meta.glob('../pages/post/*.md', { eager: true }));


// Fetch remote data
const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];
---
```

See more about local files imports with [`import.meta.glob()`](/en/guides/imports/#importmetaglob), [querying using the Collections API](/en/guides/content-collections/#querying-collections) or [fetching remote data](/en/guides/data-fetching/).

### CRA Styling to Astro

[Section titled “CRA Styling to Astro”](#cra-styling-to-astro)

You may need to replace any [CSS-in-JS libraries](https://github.com/withastro/astro/issues/4432) (e.g. styled-components) with other available CSS options in Astro.

If necessary, convert any inline style objects (`style={{ fontWeight: "bold" }}`) to inline HTML style attributes (`style="font-weight:bold;"`). Or, use an [Astro `<style>` tag](/en/guides/styling/#styling-in-astro) for scoped CSS styles.

src/components/Card.astro

```diff
<div style={{backgroundColor: `#f4f4f4`, padding: `1em`}}>{message}</div>
<div style="background-color: #f4f4f4; padding: 1em;">{message}</div>
```

Tailwind is supported after installing the [Tailwind Vite plugin](/en/guides/styling/#tailwind). No changes to your existing Tailwind code are required!

See more about [Styling in Astro](/en/guides/styling/).

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

Your CRA might “just work” in Astro! But, you may likely need to make minor adjustments to duplicate your existing app’s functionality and/or styles.

If you cannot find your answers within these docs, please visit the [Astro Discord](https://astro.build/chat) and ask questions in our support forum!

## Community Resources

[Section titled “Community Resources”](#community-resources)

[Code Fix: The SIBA Website's Move from Create-React-App to Astro ](https://brittanisavery.com/post/move-siba-to-astro)

Have a resource to share?

If you found (or made!) a helpful video or blog post about converting a Create React App to Astro, [add it to this list](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx)!
