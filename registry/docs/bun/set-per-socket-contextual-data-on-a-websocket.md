# Set per-socket contextual data on a WebSocket

Source: https://bun.com/docs/guides/websocket/context

When building a WebSocket server, it's typically necessary to store some identifying information or context associated with each connected client.

With [Bun.serve()](/runtime/http/websockets#contextual-data), this "contextual data" is set when the connection is initially upgraded by passing a `data` parameter in the `server.upgrade()` call.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req, {
      data: {
        socketId: Math.random(),
      },
    });
    if (success) return undefined;

    // handle HTTP request normally
    // ...
  },
  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as { socketId: number },

    // define websocket handlers
    async message(ws, message) {
      // the contextual data is available as the `data` property
      // on the WebSocket instance
      console.log(`Received ${message} from ${ws.data.socketId}}`);
    },
  },
});
```

***

It's common to read cookies/headers from the incoming request to identify the connecting client.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
type WebSocketData = {
  createdAt: number;
  token: string;
  userId: string;
};

Bun.serve({
  async fetch(req, server) {
    // use a library to parse cookies
    const cookies = parseCookies(req.headers.get("Cookie"));
    const token = cookies["X-Token"];
    const user = await getUserFromToken(token);

    const upgraded = server.upgrade(req, {
      data: {
        createdAt: Date.now(),
        token: cookies["X-Token"],
        userId: user.id,
      },
    });

    if (upgraded) return undefined;
  },
  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as WebSocketData,

    async message(ws, message) {
      // save the message to a database
      await saveMessageToDatabase({
        message: String(message),
        userId: ws.data.userId,
      });
    },
  },
});
```

# Build a publish-subscribe WebSocket server

Source: https://bun.com/docs/guides/websocket/pubsub

Bun's server-side `WebSocket` API provides a native pub-sub API. Sockets can be subscribed to a set of named channels using `socket.subscribe(<name>)`; messages can be published to a channel using `socket.publish(<name>, <message>)`.

