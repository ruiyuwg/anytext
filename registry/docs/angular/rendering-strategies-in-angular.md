Skip to main content

menu

menuDocs

- Introduction

  - [What is Angular?](/overview)
  - [Installation](/installation)
  - Essentials
  - [Start coding! 🚀](/tutorials/learn-angular)

- In-depth Guides

  - Signals Updated
  - Components
  - Templates
  - Directives
  - Dependency Injection Updated
  - Routing Updated
  - Forms Updated
  - HTTP Client
  - Server-side & hybrid-rendering
  - Testing
  - Angular Aria New
  - Internationalization
  - Animations Updated
  - [Drag and drop](/guide/drag-drop)

- Build with AI New

  - [Get Started](/ai)
  - [LLM prompts and AI IDE setup](/ai/develop-with-ai)
  - [Design Patterns](/ai/design-patterns)
  - [Angular CLI MCP Server setup](/ai/mcp)
  - [Angular AI Tutor](/ai/ai-tutor)

- Developer Tools

  - Angular CLI
  - Libraries
  - DevTools
  - [Language Service](/tools/language-service)

- Best Practices

  - [Style Guide Updated](/style-guide)
  - [Security](/best-practices/security)
  - [Accessibility](/best-practices/a11y)
  - [Unhandled errors in Angular](/best-practices/error-handling)
  - Performance
  - [Keeping up-to-date](/update)

- Developer Events

  - [Angular v21 Release New](/events/v21)

