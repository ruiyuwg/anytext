# Safe Cloud Code Execution with Snapshots

> Deno Sandbox lets you spin up isolated cloud VMs programmatically.  With the snapshots feature, you can pre-install an entire environment once and boot it without waiting for installs every time after.

URL: https://docs.deno.com/examples/snapshot\_python\_video/

## Video description

Deno Sandbox lets you spin up isolated cloud VMs programmatically. With the
snapshots feature, you can pre-install an entire environment once and boot it
without waiting for installs every time after.

In this video we show you the snapshot workflow end to end:

- Create a cloud volume and boot a sandbox
- Install Python, and required packages and build tools
- Snapshot the volume — your environment is now frozen and reusable
- Boot fresh sandboxes from that snapshot instantly, with everything
  pre-installed

As a demo we run a live interactive Mandelbrot fractal explorer. An HTTP server
deployed entirely inside the sandbox, the code never touching the host machine.

This is the foundation for safe execution of AI-generated code, user-submitted
scripts, or any workload you want fully isolated and reproducible.

## Transcript and code

Python is everywhere - data science, AI, scripting, web apps, it's the language
everyone reaches for. But there's a problem that you tend to hit fast. Python
environments can be a mess; you've got system Python fighting with virtual
environments, packages that need native build tools. It can be a whole thing.

Now, imagine you want to run Python code that you didn't write yourself. Maybe
it is AI generated. Maybe it's from a user. Maybe it's just experimental. You
really don't want that touching your machine.

Today, I'm going to show you how to spin up a fully isolated cloud sandbox with
Python pre-installed. We're going to run a Numpy powered Mandelbrot fractal
explorer in it and serve it as a live web app, all with about 60 lines of
TypeScript, and your machine will never run a single line of Python. Let's get
into it.

### Initialize a basic Deno project

```sh
deno init my-snapshot-project
cd my-snapshot-project
deno add jsr:@deno/sandbox
```

This is a really basic Deno project. The only dependency that we're going to use
is the Deno Sandbox SDK from JSR. That's the SDK for creating and managing cloud
sandboxes programmatically. We're going to write two TypeScript files.

`setup_python.ts`: We're going to run this one time to create our sandbox,
install Python, and a bunch of useful packages, and then snapshot.

`use_python.ts`: The script that we're going to run any time we want to actually
use the Python environment inside our sandbox.

This two-step pattern is the whole point. We do the heavy lifting once, then we
reuse that result forever. It's kind of the same idea as a Docker image or a VM
snapshot. They can be expensive and slow to build, but they're cheap and quick
to use.

### Setting up a Snapshot

So, let's take a look at Setting up a Snapshot our setup python.ts file. We
create a client with the Deno Sandbox SDK.

```ts title="setup_python.ts"
import { SandboxClient } from "@deno/sandbox";
const client = new SandboxClient();

async function initSandbox() {
  // ... we'll fill this in next
}
```

Then we create a volume with 10 gigs of space. And I'm using the `ord` region,
but you can pick any region. The region just determines where the sandbox runs.
The closer to you, the lower the latency.

```ts title="setup_python.ts (cont.)"
const volume = await client.volumes.create({
  region: "ord",
  slug: "fun-with-python",
  capacity: "10GB",
});
```

We're then going to boot a sandbox with that volume as its root file system.
Notice the await using syntax here. That's JavaScript's explicit resource
management. When this scope exits, the sandbox automatically tears itself down
and we never have to think about the cleanup ourselves.

```ts title="setup_python.ts (cont.)"
await using sandbox = await client.sandboxes.create({
  region: "ord",
  root: volume.slug,
});
```

Inside the sandbox, we're going to run our setup commands. Firstly, we've got
apt-get update, followed by installing Python 3, Python 3 pip, Python 3 VMv,
Python 3D dev, and build essential. That last one is important. It gives us the
compiler that we're going to need for the packages that ship native extensions.

Then we're going to install our packages. We've got requests, httpx, numpy,
pandas, python.m and we use the break system packages flag because inside this
sandbox, we own the whole system. So there's no reason to fight pip's usual
guard rails. Finally, we can verify that everything is in place by printing the
Python and pip version.

