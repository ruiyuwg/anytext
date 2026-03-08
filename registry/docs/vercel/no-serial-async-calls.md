# NO\_SERIAL\_ASYNC\_CALLS

> **🔒 Permissions Required**: Conformance

Sequential execution of async/await calls can significantly impact performance because
each await call prevents further execution until resolving its Promise. This rule aims to
refactor sequential async/await calls into parallel executions to enhance performance.

You should note that this rule might not flag some async/await usage patterns. For example:

- Patterns involving conditional statements
- Call expressions
- Patterns that await in a manner that suggests non-serial dependencies between calls

For instance, scenarios where async calls depend conditionally on each other or are part of
complex expressions are not flagged. This includes cases where one async call's outcome is
necessary for subsequent calls, requiring serial execution due to logical or dependency reasons.

The following example **will not** be flagged by this rule:

```ts
async function updateDatabase() {
  const result1 = await async1();
  const result2 = await async2();
  doSomething(result1, result2);
}
```

These patterns fall outside the scope of this rule because safely suggesting parallelization requires more context,
and the rule uses conservative heuristics to avoid false positives.

## How to fix

Instead, of executing async logic sequentially, opt to refactor the logic so it can be run parallel.

This can be fixed using `Promise.all`:

```js
export async function getStaticProps() {
  const firstThing = await getFirstThing();
  const secondThing = await getSecondThing();

  return {
    props: {
      firstThing,
      secondThing,
    },
  };
}
```

We can extract both `await` expressions into a single `Promise.all`, as follows:

```js
export async function getStaticProps() {
  const [firstThing, secondThing] = await Promise.all([
    getFirstThing(),
    getSecondThing(),
  ]);

  return {
    props: {
      firstThing,
      secondThing,
    },
  };
}
```

title: "NO\_UNNECESSARY\_PROP\_SPREADING"
description: "Disallows the usage of object spreading in a JSX component."
last\_updated: "2026-03-08T05:03:12.821Z"
source: "https://vercel.com/docs/conformance/rules/NO\_UNNECESSARY\_PROP\_SPREADING"

# NO\_UNNECESSARY\_PROP\_SPREADING

> **🔒 Permissions Required**: Conformance

This rule detects the usage of the spread operator when spreading an object as a prop within a JSX component.

When spreading an object in the component, the data types of the object's properties are not validated, potentially causing unexpected runtime errors or unintended behavior.

## Examples

In the following example, the `Header` component contains an object with the spread operator being applied to it.

We don't know if the props that the `Header` component reads will accept all the values contained in the `foo` object.

```tsx filename="app/dashboard/page.tsx" {2}
function HomePage() {
  return <Header {...{ foo }}>Hello World</Header>;
}

export default HomePage;
```

## How to fix

You can remove the spread operator from the JSX component, and list all props explicitly.

```tsx filename="app/dashboard/page.tsx" {2}
function HomePage() {
  return (
    <Header bar={foo.bar} baz={foo.baz}>
      Hello World
    </Header>
  );
}

export default HomePage;
```

