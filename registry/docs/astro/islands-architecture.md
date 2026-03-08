# Islands architecture

> Learn about how Astro's islands architecture helps keep sites fast.

Astro helped pioneer and popularize a new frontend architecture pattern called **Islands Architecture.** Islands architecture works by rendering the majority of your page to fast, static HTML with smaller “islands” of JavaScript added when interactivity or personalization is needed on the page (an image carousel, for example). This avoids the monolithic JavaScript payloads that slow down the responsiveness of many other, modern JavaScript web frameworks.

## A brief history

[Section titled “A brief history”](#a-brief-history)

The term “component island” was first coined by Etsy’s frontend architect [Katie Sylor-Miller](https://sylormiller.com/) in 2019. This idea was then expanded on and documented in [this post](https://jasonformat.com/islands-architecture/) by Preact creator Jason Miller on August 11, 2020.

> The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions \[…] that can then be “hydrated” on the client into small self-contained widgets, reusing their server-rendered initial HTML.\
> — Jason Miller, Creator of Preact

The technique that this architectural pattern builds on is also known as **partial** or **selective hydration.**

In contrast, most JavaScript-based web frameworks hydrate & render an entire website as one large JavaScript application (also known as a single-page application, or SPA). SPAs provide simplicity and power but suffer from page-load performance problems due to heavy client-side JavaScript usage.

SPAs have their place, even [embedded inside an Astro page](/en/guides/migrate-to-astro/from-create-react-app/). But, SPAs lack the native ability to selectively and strategically hydrate, making them a heavy-handed choice for most projects on the web today.

Astro became popular as the first mainstream JavaScript web framework with selective hydration built-in, using that same component islands pattern first coined by Sylor-Miller. We’ve since expanded and evolved on Sylor-Miller’s original work, which helped to inspire a similar component island approach to dynamically server-rendered content.

## What is an island?

[Section titled “What is an island?”](#what-is-an-island)

In Astro, an island is an enhanced UI component on an otherwise static page of HTML.

A [**client island**](#client-islands) is an interactive JavaScript UI component that is hydrated separately from the rest of the page, while a [**server island**](#server-islands) is a UI component that server-renders its dynamic content separately from the rest of the page.

Both islands run expensive or slower processes independently, on a per-component basis, for optimized page loads.

## Island components

[Section titled “Island components”](#island-components)

Astro components are the building blocks of your page template. They render to static HTML with no client-side runtime.

Think of a client island as an interactive widget floating in a sea of otherwise static, lightweight, server-rendered HTML. Server islands can be added for personalized or dynamic server-rendered elements, such as a logged in visitor’s profile picture.

Header (interactive island)

Sidebar (static HTML)

Static content like text, images, etc.

Image carousel (interactive island)

Footer (static HTML)

Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/)

An island always runs in isolation from other islands on the page, and multiple islands can exist on a page. Client islands can still share state and communicate with each other, even though they run in different component contexts.

This flexibility allows Astro to support multiple UI frameworks like [React](https://react.dev/), [Preact](https://preactjs.com/), [Svelte](https://svelte.dev/), [Vue](https://vuejs.org/), and [SolidJS](https://www.solidjs.com/). Because they are independent, you can even mix several frameworks on each page.

Tip

Although most developers will stick to just one UI framework, Astro supports multiple frameworks in the same project. This allows you to:

- Choose the framework that is best for each component.
- Learn a new framework without needing to start a new project.
- Collaborate with others even when working in different frameworks.
- Incrementally convert an existing site to another framework with no downtime.

## Client Islands

[Section titled “Client Islands”](#client-islands)

By default, Astro will automatically render every UI component to just HTML & CSS, **stripping out all client-side JavaScript automatically.**

src/pages/index.astro

```astro
<MyReactComponent />
```

This may sound strict, but this behavior is what keeps Astro websites fast by default and protects developers from accidentally sending unnecessary or unwanted JavaScript that might slow down their website.

Turning any static UI component into an interactive island requires only a `client:*` directive. Astro then automatically builds and bundles your client-side JavaScript for optimized performance.

src/pages/index.astro

```astro
<!-- This component is now interactive on the page!
     The rest of your website remains static. -->
<MyReactComponent client:load />
```

With islands, client-side JavaScript is only loaded for the explicit interactive components that you mark using `client:*` directives.

And because interaction is configured at the component-level, you can handle different loading priorities for each component based on its usage. For example, `client:idle` tells a component to load when the browser becomes idle, and `client:visible` tells a component to load only once it enters the viewport.

### Benefits of client islands

The most obvious benefit of building with Astro Islands is performance: the majority of your website is converted to fast, static HTML and JavaScript is only loaded for the individual components that need it. JavaScript is one of the slowest assets that you can load per-byte, so every byte counts.

Another benefit is parallel loading. In the example illustration above, the low-priority “image carousel” island doesn’t need to block the high-priority “header” island. The two load in parallel and hydrate in isolation, meaning that the header becomes interactive immediately without having to wait for the heavier carousel lower down the page.

Even better, you can tell Astro exactly how and when to render each component. If that image carousel is really expensive to load, you can attach a special [client directive](/en/reference/directives-reference/#client-directives) that tells Astro to only load the carousel when it becomes visible on the page. If the user never sees it, it never loads.

In Astro, it’s up to you as the developer to explicitly tell Astro which components on the page need to also run in the browser. Astro will only hydrate exactly what’s needed on the page and leave the rest of your site as static HTML.

**Client islands are the secret to Astro’s fast-by-default performance story!**

Read more about [using JavaScript framework components](/en/guides/framework-components/) in your project.

## Server islands

[Section titled “Server islands”](#server-islands)

Server islands are a way to move expensive or slow server-side code out of the way of the main rendering process, making it easy to combine high-performance static HTML and dynamic server-generated components.

Add the [`server:defer` directive](/en/reference/directives-reference/#server-directives) to any Astro component on your page to turn it into its own server island:

src/pages/index.astro

```astro
---
import Avatar from "../components/Avatar.astro";
---
<Avatar server:defer />
```

This breaks up your page with smaller areas of server-rendered content that each load in parallel.

Your page’s main content can be rendered immediately with placeholder content, such as a generic avatar until your island’s own content is available. With server islands, having small components of personalized content does not delay the rendering of an otherwise static page.

This rendering pattern was built to be portable. It does not depend on any server infrastructure so it will work with any host, from a Node.js server in a Docker container to the serverless provider of your choice.

### Benefits of server islands

One benefit of server islands is the ability to render the more highly dynamic parts of your page on the fly. This allows the outer shell and main content to be more aggressively cached, providing faster performance.

Another benefit is providing a great visitor experience. Server islands are optimized and load quickly, often even before the browser has even painted the page. But in the short time it takes for your islands to render, you can display custom fallback content and prevent any layout shift.

An example of a site that benefits from Astro’s server islands is an e-commerce storefront. Although the main content of product pages change infrequently, these pages typically have some dynamic pieces:

- The user’s avatar in the header.
- Special deals and sales for the product.
- User reviews.

Using server islands for these elements, your visitor will see the most important part of the page, your product, immediately. Generic avatars, loading spinners, and store announcements can be displayed as fallback content until the personalized parts are available.

Read more about [using server islands](/en/guides/server-islands/) in your project.
