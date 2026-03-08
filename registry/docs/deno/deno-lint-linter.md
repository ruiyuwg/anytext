# `deno lint`, linter

> Run the Deno linter to check your code for errors and apply automated fixes

URL: https://docs.deno.com/runtime/reference/cli/lint

## Available rules

For a complete list of supported rules, visit [List of rules](/lint/)
documentation page.

## Ignore directives

### File level

To ignore a whole file use `// deno-lint-ignore-file` at the top of the file:

```ts
// deno-lint-ignore-file

function foo(): any {
  // ...
}
```

You can also specify the reason for ignoring the file:

```ts
// deno-lint-ignore-file -- reason for ignoring

function foo(): any {
  // ...
}
```

The ignore directive must be placed before the first statement or declaration:

```ts
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

/**
 * Some JS doc
 */

// deno-lint-ignore-file

import { bar } from "./bar.js";

function foo(): any {
  // ...
}
```

You can also ignore certain diagnostics in the whole file:

```ts
// deno-lint-ignore-file no-explicit-any no-empty

function foo(): any {
  // ...
}
```

If there are multiple `// deno-lint-ignore-file` directives, all but the first
one are ignored:

```ts
// This is effective
// deno-lint-ignore-file no-explicit-any no-empty

// But this is NOT effective
// deno-lint-ignore-file no-debugger

function foo(): any {
  debugger; // not ignored!
}
```

### Line level

To ignore specific diagnostics use `// deno-lint-ignore <codes...>` on the
preceding line of the offending line.

```ts
// deno-lint-ignore no-explicit-any
function foo(): any {
  // ...
}

// deno-lint-ignore no-explicit-any explicit-function-return-type
function bar(a: any) {
  // ...
}
```

You must specify the names of the rules to be ignored.

You can also specify the reason for ignoring the diagnostic:

```ts
// deno-lint-ignore no-explicit-any -- reason for ignoring
function foo(): any {
  // ...
}
```

## Ignore `ban-unused-ignore` itself

`deno lint` provides [`ban-unused-ignore` rule](/lint/rules/ban-unused-ignore/),
which will detect ignore directives that don't ever suppress certain
diagnostics. This is useful when you want to discover ignore directives that are
no longer necessary after refactoring the code.

In a few cases, however, you might want to ignore `ban-unused-ignore` rule
itself. One of the typical cases would be when working with auto-generated
files; it makes sense to add file-level ignore directives for some rules, and
there's almost no need for detecting unused directives via `ban-unused-ignore`
in this case.

You can use `// deno-lint-ignore-file ban-unused-ignore` as always if you want
to suppress the rule for a whole file:

```ts
// deno-lint-ignore-file ban-unused-ignore no-explicit-any

// `no-explicit-any` isn't used but you'll get no diagnostics because of ignoring
// `ban-unused-ignore`
console.log(42);
```

Do note that ignoring `ban-unused-ignore` itself only works via file-level
ignore directives. This means that per line directives, like
`// deno-lint-ignore ban-unused-ignore`, don't work at all. If you want to
ignore `ban-unused-ignore` for some special reasons, make sure to add it as a
file-level ignore directive.

## More about linting and formatting

For more information about linting and formatting in Deno, and the differences
between these two utilities, visit the
[Linting and Formatting](/runtime/fundamentals/linting_and_formatting/) page in
our Fundamentals section.

***

# deno lsp

URL: https://docs.deno.com/runtime/reference/cli/lsp

:::info

Usually humans do not use this subcommand directly. The 'deno lsp' can provide
IDEs with go-to-definition support and automatic code formatting.

:::

Starts the Deno language server. The language server is used by editors to
provide features like intellisense, code formatting, and more. Read more about
[integrating with the Deno LSP](/runtime/reference/lsp_integration/).

## Description

The 'deno lsp' subcommand provides a way for code editors and IDEs to interact
with Deno using the Language Server Protocol.

Read more about
[how to connect editors and IDEs to `deno lsp`](https://deno.land/manual@v1.42.4/getting_started/setup_your_environment#editors-and-ides).

***