```ts title="setup_python.ts (cont.)"
await sandbox.sh`sudo apt-get update -qq`;
await sandbox
  .sh`sudo apt-get install -y python3 python3-pip python3-venv python3-dev build-essential`;

await sandbox.sh`sudo pip3 install --break-system-packages \
    requests \
    httpx \
    numpy \
    pandas \
    python-dotenv`;

console.log("Verifying Python installation...");

await sandbox.sh`python3 --version`;
await sandbox.sh`pip3 --version`;

return volume.id;
```

Once that's all done, we snapshot the volume with `client.volumes.snapshot`,
giving it the volume ID and the slug for our snapshot.

```ts title="setup_python.ts (cont.)"
const volumeId = await initSandbox();

console.log("Snapshotting the volume...");

const snapshot = await client.volumes.snapshot(volumeId, {
  slug: "fun-with-python-snapshot",
});

console.log("Created Python snapshot " + snapshot.id);
```

To run this script, we're going to use the dino run command with the allow net
and allow env permissions set. And then we're done. We never need to run that
again.

```sh
deno run -N -E setup_python.ts
```

### Booting from a Snapshot

Now, let's take a look at our `use_python.ts`. First of all, we're going to
create a sandbox from the snapshot that we just set up. We don't need any
installation step here. The snapshot already has everything. We're going to
expose port 8000 and we'll give it a 30 minute timeout.

```ts title="use_python.ts (cont.)"
await using sandbox = await client.sandboxes.create({
  region: "ord",
  root: "fun-with-python-snapshot",
  port: 8000,
  timeout: "30m",
});
```

Then we're going to use `sandbox.fs.writeTextFile` to drop our Python app
directly into the sandbox file system at a temporary location. This is a nice
clean way to get code into a sandbox without messing with shell escaping. We are
just passing it a TypeScript string.

```ts title="use_python.ts (cont.)"
const appCode = `# Python app code goes here`;

await sandbox.fs.writeTextFile("/tmp/app.py", appCode);
```

The
[Python app itself](https://github.com/denoland/tutorial-with-snapshot/blob/7b8e5331ab22968a7fc52dc84e1613072c7494d1/use_python.ts#L18-L131)
is a self-contained HTTP server. You can take the code from the repo and paste
it into the `appCode` string.

```ts title="use_python.ts (cont.)"
const p = await sandbox.sh`python3 /tmp/app.py`.spawn();

console.log("\nMandelbrot Explorer running at", sandbox.url);

