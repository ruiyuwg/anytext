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

Just like Web and the entire web ecosystem, Angular is continuously improving. Angular balances continuous improvement with a strong focus on stability and making updates straightforward. Keeping your Angular application up-to-date enables you to take advantage of leading-edge new features, as well as optimizations and bug fixes.

This document contains information and resources to help you keep your Angular applications and libraries up-to-date.

For information about our versioning policy and practices —including support and deprecation practices, as well as the release schedule— see [Angular versioning and releases](reference/releases "Angular versioning and releases").

**HELPFUL:** If you are currently using AngularJS, see [Upgrading from AngularJS](https://angular.io/guide/upgrade "Upgrading from Angular JS"). *AngularJS* is the name for all v1.x versions of Angular.

arrow\_upward\_alt Back to the top

## [Getting notified of new releases](#getting-notified-of-new-releases)

To be notified when new releases are available, follow [@angular](https://x.com/angular "@angular on X") on X (formerly Twitter) or subscribe to the [Angular blog](https://blog.angular.dev "Angular blog").

## [Learning about new features](#learning-about-new-features)

What's new? What's changed? We share the most important things you need to know on the Angular blog in [release announcements](https://blog.angular.dev/ "Angular blog - release announcements").

To review a complete list of changes, organized by version, see the [Angular change log](https://github.com/angular/angular/blob/main/CHANGELOG.md "Angular change log").

## [Checking your version of Angular](#checking-your-version-of-angular)

To check your application's version of Angular use the `ng version` command from within your project directory.

## [Finding the current version of Angular](#finding-the-current-version-of-angular)

The most recent stable released version of Angular appears [on npm](https://www.npmjs.com/package/@angular/core "Angular on npm") under "Version." For example, `16.2.4`.

You can also find the most current version of Angular by using the CLI command [`ng update`](cli/update). By default, [`ng update`](cli/update)(without additional arguments) lists the updates that are available to you.

## [Updating your environment and apps](#updating-your-environment-and-apps)

To make updating uncomplicated, we provide complete instructions in the interactive [Angular Update Guide](update-guide).

The Angular Update Guide provides customized update instructions, based on the current and target versions that you specify. It includes basic and advanced update paths, to match the complexity of your applications. It also includes troubleshooting information and any recommended manual changes to help you get the most out of the new release.

For simple updates, the CLI command [`ng update`](cli/update) is all you need. Without additional arguments, [`ng update`](cli/update) lists the updates that are available to you and provides recommended steps to update your application to the most current version.

[Angular Versioning and Releases](reference/releases#angular-versioning "Angular Release Practices, Versioning") describes the level of change that you can expect based on a release's version number. It also describes supported update paths.

## [Resource summary](#resource-summary)

- Release announcements: [Angular blog - release announcements](https://blog.angular.dev/ "Angular blog announcements about recent releases")

- Release details: [Angular change log](https://github.com/angular/angular/blob/main/CHANGELOG.md "Angular change log")

- Update instructions: [Angular Update Guide](update-guide)

- Update command reference: [Angular CLI `ng update` command reference](cli/update)

- Versioning, release, support, and deprecation practices: [Angular versioning and releases](reference/releases "Angular versioning and releases")
