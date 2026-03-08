# lint/rules/no-this-alias.md

URL: https://docs.deno.com/lint/rules/no-this-alias

Disallows assigning variables to `this`.

In most cases, storing a reference to `this` in a variable could be avoided by
using arrow functions properly, since they establish `this` based on the scope
where the arrow function is defined.

Let's take a look at a concrete example:

```typescript
const obj = {
  count: 0,
  doSomethingLater() {
    setTimeout(function () { // this function executes on the global scope; `this` evalutes to `globalThis`
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
// `NaN` is printed, because the property `count` is not in the global scope.
```

In the above example, `this` in the function passed to `setTimeout` evaluates to
`globalThis`, which results in the expected value `1` not being printed.

If you wanted to work around it without arrow functions, you would store a
reference to `this` in another variable:

```typescript
const obj = {
  count: 0,
  doSomethingLater() {
    const self = this; // store a reference to `this` in `self`
    setTimeout(function () {
      // use `self` instead of `this`
      self.count++;
      console.log(self.count);
    }, 300);
  },
};

obj.doSomethingLater();
// `1` is printed as expected
```

But in this case arrow functions come in handy. With arrow functions, the code
becomes way clearer and easier to understand:

```typescript
const obj = {
  count: 0,
  doSomethingLater() {
    setTimeout(() => { // pass an arrow function
      // `this` evaluates to `obj` here
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
// `1` is printed as expected
```

This example is taken from
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

**Invalid:**

```typescript
const self = this;

function foo() {
  const self = this;
}

const bar = () => {
  const self = this;
};
```

**Valid:**

```typescript
const self = "this";

const [foo] = this;
```

***

# lint/rules/no-this-before-super.md

URL: https://docs.deno.com/lint/rules/no-this-before-super

Disallows use of `this` or `super` before calling `super()` in constructors.

The access to `this` or `super` before calling `super()` in the constructor of
derived classes leads to [`ReferenceError`]. To prevent it, this lint rule
checks if there are accesses to `this` or `super` before calling `super()` in
constructors.

