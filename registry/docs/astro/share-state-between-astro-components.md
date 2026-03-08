# Share state between Astro components

> Learn how to share state across Astro components with Nano Stores.

Tip

Using framework components? See [how to share state between Islands](/en/recipes/sharing-state-islands/)!

When building an Astro website, you may need to share state across components. Astro recommends the use of [Nano Stores](https://github.com/nanostores/nanostores) for shared client storage.

## Recipe

[Section titled “Recipe”](#recipe)

1. Install Nano Stores:

   - npm

     ```shell
     npm install nanostores
     ```

   - pnpm

     ```shell
     pnpm add nanostores
     ```

   - Yarn

     ```shell
     yarn add nanostores
     ```

2. Create a store. In this example, the store tracks whether a dialog is open or not:

   src/store.js

   ```ts
   import { atom } from 'nanostores';


   export const isOpen = atom(false);
   ```

3. Import and use the store in a `<script>` tag in the components that will share state.

   The following `Button` and `Dialog` components each use the shared `isOpen` state to control whether a particular `<div>` is hidden or displayed:

   src/components/Button.astro

   ```astro
   Open



     import { isOpen } from '../store.js';


     // Set the store to true when the button is clicked
     function openDialog() {
       isOpen.set(true);
     }


     // Add an event listener to the button
     document.getElementById('openDialog').addEventListener('click', openDialog);

   ```

   src/components/Dialog.astro

   ```astro
   Hello world!



     import { isOpen } from '../store.js';


     // Listen to changes in the store, and show/hide the dialog accordingly
     isOpen.subscribe(open => {
       if (open) {
         document.getElementById('dialog').style.display = 'block';
       } else {
         document.getElementById('dialog').style.display = 'none';
       }
     })

   ```

## Resources

[Section titled “Resources”](#resources)

- [Nano Stores on NPM](https://www.npmjs.com/package/nanostores)
- [Nano Stores documentation for Vanilla JS](https://github.com/nanostores/nanostores#vanilla-js)
