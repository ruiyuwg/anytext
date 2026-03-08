# Style your About page

> Tutorial: Build your first Astro blog —
> Add an Astro style tag for scoped styling on the page

Now that you have an About page with content about you, it’s time to style it!

Get ready to…

- Style items on a single page
- Use CSS variables

## Style an individual page

[Section titled “Style an individual page”](#style-an-individual-page)

Using Astro’s own `<style></style>` tags, you can style items on your page. Adding **attributes** and **directives** to these tags gives you even more ways to style.

1. Copy the following code and paste it into `src/pages/about.astro`:

   src/pages/about.astro

   ```diff

     
       
       
       {pageTitle}
       
         +h1 {
           +color: purple;
           +font-size: 4rem;
   +      }
       
     
   ```

   Check all three pages in your browser preview.

   - Which color is the page title of:

     - Your Home page? \[ ] black
     - Your About page? \[ ] purple
     - Your Blog page? \[ ] black

   - The page with the biggest title text is? \[ ] Your About page

   Tip

   If you are unable to determine colors visually, you can use the dev tools in your browser to inspect the `<h1>` title elements and verify the text color applied.

2. Add the class name `skill` to the generated `<li>` elements on your About page, so you can style them. Your code should now look like this:

   src/pages/about.astro

   ```astro
   My skills are:

     {skills.map((skill) => {skill})}

   ```

3. Add the following code to your existing style tag:

   src/pages/about.astro

   ```diff

     h1 {
       color: purple;
       font-size: 4rem;
     }
     +.skill {
       +color: green;
       +font-weight: bold;
   +  }

   ```

4. Visit your About page in your browser again, and verify, through visual inspection or dev tools, that each item in your list of skills is now green and bold.

## Use your first CSS variable

[Section titled “Use your first CSS variable”](#use-your-first-css-variable)

The Astro `<style>` tag can also reference any variables from your frontmatter script using the `define:vars={ {...} }` directive. You can **define variables within your code fence**, then **use them as CSS variables in your style tag**.

1. Define a `skillColor` variable by adding it to the frontmatter script of `src/pages/about.astro` like this:

   src/pages/about.astro

   ```diff
   ---
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


   +const skillColor = "crimson";
   ---
   ```

2. Update your existing `<style>` tag below to first define, then use this `skillColor` variable inside double curly braces.

   src/pages/about.astro

   ```diff

     h1 {
       color: purple;
       font-size: 4rem;
     }
     .skill {
       -color: green;
       +color: var(--skillColor);
       font-weight: bold;
     }

   ```

3. Check your About page in your browser preview. You should see that the skills are now crimson red, as set by the `skillColor` variable passed to the `define:vars` directive.

## Try it yourself - Define CSS variables

[Section titled “Try it yourself - Define CSS variables”](#try-it-yourself---define-css-variables)

1. Update the `<style>` tag on your About page so that it matches the one below.

   src/pages/about.astro

   ```astro

     h1 {
       color: purple;
       font-size: 4rem;
     }
     .skill {
       color: var(--skillColor);
       font-weight: var(--fontWeight);
       text-transform: var(--textCase);
     }

   ```

2. Add any missing variable definitions in your frontmatter script so that your new `<style>` tag successfully applies these styles to your list of skills:

   - The text color is crimson red
   - The text is bold
   - The list items are in all-caps (all uppercase letters)

✅ Show me the code! ✅

src/pages/about.astro

```diff
---
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
+const fontWeight = "bold";
+const textCase = "uppercase";
---
```

## Checklist

[Section titled “Checklist”](#checklist)

- I can add CSS styles to an individual page using an Astro `<style>` tag.
- I can use variables to style elements on the page.

### Resources

[Section titled “Resources”](#resources)

- [Astro syntax vs JSX - comparison](/en/reference/astro-syntax/#differences-between-astro-and-jsx)

- [Astro `<style>` tag](/en/guides/styling/#styling-in-astro)

- [CSS variables in Astro](/en/guides/styling/#css-variables)