await p.output();
```

`sandbox.url` gives us a public URL where port 8000 is reachable. `p.output()`
keeps the script alive for the duration.

Now, let's take a look at what we're actually running inside the sandbox. The
Python app uses NumPy to compute the Mandelbrot set. That's just a classic
fractal where you interactively apply z= z^ 2 + c across a grid of complex
numbers and then you count how many steps it takes each point to escape to
infinity. NumPy can do this really fast and the result is rendered as colored
block characters based on their escape time ranging from electric blue through
to green through to deep red. And points that never escape are colored in solid
black.

Run the `use_python.ts` script with

```sh
deno run -A use_python.ts
```

and open the URL in your browser.

If we take a look at what's actually rendered in the browser, we can see we've
got a nice interactive app here. Each nav button is just a link with query
parameters that shift the viewpoint. When we click zoom in, the server
recomputes the fractal for the new region and returns a new page. No JavaScript,
no websockets, just HTTP. And the whole time we're running this whole thing on a
throwaway Linux VM in the cloud. We're using Python, NumPy, and a web server,
and none of it is running on our own machine.

This pattern is useful well beyond fractals.

- If you're building a tool where Claude or another model is writing Python for
  you, you can execute that code in a sandbox and it won't be able to touch your
  system or read your files and it won't be able to exfiltrate your secret API
  keys.

- If you're building a data analysis tool where users are able to upload their
  own Python, same idea. Each user gets an isolated environment with the
  packages that they need pre-baked into a snapshot.

- The snapshot is a fixed point in time. Every sandbox that you boot from it is
  identical. So we're not going to have to worry about any it works on my
  machine or any drift.

- And finally, because NumPy and all the other packages are already in the
  snapshot, the snapshot is ready to run in under 200 milliseconds, that's fast
  enough to use on demand per request.

All of the code used in this demo is also available as a
[walk through tutorial](/examples/snapshot_python_tutorial/). You'll need a Dino
deploy account to use the sandbox SDK.

If you want to go further, you could of course swap out the fractal for your own
Python script or try adding different packages to the setup.

🦕 The snapshot approach means that you can build up exactly the environment you
want and reuse it as many times as you like.

***

# TypeScript and JSX

URL: https://docs.deno.com/examples/ts\_jsx/

***

# Build a Vue app

URL: https://docs.deno.com/examples/vue\_app\_video/

***

# What is Deno?

URL: https://docs.deno.com/examples/what\_is\_deno/

## Video description

A short introduction to Deno and its history

## Transcript and code

Deno is an open source runtime for JavaScript, TypeScript, and WebAssembly
projects that's built on V8 and Rust. It's modern, it's fast, it's flexible, and
it's secure by default.

Deno was created by Ryan Dahl, the creator of Node.js, and in 2018, he gave
[a famous talk at JSConf EU](https://www.youtube.com/watch?v=M3BM9TB-8yA) about
regrets that he had about Node. And Deno provides solutions to all of them.

With the hindsight of someone who's been there, Deno gives us a runtime that's
thought a lot about the details. Details like TypeScript support by default. You
can run or import TypeScript without installing anything more than the Deno CLI.
Deno has a built-in TypeScript compiler, so it'll just run your TypeScript code
without any extra configuration.

Details like linting, formatting, and testing. Deno is an all-in-one toolchain
that you can use to get started with your project without having to use all of
your finite time on earth having to configure it. Details like web standards.
Deno is built on web standards that you might recognize, like Fetch and
WebSockets.

You don't have to learn anything new to use them. If you've used them in the
browser, you're ready to use them in Deno. Deno is secure by default. You have
to specifically enable permissions for sensitive APIs like the network, the file
system, environment access. Deno has you opt into these permissions like you
would to opt into geolocation in the browser.

[In this course](https://www.youtube.com/watch?v=KPTOo4k8-GE\&list=PLvvLnBDNuTEov9EBIp3MMfHlBxaKGRWTe),
we're going to walk through the most important features of Deno with hands-on
activities. Whether you've experimented with Deno in the past, or this is all
new to you, I think you're going to like it here.

***

# lint/rules/adjacent-overload-signatures.md

URL: https://docs.deno.com/lint/rules/adjacent-overload-signatures

Requires overload signatures to be adjacent to each other.

Overloaded signatures which are not next to each other can lead to code which is
hard to read and maintain.

**Invalid:**

(`bar` is declared in-between `foo` overloads)

```typescript
type FooType = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};
```

```typescript
interface FooInterface {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}
```

```typescript
class FooClass {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}
```

```typescript
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void {}
export function foo(sn: string | number): void {}
```

**Valid:**

(`bar` is declared after `foo`)

```typescript
type FooType = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};
```

```typescript
interface FooInterface {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}
```

```typescript
class FooClass {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}
```

```typescript
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void {}
export function bar(): void {}
```

***

# lint/rules/ban-ts-comment.md

URL: https://docs.deno.com/lint/rules/ban-ts-comment

Disallows the use of Typescript directives without a comment.

Typescript directives reduce the effectiveness of the compiler, something which
should only be done in exceptional circumstances. The reason why should be
documented in a comment alongside the directive.

**Invalid:**

```typescript
// @ts-expect-error
let a: number = "I am a string";
```

```typescript
// @ts-ignore
let a: number = "I am a string";
```

```typescript
// @ts-nocheck
let a: number = "I am a string";
```

**Valid:**

```typescript
// @ts-expect-error: Temporary workaround (see ticket #422)
let a: number = "I am a string";
```

```typescript
// @ts-ignore: Temporary workaround (see ticket #422)
let a: number = "I am a string";
```

```typescript
// @ts-nocheck: Temporary workaround (see ticket #422)
let a: number = "I am a string";
```

***

# lint/rules/ban-types.md

URL: https://docs.deno.com/lint/rules/ban-types

Bans the use of primitive wrapper objects (e.g. `String` the object is a wrapper
of `string` the primitive) in addition to the non-explicit `Function` type and
the misunderstood `Object` type.

There are very few situations where primitive wrapper objects are desired and
far more often a mistake was made with the case of the primitive type. You also
cannot assign a primitive wrapper object to a primitive leading to type issues
down the line. For reference, [the TypeScript handbook] also says we shouldn't
ever use these wrapper objects.

[the TypeScript handbook]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#number-string-boolean-symbol-and-object

With `Function`, it is better to explicitly define the entire function signature
rather than use the non-specific `Function` type which won't give you type
safety with the function.

Finally, `Object` and `{}` means "any non-nullish value" rather than "any object
type". `object` is a good choice for a meaning of "any object type".

**Invalid:**

```typescript
let a: Boolean;
let b: String;
let c: Number;
let d: Symbol;
let e: Function;
let f: Object;
let g: {};
```

**Valid:**

```typescript
let a: boolean;
let b: string;
let c: number;
let d: symbol;
let e: () => number;
let f: object;
let g: Record<string, never>;
```

***

# lint/rules/ban-unknown-rule-code.md

URL: https://docs.deno.com/lint/rules/ban-unknown-rule-code

Warns the usage of unknown rule codes in ignore directives.

We sometimes have to suppress and ignore lint errors for some reasons. We can do
so using [ignore directives](/go/lint-ignore/) with rule names that should be
ignored like so:

```typescript
// deno-lint-ignore no-explicit-any no-unused-vars
const foo: any = 42;
```

This rule checks for the validity of the specified rule names (i.e. whether
`deno_lint` provides the rule or not).

**Invalid:**

```typescript
// typo
// deno-lint-ignore eq-eq-e
console.assert(x == 42);

