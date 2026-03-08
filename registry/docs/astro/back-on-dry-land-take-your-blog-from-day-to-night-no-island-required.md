# Back on dry land. Take your blog from day to night, no island required!

> Tutorial: Build your first Astro blog —
> Build a light/dark theme toggle using only JavaScript and CSS

Now that you can build Astro islands for interactive elements, don’t forget that you can go pretty far with just vanilla JavaScript and CSS!

Let’s build a clickable icon to let your users toggle between light or dark mode using another `<script>` tag for interactivity… with no framework JavaScript sent to the browser.

Get ready to…

- Build an interactive theme toggle with only JavaScript and CSS
- Send as little JavaScript to the browser as possible!

## Add and style a theme toggle icon

[Section titled “Add and style a theme toggle icon”](#add-and-style-a-theme-toggle-icon)

1. Create a new file at `src/components/ThemeIcon.astro` and paste the following code into it:

   src/components/ThemeIcon.astro

   ```astro
   ---
   ---

     
       
       
     




     #themeToggle {
       border: 0;
       background: none;
     }
     .sun { fill: black; }
     .moon { fill: transparent; }


     :global(.dark) .sun { fill: transparent; }
     :global(.dark) .moon { fill: white; }

   ```

2. Import and add the `<ThemeIcon />` component to `Header.astro` so that it will be displayed on all pages. Wrap both `<ThemeIcon />` and `<Menu />` inside a `<div>` to group them together for styling, and add the `<style>` tag as shown below for some basic styles to improve the layout.

   src/components/Header.astro

   ```diff
   ---
   import Menu from './Menu.astro';
   import Navigation from './Navigation.astro';
   +import ThemeIcon from './ThemeIcon.astro';
   ---

     
       
         +
         
       
       
     




     +div {
       +display: flex;
       +justify-content: space-between;
   +  }

   ```

3. Visit your browser preview at `http://localhost:4321` to see the icon now on all your pages. You can try clicking it, but you have not written a script to make it interactive yet.

## Add CSS styling for a dark theme

[Section titled “Add CSS styling for a dark theme”](#add-css-styling-for-a-dark-theme)

Choose some alternate colors to use in dark mode.

1. In `global.css`, define some dark styles. You can choose your own, or copy and paste:

   src/styles/global.css

   ```css
   html.dark {
     background-color: #0d0950;
     color: #fff;
   }


   .dark .menu {
     background-color: #fff;
     color: #000;
   }


   .dark .nav-links a:hover,
   .dark .nav-links a:focus {
     color: #0d0950;
   }


   .dark .nav-links a {
     color: #fff;
   }


   .dark a {
     color: #ff9776;
   }
   ```

Check colors for accessibility

When you update your site to include dark mode, some colors used may need updating.

Always check your rendered site when adding new styles and colors, and make adjustments when necessary! This can mean adding more `.dark` CSS style rules to display different styles in dark mode, or you may wish to update some colors so that they work equally well in both themes.

Consider using accessibility tools such as a contrast checker when creating a set of colors for your site. Or, you can run a check on your website with a browser extension to spot any potential issues.

## Add client-side interactivity

[Section titled “Add client-side interactivity”](#add-client-side-interactivity)

To add interactivity to an Astro component, you can use a `<script>` tag. This script can check and set the current theme from `localStorage` and toggle the theme when the icon is clicked.

1. Add the following `<script>` tag in `src/components/ThemeIcon.astro` after your `<style>` tag:

   src/components/ThemeIcon.astro

   ```diff

     .sun { fill: black; }
     .moon { fill: transparent; }


     :global(.dark) .sun { fill: transparent; }
     :global(.dark) .moon { fill: white; }




     +const theme = (() => {
       const localStorageTheme = localStorage?.getItem("theme") ?? '';
       if (['dark', 'light'].includes(localStorageTheme)) {
         return localStorageTheme;
       }
       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         return 'dark';
       }
         return 'light';
     })();


     +if (theme === 'light') {
       +document.documentElement.classList.remove('dark');
   +  } else {
       +document.documentElement.classList.add('dark');
   +  }


     +window.localStorage.setItem('theme', theme);


     +const handleToggleClick = () => {
       const element = document.documentElement;
       +element.classList.toggle("dark");


       const isDark = element.classList.contains("dark");
       +localStorage.setItem("theme", isDark ? "dark" : "light");
     }


     +document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);

   ```

2. Check your browser preview at `http://localhost:4321` and click the theme icon. Verify that you can change between light and dark modes.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

Choose whether each of the following statements describes Astro `<script>` tags, UI framework components, or both.

1. They allow you to include interactive UI elements on your website.

   1. Astro `<script>` tags
   2. UI framework components
   3. both

   Submit

2. They will create static elements on your site unless you include a `client:` to send their JavaScript to the client and run in the browser.

   1. Astro `<script>` tags
   2. UI framework components
   3. both

   Submit

3. They allow you to “try out” a new framework without requiring you to start an entirely new project using that tech stack.

   1. Astro `<script>` tags
   2. UI framework components
   3. both

   Submit

4. They allow you to reuse code you have written in other frameworks and you can often just drop them right into your site.

   1. Astro `<script>` tags
   2. UI framework components
   3. both

   Submit

5. They allow you to add interactivity without needing to know or learn any other JavaScript frameworks.

   1. Astro `<script>` tags
   2. UI framework components
   3. both

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can use JavaScript for interactivity when I don’t want to add a framework.

### Resources

[Section titled “Resources”](#resources)

- [Client-side `<script>` in Astro](/en/guides/client-side-scripts/)
