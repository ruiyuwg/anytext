# Read from stdin

Source: https://bun.com/docs/guides/process/stdin

For CLI tools, it's often useful to read from `stdin`. In Bun, the `console` object is an `AsyncIterable` that yields lines from `stdin`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const prompt = "Type something: ";
process.stdout.write(prompt);
for await (const line of console) {
  console.log(`You typed: ${line}`);
  process.stdout.write(prompt);
}
```

***

Running this file results in a never-ending interactive prompt that echoes whatever the user types.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Type something: hello
You typed: hello
Type something: hello again
You typed: hello again
```

***

Bun also exposes stdin as a `BunFile` via `Bun.stdin`. This is useful for incrementally reading large inputs that are piped into the `bun` process.

There is no guarantee that the chunks will be split line-by-line.

```ts stdin.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
for await (const chunk of Bun.stdin.stream()) {
  // chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString();
  console.log(`Chunk: ${chunkText}`);
}
```

***

This will print the input that is piped into the `bun` process.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
echo "hello" | bun run stdin.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Chunk: hello
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Read a file to an ArrayBuffer

Source: https://bun.com/docs/guides/read-file/arraybuffer

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats. Use `.arrayBuffer()` to read the file as an `ArrayBuffer`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

const buffer = await file.arrayBuffer();
```

***

The binary content in the `ArrayBuffer` can then be read as a typed array, such as `Int8Array`. For `Uint8Array`, use [`.bytes()`](/guides/read-file/uint8array).

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const buffer = await file.arrayBuffer();
const bytes = new Int8Array(buffer);

bytes[0];
bytes.length;
```

***

Refer to the [Typed arrays](/runtime/binary-data#typedarray) docs for more information on working with typed arrays in Bun.

# Read a file to a Buffer

Source: https://bun.com/docs/guides/read-file/buffer

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats.

To read the file into a `Buffer` instance, first use `.arrayBuffer()` to consume the file as an `ArrayBuffer`, then use `Buffer.from()` to create a `Buffer` from the `ArrayBuffer`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

const arrbuf = await file.arrayBuffer();
const buffer = Buffer.from(arrbuf);
```

***

Refer to [Binary data > Buffer](/runtime/binary-data#buffer) for more information on working with `Buffer` and other binary data formats in Bun.

# Check if a file exists

Source: https://bun.com/docs/guides/read-file/exists

The `Bun.file()` function accepts a path and returns a `BunFile` instance. Use the `.exists()` method to check if a file exists at the given path.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

await file.exists(); // boolean;
```

***

Refer to [API > File I/O](/runtime/file-io) for more information on working with `BunFile`.

# Read a JSON file

Source: https://bun.com/docs/guides/read-file/json

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats. Use `.json()` to read and parse the contents of a `.json` file as a plain object.

The MIME type of the `BunFile` will be set accordingly.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

const contents = await file.json();
// { name: "my-package" }

file.type; // => "application/json;charset=utf-8";
```

# Get the MIME type of a file

Source: https://bun.com/docs/guides/read-file/mime

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob`, so use the `.type` property to read the MIME type.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const file = Bun.file("./package.json");
file.type; // application/json

const file = Bun.file("./index.html");
file.type; // text/html

const file = Bun.file("./image.png");
file.type; // image/png
```

***

Refer to [API > File I/O](/runtime/file-io) for more information on working with `BunFile`.

# Read a file as a ReadableStream

Source: https://bun.com/docs/guides/read-file/stream

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats. Use `.stream()` to consume the file incrementally as a `ReadableStream`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

const stream = file.stream();
```

***

The chunks of the stream can be consumed as an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) using `for await`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
for await (const chunk of stream) {
  chunk; // => Uint8Array
}
```

***

Refer to the [Streams](/runtime/streams) documentation for more information on working with streams in Bun.

# Read a file as a string

Source: https://bun.com/docs/guides/read-file/string

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats. Use `.text()` to read the contents as a string.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
const file = Bun.file(path);

const text = await file.text();
// string
```

***

Any relative paths will be resolved relative to the project root (the nearest directory containing a `package.json` file).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "./file.txt";
const file = Bun.file(path);
```

# Read a file to a Uint8Array

Source: https://bun.com/docs/guides/read-file/uint8array

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob` and allows you to lazily read the file in a variety of formats.

To read the file into a `Uint8Array` instance, retrieve the contents of the `BunFile` with `.bytes()`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/package.json";
const file = Bun.file(path);

const byteArray = await file.bytes();

byteArray[0]; // first byteArray
byteArray.length; // length of byteArray
```

***

Refer to [API > Binary data > Typed arrays](/runtime/binary-data#typedarray) for more information on working with `Uint8Array` and other binary data formats in Bun.
