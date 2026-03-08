# Headless WordPress & Astro

> Add content to your Astro project using WordPress as a CMS

[WordPress](https://wordpress.org/) is a content management system that includes its own frontend, but can also be used as a headless CMS to provide content to your Astro project.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

WordPress comes with a built-in [WordPress REST API](https://developer.wordpress.org/rest-api/) to connect your WordPress data to Astro. You can optionally install [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) or [Gato GraphQL](https://wordpress.org/plugins/gatographql/) on your site to use GraphQL.

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need to have the following:

1. **An Astro project** - If you don’t have an Astro project yet, our [Installation guide](/en/install-and-setup/) will get you up and running in no time.
2. **A WordPress site** - Your site’s REST API is `[YOUR_SITE]/wp-json/wp/v2/` and is available by default with any WordPress site. It is also possible to [set up WordPress on a local environment](https://wordpress.org/support/article/installing-wordpress-on-your-own-computer/).

### Setting up Credentials

[Section titled “Setting up Credentials”](#setting-up-credentials)

Your WordPress REST API is available to external requests for data fetching without authentication by default. This does not allow users to modify your data or site settings and allows you to use your data in your Astro project without any credentials.

You may choose to [require authentication](https://developer.wordpress.org/rest-api/frequently-asked-questions/#require-authentication-for-all-requests) if necessary.

### Fetching Data

[Section titled “Fetching Data”](#fetching-data)

Fetch your WordPress data through your site’s unique REST API URL and the route for your content. (For a blog, this will commonly be `posts`.) Then, you can render your data properties using Astro’s `set:html={}` directive.

For example, to display a list of post titles and their content:

src/pages/index.astro

```astro
---
const res = await fetch("https://[YOUR-SITE]/wp-json/wp/v2/posts");
const posts = await res.json();
---
<h1>Astro + WordPress 🚀</h1>
{
  posts.map((post) => (
      <h2 set:html={post.title.rendered} />
      <p set:html={post.content.rendered} />
  ))
}
```

The WordPress REST API includes [global parameters](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/) such as `_fields` and `_embed`.

A large quantity of data is available to you via this API, so you may wish to only fetch certain fields. You can restrict your response by adding the [`_fields`](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#_fields) parameter to the API URL, for example: `[YOUR-SITE]/wp/v2/posts?_fields=author,id,excerpt,title,link`

The API can also return content related to your post, such as a link to the parent post, or to comments on the post. You can add the [`_embed`](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#_embed) parameter to the API URL (e.g. `[YOUR-SITE]/wp/v2/posts?_embed`) to indicate to the server that the response should include these embedded resources.

## Building a blog with WordPress and Astro

[Section titled “Building a blog with WordPress and Astro”](#building-a-blog-with-wordpress-and-astro)

This example fetches data from the public WordPress API of . This WordPress site stores information about individual dinosaurs under the `dinos` route, just as a blog would store individual blog posts under the `posts` route.

This example shows how to reproduce this site structure in Astro: an index page that lists dinosaurs with links to dynamically-generated individual dinosaur pages.

Note

To use [Custom Post Types (CPT)](https://learn.wordpress.org/lesson-plan/custom-post-types/) in your WordPress API (not just `post` and `page`), you will have to [configure them in your WordPress dashboard](https://stackoverflow.com/questions/48536646/how-can-i-get-data-from-custom-post-type-using-wp-rest-api) or [add REST API Support For Custom Content Types](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-rest-api-support-for-custom-content-types/) in WordPress.

This example fetches data from a WordPress site whose content types have already been configured and exposed to the REST API.

### Displaying a list of WordPress posts

[Section titled “Displaying a list of WordPress posts”](#displaying-a-list-of-wordpress-posts)

The page `src/pages/index.astro` lists each dinosaur, with a description and link to its own page.

- src/

  - pages/

    - **index.astro**

    - dinos/

      - \[slug].astro

- astro.config.mjs

- package.json

Fetching via the API returns an object that includes the properties:

- `title.rendered` - Contains the HTML rendering of the title of the post.
- `content.rendered` - Contains the HTML rendering of the content of the post.
- `slug` - Contains the slug of the post. (This provides the link to the dynamically-generated individual dinosaur pages.)

/src/pages/index.astro

```astro
---
import Layout from "../layouts/Layout.astro";


let res = await fetch("https://norian.studio/wp-json/wp/v2/dinos");
let posts = await res.json();
---
<Layout title="Dinos!">
  <section>
    <h1>List of Dinosaurs</h1>
    {
      posts.map((post) => (
        <article>
          <h2>
            <a href={`/dinos/${post.slug}/`} set:html={post.title.rendered} />
          </h2>
          <Fragment set:html={post.content.rendered} />
        </article>
      ))
    }
  </section>
</Layout>
```

### Using the WordPress API to generate pages

[Section titled “Using the WordPress API to generate pages”](#using-the-wordpress-api-to-generate-pages)

The page `src/pages/dinos/[slug].astro` [dynamically generates a page](/en/guides/routing/#dynamic-routes) for each dinosaur.

/src/pages/dinos/\[slug].astro

```astro
---
import Layout from '../../layouts/Layout.astro';


const { slug } = Astro.params;


let res = await fetch(`https://norian.studio/wp-json/wp/v2/dinos?slug=${slug}`);
let [post] = await res.json();


// The getStaticPaths() is required for static Astro sites.
// If using SSR, you will not need this function.
export async function getStaticPaths() {
  let data = await fetch("https://norian.studio/wp-json/wp/v2/dinos");
  let posts = await data.json();


  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post: post },
  }));
}
---
<Layout title={post.title.rendered}>
  <article>
    <h1 set:html={post.title.rendered} />
    <Fragment set:html={post.content.rendered} />
  </article>
</Layout>
```

### Returning embedded resources

[Section titled “Returning embedded resources”](#returning-embedded-resources)

The `_embed` query parameter instructs the server to return related (embedded) resources.

src/pages/dinos/\[slug].astro

```astro
---
const { slug } = Astro.params;


let res = await fetch(`https://norian.studio/wp-json/wp/v2/dinos?slug=${slug}&_embed`);
let [post] = await res.json();
---
```

The `_embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url` property is returned, and can be used to display the featured image on each dinosaur page. (Replace `medium` with your desired image size.)

/src/pages/dinos/\[slug].astro

```astro
<Layout title={post.title.rendered}>
  <article>
    <img src={post._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url} />
    <h1 set:html={post.title.rendered} />
    <Fragment set:html={post.content.rendered} />
  </article>
</Layout>
```

### Publishing your site

[Section titled “Publishing your site”](#publishing-your-site)

To deploy your site visit our [deployment guides](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Building An Astro Website With WordPress As A Headless CMS](https://blog.openreplay.com/building-an-astro-website-with-wordpress-as-a-headless-cms/) by Chris Bongers.
- [Building with Astro x WordPress](https://www.youtube.com/watch?v=Jstqgklvfnc) on Ben Holmes’s stream.
- [Building a Headless WordPress Site with Astro](https://developers.wpengine.com/blog/building-a-headless-wordpress-site-with-astro) by Jeff Everhart.
- [Astro and WordPress as an API](https://darko.io/posts/wp-as-an-api/) by Darko Bozhinovski.

## Production Sites

[Section titled “Production Sites”](#production-sites)

The following sites use Astro + WordPress in production:

- [Dinos!](https://wc-dinos.netlify.app/) by Anindo Neel Dutta — [source code on GitHub](https://github.com/leen-neel/astro-wordpress)

## Themes

[Section titled “Themes”](#themes)

- [![](/_astro/astro-wordpress-starter.DWg2-sU7_ZlvAh5.webp) Astro WordPress Starter](https://astro.build/themes/details/astro-wordpress-starter/)

## Community Resources

[Section titled “Community Resources”](#community-resources-1)

[Introduction to Astro + WordPress ](https://dev.to/bngmnn/leveraging-wordpress-as-a-headless-cms-for-your-astro-website-a-comprehensive-guide-a4d)

[Astro + WPGraphQL for more secure WordPress sites ](https://www.youtube.com/watch?v=fWxn-r83ygQ)

[Shattering Headless WordPress Build Times with Astro's Content Layer API ](https://andrewkepson.com/blog/headless-wordpress/build-time-astro-content-layer-api/)

[How to Set Up a Headless WordPress Site with Astro ](https://dev.to/mathiasahlgren/how-to-set-up-a-headless-wordpress-site-with-astro-3a2h)

[Build a static site with WordPress and Astro ](https://kinsta.com/blog/wordpress-astro/)

[Going Headless WordPress with Astro ](https://www.youtube.com/watch?v=MP2TR6Z_YTc)

[Leveraging WordPress as a Headless CMS for Your Astro Website: API Configuration & Data Fetching ](https://medium.com/@bangemann.dev/configure-wordpress-rest-api-setup-data-fetching-4af5161095f6)

[WordPress Headless with Astro - Installing Astro and Fetching posts with WP-GraphQL ](https://www.youtube.com/watch?v=2PSqABrME28)

[Make a Headless WordPress Site with Astro ](https://www.youtube.com/watch?v=54U7dVmhyxE)

[WPEngine Astro Headless WordPress Starter Demo ](https://www.youtube.com/watch?v=BcoxZZIfESI)

[Headless WordPress with Astro – Build a Simple Blog from Scratch with Tailwind CSS ](https://fullstackdigital.io/blog/headless-wordpress-with-astro-build-a-simple-blog/)

[Building an E-commerce Website with Headless WordPress and Astro ](https://shaxadd.medium.com/building-an-e-commerce-website-with-headless-wordpress-and-astro-2712d8c8b735)

[Building a Headless WordPress Site with Astro ](https://wpengine.com/builders/building-headless-wordpress-site-astro/)

[Building an Astro Website with WordPress as a Headless CMS ](https://blog.openreplay.com/building-an-astro-website-with-wordpress-as-a-headless-cms/)

Have a resource to share?

If you found (or made!) a helpful video or blog post about using headless WordPress with Astro, [add it to this list](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/cms/wordpress.mdx)!
