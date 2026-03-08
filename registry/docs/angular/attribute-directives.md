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

Change the appearance or behavior of DOM elements and Angular components with attribute directives.

arrow\_upward\_alt Back to the top

## [Building an attribute directive](#building-an-attribute-directive)

This section walks you through creating a highlight directive that sets the background color of the host element to yellow.

1. To create a directive, use the CLI command [`ng generate directive`](tools/cli/schematics).

   ```
   ng generate directive highlight
   ```

   The CLI creates `src/app/highlight.directive.ts`, a corresponding test file `src/app/highlight.directive.spec.ts`.

   ### highlight.directive.ts

   ```
   import {Directive} from '@angular/core';@Directive({  selector: '[appHighlight]',})export class HighlightDirective {}
   ```

   The [`@Directive()`](/api/core/Directive) decorator's configuration property specifies the directive's CSS attribute selector, `[appHighlight]`.

2. Import [`ElementRef`](/api/core/ElementRef) from `@angular/core`. [`ElementRef`](/api/core/ElementRef) grants direct access to the host DOM element through its `nativeElement` property.

3. Add [`ElementRef`](/api/core/ElementRef) in the directive's `constructor()` to [inject](guide/di) a reference to the host DOM element, the element to which you apply `appHighlight`.

4. Add logic to the `HighlightDirective` class that sets the background to yellow.

### highlight.directive.ts

```
import {Directive, ElementRef, inject} from '@angular/core';@Directive({  selector: '[appHighlight]',})export class HighlightDirective {  private el = inject(ElementRef);  constructor() {    this.el.nativeElement.style.backgroundColor = 'yellow';  }}
```

**HELPFUL:** Directives *do not* support namespaces.

Avoid

### app.component.avoid.html (unsupported)

```
<p app:Highlight>This is invalid</p>
```

## [Applying an attribute directive](#applying-an-attribute-directive)

To use the `HighlightDirective`, add a `<p>` element to the HTML template with the directive as an attribute.

### app.component.html

```
<p appHighlight>Highlight me!</p>
```

Angular creates an instance of the `HighlightDirective` class and injects a reference to the `<p>` element into the directive's constructor, which sets the `<p>` element's background style to yellow.

## [Handling user events](#handling-user-events)

This section shows you how to detect when a user mouses into or out of the element and to respond by setting or clearing the highlight color.

1. Configure host event bindings using the `host` property in the [`@Directive()`](/api/core/Directive) decorator.

   ### src/app/highlight.directive.ts (decorator)

   ```
   @Directive({  selector: '[appHighlight]',  host: {    '(mouseenter)': 'onMouseEnter()',    '(mouseleave)': 'onMouseLeave()',  },})
   ```

2. Add two event handler methods, and map host element events to them via the `host` property.

   ### highlight.directive.ts (mouse-methods)

   ```
   onMouseEnter() {    this.highlight('yellow');  }  onMouseLeave() {    this.highlight('');  }  private highlight(color: string) {    this.el.nativeElement.style.backgroundColor = color;  }
   ```

Subscribe to events of the DOM element that hosts an attribute directive (the `<p>` in this case) by configuring event listeners on the directive's [`host` property](guide/components/host-elements#binding-to-the-host-element).

**HELPFUL:** The handlers delegate to a helper method, `highlight()`, that sets the color on the host DOM element, `el`.

The complete directive is as follows:

### highlight.directive.ts

```
import {Directive, ElementRef, inject} from '@angular/core';@Directive({  selector: '[appHighlight]',  host: {    '(mouseenter)': 'onMouseEnter()',    '(mouseleave)': 'onMouseLeave()',  },})export class HighlightDirective {  private el = inject(ElementRef);  onMouseEnter() {    this.highlight('yellow');  }  onMouseLeave() {    this.highlight('');  }  private highlight(color: string) {    this.el.nativeElement.style.backgroundColor = color;  }}
```

The background color appears when the pointer hovers over the paragraph element and disappears as the pointer moves out.

![Second Highlight](assets/images/guide/attribute-directives/highlight-directive-anim.gif)

## [Passing values into an attribute directive](#passing-values-into-an-attribute-directive)

This section walks you through setting the highlight color while applying the `HighlightDirective`.

1. In `highlight.directive.ts`, import `input` from `@angular/core`.

   ### highlight.directive.ts (imports)

   ```
   import {Directive, ElementRef, inject, input} from '@angular/core';
   ```