- Extended Ecosystem

  - [NgModules](/guide/ngmodules/overview)
  - Legacy Animations
  - Using RxJS with Angular
  - Service Workers & PWAs
  - [Web workers](/ecosystem/web-workers)
  - [Custom build pipeline](/ecosystem/custom-build-pipeline)
  - [Tailwind New](/guide/tailwind)
  - [Angular Fire](https://github.com/angular/angularfire#readme)
  - [Google Maps](https://github.com/angular/components/tree/main/src/google-maps#readme)
  - [Google Pay](https://github.com/google-pay/google-pay-button#angular)
  - [YouTube player](https://github.com/angular/components/blob/main/src/youtube-player/README.md)
  - [Angular CDK](https://material.angular.dev/cdk/categories)
  - [Angular Material](https://material.angular.dev/)

- arrow\_back Routing Updated
  - [Overview](/guide/routing)
  - [Define routes](/guide/routing/define-routes)
  - [Route Loading Strategies](/guide/routing/loading-strategies)
  - [Show routes with Outlets](/guide/routing/show-routes-with-outlets)
  - [Navigate to routes](/guide/routing/navigate-to-routes)
  - [Read route state](/guide/routing/read-route-state)
  - [Redirecting routes](/guide/routing/redirecting-routes)
  - [Control route access with guards](/guide/routing/route-guards)
  - [Route data resolvers](/guide/routing/data-resolvers)
  - [Lifecycle and events](/guide/routing/lifecycle-and-events)
  - [Testing routing and navigation New](/guide/routing/testing)
  - [Other routing tasks](/guide/routing/common-router-tasks)
  - [Creating custom route matches](/guide/routing/routing-with-urlmatcher)
  - [Rendering strategies New](/guide/routing/rendering-strategies)
  - [Customizing route behavior New](/guide/routing/customizing-route-behavior)
  - [Router reference](/guide/routing/router-reference)
  - [Route transition animations](/guide/routing/route-transition-animations)

This guide helps you choose the right rendering strategy for different parts of your Angular application.

arrow\_upward\_alt Back to the top

## [What are rendering strategies?](#what-are-rendering-strategies)

Rendering strategies determine when and where your Angular application's HTML content is generated. Each strategy offers different trade-offs between initial page load performance, interactivity, SEO capabilities, and server resource usage.

Angular supports three primary rendering strategies:

- **Client-Side Rendering (CSR)** - Content is rendered entirely in the browser
- **Static Site Generation (SSG/Prerendering)** - Content is pre-rendered at build time
- **Server-Side Rendering (SSR)** - Content is rendered on the server for the initial request for a route

## [Client-Side Rendering (CSR)](#client-side-rendering-csr)

**CSR is Angular's default.** Content renders entirely in the browser after JavaScript loads.

### [When to use CSR](#when-to-use-csr)

✅ It can be a good fit for:

- Interactive applications (dashboards, admin panels)
- Real-time applications
- Internal tools where SEO doesn't matter
- Single-page applications with complex client-side state

❌ When possible, consider avoiding it for:

- Public-facing content that needs SEO
- Pages where initial load performance is critical

### [CSR trade-offs](#csr-trade-offs)

Aspect

Impact

**SEO**

Poor - content not visible to crawlers until JS executes

**Initial load**

Slower - must download and execute JavaScript first

**Interactivity**

Immediate once loaded

**Server needs**

Minimal outside of some configuration

**Complexity**

Simplest because it works with minimum configuration

## [Static Site Generation (SSG/Prerendering)](#static-site-generation-ssg-prerendering)

**SSG pre-renders pages at build time** into static HTML files. The server sends pre-built HTML for the initial page load. After hydration, your app runs entirely in the browser like a traditional SPA - subsequent navigation, route changes, and API calls all happen client-side without server rendering.

### [When to use SSG](#when-to-use-ssg)

✅ It can be a good fit for:

- Marketing pages and landing pages
- Blog posts and documentation
- Product catalogs with stable content
- Content that doesn't change per-user

❌ When possible, consider avoiding it for:

- User-specific content
- Frequently changing data
- Real-time information

### [SSG trade-offs](#ssg-trade-offs)

Aspect

Impact

**SEO**

Excellent - full HTML available immediately

**Initial load**

Fastest - pre-generated HTML

**Interactivity**

After hydration completes

**Server needs**

None for serving (CDN-friendly)

**Build time**

Longer - generates all pages upfront

**Content updates**

Requires rebuild and redeploy

📖 **Implementation:** See [Customizing build-time prerendering](guide/ssr#customizing-build-time-prerendering-ssg) in the SSR guide.

## [Server-Side Rendering (SSR)](#server-side-rendering-ssr)

**SSR generates HTML on the server for the initial request for a route**, providing dynamic content with good SEO. The server renders HTML and sends it to the client.

Once the client renders the page, Angular [hydrates](/guide/hydration#what-is-hydration) the app and it then runs entirely in the browser like a traditional SPA - subsequent navigation, route changes, and API calls all happen client-side without additional server rendering.

### [When to use SSR](#when-to-use-ssr)

✅ It can be a good fit for:

- E-commerce product pages (dynamic pricing/inventory)
- News sites and social media feeds
- Personalized content that changes frequently

❌ When possible, consider avoiding it for:

- Static content (use SSG instead)
- When server costs are a concern

### [SSR trade-offs](#ssr-trade-offs)

Aspect

Impact

**SEO**

Excellent - full HTML for crawlers

**Initial load**

Fast - immediate content visibility

**Interactivity**

Delayed until hydration

**Server needs**

Requires server

**Personalization**

Full access to user context

**Server costs**

Higher - renders on the initial request for a route

📖 **Implementation:** See [Server routing](guide/ssr#server-routing) and [Authoring server-compatible components](guide/ssr#authoring-server-compatible-components) in the SSR guide.

## [Choosing the Right Strategy](#choosing-the-right-strategy)

### [Decision matrix](#decision-matrix)

If you need...

Use this strategy

Why

**SEO + Static content**

SSG

Pre-rendered HTML, fastest load

**SEO + Dynamic content**

SSR

Fresh content on the initial request for a route

**No SEO + Interactivity**

CSR

Simplest, no server needed

**Mixed requirements**

Hybrid

Different strategies per route

## [Making SSR/SSG Interactive with Hydration](#making-ssr-ssg-interactive-with-hydration)

When using SSR or SSG, Angular "hydrates" the server-rendered HTML to make it interactive.

**Available strategies:**

- **Full hydration** - Entire app becomes interactive at once (default)
- **Incremental hydration** - Parts become interactive as needed (better performance)
- **Event replay** - Captures clicks before hydration completes

📖 **Learn more:**

- [Hydration guide](guide/hydration) - Complete hydration setup
- [Incremental hydration](guide/incremental-hydration) - Advanced hydration with `@defer` blocks

## [Next steps](#next-steps)
