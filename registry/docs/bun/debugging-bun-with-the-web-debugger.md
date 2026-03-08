# Debugging Bun with the web debugger

Source: https://bun.com/docs/guides/runtime/web-debugger

Bun speaks the [WebKit Inspector Protocol](https://github.com/oven-sh/bun/blob/main/packages/bun-inspector-protocol/src/protocol/jsc/index.d.ts). To enable debugging when running code with Bun, use the `--inspect` flag. For demonstration purposes, consider the following simple web server.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  fetch(req) {
    console.log(req.url);
    return new Response("Hello, world!");
  },
});
```

***

Let's run this file with the `--inspect` flag.

This automatically starts a WebSocket server on an available port that can be used to introspect the running Bun process. Various debugging tools can connect to this server to provide an interactive debugging experience.

Bun hosts a web-based debugger at [debug.bun.sh](https://debug.bun.sh). It is a modified version of WebKit's [Web Inspector Interface](https://webkit.org/web-inspector/web-inspector-interface/), which will look familiar to Safari users.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --inspect server.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
------------------ Bun Inspector ------------------
Listening at:
  ws://localhost:6499/0tqxs9exrgrm

Inspect in browser:
  https://debug.bun.sh/#localhost:6499/0tqxs9exrgrm
------------------ Bun Inspector ------------------
```

***

Open the provided `debug.bun.sh` URL in your browser to start a debugging session. From this interface, you'll be able to view the source code of the running file, view and set breakpoints, and execute code with the built-in console.

