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

- arrow\_back Directives
  - [Overview](/guide/directives)
  - [Attribute directives](/guide/directives/attribute-directives)
  - [Structural directives](/guide/directives/structural-directives)
  - [Directive composition API](/guide/directives/directive-composition-api)
  - [Optimizing images with NgOptimizedImage](/guide/image-optimization)

In-depth Guides

Directives

# Built-in directives

Directives are classes that add additional behavior to elements in your Angular applications.

Use Angular's built-in directives to manage forms, lists, styles, and what users see.

The different types of Angular directives are as follows:

Directive Types

Details

[Components](guide/components)

Used with a template. This type of directive is the most common directive type.

[Attribute directives](#built-in-attribute-directives)

Change the appearance or behavior of an element, component, or another directive.

[Structural directives](/guide/directives/structural-directives)

Change the DOM layout by adding and removing DOM elements.

This guide covers built-in [attribute directives](#built-in-attribute-directives).

arrow\_upward\_alt Back to the top

## [Built-in attribute directives](#built-in-attribute-directives)

Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.

The most common attribute directives are as follows:

Common directives

Details

[](#adding-and-removing-classes-with-ngclass)[`NgClass`](/api/common/NgClass)

Adds and removes a set of CSS classes.

[](#setting-inline-styles-with-ngstyle)[`NgStyle`](/api/common/NgStyle)

Adds and removes a set of HTML styles.

[](guide/forms/template-driven-forms)[`NgModel`](/api/forms/NgModel)

Adds two-way data binding to an HTML form element.

**HELPFUL:** Built-in directives use only public APIs. They do not have special access to any private APIs that other directives can't access.

## [Adding and removing classes with `NgClass`](#adding-and-removing-classes-with-ngclass)

Add or remove multiple CSS classes simultaneously with [`ngClass`](/api/common/NgClass).

**HELPFUL:** To add or remove a *single* class, use [class binding](/guide/templates/binding#css-class-and-style-property-bindings) rather than [`NgClass`](/api/common/NgClass).

### [Import `NgClass` in the component](#import-ngclass-in-the-component)

To use [`NgClass`](/api/common/NgClass), add it to the component's `imports` list.

```
import {NgClass} from '@angular/common';@Component({  /* ... */  imports: [NgClass],})export class AppComponent {}
```

### [Using `NgClass` with an expression](#using-ngclass-with-an-expression)

On the element you'd like to style, add `[ngClass]` and set it equal to an expression. In this case, `isSpecial` is a boolean set to `true` in `app.component.ts`. Because `isSpecial` is true, [`ngClass`](/api/common/NgClass) applies the class of `special` to the `<div>`.

### app.component.html

```
<!-- toggle the "special" class on/off with a property --><div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
```

### [Using `NgClass` with a method](#using-ngclass-with-a-method)

1. To use [`NgClass`](/api/common/NgClass) with a method, add the method to the component class. In the following example, `setCurrentClasses()` sets the property `currentClasses` with an object that adds or removes three classes based on the `true` or `false` state of three other component properties.

   Each key of the object is a CSS class name. If a key is `true`, [`ngClass`](/api/common/NgClass) adds the class. If a key is `false`, [`ngClass`](/api/common/NgClass) removes the class.

   ### app.component.ts

   ```
   currentClasses: Record<string, boolean> = {};  /* . . . */  setCurrentClasses() {    // CSS classes: added/removed per current state of component properties    this.currentClasses = {      saveable: this.canSave,      modified: !this.isUnchanged,      special: this.isSpecial,    };  }
   ```

2. In the template, add the [`ngClass`](/api/common/NgClass) property binding to `currentClasses` to set the element's classes:

   ### app.component.html

   ```
   This div is initially saveable, unchanged, and special.
   ```

For this use case, Angular applies the classes on initialization and in case of changes caused by reassigning the `currentClasses` object. The full example calls `setCurrentClasses()` initially with `ngOnInit()` when the user clicks on the `Refresh currentClasses` button. These steps are not necessary to implement [`ngClass`](/api/common/NgClass).

## [Setting inline styles with `NgStyle`](#setting-inline-styles-with-ngstyle)

**HELPFUL:** To add or remove a *single* style, use [style bindings](guide/templates/binding#css-class-and-style-property-bindings) rather than [`NgStyle`](/api/common/NgStyle).

### [Import `NgStyle` in the component](#import-ngstyle-in-the-component)

To use [`NgStyle`](/api/common/NgStyle), add it to the component's `imports` list.

```
import {NgStyle} from '@angular/common';@Component({  /* ... */  imports: [NgStyle],})export class AppComponent {}
```

Use [`NgStyle`](/api/common/NgStyle) to set multiple inline styles simultaneously, based on the state of the component.

1. To use [`NgStyle`](/api/common/NgStyle), add a method to the component class.

   In the following example, `setCurrentStyles()` sets the property `currentStyles` with an object that defines three styles, based on the state of three other component properties.

   ### app.component.ts

   ```
   currentStyles: Record<string, string> = {};  /* . . . */  setCurrentStyles() {    // CSS styles: set per current state of component properties    this.currentStyles = {      'font-style': this.canSave ? 'italic' : 'normal',      'font-weight': !this.isUnchanged ? 'bold' : 'normal',      'font-size': this.isSpecial ? '24px' : '12px',    };  }
   ```

2. To set the element's styles, add an [`ngStyle`](/api/common/NgStyle) property binding to `currentStyles`.

   ### app.component.html

   ```
     This div is initially italic, normal weight, and extra large (24px).
   ```

For this use case, Angular applies the styles upon initialization and in case of changes. To do this, the full example calls `setCurrentStyles()` initially with `ngOnInit()` and when the dependent properties change through a button click. However, these steps are not necessary to implement [`ngStyle`](/api/common/NgStyle) on its own.

## [Hosting a directive without a DOM element](#hosting-a-directive-without-a-dom-element)

The Angular `<ng-container>` is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.

Use `<ng-container>` when there's no single element to host the directive.

Here's a conditional paragraph using `<ng-container>`.

### app.component.html (ngif-ngcontainer)

```
<p>  I turned the corner  <ng-container *ngIf="hero"> and saw {{ hero.name }}. I waved </ng-container>  and continued on my way.</p>
```

![ngcontainer paragraph with proper style](assets/images/guide/structural-directives/good-paragraph.png)

1. Import the [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) directive from [`FormsModule`](/api/forms/FormsModule).

2. Add [`FormsModule`](/api/forms/FormsModule) to the imports section of the relevant Angular module.

3. To conditionally exclude an `<option>`, wrap the `<option>` in an `<ng-container>`.

   ### app.component.html (select-ngcontainer)

   ```
     Pick your favorite hero (show sad)  <ng-container *ngFor="let h of heroes">    <ng-container *ngIf="showSad || h.emotion !== 'sad'">      {{ h.name }} ({{ h.emotion }})    </ng-container>  </ng-container>
   ```

   ![ngcontainer options work properly](assets/images/guide/structural-directives/select-ngcontainer-anim.gif)

## [What's next](#whats-next)