In the example above, [TypeScript](https://www.typescriptlang.org/) will be able to type-check all props.

title: "NO\_VARIABLE\_IMPORT\_REFERENCES"
description: "import and require statements must be passed string literals to avoid arbitrary user access to code."
last\_updated: "2026-03-08T05:03:12.824Z"
source: "https://vercel.com/docs/conformance/rules/NO\_VARIABLE\_IMPORT\_REFERENCES"

# NO\_VARIABLE\_IMPORT\_REFERENCES

> **🔒 Permissions Required**: Conformance

`import` and `require` statements load code from another file. When the
location of the import is influenced by user input, the user may be able to
load code that would otherwise be inaccessible to them. Such imports should
protect against this by adding guards to make sure that arbitrary code can not
be loaded from the import statement.

## Example

The following code would be flagged by this rule:

```typescript
function loadDynamicCode(moduleName: string) {
  return import(moduleName);
}
```

In this example, it can not be guaranteed that the `moduleName` that is
provided would not be arbitrary input that could load unintended code.

## How to fix

Instances of this rule should be reviewed by a knowledgeable security person.
If user input is used to select which module is loaded, guards against arbitrary
strings should be added, such as only allowing access to a list of valid options.
If no user input is involved in the import, then this code could be allowlisted
after being reviewed by a security team member, but developers should be careful
to ensure that only the desired code can be loaded.

title: "PACKAGE\_JSON\_DESCRIPTION\_REQUIRED"
description: "Requires that every package.json file has the description field set."
last\_updated: "2026-03-08T05:03:12.831Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_DESCRIPTION\_REQUIRED"

# PACKAGE\_JSON\_DESCRIPTION\_REQUIRED

> **🔒 Permissions Required**: Conformance

This check ensures that every `package.json` has a `description` field.
This field is used to describe the workspace's purpose within the monorepo.

See the [Node.js docs](https://nodejs.org/api/packages.html#description) for more information.

## Related Rules

- [PACKAGE\_JSON\_NAME\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_NAME_REQUIRED)
- [PACKAGE\_JSON\_PRIVATE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_PRIVATE_REQUIRED)
- [PACKAGE\_JSON\_TYPE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_TYPE_REQUIRED)
- [PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_SIDE_EFFECTS_REQUIRED)

## How to fix

Add the `description` field to the `package.json` file that explains
what the package does and when it should be used.

title: "PACKAGE\_JSON\_DUPLICATE\_DEPENDENCIES"
description: "Found duplicate dependencies between the list of dependencies and devDependencies or peerDependencies in a package.json file.."
last\_updated: "2026-03-08T05:03:12.828Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_DUPLICATE\_DEPENDENCIES"

# PACKAGE\_JSON\_DUPLICATE\_DEPENDENCIES

> **🔒 Permissions Required**: Conformance

Packages that are listed in the `dependencies` section of `package.json` should
not be listed in `devDependencies` or `peerDependencies`. A package in the
`dependencies` section says that the package are required for the functionality
of your workspace, in which case there is no reason to also list it in
`devDependencies` or `peerDependencies`.

## Example

This `package.json` file would cause the check to fail:

```json filename="package.json"
{
  "name": "workspace",
  "dependencies": {
    "@next/mdx": "13.1.5"
  },
  "devDependencies": {
    "@next/mdx": "13.1.5"
  }
}
```

## How to fix

If the package is needed to use the package from your workspace, you can remove
the package from the `devDependencies` and `peerDependencies` sections. If the
package is only needed for development of your workspace or if the package is
only needed to express version compatibility requirements and it is not needed
for the functionality of your workspace when people use your package, then it
can be left in `devDependencies` or `peerDependencies` and be removed from
`dependencies`.

title: "PACKAGE\_JSON\_NAME\_REQUIRED"
description: "Requires that every package.json file has the name field set to ensure each workspace has a unique identifier."
last\_updated: "2026-03-08T05:03:12.835Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_NAME\_REQUIRED"

# PACKAGE\_JSON\_NAME\_REQUIRED

> **🔒 Permissions Required**: Conformance

This check ensures that every `package.json` has a `name` field. This field is important because
it used to identify the workspace in the monorepo.

See the [Node.js docs](https://nodejs.org/api/packages.html#name) for more information.

## Related Rules

- [PACKAGE\_JSON\_DESCRIPTION\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_DESCRIPTION_REQUIRED)
- [PACKAGE\_JSON\_PRIVATE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_PRIVATE_REQUIRED)
- [PACKAGE\_JSON\_TYPE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_TYPE_REQUIRED)
- [PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_SIDE_EFFECTS_REQUIRED)

## How to fix

Add the `name` field to the `package.json` file that contains a unique name for
this package. The name should be understandable by someone viewing or using the
package as to what it does.

title: "PACKAGE\_JSON\_PRIVATE\_REQUIRED"
description: "Requires that every package.json file has the private field set to prevent accidental publishing to npm."
last\_updated: "2026-03-08T05:03:12.839Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_PRIVATE\_REQUIRED"

# PACKAGE\_JSON\_PRIVATE\_REQUIRED

> **🔒 Permissions Required**: Conformance

This check ensures that every `package.json` has the `private` field set to true or false.
This field ensures that the workspace is not accidentally published to npm. In a monorepo,
this should be the default to prevent packages from being accidentally published and can be explicitly set to
`false` to indicate that the package can be published.

## Related Rules

- [PACKAGE\_JSON\_NAME\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_NAME_REQUIRED)
- [PACKAGE\_JSON\_DESCRIPTION\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_DESCRIPTION_REQUIRED)
- [PACKAGE\_JSON\_TYPE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_TYPE_REQUIRED)
- [PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_SIDE_EFFECTS_REQUIRED)

## How to fix

Packages should set `private` to `true` unless the package is
intended to be published in which case it can be explicitly set to `false`.

title: "PACKAGE\_JSON\_PRIVATE\_REQUIREDPACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED"
description: "Requires that every package.json file has the sideEffects field set to ensure tree-shaking works optimally."
last\_updated: "2026-03-08T05:03:12.843Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED"

# PACKAGE\_JSON\_PRIVATE\_REQUIREDPACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED

> **🔒 Permissions Required**: Conformance

This check ensures that every `package.json` has a `sideEffects` field.
The `sideEffects` field is required for shared packages. This field helps bundlers
make assumptions about packages that improve tree shaking, or pruning
files that aren't used and don't have any global side effects.

See https://webpack.js.org/guides/tree-shaking/ for more information.

## Related Rules

- [PACKAGE\_JSON\_NAME\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_NAME_REQUIRED)
- [PACKAGE\_JSON\_DESCRIPTION\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_DESCRIPTION_REQUIRED)
- [PACKAGE\_JSON\_PRIVATE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_PRIVATE_REQUIRED)
- [PACKAGE\_JSON\_TYPE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_TYPE_REQUIRED)

## How to fix

The `sideEffects` field should be set to `false` unless the code in that workspace has
global side effects, in which case it should be set to `true` or an array of glob
patterns for files that do have side effects.

title: "PACKAGE\_JSON\_TYPE\_REQUIRED"
description: "Requires that every package.json file has the type field set to encourage using ES Modules since commonjs is the default."
last\_updated: "2026-03-08T05:03:12.848Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_JSON\_TYPE\_REQUIRED"

# PACKAGE\_JSON\_TYPE\_REQUIRED

> **🔒 Permissions Required**: Conformance

This check ensures that every `package.json` has a `type` field. This field determines
how files within the workspace are treated by default. Files are treated as
[CommonJS](https://nodejs.org/api/modules.html) by default. However, the new recommendation
is to use [ES Modules](https://nodejs.org/api/esm.html).

This field is required so that packages explicitly choose which module format to use,
preferring ES Modules when possible.

See the [Node.js docs](https://nodejs.org/api/packages.html#type) for more information.

## Related Rules

- [PACKAGE\_JSON\_NAME\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_NAME_REQUIRED)
- [PACKAGE\_JSON\_DESCRIPTION\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_DESCRIPTION_REQUIRED)
- [PACKAGE\_JSON\_PRIVATE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_PRIVATE_REQUIRED)
- [PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_SIDE_EFFECTS_REQUIRED)

## How to fix

The `type` field should be set to `module` when possible, although there are still situations
where `commonjs` has to be used.

title: "PACKAGE\_MANAGEMENT\_NO\_CIRCULAR\_IMPORTS"
description: "Circular imports between two files are not allowed."
last\_updated: "2026-03-08T05:03:12.857Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_MANAGEMENT\_NO\_CIRCULAR\_IMPORTS"

# PACKAGE\_MANAGEMENT\_NO\_CIRCULAR\_IMPORTS

> **🔒 Permissions Required**: Conformance

This check ensures that there is no path through import statements back to the
original file. This helps to keep dependencies between files clean, which aids
in dependency analysis and refactoring.

## Example

```ts filename="component-a.ts"
import Badge from './component-b';

export function withHigherOrderComponent({ children }) {
  return <div>{children}</div>;
}

export function Page() {
  return (
    <div>
      <Badge />
    </div>
  );
}
```

```ts filename="component-b.ts"
import { withHigherOrderComponent } from './component-a';

function Badge() {
  return <div>Badge</div>;
}

export default withHigherOrderComponent(Badge);
```

## How to fix

The exports in the file that has a circular import should be refactored so that
the circular import doesn't exist anymore. This might be fixed by moving some
of the exports in a file to a separate file so that the imports don't cause a
circular import. In some cases, it may be necessary to refactor the code to
avoid the circular import.

title: "PACKAGE\_MANAGEMENT\_NO\_UNRESOLVED\_IMPORTS"
description: "Import statements that can not be resolved to a local file or a package from package.json dependencies are not allowed."
last\_updated: "2026-03-08T05:03:12.860Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_MANAGEMENT\_NO\_UNRESOLVED\_IMPORTS"

# PACKAGE\_MANAGEMENT\_NO\_UNRESOLVED\_IMPORTS

> **🔒 Permissions Required**: Conformance

All imports must be able to be resolved to a file local to the workspace or a
package declared as a dependency within the `package.json` file. This ensures
that the workspace has not missed any dependencies and is not relying on
global dependencies.

## Example

```ts filename="component.ts"
import { useState } from 'react';
import { useRouter } from 'next/router';
```

The `package.json` is missing a dependency on the `next` package.

```json filename="package.json"
{
  "name": "shared-component-pkg",
  "dependencies": {
    "react": "19.0.0-beta-4508873393-20240430"
  }
}
```

## How to fix

If the workspace is missing a package dependency, add the appropriate one to
the `package.json` file of the workspace. In the example above, a dependency
on the `next` package should be added.

title: "PACKAGE\_MANAGEMENT\_REQUIRED\_README"
description: "Every workspace is required to have a README.md file in the root of the workspace."
last\_updated: "2026-03-08T05:03:12.850Z"
source: "https://vercel.com/docs/conformance/rules/PACKAGE\_MANAGEMENT\_REQUIRED\_README"

# PACKAGE\_MANAGEMENT\_REQUIRED\_README

> **🔒 Permissions Required**: Conformance

A `README.md` file helps orient readers to the purpose of a workspace and
instructions how to use it, which makes it straightforward for people browsing the code
to understand its purpose, whether they should use it, and how to make changes
to the code.

## How to fix

Add a `README.md` file in the workspace directory. This file can contain a
description of the package, and any instructions for developers or users to
build or use the package.

title: "REACT\_NO\_STATIC\_IMPORTS\_IN\_EVENT\_HANDLERS"
description: "Prevent static imports that are referenced only in React event handlers from being eagerly loaded in React components."
last\_updated: "2026-03-08T05:03:12.854Z"
source: "https://vercel.com/docs/conformance/rules/REACT\_NO\_STATIC\_IMPORTS\_IN\_EVENT\_HANDLERS"

# REACT\_NO\_STATIC\_IMPORTS\_IN\_EVENT\_HANDLERS

> **🔒 Permissions Required**: Conformance

React event handlers are async, and as such, this means we can defer loading the
associated code until we interact with the UI, triggering that event handler. Specifically, this
means we can improve initial code size and the overhead of loading the code until it is actually needed.

## How to fix

Instead of using static imports at the top of your module, you can use dynamic imports as needed in your React event handlers.

Before:

```js
import foo from 'foo';

const onClick = () => {
  foo.doSomething();
};
```

After:

```js
const onClick = () => {
  import('foo').then((foo) => {
    foo.doSomething();
  });
};
```

Additionally, you can [configure](/docs/conformance/customize) the rule for only specific React event handlers:

```json
"REACT_NO_STATIC_IMPORTS_IN_EVENT_HANDLERS": {
  eventAllowList: ['onClick'],
}
```

title: "REACT\_STABLE\_CONTEXT\_PROVIDER\_VALUE"
description: "Prevent non-stable values from being used in React Context providers that could cause unnecessary re-renders."
last\_updated: "2026-03-08T05:03:12.863Z"
source: "https://vercel.com/docs/conformance/rules/REACT\_STABLE\_CONTEXT\_PROVIDER\_VALUE"

# REACT\_STABLE\_CONTEXT\_PROVIDER\_VALUE

> **🔒 Permissions Required**: Conformance

When non-stable values (i.e. object identities) are used as the `value` prop for `Context.Provider`,
React will trigger cascading updates to all components that use this context value on each
render, causing needless re-renders (affecting application performance) or causing
unintended consequences that may negatively affect the user-experience.

## Examples

Examples of incorrect code for this rule:

```jsx
return <SomeContext.Provider value={{ foo: 'bar' }}>...</SomeContext.Provider>;
```

Examples of correct code for this rule:

```jsx
const foo = useMemo(() => ({ foo: 'bar' }), []);

return <SomeContext.Provider value={foo}>...</SomeContext.Provider>;
```

## How to fix

One way to fix this issue may be to wrap the value in a `useMemo()`. If the value is a function
then `useCallback()` can be used as well. See the above examples for a reference on how you might
fix this by wrapping with `useMemo`.

title: "REQUIRE\_CARET\_DEPENDENCIES"
description: "Prevent the use of dependencies without a caret ("
last\_updated: "2026-03-08T05:03:12.867Z"
source: "https://vercel.com/docs/conformance/rules/REQUIRE\_CARET\_DEPENDENCIES"

# REQUIRE\_CARET\_DEPENDENCIES

> **🔒 Permissions Required**: Conformance

Using a caret ("^") as a prefix in the version of your dependencies is recommended. [Caret Ranges](https://github.com/npm/node-semver?tab=readme-ov-file#caret-ranges-123-025-004) allows patch and minor updates for versions 1.0.0 and above, patch updates for versions 0.X >=0.1.0, and no updates for versions 0.0.X. This rule is applicable to `"dependencies"` and `"devDependencies"`, and it helps maintain the security and health of your codebase.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

## Examples

This rule will catch any `package.json` files:

- Using `~` or `*` as a prefix of the version, like `~1.0.0`.
- Version without a prefix, such as `1.0.0`.

```JSX filename="package.json" {3-4} {7}
{
  "dependencies": {
    "chalk": "~5.3.0",
    "ms": "*2.1.3",
  },
  "devDependencies": {
    "semver": "7.6.0"
  },
}
```

## How to fix

If you hit this issue, you can resolve it by adding a `"^"` to the version of your dependency. If you want to keep using a pinned version, or another prefix, you can include the dependency in the [Allowlist](https://vercel.com/docs/conformance/allowlist).

```JSX filename="package.json" {3}
{
  "dependencies": {
    "semver": "^7.6.0"
  },
}
```

title: "REQUIRE\_DOCS\_ON\_EXPORTED\_FUNCTIONS"
description: "Requires that all exported functions have JSDoc comments."
last\_updated: "2026-03-08T05:03:12.871Z"
source: "https://vercel.com/docs/conformance/rules/REQUIRE\_DOCS\_ON\_EXPORTED\_FUNCTIONS"
