# Mark a test as a "todo" with the Bun test runner

Source: https://bun.com/docs/guides/test/todo-tests

To remind yourself to write a test later, use the `test.todo` function. There's no need to provide a test implementation.

```ts test.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { test, expect } from "bun:test";

// write this later
test.todo("unimplemented feature");
```

***

The output of `bun test` indicates how many `todo` tests were encountered.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
test.test.ts:
✓ add [0.03ms]
✓ multiply [0.02ms]
✎ unimplemented feature

 2 pass
 1 todo
 0 fail
 2 expect() calls
Ran 3 tests across 1 files. [74.00ms]
```

***

Optionally, you can provide a test implementation.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { test, expect } from "bun:test";

test.todo("unimplemented feature", () => {
  expect(Bun.isAwesome()).toBe(true);
});
```

***

If an implementation is provided, it will not be run unless the `--todo` flag is passed. If the `--todo` flag is passed, the test will be executed and *expected to fail* by test runner! If a todo test passes, the `bun test` run will return a non-zero exit code to signal the failure.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --todo
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
my.test.ts:
✗ unimplemented feature
  ^ this test is marked as todo but passes. Remove `.todo` or check that test is correct.

 0 pass
 1 fail
 1 expect() calls
$ echo $?
1 # this is the exit code of the previous command
```

***

See also:

- [Skip a test](/guides/test/skip-tests)
- [Docs > Test runner > Writing tests](/test/writing-tests)

# Update snapshots in `bun test`

Source: https://bun.com/docs/guides/test/update-snapshots

Bun's test runner supports Jest-style snapshot testing via `.toMatchSnapshot()`.

```ts snap.test.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { test, expect } from "bun:test";

test("snapshot", () => {
  expect({ foo: "bar" }).toMatchSnapshot();
});
```

***

The first time this test is executed, Bun will write a snapshot file to disk in a directory called `__snapshots__` that lives alongside the test file.

```txt File Tree icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
test
├── __snapshots__
│   └── snap.test.ts.snap
└── snap.test.ts
```

***

To regenerate snapshots, use the `--update-snapshots` flag.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --update-snapshots
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
test/snap.test.ts:
✓ snapshot [0.86ms]

 1 pass
 0 fail
 snapshots: +1 added # the snapshot was regenerated
 1 expect() calls
Ran 1 tests across 1 files. [102.00ms]
```

***

See [Docs > Test Runner > Snapshots](/test/snapshots) for complete documentation on snapshots with the Bun test runner.

# Run tests in watch mode with Bun

Source: https://bun.com/docs/guides/test/watch-mode

Use the `--watch` flag to run your tests in watch mode.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --watch
```

***

This will restart the running Bun process whenever a file change is detected. It's fast. In this example, the editor is configured to save the file on every keystroke.

![Running tests in watch mode in
Bun](https://github.com/oven-sh/bun/assets/3084745/dc49a36e-ba82-416f-b960-1c883a924248)

***

See [Docs > Test Runner](/test) for complete documentation on the test runner.

# Encode and decode base64 strings

Source: https://bun.com/docs/guides/util/base64

Bun implements the Web-standard [`atob`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) and [`btoa`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) functions for encoding and decoding base64 strings.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const data = "hello world";
const encoded = btoa(data); // => "aGVsbG8gd29ybGQ="
const decoded = atob(encoded); // => "hello world"
```

***

See [Docs > Web APIs](/runtime/web-apis) for a complete breakdown of the Web APIs implemented in Bun.

# Check if two objects are deeply equal

Source: https://bun.com/docs/guides/util/deep-equals

Check if two objects are deeply equal. This is used internally by `expect().toEqual()` in Bun's [test runner](/test/writing-tests).

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const a = { a: 1, b: 2, c: { d: 3 } };
const b = { a: 1, b: 2, c: { d: 3 } };

Bun.deepEquals(a, b); // true
```

***

Pass `true` as a third argument to enable strict mode. This is used internally by `expect().toStrictEqual()` in Bun's [test runner](/test/writing-tests).

The following examples would return `true` in non-strict mode but `false` in strict mode.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// undefined values
Bun.deepEquals({}, { a: undefined }, true); // false

// undefined in arrays
Bun.deepEquals(["asdf"], ["asdf", undefined], true); // false

// sparse arrays
Bun.deepEquals([, 1], [undefined, 1], true); // false

// object literals vs instances w/ same properties
class Foo {
  a = 1;
}
Bun.deepEquals(new Foo(), { a: 1 }, true); // false
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Compress and decompress data with DEFLATE

Source: https://bun.com/docs/guides/util/deflate

Use `Bun.deflateSync()` to compress a `Uint8Array` with DEFLATE.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const data = Buffer.from("Hello, world!");
const compressed = Bun.deflateSync("Hello, world!");
// => Uint8Array

const decompressed = Bun.inflateSync(compressed);
// => Uint8Array
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Detect when code is executed with Bun

Source: https://bun.com/docs/guides/util/detect-bun

The recommended way to detect when code is being executed with Bun is to check `process.versions.bun`. This works in both JavaScript and TypeScript without requiring any additional type definitions.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
if (process.versions.bun) {
  // this code will only run when the file is run with Bun
}
```

***

Alternatively, you can check for the existence of the `Bun` global. This is similar to how you'd check for the existence of the `window` variable to detect when code is being executed in a browser.

This approach will result in a type error in TypeScript unless `@types/bun` is installed. You can install it with `bun
      add -d @types/bun`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
