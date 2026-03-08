# Error handling

> Learn how to handle errors in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_error\_handling/

Handling sandbox command failures explicitly gives you predictable recovery
paths:

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// Commands throw by default on non-zero exit
try {
  await sandbox.sh`exit 1`;
} catch (error) {
  console.log("Command failed:", error);
}

// Use noThrow() to handle errors manually
const result = await sandbox.sh`exit 1`.noThrow();
console.log("Exit code:", result.status.code); // → 1
console.log("Success:", result.status.success); // → false
```

Deno Sandbox commands throw on any non-zero exit, so wrapping them in try/catch
lets you surface clean error messages or trigger fallback logic instead of
crashing the entire workflow.

When you want to inspect failures without throwing, `.noThrow()` returns the
full status object, so you can branch on `status.code` or `status.success`, log
diagnostics, or retry specific commands without losing context. This pattern is
essential for robust automation where commands might fail due to user input,
transient network issues, or missing dependencies.

## Custom error classes

You can handle errors with custom error classes in a sandbox.

Catching `SandboxCommandError` lets you differentiate sandbox command failures
from other exceptions. When the error is the `SandboxCommandError` class, you
can read structured fields such as `error.code` or format `error.message` to
decide whether to retry, escalate, or map exit codes to your own domain-specific
errors:

```ts
import { Sandbox, SandboxCommandError } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

try {
  await sandbox.sh`exit 42`;
} catch (error) {
  if (error instanceof SandboxCommandError) {
    console.log("Exit code:", error.code); // → 42
    console.log("Error message:", error.message);
  }
}
```

This makes it easier to build higher-level automation that reacts intelligently
to known failure modes instead of treating every thrown error the same.

***

# Evaluating JavaScript

> Learn how to evaluate JavaScript code in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_evaluating\_javascript/

You can evaluate JavaScript code in a sandbox using the `eval` function.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

const result = await sandbox.deno.eval(`
  const a = 1;
  const b = 2;
  a + b;
`);
console.log("result:", result);
```

Calling `sandbox.deno.eval()` lets you run arbitrary JavaScript snippets
directly inside the sandbox’s Deno runtime without writing files or shelling
out. This is useful when you want to prototype logic, run small computations, or
inspect the sandbox environment itself quickly. Use it for dynamic scripts or
exploratory debugging where creating a full module would be overkill.

***

# Interactive JavaScript REPL

> Learn how to provide an interactive Deno REPL in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_javascript\_repl/

A REPL (Read–Eval–Print Loop) is an interactive execution session where you type
code, the environment reads it, evaluates it, prints the result, and then keeps
the session alive so you can continue running more code while preserving state.

The `repl()` method can be used to provide an interactive JavaScript REPL in a
sandbox.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// Start a Deno REPL
const repl = await sandbox.deno.repl();

// Execute code interactively, maintaining state
await repl.eval("const x = 42;");
await repl.eval("const y = 8;");
const result = await repl.eval("x + y");
console.log("result:", result); // 50
```

***

# Configure sandbox memory

> Learn how to configure the memory allocated to a sandbox

URL: https://docs.deno.com/examples/sandbox\_memory/

You can customize the amount of memory allocated to your sandbox using the
memoryMb option. This allows you to allocate more resources for memory-intensive
workloads or reduce memory for lighter tasks.

```ts
import { Sandbox } from "@deno/sandbox";

// Create a sandbox with 1GB of memory
await using sandbox = await Sandbox.create({ memory: 1024 });
```

```ts
import { Sandbox } from "@deno/sandbox";

// Create a sandbox with 4GB of memory for memory-intensive workloads
await using sandbox = await Sandbox.create({ memory: 4096 });

