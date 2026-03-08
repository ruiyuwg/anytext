# Add site-wide styling

> Tutorial: Build your first Astro blog —
> Create a global stylesheet for site-wide styling

Now that you have a styled About page, it’s time to add some global styles for the rest of your site!

Get ready to…

- Apply styles globally

## Add a global stylesheet

[Section titled “Add a global stylesheet”](#add-a-global-stylesheet)

You have seen that the Astro `<style>` tag is **scoped by default**, meaning that it only affects the elements in its own file.

There are a few ways to define styles **globally** in Astro, but in this tutorial, you will create and import a `global.css` file into each of your pages. This combination of stylesheet and `<style>` tag gives you the ability to control some styles site-wide, and to apply some specific styles exactly where you want them.

1. Create a new file at the location `src/styles/global.css` (You’ll have to create a `styles` folder first.)

2. Copy the following code into your new file, `global.css`

   src/styles/global.css

   ```css
   html {
     background-color: #f1f5f9;
     font-family: sans-serif;
   }


   body {
     margin: 0 auto;
     width: 100%;
     max-width: 80ch;
     padding: 1rem;
     line-height: 1.5;
   }


   * {
     box-sizing: border-box;
   }


   h1 {
     margin: 1rem 0;
     font-size: 2.5rem;
   }
   ```

3. In `about.astro`, add the following import statement to your frontmatter:

   src/pages/about.astro

   ```diff
   ---
   +import '../styles/global.css';


   const pageTitle = "About Me";


   const identity = {
     firstName: "Sarah",
     country: "Canada",
     occupation: "Technical Writer",
     hobbies: ["photography", "birdwatching", "baseball"],
   };


   const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];


   const happy = true;
   const finished = false;
   const goal = 3;


   const skillColor = "crimson";
   const fontWeight = "bold";
   const textCase = "uppercase";
   ---
   ```

4. Check the browser preview of your About page, and you should now see new styles applied!

## Try it yourself - Import your global stylesheet

[Section titled “Try it yourself - Import your global stylesheet”](#try-it-yourself---import-your-global-stylesheet)

Add the necessary line of code to each `.astro` file in your project to apply your global styles to every page of your site.

✅ Show me the code! ✅

Add the following import statement to the two other page files: `src/pages/index.astro` and `src/pages/blog.astro`

src/pages/index.astro

```diff
---
+import '../styles/global.css';
---
```

Make any changes or additions you want to the content of your About page by adding HTML elements to the page template, either statically or dynamically. Write any additional JavaScript in your frontmatter script to provide you with values to use in your HTML. When you are happy with this page, commit your changes to GitHub before moving on to the next lesson.

### Analyze the Pattern

[Section titled “Analyze the Pattern”](#analyze-the-pattern)

Your About page is now styled using *both* the imported `global.css` file *and* a `<style>` tag.

- Are styles from both styling methods being applied?

  \[ ] Yes

- Are there any conflicting styles, and if so, which are applied?

  \[ ] Yes, `<h1>` has a size of `2.5rem` globally, but `4rem` locally in the `<style>` tag. The local `4rem` rule is applied on the About page.

- Describe how `global.css` and `<style>` work together.

  \[ ] When conflicting styles are defined both globally and in a page’s local `<style>` tag, the local styles should overwrite any global styles. (But, there can be other factors involved, so always visually inspect your site to make sure your styles are properly applied!)

- How would you choose whether to declare a style in a `global.css` file or a `<style>` tag?

  \[ ] If you want a style to be applied site-wide, you would choose to use a `global.css` file. However, if you want styles to apply to only the HTML content in a single `.astro` file, and not affect other elements on your site, you would choose a `<style>` tag.

## Checklist

[Section titled “Checklist”](#checklist)

- I can add global CSS styles by importing a `.css` file.

### Resources

[Section titled “Resources”](#resources)

- [Astro syntax vs JSX - comparison](/en/reference/astro-syntax/#differences-between-astro-and-jsx)

- [Astro `<style>` tag](/en/guides/styling/#styling-in-astro)

- [CSS variables in Astro](/en/guides/styling/#css-variables)

# Check in: Unit 3 - Components

> Tutorial: Build your first Astro blog —
> Build Astro components to reuse code for common elements across your website

Now that you have `.astro` and `.md` files generating entire pages on your website, it’s time to make and reuse smaller bits of HTML with Astro components!

## Looking ahead

[Section titled “Looking ahead”](#looking-ahead)

In this unit, you’ll learn how to create **Astro components** to reuse code for common elements across your website.

You’ll build:

- A Navigation component that presents a menu of links to your pages
- A Footer component to include at the bottom of each page
- A Social Media component, used in the Footer, that links to profile pages
- An interactive Menu component to toggle the Navigation on mobile

Along the way, you’ll use CSS and JavaScript to build a responsive design that reacts to screen sizes and user input.

## Checklist

[Section titled “Checklist”](#checklist)

- I am ready to build some Astro components!
