# Define and replace static globals & constants

Source: https://bun.com/docs/guides/runtime/define-constant

The `--define` flag lets you declare statically-analyzable constants and globals. It replace all usages of an identifier or property in a JavaScript or TypeScript file with a constant value. This feature is supported at runtime and also in `bun build`. This is sort of similar to `#define` in C/C++, except for JavaScript.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --define process.env.NODE_ENV="'production'" src/index.ts # Runtime
bun build --define process.env.NODE_ENV="'production'" src/index.ts # Build
```

***

These statically-known values are used by Bun for dead code elimination and other optimizations.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}
```

***

Before the code reaches the JavaScript engine, Bun replaces `process.env.NODE_ENV` with `"production"`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
if ("production" === "production") { // [!code ++]
  console.log("Production mode");
} else {
  console.log("Development mode");
}
```

***

It doesn't stop there. Bun's optimizing transpiler is smart enough to do some basic constant folding.

Since `"production" === "production"` is always `true`, Bun replaces the entire expression with the `true` value.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
if (true) { // [!code ++]
  console.log("Production mode");
} else {
  console.log("Development mode");
}
```

***

And finally, Bun detects the `else` branch is not reachable, and eliminates it.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Production mode");
```

***

## What types of values are supported?

Values can be strings, identifiers, properties, or JSON.

### Replace global identifiers

To make all usages of `window` be `undefined`, you can use the following command.

```sh theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --define window="undefined" src/index.ts
```

This can be useful when Server-Side Rendering (SSR) or when you want to make sure that the code doesn't depend on the `window` object.

```js theme={"theme":{"light":"github-light","dark":"dracula"}}
if (typeof window !== "undefined") {
  console.log("Client-side code");
} else {
  console.log("Server-side code");
}
```

You can also set the value to be another identifier. For example, to make all usages of `global` be `globalThis`, you can use the following command.

```sh theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --define global="globalThis" src/index.ts
```

`global` is a global object in Node.js, but not in web browsers. So, you can use this to fix some cases where the code assumes that `global` is available.

### Replace values with JSON

`--define` can also be used to replace values with JSON objects and arrays.

To replace all usages of `AWS` with the JSON object `{"ACCESS_KEY":"abc","SECRET_KEY":"def"}`, you can use the following command.

```sh theme={"theme":{"light":"github-light","dark":"dracula"}}
# JSON
bun --define AWS='{"ACCESS_KEY":"abc","SECRET_KEY":"def"}' src/index.ts
```

Those will be transformed into the equivalent JavaScript code.

From:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log(AWS.ACCESS_KEY); // => "abc"
```

To:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("abc");
```

### Replace values with other properties

You can also pass properties to the `--define` flag.

For example, to replace all usages of `console.write` with `console.log`, you can use the following command

```sh theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --define console.write=console.log src/index.ts
```

That transforms the following input:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.write("Hello, world!");
```

Into the following output:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Hello, world!");
```

## How is this different than setting a variable?

You can also set `process.env.NODE_ENV` to `"production"` in your code, but that won't help with dead code elimination. In JavaScript, property accesses can have side effects. Getters & setters can be functions, and even dynamically defined (due to prototype chains and Proxy). Even if you set `process.env.NODE_ENV` to `"production"`, on the next line, it is not safe for static analysis tools to assume that `process.env.NODE_ENV`is`"production"`.

## How is this different than find-and-replace or string replacement?

The `--define` flag operates on the AST (Abstract Syntax Tree) level, not on the text level. It happens during the transpilation process, which means it can be used in optimizations like dead code elimination.

String replacement tools tend to have escaping issues and replace unintended parts of the code.

# Delete directories

Source: https://bun.com/docs/guides/runtime/delete-directory

To recursively delete a directory and all its contents, use `rm` from `node:fs/promises`. This is like running `rm -rf` in JavaScript.

```ts delete-directory.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { rm } from "node:fs/promises";

