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

- arrow\_back Angular CLI
  - [Overview](/tools/cli)
  - [Local set-up](/tools/cli/setup-local)
  - [Building Angular apps](/tools/cli/build)
  - [Serving Angular apps for development](/tools/cli/serve)
  - [Deployment](/tools/cli/deployment)
  - [End-to-End Testing](/tools/cli/end-to-end)
  - [Migrating to new build system](/tools/cli/build-system-migration)
  - [Build environments](/tools/cli/environments)
  - [Angular CLI builders](/tools/cli/cli-builder)
  - [Generating code using schematics](/tools/cli/schematics)
  - [Authoring schematics](/tools/cli/schematics-authoring)
  - [Schematics for libraries](/tools/cli/schematics-for-libraries)
  - [Template type checking](/tools/cli/template-typecheck)
  - [Ahead-of-time (AOT) compilation](/tools/cli/aot-compiler)
  - [AOT metadata errors](/tools/cli/aot-metadata-errors)

The Angular CLI is a command-line interface tool which allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

Angular CLI is published on npm as the `@angular/cli` package and includes a binary named `ng`. Commands invoking `ng` are using the Angular CLI.

### Try Angular without local setup

If you are new to Angular, you might want to start with [Try it now!](tutorials/learn-angular), which introduces the essentials of Angular in the context of a ready-made basic online store app for you to examine and modify. This standalone tutorial takes advantage of the interactive [StackBlitz](https://stackblitz.com) environment for online development. You don't need to set up your local environment until you're ready.

\[

### Getting Started

Install Angular CLI to create and build your first app.

Get Started]\(tools/cli/setup-local)\[

### Command Reference

Discover CLI commands to make you more productive with Angular.

Learn More]\(cli)\[

### Schematics

Create and run schematics to generate and modify source files in your application automatically.

Learn More]\(tools/cli/schematics)\[

### Builders

Create and run builders to perform complex transformations from your source code to generated build outputs.

Learn More]\(tools/cli/cli-builder)

arrow\_upward\_alt Back to the top

## [CLI command-language syntax](#cli-command-language-syntax)

Angular CLI roughly follows Unix/POSIX conventions for option syntax.

### [Boolean options](#boolean-options)

Boolean options have two forms: `--this-option` sets the flag to `true`, `--no-this-option` sets it to `false`. You can also use `--this-option=false` or `--this-option=true`. If neither option is supplied, the flag remains in its default state, as listed in the reference documentation.

### [Array options](#array-options)

Array options can be provided in two forms: `--option value1 value2` or `--option value1 --option value2`.

### [Key/value options](#key-value-options)

Some options like `--define` expect an array of `key=value` pairs as their values. Just like array options, key/value options can be provided in two forms: `--define 'KEY_1="value1"' KEY_2=true` or `--define 'KEY_1="value1"' --define KEY_2=true`.

### [Relative paths](#relative-paths)

Options that specify files can be given as absolute paths, or as paths relative to the current working directory, which is generally either the workspace or project root.