2. Add an `appHighlight` `input` property.

   ### highlight.directive.ts

   ```
   appHighlight = input('');
   ```

   The [`input()`](/api/core/input) function adds metadata to the class that makes the directive's `appHighlight` property available for binding.

3. In `app.component.ts`, add a `color` property to the `AppComponent`.

   ### app.component.ts (class)

   ```
   export class AppComponent {  color = 'yellow';}
   ```

4. To simultaneously apply the directive and the color, use property binding with the `appHighlight` directive selector, setting it equal to `color`.

   ### app.component.html (color)

   ```
   Highlight me!
   ```

   The `[appHighlight]` attribute binding performs two tasks:

   - Applies the highlighting directive to the `<p>` element
   - Sets the directive's highlight color with a property binding

### [Setting the value with user input](#setting-the-value-with-user-input)

This section guides you through adding radio buttons to bind your color choice to the `appHighlight` directive.

1. Add markup to `app.component.html` for choosing a color as follows:

   ### app.component.html (v2)

   ```
   My First Attribute DirectivePick a highlight color  Green  Yellow  CyanHighlight me!
   ```

2. Revise the `AppComponent.color` so that it has no initial value.

   ### app.component.ts (class)

   ```
   export class AppComponent {  color = '';}
   ```

3. In `highlight.directive.ts`, revise `onMouseEnter` method so that it first tries to highlight with `appHighlight` and falls back to `red` if `appHighlight` is `undefined`.

   ### highlight.directive.ts (mouse-enter)

   ```
   onMouseEnter() {    this.highlight(this.appHighlight() || 'red');  }
   ```

4. Serve your application to verify that the user can choose the color with the radio buttons.

   ![Animated gif of the refactored highlight directive changing color according to the radio button the user selects](assets/images/guide/attribute-directives/highlight-directive-v2-anim.gif)

## [Binding to a second property](#binding-to-a-second-property)

This section guides you through configuring your application so the developer can set the default color.

1. Add a second [`input()`](/api/core/input) property to `HighlightDirective` called `defaultColor`.

   ### highlight.directive.ts (defaultColor)

   ```
   defaultColor = input('');
   ```

2. Revise the directive's `onMouseEnter` so that it first tries to highlight with the `appHighlight`, then with the `defaultColor`, and falls back to `red` if both properties are `undefined`.

   ### highlight.directive.ts (mouse-enter)

   ```
   onMouseEnter() {    this.highlight(this.appHighlight() || this.defaultColor() || 'red');  }
   ```

3. To bind to the `AppComponent.color` and fall back to "violet" as the default color, add the following HTML. In this case, the `defaultColor` binding doesn't use square brackets, `[]`, because the value is a static string, not a dynamic expression.

   ### app.component.html (defaultColor)

   ```
   Highlight me too!
   ```

   As with components, you can add multiple directive property bindings to a host element.

The default color is red if there is no default color binding. When the user chooses a color the selected color becomes the active highlight color.

![Animated gif of final highlight directive that shows red color with no binding and violet with the default color set. When user selects color, the selection takes precedence.](assets/images/guide/attribute-directives/highlight-directive-final-anim.gif)

## [Deactivating Angular processing with `NgNonBindable`](#deactivating-angular-processing-with-ngnonbindable)

To prevent expression evaluation in the browser, add `ngNonBindable` to the host element. `ngNonBindable` deactivates interpolation, directives, and binding in templates.

In the following example, the expression `{{ 1 + 1 }}` renders just as it does in your code editor, and does not display `2`.

### app.component.html

```
<p>Use ngNonBindable to stop evaluation.</p><p ngNonBindable>This should not evaluate: {{ 1 + 1 }}</p>
```

Applying `ngNonBindable` to an element stops binding for that element's child elements. However, `ngNonBindable` still lets directives work on the element where you apply `ngNonBindable`. In the following example, the `appHighlight` directive is still active but Angular does not evaluate the expression `{{ 1 + 1 }}`.

### app.component.html

```
<h3>ngNonBindable with a directive</h3><div ngNonBindable [appHighlight]="'yellow'">  This should not evaluate: {{ 1 + 1 }}, but will highlight yellow.</div>
```

If you apply `ngNonBindable` to a parent element, Angular disables interpolation and binding of any sort, such as property binding or event binding, for the element's children.
