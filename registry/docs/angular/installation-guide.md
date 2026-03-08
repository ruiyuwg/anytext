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

Introduction

# Installation

Get started with Angular quickly with online starters or locally with your terminal.

arrow\_upward\_alt Back to the top

## [Play Online](#play-online)

If you just want to play around with Angular in your browser without setting up a project, you can use our online sandbox:

\[

The fastest way to play with an Angular app. No setup required.

Open on Playground]\(/playground)

## [Set up a new project locally](#set-up-a-new-project-locally)

If you're starting a new project, you'll most likely want to create a local project so that you can use tooling such as Git.

### [Prerequisites](#prerequisites)

- **Node.js** - [v20.19.0 or newer](/reference/versions)
- **Text editor** - We recommend [Visual Studio Code](https://code.visualstudio.com/)
- **Terminal** - Required for running Angular CLI commands
- **Development Tool** - To improve your development workflow, we recommend the [Angular Language Service](/tools/language-service)

### [Instructions](#instructions)

The following guide will walk you through setting up a local Angular project.

#### [Install Angular CLI](#install-angular-cli)

Open a terminal (if you're using [Visual Studio Code](https://code.visualstudio.com/), you can open an [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)) and run the following command:

### npm

```
npm install -g @angular/cli
```

### pnpm

```
pnpm install -g @angular/cli
```

### yarn

```
yarn global add @angular/cli
```

### bun

```
bun install -g @angular/cli
```

If you are having issues running this command in Windows or Unix, check out the [CLI docs](/tools/cli/setup-local#install-the-angular-cli) for more info.

#### [Create a new project](#create-a-new-project)

In your terminal, run the CLI command `ng new` with the desired project name. In the following examples, we'll be using the example project name of `my-first-angular-app`.

```
ng new <project-name>
```

You will be presented with some configuration options for your project. Use the arrow and enter keys to navigate and select which options you desire.

If you don't have any preferences, just hit the enter key to take the default options and continue with the setup.

After you select the configuration options and the CLI runs through the setup, you should see the following message:

```
✔ Packages installed successfully.    Successfully initialized git.
```

At this point, you're now ready to run your project locally!

#### [Running your new project locally](#running-your-new-project-locally)

In your terminal, switch to your new Angular project.

```
cd my-first-angular-app
```

All of your dependencies should be installed at this point (which you can verify by checking for the existence of a `node_modules` folder in your project), so you can start your project by running the command:

```
npm start
```

If everything is successful, you should see a similar confirmation message in your terminal:

```
Watch mode enabled. Watching for file changes...NOTE: Raw file sizes do not reflect development server per-request transformations.  ➜  Local:   http://localhost:4200/  ➜  press h + enter to show help
```

And now you can visit the path in `Local` (e.g., `http://localhost:4200`) to see your application. Happy coding! 🎉

### [Using AI for Development](#using-ai-for-development)

To get started with building in your preferred AI powered IDE, [check out Angular prompt rules and best practices](/ai/develop-with-ai).

## [Next steps](#next-steps)

Now that you've created your Angular project, you can learn more about Angular in our [Essentials guide](/essentials) or choose a topic in our in-depth guides!
