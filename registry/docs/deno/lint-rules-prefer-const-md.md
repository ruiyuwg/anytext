# lint/rules/prefer-const.md

URL: https://docs.deno.com/lint/rules/prefer-const

Recommends declaring variables with [`const`] over [`let`].

Since ES2015, JavaScript supports [`let`] and [`const`] for declaring variables.
If variables are declared with [`let`], then they become mutable; we can set
other values to them afterwards. Meanwhile, if declared with [`const`], they are
immutable; we cannot perform re-assignment to them.

In general, to make the codebase more robust, maintainable, and readable, it is
highly recommended to use [`const`] instead of [`let`] wherever possible. The
fewer mutable variables are, the easier it should be to keep track of the
variable states while reading through the code, and thus it is less likely to
write buggy code. So this lint rule checks if there are [`let`] variables that
could potentially be declared with [`const`] instead.

Note that this rule does not check for [`var`] variables. Instead,
[the `no-var` rule](/lint/rules/no-var) is responsible for detecting and warning
[`var`] variables.

[`let`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

[`const`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

[`var`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

**Invalid:**

```typescript
let a = 0;

let b = 0;
someOperation(b);

// `const` could be used instead
for (let c in someObject) {}

// `const` could be used instead
for (let d of someArray) {}

// variable that is uninitialized at first and then assigned in the same scope is NOT allowed
// because we could simply write it like `const e = 2;` instead
let e;
e = 2;
```

**Valid:**

```typescript
// uninitialized variable is allowed
let a;

let b = 0;
b += 1;

let c = 0;
c = 1;

// variable that is uninitialized at first and then assigned in the same scope _two or more times_ is allowed
// because we cannot represent it with `const`
let d;
d = 2;
d = 3;

const e = 0;

// `f` is mutated through `f++`
for (let f = 0; f < someArray.length; f++) {}

// variable that is initialized (or assigned) in another scope is allowed
let g;
function func1() {
  g = 42;
}

// conditionally initialized variable is allowed
let h;
if (trueOrFalse) {
  h = 0;
}
```

***

# lint/rules/prefer-namespace-keyword.md

URL: https://docs.deno.com/lint/rules/prefer-namespace-keyword

Recommends the use of `namespace` keyword over `module` keyword when declaring
TypeScript module.

TypeScript supports the `module` keyword for organizing code, but this wording
can lead to a confusion with the ECMAScript's module. Since TypeScript v1.5, it
has provided us with the alternative keyword `namespace`, encouraging us to
always use `namespace` instead whenever we write TypeScript these days. See
[TypeScript v1.5 release note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html#namespace-keyword)
for more details.

**Invalid:**

```typescript
module modA {}

declare module modB {}
```

**Valid:**

```typescript
namespace modA {}

// "ambient modules" are allowed
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
declare module "modB";
declare module "modC" {}
```

***

# lint/rules/prefer-primordials.md

URL: https://docs.deno.com/lint/rules/prefer-primordials

Suggests using frozen intrinsics from `primordials` rather than the default
globals.

This lint rule is designed to be dedicated to Deno's internal code. Normal users
don't have to run this rule for their code.

Primordials are a frozen set of all intrinsic objects in the runtime, which we
should use in the Deno's internal to avoid the risk of prototype pollution. This
rule detects the direct use of global intrinsics and suggests replacing it with
the corresponding one from the `primordials` object.

One such example is:

```javascript
const arr = getSomeArrayOfNumbers();
const evens = arr.filter((val) => val % 2 === 0);
```

The second line of this example should be:

```javascript
const evens = primordials.ArrayPrototypeFilter(arr, (val) => val % 2 === 0);
```

**Invalid:**

```javascript
const arr = new Array();

const s = JSON.stringify({});

const i = parseInt("42");

const { ownKeys } = Reflect;
```

**Valid:**

```javascript
const { Array } = primordials;
const arr = new Array();

const { JSONStringify } = primordials;
const s = JSONStringify({});

const { NumberParseInt } = primordials;
const i = NumberParseInt("42");

const { ReflectOwnKeys } = primordials;
```

***

# lint/rules/react-no-danger-with-children.md

URL: https://docs.deno.com/lint/rules/react-no-danger-with-children

Using JSX children together with `dangerouslySetInnerHTML` is invalid as they
will be ignored.

**Invalid:**

```tsx
hello" }}>
  this will never be rendered
;
```

**Valid:**

```tsx
hello" }} />;
```

***

# lint/rules/react-no-danger.md

URL: https://docs.deno.com/lint/rules/react-no-danger

Prevent the use of `dangerouslySetInnerHTML` which can lead to XSS
vulnerabilities if used incorrectly.

**Invalid:**

```tsx
const hello = ;
```

**Valid:**

```tsx
const hello = Hello World!;
```

***

# lint/rules/react-rules-of-hooks.md

URL: https://docs.deno.com/lint/rules/react-rules-of-hooks

Ensure that hooks are called correctly in React/Preact components. They must be
called at the top level of a component and not inside a conditional statement or
a loop.

**Invalid:**

```tsx
// WRONG: Called inside condition
function MyComponent() {
  if (condition) {
    const [count, setCount] = useState(0);
  }
}

// WRONG: Called inside for loop
function MyComponent() {
  for (const item of items) {
    const [count, setCount] = useState(0);
  }
}

// WRONG: Called inside while loop
function MyComponent() {
  while (condition) {
    const [count, setCount] = useState(0);
  }
}

// WRONG: Called after condition
function MyComponent() {
  if (condition) {
    // ...
  }

  const [count, setCount] = useState(0);
}
```

**Valid:**

```tsx
function MyComponent() {
  const [count, setCount] = useState(0);
}
```

***

# lint/rules/require-await.md

URL: https://docs.deno.com/lint/rules/require-await

Disallows async functions that have no await expression or await using
declaration.

In general, the primary reason to use async functions is to use await
expressions or await using declarations inside. If an async function has
neither, it is most likely an unintentional mistake.

**Invalid:**

```typescript
async function f1() {
  doSomething();
}

const f2 = async () => {
  doSomething();
};

const f3 = async () => doSomething();

const obj = {
  async method() {
    doSomething();
  },
};

class MyClass {
  async method() {
    doSomething();
  }
}
```

**Valid:**

```typescript
await asyncFunction();

function normalFunction() {
  doSomething();
}

async function f1() {
  await asyncFunction();
}

const f2 = async () => {
  await asyncFunction();
};

const f3 = async () => await asyncFunction();

async function f4() {
  for await (const num of asyncIterable) {
    console.log(num);
  }
}

async function f5() {
  using = createResource();
}

// empty functions are valid
async function emptyFunction() {}
const emptyArrowFunction = async () => {};

// generators are also valid
async function* gen() {
  console.log(42);
}
```

***

# lint/rules/require-yield.md

URL: https://docs.deno.com/lint/rules/require-yield

Disallows generator functions that have no `yield`.

JavaScript provides generator functions expressed as `function*`, where we can
pause and later resume the function execution at the middle points. At these
points we use the `yield` keyword. In other words, it makes no sense at all to
create generator functions that contain no `yield` keyword, since such functions
could be written as normal functions.

**Invalid:**

```typescript
function* f1() {
  return "f1";
}
```

**Valid:**

```typescript
function* f1() {
  yield "f1";
}

// generator function with empty body is allowed
function* f2() {}

function f3() {
  return "f3";
}
```

***

# lint/rules/single-var-declarator.md

URL: https://docs.deno.com/lint/rules/single-var-declarator

Disallows multiple variable definitions in the same declaration statement.

**Invalid:**

```typescript
const foo = 1, bar = "2";
```

**Valid:**

```typescript
const foo = 1;
const bar = "2";
```

***

# lint/rules/triple-slash-reference.md

URL: https://docs.deno.com/lint/rules/triple-slash-reference

Disallow certain triple slash directives in favor of ES6-style import
declarations.

TypeScript's `///` triple-slash references are a way to indicate that types from
another module are available in a file. Use of triple-slash reference type
directives is generally discouraged in favor of ECMAScript Module imports. This
rule reports on the use of `/// <reference path="..." />`,
`/// <reference types="..." />`, or `/// <reference lib="..." />` directives.

**Invalid:**

```typescript
/// 
import * as foo from "foo";
```

**Valid:**

```typescript
import * as foo from "foo";
```

***

# lint/rules/use-isnan.md

URL: https://docs.deno.com/lint/rules/use-isnan

Disallows comparisons to `NaN`.

Because `NaN` is unique in JavaScript by not being equal to anything, including
itself, the results of comparisons to `NaN` are confusing:

- `NaN === NaN` or `NaN == NaN` evaluate to `false`
- `NaN !== NaN` or `NaN != NaN` evaluate to `true`

Therefore, this rule makes you use the `isNaN()` or `Number.isNaN()` to judge
the value is `NaN` or not.

**Invalid:**

```typescript
if (foo == NaN) {
  // ...
}

if (foo != NaN) {
  // ...
}

switch (NaN) {
  case foo:
    // ...
}

switch (foo) {
  case NaN:
    // ...
}
```

**Valid:**

```typescript
if (isNaN(foo)) {
  // ...
}

if (!isNaN(foo)) {
  // ...
}
```

***

# lint/rules/valid-typeof.md

URL: https://docs.deno.com/lint/rules/valid-typeof

Restricts the use of the `typeof` operator to a specific set of string literals.

When used with a value the `typeof` operator returns one of the following
strings:

- `"undefined"`
- `"object"`
- `"boolean"`
- `"number"`
- `"string"`
- `"function"`
- `"symbol"`
- `"bigint"`

This rule disallows comparison with anything other than one of these string
literals when using the `typeof` operator, as this likely represents a typing
mistake in the string. The rule also disallows comparing the result of a
`typeof` operation with any non-string literal value, such as `undefined`, which
can represent an inadvertent use of a keyword instead of a string. This includes
comparing against string variables even if they contain one of the above values
as this cannot be guaranteed. An exception to this is comparing the results of
two `typeof` operations as these are both guaranteed to return on of the above
strings.

**Invalid:**

```typescript
// typo
typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber";
typeof bar !== "fucntion";

// compare with non-string literals
typeof foo === undefined;
typeof bar == Object;
typeof baz === anotherVariable;
typeof foo == 5;
```

**Valid:**

```typescript
typeof foo === "undefined";
typeof bar == "object";
typeof baz === "string";
typeof bar === typeof qux;
```

***

# lint/rules/verbatim-module-syntax.md

URL: https://docs.deno.com/lint/rules/verbatim-module-syntax

Enforces type imports to be declared as type imports.

This rule ensures that the code works when the `verbatimModuleSyntax` TypeScript
compiler option is enabled. This is useful in libraries distributing TypeScript
code in order to work in more scenarios.

**Invalid:**

```typescript
import { Person } from "./person.ts";

const person: Person = {
  name: "David",
};
console.log(person);
```

```typescript
import { output, Person } from "./person.ts";

const person: Person = {
  name: "David",
};
output(person);
```

**Valid:**

```typescript
import type { Person } from "./person.ts";

const person: Person = {
  name: "David",
};
console.log(person);
```

```typescript
import { output, type Person } from "./person.ts";

const person: Person = {
  name: "David",
};
output(person);
```

***
