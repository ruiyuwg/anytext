# lint/rules/camelcase.md

URL: https://docs.deno.com/lint/rules/camelcase

Enforces the use of camelCase in variable names.

Consistency in a code base is key for readability and maintainability. This rule
enforces variable declarations and object property names which you create to be
in camelCase.

Of note:

- `_` is allowed at the start or end of a variable
- All uppercase variable names (e.g. constants) may have `_` in their name
- If you have to use a snake\_case key in an object for some reasons, wrap it in
  quotation mark
- This rule also applies to variables imported or exported via ES modules, but
  not to object properties of those variables

**Invalid:**

```typescript
let first_name = "Ichigo";
const obj1 = { last_name: "Hoshimiya" };
const obj2 = { first_name };
const { last_name } = obj1;

function do_something() {}
function foo({ snake_case = "default value" }) {}

class snake_case_class {}
class Also_Not_Valid_Class {}

import { not_camelCased } from "external-module.js";
export * as not_camelCased from "mod.ts";

enum snake_case_enum {
  snake_case_variant,
}

type snake_case_type = { some_property: number };

interface snake_case_interface {
  some_property: number;
}
```

**Valid:**

```typescript
let firstName = "Ichigo";
const FIRST_NAME = "Ichigo";
const __myPrivateVariable = "Hoshimiya";
const myPrivateVariable_ = "Hoshimiya";
const obj1 = { "last_name": "Hoshimiya" }; // if an object key is wrapped in quotation mark, then it's valid
const obj2 = { "first_name": first_name };
const { last_name: lastName } = obj;

function doSomething() {} // function declarations must be camelCase but...
do_something(); // ...snake_case function calls are allowed
function foo({ snake_case: camelCase = "default value" }) {}

class PascalCaseClass {}

import { not_camelCased as camelCased } from "external-module.js";
export * as camelCased from "mod.ts";

enum PascalCaseEnum {
  PascalCaseVariant,
}

type PascalCaseType = { someProperty: number };

interface PascalCaseInterface {
  someProperty: number;
}
```

***

# lint/rules/constructor-super.md

URL: https://docs.deno.com/lint/rules/constructor-super

Verifies the correct usage of constructors and calls to `super()`.

Defined constructors of derived classes (e.g. `class A extends B`) must always
call `super()`. Classes which extend non-constructors (e.g.
`class A extends null`) must not have a constructor.

**Invalid:**

```typescript
class A {}
class Z {
  constructor() {}
}

class B extends Z {
  constructor() {} // missing super() call
}
class C {
  constructor() {
    super(); // Syntax error
  }
}
class D extends null {
  constructor() {} // illegal constructor
}
class E extends null {
  constructor() { // illegal constructor
    super();
  }
}
```

**Valid:**

```typescript
class A {}
class B extends A {}
class C extends A {
  constructor() {
    super();
  }
}
class D extends null {}
```

***

# lint/rules/default-param-last.md

URL: https://docs.deno.com/lint/rules/default-param-last

Enforces default parameter(s) to be last in the function signature.

Parameters with default values are optional by nature but cannot be left out of
the function call without mapping the function inputs to different parameters
which is confusing and error prone. Specifying them last allows them to be left
out without changing the semantics of the other parameters.

**Invalid:**

```typescript
function f(a = 2, b) {}
function f(a = 5, b, c = 5) {}
```

**Valid:**

```typescript
function f() {}
function f(a) {}
function f(a = 5) {}
function f(a, b = 5) {}
function f(a, b = 5, c = 5) {}
function f(a, b = 5, ...c) {}
function f(a = 2, b = 3) {}
```

***

# lint/rules/eqeqeq.md

URL: https://docs.deno.com/lint/rules/eqeqeq

Enforces the use of type-safe equality operators `===` and `!==` instead of the
more error prone `==` and `!=` operators.

`===` and `!==` ensure the comparators are of the same type as well as the same
value. On the other hand `==` and `!=` do type coercion before value checking
which can lead to unexpected results. For example `5 == "5"` is `true`, while
`5 === "5"` is `false`.

**Invalid:**

```typescript
if (a == 5) {}
if ("hello world" != input) {}
```

**Valid:**

```typescript
if (a === 5) {}
if ("hello world" !== input) {}
```

***

# lint/rules/explicit-function-return-type.md

URL: https://docs.deno.com/lint/rules/explicit-function-return-type

Requires all functions to have explicit return types.

Explicit return types have a number of advantages including easier to understand
code and better type safety. It is clear from the signature what the return type
of the function (if any) will be.

**Invalid:**

```typescript
function someCalc() {
  return 2 * 2;
}
function anotherCalc() {
  return;
}
```

**Valid:**

```typescript
function someCalc(): number {
  return 2 * 2;
}
function anotherCalc(): void {
  return;
}
```

***

# lint/rules/explicit-module-boundary-types.md

URL: https://docs.deno.com/lint/rules/explicit-module-boundary-types

Requires all module exports to have fully typed declarations.

Having fully typed function arguments and return values clearly defines the
inputs and outputs of a module (known as the module boundary). This will make it
very clear to any users of the module how to supply inputs and handle outputs in
a type safe manner.

**Invalid:**

```typescript
// Missing return type (e.g. void)
export function printDoc(doc: string, doubleSided: boolean) {
  return;
}

// Missing argument type (e.g. `arg` is of type string)
export const arrowFn = (arg): string => `hello ${arg}`;

// Missing return type (e.g. boolean)
export function isValid() {
  return true;
}
```

**Valid:**

```typescript
// Typed input parameters and return value
export function printDoc(doc: string, doubleSided: boolean): void {
  return;
}

// Input of type string and a return value of type string
export const arrowFn = (arg: string): string => `hello ${arg}`;

// Though lacking a return type, this is valid as it is not exported
function isValid() {
  return true;
}
```

***

# lint/rules/for-direction.md

URL: https://docs.deno.com/lint/rules/for-direction

Requires `for` loop control variables to increment in the correct direction.

Incrementing `for` loop control variables in the wrong direction leads to
infinite loops. This can occur through incorrect initialization, bad
continuation step logic or wrong direction incrementing of the loop control
variable.

**Invalid:**

```typescript
// Infinite loop
for (let i = 0; i < 2; i--) {}
```

**Valid:**

```typescript
for (let i = 0; i < 2; i++) {}
```

***

# lint/rules/fresh-handler-export.md

URL: https://docs.deno.com/lint/rules/fresh-handler-export

Checks correct naming for named fresh middleware export.

Files inside the `routes/` folder can export middlewares that run before any
rendering happens. They are expected to be available as a named export called
`handler`. This rule checks for when the export was incorrectly named `handlers`
instead of `handler`.

**Invalid:**

```js
export const handlers = {
  GET() {},
  POST() {},
};
export function handlers() {}
export async function handlers() {}
```

**Valid:**

```jsx
export const handler = {
  GET() {},
  POST() {},
};
export function handler() {}
export async function handler() {}
```

***

# lint/rules/fresh-server-event-handlers.md

URL: https://docs.deno.com/lint/rules/fresh-server-event-handlers

Disallows event handlers in fresh server components.

Components inside the `routes/` folder in a fresh app are exclusively rendered
on the server. They are not rendered in the client and setting an event handler
will have no effect.

Note that this rule only applies to server components inside the `routes/`
folder, not to fresh islands or any other components.

**Invalid:**

```jsx
 {}} />
 {}} />
<my-custom-element foo={() => {}} />
```

**Valid:**

```jsx


```

***

# lint/rules/getter-return.md

URL: https://docs.deno.com/lint/rules/getter-return

Requires all property getter functions to return a value.

Getter functions return the value of a property. If the function returns no
value then this contract is broken.

**Invalid:**

```typescript
let foo = {
  get bar() {},
};

class Person {
  get name() {}
}
```

**Valid:**

```typescript
let foo = {
  get bar() {
    return true;
  },
};

class Person {
  get name() {
    return "alice";
  }
}
```

***

# lint/rules/guard-for-in.md

URL: https://docs.deno.com/lint/rules/guard-for-in

