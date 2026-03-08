# Build your first Astro island

> Tutorial: Build your first Astro blog —
> Use a Preact component to greet your visitors with a randomly-selected message

Use a Preact component to greet your visitors with a randomly-selected welcome message!

Get ready to…

- Add Preact to your Astro project
- Include Astro islands (Preact `.jsx` components) on your home page
- Use `client:` directives to make islands interactive

## Add Preact to your Astro project

[Section titled “Add Preact to your Astro project”](#add-preact-to-your-astro-project)

1. If it’s running, quit the dev server to have access to the terminal (keyboard shortcut: `Ctrl + C`).

2. Add the ability to use Preact components in your Astro project with a single command:

   - npm

     ```sh
     npx astro add preact
     ```

   - pnpm

     ```sh
     pnpm astro add preact
     ```

   - Yarn

     ```sh
     yarn astro add preact
     ```

3. Follow the command line instructions to confirm adding Preact to your project.

## Include a Preact greeting banner

[Section titled “Include a Preact greeting banner”](#include-a-preact-greeting-banner)

This component will take an array of greeting messages as a prop and randomly select one of them to show as a welcome message. The user can click a button to get a new random message.

1. Create a new file in `src/components/` named `Greeting.jsx`

   Note the `.jsx` file extension. This file will be written in Preact, not Astro.

2. Add the following code to `Greeting.jsx`:

   src/components/Greeting.jsx

   ```jsx
   import { useState } from 'preact/hooks';


   export default function Greeting({messages}) {


     const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];


     const [greeting, setGreeting] = useState(messages[0]);


     return (
       
         {greeting}! Thank you for visiting!
          setGreeting(randomMessage())}>
           New Greeting
         
       
     );
   }
   ```

3. Import and use this component on your Home page `index.astro`.

   src/pages/index.astro

   ```diff
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   +import Greeting from '../components/Greeting';
   const pageTitle = "Home Page";
   ---

     My awesome blog subtitle
     +

   ```

   Check the preview in your browser: you should see a random greeting, but the button won’t work!

4. Add a second `<Greeting />` component with the `client:load` directive.

   src/pages/index.astro

   ```diff
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import Greeting from '../components/Greeting';
   const pageTitle = "Home Page";
   ---

     My awesome blog subtitle
     
     +

   ```

5. Revisit your page and compare the two components. The second button works because the `client:load` directive tells Astro to send and rerun its JavaScript on the *client* when the page *loads*, making the component interactive. This is called a **hydrated** component.

6. Once the difference is clear, remove the non-hydrated Greeting component.

   src/pages/index.astro

   ```diff
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import Greeting from '../components/Greeting';
   const pageTitle = "Home Page";
   ---

     My awesome blog subtitle
     -
     

   ```

### Analyze the Pattern

[Section titled “Analyze the Pattern”](#analyze-the-pattern)

There are other `client:` directives to explore. Each sends the JavaScript to the client at a different time. `client:visible`, for example, will only send the component’s JavaScript when it is visible on the page.

Consider an Astro component with the following code:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import AstroBanner from '../components/AstroBanner.astro';
import PreactBanner from '../components/PreactBanner';
import SvelteCounter from '../components/SvelteCounter.svelte';
---
<BaseLayout>
  <AstroBanner />
  <PreactBanner />
  <PreactBanner client:load />
  <SvelteCounter />
  <SvelteCounter client:visible />
</BaseLayout>
```

1. Which of the five components will be **hydrated** islands, sending JavaScript to the client?

   \[ ] `<PreactBanner client:load />` and `<SvelteCounter client:visible />` will be hydrated islands.

2. In what way(s) will the two `<PreactBanner />` components be the same? In what way(s) will they be different?

   \[ ] **Same**: They both show the same HTML elements and look the same initially. **Different**: The component with the `client:load` directive will rerender after the page is loaded, and any interactive elements that it has will work.

3. Assume the `SvelteCounter` component shows a number and has a button to increase it. If you couldn’t see your website’s code, only the live published page, how would you tell which of the two `<SvelteCounter />` components used `client:visible`?

   \[ ] Try clicking the button, and see which one is interactive. If it responds to your input, it must have had a `client:` directive.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

For each of the following components, identify what will be sent to the browser:

1. `<ReactCounter client:load />`

   1. HTML and CSS only
   2. HTML, CSS, and JavaScript

   Submit

2. `<SvelteCard />`

   1. HTML and CSS only
   2. HTML, CSS, and JavaScript

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can install an Astro integration.
- I can write UI framework components in their own language.
- I can use a `client:` directive for hydration on my UI framework component.

### Resources

[Section titled “Resources”](#resources)

- [Astro Integrations Guide](/en/guides/integrations-guide/)

- [Using UI Framework Components in Astro](/en/guides/framework-components/#using-framework-components)

- [Astro client directives reference](/en/reference/directives-reference/#client-directives)