// Delete a directory and all its contents
await rm("path/to/directory", { recursive: true, force: true });
```

***

These options configure the deletion behavior:

- `recursive: true` - Delete subdirectories and their contents
- `force: true` - Don't throw errors if the directory doesn't exist

You can also use it without `force` to ensure the directory exists:

```ts delete-directory.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
try {
  await rm("path/to/directory", { recursive: true });
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("Directory doesn't exist");
  } else {
    throw error;
  }
}
```

***

See [Docs > API > FileSystem](/runtime/file-io) for more filesystem operations.

# Delete files

Source: https://bun.com/docs/guides/runtime/delete-file

To delete a file, use `Bun.file(path).delete()`.

```ts delete-file.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Delete a file
const file = Bun.file("path/to/file.txt");
await file.delete();

// Now the file doesn't exist
const exists = await file.exists();
// => false
```

***

See [Docs > API > FileSystem](/runtime/file-io) for more filesystem operations.

# Inspect memory usage using V8 heap snapshots

Source: https://bun.com/docs/guides/runtime/heap-snapshot

Bun implements V8's heap snapshot API, which allows you to create snapshots of the heap at runtime. This helps debug memory leaks in your JavaScript/TypeScript application.

```ts snapshot.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import v8 from "node:v8";

// Creates a heap snapshot file with an auto-generated name
const snapshotPath = v8.writeHeapSnapshot();
console.log(`Heap snapshot written to: ${snapshotPath}`);
```

***

## Inspect memory in Chrome DevTools

To view V8 heap snapshots in Chrome DevTools:

1. Open Chrome DevTools (F12 or right-click and select "Inspect")
2. Go to the "Memory" tab
3. Click the "Load" button (folder icon)
4. Select your `.heapsnapshot` file

# Import a HTML file as text

Source: https://bun.com/docs/guides/runtime/import-html

To import a `.html` file in Bun as a text file, use the `type: "text"` attribute in the import statement.

```ts file.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import html from "./file.html" with { type: "text" };

console.log(html); // <!DOCTYPE html><html><head>...
```

This can also be used with hot module reloading and/or watch mode to force Bun to reload whenever the `./file.html` file changes.

# Import a JSON file

Source: https://bun.com/docs/guides/runtime/import-json

Bun natively supports `.json` imports.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "bun",
  "version": "1.0.0",
  "author": {
    "name": "John Dough",
    "email": "john@dough.com"
  }
}
```

***

Import the file like any other source file.

```ts data.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import data from "./package.json";

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

***

Bun also supports [Import Attributes](https://github.com/tc39/proposal-import-attributes/) and [JSON modules](https://github.com/tc39/proposal-json-modules) syntax.

```ts data.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import data from "./package.json" with { type: "json" };

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

***

See [Docs > Runtime > TypeScript](/runtime/typescript) for more information on using TypeScript with Bun.

# Import a JSON5 file

Source: https://bun.com/docs/guides/runtime/import-json5

Bun natively supports `.json5` imports.

```json5 config.json5 icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  // Comments are allowed
  database: {
    host: "localhost",
    port: 5432,
    name: "myapp",
  },

  server: {
    port: 3000,
    timeout: 30,
  },

  features: {
    auth: true,
    rateLimit: true,
  },
}
```

***

Import the file like any other source file.

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import config from "./config.json5";

config.database.host; // => "localhost"
config.server.port; // => 3000
config.features.auth; // => true
```

***

You can also use named imports to destructure top-level properties:

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { database, server, features } from "./config.json5";

console.log(database.name); // => "myapp"
console.log(server.timeout); // => 30
console.log(features.rateLimit); // => true
```

***

For parsing JSON5 strings at runtime, use `Bun.JSON5.parse()`:

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const data = JSON5.parse(`{
  name: 'John Doe',
  age: 30,
  hobbies: [
    'reading',
    'coding',
  ],
}`);

console.log(data.name); // => "John Doe"
console.log(data.hobbies); // => ["reading", "coding"]
```

***

See [Docs > API > JSON5](/runtime/json5) for complete documentation on JSON5 support in Bun.

# Import a TOML file

Source: https://bun.com/docs/guides/runtime/import-toml

Bun natively supports importing `.toml` files.

```toml data.toml icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
name = "bun"
version = "1.0.0"

[author]
name = "John Dough"
email = "john@dough.com"
```

***

Import the file like any other source file.

```ts data.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import data from "./data.toml";

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

***

See [Docs > Runtime > TypeScript](/runtime/typescript) for more information on using TypeScript with Bun.
