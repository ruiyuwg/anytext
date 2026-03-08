# Control sandbox timeout

> Learn how to control how long your sandbox stays alive using the timeout option.

URL: https://docs.deno.com/examples/sandbox\_timeout\_control/

You can control how long your sandbox stays alive using the timeout option.
Controlling timeout lets you decide whether sandboxes vanish immediately when
your script finishes or keep running for a set duration:

```ts
import { Sandbox } from "@deno/sandbox";

// Default: "session" - sandbox shuts down when you close/dispose the client
await using sandbox = await Sandbox.create({ timeout: "10m" });
```

Supported duration suffixes: `s` (seconds), `m` (minutes).

Examples: `"30s"`, `"5m"`, `"90s"`. The default is `"session"`, which means the
sandbox will automatically shut down when the client connection is closed or
disposed.

```ts
import { Sandbox } from "@deno/sandbox";

// Duration-based: keep sandbox alive for a specific time period
// Useful when you want the sandbox to persist after the script exits
const sandbox = await Sandbox.create({ timeout: "5m" }); // 5 minutes
const id = sandbox.id;
// Close the *connection* to the sandbox; the sandbox keeps running
await sandbox.close();

// Later, reconnect to the same sandbox using its ID
const reconnected = await Sandbox.connect({ id });
await reconnected.sh`echo 'Still alive!'`;

// You can still forcibly terminate it before its timeout elapses
await reconnected.kill();
// At this point, the sandbox is no longer reconnectable
```

The default "session" mode is fine for short-lived automation—resource cleanup
happens as soon as the client disposes.

Duration-based timeouts ("30s", "5m", etc.) let you close the client connection
while the sandbox keeps state alive, so you can reconnect later (e.g., to
inspect logs, rerun commands, or share the sandbox ID with another process)
before the timeout expires.

## Extend the timeout whenever you need

You are not locked into the original duration. As long as you still hold a
`Sandbox` instance (either the original handle or one reconnected via
`Sandbox.connect()`), call `sandbox.extendTimeout()` with another duration
string to push the expiry further out. Each call can add up to 30 minutes and
returns a `Date` indicating the new shutdown time.

```ts
import { Sandbox } from "@deno/sandbox";

const sandbox = await Sandbox.create({ timeout: "5m" });

// Need more time later on? Extend in-place without disrupting running work.
const newExpiry = await sandbox.extendTimeout("30m");
console.log(`Sandbox now lives until ${newExpiry.toISOString()}`);
```

You still control lifecycle explicitly with a call to `kill()` to end the
sandbox early if you no longer need it, useful if your job finishes sooner than
expected.

> Need other timeout modes? Contact
> deploy@deno.com.

***

# Upload files and directories

> Learn how to upload files and directories to a sandbox.

URL: https://docs.deno.com/examples/sandbox\_upload\_files/

Copy files from your machine into the sandbox using
`sandbox.fs.upload(localPath, sandboxPath)`.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// Upload a single file to a specific path in the sandbox
await sandbox.fs.upload("./README.md", "./readme-copy.md");

// Upload a local directory tree into the sandbox current directory
await sandbox.fs.upload("./my-project", ".");
```

Uploading files or entire directories with `sandbox.fs.upload()` lets you bring
your local artifacts into the sandbox environment before running commands there.
This is useful when your workflow depends on existing source folders,
configuration files, or test data—once uploaded, the sandbox can compile, test,
or process them without remote Git access or manual copy/pasting.

***

# Provide a VSCode instance in a sandbox

> Learn how to provide a VSCode instance in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_vscode\_instance/

Running `sandbox.exposeVscode()` spins up a full VS Code instance inside an
isolated sandboxed environment and exposes its URL so you can open it in a
browser. This is handy when you need a lightweight, disposable editor for demos,
workshops, or remote debugging: you can provision VS Code on demand without
installing anything locally, safely experiment with code inside a contained
workspace, and tear it down automatically once you’re done.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// Start a VSCode instance
const vscode = await sandbox.exposeVscode();

console.log(vscode.url); // print the url of the running instance
await vscode.status; // wait until it exits
```

***

# Serve a web framework

> Create a package.json, install deps, run a web framework (Express), and expose it publicly from a sandbox

URL: https://docs.deno.com/examples/sandbox\_web\_framework/

With Deno Sandbox you can create a `package.json`, install dependencies, run a
web framework (such as Express), and expose it publicly over HTTP.

This example shows how to create a minimal Express app inside the sandbox, run
it on port 3000, and expose it publicly using `sandbox.exposeHttp()`.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// 1) Write package.json and server.js in the sandbox
const PACKAGE_JSON = {
  name: "sandbox-express-demo",
  private: true,
  type: "module",
  dependencies: { express: "^4.19.2" },
};
await sandbox.fs.writeTextFile(
  "package.json",
  JSON.stringify(PACKAGE_JSON, null, 2),
);

await sandbox.fs.writeTextFile(
  "server.js",
  `import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Hello from Express in @deno/sandbox!'));
app.get('/time', (req, res) => res.json({ now: new Date().toISOString() }));
app.listen(3000, () => console.log('listening on :3000'));
`,
);

// 2) Install dependencies
await sandbox.sh`deno install`;

// 3) Start the server
const server = await sandbox.deno.run({ entrypoint: "server.js" });

// 4) Publish to the internet
const publicUrl = await sandbox.exposeHttp({ port: 3000 });
console.log("Public URL:", publicUrl); // e.g. https://<random>.sandbox.deno.net

// Fetch from your local machine to verify
const resp = await fetch(`${publicUrl}/time`);
console.log(await resp.json());

// Keep the process alive as long as you need; when done, closing the sandbox
// will tear it down.
```

***