Require `for-in` loops to include an `if` statement.

Looping over objects with a `for-in` loop will include properties that are
inherited through the prototype chain. This behavior can lead to unexpected
items in your for loop.

**Invalid:**

```typescript
for (const key in obj) {
  foo(obj, key);
}
```

**Valid:**

```typescript
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    foo(obj, key);
  }
}
```

```typescript
for (const key in obj) {
  if (!Object.hasOwn(obj, key)) {
    continue;
  }
  foo(obj, key);
}
```

***

# lint/rules/jsx-boolean-value.md

URL: https://docs.deno.com/lint/rules/jsx-boolean-value

Enforce a consistent JSX boolean value style. Passing `true` as the boolean
value can be omitted with the shorthand syntax.

**Invalid:**

```tsx
const foo = ;
const foo = ;
```

**Valid:**

```tsx
const foo = ;
const foo = ;
```

***

# lint/rules/jsx-button-has-type.md

URL: https://docs.deno.com/lint/rules/jsx-button-has-type

Enforce `<button>` elements to have a `type` attribute. If a `<button>` is
placed inside a `<form>` element it will act as a submit button by default which
can be unexpected.

**Invalid:**

```tsx
const btn = click me;
const btn = click me;
```

**Valid:**

```tsx
const btn = click me;
const btn = click me;
const btn = click me;
const btn = click me;
```

***

# lint/rules/jsx-curly-braces.md

URL: https://docs.deno.com/lint/rules/jsx-curly-braces

Ensure consistent use of curly braces around JSX expressions.

**Invalid:**

```tsx
const foo =  />;
const foo = ;
const foo = {"foo"};
```

**Valid:**

```tsx
const foo = } />;
const foo = ;
const foo = foo;
```

***

# lint/rules/jsx-key.md

URL: https://docs.deno.com/lint/rules/jsx-key

Ensure the `key` attribute is present when passing iterables into JSX. It allows
frameworks to optimize checking the order of elements.

**Invalid:**

```tsx
const foo = [foo];
const foo = [<>foo</>];
[1, 2, 3].map(() => );
Array.from([1, 2, 3], () => );
```

**Valid:**

```tsx
const foo = [foo];
const foo = [foo];
[1, 2, 3].map((x) => );
Array.from([1, 2, 3], (x) => );
```

***

# lint/rules/jsx-no-children-prop.md

URL: https://docs.deno.com/lint/rules/jsx-no-children-prop

Pass children as JSX children instead of as an attribute.

**Invalid:**

```tsx

, ]} />
```

**Valid:**

```tsx
foo

```

***

# lint/rules/jsx-no-comment-text-nodes.md

URL: https://docs.deno.com/lint/rules/jsx-no-comment-text-nodes

JavaScript comments inside text nodes are rendered as plain text in JSX. This is
often unexpected.

**Invalid:**

```tsx
// comment
/* comment */
```

**Valid:**

```tsx
{/* comment */};
```

***

# lint/rules/jsx-no-duplicate-props.md

URL: https://docs.deno.com/lint/rules/jsx-no-duplicate-props

Disallow duplicated JSX props. Later props will always overwrite earlier props
often leading to unexpected results.

**Invalid:**

```tsx
;
;
;
```

**Valid:**

```tsx




```

***

# lint/rules/jsx-no-unescaped-entities.md

URL: https://docs.deno.com/lint/rules/jsx-no-unescaped-entities

Leaving the `>` or `}` character in JSX is often undesired and difficult to
spot. Enforce that these characters must be passed as strings.

**Invalid:**

```tsx
>
}
```

**Valid:**

```tsx
&gt;,
{">"},
{"}"},
```

***

# lint/rules/jsx-no-useless-fragment.md

URL: https://docs.deno.com/lint/rules/jsx-no-useless-fragment

Fragments are only necessary at the top of a JSX "block" and only when there are
multiple children. Fragments are not needed in other scenarios.

**Invalid:**

```tsx
<></>
<></>
<></>
foo <>bar</>
```

**Valid:**

```tsx
<>{foo}</>
<></>
<>foo </>
foo bar
```

***

# lint/rules/jsx-props-no-spread-multi.md

URL: https://docs.deno.com/lint/rules/jsx-props-no-spread-multi

Spreading the same expression twice is typically a mistake and causes
unnecessary computations.

**Invalid:**

```tsx



```

**Valid:**

```tsx



```

***

# lint/rules/jsx-void-dom-elements-no-children.md

URL: https://docs.deno.com/lint/rules/jsx-void-dom-elements-no-children

Ensure that void elements in HTML don't have any children as that is not valid
HTML. See
[`Void element` article on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)
for more information.

**Invalid:**

```tsx
foo
foo
```

**Valid:**

```tsx


```

***

# lint/rules/no-array-constructor.md

URL: https://docs.deno.com/lint/rules/no-array-constructor

Enforce conventional usage of array construction.

Array construction is conventionally done via literal notation such as `[]` or
`[1, 2, 3]`. Using the `new Array()` is discouraged as is `new Array(1, 2, 3)`.
There are two reasons for this. The first is that a single supplied argument
defines the array length, while multiple arguments instead populate the array of
no fixed size. This confusion is avoided when pre-populated arrays are only
created using literal notation. The second argument to avoiding the `Array`
constructor is that the `Array` global may be redefined.

The one exception to this rule is when creating a new array of fixed size, e.g.
`new Array(6)`. This is the conventional way to create arrays of fixed length.

**Invalid:**

```typescript
// This is 4 elements, not a size 100 array of 3 elements
const a = new Array(100, 1, 2, 3);

const b = new Array(); // use [] instead
```

**Valid:**

```typescript
const a = new Array(100);
const b = [];
const c = [1, 2, 3];
```

***

# lint/rules/no-async-promise-executor.md

URL: https://docs.deno.com/lint/rules/no-async-promise-executor

Requires that async promise executor functions are not used.

Promise constructors take an executor function as an argument with `resolve` and
`reject` parameters that can be used to control the state of the created
Promise. This function is allowed to be async but this is generally not a good
idea for several reasons:

- If an async executor function throws an error, the error will be lost and
  won't cause the newly-constructed Promise to reject. This could make it
  difficult to debug and handle some errors.
- If an async Promise executor function is using await, then this is usually a
  sign that it is not actually necessary to use the new Promise constructor and
  the code can be restructured to avoid the use of a promise, or the scope of
  the new Promise constructor can be reduced, extracting the async code and
  changing it to be synchronous.

**Invalid:**

```typescript
new Promise(async function (resolve, reject) {});
new Promise(async (resolve, reject) => {});
```

**Valid:**

```typescript
new Promise(function (resolve, reject) {});
new Promise((resolve, reject) => {});
```

***

# lint/rules/no-await-in-loop.md

URL: https://docs.deno.com/lint/rules/no-await-in-loop

Requires `await` is not used in a for loop body.

Async and await are used in Javascript to provide parallel execution. If each
element in the for loop is waited upon using `await`, then this negates the
benefits of using async/await as no more elements in the loop can be processed
until the current element finishes.

A common solution is to refactor the code to run the loop body asynchronously
and capture the promises generated. After the loop finishes you can then await
all the promises at once.

**Invalid:**

```javascript
async function doSomething(items) {
  const results = [];
  for (const item of items) {
    // Each item in the array blocks on the previous one finishing
    results.push(await someAsyncProcessing(item));
  }
  return processResults(results);
}
```

**Valid:**

```javascript
async function doSomething(items) {
  const results = [];
  for (const item of items) {
    // Kick off all item processing asynchronously...
    results.push(someAsyncProcessing(item));
  }
  // ...and then await their completion after the loop
  return processResults(await Promise.all(results));
}
```

***

# lint/rules/no-await-in-sync-fn.md

URL: https://docs.deno.com/lint/rules/no-await-in-sync-fn

Disallow `await` keyword inside a non-async function.

Using the `await` keyword inside a non-async function is a syntax error. To be
able to use `await` inside a function, the function needs to be marked as async
via the `async` keyword.