![Screenshot of Bun debugger, Console
tab](https://github.com/oven-sh/bun/assets/3084745/e6a976a8-80cc-4394-8925-539025cc025d)

***

Let's set a breakpoint. Navigate to the Sources tab; you should see the code from earlier. Click on the line number `3` to set a breakpoint on our `console.log(req.url)` statement.

![screenshot of Bun debugger](https://github.com/oven-sh/bun/assets/3084745/3b69c7e9-25ff-4f9d-acc4-caa736862935)

***

Then visit [`http://localhost:3000`](http://localhost:3000) in your web browser. This will send an HTTP request to our `localhost` web server. It will seem like the page isn't loading. Why? Because the program has paused execution at the breakpoint we set earlier.

Note how the UI has changed.

![screenshot of Bun debugger](https://github.com/oven-sh/bun/assets/3084745/8b565e58-5445-4061-9bc4-f41090dfe769)

***

At this point there's a lot we can do to introspect the current execution environment. We can use the console at the bottom to run arbitrary code in the context of the program, with full access to the variables in scope at our breakpoint.

![Bun debugger console](https://github.com/oven-sh/bun/assets/3084745/f4312b76-48ba-4a7d-b3b6-6205968ac681)

***

On the right side of the Sources pane, we can see all local variables currently in scope, and drill down to see their properties and methods. Here, we're inspecting the `req` variable.

![Bun debugger variables panel](https://github.com/oven-sh/bun/assets/3084745/63d7f843-5180-489c-aa94-87c486e68646)

***

In the upper left of the Sources pane, we can control the execution of the program.

![Bun debugger controls](https://github.com/oven-sh/bun/assets/3084745/41b76deb-7371-4461-9d5d-81b5a6d2f7a4)

***

Here's a cheat sheet explaining the functions of the control flow buttons.

- *Continue script execution* — continue running the program until the next breakpoint or exception.
- *Step over* — The program will continue to the next line.
- *Step into* — If the current statement contains a function call, the debugger will "step into" the called function.
- *Step out* — If the current statement is a function call, the debugger will finish executing the call, then "step out" of the function to the location where it was called.

  ![Debugger control buttons cheat
  sheet](https://github-production-user-asset-6210df.s3.amazonaws.com/3084745/261510346-6a94441c-75d3-413a-99a7-efa62365f83d.png)

# Convert a Node.js Readable to an ArrayBuffer

Source: https://bun.com/docs/guides/streams/node-readable-to-arraybuffer

To convert a Node.js `Readable` stream to an `ArrayBuffer` in Bun, you can create a new `Response` object with the stream as the body, then use `arrayBuffer()` to read the stream into an `ArrayBuffer`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).arrayBuffer();
```

# Convert a Node.js Readable to a Blob

Source: https://bun.com/docs/guides/streams/node-readable-to-blob

To convert a Node.js `Readable` stream to a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in Bun, you can create a new [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object with the stream as the body, then use [`response.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) to read the stream into a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const blob = await new Response(stream).blob();
```

# Convert a Node.js Readable to JSON

Source: https://bun.com/docs/guides/streams/node-readable-to-json

To convert a Node.js `Readable` stream to a JSON object in Bun, you can create a new [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object with the stream as the body, then use [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) to read the stream into a JSON object.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
const stream = Readable.from([JSON.stringify({ hello: "world" })]);
const json = await new Response(stream).json();
console.log(json); // { hello: "world" }
```

# Convert a Node.js Readable to a string

Source: https://bun.com/docs/guides/streams/node-readable-to-string

To convert a Node.js `Readable` stream to a string in Bun, you can create a new [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object with the stream as the body, then use [`response.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text) to read the stream into a string.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
const stream = Readable.from([Buffer.from("Hello, world!")]);
const text = await new Response(stream).text();
console.log(text); // "Hello, world!"
```

# Convert a Node.js Readable to an Uint8Array

Source: https://bun.com/docs/guides/streams/node-readable-to-uint8array

To convert a Node.js `Readable` stream to an `Uint8Array` in Bun, you can create a new `Response` object with the stream as the body, then use `bytes()` to read the stream into an `Uint8Array`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).bytes();
```

# Convert a ReadableStream to an array of chunks

Source: https://bun.com/docs/guides/streams/to-array

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats. The `Bun.readableStreamToArray` function reads the contents of a `ReadableStream` to an array of chunks.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const str = await Bun.readableStreamToArray(stream);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to an ArrayBuffer

Source: https://bun.com/docs/guides/streams/to-arraybuffer

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const buf = await Bun.readableStreamToArrayBuffer(stream);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to a Blob

Source: https://bun.com/docs/guides/streams/to-blob

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const blob = await Bun.readableStreamToBlob(stream);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to a Buffer

Source: https://bun.com/docs/guides/streams/to-buffer

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats. This snippet reads the contents of a `ReadableStream` to an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), then creates a [`Buffer`](https://nodejs.org/api/buffer.html) that points to it.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const arrBuf = await Bun.readableStreamToArrayBuffer(stream);
const nodeBuf = Buffer.from(arrBuf);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to JSON

Source: https://bun.com/docs/guides/streams/to-json

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const json = await stream.json();
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to a string

Source: https://bun.com/docs/guides/streams/to-string

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const str = await Bun.readableStreamToText(stream);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Convert a ReadableStream to a Uint8Array

Source: https://bun.com/docs/guides/streams/to-typedarray

Bun provides a number of convenience functions for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into different formats. This snippet reads the contents of a `ReadableStream` to an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), then creates a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) that points to the buffer.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const buf = await Bun.readableStreamToArrayBuffer(stream);
const uint8 = new Uint8Array(buf);
```

Additionally, there is a convenience method to convert to `Uint8Array` directly.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream = new ReadableStream();
const uint8 = await Bun.readableStreamToBytes(stream);
```

***

See [Docs > API > Utils](/runtime/utils#bun-readablestreamto) for documentation on Bun's other `ReadableStream` conversion functions.

# Bail early with the Bun test runner

Source: https://bun.com/docs/guides/test/bail

Use the `--bail` flag to bail on a test run after a single failure. This is useful for aborting as soon as possible in a continuous integration environment.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --bail
```

***

To bail after a certain threshold of failures, optionally specify a number after the flag.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# bail after 10 failures
bun test --bail=10
```

***

See [Docs > Test runner](/test) for complete documentation of `bun test`.