if (typeof Bun !== "undefined") {
  // this code will only run when the file is run with Bun
}
```

# Check if the current file is the entrypoint

Source: https://bun.com/docs/guides/util/entrypoint

Bun provides a handful of module-specific utilities on the [`import.meta`](/runtime/module-resolution#import-meta) object. Use `import.meta.main` to check if the current file is the entrypoint of the current process.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
if (import.meta.main) {
  // this file is directly executed with `bun run`
} else {
  // this file is being imported by another file
}
```

***

See [Docs > API > import.meta](/runtime/module-resolution#import-meta) for complete documentation.

# Escape an HTML string

Source: https://bun.com/docs/guides/util/escape-html

The `Bun.escapeHTML()` utility can be used to escape HTML characters in a string. The following replacements are made.

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. Non-string types will be converted to a string before escaping.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.escapeHTML("<script>alert('Hello World!')</script>");
// &lt;script&gt;alert(&#x27;Hello World!&#x27;)&lt;&#x2F;script&gt;
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Convert a file URL to an absolute path

Source: https://bun.com/docs/guides/util/file-url-to-path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Compress and decompress data with gzip

Source: https://bun.com/docs/guides/util/gzip

Use `Bun.gzipSync()` to compress a `Uint8Array` with gzip.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const data = Buffer.from("Hello, world!");
const compressed = Bun.gzipSync(data);
// => Uint8Array

const decompressed = Bun.gunzipSync(compressed);
// => Uint8Array
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Hash a password

Source: https://bun.com/docs/guides/util/hash-a-password

The `Bun.password.hash()` function provides a fast, built-in mechanism for securely hashing passwords in Bun. No third-party dependencies are required.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh6E8DQRhEXg/M/...
```

***

By default, this uses the [Argon2id](https://en.wikipedia.org/wiki/Argon2) algorithm. Pass a second argument to `Bun.password.hash()` to use a different algorithm or configure the hashing parameters.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const password = "super-secure-pa$$word";

// use argon2 (default)
const argonHash = await Bun.password.hash(password, {
  memoryCost: 4, // memory usage in kibibytes
  timeCost: 3, // the number of iterations
});
```

***

Bun also implements the [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Specify `algorithm: "bcrypt"` to use it.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// use bcrypt
const bcryptHash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 4, // number between 4-31
});
```

***

Use `Bun.password.verify()` to verify a password. The algorithm and its parameters are stored in the hash itself, so re-specifying configuration is unnecessary.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const password = "super-secure-pa$$word";
const hash = await Bun.password.hash(password);

const isMatch = await Bun.password.verify(password, hash);
// => true
```

***

See [Docs > API > Hashing](/runtime/hashing#bun-password) for complete documentation.

# Get the directory of the current file

Source: https://bun.com/docs/guides/util/import-meta-dir

Bun provides a handful of module-specific utilities on the [`import.meta`](/runtime/module-resolution#import-meta) object.

```ts /a/b/c.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import.meta.dir; // => "/a/b"
```

***

See [Docs > API > import.meta](/runtime/module-resolution#import-meta) for complete documentation.

# Get the file name of the current file

Source: https://bun.com/docs/guides/util/import-meta-file

Bun provides a handful of module-specific utilities on the [`import.meta`](/runtime/module-resolution#import-meta) object. Use `import.meta.file` to retrieve the name of the current file.

```ts /a/b/c.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import.meta.file; // => "c.ts"
```

***

See [Docs > API > import.meta](/runtime/module-resolution#import-meta) for complete documentation.

# Get the absolute path of the current file

Source: https://bun.com/docs/guides/util/import-meta-path

Bun provides a handful of module-specific utilities on the [`import.meta`](/runtime/module-resolution#import-meta) object. Use `import.meta.path` to retrieve the absolute path of the current file.

```ts /a/b/c.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import.meta.path; // => "/a/b/c.ts"
```

***

See [Docs > API > import.meta](/runtime/module-resolution#import-meta) for complete documentation.

# Generate a UUID

Source: https://bun.com/docs/guides/util/javascript-uuid

Use `crypto.randomUUID()` to generate a UUID v4. This API works in Bun, Node.js, and browsers. It requires no dependencies.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
crypto.randomUUID();
// => "123e4567-e89b-42d3-a456-426614174000"
```

***

In Bun, you can also use `Bun.randomUUIDv7()` to generate a [UUID v7](https://www.ietf.org/archive/id/draft-peabody-dispatch-new-uuid-format-01.html).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.randomUUIDv7();
// => "0196a000-bb12-7000-905e-8039f5d5b206"
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Get the absolute path to the current entrypoint

Source: https://bun.com/docs/guides/util/main

The `Bun.main` property contains the absolute path to the current entrypoint.

```ts foo.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log(Bun.main);
```

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import "./foo.ts";
```

***

The printed path corresponds to the file that is executed with `bun run`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
/path/to/index.ts
```

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run foo.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
/path/to/foo.ts
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Convert an absolute path to a file URL

Source: https://bun.com/docs/guides/util/path-to-file-url

Use `Bun.pathToFileURL()` to convert an absolute path to a `file://` URL.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.pathToFileURL("/path/to/file.txt");
// => "file:///path/to/file.txt"
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Sleep for a fixed number of milliseconds

Source: https://bun.com/docs/guides/util/sleep

The `Bun.sleep` method provides a convenient way to create a void `Promise` that resolves in a fixed number of milliseconds.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// sleep for 1 second
await Bun.sleep(1000);
```

***

Internally, this is equivalent to the following snippet that uses [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
await new Promise(resolve => setTimeout(resolve, ms));
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.
