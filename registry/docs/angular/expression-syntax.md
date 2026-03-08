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

Angular expressions are based on JavaScript, but differ in some key ways. This guide walks through the similarities and differences between Angular expressions and standard JavaScript.

arrow\_upward\_alt Back to the top

## [Value literals](#value-literals)

Angular supports a subset of [literal values](https://developer.mozilla.org/en-US/docs/Glossary/Literal) from JavaScript.

### [Supported value literals](#supported-value-literals)

Literal type

Example values

String

`'Hello'`, `"World"`

Boolean

`true`, `false`

Number

`123`, `3.14`

Object

`{name: 'Alice'}`

Array

`['Onion', 'Cheese', 'Garlic']`

null

`null`

RegExp

`/\d+/`

Template string

`` `Hello ${name}` ``

Tagged template string

`` tag`Hello ${name}` ``

### [Unsupported value literals](#unsupported-value-literals)

Literal type

Example values

BigInt

`1n`

## [Globals](#globals)

Angular expressions support the following [globals](https://developer.mozilla.org/en-US/docs/Glossary/Global_object):

- [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [$any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)

No other JavaScript globals are supported. Common JavaScript globals include `Number`, `Boolean`, `NaN`, `Infinity`, `parseInt`, and more.

## [Local variables](#local-variables)

Angular automatically makes special local variables available for use in expressions in specific contexts. These special variables always start with the dollar sign character (`$`).

For example, `@for` blocks make several local variables corresponding to information about the loop, such as `$index`.

## [What operators are supported?](#what-operators-are-supported)

### [Supported operators](#supported-operators)

Angular supports the following operators from standard JavaScript.

Operator

Example(s)

Add / Concatenate

`1 + 2`

Subtract

`52 - 3`

Multiply

`41 * 6`

Divide

`20 / 4`

Remainder (Modulo)

`17 % 5`

Exponentiation

`10 ** 3`

Parenthesis

`9 * (8 + 4)`

Conditional (Ternary)

`a > b ? true : false`

And (Logical)

`&&`

Or (Logical)

`||`

Not (Logical)

`!`

Nullish Coalescing

`possiblyNullValue ?? 'default'`

Comparison Operators

`<`, `<=`, `>`, `>=`, `==`, `===`, `!==`, `!=`

Unary Negation

`-x`

Unary Plus

`+y`

Property Accessor

`person['name']`

typeof

`typeof 42`

void

`void 1`

in

`'model' in car`

instanceof

`car instanceof Automobile`

Assignment

`a = b`

Addition Assignment

`a += b`

Subtraction Assignment

`a -= b`

Multiplication Assignment

`a *= b`

Division Assignment

`a /= b`

Remainder Assignment

`a %= b`

Exponentiation Assignment

`a **= b`

Logical AND Assignment

`a &&= b`

Logical OR Assignment

`a ||= b`

Nullish Coalescing Assignment

`a ??= b`

Spread in object literals

`{...obj, foo: 'bar'}`

Spread in array literals

`[...arr, 1, 2, 3]`

Rest in function calls

`fn(...args)`

Angular expressions additionally also support the following non-standard operators:

Operator

Example(s)

[Pipe](/guide/templates/pipes)

`{{ total | currency }}`

Optional chaining\*

`someObj.someProp?.nestedProp`

Non-null assertion (TypeScript)

`someObj!.someProp`

**NOTE:** Optional chaining behaves differently from the standard JavaScript version in that if the left side of Angular’s optional chaining operator is `null` or `undefined`, it returns `null` instead of `undefined`.

### [Unsupported operators](#unsupported-operators)

Operator

Example(s)

All bitwise operators

`&`, `&=`, `~`, `|=`, `^=`, etc.

Object destructuring

`const { name } = person`

Array destructuring

`const [firstItem] = items`

Comma operator

`x = (x++, x)`

new

`new Car()`

## [Lexical context for expressions](#lexical-context-for-expressions)

Angular expressions are evaluated within the context of the component class as well as any relevant [template variables](/guide/templates/variables), locals, and globals.

When referring to component class members, `this` is always implied. However, if a template declares a [template variables](guide/templates/variables) with the same name as a member, the variable shadows that member. You can unambiguously reference such a class member by explicitly using `this.`. This can be useful when creating an `@let` declaration that shadows a class member, e.g. for signal narrowing purposes.

## [Declarations](#declarations)

Generally speaking, declarations are not supported in Angular expressions. This includes, but is not limited to:

Declarations

Example(s)

Variables

`let label = 'abc'`, `const item = 'apple'`

Functions

`function myCustomFunction() { }`

Arrow Functions

`() => { }`

Classes

`class Rectangle { }`

Event handlers are **statements** rather than expressions. While they support all of the same syntax as Angular expressions, there are two key differences:

1. Statements **do support** assignment operators (but not destructing assignments)
2. Statements **do not support** pipes