**Invalid:**

```javascript
function foo() {
  await bar();
}

const fooFn = function foo() {
  await bar();
};

const fooFn = () => {
  await bar();
};
```

**Valid:**

```javascript
async function foo() {
  await bar();
}

const fooFn = async function foo() {
  await bar();
};

const fooFn = async () => {
  await bar();
};
```

***

# lint/rules/no-boolean-literal-for-arguments.md

URL: https://docs.deno.com/lint/rules/no-boolean-literal-for-arguments

Requires all functions called with any amount of `boolean` literals as
parameters to use a self-documenting constant instead.

Is common to define functions that can take `booleans` as arguments. However,
passing `boolean` literals as parameters can lead to lack of context regarding
the role of the argument inside the function in question.

A simple fix for the points mentioned above is the use of self documenting
constants that will end up working as "named booleans", that allow for a better
understanding on what the parameters mean in the context of the function call.

**Invalid:**

```typescript
function redraw(allViews: boolean, inline: boolean) {
  // redraw logic.
}
redraw(true, true);

function executeCommand(recursive: boolean, executionMode: EXECUTION_MODES) {
  // executeCommand logic.
}
executeCommand(true, EXECUTION_MODES.ONE);

function enableLogs(enable: boolean) {
  // enabledLogs logic.
}
enableLogs(true);
```

**Valid:**

```typescript
function redraw(allViews: boolean, inline: boolean) {
  // redraw logic.
}
const ALL_VIEWS = true, INLINE = true;
redraw(ALL_VIEWS, INLINE);

function executeCommand(recursive: boolean, executionMode: EXECUTION_MODES) {
  // executeCommand logic.
}
const RECURSIVE = true;
executeCommand(RECURSIVE, EXECUTION_MODES.ONE);

function enableLogs(enable: boolean) {
  // enabledLogs logic.
}
const ENABLE = true;
enableLogs(ENABLE);
```

***

# lint/rules/no-case-declarations.md

URL: https://docs.deno.com/lint/rules/no-case-declarations

Requires lexical declarations (`let`, `const`, `function` and `class`) in switch
`case` or `default` clauses to be scoped with brackets.

Without brackets in the `case` or `default` block, the lexical declarations are
visible to the entire switch block but only get initialized when they are
assigned, which only happens if that case/default is reached. This can lead to
unexpected errors. The solution is to ensure each `case` or `default` block is
wrapped in brackets to scope limit the declarations.

**Invalid:**

```typescript
switch (choice) {
  // `let`, `const`, `function` and `class` are scoped the entire switch statement here
  case 1:
    let a = "choice 1";
    break;
  case 2:
    const b = "choice 2";
    break;
  case 3:
    function f() {
      return "choice 3";
    }
    break;
  default:
    class C {}
}
```

**Valid:**

```typescript
switch (choice) {
  // The following `case` and `default` clauses are wrapped into blocks using brackets
  case 1: {
    let a = "choice 1";
    break;
  }
  case 2: {
    const b = "choice 2";
    break;
  }
  case 3: {
    function f() {
      return "choice 3";
    }
    break;
  }
  default: {
    class C {}
  }
}
```

***

# lint/rules/no-class-assign.md

URL: https://docs.deno.com/lint/rules/no-class-assign

Disallows modifying variables of class declarations.

Declaring a class such as `class A {}`, creates a variable `A`. Like any
variable this can be modified or reassigned. In most cases this is a mistake and
not what was intended.

**Invalid:**

```typescript
class A {}
A = 0; // reassigning the class variable itself
```

**Valid:**

```typescript
class A {}
let c = new A();
c = 0; // reassigning the variable `c`
```

***

# lint/rules/no-compare-neg-zero.md

URL: https://docs.deno.com/lint/rules/no-compare-neg-zero

Disallows comparing against negative zero (`-0`).

Comparing a value directly against negative may not work as expected as it will
also pass for non-negative zero (i.e. `0` and `+0`). Explicit comparison with
negative zero can be performed using `Object.is`.

**Invalid:**

```typescript
if (x === -0) {}
```

**Valid:**

```typescript
if (x === 0) {}

if (Object.is(x, -0)) {}
```

***

# lint/rules/no-cond-assign.md

URL: https://docs.deno.com/lint/rules/no-cond-assign

Disallows the use of the assignment operator, `=`, in conditional statements.

Use of the assignment operator within a conditional statement is often the
result of mistyping the equality operator, `==`. If an assignment within a
conditional statement is required then this rule allows it by wrapping the
assignment in parentheses.

**Invalid:**

```typescript
let x;
if (x = 0) {
  let b = 1;
}
```

```typescript
function setHeight(someNode) {
  do {
    someNode.height = "100px";
  } while (someNode = someNode.parentNode);
}
```

**Valid:**

```typescript
let x;
if (x === 0) {
  let b = 1;
}
```

```typescript
function setHeight(someNode) {
  do {
    someNode.height = "100px";
  } while ((someNode = someNode.parentNode));
}
```

***

# lint/rules/no-console.md

URL: https://docs.deno.com/lint/rules/no-console

Disallows the use of the `console` global.

Oftentimes, developers accidentally commit `console.log`/`console.error`
statements, left in particularly after debugging. Moreover, using these in code
may leak sensitive information to the output or clutter the console with
unnecessary information. This rule helps maintain clean and secure code by
disallowing the use of `console`.

This rule is especially useful in libraries where you almost never want to
output to the console.

**Invalid:**

```typescript
console.log("Debug message");
console.error("Debug message");
console.debug(obj);

if (debug) console.log("Debugging");

function log() {
  console.log("Log");
}
```

**Valid:**

It is recommended to explicitly enable the console via a `deno-lint-ignore`
comment for any calls where you actually want to use it.

```typescript
function logWarning(message: string) {
  // deno-lint-ignore no-console
  console.warn(message);
}
```

***

# lint/rules/no-const-assign.md

URL: https://docs.deno.com/lint/rules/no-const-assign

Disallows modifying a variable declared as `const`.

Modifying a variable declared as `const` will result in a runtime error.

**Invalid:**

```typescript
const a = 0;
a = 1;
a += 1;
a++;
++a;
```

**Valid:**

```typescript
const a = 0;
const b = a + 1;

// `c` is out of scope on each loop iteration, allowing a new assignment
for (const c in [1, 2, 3]) {}
```

***

# lint/rules/no-constant-condition.md

URL: https://docs.deno.com/lint/rules/no-constant-condition

Disallows the use of a constant expression in conditional test.

Using a constant expression in a conditional test is often either a mistake or a
temporary situation introduced during development and is not ready for
production.

**Invalid:**

```typescript
if (true) {}
if (2) {}
do {} while (x = 2); // infinite loop
```

**Valid:**

```typescript
if (x) {}
if (x === 0) {}
do {} while (x === 2);
```

***

# lint/rules/no-control-regex.md

URL: https://docs.deno.com/lint/rules/no-control-regex

Disallows the use ASCII control characters in regular expressions.

Control characters are invisible characters in the ASCII range of 0-31. It is
uncommon to use these in a regular expression and more often it is a mistake in
the regular expression.

**Invalid:**

```typescript
// Examples using ASCII (31) Carriage Return (hex x0d)
const pattern1 = /\x0d/;
const pattern2 = /\u000d/;
const pattern3 = new RegExp("\\x0d");
const pattern4 = new RegExp("\\u000d");
```

**Valid:**

```typescript
// Examples using ASCII (32) Space (hex x20)
const pattern1 = /\x20/;
const pattern2 = /\u0020/;
const pattern3 = new RegExp("\\x20");
const pattern4 = new RegExp("\\u0020");
```

***

# lint/rules/no-debugger.md

URL: https://docs.deno.com/lint/rules/no-debugger

Disallows the use of the `debugger` statement.

`debugger` is a statement which is meant for stopping the javascript execution
environment and start the debugger at the statement. Modern debuggers and
tooling no longer need this statement and leaving it in can cause the execution
of your code to stop in production.

**Invalid:**

```typescript
function isLongString(x: string) {
  debugger;
  return x.length > 100;
}
```

