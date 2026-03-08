# Build your first layout

> Tutorial: Build your first Astro blog —
> Refactor common elements into a reusable page layout

Get ready to…

- Refactor common elements into a page layout
- Use an Astro `<slot />` element to place page contents within a layout
- Pass page-specific values as props to its layout

You still have some Astro components repeatedly rendered on every page. It’s time to refactor again to create a shared page layout!

## Create your first layout component

[Section titled “Create your first layout component”](#create-your-first-layout-component)

1. Create a new file at the location `src/layouts/BaseLayout.astro`. (You will need to create a new `layouts` folder first.)

2. Copy the **entire contents** of `index.astro` into your new file, `BaseLayout.astro`.

   src/layouts/BaseLayout.astro

   ```astro
   ---
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   import '../styles/global.css';
   const pageTitle = "Home Page";
   ---

     
       
       
       
       
       {pageTitle}
     
     
       
       {pageTitle}
       
       
         import "../scripts/menu.js";
       
     

   ```

## Use your layout on a page

[Section titled “Use your layout on a page”](#use-your-layout-on-a-page)

3. Replace the code at `src/pages/index.astro` with the following:

   src/pages/index.astro

   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   const pageTitle = "Home Page";
   ---

     My awesome blog subtitle

   ```

4. Check the browser preview again to notice what did (or, spoiler alert: did *not*!) change.

5. Add a `<slot />` element to `src/layouts/BaseLayout.astro` just above the footer component, then check the browser preview of your Home page and notice what really *did* change this time!

   src/layouts/BaseLayout.astro

   ```diff
   ---
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   import '../styles/global.css';
   const pageTitle = "Home Page";
   ---

     
       
       
       
       
       {pageTitle}
     
     
       
       {pageTitle}
       
       
       
         import "../scripts/menu.js";
       
     

   ```

The `<slot />` allows you to inject (or “slot in”) **child content** written between opening and closing `<Component></Component>` tags to any `Component.astro` file.

## Pass page-specific values as props

[Section titled “Pass page-specific values as props”](#pass-page-specific-values-as-props)

6. Pass the page title to your layout component from `index.astro` using a component attribute:

   src/pages/index.astro

   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   const pageTitle = "Home Page";
   ---

     My awesome blog subtitle

   ```

7. Change the script of your `BaseLayout.astro` layout component to receive a page title via `Astro.props` instead of defining it as a constant.

   src/layouts/BaseLayout.astro

   ```diff
   ---
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   import '../styles/global.css';
   -const pageTitle = "Home Page";
   +const { pageTitle } = Astro.props;
   ---
   ```

8. Check your browser preview to verify that your page title has not changed. It has the same value, but is now being rendered dynamically. And now, each individual page can specify its own title to the layout.

## Try it yourself - Use your layout everywhere

[Section titled “Try it yourself - Use your layout everywhere”](#try-it-yourself---use-your-layout-everywhere)

**Refactor** your other pages (`blog.astro` and `about.astro`) so that they use your new `<BaseLayout>` component to render the common page elements.

Don’t forget to:

- Pass a page title as props via a component attribute.

- Let the layout be responsible for the HTML rendering of any common elements.

- Move any existing `<style>` tags in the page `<head>` with styles you wish to keep to the page HTML template.

- Delete anything from each individual page that is now being handled by the layout, including:

  - HTML elements
  - Components and their imports
  - CSS rules in a `<style>` tag (e.g. `<h1>` in your About page)
  - `<script>` tags

Keeping your About page styles

Using the `<BaseLayout>` to render your `about.astro` page means you will lose the `<style>` tag added to the `<head>` of this page. To continue to style items only at the page level using Astro’s scoped styling, move the `<style>` tag to the body of the page component. This allows you to style **elements created in this page component** (e.g. your list of skills).

Since your `<h1>` is now created by your layout component, you can add the `is:global` attribute to your style tag to affect every element on this page, including those created by other components: `<style is:global define:vars={{ skillColor, fontWeight, textCase }}>`

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

1. An Astro component (`.astro` file) can function as a:

   1. page
   2. UI component
   3. layout
   4. all of the above, because Astro components are so functional! 🏗️

   Submit

2. To display a page title on the page, you can:

   1. use a standard HTML element on the page with static text (e.g `<h1>Home Page</h1>`)
   2. use a standard HTML element on the page referring to a variable defined in your component’s frontmatter script (e.g. `<h1>{pageTitle}</h1>`)
   3. use a layout component on the page, passing the title as a component attribute (e.g. `<BaseLayout title="Home Page" />` or `<BaseLayout title={pageTitle} />`)
   4. all of the above, because Astro lets you use plain HTML or supercharge it with some script and components! 💪

   Submit

3. Information can be passed from one component to another by:

   1. importing a UI component and rendering it in the template of another component
   2. passing props to a component where it is rendered via a component attribute
   3. sending HTML content to be rendered inside another component using a `<slot />` placeholder
   4. all of the above, because Astro was built to take advantage of component-based design! 🧩

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can create an Astro layout component with a `<slot />`.
- I can send page-specific properties to a layout.

### Resources

[Section titled “Resources”](#resources)

- [Astro layout components](/en/basics/layouts/)

- [Astro `<slot />`](/en/basics/astro-components/#slots)
