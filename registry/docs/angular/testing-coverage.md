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

- arrow\_back Testing
  - [Overview](/guide/testing)
  - [Basics of testing components](/guide/testing/components-basics)
  - [Component testing scenarios](/guide/testing/components-scenarios)
  - [Testing services](/guide/testing/services)
  - [Testing attribute directives](/guide/testing/attribute-directives)
  - [Testing pipes](/guide/testing/pipes)
  - [Testing routing and navigation New](/guide/routing/testing)
  - [Debugging tests](/guide/testing/debugging)
  - [Code coverage](/guide/testing/code-coverage)
  - [Testing utility APIs](/guide/testing/utility-apis)
  - [Component harnesses overview](/guide/testing/component-harnesses-overview)
  - [Using component harnesses in tests](/guide/testing/using-component-harnesses)
  - [Creating harnesses for your components](/guide/testing/creating-component-harnesses)
  - [Adding harness support for additional testing environments](/guide/testing/component-harnesses-testing-environments)
  - [Migrating from Karma to Vitest](/guide/testing/migrating-to-vitest)
  - [Testing with Karma and Jasmine](/guide/testing/karma)
  - [Zone.js Testing Utilities](/guide/testing/zone-js-testing-utilities)

Code coverage reports show you any parts of your code base that might not be properly tested by your unit tests.

arrow\_upward\_alt Back to the top

## [Prerequisites](#prerequisites)

To generate code coverage reports with Vitest, you must install the `@vitest/coverage-v8` package:

### npm

```
npm install --save-dev @vitest/coverage-v8
```

### yarn

```
yarn add --dev @vitest/coverage-v8
```

### pnpm

```
pnpm add -D @vitest/coverage-v8
```

### bun

```
bun add --dev @vitest/coverage-v8
```

## [Generating a report](#generating-a-report)

To generate a coverage report, add the `--coverage` flag to the `ng test` command:

```
ng test --coverage
```

After the tests run, the command creates a new `coverage/` directory in the project. Open the `index.html` file to see a report with your source code and code coverage values.

If you want to create code-coverage reports every time you test, you can set the `coverage` option to `true` in your `angular.json` file:

```
{  "projects": {    "your-project-name": {      "architect": {        "test": {          "builder": "@angular/build:unit-test",          "options": {            "coverage": true          }        }      }    }  }}
```

## [Enforcing code coverage thresholds](#enforcing-code-coverage-thresholds)

The code coverage percentages let you estimate how much of your code is tested. If your team decides on a minimum amount to be unit tested, you can enforce this minimum in your configuration.

For example, suppose you want the code base to have a minimum of 80% code coverage. To enable this, add the `coverageThresholds` option to your `angular.json` file:

```
{  "projects": {    "your-project-name": {      "architect": {        "test": {          "builder": "@angular/build:unit-test",          "options": {            "coverage": true,            "coverageThresholds": {              "statements": 80,              "branches": 80,              "functions": 80,              "lines": 80            }          }        }      }    }  }}
```

Now, if your coverage drops below 80% when you run your tests, the command will fail.

## [Advanced configuration](#advanced-configuration)

You can configure several other coverage options in your `angular.json` file:

- `coverageInclude`: Glob patterns of files to include in the coverage report.
- `coverageExclude`: Glob patterns of files to exclude in the coverage report.
- `coverageReporters`: An array of reporters to use (e.g., `html`, `lcov`, `json`).
- `coverageWatermarks`: An object specifying `[low, high]` watermarks for the HTML reporter, which can affect the color-coding of the report.

```
{  "projects": {    "your-project-name": {      "architect": {        "test": {          "builder": "@angular/build:unit-test",          "options": {            "coverage": true,            "coverageReporters": ["html", "lcov"],            "coverageWatermarks": {              "statements": [50, 80],              "branches": [50, 80],              "functions": [50, 80],              "lines": [50, 80]            }          }        }      }    }  }}
```
