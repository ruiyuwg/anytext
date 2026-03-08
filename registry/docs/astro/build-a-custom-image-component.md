# Build a custom image component

> Learn how to build a custom image component that supports media queries using the getImage function.

Astro provides two built-in components that you can use to display and optimize your images. The `<Picture>` component allows you to display responsive images and work with different formats and sizes. The `<Image>` component will optimize your images and allow you to pass in different formats and quality properties.

When you need options that the `<Picture>` and `<Image>` components do not currently support, you can use the `getImage()` function to create a custom component.

In this recipe, you will use the [`getImage()` function](/en/guides/images/#generating-images-with-getimage) to create your own custom image component that displays different source images based on media queries.

## Recipe

[Section titled “Recipe”](#recipe)

1. Create a new Astro component and import the `getImage()` function

   src/components/MyCustomImageComponent.astro

   ```astro
   ---
    import { getImage } from "astro:assets";
   ---
   ```

2. Create a new component for your custom image. `MyCustomComponent.astro` will receive three `props` from `Astro.props`. The `mobileImgUrl` and `desktopImgUrl` props are used for creating your image at different viewport sizes. The `alt` prop is used for the image’s alt text. These props will be passed wherever you render your custom image components. Add the following imports and define the props that you will use in your component. You can also use TypeScript to type the props.

   src/components/MyCustomImageComponent.astro

   ```diff
   ---
   import type { ImageMetadata } from "astro";
   +import { getImage } from "astro:assets";


   interface Props {
       mobileImgUrl: string | ImageMetadata;
       desktopImgUrl: string | ImageMetadata;
       alt: string;
   }


   +const { mobileImgUrl, desktopImgUrl, alt } = Astro.props;
   ---
   ```

3. Define each of your responsive images by calling the `getImage()` function with your desired properties.

   src/components/MyCustomImageComponent.astro

   ```diff
   ---
   import type { ImageMetadata } from "astro";
   import { getImage } from "astro:assets";


   interface Props {
       mobileImgUrl: string | ImageMetadata;
       desktopImgUrl: string | ImageMetadata;
       alt: string;
   }


   const { mobileImgUrl, desktopImgUrl, alt } = Astro.props;


   +const mobileImg = await getImage({
       src: mobileImgUrl,
       format: "webp",
       width: 200,
       height: 200,
   +});


   +const desktopImg = await getImage({
       src: desktopImgUrl,
       format: "webp",
       width: 800,
       height: 200,
   +});
   ---
   ```

4. Create a `<picture>` element that generates a `srcset` with your different images based on your desired media queries.

   src/components/MyCustomImageComponent.astro

   ```diff
   ---
   import type { ImageMetadata } from "astro";
   import { getImage } from "astro:assets";


   interface Props {
       mobileImgUrl: string | ImageMetadata;
       desktopImgUrl: string | ImageMetadata;
       alt: string;
   }


   const { mobileImgUrl, desktopImgUrl, alt } = Astro.props;


   const mobileImg = await getImage({
       src: mobileImgUrl,
       format: "webp",
       width: 200,
       height: 200,
   });


   const desktopImg = await getImage({
       src: desktopImgUrl,
       format: "webp",
       width: 800,
       height: 200,
   });
   ---



       
       
       

   ```

5. Import and use `<MyCustomImageComponent />` in any `.astro` file. Be sure to pass the necessary props for generating two different images at the different viewport sizes:

   src/pages/index.astro

   ```astro
   ---
   import MyCustomImageComponent from "../components/MyCustomImageComponent.astro";
   import mobileImage from "../images/mobile-profile-image.jpg";
   import desktopImage from "../images/desktop-profile-image.jpg";
   ---


   <MyCustomImageComponent
       mobileImgUrl={mobileImage}
       desktopImgUrl={desktopImage}
       alt="user profile picture"
   />
   ```
