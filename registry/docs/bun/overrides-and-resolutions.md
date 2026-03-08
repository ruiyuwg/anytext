# Overrides and resolutions

Source: https://bun.com/docs/pm/overrides

Control metadependency versions with npm overrides and Yarn resolutions

Bun supports npm's `"overrides"` and Yarn's `"resolutions"` in `package.json`. These are mechanisms for specifying a version range for *metadependencies*—the dependencies of your dependencies.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "dependencies": {
    "foo": "^2.0.0"
  },
  "overrides": { // [!code ++]
    "bar": "~4.4.0" // [!code ++]
  } // [!code ++]
}
```

By default, Bun will install the latest version of all dependencies and metadependencies, according to the ranges specified in each package's `package.json`. Let's say you have a project with one dependency, `foo`, which in turn has a dependency on `bar`. This means `bar` is a *metadependency* of our project.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "dependencies": {
    "foo": "^2.0.0"
  }
}
```

When you run `bun install`, Bun will install the latest versions of each package.

```txt tree layout of node_modules icon="list-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
node_modules
├── foo@1.2.3
└── bar@4.5.6
```

But what if a security vulnerability was introduced in `bar@4.5.6`? We may want a way to pin `bar` to an older version that doesn't have the vulnerability. This is where `"overrides"`/`"resolutions"` come in.

***

## `"overrides"`

Add `bar` to the `"overrides"` field in `package.json`. Bun will defer to the specified version range when determining which version of `bar` to install, whether it's a dependency or a metadependency.

Bun currently only supports top-level `"overrides"`. [Nested
overrides](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides) are not supported.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "dependencies": {
    "foo": "^2.0.0"
  },
  "overrides": { // [!code ++]
    "bar": "~4.4.0" // [!code ++]
  } // [!code ++]
}
```

## `"resolutions"`

The syntax is similar for `"resolutions"`, which is Yarn's alternative to `"overrides"`. Bun supports this feature to make migration from Yarn easier.

As with `"overrides"`, *nested resolutions* are not currently supported.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "dependencies": {
    "foo": "^2.0.0"
  },
  "resolutions": { // [!code ++]
    "bar": "~4.4.0" // [!code ++]
  } // [!code ++]
}
```

# Scopes and registries

Source: https://bun.com/docs/pm/scopes-registries

Configure private registries and scoped packages

The default registry is `registry.npmjs.org`. This can be globally configured in `bunfig.toml`:

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"
# set a token
registry = { url = "https://registry.npmjs.org", token = "123456" }
# set a username/password
registry = "https://username:password@registry.npmjs.org"
```

To configure a private registry scoped to a particular organization:

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install.scopes]
# registry as string
"@myorg1" = "https://username:password@registry.myorg.com/"

# registry with username/password
# you can reference environment variables
"@myorg2" = { username = "myusername", password = "$NPM_PASS", url = "https://registry.myorg.com/" }

# registry with token
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

### `.npmrc`

Bun also reads `.npmrc` files, [learn more](/pm/npmrc).
