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

arrow\_upward\_alt Back to the top

## [Introduction](#introduction)

This guide covers a range of style conventions for Angular application code. These recommendations are not required for Angular to work, but instead establish a set of coding practices that promote consistency across the Angular ecosystem. A consistent set of practices makes it easier to share code and move between projects.

This guide does *not* cover TypeScript or general coding practices unrelated to Angular. For TypeScript, check out [Google's TypeScript style guide](https://google.github.io/styleguide/tsguide.html).

### [When in doubt, prefer consistency](#when-in-doubt-prefer-consistency)

Whenever you encounter a situation in which these rules contradict the style of a particular file, prioritize maintaining consistency within a file. Mixing different style conventions in a single file creates more confusion than diverging from the recommendations in this guide.

## [Naming](#naming)

### [Separate words in file names with hyphens](#separate-words-in-file-names-with-hyphens)

Separate words within a file name with hyphens (`-`). For example, a component named `UserProfile` has a file name `user-profile.ts`.

### [Use the same name for a file's tests with `.spec` at the end](#use-the-same-name-for-a-files-tests-with-spec-at-the-end)

For unit tests, end file names with `.spec.ts`. For example, the unit test file for the `UserProfile` component has the file name `user-profile.spec.ts`.

### [Match file names to the TypeScript identifier within](#match-file-names-to-the-typescript-identifier-within)

File names should generally describe the contents of the code in the file. When the file contains a TypeScript class, the file name should reflect that class name. For example, a file containing a component named `UserProfile` has the name `user-profile.ts`.

If the file contains more than one primary namable identifier, choose a name that describes the common theme to the code within. If the code in a file does not fit within a common theme or feature area, consider breaking the code up into different files. Avoid overly generic file names like `helpers.ts`, `utils.ts`, or `common.ts`.

### [Use the same file name for a component's TypeScript, template, and styles](#use-the-same-file-name-for-a-components-typescript-template-and-styles)

Components typically consist of one TypeScript file, one template file, and one style file. These files should share the same name with different file extensions. For example, a `UserProfile` component can have the files `user-profile.ts`, `user-profile.html`, and `user-profile.css`.

If a component has more than one style file, append the name with additional words that describe the styles specific to that file. For example, `UserProfile` might have style files `user-profile-settings.css` and `user-profile-subscription.css`.

## [Project structure](#project-structure)

### [All the application's code goes in a directory named `src`](#all-the-applications-code-goes-in-a-directory-named-src)

All of your Angular UI code (TypeScript, HTML, and styles) should live inside a directory named `src`. Code that's not related to UI, such as configuration files or scripts, should live outside the `src` directory.

This keeps the root application directory consistent between different Angular projects and creates a clear separation between UI code and other code in your project.

### [Bootstrap your application in a file named `main.ts` directly inside `src`](#bootstrap-your-application-in-a-file-named-maints-directly-inside-src)

The code to start up, or **bootstrap**, an Angular application should always live in a file named `main.ts`. This represents the primary entry point to the application.

### [Group closely related files together in the same directory](#group-closely-related-files-together-in-the-same-directory)

Angular components consist of a TypeScript file and, optionally, a template and one or more style files. You should group these together in the same directory.

Unit tests should live in the same directory as the code-under-test. Avoid collecting unrelated tests into a single `tests` directory.

### [Organize your project by feature areas](#organize-your-project-by-feature-areas)

Organize your project into subdirectories based on the features of your application or common themes to the code in those directories. For example, the project structure for a movie theater site, MovieReel, might look like this:

```
src/├─ movie-reel/│ ├─ show-times/│ │ ├─ film-calendar/│ │ ├─ film-details/│ ├─ reserve-tickets/│ │ ├─ payment-info/│ │ ├─ purchase-confirmation/
```

Avoid creating subdirectories based on the type of code that lives in those directories. For example, avoid creating directories like `components`, `directives`, and `services`.

Avoid putting so many files into one directory that it becomes hard to read or navigate. As the number of files in a directory grows, consider splitting further into additional sub-directories.

### [One concept per file](#one-concept-per-file)

Prefer focusing source files on a single *concept*. For Angular classes specifically, this usually means one component, directive, or service per file. However, it's okay if a file contains more than one component or directive if your classes are relatively small and they tie together as part of a single concept.

When in doubt, go with the approach that leads to smaller files.

## [Dependency injection](#dependency-injection)

### [Prefer the `inject` function over constructor parameter injection](#prefer-the-inject-function-over-constructor-parameter-injection)

Prefer using the [`inject`](/api/core/inject) function over injecting constructor parameters. The [`inject`](/api/core/inject) function works the same way as constructor parameter injection, but offers several style advantages:

- [`inject`](/api/core/inject) is generally more readable, especially when a class injects many dependencies.
- It's more syntactically straightforward to add comments to injected dependencies
- [`inject`](/api/core/inject) offers better type inference.
- When targeting ES2022+ with [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig/#useDefineForClassFields), you can avoid separating field declaration and initialization when fields read on injected dependencies.

[You can refactor existing code to `inject` with an automatic tool](reference/migrations/inject-function).

## [Components and directives](#components-and-directives)

### [Choosing component selectors](#choosing-component-selectors)

See the [Components guide for details on choosing component selectors](guide/components/selectors#choosing-a-selector).

### [Naming component and directive members](#naming-component-and-directive-members)

See the Components guide for details on [naming input properties](guide/components/inputs#choosing-input-names) and [naming output properties](guide/components/outputs#choosing-event-names).

### [Choosing directive selectors](#choosing-directive-selectors)

Directives should use the same [application-specific prefix](guide/components/selectors#selector-prefixes) as your components.

When using an attribute selector for a directive, use a camelCase attribute name. For example, if your application is named "MovieReel" and you build a directive that adds a tooltip to an element, you might use the selector `[mrTooltip]`.

### [Group Angular-specific properties before methods](#group-angular-specific-properties-before-methods)

Components and directives should group Angular-specific properties together, typically near the top of the class declaration. This includes injected dependencies, inputs, outputs, and queries. Define these and other properties before the class's methods.

This practice makes it easier to find the class's template APIs and dependencies.

### [Keep components and directives focused on presentation](#keep-components-and-directives-focused-on-presentation)

Code inside your components and directives should generally relate to the UI shown on the page. For code that makes sense on its own, decoupled from the UI, prefer refactoring to other files. For example, you can factor form validation rules or data transformations into separate functions or classes.

### [Avoid overly complex logic in templates](#avoid-overly-complex-logic-in-templates)

Angular templates are designed to accommodate [JavaScript-like expressions](guide/templates/expression-syntax). You should take advantage of these expressions to capture relatively straightforward logic directly in template expressions.

When the code in a template gets too complex, though, refactor logic into the TypeScript code (typically with a [computed](guide/signals#computed-signals)).

There's no one hard-and-fast rule that determines what constitutes "complex". Use your best judgement.

### [Use `protected` on class members that are only used by a component's template](#use-protected-on-class-members-that-are-only-used-by-a-components-template)

A component class's public members intrinsically define a public API that's accessible via dependency injection and [queries](guide/components/queries). Prefer `protected` access for any members that are meant to be read from the component's template.

```
@Component({  ...,  template: `<p>{{ fullName() }}</p>`,})export class UserProfile {  firstName = input();  lastName = input();// `fullName` is not part of the component's public API, but is used in the template.  protected fullName = computed(() => `${this.firstName()} ${this.lastName()}`);}
```

### [Use `readonly` for properties that shouldn't change](#use-readonly-for-properties-that-shouldnt-change)

Mark component and directive properties initialized by Angular as `readonly`. This includes properties initialized by `input`, [`model`](/api/core/model), [`output`](/api/core/output), and queries. The readonly access modifier ensures that the value set by Angular is not overwritten.

```
@Component({  /*...*/})export class UserProfile {  readonly userId = input();  readonly userSaved = output();  readonly userName = model();}
```

For components and directives that use the decorator-based [`@Input`](/api/core/Input), [`@Output`](/api/core/Output), and query APIs, this advice applies to output properties and queries, but not input properties.

```
@Component({  /*...*/})export class UserProfile {  @Output() readonly userSaved = new EventEmitter<void>();  @ViewChildren(PaymentMethod) readonly paymentMethods?: QueryList<PaymentMethod>;}
```

### [Prefer `class` and `style` over `ngClass` and `ngStyle`](#prefer-class-and-style-over-ngclass-and-ngstyle)

Prefer `class` and `style` bindings over using the [](/api/common/NgClass)[`NgClass`](/api/common/NgClass) and [](/api/common/NgStyle)[`NgStyle`](/api/common/NgStyle) directives.

Prefer

```
<div [class.admin]="isAdmin" [class.dense]="density === 'high'">  <div [style.color]="textColor" [style.background-color]="backgroundColor">    <!-- OR -->    <div [class]="{admin: isAdmin, dense: density === 'high'}">      <div [style]="{'color': textColor, 'background-color': backgroundColor}"></div>    </div>  </div></div>
```

Avoid

```
<div [ngClass]="{admin: isAdmin, dense: density === 'high'}">  <div [ngStyle]="{'color': textColor, 'background-color': backgroundColor}"></div></div>
```

Both `class` and `style` bindings use a more straightforward syntax that aligns closely with standard HTML attributes. This makes your templates easier to read and understand, especially for developers familiar with basic HTML.

Additionally, the [`NgClass`](/api/common/NgClass) and [`NgStyle`](/api/common/NgStyle) directives incur an additional performance cost compared to the built-in `class` and `style` binding syntax.

For more details, refer to the [bindings guide](/guide/templates/binding#css-class-and-style-property-bindings)

### [Name event handlers for what they *do*, not for the triggering event](#name-event-handlers-for-what-they-do-not-for-the-triggering-event)

Prefer naming event handlers for the action they perform rather than for the triggering event:

Prefer

```
<button (click)="saveUserData()">Save</button>
```

Avoid

```
<button (click)="handleClick()">Save</button>
```

Using meaningful names like this makes it easier to tell what an event does from reading the template.

For keyboard events, you can use Angular's key event modifiers with specific handler names:

```
<textarea (keydown.control.enter)="commitNotes()" (keydown.control.space)="showSuggestions()">
```

Sometimes, event handling logic is especially long or complex, making it impractical to declare a single well-named handler. In these cases, it's fine to fall back to a name like 'handleKeydown' and then delegate to more specific behaviors based on the event details:

```
@Component({  /*...*/})class RichText {  handleKeydown(event: KeyboardEvent) {    if (event.ctrlKey) {      if (event.key === 'B') {        this.activateBold();      } else if (event.key === 'I') {        this.activateItalic();      }      // ...    }  }}
```

### [Keep lifecycle methods simple](#keep-lifecycle-methods-simple)

Avoid putting long or complex logic inside lifecycle hooks like `ngOnInit`. Instead, prefer creating well-named methods to contain that logic and then *call those methods* in your lifecycle hooks. Lifecycle hook names describe *when* they run, meaning that the code inside doesn't have a meaningful name that describes what the code inside is doing.

Prefer

```
ngOnInit() {  this.startLogging();  this.runBackgroundTask();}
```

Avoid

```
ngOnInit() {  this.logger.setMode('info');  this.logger.monitorErrors();  // ...and all the rest of the code that would be unrolled from these methods.}
```

### [Use lifecycle hook interfaces](#use-lifecycle-hook-interfaces)

Angular provides a TypeScript interface for each lifecycle method. When adding a lifecycle hook to your class, import and `implement` these interfaces to ensure that the methods are named correctly.

```
import {Component, OnInit} from '@angular/core';@Component({  /*...*/})export class UserProfile implements OnInit {  // The `OnInit` interface ensures this method is named correctly.  ngOnInit() {    /* ... */  }}
```
