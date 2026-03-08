# Send your first script to the browser

> Tutorial: Build your first Astro blog —
> Add client-side interactivity to your mobile navigation with an Astro script tag

Let’s add a button to open and close your navigation menu on mobile screen sizes, requiring some client-side interactivity!

Get ready to…

- Create a menu component
- Write a `<script>` to allow your site visitors to open and close the navigation menu
- Move your JavaScript to its `.js` file

## Build a Menu component

[Section titled “Build a Menu component”](#build-a-menu-component)

Create a `<Menu />` component to open and close your mobile menu.

1. Create a file named `Menu.astro` in `src/components/`

2. Copy the following code into your component. It creates a button that will be used to toggle the visibility of the navigation links on mobile devices. (You will add the new CSS styles to `global.css` later.)

   src/components/Menu.astro

   ```astro
   ---
   ---

     Menu

   ```

3. Place this new `<Menu />` component just before your `<Navigation />` component in `Header.astro`.

   Show me the code!

   src/components/Header.astro

   ```diff
   ---
   +import Menu from './Menu.astro';
   import Navigation from './Navigation.astro';
   ---

     
       +
       
     

   ```

4. Add the following styles for your Menu component, including some responsive styles:

   src/styles/global.css

   ```diff
   /* nav styles */
   +.menu {
     +background-color: #0d0950;
     +border: none;
     +color: #fff;
     +font-size: 1.2rem;
     +font-weight: bold;
     +padding: 5px 10px;
   +}


   .nav-links {
     width: 100%;
     display: none;
     margin: 0;
   }


   .nav-links a {
     display: block;
     text-align: center;
     padding: 10px 0;
     text-decoration: none;
     font-size: 1.2rem;
     font-weight: bold;
     text-transform: uppercase;
     color: #0d0950;
   }


   .nav-links a:hover,
   .nav-links a:focus{
     background-color: #ff9776;
   }


   +:has(.menu[aria-expanded="true"]) .nav-links {
     +display: unset;
   +}


   @media screen and (min-width: 636px) {
     .nav-links {
       margin-left: 5em;
       display: block;
       position: static;
       width: auto;
       background: none;
     }


     .nav-links a {
       display: inline-block;
       padding: 15px 20px;
     }


     +.menu {
       +display: none;
   +  }
   }
   ```

## Write your first script tag

[Section titled “Write your first script tag”](#write-your-first-script-tag)

Your header is not yet **interactive** because it can’t respond to user input, like clicking on the menu to show or hide the navigation links.

Adding a `<script>` tag provides client-side JavaScript to “listen” for a user event and then respond accordingly.

1. Add the following `<script>` tag, using Astro’s built-in TypeScript support, to `index.astro`, just before the closing `</body>` tag.

   src/pages/index.astro

   ```diff
     
     
       +const menu = document.querySelector('.menu');


       +menu?.addEventListener('click', () => {
         +const isExpanded = menu.getAttribute('aria-expanded') === 'true';
         +menu.setAttribute('aria-expanded', `${!isExpanded}`);
   +    });
     

   ```

2. Check your browser preview again at various sizes, and verify that you have a working navigation menu that is both responsive to screen size and responds to user input on this page.

### Importing a `.js` file

[Section titled “Importing a .js file”](#importing-a-js-file)

Instead of writing your JavaScript directly on each page, you can move the contents of your `<script>` tag into its own `.js` file in your project.

1. Create `src/scripts/menu.js` (you will have to create a new `/scripts/` folder) and move your JavaScript into it.

   src/scripts/menu.js

   ```js
   const menu = document.querySelector('.menu');


   menu?.addEventListener('click', () => {
     const isExpanded = menu.getAttribute('aria-expanded') === 'true';
     menu.setAttribute('aria-expanded', `${!isExpanded}`);
   });
   ```

2. Replace the contents of the `<script>` tag on `index.astro` with the following file import:

   src/pages/index.astro

   ```diff
     
     
       -const menu = document.querySelector('.menu');


       -menu?.addEventListener('click', () => {
         -const isExpanded = menu.getAttribute('aria-expanded') === 'true';
         -menu.setAttribute('aria-expanded', `${!isExpanded}`);
   -    });


       +import "../scripts/menu.js";
     

   ```

3. Check your browser preview again at a smaller size and verify that the menu still opens and closes your navigation links.

4. Add the same `<script>` with import to your other two pages, `about.astro` and `blog.astro` and verify that you have a responsive, interactive header on each page.

   src/pages/about.astro & src/pages/blog.astro

   ```diff
     
     
       +import "../scripts/menu.js";
     

   ```

Takeaway

You had previously used some JavaScript to build parts of your site:

- Defining your page title and heading dynamically
- Mapping through a list of skills on the About page
- Conditionally displaying HTML elements

Those commands are all executed at build time to create static HTML for your site, and then the code is “thrown away.”

**The JavaScript in a `<script>` tag is sent to the browser**, and is available to run, based on user interactions like refreshing a page or toggling an input.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

1. When does Astro run any JavaScript written in a component’s frontmatter?

   1. Astro never runs JavaScript
   2. at build-time
   3. When a visitor clicks a button

   Submit

2. Optionally, Astro can send JavaScript to the browser to allow:

   1. users to click page links
   2. faster load times
   3. client-side interactivity

   Submit

3. The client-side JavaScript will be sent to a user’s browser when it is written or imported:

   1. in `<script>` tags
   2. between a `.astro` file’s code fences
   3. in `global.css`

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can add client-side interactivity with JavaScript in a `<script>` tag.
- I can import a `.js` file into a `<script>` tag.

### Resources

[Section titled “Resources”](#resources)

[Client-side scripts in Astro](/en/guides/client-side-scripts/)

# Check in: Unit 4 - Layouts

> Tutorial: Build your first Astro blog —
> Use Astro layouts to share common elements and styles across your pages and posts

Now that you can build with components, it’s time to create some custom layouts!

## Looking ahead

[Section titled “Looking ahead”](#looking-ahead)

In this unit, you’ll build layouts to share common elements and styles across your pages and blog posts.

To do this, you will:

- Create reusable layout components
- Pass content to your layouts with `<slot />`
- Pass data from Markdown frontmatter to your layouts
- Nest multiple layouts

## Checklist

[Section titled “Checklist”](#checklist)

- I am ready to take my page design to the next level with layouts!