This code snippet implements a simple single-channel chat server.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch(req, server) {
    const cookies = req.headers.get("cookie");
    const username = getUsernameFromCookies(cookies);
    const success = server.upgrade(req, { data: { username } });
    if (success) return undefined;

    return new Response("Hello world");
  },
  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as { username: string },

    open(ws) {
      const msg = `${ws.data.username} has entered the chat`;
      ws.subscribe("the-group-chat");
      server.publish("the-group-chat", msg);
    },
    message(ws, message) {
      // the server re-broadcasts incoming messages to everyone
      server.publish("the-group-chat", `${ws.data.username}: ${message}`);
    },
    close(ws) {
      const msg = `${ws.data.username} has left the chat`;
      server.publish("the-group-chat", msg);
      ws.unsubscribe("the-group-chat");
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
```

# Build a simple WebSocket server

Source: https://bun.com/docs/guides/websocket/simple

Start a simple WebSocket server using [`Bun.serve`](/runtime/http/server).

Inside `fetch`, we attempt to upgrade incoming `ws:` or `wss:` requests to WebSocket connections.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      // Bun automatically returns a 101 Switching Protocols
      // if the upgrade succeeds
      return undefined;
    }

    // handle HTTP request normally
    return new Response("Hello world!");
  },
  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as { authToken: string },

    // this is called when a message is received
    async message(ws, message) {
      console.log(`Received ${message}`);
      // send back a message
      ws.send(`You said: ${message}`);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
```

# Append content to a file

Source: https://bun.com/docs/guides/write-file/append

Bun implements the `node:fs` module, which includes the `fs.appendFile` and `fs.appendFileSync` functions for appending content to files.

***

You can use `fs.appendFile` to asynchronously append data to a file, creating the file if it does not yet exist. The content can be a string or a `Buffer`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { appendFile } from "node:fs/promises";

await appendFile("message.txt", "data to append");
```

***

To use the non-`Promise` API:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { appendFile } from "node:fs";

appendFile("message.txt", "data to append", err => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

***

To specify the encoding of the content:

```js theme={"theme":{"light":"github-light","dark":"dracula"}}
import { appendFile } from "node:fs";

appendFile("message.txt", "data to append", "utf8", callback);
```

***

To append the data synchronously, use `fs.appendFileSync`:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { appendFileSync } from "node:fs";

appendFileSync("message.txt", "data to append", "utf8");
```

***

See the [Node.js documentation](https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options) for more information.

# Write a string to a file

Source: https://bun.com/docs/guides/write-file/basic

This code snippet writes a string to disk at a particular *absolute path*.

It uses the fast [`Bun.write()`](/runtime/file-io#writing-files-bun-write) API to efficiently write data to disk. The first argument is a *destination*; the second is the *data* to write.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
await Bun.write(path, "Lorem ipsum");
```

***

Any relative paths will be resolved relative to the project root (the nearest directory containing a `package.json` file).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "./file.txt";
await Bun.write(path, "Lorem ipsum");
```

***

You can pass a `BunFile` as the destination. `Bun.write()` will write the data to its associated path.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = Bun.file("./file.txt");
await Bun.write(path, "Lorem ipsum");
```

***

`Bun.write()` returns the number of bytes written to disk.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "./file.txt";
const bytes = await Bun.write(path, "Lorem ipsum");
// => 11
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Write a Blob to a file

Source: https://bun.com/docs/guides/write-file/blob

This code snippet writes a `Blob` to disk at a particular path.

It uses the fast [`Bun.write()`](/runtime/file-io#writing-files-bun-write) API to efficiently write data to disk. The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
await Bun.write(path, "Lorem ipsum");
```

***

The `BunFile` class extends `Blob`, so you can pass a `BunFile` directly into `Bun.write()` as well.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "./out.txt";
const data = Bun.file("./in.txt");

// write the contents of ./in.txt to ./out.txt
await Bun.write(path, data);
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Write a file to stdout

Source: https://bun.com/docs/guides/write-file/cat

Bun exposes `stdout` as a `BunFile` with the `Bun.stdout` property. This can be used as a destination for [`Bun.write()`](/runtime/file-io#writing-files-bun-write).

This code writes a file to `stdout` similar to the `cat` command in Unix.

```ts cat.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
const file = Bun.file(path);
await Bun.write(Bun.stdout, file);
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Copy a file to another location

Source: https://bun.com/docs/guides/write-file/file-cp

This code snippet copies a file to another location on disk.

It uses the fast [`Bun.write()`](/runtime/file-io#writing-files-bun-write) API to efficiently write data to disk. The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const file = Bun.file("/path/to/original.txt");
await Bun.write("/path/to/copy.txt", file);
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Write a file incrementally

Source: https://bun.com/docs/guides/write-file/filesink

Bun provides an API for incrementally writing to a file. This is useful for writing large files, or for writing to a file over a long period of time.

Call `.writer()` on a `BunFile` to retrieve a `FileSink` instance. This instance can be used to efficiently buffer data and periodically "flush" it to disk. You can write & flush many times.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const file = Bun.file("/path/to/file.txt");
const writer = file.writer();

writer.write("lorem");
writer.write("ipsum");
writer.write("dolor");

writer.flush();

// continue writing & flushing
```

***

The `.write()` method can accept strings or binary data.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
w.write("hello");
w.write(Buffer.from("there"));
w.write(new Uint8Array([0, 255, 128]));
writer.flush();
```

***

The `FileSink` will also auto-flush when its internal buffer is full. You can configure the buffer size with the `highWaterMark` option.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const file = Bun.file("/path/to/file.txt");
const writer = file.writer({ highWaterMark: 1024 * 1024 }); // 1MB
```

***

When you're done writing to the file, call `.end()` to auto-flush the buffer and close the file.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
writer.end();
```

***

Full documentation: [FileSink](/runtime/file-io#incremental-writing-with-filesink).

# Write a Response to a file

Source: https://bun.com/docs/guides/write-file/response

This code snippet writes a `Response` to disk at a particular path. Bun will consume the `Response` body according to its `Content-Type` header.

It uses the fast [`Bun.write()`](/runtime/file-io#writing-files-bun-write) API to efficiently write data to disk. The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await fetch("https://bun.com");
const path = "./file.txt";
await Bun.write(path, result);
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Write to stdout

Source: https://bun.com/docs/guides/write-file/stdout

The `console.log` function writes to `stdout`. It will automatically append a line break at the end of the printed data.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Lorem ipsum");
```

***

For more advanced use cases, Bun exposes `stdout` as a `BunFile` via the `Bun.stdout` property. This can be used as a destination for [`Bun.write()`](/runtime/file-io#writing-files-bun-write).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.write(Bun.stdout, "Lorem ipsum");
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Write a ReadableStream to a file

Source: https://bun.com/docs/guides/write-file/stream

To write a `ReadableStream` to disk, first create a `Response` instance from the stream. This `Response` can then be written to disk using [`Bun.write()`](/runtime/file-io#writing-files-bun-write).

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const stream: ReadableStream = ...;
const path = "./file.txt";
const response = new Response(stream);

await Bun.write(path, response);
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Delete a file

Source: https://bun.com/docs/guides/write-file/unlink

The `Bun.file()` function accepts a path and returns a `BunFile` instance. Use the `.delete()` method to delete the file.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
const file = Bun.file(path);

await file.delete();
```

***

See [Docs > API > File I/O](/runtime/file-io#reading-files-bun-file) for complete documentation of `Bun.file()`.
