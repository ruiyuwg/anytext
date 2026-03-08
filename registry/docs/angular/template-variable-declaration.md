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

- arrow\_back Templates
  - [Overview](/guide/templates)
  - [Binding dynamic text, properties and attributes](/guide/templates/binding)
  - [Adding event listeners](/guide/templates/event-listeners)
  - [Two-way binding](/guide/templates/two-way-binding)
  - [Control flow](/guide/templates/control-flow)
  - [Pipes](/guide/templates/pipes)
  - [Slotting child content with ng-content](/guide/templates/ng-content)
  - [Create template fragments with ng-template](/guide/templates/ng-template)
  - [Grouping elements with ng-container](/guide/templates/ng-container)
  - [Variables in templates](/guide/templates/variables)
  - [Deferred loading with @defer](/guide/templates/defer)
  - [Expression syntax](/guide/templates/expression-syntax)
  - [Whitespace in templates](/guide/templates/whitespace)

Angular has two types of variable declarations in templates: local template variables and template reference variables.

arrow\_upward\_alt Back to the top

## [Local template variables with `@let`](#local-template-variables-with-let)

Angular's `@let` syntax allows you to define a local variable and re-use it across a template, similar to the [JavaScript `let` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).

### [Using `@let`](#using-let)

Use `@let` to declare a variable whose value is based on the result of a template expression. Angular automatically keeps the variable's value up-to-date with the given expression, similar to [bindings](/guide/templates/binding).

```
@let name = user.name;@let greeting = 'Hello, ' + name;@let data = data$ | async;@let pi = 3.14159;@let coordinates = {x: 50, y: 100};@let longExpression =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +  'sed do eiusmod tempor incididunt ut labore et dolore magna ' +  'Ut enim ad minim veniam...';
```

Each `@let` block can declare exactly one variable. You cannot declare multiple variables in the same block with a comma.

### [Referencing the value of `@let`](#referencing-the-value-of-let)

Once you've declared a variable with `@let`, you can reuse it in the same template:

```
@let user = user$ | async;@if (user) {  <h1>Hello, {{ user.name }}</h1>  <user-avatar [photo]="user.photo" />  <ul>    @for (snack of user.favoriteSnacks; track snack.id) {      <li>{{ snack.name }}</li>    }  </ul>  <button (click)="update(user)">Update profile</button>}
```

### [Assignability](#assignability)

A key difference between `@let` and JavaScript's `let` is that `@let` cannot be reassigned after declaration. However, Angular automatically keeps the variable's value up-to-date with the given expression.

```
@let value = 1;<!-- Invalid - This does not work! --><button (click)="value = value + 1">Increment the value</button>
```

### [Variable scope](#variable-scope)

`@let` declarations are scoped to the current view and its descendants. Angular creates a new view at component boundaries and wherever a template might contain dynamic content, such as control flow blocks, `@defer` blocks, or structural directives.

Since `@let` declarations are not hoisted, they **cannot** be accessed by parent views or siblings:

```
@let topLevel = value;<div>  @let insideDiv = value;</div><!-- Valid -->{{ topLevel }}<!-- Valid -->{{ insideDiv }}@if (condition) {  <!-- Valid -->  {{ topLevel + insideDiv }}  @let nested = value;  @if (condition) {    <!-- Valid -->    {{ topLevel + insideDiv + nested }}  }}<!-- Error, not hoisted from @if -->{{ nested }}
```

### [Full syntax](#full-syntax)

The `@let` syntax is formally defined as:

- The `@let` keyword.
- Followed by one or more whitespaces, not including new lines.
- Followed by a valid JavaScript name and zero or more whitespaces.
- Followed by the = symbol and zero or more whitespaces.
- Followed by an Angular expression which can be multi-line.
- Terminated by the `;` symbol.

## [Template reference variables](#template-reference-variables)

Template reference variables give you a way to declare a variable that references a value from an element in your template.

A template reference variable can refer to the following:

- a DOM element within a template (including [custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements))
- an Angular component or directive
- a [TemplateRef](/api/core/TemplateRef) from an [ng-template](/api/core/ng-template)

You can use template reference variables to read information from one part of the template in another part of the same template.

### [Declaring a template reference variable](#declaring-a-template-reference-variable)

You can declare a variable on an element in a template by adding an attribute that starts with the hash character (`#`) followed by the variable name.

```
<!-- Create a template reference variable named "taskInput", referring to the HTMLInputElement. --><input #taskInput placeholder="Enter task name" />
```

### [Assigning values to template reference variables](#assigning-values-to-template-reference-variables)

Angular assigns a value to template variables based on the element on which the variable is declared.

If you declare the variable on a Angular component, the variable refers to the component instance.

```
<!-- The `startDate` variable is assigned the instance of `MyDatepicker`. --><my-datepicker #startDate />
```

If you declare the variable on an `<ng-template>` element, the variable refers to a TemplateRef instance which represents the template. For more information, see [How Angular uses the asterisk, \*, syntax](/guide/directives/structural-directives#structural-directive-shorthand) in [Structural directives](/guide/directives/structural-directives).

```
<!-- The `myFragment` variable is assigned the `TemplateRef` instance corresponding to this template fragment. --><ng-template #myFragment>  <p>This is a template fragment</p></ng-template>
```

If you declare the variable on any other displayed element, the variable refers to the `HTMLElement` instance.

```
<!-- The "taskInput" variable refers to the HTMLInputElement instance. --><input #taskInput placeholder="Enter task name" />
```

#### [Assigning a reference to an Angular directive](#assigning-a-reference-to-an-angular-directive)

Angular directives may have an `exportAs` property that defines a name by which the directive can be referenced in a template:

```
@Directive({  selector: '[dropZone]',  exportAs: 'dropZone',})export class DropZone {  /* ... */}
```

When you declare a template variable on an element, you can assign that variable a directive instance by specifying this `exportAs` name:

```
<!-- The `firstZone` variable refers to the `DropZone` directive instance. --><section dropZone #firstZone="dropZone">...</section>
```

You cannot refer to a directive that does not specify an `exportAs` name.

### [Using template reference variables with queries](#using-template-reference-variables-with-queries)

In addition to using template variables to read values from another part of the same template, you can also use this style of variable declaration to "mark" an element for [component and directive queries](/guide/components/queries).

When you want to query for a specific element in a template, you can declare a template variable on that element and then query for the element based on the variable name.

```
<input #description value="Original description" />
```

```
@Component({  /* ... */,  template: `<input #description value="Original description">`,})export class AppComponent {  // Query for the input element based on the template variable name.  @ViewChild('description') input: ElementRef | undefined;}
```

See [Referencing children with queries](/guide/components/queries) for more information on queries.
