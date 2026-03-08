# Import a YAML file

Source: https://bun.com/docs/guides/runtime/import-yaml

Bun natively supports `.yaml` and `.yml` imports.

```yaml config.yaml icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
database:
  host: localhost
  port: 5432
  name: myapp

server:
  port: 3000
  timeout: 30

features:
  auth: true
  rateLimit: true
```

***

Import the file like any other source file.

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import config from "./config.yaml";

config.database.host; // => "localhost"
config.server.port; // => 3000
config.features.auth; // => true
```

***

You can also use named imports to destructure top-level properties:

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { database, server, features } from "./config.yaml";

console.log(database.name); // => "myapp"
console.log(server.timeout); // => 30
console.log(features.rateLimit); // => true
```

***

Bun also supports [Import Attributes](https://github.com/tc39/proposal-import-attributes) syntax:

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import config from "./config.yaml" with { type: "yaml" };

config.database.port; // => 5432
```

***

For parsing YAML strings at runtime, use `Bun.YAML.parse()`:

```ts config.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const yamlString = `
name: John Doe
age: 30
hobbies:
  - reading
  - coding
`;

const data = Bun.YAML.parse(yamlString);
console.log(data.name); // => "John Doe"
console.log(data.hobbies); // => ["reading", "coding"]
```

***

## TypeScript Support

To add TypeScript support for your YAML imports, create a declaration file with `.d.ts` appended to the YAML filename (e.g., `config.yaml` → `config.yaml.d.ts`);

```ts config.yaml.d.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const contents: {
  database: {
    host: string;
    port: number;
    name: string;
  };
  server: {
    port: number;
    timeout: number;
  };
  features: {
    auth: boolean;
    rateLimit: boolean;
  };
};

export = contents;
```

***

See [Docs > API > YAML](/runtime/yaml) for complete documentation on YAML support in Bun.

# Read environment variables

Source: https://bun.com/docs/guides/runtime/read-env

The current environment variables can be accessed via `process.env`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
process.env.API_TOKEN; // => "secret"
```

***

Bun also exposes these variables via `Bun.env`, which is a simple alias of `process.env`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.env.API_TOKEN; // => "secret"
```

***

To print all currently-set environment variables to the command line, run `bun --print process.env`. This is useful for debugging.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --print process.env
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
BAZ=stuff
FOOBAR=aaaaaa
<lots more lines>
```

***

See [Docs > Runtime > Environment variables](/runtime/environment-variables) for more information on using environment variables with Bun.

# Set environment variables

Source: https://bun.com/docs/guides/runtime/set-env

The current environment variables can be accessed via `process.env` or `Bun.env`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.env.API_TOKEN; // => "secret"
process.env.API_TOKEN; // => "secret"
```

***

Set these variables in a `.env` file.

Bun reads the following files automatically (listed in order of increasing precedence).

- `.env`
- `.env.production`, `.env.development`, `.env.test` (depending on value of `NODE_ENV`)
- `.env.local` (not loaded when `NODE_ENV=test`)

```ini .env icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
FOO=hello
BAR=world
```

***

Variables can also be set via the command line.

```sh Linux/macOS icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
FOO=helloworld bun run dev
```

```sh Windows icon="windows" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Using CMD
set FOO=helloworld && bun run dev

# Using PowerShell
$env:FOO="helloworld"; bun run dev
```

***

See [Docs > Runtime > Environment variables](/runtime/environment-variables) for more information on using environment variables with Bun.

# Run a Shell Command

Source: https://bun.com/docs/guides/runtime/shell

Bun Shell is a cross-platform bash-like shell built in to Bun.

It provides a simple way to run shell commands in JavaScript and TypeScript. To get started, import the `$` function from the `bun` package and use it to run shell commands.

```ts foo.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { $ } from "bun";

await $`echo Hello, world!`; // => "Hello, world!"
```

***

The `$` function is a tagged template literal that runs the command and returns a promise that resolves with the command's output.

```ts foo.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { $ } from "bun";

const output = await $`ls -l`.text();
console.log(output);
```

***

To get each line of the output as an array, use the `lines` method.

```ts foo.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { $ } from "bun";

for await (const line of $`ls -l`.lines()) {
  console.log(line);
}
```

***

See [Docs > API > Shell](/runtime/shell) for complete documentation.

# Set a time zone in Bun

Source: https://bun.com/docs/guides/runtime/timezone

Bun supports programmatically setting a default time zone for the lifetime of the `bun` process. To do set, set the value of the `TZ` environment variable to a [valid timezone identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

When running a file with `bun`, the timezone defaults to your system's configured local time zone.

When running tests with `bun test`, the timezone is set to `UTC` to make tests more deterministic.

```ts process.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
process.env.TZ = "America/New_York";
```

***

Alternatively, this can be set from the command line when running a Bun command.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
TZ=America/New_York bun run dev
```

***

Once `TZ` is set, any `Date` instances will have that time zone. By default all dates use your system's configured time zone.

```ts process.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
new Date().getHours(); // => 18

process.env.TZ = "America/New_York";

new Date().getHours(); // => 21
```

# Re-map import paths

Source: https://bun.com/docs/guides/runtime/tsconfig-paths

Bun reads the `paths` field in your `tsconfig.json` to re-write import paths. This is useful for aliasing package names or avoiding long relative paths.

```json tsconfig.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "compilerOptions": {
    "paths": {
      "my-custom-name": ["zod"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

***

With the above `tsconfig.json`, the following imports will be re-written:

```ts tsconfig.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { z } from "my-custom-name"; // imports from "zod"
import { Button } from "@components/Button"; // imports from "./src/components/Button"
```

***

See [Docs > Runtime > TypeScript](/runtime/typescript) for more information on using TypeScript with Bun.

# Install TypeScript declarations for Bun

Source: https://bun.com/docs/guides/runtime/typescript

To install TypeScript definitions for Bun's built-in APIs in your project, install `@types/bun`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add -d @types/bun # dev dependency
```

***

Below is the full set of recommended `compilerOptions` for a Bun project. With this `tsconfig.json`, you can use top-level await, extensioned or extensionless imports, and JSX.

```json tsconfig.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}
```

***

Refer to [Ecosystem > TypeScript](/runtime/typescript) for a complete guide to TypeScript support in Bun.
