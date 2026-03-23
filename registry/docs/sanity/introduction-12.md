# Introduction

```sh
# Installing the CLI globally
npm install --global sanity@latest

# Alternatively
yarn global add sanity@latest
pnpm install --global sanity@latest

# Running the CLI without global installation
npx -y sanity@latest [command]

```

The `sanity` Command Line Interface (CLI) is a collection of tools for managing, developing, debugging, and deploying your Sanity Studio projects as well as running scripts to migrate or manipulate your data.

The CLI can be installed as a global dependency in your development environment, locally on a per-project basis, or in many cases, accessed entirely using `npx sanity@latest [command]`, which bypasses the need to install the CLI globally.

[Reference: Command Line Interface](https://www.sanity.io/docs/cli-reference/cli-config)

> \[!WARNING]
> Gotcha
> Whether you choose to install the `sanity` CLI or use it only with `npx`, you will need node and npm installed on your system.
> [How to install node and npm?](https://www.sanity.io/help/a5f6caba-53c9-4a9f-96ef-1bd1ae8f5c10)

## The CLI configuration file

You can add project-specific CLI configuration by adding a file named `sanity.cli.js` (`.ts`) in your project‘s root folder.

### Minimal example

```javascript
// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "<your-project-id>",
    dataset: "<your-dataset>",
  }
});

```

### Advanced example

You can embed further settings in your CLI configuration file, including specifying the local server port for `sanity dev`, GraphQL deployments, and extending the Vite configuration.

```javascript
// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "<your-project-id>",
    dataset: "<your-dataset>",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  graphql: [{
    tag: "default",
    playground: true,
    generation: "gen3",
    nonNullDocumentFields: false,
  }],
  vite: (config) => config,
});

```

## Uninstall Sanity CLI

If you prefer to invoke the CLI with `npx` or similar, or you no longer want Sanity CLI installed globally, you can uninstall it using the preferred method for your package manager.

```sh
# Remove the CLI globally
npm uninstall --global sanity

# Alternatively
yarn global remove sanity
pnpm remove --global sanity
```
