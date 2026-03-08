# Using bun install with an Azure Artifacts npm registry

Source: https://bun.com/docs/guides/install/azure-artifacts

In [Azure
Artifact's](https://learn.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops\&tabs=windows%2Cclassic)
instructions for `.npmrc`, they say to base64 encode the password. Do not do this for `bun install`. Bun will
automatically base64 encode the password for you if needed.

[Azure Artifacts](https://azure.microsoft.com/en-us/products/devops/artifacts) is a package management system for Azure DevOps. It allows you to host your own private npm registry, npm packages, and other types of packages as well.

***

### Configure with bunfig.toml

***

To use it with `bun install`, add a `bunfig.toml` file to your project with the following contents. Make sure to replace `my-azure-artifacts-user` with your Azure Artifacts username, such as `jarred1234`.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install.registry]
url = "https://pkgs.dev.azure.com/my-azure-artifacts-user/_packaging/my-azure-artifacts-user/npm/registry"
username = "my-azure-artifacts-user"
# You can use an environment variable here
password = "$NPM_PASSWORD"
```

***

Then assign your Azure Personal Access Token to the `NPM_PASSWORD` environment variable. Bun [automatically reads](/runtime/environment-variables) `.env` files, so create a file called `.env` in your project root. There is no need to base-64 encode this token! Bun will do this for you.

```ini .env icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
NPM_PASSWORD=<paste token here>
```

***

### Configure with environment variables

***

To configure Azure Artifacts without `bunfig.toml`, you can set the `NPM_CONFIG_REGISTRY` environment variable. The URL should include `:username` and `:_password` as query parameters. Replace `<USERNAME>` and `<PASSWORD>` with the appropriate values.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
NPM_CONFIG_REGISTRY=https://pkgs.dev.azure.com/my-azure-artifacts-user/_packaging/my-azure-artifacts-user/npm/registry/:username=<USERNAME>:_password=<PASSWORD>
```

***

### Don't base64 encode the password

***

In [Azure Artifact's](https://learn.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops\&tabs=windows%2Cclassic) instructions for `.npmrc`, they say to base64 encode the password. Do not do this for `bun install`. Bun will automatically base64 encode the password for you if needed.

**Tip** — If it ends with `==`, it probably is base64 encoded.

***

To decode a base64-encoded password, open your browser console and run:

```js browser icon="computer" theme={"theme":{"light":"github-light","dark":"dracula"}}
atob("<base64-encoded password>");
```

***

Alternatively, use the `base64` command line tool, but doing so means it may be saved in your terminal history which is not recommended:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
echo "base64-encoded-password" | base64 --decode
```

# Install dependencies with Bun in GitHub Actions

Source: https://bun.com/docs/guides/install/cicd

Use the official [`setup-bun`](https://github.com/oven-sh/setup-bun) GitHub Action to install `bun` in your GitHub Actions runner.

```yaml workflow.yml icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
title: my-workflow
jobs:
  my-job:
    title: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2 // [!code ++]

      # run any `bun` or `bunx` command
      - run: bun install // [!code ++]
```

***

To specify a version of Bun to install:

```yaml workflow.yml icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
title: my-workflow
jobs:
  my-job:
    title: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: oven-sh/setup-bun@v2
         with: # [!code ++]
          version: "latest" # or "canary" # [!code ++]
```

***

Refer to the [README.md](https://github.com/oven-sh/setup-bun) for complete documentation of the `setup-bun` GitHub Action.

# Override the default npm registry for bun install

Source: https://bun.com/docs/guides/install/custom-registry

The default registry is `registry.npmjs.org`. This can be globally configured in `bunfig.toml`.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"

# if needed, set a token
registry = { url = "https://registry.npmjs.org", token = "123456" }

# if needed, set a username/password
registry = "https://usertitle:password@registry.npmjs.org"
```

***

Your `bunfig.toml` can reference environment variables. Bun automatically loads environment variables from `.env.local`, `.env.[NODE_ENV]`, and `.env`. See [Docs > Environment variables](/runtime/environment-variables) for more information.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install]
registry = { url = "https://registry.npmjs.org", token = "$npm_token" }
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.
