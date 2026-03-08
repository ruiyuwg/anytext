# Dynamically import images

> Learn how to dynamically import images using Vite's import.meta.glob function.

Local [images](/en/guides/images/) must be imported into `.astro` files in order to display them. There will be times where you will want or need to dynamically import the image paths of your images instead of explicitly importing each individual image.

In this recipe, you will learn how to dynamically import your images using Vite’s `import.meta.glob` function. You will build a card component that displays the name, age, and photo of a person.

## Recipe

[Section titled “Recipe”](#recipe)

1. Create a new `assets` folder under the `src` directory and add your images inside that new folder.

   - src/

     - assets/

       - avatar-1.jpg
       - avatar-2.png
       - avatar-3.jpeg

   Note

   `assets` is a popular folder name convention for placing images but you are free to name the folder whatever you like.

2. Create a new Astro component for your card and import the `<Image />` component.

   src/components/MyCustomCardComponent.astro

   ```astro
   ---
   import { Image } from 'astro:assets';
   ---
   ```

3. Specify the `props` that your component will receive in order to display the necessary information on each card. You can optionally define their types, if you are using TypeScript in your project.

   src/components/MyCustomCardComponent.astro

   ```diff
   ---
   import { Image } from 'astro:assets';


   +interface Props {
   +   imagePath: string;
   +   altText: string;
   +   name: string;
   +   age: number;
   +}


   +const { imagePath, altText, name, age } = Astro.props;
   ---
   ```

4. Create a new `images` variable and use the `import.meta.glob` function which returns an object of all of the image paths inside the `assets` folder. You will also need to import `ImageMetadata` type to help define the type of the `images` variable.

   src/components/MyCustomCardComponent.astro

   ```diff
   ---
   +import type { ImageMetadata } from 'astro';
   import { Image } from 'astro:assets';


   interface Props {
      imagePath: string;
      altText: string;
      name: string;
      age: number;
   }


   const { imagePath, altText, name, age } = Astro.props;
   +const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}')
   ---
   ```

5. Use the props to create the markup for your card component.

   src/components/MyCustomCardComponent.astro

   ```diff
   ---
   import type { ImageMetadata } from 'astro';
   import { Image } from 'astro:assets';


   interface Props {
      imagePath: string;
      altText: string;
      name: string;
      age: number;
   }


   const { imagePath, altText, name, age } = Astro.props;
   const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}');
   ---

       {name}
       Age: {age}
       +

   ```

6. Inside the `src` attribute, pass in the `images` object and use bracket notation for the image path. Then make sure to invoke the glob function.

   Since you are accessing the `images` object which has an unknown type, you should also `throw` an error in case an invalid file path is passed as a prop.

   src/components/MyCustomCardComponent.astro

   ```diff
   ---
   import type { ImageMetadata } from 'astro';
   import { Image } from 'astro:assets';


   interface Props {
      imagePath: string;
      altText: string;
      name: string;
      age: number;
   }


   const { imagePath, altText, name, age } = Astro.props;
   const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}');
   +if (!images[imagePath]) throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
   ---

       {name}
       Age: {age}
       

   ```

   Note

   `images` is an object that contains all of the image paths inside the `assets` folder.

   ```js
   const images = {
     './assets/avatar-1.jpg': () => import('./assets/avatar-1.jpg'),
     './assets/avatar-2.png': () => import('./assets/avatar-2.png'),
     './assets/avatar-3.jpeg': () => import('./assets/avatar-3.jpeg')
   }
   ```

   The `imagePath` prop is a string that contains the path to the image that you want to display. The `import.meta.glob()` is doing the work of finding the image path that matches the `imagePath` prop and handling the import for you.

7. Import and use the card component inside an Astro page, passing in the values for the `props`.

   src/pages/index.astro

   ```astro
   ---
   import MyCustomCardComponent from '../components/MyCustomCardComponent.astro';
   ---
   <MyCustomCardComponent
       imagePath="/src/assets/avatar-1.jpg"
       altText="A headshot of Priya against a brick wall background."
       name="Priya"
       age={25}
   />
   ```

# Add icons to external links

> Learn how to install a rehype plugin to add icons to external links in your Markdown files.

Using a rehype plugin, you can identify and modify links in your Markdown files that point to external sites. This example adds icons to the end of each external link, so that visitors will know they are leaving your site.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- An Astro project using Markdown for content pages.

## Recipe

[Section titled “Recipe”](#recipe)

1. Install the `rehype-external-links` plugin.

   - npm

     ```shell
     npm install rehype-external-links
     ```

   - pnpm

     ```shell
     pnpm add rehype-external-links
     ```

   - Yarn

     ```shell
     yarn add rehype-external-links
     ```

2. Import the plugin into your `astro.config.mjs` file.

   Pass `rehypeExternalLinks` to the `rehypePlugins` array, along with an options object that includes a content property. Set this property’s `type` to `text` if you want to add plain text to the end of the link. To add HTML to the end of the link instead, set the property `type` to `raw`.

   ```ts
   // ...
   import rehypeExternalLinks from 'rehype-external-links';


   export default defineConfig({
     // ...
     markdown: {
       rehypePlugins: [
         [
           rehypeExternalLinks,
           {
             content: { type: 'text', value: ' 🔗' }
           }
         ],
       ]
     },
   });
   ```

   Note

   The value of the `content` property is [not represented in the accessibility tree](https://developer.mozilla.org/en-US/docs/Web/CSS/content#accessibility_concerns). As such, it’s best to make clear that the link is external in the surrounding content, rather than relying on the icon alone.

## Resources

[Section titled “Resources”](#resources)

- [rehype-external-links](https://www.npmjs.com/package/rehype-external-links)
