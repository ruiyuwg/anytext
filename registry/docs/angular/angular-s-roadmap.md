Skip to main content

menu

menuAPI

- [Roadmap](/roadmap)
- [Get involved](https://github.com/angular/angular/blob/main/CONTRIBUTING.md)
- API Reference
- CLI Reference
- Error Encyclopedia
- Extended Diagnostics
- [Versioning and releases](/reference/releases)
- [Version compatibility](/reference/versions)
- [Update guide](/update-guide)
- Configurations
- Migrations

# Angular Roadmap

Learn how the Angular team is building momentum on the web.

As an open source project, Angular’s daily commits, PRs and momentum is all trackable on GitHub. To increase transparency into how this daily work connects to the framework’s future, our roadmap brings together the team’s current and future planned vision.

The following projects are not associated with a particular Angular version. We will release them on completion, and they will be part of a specific version based on our release schedule, following semantic versioning. For example, we release features in the next minor after completion or the next major if they include breaking changes.

Currently, Angular has three goals for the framework:

1. Improve the [AI experience for developers](/ai)
2. Improve the [Angular developer experience](#improving-the-angular-developer-experience)
3. Improve the framework’s performance

Continue reading to learn how we plan to deliver these objectives with specific project work.

arrow\_upward\_alt Back to the top

## [Explore modern Angular](#explore-modern-angular)

Start developing with the latest Angular features from our roadmap. This list represents the current status of new features from our roadmap:

### [Available to experiment with](#available-to-experiment-with)

- [Signal Forms](/guide/forms/signals/overview)
- [Resource API](/guide/signals/resource)
- [httpResource](/api/common/http/httpResource)

### [Production ready](#production-ready)

- [Zoneless change detection](/guide/zoneless)
- [Linked Signal API](/guide/signals/linked-signal)
- [Incremental hydration](/guide/incremental-hydration)
- [Effect API](/api/core/effect)
- [Event replay with SSR](/api/platform-browser/withEventReplay)
- [Route-level render mode](/guide/ssr)

## [Improving the AI experience for Angular Developers](#improving-the-ai-experience-for-angular-developers)

### [Bringing the best of AI to Angular](#bringing-the-best-of-ai-to-angular)

### AI Powered Angular

AI continues to shape the development landscape. It has changed how we develop apps and the types of user experiences that are possible. We plan to best support the developer community in AI-assisted coding and integrating AI in their applications.

### AI Development

The team will continue to develop meaningful integrations with tools like Google AI Studio, Gemini CLI and other agentic tooling such as Agentic IDEs like Antigravity. We plan to launch solutions that stay in line with the rapidly evolving industry. Some examples include agent skills, new MCP features and AI SDKs.

### Code Generation

[Based on our research](https://blog.angular.dev/beyond-the-horizon-how-angular-is-embracing-ai-for-next-gen-apps-7a7ed706e1a3), code generation for Angular is already high quality with modern LLMs. We will continue our investments in improving code generation for Angular. This means we will regularly evaluate code generation quality using current models and work to improve it through system instructions, documentation, and tactical framework changes. We also will continue investments in [Web Codegen Scorer](https://github.com/angular/web-codegen-scorer), our evaluation infrastructure.

### AI Powered Experiences

There is a new frontier for Angular developers to explore with new concepts such as Dynamic UI generation. We started with building Angular support for A2UI and are actively searching out more opportunities to support modern application experiences.

## [Improving the Angular developer experience](#improving-the-angular-developer-experience)

### [Developer velocity](#developer-velocity)

### Compiler

Microsoft has spent the last year porting the TypeScript compiler to Go, with the promise of a 5 - 10x speedup for typical TypeScript compilations. Angular has perhaps one of the deepest integrations with the TypeScript compiler, which will require bigger architectural changes to support new tsgo-based workflows for both the compiler and language service.

We're in the process of prototyping and exploring what this support would look like, and will deliver an Angular compiler that is compatible with tsgo and brings the performance benefits of Microsoft's native port to the Angular ecosystem.

### Enhanced Ecosystem compatibility

Developers are mixing AI generated code with manually generated code, and want to make use of popular libraries and integrate new experiences quickly. Angular wants to integrate well into that ecosystem - developers should be able to use the tools they love and mix and match frameworks according to their requirements.

As part of this project, we'll explore the requirement space of cross framework interop and our build tooling to improve our compatibility. We also want to see if we can contribute to this space by providing framework-agnostic solutions to open problems in the web ecosystem, similar to what we delivered with the [Web Codegen Scorer](https://github.com/angular/web-codegen-scorer) project.

\[

### Signal Forms

In Angular v21, we landed an experimental version of Signal Forms. This new approach allows developers to manage form state using signals, providing an ergonomic forms creation experience. Next, our plans include promoting Signal Forms to stable and enhancing interoperability with reactive forms - enabling teams to progressively migrate large forms at their own pace.

Learn more]\(/guide/forms/signals/overview)

### Reactivity

We introduced experimental signal APIs, resource() and httpResource(), for flexible asynchronous data handling. We plan to promote these APIs to developer preview/stable based on community feedback. We are also evaluating new APIs for unhandled use cases, considering community benefits and tradeoffs before implementation after careful consideration.

### Change Detection

With Zoneless being stable and default, we are also planning to shift the default change detection strategy to OnPush, to follow current best practices. [See the RFC discussion for details](https://github.com/angular/angular/discussions/66779).

### Components

In Angular v21, we launched Angular Aria in developer preview, providing eight patterns for accessible, headless components. We're planning to promote these patterns to stable and introduce new patterns where needed . We want to provide developers with a solid foundation for developing their own components using Angular Aria - we provide the interactions and you bring the style that matches your design systems. Developers will have the choice of developing custom components with Angular Aria, use interaction patterns from the CDK, or use ready-made styled Material Components.

For accessibility, we are continuously evaluating the components and patterns against accessibility standards such as WCAG and are working to fix any issues that arise from this process.

### [Improve tooling](#improve-tooling)

### Modernize unit testing tooling with ng test

Following the stable release of Vitest in Angular v21, it is now our primary test runner. We are now focused on promoting our experimental Karma to Vitest migration tool to stable as well as investigating new features to further refine and improve the developer testing workflow.

## [Completed projects](#completed-projects)

### Signal debugging in Angular DevTools

With the evolution of Signals in Angular, we are working on a better tooling for debugging them. High on the priority list is a UI for inspecting and debugging signals.

Completed in 2025

\[

### Improve HMR (Hot Module Reload)

We're working towards faster edit/refresh cycle by enabling hot module replacement.

In Angular v19 we shipped initial support for CSS and template HMR and in v20 we graduated template HMR to stable. We'll continue collecting feedback to make sure we're addressing developers' needs before we mark this project as complete.

Completed in 2025]\(https://github.com/angular/angular/issues/39367#issuecomment-1439537306)

### Zoneless Angular

In v18 we shipped experimental zoneless support in Angular. It enables developers to use the framework without including zone.js in their bundle, which improves performance, debugging experience, and interoperability. As part of the initial release we also introduced zoneless support to the Angular CDK and Angular Material.

```
In v19 we introduced zoneless support in server-side rendering, addressed some edge cases, and created a schematic to scaffold zoneless projects. We transitioned <a href="https://fonts.google.com/">Google Fonts</a> to zoneless which improved performance, developer experience, and allowed us to identify gaps that we need to address before moving this feature to developer preview.

As of Angular v20.2, Zoneless Angular is now stable and includes improvements in error handling and server-side rendering.
```

Completed in Q4 2025

### Server route configuration

We're working towards enabling a more ergonomic route configuration on the server. We want to make it trivial to declare which routes should be server-side rendered, prerendered or client-side rendered.

In Angular v19 we shipped developer preview of route-level render mode which allows you to granularly configure which routes you want Angular to prerender, server-side render or client-side render. In Angular v20 we graduated it to stable.

Completed in Q2 2025

### Enable incremental hydration

In v17 we graduated hydration from developer preview and we've been consistently observing 40-50% improvements in LCP. Since then we started prototyping incremental hydration and shared a demo on stage at ng-conf.

In v19 we shipped the incremental hydration in developer preview mode, powered by `@defer` blocks. In Angular v20 we graduated it to stable!

Completed in Q2 2025

\[

### Deliver Angular Signals

This project rethinks the Angular reactivity model by introducing Signals as a reactivity primitive. The initial planning resulted in hundreds of discussions, conversations with developers, feedback sessions, user experience studies, and a series of RFCs, which received over 1,000 comments.

In Angular v20 we graduated all the fundamental reactivity primitives to stable including signal, effect, linkedSignal, signal-based queries, and inputs.

Completed in Q2 2025]\(https://github.com/angular/angular/discussions/49685)\[

### Support two-dimensional drag-and-drop

As part of this project, we implemented mixed orientation support for the Angular CDK drag and drop. This is one of the repository's most highly requested features.

Completed in Q2 2024]\(https://github.com/angular/components/issues/13372)\[

### Event replay with SSR and prerendering

In v18 we introduced an event replay functionality when using server-side rendering or prerendering. For this feature we depend on the event dispatch primitive (previously known as jsaction) that is running on Google.com.

In Angular v19 we graduated event replay to stable and enabled it by default for all new projects.

Completed in Q4 2024]\(https://angular.dev/api/platform-browser/withEventReplay)

### Integrate Angular Language Service with Schematics

To make it easier for developers to use modern Angular APIs, we enabled integration between the Angular language service and schematics which allows you to refactor your app with a single click.

Completed in Q4 2024

### Streamline standalone imports with Language Service

As part of this initiative, the language service automatically imports components and pipes in standalone and NgModule-based apps. Additionally, we've added a template diagnostic to highlight unused imports in standalone components, which should help make application bundles smaller.

Completed in Q4 2024

### Local template variables

We've released the support for local template variables in Angular, see [`@let` docs](/api/core/@let) for additional information.

Completed in Q3 2024

\[

### Expand the customizability of Angular Material

To provide better customization of our Angular Material components and enable Material 3 capabilities, we'll be collaborating with Google's Material Design team on defining token-based theming APIs.

In v17.2 we shared experimental support for Angular Material 3 and in v18 we graduated it to stable.

Completed in Q2 2024]\(https://material.angular.dev/guide/theming)\[

### Introduce deferred loading

In v17 we shipped deferrable views in developer preview, which provide an ergonomic API for deferred code loading. In v18 we enabled deferrable views for library developers and graduated the API to stable.

Completed in Q2 2024]\(https://next.angular.dev/guide/templates/defer)

### iframe support in Angular DevTools

We enabled debugging and profiling of Angular apps embedded within an iframe on the page.

Completed in Q2 2024

\[

### Automation for transition of existing hybrid rendering projects to esbuild and vite

In v17 we shipped a vite and esbuild-based application builder and enabled it for new projects by default. It improves build time for projects using hybrid rendering with up to 87%. As part of v18 we shipped schematics and a guide that migrate existing projects using hybrid rendering to the new build pipeline.

Completed in Q2 2024]\(tools/cli/build-system-migration)\[

### Make Angular.dev the official home for Angular developers

Angular.dev is the new site, domain and home for Angular development. The new site contains updated documentation, tutorials and guidance that will help developers build with Angular’s latest features.

Completed in Q2 2024]\(https://goo.gle/angular-dot-dev)\[

### Introduce built-in control flow

In v17 we shipped a developer preview version of a new control flow. It brings significant performance improvements and better ergonomics for template authoring. We also provided a migration of existing `*ngIf`, `*ngFor`, and `*ngSwitch` which you can run to move your project to the new implementation. As of v18 the built-in control flow is now stable.

Completed in Q2 2024]\(https://next.angular.dev/essentials/conditionals-and-loops)

### Modernize getting started tutorial

Over the past two quarters, we developed a new [video](https://www.youtube.com/watch?v=xAT0lHYhHMY\&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF) and [textual](/tutorials/learn-angular) tutorial based on standalone components.

Completed Q4 2023

\[

### Investigate modern bundlers

In Angular v16, we released a developer preview of an esbuild-based builder with support for `ng build` and `ng serve`. The `ng serve` development server uses Vite and a multi-file compilation by esbuild and the Angular compiler. In v17 we graduated the build tooling from developer preview and enabled it by default for new projects.

Completed Q4 2023]\(guide/hydration)\[

### Introduce dependency injection debugging APIs

To improve the debugging utilities of Angular and Angular DevTools, we'll work on APIs that provide access to the dependency injection runtime. As part of the project, we'll expose debugging methods that allow us to explore the injector hierarchy and the dependencies across their associated providers. As of v17, we shipped a feature that enables us to plug into the dependency injection life-cycle. We also launched a visualization of the injector tree and inspection of the providers declared inside each individual node,

Completed Q4 2023]\(tools/devtools)\[

### Improve documentation and schematics for standalone components

We released a developer preview of the `ng new --standalone` schematics collection, allowing you to create apps free of NgModules. In v17 we switched the new application authoring format to standalone APIs and changed the documentation to reflect the recommendation. Additionally, we shipped schematics which support updating existing applications to standalone components, directives, and pipes. Even though NgModules will stick around for foreseeable future, we recommend you to explore the benefits of the new APIs to improve developer experience and benefit from the new features we build for them.

Completed Q4 2023]\(components)

### Explore hydration and server-side rendering improvements

In v16, we released a developer preview of non-destructive full hydration, see the [hydration guide](guide/hydration) and the [blog post](https://blog.angular.dev/whats-next-for-server-side-rendering-in-angular-2a6f27662b67) for additional information. We're already seeing significant improvements to Core Web Vitals, including [LCP](https://web.dev/lcp) and [CLS](https://web.dev/cls). In lab tests, we consistently observed 45% better LCP of a real-world app.

In v17 we launched hydration outside developer preview and did a series of improvements in the server-side rendering story, including: route discovery at runtime for SSG, up to 87% faster build times for hybrid rendered applications, prompt that enables hybrid rendering for new projects.

Completed Q4 2023

\[

### Non-destructive full app hydration

In v16, we released a developer preview of non-destructive full hydration, which allows Angular to reuse existing DOM nodes on a server-side rendered page, instead of re-creating an app from scratch. See additional information in the hydration guide.

Completed Q1 2023]\(guide/hydration)\[

### Improvements in the image directive

We released the Angular image directive as stable in v15. We introduced a new fill mode feature that enables images to fit within their parent container rather than having explicit dimensions. Over the past two months, the Chrome Aurora team backported the directive to v12 and newer.

Completed Q1 2023]\(guide/image-optimization)\[

### Documentation refactoring

Ensure all existing documentation fits into a consistent set of content types. Update excessive use of tutorial-style documentation into independent topics. We want to ensure the content outside the main tutorials is self-sufficient without being tightly coupled to a series of guides. In Q2 2022, we refactored the template content and dependency injection. In Q1 2023, we improved the HTTP guides, and with this, we're putting the documentation refactoring project on hold.

Completed Q1 2023]\(https://angular.io)\[

### Improve image performance

The Aurora and the Angular teams are working on the implementation of an image directive that aims to improve Core Web Vitals. We shipped a stable version of the image directive in v15.

Completed Q4 2022]\(guide/image-optimization)\[

### Modern CSS

The Web ecosystem evolves constantly and we want to reflect the latest modern standards in Angular. In this project we aim to provide guidelines on using modern CSS features in Angular to ensure developers follow best practices for layout, styling, etc. We shared official guidelines for layout and as part of the initiative stopped publishing flex layout.

Completed Q4 2022]\(https://blog.angular.dev/modern-css-in-angular-layouts-4a259dca9127)\[

### Support adding directives to host elements

A long-standing feature request is to add the ability to add directives to host elements. The feature lets developers augment their own components with additional behaviors without using inheritance. In v15 we shipped our directive composition API, which enables enhancing host elements with directives.

Completed Q4 2022]\(guide/directives/directive-composition-api)\[

### Better stack traces

The Angular and the Chrome DevTools are working together to enable more readable stack traces for error messages. In v15 we released improved relevant and linked stack traces. As a lower priority initiative, we'll be exploring how to make the stack traces friendlier by providing more accurate call frame names for templates.

Completed Q4 2022]\(https://developer.chrome.com/blog/devtools-better-angular-debugging/)\[

### Enhanced Angular Material components by integrating MDC Web

MDC Web is a library created by the Google Material Design team that provides reusable primitives for building Material Design components. The Angular team is incorporating these primitives into Angular Material. Using MDC Web aligns Angular Material more closely with the Material Design specification, expands accessibility, improves component quality, and improves the velocity of our team.

Completed Q4 2022]\(https://material.angular.dev/guide/mdc-migration)\[

### Implement APIs for optional NgModules

In the process of making Angular simpler, we are working on introducing APIs that allow developers to initialize apps, instantiate components, and use the router without NgModules. Angular v14 introduces developer preview of the APIs for standalone components, directives, and pipes. In the next few quarters we'll collect feedback from developers and finalize the project making the APIs stable. As the next step we will work on improving use cases such as TestBed, Angular elements, etc.

Completed Q4 2022]\(https://blog.angular.dev/angular-v15-is-now-available-df7be7f2f4c8)\[

### Allow binding to protected fields in templates

To improve the encapsulation of Angular components we enabled binding to protected members of the component instance. This way you'll no longer have to expose a field or a method as public to use it inside your templates.

Completed Q2 2022]\(guide/templates/binding)\[

### Publish guides on advanced concepts

Develop and publish an in-depth guide on change detection. Develop content for performance profiling of Angular apps. Cover how change detection interacts with Zone.js and explain when it gets triggered, how to profile its duration, as well as common practices for performance optimization.

Completed Q2 2022]\(https://angular.io/guide/change-detection)\[

### Rollout strict typings for @angular/forms

In Q4 2021 we designed a solution for introducing strict typings for forms and in Q1 2022 we concluded the corresponding request for comments. Currently, we are implementing a rollout strategy with an automated migration step that will enable the improvements for existing projects. We are first testing the solution with more than 2,500 projects at Google to ensure a smooth migration path for the external community.

Completed Q2 2022]\(guide/forms/typed-forms)\[

### Remove legacy View Engine

After the transition of all our internal tooling to Ivy is completed, we will remove the legacy View Engine for reduced Angular conceptual overhead, smaller package size, lower maintenance cost, and lower codebase complexity.

Completed Q1 2022]\(https://blog.angular.dev/angular-v15-is-now-available-df7be7f2f4c8)\[

### Simplified Angular mental model with optional NgModules

To simplify the Angular mental model and learning journey, we will be working on making NgModules optional. This work lets developers develop standalone components and implement an alternative API for declaring the compilation scope of the component. We kicked this project off with high-level design discussions that we captured in an RFC.

Completed Q1 2022]\(https://blog.angular.dev/angular-v15-is-now-available-df7be7f2f4c8)\[

### Design strict typing for @angular/forms

We will work on finding a way to implement stricter type checking for reactive forms with minimal backward incompatible implications. This way, we let developers catch more issues during development time, enable better text editor and IDE support, and improve the type checking for reactive forms.

Completed Q1 2022]\(guide/forms/typed-forms)\[

### Improve integration of Angular DevTools with framework

To improve the integration of Angular DevTools with the framework, we are working on moving the codebase to the angular/angular monorepository. This includes transitioning Angular DevTools to Bazel and integrating it into the existing processes and CI pipeline.

Completed Q1 2022]\(tools/devtools)\[

### Launch advanced compiler diagnostics

Extend the diagnostics of the Angular compiler outside type checking. Introduce other correctness and conformance checks to further guarantee correctness and best practices.

Completed Q1 2022]\(reference/extended-diagnostics)\[

### Update our e2e testing strategy

To ensure we provide a future-proof e2e testing strategy, we want to evaluate the state of Protractor, community innovations, e2e best practices, and explore novel opportunities. As first steps of the effort, we shared an RFC and worked with partners to ensure smooth integration between the Angular CLI and state-of-the-art tooling for e2e testing. As the next step, we need to finalize the recommendations and compile a list of resources for the transition.

Completed Q3 2021]\(guide/testing)\[

### Angular libraries use Ivy

Earlier in 2020, we shared an RFC for Ivy library distribution. After invaluable feedback from the community, we developed a design of the project. We are now investing in the development of Ivy library distribution, including an update of the library package format to use Ivy compilation, unblock the deprecation of the View Engine library format, and ngcc.

Completed Q3 2021]\(tools/libraries)\[

### Improve test times and debugging with automatic test environment tear down

To improve test time and create better isolation across tests, we want to change TestBed to automatically clean up and tear down the test environment after each test run.

Completed Q3 2021]\(guide/testing)\[

### Deprecate and remove IE11 support

Internet Explorer 11 (IE11) has been preventing Angular from taking advantage of some of the modern features of the Web platform. As part of this project we are going to deprecate and remove IE11 support to open the path for modern features that evergreen browsers provide. We ran an RFC to collect feedback from the community and decide on next steps to move forward.

Completed Q3 2021]\(https://github.com/angular/angular/issues/41840)\[

### Leverage ES2017+ as the default output language

Supporting modern browsers lets us take advantage of the more compact, expressive, and performant new syntax of JavaScript. As part of this project we will investigate what the blockers are to moving forward with this effort, and take the steps to enable it.

Completed Q3 2021]\(https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)\[

### Accelerated debugging and performance profiling with Angular DevTools

We are working on development tooling for Angular that provides utilities for debugging and performance profiling. This project aims to help developers understand the component structure and the change detection in an Angular app.

Completed Q2 2021]\(tools/devtools)\[

### Streamline releases with consolidated Angular versioning & branching

We want to consolidate release management tooling between the multiple GitHub repositories for Angular (angular/angular, angular/angular-cli, and angular/components). This effort lets us reuse infrastructure, unify and simplify processes, and improve the reliability of our release process.

Completed Q2 2021]\(reference/releases)\[

### Higher developer consistency with commit message standardization

We want to unify commit message requirements and conformance across Angular repositories (angular/angular, angular/components, and angular/angular-cli) to bring consistency to our development process and reuse infrastructure tooling.

Completed Q2 2021]\(https://github.com/angular/angular)\[

### Transition the Angular language service to Ivy

The goal of this project is to improve the experience and remove legacy dependency by transitioning the language service to Ivy. Today the language service still uses the View Engine compiler and type checking, even for Ivy apps. We want to use the Ivy template parser and improved type checking for the Angular Language service to match app behavior. This migration is also a step towards unblocking the removal of View Engine, which will simplify Angular, reduce the npm package size, and improve the maintainability of the framework.

Completed Q2 2021]\(tools/language-service)\[

### Increased security with native Trusted Types in Angular

In collaboration with the Google security team, we are adding support for the new Trusted Types API. This web platform API helps developers build more secure web apps.

Completed Q2 2021]\(best-practices/security)\[

### Optimized build speed and bundle sizes with Angular CLI webpack 5

As part of the v11 release, we introduced an opt-in preview of webpack 5 in the Angular CLI. To ensure stability, we will continue iterating on the implementation to enable build speed and bundle size improvements.

Completed Q2 2021]\(tools/cli/build)\[

### Faster apps by inlining critical styles in Universal apps

Loading external stylesheets is a blocking operation, which means that the browser cannot start rendering your app until it loads all the referenced CSS. Having render-blocking resources in the header of a page can significantly impact its load performance, for example, its first contentful paint. To make apps faster, we have been collaborating with the Google Chrome team on inlining critical CSS and loading the rest of the styles asynchronously.

Completed Q1 2021]\(guide/ssr)\[

### Improve debugging with better Angular error messages

Error messages often bring limited actionable information to help developers resolve them. We have been working on making error messages more discoverable by adding associated codes, developing guides, and other materials to ensure a smoother debugging experience.

Completed Q1 2021]\(reference/errors)\[

### Improved developer onboarding with refreshed introductory documentation

We will redefine the user learning journeys and refresh the introductory documentation. We will clearly state the benefits of Angular, how to explore its capabilities and provide guidance so developers can become proficient with the framework in as little time as possible.

Completed Q1 2021]\(tutorials)\[

### Expand component harnesses best practices

Angular CDK introduced the concept of component test harnesses to Angular in version 9. Test harnesses let component authors create supported APIs for testing component interactions. We are continuing to improve this harness infrastructure and clarifying the best practices around using harnesses. We are also working to drive more harness adoption inside of Google.

Completed Q1 2021]\(https://material.angular.dev/guide/using-component-harnesses)\[

### Author a guide for content projection

Content projection is a core Angular concept that does not have the presence it deserves in the documentation. As part of this project we want to identify the core use cases and concepts for content projection and document them.

Completed Q2 2021]\(https://angular.io/docs)\[

### Migrate to ESLint

With the deprecation of TSLint we will be moving to ESLint. As part of the process, we will work on ensuring backward compatibility with our current recommended TSLint configuration, implement a migration strategy for existing Angular apps and introduce new tooling to the Angular CLI toolchain.

Completed Q4 2020]\(tools/cli)\[

### Operation Bye Bye Backlog (also known as Operation Byelog)

We are actively investing up to 50% of our engineering capacity on triaging issues and PRs until we have a clear understanding of broader community needs. After that, we will commit up to 20% of our engineering capacity to keep up with new submissions promptly.

Completed Q4 2020]\(https://github.com/angular/angular/issues)
