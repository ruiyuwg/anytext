# Feedback

Source: https://bun.com/docs/feedback

Share feedback, bug reports, and feature requests

Whether you've found a bug, have a performance issue, or just want to suggest an improvement, here's how you can open a helpful issue:

For general questions, please join our [Discord](https://bun.com/discord).

## Reporting Issues

````
Try upgrading Bun to the latest version with `bun upgrade`. This might fix your problem without having to open an issue.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade
```

You can also try the latest canary release, which includes the most recent changes and bug fixes that haven't been released in a stable version yet.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade --canary

# To revert back to the stable
bun upgrade --stable
```

If the issue still persists after upgrading, continue to the next step.



First take a minute to check if the issue has already been reported. Don't open a new issue if it has already been reported, it saves time for everyone and helps us focus on fixing things faster.

* 🔍 [**Search existing issues**](https://github.com/oven-sh/bun/issues)
* 💬 [**Check discussions**](https://github.com/oven-sh/bun/discussions)

If you find a related issue, add a 👍 reaction or comment with extra details instead of opening a new one.



If no one has reported the issue, please open a new issue or suggest an improvement.

* 🐞 [**Report a Bug**](https://github.com/oven-sh/bun/issues/new?template=2-bug-report.yml)
* ⚡ [**Suggest an Improvement**](https://github.com/oven-sh/bun/issues/new?template=4-feature-request.yml)

Please provide as much detail as possible, including:

* A clear and concise title
* A code example or steps to reproduce the issue
* The version of Bun you are using (run `bun --version`)
* A detailed description of the issue (what happened, what you expected to happen, and what actually happened)
* The operating system and version you are using
  
    * For MacOS and Linux: copy the output of `uname -mprs`
    * For Windows: copy the output of this command in the powershell console:
      `"$([Environment]::OSVersion | ForEach-Object VersionString) $(if ([Environment]::Is64BitOperatingSystem) { "x64" } else { "x86" })"`
  
````

The Bun team will review the issue and get back to you as soon as possible!

***

## Use `bun feedback`

Alternatively, you can use `bun feedback` to share feedback, bug reports, and feature requests directly with the Bun team.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun feedback "Love the new release!"
bun feedback report.txt details.log
echo "please document X" | bun feedback --email you@example.com
```

You can provide feedback as text arguments, file paths, or piped input.

# Convert an ArrayBuffer to an array of numbers

Source: https://bun.com/docs/guides/binary/arraybuffer-to-array

To retrieve the contents of an `ArrayBuffer` as an array of numbers, create a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) over of the buffer. and use the [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method to convert it to an array.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = new ArrayBuffer(64);
const arr = new Uint8Array(buf);
arr.length; // 64
arr[0]; // 0 (instantiated with all zeros)
```

***

The `Uint8Array` class supports array indexing and iteration. However if you wish to convert the instance to a regular `Array`, use `Array.from()`. (This will likely be slower than using the `Uint8Array` directly.)

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = new ArrayBuffer(64);
const uintArr = new Uint8Array(buf);
const regularArr = Array.from(uintArr);
// number[]
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert an ArrayBuffer to a Blob

Source: https://bun.com/docs/guides/binary/arraybuffer-to-blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) can be constructed from an array of "chunks", where each chunk is a string, binary data structure, or another `Blob`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = new ArrayBuffer(64);
const blob = new Blob([buf]);
```

***

By default the `type` of the resulting `Blob` will be unset. This can be set manually.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = new ArrayBuffer(64);
const blob = new Blob([buf], { type: "application/octet-stream" });
blob.type; // => "application/octet-stream"
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert an ArrayBuffer to a Buffer

Source: https://bun.com/docs/guides/binary/arraybuffer-to-buffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) API predates the introduction of `ArrayBuffer` into the JavaScript language. Bun implements both.

Use the static `Buffer.from()` method to create a `Buffer` from an `ArrayBuffer`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arrBuffer = new ArrayBuffer(64);
const nodeBuffer = Buffer.from(arrBuffer);
```

***

To create a `Buffer` that only views a portion of the underlying buffer, pass the offset and length to the constructor.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arrBuffer = new ArrayBuffer(64);
const nodeBuffer = Buffer.from(arrBuffer, 0, 16); // view first 16 bytes
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert an ArrayBuffer to a string

Source: https://bun.com/docs/guides/binary/arraybuffer-to-string

Bun implements the Web-standard [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class for converting between binary data types and strings.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = new ArrayBuffer(64);
const decoder = new TextDecoder();
const str = decoder.decode(buf);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert an ArrayBuffer to a Uint8Array

Source: https://bun.com/docs/guides/binary/arraybuffer-to-typedarray

A `Uint8Array` is a *typed array*, meaning it is a mechanism for viewing the data in an underlying `ArrayBuffer`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buffer = new ArrayBuffer(64);
const arr = new Uint8Array(buffer);
```

***

Instances of other typed arrays can be created similarly.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buffer = new ArrayBuffer(64);

const arr1 = new Uint8Array(buffer);
const arr2 = new Uint16Array(buffer);
const arr3 = new Uint32Array(buffer);
const arr4 = new Float32Array(buffer);
const arr5 = new Float64Array(buffer);
const arr6 = new BigInt64Array(buffer);
const arr7 = new BigUint64Array(buffer);
```

***

To create a typed array that only views a portion of the underlying buffer, pass the offset and length to the constructor.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buffer = new ArrayBuffer(64);
const arr = new Uint8Array(buffer, 0, 16); // view first 16 bytes
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Convert a Blob to an ArrayBuffer

Source: https://bun.com/docs/guides/binary/blob-to-arraybuffer

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides a number of methods for consuming its contents in different formats, including `.arrayBuffer()`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const blob = new Blob(["hello world"]);
const buf = await blob.arrayBuffer();
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Blob to a DataView

Source: https://bun.com/docs/guides/binary/blob-to-dataview

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides a number of methods for consuming its contents in different formats. This snippets reads the contents to an `ArrayBuffer`, then creates a `DataView` from the buffer.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const blob = new Blob(["hello world"]);
const arr = new DataView(await blob.arrayBuffer());
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Blob to a ReadableStream

Source: https://bun.com/docs/guides/binary/blob-to-stream

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides a number of methods for consuming its contents in different formats, including `.stream()`. This returns `Promise<ReadableStream>`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const blob = new Blob(["hello world"]);
const stream = await blob.stream();
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Blob to a string

Source: https://bun.com/docs/guides/binary/blob-to-string

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides a number of methods for consuming its contents in different formats, including `.text()`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const blob = new Blob(["hello world"]);
const str = await blob.text();
// => "hello world"
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Blob to a Uint8Array

Source: https://bun.com/docs/guides/binary/blob-to-typedarray

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides a number of methods for consuming its contents in different formats. This snippets reads the contents to an `ArrayBuffer`, then creates a `Uint8Array` from the buffer.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const blob = new Blob(["hello world"]);
const arr = new Uint8Array(await blob.arrayBuffer());
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Buffer to an ArrayBuffer

Source: https://bun.com/docs/guides/binary/buffer-to-arraybuffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class provides a way to view and manipulate data in an underlying `ArrayBuffer`, which is available via the `buffer` property.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const nodeBuf = Buffer.alloc(64);
const arrBuf = nodeBuf.buffer;
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Buffer to a blob

Source: https://bun.com/docs/guides/binary/buffer-to-blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) can be constructed from an array of "chunks", where each chunk is a string, binary data structure (including `Buffer`), or another `Blob`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello");
const blob = new Blob([buf]);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Buffer to a ReadableStream

Source: https://bun.com/docs/guides/binary/buffer-to-readablestream

The naive approach to creating a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) from a [`Buffer`](https://nodejs.org/api/buffer.html) is to use the `ReadableStream` constructor and enqueue the entire array as a single chunk. For a large buffer, this may be undesirable as this approach does not "streaming" the data in smaller chunks.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello world");
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue(buf);
    controller.close();
  },
});
```

***

To stream the data in smaller chunks, first create a `Blob` instance from the `Buffer`. Then use the [`Blob.stream()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream) method to create a `ReadableStream` that streams the data in chunks of a specified size.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello world");
const blob = new Blob([buf]);
const stream = blob.stream();
```

***

The chunk size can be set by passing a number to the `.stream()` method.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello world");
const blob = new Blob([buf]);

// set chunk size of 1024 bytes
const stream = blob.stream(1024);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Buffer to a string

Source: https://bun.com/docs/guides/binary/buffer-to-string

The [`Buffer`](https://nodejs.org/api/buffer.html) class provides a built-in `.toString()` method that converts a `Buffer` to a string.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello");
const str = buf.toString();
// => "hello"
```

***

You can optionally specify an encoding and byte range.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.from("hello world!");
const str = buf.toString("utf8", 0, 5);
// => "hello"
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Buffer to a Uint8Array

Source: https://bun.com/docs/guides/binary/buffer-to-typedarray

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class extends [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), so no conversion is needed. All properties and methods on `Uint8Array` are available on `Buffer`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const buf = Buffer.alloc(64);
buf instanceof Uint8Array; // => true
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a DataView to a string

Source: https://bun.com/docs/guides/binary/dataview-to-string

If a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) contains ASCII-encoded text, you can convert it to a string using the [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const dv: DataView = ...;
const decoder = new TextDecoder();
const str = decoder.decode(dv);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to an ArrayBuffer

Source: https://bun.com/docs/guides/binary/typedarray-to-arraybuffer

A [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) is a *typed array* class, meaning it is a mechanism for viewing data in an underlying `ArrayBuffer`. The underlying `ArrayBuffer` is accessible via the `buffer` property.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array(64);
arr.buffer; // => ArrayBuffer(64)
```

***

The `Uint8Array` may be a view over a *subset* of the data in the underlying `ArrayBuffer`. In this case, the `buffer` property will return the entire buffer, and the `byteOffset` and `byteLength` properties will indicate the subset.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array(64, 16, 32);
arr.buffer; // => ArrayBuffer(64)
arr.byteOffset; // => 16
arr.byteLength; // => 32
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to a Blob

Source: https://bun.com/docs/guides/binary/typedarray-to-blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) can be constructed from an array of "chunks", where each chunk is a string, binary data structure (including `Uint8Array`), or another `Blob`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
const blob = new Blob([arr]);
console.log(await blob.text());
// => "hello"
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to a Buffer

Source: https://bun.com/docs/guides/binary/typedarray-to-buffer

The [`Buffer`](https://nodejs.org/api/buffer.html) class extends [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) with a number of additional methods. Use `Buffer.from()` to create a `Buffer` instance from a `Uint8Array`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr: Uint8Array = ...
const buf = Buffer.from(arr);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to a DataView

Source: https://bun.com/docs/guides/binary/typedarray-to-dataview

A [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) is a *typed array* class, meaning it is a mechanism for viewing data in an underlying `ArrayBuffer`. The following snippet creates a \[`DataView`] instance over the same range of data as the `Uint8Array`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr: Uint8Array = ...
const dv = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to a ReadableStream

Source: https://bun.com/docs/guides/binary/typedarray-to-readablestream

The naive approach to creating a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) from a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) is to use the [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) constructor and enqueue the entire array as a single chunk. For larger chunks, this may be undesirable as it isn't actually "streaming" the data.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array(64);
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue(arr);
    controller.close();
  },
});
```

***

To stream the data in smaller chunks, first create a `Blob` instance from the `Uint8Array`. Then use the [`Blob.stream()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream) method to create a `ReadableStream` that streams the data in chunks of a specified size.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array(64);
const blob = new Blob([arr]);
const stream = blob.stream();
```

***

The chunk size can be set by passing a number to the `.stream()` method.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array(64);
const blob = new Blob([arr]);

// set chunk size of 1024 bytes
const stream = blob.stream(1024);
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.

# Convert a Uint8Array to a string

Source: https://bun.com/docs/guides/binary/typedarray-to-string

Bun implements the Web-standard [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class for converting from binary data types like `Uint8Array` and strings.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const arr = new Uint8Array([104, 101, 108, 108, 111]);
const decoder = new TextDecoder();
const str = decoder.decode(arr);
// => "hello"
```

***

See [Docs > API > Binary Data](/runtime/binary-data#conversion) for complete documentation on manipulating binary data with Bun.
