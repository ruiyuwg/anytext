# Upgrade Bun to the latest version

Source: https://bun.com/docs/guides/util/upgrade

Bun can upgrade itself using the built-in `bun upgrade` command. This is the fastest way to get the latest features and bug fixes.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade
```

This downloads and installs the latest stable version of Bun, replacing the currently installed version.

To see the current version of Bun, run `bun --version`.

***

## Verify the upgrade

After upgrading, verify the new version:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --version
# Output: 1.x.y

# See the exact commit of the Bun binary
bun --revision
# Output: 1.x.y+abc123def
```

***

## Upgrade to canary builds

Canary builds are automatically released on every commit to the `main` branch. These are untested but useful for trying new features or verifying bug fixes before they're released.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade --canary
```

Canary builds are not recommended for production use. They may contain bugs or breaking changes.

***

## Switch back to stable

If you're on a canary build and want to return to the latest stable release:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade --stable
```

***

## Install a specific version

To install a specific version of Bun, use the install script with a version tag:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
curl -fsSL https://bun.sh/install | bash -s "bun-v1.3.3"
```



```powershell PowerShell icon="windows" theme={"theme":{"light":"github-light","dark":"dracula"}}
iex "& {$(irm https://bun.sh/install.ps1)} -Version 1.3.3"
```
````

***

## Package manager users

If you installed Bun via a package manager, use that package manager to upgrade instead of `bun upgrade` to avoid conflicts.

**Homebrew users**
To avoid conflicts with Homebrew, use `brew upgrade bun` instead.

**Scoop users**
To avoid conflicts with Scoop, use `scoop update bun` instead.

***

## See also

- [Installation](/installation) — Install Bun for the first time
- [Update packages](/pm/cli/update) — Update dependencies to latest versions

# Get the current Bun version

Source: https://bun.com/docs/guides/util/version

Get the current version of Bun in a semver format.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.version; // => "1.3.3"
```

***

Get the exact `git` commit of [`oven-sh/bun`](https://github.com/oven-sh/bun) that was compiled to produce this Bun binary.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.revision; // => "49231b2cb9aa48497ab966fc0bb6b742dacc4994"
```

***

See [Docs > API > Utils](/runtime/utils) for more useful utilities.

# Get the path to an executable bin file

Source: https://bun.com/docs/guides/util/which-path-to-executable-bin

`Bun.which` is a utility function to find the absolute path of an executable file. It is similar to the `which` command in Unix-like systems.

```ts foo.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.which("sh"); // => "/bin/sh"
Bun.which("notfound"); // => null
Bun.which("bun"); // => "/home/user/.bun/bin/bun"
```

***

See [Docs > API > Utils](/runtime/utils#bun-which) for complete documentation.

# Enable compression for WebSocket messages

Source: https://bun.com/docs/guides/websocket/compression

Per-message compression can be enabled with the `perMessageDeflate` parameter. When set, all messages will be compressed using the [permessage-deflate](https://tools.ietf.org/html/rfc7692) WebSocket extension.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  // ...
  websocket: {
    // enable compression
    perMessageDeflate: true,
  },
});
```

***

To enable compression for individual messages, pass `true` as the second parameter to `ws.send()`.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  // ...
  websocket: {
    async message(ws, message) {
      // send a compressed message
      ws.send(message, true);
    },
  },
});
```
