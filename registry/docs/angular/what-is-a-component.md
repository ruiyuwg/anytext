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

- arrow\_back Components
  - [Anatomy of components](/guide/components)
  - [Selectors](/guide/components/selectors)
  - [Styling](/guide/components/styling)
  - [Accepting data with input properties](/guide/components/inputs)
  - [Custom events with outputs](/guide/components/outputs)
  - [Content projection with ng-content](/guide/components/content-projection)
  - [Host elements](/guide/components/host-elements)
  - [Lifecycle](/guide/components/lifecycle)
  - [Referencing component children with queries](/guide/components/queries)
  - [Using DOM APIs](/guide/components/dom-apis)
  - [Inheritance](/guide/components/inheritance)
  - [Programmatically rendering components](/guide/components/programmatic-rendering)
  - [Advanced configuration](/guide/components/advanced-configuration)
  - [Custom Elements](/guide/elements)

In-depth Guides

Components

# Anatomy of a component

**TIP:** This guide assumes you've already read the [Essentials Guide](essentials). Read that first if you're new to Angular.

Every component must have:

- A TypeScript class with *behaviors* such as handling user input and fetching data from a server
- An HTML template that controls what renders into the DOM
- A [CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors) that defines how the component is used in HTML

You provide Angular-specific information for a component by adding a [`@Component`](/api/core/Component) [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) on top of the TypeScript class:

```
@Component({  selector: 'profile-photo',  template: `<img src="profile-photo.jpg" alt="Your profile photo" />`,})export class ProfilePhoto {}
```

For full details on writing Angular templates, including data binding, event handling, and control flow, see the [Templates guide](guide/templates).

The object passed to the [`@Component`](/api/core/Component) decorator is called the component's **metadata**. This includes the `selector`, `template`, and other properties described throughout this guide.

Components can optionally include a list of CSS styles that apply to that component's DOM:

```
@Component({  selector: 'profile-photo',  template: `<img src="profile-photo.jpg" alt="Your profile photo" />`,  styles: `    img {      border-radius: 50%;    }  `,})export class ProfilePhoto {}
```

By default, a component's styles only affect elements defined in that component's template. See [Styling Components](guide/components/styling) for details on Angular's approach to styling.

You can alternatively choose to write your template and styles in separate files:

```
@Component({  selector: 'profile-photo',  templateUrl: 'profile-photo.html',  styleUrl: 'profile-photo.css',})export class ProfilePhoto {}
```

This can help separate the concerns of *presentation* from *behavior* in your project. You can choose one approach for your entire project, or you decide which to use for each component.

Both `templateUrl` and `styleUrl` are relative to the directory in which the component resides.

arrow\_upward\_alt Back to the top

## [Using components](#using-components)

### [Imports in the `@Component` decorator](#imports-in-the-component-decorator)

To use a component, [directive](guide/directives), or [pipe](guide/templates/pipes), you must add it to the `imports` array in the [`@Component`](/api/core/Component) decorator:

```
import {ProfilePhoto} from './profile-photo';@Component({  // Import the `ProfilePhoto` component in  // order to use it in this component's template.  imports: [ProfilePhoto],  /* ... */})export class UserProfile {}
```

By default, Angular components are *standalone*, meaning that you can directly add them to the `imports` array of other components. Components created with an earlier version of Angular may instead specify `standalone: false` in their [`@Component`](/api/core/Component) decorator. For these components, you instead import the [`NgModule`](/api/core/NgModule) in which the component is defined. See the full [](guide/ngmodules/overview)[`NgModule`](/api/core/NgModule) guide for details.

Important: In Angular versions before 19.0.0, the `standalone` option defaults to `false`.

### [Showing components in a template](#showing-components-in-a-template)

Every component defines a [CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors):

```
@Component({  selector: 'profile-photo',  ...})export class ProfilePhoto { }
```

See [Component Selectors](guide/components/selectors) for details about which types of selectors Angular supports and guidance on choosing a selector.

You show a component by creating a matching HTML element in the template of *other* components:

```
@Component({  selector: 'profile-photo',})export class ProfilePhoto {}@Component({  imports: [ProfilePhoto],  template: `<profile-photo />`,})export class UserProfile {}
```

Angular creates an instance of the component for every matching HTML element it encounters. The DOM element that matches a component's selector is referred to as that component's **host element**. The contents of a component's template are rendered inside its host element.

The DOM rendered by a component, corresponding to that component's template, is called that component's **view**.

In composing components in this way, **you can think of your Angular application as a tree of components**.

AccountSettings

UserProfile

PaymentInfo

ProfilePic

UserBio

This tree structure is important to understanding several other Angular concepts, including [dependency injection](guide/di) and [child queries](guide/components/queries).
