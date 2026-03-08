# Spawn a child process and communicate using IPC

Source: https://bun.com/docs/guides/process/ipc

Use [`Bun.spawn()`](/runtime/child-process) to spawn a child process. When spawning a second `bun` process, you can open a direct inter-process communication (IPC) channel between the two processes.

This API is only compatible with other `bun` processes. Use `process.execPath` to get a path to the currently running
`bun` executable.

```ts parent.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const child = Bun.spawn(["bun", "child.ts"], {
  ipc(message) {
    /**
     * The message received from the sub process
     **/
  },
});
```

***

The parent process can send messages to the subprocess using the `.send()` method on the returned `Subprocess` instance. A reference to the sending subprocess is also available as the second argument in the `ipc` handler.

```ts parent.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const childProc = Bun.spawn(["bun", "child.ts"], {
  ipc(message, childProc) {
    /**
     * The message received from the sub process
     **/
    childProc.send("Respond to child");
  },
});

childProc.send("I am your father"); // The parent can send messages to the child as well
```

***

Meanwhile the child process can send messages to its parent using with `process.send()` and receive messages with `process.on("message")`. This is the same API used for `child_process.fork()` in Node.js.

```ts child.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
process.send("Hello from child as string");
process.send({ message: "Hello from child as object" });

process.on("message", message => {
  // print message from parent
  console.log(message);
});
```

***

All messages are serialized using the JSC `serialize` API, which allows for the same set of [transferrable types](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) supported by `postMessage` and `structuredClone`, including strings, typed arrays, streams, and objects.

```ts child.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// send a string
process.send("Hello from child as string");

// send an object
process.send({ message: "Hello from child as object" });
```

***

See [Docs > API > Child processes](/runtime/child-process) for complete documentation.

# Get the process uptime in nanoseconds

Source: https://bun.com/docs/guides/process/nanoseconds

Use `Bun.nanoseconds()` to get the total number of nanoseconds the `bun` process has been alive.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.nanoseconds();
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Listen to OS signals

Source: https://bun.com/docs/guides/process/os-signals

Bun supports the Node.js `process` global, including the `process.on()` method for listening to OS signals.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
process.on("SIGINT", () => {
  console.log("Received SIGINT");
});
```

***

If you don't know which signal to listen for, you listen to the [`"beforeExit"`](https://nodejs.org/api/process.html#event-beforeexit) and [`"exit"`](https://nodejs.org/api/process.html#event-exit) events.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
process.on("beforeExit", code => {
  console.log(`Event loop is empty!`);
});

process.on("exit", code => {
  console.log(`Process is exiting with code ${code}`);
});
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Spawn a child process

Source: https://bun.com/docs/guides/process/spawn

Use [`Bun.spawn()`](/runtime/child-process) to spawn a child process.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"]);

// await completion
await proc.exited;
```

***

The second argument accepts a configuration object.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "Hello, world!"], {
  cwd: "/tmp",
  env: { FOO: "bar" },
  onExit(proc, exitCode, signalCode, error) {
    // exit handler
  },
});
```

***

By default, the `stdout` of the child process can be consumed as a `ReadableStream` using `proc.stdout`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"]);

const output = await proc.stdout.text();
output; // => "hello\n"
```

***

See [Docs > API > Child processes](/runtime/child-process) for complete documentation.

# Read stderr from a child process

Source: https://bun.com/docs/guides/process/spawn-stderr

When using [`Bun.spawn()`](/runtime/child-process), the child process inherits the `stderr` of the spawning process. If instead you'd prefer to read and handle `stderr`, set the `stderr` option to `"pipe"`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"], {
  stderr: "pipe",
});

proc.stderr; // => ReadableStream
```

***

To read `stderr` until the child process exits, use .text()

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"], {
  stderr: "pipe",
});

const errors: string = await proc.stderr.text();
if (errors) {
  // handle errors
}
```

***

See [Docs > API > Child processes](/runtime/child-process) for complete documentation.

# Read stdout from a child process

Source: https://bun.com/docs/guides/process/spawn-stdout

When using [`Bun.spawn()`](/runtime/child-process), the `stdout` of the child process can be consumed as a `ReadableStream` via `proc.stdout`.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"]);

const output = await proc.stdout.text();
output; // => "hello"
```

***

To instead pipe the `stdout` of the child process to `stdout` of the parent process, set "inherit".

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const proc = Bun.spawn(["echo", "hello"], {
  stdout: "inherit",
});
```

***

See [Docs > API > Child processes](/runtime/child-process) for complete documentation.