**Valid:**

```typescript
function isLongString(x: string) {
  return x.length > 100; // set breakpoint here instead
}
```

***

# lint/rules/no-delete-var.md

URL: https://docs.deno.com/lint/rules/no-delete-var

Disallows the deletion of variables.

`delete` is used to remove a property from an object. Variables declared via
`var`, `let` and `const` cannot be deleted (`delete` will return `false`).
Setting `strict` mode on will raise a syntax error when attempting to delete a
variable.

**Invalid:**

```typescript
const a = 1;
let b = 2;
let c = 3;
delete a; // would return false
delete b; // would return false
delete c; // would return false
```

**Valid:**

```typescript
let obj = {
  a: 1,
};
delete obj.a; // return true
```

***

# lint/rules/no-deprecated-deno-api.md

URL: https://docs.deno.com/lint/rules/no-deprecated-deno-api

Warns the usage of the deprecated - Deno APIs.

The following APIs will be removed from the `Deno.*` namespace but have newer
APIs to migrate to. See the
[Deno 1.x to 2.x Migration Guide](https://docs.deno.com/runtime/manual/advanced/migrate_deprecations)
for migration instructions.

- `Deno.Buffer`
- `Deno.Closer`
- `Deno.close()`
- `Deno.Conn.rid`
- `Deno.copy()`
- `Deno.customInspect`
- `Deno.File`
- `Deno.fstatSync()`
- `Deno.fstat()`
- `Deno.FsWatcher.rid`
- `Deno.ftruncateSync()`
- `Deno.ftruncate()`
- `Deno.futimeSync()`
- `Deno.futime()`
- `Deno.isatty()`
- `Deno.Listener.rid`
- `Deno.ListenTlsOptions.certFile`
- `Deno.ListenTlsOptions.keyFile`
- `Deno.readAllSync()`
- `Deno.readAll()`
- `Deno.Reader`
- `Deno.ReaderSync`
- `Deno.readSync()`
- `Deno.read()`
- `Deno.run()`
- `Deno.seekSync()`
- `Deno.seek()`
- `Deno.serveHttp()`
- `Deno.Server`
- `Deno.shutdown`
- `Deno.stderr.rid`
- `Deno.stdin.rid`
- `Deno.stdout.rid`
- `Deno.TlsConn.rid`
- `Deno.UnixConn.rid`
- `Deno.writeAllSync()`
- `Deno.writeAll()`
- `Deno.Writer`
- `Deno.WriterSync`
- `Deno.writeSync()`
- `Deno.write()`
- `new Deno.FsFile()`

The following APIs will be removed from the `Deno.*` namespace without
replacement.

- `Deno.resources()`
- `Deno.metrics()`

***

# lint/rules/no-dupe-args.md

URL: https://docs.deno.com/lint/rules/no-dupe-args

Disallows using an argument name more than once in a function signature.

If you supply multiple arguments of the same name to a function, the last
instance will shadow the preceding one(s). This is most likely an unintentional
typo.

**Invalid:**

```typescript
function withDupes(a, b, a) {
  console.log("I'm the value of the second a:", a);
}
```

**Valid:**

```typescript
function withoutDupes(a, b, c) {
  console.log("I'm the value of the first (and only) a:", a);
}
```

***

# lint/rules/no-dupe-class-members.md

URL: https://docs.deno.com/lint/rules/no-dupe-class-members

Disallows using a class member function name more than once.

Declaring a function of the same name twice in a class will cause the previous
declaration(s) to be overwritten, causing unexpected behaviors.

**Invalid:**

```typescript
class Foo {
  bar() {}
  bar() {}
}
```

**Valid:**

```typescript
class Foo {
  bar() {}
  fizz() {}
}
```

***

# lint/rules/no-dupe-else-if.md

URL: https://docs.deno.com/lint/rules/no-dupe-else-if

Disallows using the same condition twice in an `if`/`else if` statement.

When you reuse a condition in an `if`/`else if` statement, the duplicate
condition will never be reached (without unusual side-effects) meaning this is
almost always a bug.

**Invalid:**

```typescript
if (a) {}
else if (b) {}
else if (a) {} // duplicate of condition above

if (a === 5) {}
else if (a === 6) {}
else if (a === 5) {} // duplicate of condition above
```

**Valid:**

```typescript
if (a) {}
else if (b) {}
else if (c) {}

if (a === 5) {}
else if (a === 6) {}
else if (a === 7) {}
```

***

# lint/rules/no-dupe-keys.md

URL: https://docs.deno.com/lint/rules/no-dupe-keys

Disallows duplicate keys in object literals.

Setting the same key multiple times in an object literal will override other
assignments to that key and can cause unexpected behaviour.

**Invalid:**

```typescript
const foo = {
  bar: "baz",
  bar: "qux",
};
```

```typescript
const foo = {
  "bar": "baz",
  bar: "qux",
};
```

```typescript
const foo = {
  0x1: "baz",
  1: "qux",
};
```

**Valid:**

```typescript
const foo = {
  bar: "baz",
  quxx: "qux",
};
```

***

# lint/rules/no-duplicate-case.md

URL: https://docs.deno.com/lint/rules/no-duplicate-case

Disallows using the same case clause in a switch statement more than once.

When you reuse a case test expression in a `switch` statement, the duplicate
case will never be reached meaning this is almost always a bug.

**Invalid:**

```typescript
const someText = "a";
switch (someText) {
  case "a": // (1)
    break;
  case "b":
    break;
  case "a": // duplicate of (1)
    break;
  default:
    break;
}
```

**Valid:**

```typescript
const someText = "a";
switch (someText) {
  case "a":
    break;
  case "b":
    break;
  case "c":
    break;
  default:
    break;
}
```

***

# lint/rules/no-empty-character-class.md

URL: https://docs.deno.com/lint/rules/no-empty-character-class

Disallows using the empty character class in a regular expression.

Regular expression character classes are a series of characters in brackets,
e.g. `[abc]`. if nothing is supplied in the brackets it will not match anything
which is likely a typo or mistake.

**Invalid:**

```typescript
/^abc[]/.test("abcdefg"); // false, as `d` does not match an empty character class
"abcdefg".match(/^abc[]/); // null
```

**Valid:**

```typescript
// Without a character class
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

// With a valid character class
/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]
```

***

# lint/rules/no-empty-enum.md

URL: https://docs.deno.com/lint/rules/no-empty-enum

Disallows the declaration of an empty enum.

An enum with no members serves no purpose. This rule will capture these
situations as either unnecessary code or a mistaken empty implementation.

**Invalid:**

```typescript
enum Foo {}
```

**Valid:**

```typescript
enum Foo {
  ONE = "ONE",
}
```

***

# lint/rules/no-empty-interface.md

URL: https://docs.deno.com/lint/rules/no-empty-interface

Disallows the declaration of an empty interface.

An interface with no members serves no purpose. This rule will capture these
situations as either unnecessary code or a mistaken empty implementation.

**Invalid:**

```typescript
interface Foo {}
```

**Valid:**

```typescript
interface Foo {
  name: string;
}

interface Bar {
  age: number;
}

// Using an empty interface with at least one extension are allowed.

// Using an empty interface to change the identity of Baz from type to interface.
type Baz = { profession: string };
interface Foo extends Baz {}

// Using an empty interface to extend already existing Foo declaration
// with members of the Bar interface
interface Foo extends Bar {}

// Using an empty interface as a union type
interface Baz extends Foo, Bar {}
```

***

# lint/rules/no-empty-pattern.md

URL: https://docs.deno.com/lint/rules/no-empty-pattern

Disallows the use of empty patterns in destructuring.

In destructuring, it is possible to use empty patterns such as `{}` or `[]`
which have no effect, most likely not what the author intended.

**Invalid:**

```typescript
// In these examples below, {} and [] are not object literals or empty arrays,
// but placeholders for destructured variable names
const {} = someObj;
const [] = someArray;
const {a: {}} = someObj;
const [a: []] = someArray;
function myFunc({}) {}
function myFunc([]) {}
```

**Valid:**

```typescript
const { a } = someObj;
const [a] = someArray;

// Correct way to default destructured variable to object literal
const { a = {} } = someObj;

// Correct way to default destructured variable to empty array
const [a = []] = someArray;

function myFunc({ a }) {}
function myFunc({ a = {} }) {}
function myFunc([a]) {}
function myFunc([a = []]) {}
```

***

# lint/rules/no-empty.md

URL: https://docs.deno.com/lint/rules/no-empty

Disallows the use of empty block statements.

Empty block statements are legal but often represent that something was missed
and can make code less readable. This rule ignores block statements that only
contain comments. This rule also ignores empty constructors and function bodies
(including arrow functions).

**Invalid:**

```typescript
if (foo) {}

while (foo) {}

switch (foo) {}

try {
  doSomething();
} catch (e) {
} finally {
}
```

**Valid:**

```typescript
if (foo) {
  // empty
}

while (foo) {
  /* empty */
}

try {
  doSomething();
} catch (e) {
  // continue regardless of error
}

try {
  doSomething();
} finally {
  /* continue regardless of error */
}
```

***

# lint/rules/no-eval.md

URL: https://docs.deno.com/lint/rules/no-eval

Disallows the use of `eval`.

`eval` is a potentially dangerous function which can open your code to a number
of security vulnerabilities. In addition to being slow, `eval` is also often
unnecessary with better solutions available.

**Invalid:**

```typescript
const obj = { x: "foo" };
const key = "x",
const value = eval("obj." + key);
```

**Valid:**

```typescript
const obj = { x: "foo" };
const value = obj[x];
```

***

# lint/rules/no-ex-assign.md

URL: https://docs.deno.com/lint/rules/no-ex-assign

Disallows the reassignment of exception parameters.

There is generally no good reason to reassign an exception parameter. Once
reassigned the code from that point on has no reference to the error anymore.

**Invalid:**

```typescript
try {
  someFunc();
} catch (e) {
  e = true;
  // can no longer access the thrown error
}
```

**Valid:**

```typescript
try {
  someFunc();
} catch (e) {
  const anotherVar = true;
}
```

***

# lint/rules/no-explicit-any.md

URL: https://docs.deno.com/lint/rules/no-explicit-any

Disallows use of the `any` type.

Use of the `any` type disables the type check system around that variable,
defeating the purpose of Typescript which is to provide type safe code.
Additionally, the use of `any` hinders code readability, since it is not
immediately clear what type of value is being referenced. It is better to be
explicit about all types. For a more type-safe alternative to `any`, use
`unknown` if you are unable to choose a more specific type.

**Invalid:**

```typescript
const someNumber: any = "two";
function foo(): any {
  return undefined;
}
```

**Valid:**

```typescript
const someNumber: string = "two";
function foo(): undefined {
  return undefined;
}
```

***

# lint/rules/no-external-import.md

URL: https://docs.deno.com/lint/rules/no-external-import

Disallows the use of external imports.

- What's the motivation of this lint rule?
  - This rule emits warnings if external modules are imported via URL. "deps.ts"
    and import maps are exception.
- Why is linted code considered bad?
  - Importing external modules just works fine, but it will take time and effort
    when you want to upgrade those modules if they are imported in multiple
    places in your project.
- When should it be used?
  - To avoid it you could use "deps.ts convention" or
    [import maps](https://docs.deno.com/runtime/manual/basics/import_maps),
    where you import all external modules and then re-export them or assign
    aliases to them.
  - If you'd like to follow the "deps.ts convention" or use import maps.

**Invalid:**

```typescript
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
```

**Valid:**

```typescript
import { assertEquals } from "./deps.ts";
```

```typescript
// deps.ts

export {
  assert,
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.126.0/testing/asserts.ts";
```

you can refer to the explanation of this convention here
https://docs.deno.com/runtime/manual/basics/modules/#it-seems-unwieldy-to-import-urls-everywhere

***

# lint/rules/no-extra-boolean-cast.md

URL: https://docs.deno.com/lint/rules/no-extra-boolean-cast

Disallows unnecessary boolean casts.

In certain contexts, such as `if`, `while` or `for` statements, expressions are
automatically coerced into a boolean. Therefore, techniques such as double
negation (`!!foo`) or casting (`Boolean(foo)`) are unnecessary and produce the
same result as without the negation or casting.

**Invalid:**

```typescript
if (!!foo) {}
if (Boolean(foo)) {}
while (!!foo) {}
for (; Boolean(foo);) {}
```

**Valid:**

```typescript
if (foo) {}
while (foo) {}
for (; foo;) {}
```

***

# lint/rules/no-extra-non-null-assertion.md

URL: https://docs.deno.com/lint/rules/no-extra-non-null-assertion

Disallows unnecessary non-null assertions.

Non-null assertions are specified with an `!` saying to the compiler that you
know this value is not null. Specifying this operator more than once in a row,
or in combination with the optional chaining operator (`?`) is confusing and
unnecessary.

**Invalid:**

```typescript
const foo: { str: string } | null = null;
const bar = foo!!.str;

function myFunc(bar: undefined | string) {
  return bar!!;
}
function anotherFunc(bar?: { str: string }) {
  return bar!?.str;
}
```

**Valid:**

```typescript
const foo: { str: string } | null = null;
const bar = foo!.str;

function myFunc(bar: undefined | string) {
  return bar!;
}
function anotherFunc(bar?: { str: string }) {
  return bar?.str;
}
```

***

# lint/rules/no-fallthrough.md

URL: https://docs.deno.com/lint/rules/no-fallthrough

Disallows the implicit fallthrough of case statements.

Case statements without a `break` will execute their body and then fallthrough
to the next case or default block and execute this block as well. While this is
sometimes intentional, many times the developer has forgotten to add a break
statement, intending only for a single case statement to be executed. This rule
enforces that you either end each case statement with a break statement or an
explicit comment that fallthrough was intentional. The fallthrough comment must
contain one of `fallthrough`, `falls through` or `fall through`.

**Invalid:**

```typescript
switch (myVar) {
  case 1:
    console.log("1");

  case 2:
    console.log("2");
}
// If myVar = 1, outputs both `1` and `2`.  Was this intentional?
```

**Valid:**

```typescript
switch (myVar) {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;
}
// If myVar = 1, outputs only `1`

switch (myVar) {
  case 1:
    console.log("1");
    /* falls through */
  case 2:
    console.log("2");
}
// If myVar = 1, intentionally outputs both `1` and `2`
```

***

# lint/rules/no-func-assign.md

URL: https://docs.deno.com/lint/rules/no-func-assign

Disallows the overwriting/reassignment of an existing function.

Javascript allows for the reassignment of a function definition. This is
generally a mistake on the developers part, or poor coding practice as code
readability and maintainability will suffer.

**Invalid:**

```typescript
function foo() {}
foo = bar;

const a = function baz() {
  baz = "now I'm a string";
};

myFunc = existingFunc;
function myFunc() {}
```

**Valid:**

```typescript
function foo() {}
const someVar = foo;

const a = function baz() {
  const someStr = "now I'm a string";
};

const anotherFuncRef = existingFunc;

let myFuncVar = function () {};
myFuncVar = bar; // variable reassignment, not function re-declaration
```

***

# lint/rules/no-global-assign.md

URL: https://docs.deno.com/lint/rules/no-global-assign

Disallows assignment to native Javascript objects.

In Javascript, `String` and `Object` for example are native objects. Like any
object, they can be reassigned, but it is almost never wise to do so as this can
lead to unexpected results and difficult to track down bugs.

**Invalid:**

```typescript
Object = null;
undefined = true;
window = {};
```

***

# lint/rules/no-implicit-declare-namespace-export.md

URL: https://docs.deno.com/lint/rules/no-implicit-declare-namespace-export

Disallows the use of implicit exports in ["ambient" namespaces].

TypeScript implicitly export all members of an ["ambient" namespaces], except
whether a named export is present.

["ambient" namespaces]: https://www.typescriptlang.org/docs/handbook/namespaces.html#ambient-namespaces

**Invalid:**

```ts
// foo.ts or foo.d.ts
declare namespace ns {
  interface ImplicitlyExported {}
  export type Exported = true;
}
```

**Valid:**

```ts
// foo.ts or foo.d.ts
declare namespace ns {
  interface NonExported {}
  export {};
}

declare namespace ns {
  interface Exported {}
  export { Exported };
}

declare namespace ns {
  export interface Exported {}
}
```

***

# lint/rules/no-import-assertions.md

URL: https://docs.deno.com/lint/rules/no-import-assertions

Disallows the `assert` keyword for import attributes.

ES import attributes (previously called import assertions) has been changed to
use the `with` keyword. The old syntax using `assert` is still supported, but
deprecated.

**Invalid:**

```typescript
import obj from "./obj.json" assert { type: "json" };
import("./obj2.json", { assert: { type: "json" } });
```

**Valid:**

```typescript
import obj from "./obj.json" with { type: "json" };
import("./obj2.json", { with: { type: "json" } });
```

***

# lint/rules/no-import-assign.md

URL: https://docs.deno.com/lint/rules/no-import-assign

Disallows reassignment of imported module bindings.

ES module import bindings should be treated as read-only since modifying them
during code execution will likely result in runtime errors. It also makes for
poor code readability and difficult maintenance.

**Invalid:**

```typescript
import defaultMod, { namedMod } from "./mod.js";
import * as modNameSpace from "./mod2.js";

defaultMod = 0;
namedMod = true;
modNameSpace.someExportedMember = "hello";
modNameSpace = {};
```

**Valid:**

```typescript
import defaultMod, { namedMod } from "./mod.js";
import * as modNameSpace from "./mod2.js";

// properties of bound imports may be set
defaultMod.prop = 1;
namedMod.prop = true;
modNameSpace.someExportedMember.prop = "hello";
```

***

# lint/rules/no-import-prefix.md

URL: https://docs.deno.com/lint/rules/no-import-prefix

Ensure that all dependencies are declared in either `deno.json` or
`package.json`.

This promotes better dependency management and makes it easier to track and
update dependencies. It also helps Deno purge the lockfile when removing a
dependency.

### Invalid:

```ts
import foo from "https://deno.land/std/path/mod.ts";
import foo from "jsr:@std/path@1";
import foo from "npm:preact@10";
```

### Valid:

```ts
import foo from "@std/path";
```

With a corresponding entry in the `deno.json` or `package.json` file:

```jsonc title="deno.json"
{
  "imports": {
    "@std/path": "jsr:@std/path@1"
  }
}
```

***

# lint/rules/no-inferrable-types.md

URL: https://docs.deno.com/lint/rules/no-inferrable-types

Disallows easily inferrable types.

Variable initializations to JavaScript primitives (and `null`) are obvious in
their type. Specifying their type can add additional verbosity to the code. For
example, with `const x: number = 5`, specifying `number` is unnecessary as it is
obvious that `5` is a number.

**Invalid:**

```typescript
const a: bigint = 10n;
const b: bigint = BigInt(10);
const c: boolean = true;
const d: boolean = !0;
const e: number = 10;
const f: number = Number("1");
const g: number = Infinity;
const h: number = NaN;
const i: null = null;
const j: RegExp = /a/;
const k: RegExp = RegExp("a");
const l: RegExp = new RegExp("a");
const m: string = "str";
const n: string = `str`;
const o: string = String(1);
const p: symbol = Symbol("a");
const q: undefined = undefined;
const r: undefined = void someValue;

class Foo {
  prop: number = 5;
}

function fn(s: number = 5, t: boolean = true) {}
```

**Valid:**

```typescript
const a = 10n;
const b = BigInt(10);
const c = true;
const d = !0;
const e = 10;
const f = Number("1");
const g = Infinity;
const h = NaN;
const i = null;
const j = /a/;
const k = RegExp("a");
const l = new RegExp("a");
const m = "str";
const n = `str`;
const o = String(1);
const p = Symbol("a");
const q = undefined;
const r = void someValue;

class Foo {
  prop = 5;
}

function fn(s = 5, t = true) {}
```

***

# lint/rules/no-inner-declarations.md

URL: https://docs.deno.com/lint/rules/no-inner-declarations

Disallows variable or function definitions in nested blocks.

Function declarations in nested blocks can lead to less readable code and
potentially unexpected results due to compatibility issues in different
JavaScript runtimes. This does not apply to named or anonymous functions which
are valid in a nested block context.

Variables declared with `var` in nested blocks can also lead to less readable
code. Because these variables are hoisted to the module root, it is best to
declare them there for clarity. Note that variables declared with `let` or
`const` are block scoped and therefore this rule does not apply to them.

**Invalid:**

```typescript
if (someBool) {
  function doSomething() {}
}

function someFunc(someVal: number): void {
  if (someVal > 4) {
    var a = 10;
  }
}
```

**Valid:**

```typescript
function doSomething() {}
if (someBool) {}

var a = 10;
function someFunc(someVal: number): void {
  var foo = true;
  if (someVal > 4) {
    let b = 10;
    const fn = function doSomethingElse() {};
  }
}
```

***

# lint/rules/no-invalid-regexp.md

URL: https://docs.deno.com/lint/rules/no-invalid-regexp

Disallows specifying invalid regular expressions in RegExp constructors.

Specifying an invalid regular expression literal will result in a SyntaxError at
compile time, however specifying an invalid regular expression string in the
RegExp constructor will only be discovered at runtime.

**Invalid:**

```typescript
const invalidRegExp = new RegExp(")");
```

**Valid:**

```typescript
const goodRegExp = new RegExp(".");
```

***

# lint/rules/no-invalid-triple-slash-reference.md

URL: https://docs.deno.com/lint/rules/no-invalid-triple-slash-reference

Warns the wrong usage of triple-slash reference directives.

Deno supports the triple-slash reference directives of `types`, `path`, `lib`,
and `no-default-lib`. This lint rule checks if there is an invalid, badly-formed
directive because it is most likely a mistake.

Additionally, note that only the `types` directive is allowed in JavaScript
files. This directive is useful for telling the TypeScript compiler the location
of a type definition file that corresponds to a certain JavaScript file.
However, even in the Deno manual of the versions prior to v1.10 (e.g. [v1.9.2]),
there was a wrong statement describing that one should use the `path` directive
in such cases. Actually, the `types` directive should be used. See
[the latest manual] for more detail. So this rule also detects the usage of the
directive other than `types` in JavaScript files and suggests replacing it with
the `types` directive.

[v1.9.2]: https://deno.land/manual@v1.9.2/typescript/types#using-the-triple-slash-reference-directive

[the latest manual]: https://deno.land/manual/typescript/types#using-the-triple-slash-reference-directive

**Invalid:**

*JavaScript*

```javascript
/// 
/// 
/// 

// ... the rest of the JavaScript ...
```

*TypeScript*

```typescript
/// 

// ... the rest of the TypeScript ...
```

**Valid:**

*JavaScript*

```javascript
/// 
/// 

// ... the rest of the JavaScript ...
```

*TypeScript*

```typescript
/// 
/// 
/// 
/// 

// ... the rest of the TypeScript ...
```

***

# lint/rules/no-irregular-whitespace.md

URL: https://docs.deno.com/lint/rules/no-irregular-whitespace

Disallows the use of non-space or non-tab whitespace characters.

Non-space or non-tab whitespace characters can be very difficult to spot in your
code as editors will often render them invisibly. These invisible characters can
cause issues or unexpected behaviors. Sometimes these characters are added
inadvertently through copy/paste or incorrect keyboard shortcuts.

The following characters are disallowed:

```
\u000B - Line Tabulation (\v) - 
\u000C - Form Feed (\f) - 
\u00A0 - No-Break Space - 
\u0085 - Next Line
\u1680 - Ogham Space Mark
\u180E - Mongolian Vowel Separator - 
\ufeff - Zero Width No-Break Space - 
\u2000 - En Quad
\u2001 - Em Quad
\u2002 - En Space - 
\u2003 - Em Space - 
\u2004 - Tree-Per-Em
\u2005 - Four-Per-Em
\u2006 - Six-Per-Em
\u2007 - Figure Space
\u2008 - Punctuation Space - 
\u2009 - Thin Space
\u200A - Hair Space
\u200B - Zero Width Space - 
\u2028 - Line Separator
\u2029 - Paragraph Separator
\u202F - Narrow No-Break Space
\u205f - Medium Mathematical Space
\u3000 - Ideographic Space
```

To fix this linting issue, replace instances of the above with regular spaces,
tabs or new lines. If it's not obvious where the offending character(s) are try
retyping the line from scratch.

***

# lint/rules/no-misused-new.md

URL: https://docs.deno.com/lint/rules/no-misused-new

Disallows defining `constructor`s for interfaces or `new` for classes

Specifying a `constructor` for an interface or defining a `new` method for a
class is incorrect and should be avoided.

**Invalid:**

```typescript
class C {
  new(): C;
}

interface I {
  constructor(): void;
}
```

**Valid:**

```typescript
class C {
  constructor() {}
}

interface I {
  new (): C;
}
```

***

# lint/rules/no-namespace.md

URL: https://docs.deno.com/lint/rules/no-namespace

Disallows the use of `namespace` and `module` keywords in TypeScript code.

`namespace` and `module` are both thought of as outdated keywords to organize
the code. Instead, it is generally preferable to use ES2015 module syntax (e.g.
`import`/`export`).

However, this rule still allows the use of these keywords in the following two
cases:

- they are used for defining ["ambient" namespaces] along with `declare`
  keywords
- they are written in TypeScript's type definition files: `.d.ts`

["ambient" namespaces]: https://www.typescriptlang.org/docs/handbook/namespaces.html#ambient-namespaces

**Invalid:**

```typescript
// foo.ts
module mod {}
namespace ns {}
```

```dts
// bar.d.ts
// all usage of `module` and `namespace` keywords are allowed in `.d.ts`
```

**Valid:**

```typescript
// foo.ts
declare global {}
declare module mod1 {}
declare module "mod2" {}
declare namespace ns {}
```

```dts
// bar.d.ts
module mod1 {}
namespace ns1 {}
declare global {}
declare module mod2 {}
declare module "mod3" {}
declare namespace ns2 {}
```

***

# lint/rules/no-new-symbol.md

URL: https://docs.deno.com/lint/rules/no-new-symbol

Disallows the use of `new` operators with built-in `Symbol`s.

`Symbol`s are created by being called as a function, but we sometimes call it
with the `new` operator by mistake. This rule detects such wrong usage of the
`new` operator.

**Invalid:**

```typescript
const foo = new Symbol("foo");
```

**Valid:**

```typescript
const foo = Symbol("foo");

function func(Symbol: typeof SomeClass) {
  // This `Symbol` is not built-in one
  const bar = new Symbol();
}
```

***

# lint/rules/no-node-globals.md

URL: https://docs.deno.com/lint/rules/no-node-globals

Disallows the use of NodeJS global objects.

NodeJS exposes a set of global objects that differs from deno (and the web), so
code should not assume they are available. Instead, import the objects from
their defining modules as needed.

**Invalid:**

```typescript
// foo.ts
const buf = Buffer.from("foo", "utf-8"); // Buffer is not a global object in deno
```

**Valid:**

```typescript
// foo.ts
import { Buffer } from "node:buffer";

const foo = Buffer.from("foo", "utf-8");
```

***

# lint/rules/no-non-null-asserted-optional-chain.md

URL: https://docs.deno.com/lint/rules/no-non-null-asserted-optional-chain

Disallow non-null assertions after an optional chain expression.

`?.` optional chain expressions provide undefined if an object is `null` or
`undefined`. Using a `!` non-null assertion to assert the result of an `?.`
optional chain expression is non-nullable is likely wrong.

**Invalid:**

```typescript
foo?.bar!;
foo?.bar()!;
```

**Valid:**

```typescript
foo?.bar;
foo?.bar();
```

***

# lint/rules/no-non-null-assertion.md

URL: https://docs.deno.com/lint/rules/no-non-null-assertion

Disallow non-null assertions using the `!` postfix operator.

TypeScript's `!` non-null assertion operator asserts to the type system that an
expression is non-nullable, as in not `null` or `undefined`. Using assertions to
tell the type system new information is often a sign that code is not fully
type-safe. It's generally better to structure program logic so that TypeScript
understands when values may be nullable.

**Invalid:**

```typescript
interface Example {
  property?: string;
}
declare const example: Example;

const includes = example.property!.includes("foo");
```

**Valid:**

```typescript
interface Example {
  property?: string;
}
declare const example: Example;

const includes = example.property?.includes("foo") ?? false;
```

***

# lint/rules/no-obj-calls.md

URL: https://docs.deno.com/lint/rules/no-obj-calls

Disallows calling built-in global objects like functions.

The following built-in objects should not be invoked like functions, even though
they look like constructors:

- `Math`
- `JSON`
- `Reflect`
- `Atomics`

Calling these as functions would result in runtime errors. This rule statically
prevents such wrong usage of them.

**Invalid:**

```typescript
const math = Math();
const newMath = new Math();

const json = JSON();
const newJSON = new JSON();

const reflect = Reflect();
const newReflect = new Reflect();

const atomics = Atomics();
const newAtomics = new Atomics();
```

**Valid:**

```typescript
const area = (radius: number): number => Math.PI * radius * radius;

const parsed = JSON.parse("{ foo: 42 }");

const x = Reflect.get({ x: 1, y: 2 }, "x");

const first = Atomics.load(foo, 0);
```

***

# lint/rules/no-octal.md

URL: https://docs.deno.com/lint/rules/no-octal

Disallows expressing octal numbers via numeric literals beginning with `0`.

Octal numbers can be expressed via numeric literals with leading `0` like `042`,
but this expression often confuses programmers. That's why ECMAScript's strict
mode throws `SyntaxError` for the expression.

Since ES2015, the other prefix `0o` has been introduced as an alternative. This
new one is always encouraged to use in today's code.

**Invalid:**

```typescript
const a = 042;
const b = 7 + 042;
```

**Valid:**

```typescript
const a = 0o42;
const b = 7 + 0o42;
const c = "042";
```

***

# lint/rules/no-process-global.md

URL: https://docs.deno.com/lint/rules/no-process-global

Disallows the use of NodeJS `process` global.

NodeJS and Deno expose `process` global but they are hard to statically analyze
by tools, so code should not assume they are available. Instead,
`import process from "node:process"`.

**Invalid:**

```typescript
// foo.ts
const foo = process.env.FOO;
```

**Valid:**

```typescript
// foo.ts
import process from "node:process";

const foo = process.env.FOO;
```

***

# lint/rules/no-prototype-builtins.md

URL: https://docs.deno.com/lint/rules/no-prototype-builtins

Disallows the use of `Object.prototype` builtins directly.

If objects are created via `Object.create(null)` they have no prototype
specified. This can lead to runtime errors when you assume objects have
properties from `Object.prototype` and attempt to call the following methods:

- `hasOwnProperty`
- `isPrototypeOf`
- `propertyIsEnumerable`

Instead, it's always encouraged to call these methods from `Object.prototype`
explicitly.

**Invalid:**

```typescript
const a = foo.hasOwnProperty("bar");
const b = foo.isPrototypeOf("bar");
const c = foo.propertyIsEnumerable("bar");
```

**Valid:**

```typescript
const a = Object.prototype.hasOwnProperty.call(foo, "bar");
const b = Object.prototype.isPrototypeOf.call(foo, "bar");
const c = Object.prototype.propertyIsEnumerable.call(foo, "bar");
```

***

# lint/rules/no-redeclare.md

URL: https://docs.deno.com/lint/rules/no-redeclare

Disallows redeclaration of variables, functions, parameters with the same name.

JavaScript allows us to redeclare variables with the same name using `var`, but
redeclaration should not be used since it can make variables hard to trace.

In addition, this lint rule disallows redeclaration using `let` or `const` as
well, although ESLint allows. This is useful because we can notice a syntax
error before actually running the code.

As for functions and parameters, JavaScript just treats these as runtime errors,
throwing `SyntaxError` when being run. It's also beneficial to detect this sort
of errors statically.

**Invalid:**

```typescript
var a = 3;
var a = 10;

let b = 3;
let b = 10;

const c = 3;
const c = 10;

function d() {}
function d() {}

function e(arg: number) {
  var arg: number;
}

function f(arg: number, arg: string) {}
```

**Valid:**

```typescript
var a = 3;
function f() {
  var a = 10;
}

if (foo) {
  let b = 2;
} else {
  let b = 3;
}
```

***

# lint/rules/no-regex-spaces.md

URL: https://docs.deno.com/lint/rules/no-regex-spaces

Disallows multiple spaces in regular expression literals.

Multiple spaces in regular expression literals are generally hard to read when
the regex gets complicated. Instead, it's better to use only one space character
and specify how many times spaces should appear with the `{n}` syntax, for
example:

```typescript
// Multiple spaces in the regex literal are harder to understand how many
// spaces are expected to be matched
const re = /foo   bar/;

// Instead use `{n}` syntax for readability
const re = /foo {3}var/;
```

**Invalid:**

```typescript
const re1 = /  /;
const re2 = /foo  bar/;
const re3 = / a b  c d /;
const re4 = /foo  {3}bar/;

const re5 = new RegExp("  ");
const re6 = new RegExp("foo  bar");
const re7 = new RegExp(" a b  c d ");
const re8 = new RegExp("foo  {3}bar");
```

**Valid:**

```typescript
const re1 = /foo/;
const re2 = / /;
const re3 = / {3}/;
const re4 = / +/;
const re5 = / ?/;
const re6 = / */;

const re7 = new RegExp("foo");
const re8 = new RegExp(" ");
const re9 = new RegExp(" {3}");
const re10 = new RegExp(" +");
const re11 = new RegExp(" ?");
const re12 = new RegExp(" *");
```

***

# lint/rules/no-self-assign.md

URL: https://docs.deno.com/lint/rules/no-self-assign

Disallows self assignments.

Self assignments like `a = a;` have no effect at all. If there are self
assignments in the code, most likely it means that the author is still in the
process of refactoring and there's remaining work they have to do.

**Invalid:**

```typescript
a = a;
[a] = [a];
[a, b] = [a, b];
[a, b] = [a, c];
[a, ...b] = [a, ...b];
a.b = a.b;
```

**Valid:**

```typescript
let a = a;
a += a;
a = [a];
[a, b] = [b, a];
a.b = a.c;
```

***

# lint/rules/no-self-compare.md

URL: https://docs.deno.com/lint/rules/no-self-compare

Disallows comparisons where both sides are exactly the same.

Comparing a variable or value against itself is usually an error, either a typo
or refactoring error. It is confusing to the reader and may potentially
introduce a runtime error.

**Invalid:**

```typescript
if (x === x) {
}
if ("x" === "x") {
}
if (a.b === a.b) {
}
if (a["b"] === a["b"]) {
}
```

**Valid:**

```typescript
if (x === y) {
}
if ("x" === "y") {
}
if (a.b === a.c) {
}
if (a["b"] === a["c"]) {
}
```

***

# lint/rules/no-setter-return.md

URL: https://docs.deno.com/lint/rules/no-setter-return

Disallows returning values from setters.

Setters are supposed to be used for setting some value to the property, which
means that returning a value from a setter makes no sense. In fact, returned
values are ignored and cannot ever be used at all although returning a value
from a setter produces no error. This is why static check for this mistake by
the linter is quite beneficial.

Note that returning without a value is allowed; this is a useful technique to do
early-return from a function.

**Invalid:**

```typescript
const a = {
  set foo(x: number) {
    return "something";
  },
};

class B {
  private set foo(x: number) {
    return "something";
  }
}

const c = {
  set foo(x: boolean) {
    if (x) {
      return 42;
    }
  },
};
```

**Valid:**

```typescript
// return without a value is allowed since it is used to do early-return
const a = {
  set foo(x: number) {
    if (x % 2 == 0) {
      return;
    }
  },
};

// not a setter, but a getter
class B {
  get foo() {
    return 42;
  }
}

// not a setter
const c = {
  set(x: number) {
    return "something";
  },
};
```

***

# lint/rules/no-shadow-restricted-names.md

URL: https://docs.deno.com/lint/rules/no-shadow-restricted-names

Disallows shadowing of restricted names.

The following (a) properties of the global object, or (b) identifiers are
"restricted" names in JavaScript:

- [`NaN`]
- [`Infinity`]
- [`undefined`]
- [`eval`]
- [`arguments`]

These names are *NOT* reserved in JavaScript, which means that nothing prevents
one from assigning other values into them (i.e. shadowing). In other words, you
are allowed to use, say, `undefined` as an identifier or variable name. (For
more details see [MDN])

[`NaN`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

[`Infinity`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

[`undefined`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

[`eval`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

[`arguments`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#description

```typescript
function foo() {
  const undefined = "bar";
  console.log(undefined); // output: "bar"
}
```

Of course, shadowing like this most likely confuse other developers and should
be avoided. This lint rule detects and warn them.

**Invalid:**

```typescript
const undefined = 42;

function NaN() {}

function foo(Infinity) {}

const arguments = () => {};

try {
} catch (eval) {}
```

**Valid:**

```typescript
// If not assigned a value, `undefined` may be shadowed
const undefined;

const Object = 42;

function foo(a: number, b: string) {}

try {
} catch (e) {}
```

***

# lint/rules/no-sloppy-imports.md

URL: https://docs.deno.com/lint/rules/no-sloppy-imports

Enforces specifying explicit references to paths in module specifiers.

Non-explicit specifiers are ambiguous and require probing for the correct file
path on every run, which has a performance overhead.

Note: This lint rule is only active when using `--unstable-sloppy-imports`.

### Invalid:

```typescript
import { add } from "./math/add";
import { ConsoleLogger } from "./loggers";
```

### Valid:

```typescript
import { add } from "./math/add.ts";
import { ConsoleLogger } from "./loggers/index.ts";
```

***

# lint/rules/no-slow-types.md

URL: https://docs.deno.com/lint/rules/no-slow-types

Enforces using types that are explicit or can be simply inferred.

Read more: https://jsr.io/docs/about-slow-types

***

# lint/rules/no-sparse-arrays.md

URL: https://docs.deno.com/lint/rules/no-sparse-arrays

Disallows sparse arrays.

Sparse arrays are arrays that contain *empty slots*, which later could be
handled either as `undefined` value or skipped by array methods, and this may
lead to unexpected behavior:

```typescript
[1, , 2].join(); // => '1,,2'
[1, undefined, 2].join(); // => '1,,2'

[1, , 2].flatMap((item) => item); // => [1, 2]
[1, undefined, 2].flatMap((item) => item); // => [1, undefined, 2]
```

**Invalid:**

```typescript
const items = ["foo", , "bar"];
```

**Valid:**

```typescript
const items = ["foo", "bar"];
```

***

# lint/rules/no-sync-fn-in-async-fn.md

URL: https://docs.deno.com/lint/rules/no-sync-fn-in-async-fn

Disallow sync function inside async function.

Using sync functions like `Deno.readTextFileSync` blocks the deno event loop so
it's not recommended to use it inside of an async function, because it stops
progress of all other async tasks.

**Invalid:**

```javascript
async function foo() {
  Deno.readTextFileSync("");
}

const fooFn = async function foo() {
  Deno.readTextFileSync("");
};

const fooFn = async () => {
  Deno.readTextFileSync("");
};
```

**Valid:**

```javascript
async function foo() {
  await Deno.readTextFile("");
}

function foo() {
  Deno.readTextFileSync("");
}

const fooFn = function foo() {
  Deno.readTextFileSync("");
};

const fooFn = () => {
  Deno.readTextFileSync("");
};
```

***