[`ReferenceError`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

**Invalid:**

```typescript
class A extends B {
  constructor() {
    this.foo = 0;
    super();
  }
}

class C extends D {
  constructor() {
    super.foo();
    super();
  }
}
```

**Valid:**

```typescript
class A extends B {
  constructor() {
    super();
    this.foo = 0;
  }
}

class C extends D {
  constructor() {
    super();
    super.foo();
  }
}

class E {
  constructor() {
    this.foo = 0;
  }
}
```

***

# lint/rules/no-throw-literal.md

URL: https://docs.deno.com/lint/rules/no-throw-literal

Disallow throwing literals as exceptions.

It is considered good practice to only `throw` the `Error` object itself or an
object using the `Error` object as base objects for user-defined exceptions. The
fundamental benefit of `Error` objects is that they automatically keep track of
where they were built and originated.

**Invalid:**

```typescript
throw "error";
throw 0;
throw undefined;
throw null;
```

**Valid:**

```typescript
throw new Error("error");
```

***

# lint/rules/no-top-level-await.md

URL: https://docs.deno.com/lint/rules/no-top-level-await

Disallows the use of top level await expressions.

Top level await cannot be used when distributing CommonJS/UMD via dnt.

**Invalid:**

```typescript
await foo();
for await (item of items) {}
```

**Valid:**

```typescript
async function foo() {
  await task();
}
async function foo() {
  for await (item of items) {}
}
```

***

# lint/rules/no-undef.md

URL: https://docs.deno.com/lint/rules/no-undef

Disallow the use of undeclared variables.

**Invalid:**

```typescript
const foo = someFunction();
const bar = a + 1;
```

***

# lint/rules/no-unreachable.md

URL: https://docs.deno.com/lint/rules/no-unreachable

Disallows the unreachable code after the control flow statements.

Because the control flow statements (`return`, `throw`, `break` and `continue`)
unconditionally exit a block of code, any statements after them cannot be
executed.

**Invalid:**

```typescript
function foo() {
  return true;
  console.log("done");
}
```

```typescript
function bar() {
  throw new Error("Oops!");
  console.log("done");
}
```

```typescript
while (value) {
  break;
  console.log("done");
}
```

```typescript
throw new Error("Oops!");
console.log("done");
```

```typescript
function baz() {
  if (Math.random() < 0.5) {
    return;
  } else {
    throw new Error();
  }
  console.log("done");
}
```

```typescript
for (;;) {}
console.log("done");
```

**Valid:**

```typescript
function foo() {
  return bar();
  function bar() {
    return 1;
  }
}
```

***

# lint/rules/no-unsafe-finally.md

URL: https://docs.deno.com/lint/rules/no-unsafe-finally

Disallows the use of control flow statements within `finally` blocks.

Use of the control flow statements (`return`, `throw`, `break` and `continue`)
overrides the usage of any control flow statements that might have been used in
the `try` or `catch` blocks, which is usually not the desired behaviour.

**Invalid:**

```typescript
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    return 3;
  }
};
```

```typescript
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    throw new Error();
  }
};
```

**Valid:**

```typescript
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    console.log("hola!");
  }
};
```

***

# lint/rules/no-unsafe-negation.md

URL: https://docs.deno.com/lint/rules/no-unsafe-negation

Disallows the usage of negation operator `!` as the left operand of relational
operators.

`!` operators appearing in the left operand of the following operators will
sometimes cause an unexpected behavior because of the operator precedence:

- `in` operator
- `instanceof` operator

For example, when developers write a code like `!key in someObject`, most likely
they want it to behave just like `!(key in someObject)`, but actually it behaves
like `(!key) in someObject`. This lint rule warns such usage of `!` operator so
it will be less confusing.

**Invalid:**

<!-- deno-fmt-ignore -->

```typescript
if (!key in object) {}
if (!foo instanceof Foo) {}
```

**Valid:**

```typescript
if (!(key in object)) {}
if (!(foo instanceof Foo)) {}
if ((!key) in object) {}
if ((!foo) instanceof Foo) {}
```

***

# lint/rules/no-unused-labels.md

URL: https://docs.deno.com/lint/rules/no-unused-labels

Disallows unused labels.

A label that is declared but never used is most likely developer's mistake. If
that label is meant to be used, then write a code so that it will be used.
Otherwise, remove the label.

**Invalid:**

```typescript
LABEL1:
while (true) {
  console.log(42);
}

LABEL2:
for (let i = 0; i < 5; i++) {
  console.log(42);
}

LABEL3:
for (const x of xs) {
  console.log(x);
}
```

**Valid:**

```typescript
LABEL1:
while (true) {
  console.log(42);
  break LABEL1;
}

LABEL2:
for (let i = 0; i < 5; i++) {
  console.log(42);
  continue LABEL2;
}

for (const x of xs) {
  console.log(x);
}
```

***

# lint/rules/no-unused-vars.md

URL: https://docs.deno.com/lint/rules/no-unused-vars

Enforces all variables are used at least once.

If there are variables that are declared but not used anywhere, it's most likely
because of incomplete refactoring. This lint rule detects and warns such unused
variables.

Variable `a` is considered to be "used" if any of the following conditions are
satisfied:

- its value is read out, like `console.log(a)` or `let otherVariable = a;`
- it's called or constructed, like `a()` or `new a()`
- it's exported, like `export const a = 42;`

If a variable is just assigned to a value but never read out, then it's
considered to be *"not used"*.

```typescript
let a;
a = 42;

// `a` is never read out
```

If you want to declare unused variables intentionally, prefix them with the
underscore character `_`, like `_a`. This rule ignores variables that are
prefixed with `_`.

**Invalid:**

```typescript
const a = 0;

const b = 0; // this `b` is never used
function foo() {
  const b = 1; // this `b` is used
  console.log(b);
}
foo();

let c = 2;
c = 3;

// recursive function calls are not considered to be used, because only when `d`
// is called from outside the function body can we say that `d` is actually
// called after all.
function d() {
  d();
}

// `x` is never used
export function e(x: number): number {
  return 42;
}

const f = "unused variable";
```

**Valid:**

```typescript
const a = 0;
console.log(a);

const b = 0;
function foo() {
  const b = 1;
  console.log(b);
}
foo();
console.log(b);

let c = 2;
c = 3;
console.log(c);

function d() {
  d();
}
d();

export function e(x: number): number {
  return x + 42;
}

export const f = "exported variable";
```

***

# lint/rules/no-unversioned-import.md

URL: https://docs.deno.com/lint/rules/no-unversioned-import

Ensure that inline dependency imports have a version specifier.

### Invalid:

```ts
import foo from "npm:chalk";
import foo from "jsr:@std/path";
```

### Valid:

```ts
import foo from "npm:chalk@5.3.0";
import foo from "npm:chalk@^5.3.0";
import foo from "jsr:@std/path@1.0.8";
import foo from "jsr:@std/path@^1.0.8";
```

***

# lint/rules/no-useless-rename.md

URL: https://docs.deno.com/lint/rules/no-useless-rename

Disallow useless rename operations where both the original and new name are
exactly the same. This is often a leftover from a refactoring procedure and can
be safely removed.

**Invalid:**

```ts
import { foo as foo } from "foo";
const { foo: foo } = obj;
export { foo as foo };
```

**Valid:**

```ts
import { foo as bar } from "foo";
const { foo: bar } = obj;
export { foo as bar };
```

***

# lint/rules/no-var.md

URL: https://docs.deno.com/lint/rules/no-var

Enforces the use of block scoped variables over more error prone function scoped
variables. Block scoped variables are defined using `const` and `let` keywords.

`const` and `let` keywords ensure the variables defined using these keywords are
not accessible outside their block scope. On the other hand, variables defined
using `var` keyword are only limited by their function scope.

**Invalid:**

```typescript
var foo = "bar";
```

**Valid:**

```typescript
const foo = 1;
let bar = 2;
```

***

# lint/rules/no-window-prefix.md

URL: https://docs.deno.com/lint/rules/no-window-prefix

Disallows the use of Web APIs via the `window` object.

In most situations, the global variable `window` works like `globalThis`. For
example, you could call the `fetch` API like `window.fetch(..)` instead of
`fetch(..)` or `globalThis.fetch(..)`. In Web Workers, however, `window` is not
available, but instead `self`, `globalThis`, or no prefix work fine. Therefore,
for compatibility between Web Workers and other contexts, it's highly
recommended to not access global properties via `window`.

Some APIs, including `window.alert`, `window.location` and `window.history`, are
allowed to call with `window` because these APIs are not supported or have
different meanings in Workers. In other words, this lint rule complains about
the use of `window` only if it's completely replaceable with `self`,
`globalThis`, or no prefix.

**Invalid:**

```typescript
const a = await window.fetch("https://deno.land");

const b = window.Deno.metrics();
```

**Valid:**

```typescript
const a1 = await fetch("https://deno.land");
const a2 = await globalThis.fetch("https://deno.land");
const a3 = await self.fetch("https://deno.land");

const b1 = Deno.metrics();
const b2 = globalThis.Deno.metrics();
const b3 = self.Deno.metrics();

// `alert` is allowed to call with `window` because it's not supported in Workers
window.alert("🍣");

// `location` is also allowed
window.location.host;
```

***

# lint/rules/no-window.md

URL: https://docs.deno.com/lint/rules/no-window

Disallows the use of the `window` object.

The `window` global is no longer available in Deno. Deno does not have a window
and `typeof window === "undefined"` is often used to tell if the code is running
in the browser.

**Invalid:**

```typescript
const a = await window.fetch("https://deno.land");

const b = window.Deno.metrics();
console.log(window);

window.addEventListener("load", () => {
  console.log("Loaded.");
});
```

**Valid:**

```typescript
const a1 = await fetch("https://deno.land");
const a2 = await globalThis.fetch("https://deno.land");
const a3 = await self.fetch("https://deno.land");

const b1 = Deno.metrics();
const b2 = globalThis.Deno.metrics();
const b3 = self.Deno.metrics();
console.log(globalThis);

addEventListener("load", () => {
  console.log("Loaded.");
});
```

***

# lint/rules/no-with.md

URL: https://docs.deno.com/lint/rules/no-with

Disallows the usage of `with` statements.

The `with` statement is discouraged as it may be the source of confusing bugs
and compatibility issues. For more details, see [with - JavaScript | MDN].

[with - JavaScript | MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with

**Invalid:**

```typescript
with (someVar) {
  console.log("foo");
}
```

***

# lint/rules/prefer-as-const.md

URL: https://docs.deno.com/lint/rules/prefer-as-const

Recommends using const assertion (`as const`) over explicitly specifying literal
types or using type assertion.

When declaring a new variable of a primitive literal type, there are three ways:

1. adding an explicit type annotation
2. using normal type assertion (like `as "foo"`, or `<"foo">`)
3. using const assertion (`as const`)

This lint rule suggests using const assertion because it will generally lead to
a safer code. For more details about const assertion, see
[the official handbook](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

**Invalid:**

```typescript
let a: 2 = 2; // type annotation
let b = 2 as 2; // type assertion
let c = <2> 2; // type assertion
let d = { foo: 1 as 1 }; // type assertion
```

**Valid:**

```typescript
let a = 2 as const;
let b = 2 as const;
let c = 2 as const;
let d = { foo: 1 as const };

let x = 2;
let y: string = "hello";
let z: number = someVariable;
```

***

# lint/rules/prefer-ascii.md

URL: https://docs.deno.com/lint/rules/prefer-ascii

Ensures that the code is fully written in ASCII characters.

V8, the JavaScript engine Deno relies on, provides a method that strings get
populated outside V8's heap. In particular, if they are composed of one-byte
characters only, V8 can handle them much more efficiently through
[`v8::String::ExternalOneByteStringResource`]. In order to leverage this V8
feature in the internal of Deno, this rule checks if all characters in the code
are ASCII.

[`v8::String::ExternalOneByteStringResource`]: https://v8.github.io/api/head/classv8_1_1String_1_1ExternalOneByteStringResource.html

That said, you can also make use of this lint rule for something other than
Deno's internal JavaScript code. If you want to make sure your codebase is made
up of ASCII characters only (e.g. want to disallow non-ASCII identifiers) for
some reasons, then this rule will be helpful.

**Invalid:**

```typescript
const π = Math.PI;

// string literals are also checked
const ninja = "🥷";

function こんにちは(名前: string) {
  console.log(`こんにちは、${名前}さん`);
}

// “comments” are also checked
// ^        ^
// |        U+201D
// U+201C
```

**Valid:**

```typescript
const pi = Math.PI;

const ninja = "ninja";

function hello(name: string) {
  console.log(`Hello, ${name}`);
}

// "comments" are also checked
```

***
