# Create a social media footer

> Tutorial: Build your first Astro blog —
> Build a new component from scratch, then add it to your pages

Get ready to…

- Create a Footer component
- Create and pass props to a Social Media component

Now that you have used Astro components on a page, it’s time to use a component within another component!

## Create a Footer Component

[Section titled “Create a Footer Component”](#create-a-footer-component)

1. Create a new file at the location `src/components/Footer.astro`.

2. Copy the following code into your new file, `Footer.astro`.

   src/components/Footer.astro

   ```astro
   ---
   const platform = "github";
   const username = "withastro";
   ---



     Learn more about my projects on {platform}!

   ```

### Import and use `Footer.astro`

[Section titled “Import and use Footer.astro”](#import-and-use-footerastro)

1. Add the following import statement to the frontmatter in each of your three Astro pages (`index.astro`, `about.astro`, and `blog.astro`):

   ```js
   import Footer from '../components/Footer.astro';
   ```

2. Add a new `<Footer />` component in your Astro template on each page, just before the closing `</body>` tag to display your footer at the bottom of the page.

   ```diff
       +
     

   ```

3. In your browser preview, check that you can see your new footer text on each page.

## Try it yourself - Personalize your footer

[Section titled “Try it yourself - Personalize your footer”](#try-it-yourself---personalize-your-footer)

Customize your footer to display multiple social networks (e.g. Instagram, Twitter, LinkedIn) and include your username to link directly to your own profile.

### Code Check-In

[Section titled “Code Check-In”](#code-check-in)

If you’ve been following along with each step in the tutorial, your `index.astro` file should look like this:

src/pages/index.astro

```astro
---
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';


const pageTitle = 'Home Page';
---


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Navigation />
    <h1>{pageTitle}</h1>
    <Footer />
  </body>
</html>
```

## Create a Social Media component

[Section titled “Create a Social Media component”](#create-a-social-media-component)

Since you might have multiple online accounts you can link to, you can make a single, reusable component and display it multiple times. Each time, you will pass it different properties (`props`) to use: the online platform and your username there.

1. Create a new file at the location `src/components/Social.astro`.

2. Copy the following code into your new file, `Social.astro`.

   src/components/Social.astro

   ```astro
   ---
   const { platform, username } = Astro.props;
   ---
   {platform}
   ```

### Import and use `Social.astro` in your Footer

[Section titled “Import and use Social.astro in your Footer”](#import-and-use-socialastro-in-your-footer)

1. Change the code in `src/components/Footer.astro` to import, then use this new component three times, passing different **component attributes** as props each time:

   src/components/Footer.astro

   ```diff
   ---
   -const platform = "github";
   -const username = "withastro";
   +import Social from './Social.astro';
   ---



     Learn more about my projects on {platform}!
     +
     +
     +

   ```

2. Check your browser preview, and you should see your new footer displaying links to these three platforms on each page.

## Style your Social Media Component

[Section titled “Style your Social Media Component”](#style-your-social-media-component)

1. Customize the appearance of your links by adding a `<style>` tag to `src/components/Social.astro`.

   src/components/Social.astro

   ```diff
   ---
   const { platform, username } = Astro.props;
   ---
   {platform}



     +a {
       +padding: 0.5rem 1rem;
       +color: white;
       +background-color: #4c1d95;
       +text-decoration: none;
   +  }

   ```

2. Add a `<style>` tag to `src/components/Footer.astro` to improve the layout of its contents.

   src/components/Footer.astro

   ```diff
   ---
   import Social from './Social.astro';
   ---

     +footer {
       +display: flex;
       +gap: 1rem;
       +margin-top: 2rem;
   +  }




     
     
     

   ```

3. Check your browser preview again and confirm that each page shows an updated footer.

### Test Yourself

[Section titled “Test Yourself”](#test-yourself)

1. What line of code do you need to write in an Astro component’s frontmatter to receive values of `title`, `author`, and `date` as props?

   1. `const { title, author, date } = Astro.props;`
   2. `import BlogPost from '../components/BlogPost.astro'`
   3. `<BlogPost title="My First Post" author="Dan" date="12 Aug 2022" />`

   Submit

2. How do you **pass values as props** to an Astro component?

   1. `const { title, author, date } = Astro.props;`
   2. `import BlogPost from '../components/BlogPost.astro'`
   3. `<BlogPost title="My First Post" author="Dan" date="12 Aug 2022" />`

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can create new `.astro` components in `src/components/`
- I can import and use Astro components inside other Astro components.
- I can pass props to an Astro component.

### Resources

[Section titled “Resources”](#resources)

- [Component Props in Astro](/en/basics/astro-components/#component-props)