// Check available memory
const memInfo = await sandbox.deno.eval<{ total: number }>(
  "Deno.systemMemoryInfo()",
);
console.log("Total memory:", memInfo.total);
```

Configuring memory when creating the sandbox lets you tune resource usage per
workload. Lightweight tasks can run in smaller sandboxes to conserve resources,
while data-heavy scripts or compilations can request up to 4 GB to avoid
out-of-memory failures.

Since you can programmatically inspect the sandbox’s memory via
`Deno.systemMemoryInfo()`, you can verify allocations or adapt behavior based on
the measured limits. This control helps match sandbox capacity to your needs,
keeping performance predictable while managing costs.

Memory limits (may change in the future):

- Minimum: 768MB
- Maximum: 4096MB

The actual available memory inside the sandbox may be slightly less than the
configured value due to system overhead.

> Want to allocate more memory? Contact
> deploy@deno.com.

***

# Spawn a subprocess, and get buffered output

> Learn how to spawn a subprocess, and get buffered output in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_spawn\_subprocess/

You can spawn subprocesses in a sandbox and get buffered output. For example, to
print the current working directory as seen below. This is useful for running
shell commands and scripts.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

const cwd = await sandbox.sh`pwd`;
```

For long‑running processes or large output, stream the stdout/stderr instead of
buffering it all in memory.

***

# Provide SSH access to a sandbox

> Learn how to provide SSH access to a sandbox.

URL: https://docs.deno.com/examples/sandbox\_ssh\_access/

SSH access allows you to connect to a sandboxed environment securely over the
SSH protocol. The `sandbox.create({ ssh: true })` method can be used to provide
SSH access to a sandbox.

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create({ ssh: true });

// Wait for Deploy to provision SSH access information.
const creds = sandbox.ssh ?? await sandbox.exposeSsh();
if (!creds) {
  throw new Error("SSH credentials were not provisioned for this sandbox");
}

const { hostname, username } = creds;
console.log(`ssh ${username}@${hostname}`);

// Keep the process alive by sleeping, otherwise the sandbox will be destroyed
// when the script exits.
await new Promise((resolve) => setTimeout(resolve, 10 * 60 * 1000)); // 10 minutes
```

***

# Stream output to a local file

> Learn how to stream output to a local file in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_stream\_output/

You can stream output to a local file in a sandbox. This avoids buffering entire
large artifacts in memory.

If you generate something sizable inside the sandbox (like `big.txt` below), you
can pipe it out chunk-by-chunk over a `ReadableStream`, converting Node’s
`fs.WriteStream` to a Web `WritableStream` for efficient transfer.

```ts
import { Sandbox } from "@deno/sandbox";
import fs from "node:fs";
import { Writable } from "node:stream";

await using sandbox = await Sandbox.create();

// Create a large file in the sandbox
await sandbox.fs.writeTextFile("big.txt", "#".repeat(5_000_000));

// Stream it out to a local file
const child = await sandbox.spawn("cat", {
  args: ["big.txt"],
  stdout: "piped",
});
const file = fs.createWriteStream("./big-local-copy.txt");
await child.stdout.pipeTo(Writable.toWeb(file));

const status = await child.status;
console.log("done:", status);
```

This pattern keeps memory usage flat, works well for logs or big binaries, and
lets you persist sandbox results on the host without temporary files or stdout
truncation.

***

# Template literal commands with variable interpolation

> Learn how to use template literal commands with variable interpolation in a sandbox.

URL: https://docs.deno.com/examples/sandbox\_template\_literals/

These conveniences help you script sandbox tasks quickly while keeping command
construction correct and secure.

Using `sandbox.sh` template literals lets you run shell commands inside the
sandbox more safely and ergonomically:

```ts
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// Variables are automatically escaped
const filename = "file with spaces.txt";
const content = "Hello, world!";
await sandbox.sh`echo ${content} > ${filename}`;

// Arrays are expanded to multiple arguments
const files = ["file1.txt", "file2.txt", "file3.txt"];
await sandbox.sh`rm ${files}`;

// Get JSON output
const data = await sandbox.sh`echo '{"count": 42}'`.json<{ count: number }>();
console.log(data.count); // → 42
```

Variables interpolated into the template literal are auto-escaped, so even
awkward values like file names with spaces can be passed without worrying about
quoting or injection.

Arrays expand into multiple arguments automatically, making batch operations
(e.g., deleting several files) concise without manual join logic. You can also
chain helpers such as `.json()` to parse command output directly into typed data
structures, eliminating brittle string parsing and keeping results strongly
typed.

***
