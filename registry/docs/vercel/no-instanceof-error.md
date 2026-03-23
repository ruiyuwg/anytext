# NO\_INSTANCEOF\_ERROR

> **🔒 Permissions Required**: Conformance

A common pattern for checking if an object is an error is to use
`error instanceof Error`.

This pattern is problematic because errors can come from other [realms](https://tc39.es/ecma262/#realm).
Errors from other realms are instantiated from the realm's global `Error`
constructor, and are therefore not instances of the current realm's global
`Error` constructor and will not pass the `instanceof` check.

Some examples of where you might hit this include:

- In Node.js, errors from a workers are instances of `Error` from the worker's
  global environment.
- In browser environments, errors from `iframe` are instances of `Error` from
  the `iframe`'s global environment (i.e. `iframe.contentWindow.Error`).

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

## Examples

In this example, an error is returned from a [`vm`](https://nodejs.org/api/vm.html) context. As this error was created in a different realm, `instanceof Error` returns false.

```tsx {6}
const vm = require('node:vm');

const context = vm.createContext({});
const error = vm.runInContext('new Error()', context);

if (error instanceof Error) {
  // Returns `false` because `error` is from a different realm.
}
```

## How to fix

### Node.js

You can use [`isNativeError`](https://nodejs.org/api/util.html#utiltypesisnativeerrorvalue)
in Node.js environments, which will return `true` for errors from other realms.

```tsx {7}
import { isNativeError } from 'node:util/types';
const vm = require('node:vm');

const context = vm.createContext({});
const error = vm.runInContext('new Error()', context);

if (isNativeError(error)) {
  // ...
}
```

### Browsers

Use a library like [`is-error`](https://www.npmjs.com/package/is-error) to
ensure you cover errors from other realms.

You can also use `Object.prototype.toString.call(error) === '[object Error]'`
in some cases. This method will not work for custom errors, and you'll need to
traverse the prototype chain (i.e. `Object.getPrototypeOf(error)`)to handle
those cases.

The following code is a simplified version of the code used in the `is-error`
library:

```ts
function isError(error) {
  if (typeof error !== 'object') {
    return false;
  }

  if (error instanceof Error) {
    return true;
  }

  let currentError = error;
  while (currentError) {
    if (Object.prototype.toString.call(currentError) === '[object Error]') {
      return true;
    }
    currentError = Object.getPrototypeOf(currentError);
  }

  return false;
}
```

title: "NO\_MIXED\_ASYNC\_MODULES"
description: "Prevent imports to modules that contain top-level awaits in your applications."
last\_updated: "2026-03-23T09:40:07.744Z"
source: "https://vercel.com/docs/conformance/rules/NO\_MIXED\_ASYNC\_MODULES"

# NO\_MIXED\_ASYNC\_MODULES

> **🔒 Permissions Required**: Conformance

Top-level await expressions in modules that are imported by other modules in sync
prevent possible lazy module optimizations from being deployed on the module containing
the top-level await.

One such optimization this prevents is inline lazy imports. Inline lazy imports allow
for modules to be lazily evaluated and executed when they're used, rather than at
initialization time of the module that uses them, improving initialization performance.

This is particularly impactful for modules that might only be used conditionally or
given a user's interaction which might happen much latter in an application. Without this optimization, the module initialization times, such as for cold boots on Vercel Functions, could be slowed down for every request.

## How to fix

Consider refactoring the import to a dynamic import instead, or removing the top-level await
in favor of standard import.

If a top-level await is important, then it's important that any other modules importing the
module with the top-level await do so dynamically, as to avoid affecting initialization performance.

For example, this can be refactored:

```js
// Contains a top-level await
import { asyncConfig } from 'someModule';

function doSomething(data) {
  processData(data, asyncConfig);
}
```

To this:

```js
function doSomething(data) {
  import('someModule').then(({ asyncConfig }) => {
    processData(data, asyncConfig);
  });
}
```

Or this:

```js
import { asyncConfig } from 'someModule';

// Note the async keyword on the function
async function doSomething(data) {
  processData(data, asyncConfig);
}
```

title: "NO\_POSTINSTALL\_SCRIPT"
description: "Prevent the use of "
last\_updated: "2026-03-23T09:40:07.748Z"
source: "https://vercel.com/docs/conformance/rules/NO\_POSTINSTALL\_SCRIPT"

# NO\_POSTINSTALL\_SCRIPT

> **🔒 Permissions Required**: Conformance

Modifying, adding, or updating any dependencies in your application triggers the execution of the `"postinstall"` script. Consequently, incorporating a `"postinstall"` script in your application's package.json leads to increased installation times for all users.

## How to fix

If you hit this issue, you can resolve it by removing the `"postinstall"` script in the `package.json` file.

```JSX filename="package.json" {3}
{
  "scripts": {
    "postinstall": "sleep 360"
  },
}
```

title: "NO\_SERIAL\_ASYNC\_CALLS"
description: "Prevent blocking serial async await calls in your applications."
last\_updated: "2026-03-23T09:40:07.755Z"
source: "https://vercel.com/docs/conformance/rules/NO\_SERIAL\_ASYNC\_CALLS"
