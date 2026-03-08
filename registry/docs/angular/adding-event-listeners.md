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

Angular supports defining event listeners on an element in your template by specifying the event name inside parentheses along with a statement that runs every time the event occurs.

arrow\_upward\_alt Back to the top

## [Listening to native events](#listening-to-native-events)

When you want to add event listeners to an HTML element, you wrap the event with parentheses, `()`, which allows you to specify a listener statement.

```
@Component({  template: `    <input type="text" (keyup)="updateField()" />  `,  ...})export class App{  updateField(): void {    console.log('Field is updated!');  }}
```

In this example, Angular calls `updateField` every time the `<input>` element emits a `keyup` event.

You can add listeners for any native events, such as: `click`, `keydown`, `mouseover`, etc. To learn more, check out the [all available events on elements on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element#events).

## [Accessing the event argument](#accessing-the-event-argument)

In every template event listener, Angular provides a variable named `$event` that contains a reference to the event object.

```
@Component({  template: `    <input type="text" (keyup)="updateField($event)" />  `,  ...})export class App {  updateField(event: KeyboardEvent): void {    console.log(`The user pressed: ${event.key}`);  }}
```

## [Using key modifiers](#using-key-modifiers)

When you want to capture specific keyboard events for a specific key, you might write some code like the following:

```
@Component({  template: `    <input type="text" (keyup)="updateField($event)" />  `,  ...})export class App {  updateField(event: KeyboardEvent): void {    if (event.key === 'Enter') {      console.log('The user pressed enter in the text field.');    }  }}
```

However, since this is a common scenario, Angular lets you filter the events by specifying a specific key using the period (`.`) character. By doing so, code can be simplified to:

```
@Component({  template: `    <input type="text" (keyup.enter)="updateField($event)" />  `,  ...})export class App{  updateField(event: KeyboardEvent): void {    console.log('The user pressed enter in the text field.');  }}
```

You can also add additional key modifiers:

```
<!-- Matches shift and enter --><input type="text" (keyup.shift.enter)="updateField($event)" />
```

Angular supports the modifiers `alt`, `control`, `meta`, and `shift`.

You can specify the key or code that you would like to bind to keyboard events. The key and code fields are a native part of the browser keyboard event object. By default, event binding assumes you want to use the [Key values for keyboard events](https://developer.mozilla.org/docs/Web/API/UI_Events/Keyboard_event_key_values).

Angular also allows you to specify [Code values for keyboard events](https://developer.mozilla.org/docs/Web/API/UI_Events/Keyboard_event_code_values) by providing a built-in `code` suffix.

```
<!-- Matches alt and left shift --><input type="text" (keydown.code.alt.shiftleft)="updateField($event)" />
```

This can be useful for handling keyboard events consistently across different operating systems. For example, when using the Alt key on MacOS devices, the `key` property reports the key based on the character already modified by the Alt key. This means that a combination like Alt + S reports a `key` value of `'ß'`. The `code` property, however, corresponds to the physical or virtual button pressed rather than the character produced.

## [Listening on global targets](#listening-on-global-targets)

Global target names can be used to prefix an event. The 3 supported global targets are `window`, `document` and `body`.

```
@Component({  /* ... */  host: {    'window:click': 'onWindowClick()',    'document:click': 'onDocumentClick()',    'body:click': 'onBodyClick()',  },})export class MyView {}
```

## [Preventing event default behavior](#preventing-event-default-behavior)

If your event handler should replace the native browser behavior, you can use the event object's [`preventDefault` method](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault):

```
@Component({  template: `    <a href="#overlay" (click)="showOverlay($event)">  `,  ...})export class App{  showOverlay(event: PointerEvent): void {    event.preventDefault();    console.log('Show overlay without updating the URL!');  }}
```

If the event handler statement evaluates to `false`, Angular automatically calls `preventDefault()`, similar to [native event handler attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes#event_handler_attributes). *Always prefer explicitly calling `preventDefault`*, as this approach makes the code's intent obvious.

## [Extend event handling](#extend-event-handling)

Angular’s event system is extensible via custom event plugins registered with the [`EVENT_MANAGER_PLUGINS`](/api/platform-browser/EVENT_MANAGER_PLUGINS) injection token.

### [Implementing Event Plugin](#implementing-event-plugin)

To create a custom event plugin, extend the [`EventManagerPlugin`](/api/platform-browser/EventManagerPlugin) class and implement the required methods.

```
import {Injectable} from '@angular/core';import {EventManagerPlugin} from '@angular/platform-browser';@Injectable()export class DebounceEventPlugin extends EventManagerPlugin {  constructor() {    super(document);  }  // Define which events this plugin supports  override supports(eventName: string) {    return /debounce/.test(eventName);  }  // Handle the event registration  override addEventListener(element: HTMLElement, eventName: string, handler: Function) {    // Parse the event: e.g., "click.debounce.500"    // event: "click", delay: 500    const [event, method, delay = 300] = eventName.split('.');    let timeoutId: number;    const listener = (event: Event) => {      clearTimeout(timeoutId);      timeoutId = setTimeout(() => {        handler(event);      }, delay);    };    element.addEventListener(event, listener);    // Return cleanup function    return () => {      clearTimeout(timeoutId);      element.removeEventListener(event, listener);    };  }}
```

Register your custom plugin using the [`EVENT_MANAGER_PLUGINS`](/api/platform-browser/EVENT_MANAGER_PLUGINS) token in your application's providers:

```
import {bootstrapApplication} from '@angular/platform-browser';import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';import {App} from './app';import {DebounceEventPlugin} from './debounce-event-plugin';bootstrapApplication(App, {  providers: [    {      provide: EVENT_MANAGER_PLUGINS,      useClass: DebounceEventPlugin,      multi: true,    },  ],});
```

Once registered, you can use your custom event syntax in templates, as well as with the `host` property:

```
@Component({  template: `    <input      type="text"      (input.debounce.500)="onSearch($event.target.value)"      placeholder="Search..."    />  `,  ...})export class Search { onSearch(query: string): void {    console.log('Searching for:', query);  }}
```

```
@Component({  ...,  host: {    '(click.debounce.500)': 'handleDebouncedClick()',  },})export class AwesomeCard {  handleDebouncedClick(): void {   console.log('Debounced click!');  }}
```