// unknown rule name
// deno-lint-ignore UNKNOWN_RULE_NAME
const b = "b";
```

**Valid:**

```typescript
// deno-lint-ignore eq-eq-eq
console.assert(x == 42);

// deno-lint-ignore no-unused-vars
const b = "b";
```

***

# lint/rules/ban-untagged-ignore.md

URL: https://docs.deno.com/lint/rules/ban-untagged-ignore

Requires `deno-lint-ignore` to be annotated with one or more rule names.

Ignoring all rules can mask unexpected or future problems. Therefore you need to
explicitly specify which rule(s) are to be ignored.

**Invalid:**

```typescript
// deno-lint-ignore
export function duplicateArgumentsFn(a, b, a) {}
```

**Valid:**

```typescript
// deno-lint-ignore no-dupe-args
export function duplicateArgumentsFn(a, b, a) {}
```

***

# lint/rules/ban-untagged-todo.md

URL: https://docs.deno.com/lint/rules/ban-untagged-todo

Requires TODOs to be annotated with either a user tag (`@user`) or an issue
reference (`#issue`).

TODOs without reference to a user or an issue become stale with no easy way to
get more information.

**Invalid:**

```typescript
// TODO Improve calc engine
export function calcValue(): number {}
```

```typescript
// TODO Improve calc engine (@djones)
export function calcValue(): number {}
```

```typescript
// TODO Improve calc engine (#332)
export function calcValue(): number {}
```

**Valid:**

```typescript
// TODO(djones) Improve calc engine
export function calcValue(): number {}
```

```typescript
// TODO(@djones) Improve calc engine
export function calcValue(): number {}
```

```typescript
// TODO(#332)
export function calcValue(): number {}
```

```typescript
// TODO(#332) Improve calc engine
export function calcValue(): number {}
```

***

# lint/rules/ban-unused-ignore.md

URL: https://docs.deno.com/lint/rules/ban-unused-ignore

Warns unused ignore directives.

We sometimes have to suppress and ignore lint errors for some reasons and we can
do so using [ignore directives](/go/lint-ignore/).

In some cases, however, like after refactoring, we may end up having ignore
directives that are no longer necessary. Such superfluous ignore directives are
likely to confuse future code readers, and to make matters worse, might hide
future lint errors unintentionally. To prevent such situations, this rule
detects unused, superfluous ignore directives.

**Invalid:**

```typescript
// Actually this line is valid since `export` means "used",
// so this directive is superfluous
// deno-lint-ignore no-unused-vars
export const foo = 42;
```

**Valid:**

```typescript
export const foo = 42;
```

***
