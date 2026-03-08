# Missing or duplicate context error

The following is an explainer to why you may be seeing duplicate or missing context errors within the Sanity Studio.

## Why is this error occuring?

This error occurs when there are multiple versions of the `sanity` package installed locally. This causes issues because of how React context works. Having multiple versions of a React library that exports a React context can cause issues due to the singleton nature of React contexts.

React contexts are designed to ensure that there is a single provider for a given context that supplies data to multiple consumers within the component tree. When different versions of the same library are used, each version creates its own isolated context instance. This results in consumers and providers from different versions being incompatible with each other, leading to inconsistent data sharing and state management issues across the application.

## Why are multiple version of `sanity` being installed?

There are a few reasons why multiple versions of the `sanity` package may be installed in a project:

- **Transitive peer dependencies**: If your project depends on other libraries that also depend on `sanity`, (such as sanity plugins) but they require different versions, package managers may install multiple versions to satisfy all the dependencies. This includes `peerDependencies`. If you're using pnpm, [pnpm may even install the same exact version of sanity twice](https://pnpm.io/how-peers-are-resolved) to satisfy different sets of peer dependencies.
- **Incorrect version specification**: If you specify a version of `sanity` in your project's `package.json` file that doesn't match the version used by other dependencies, it could lead to multiple versions being installed.
- **Lock file state**: If you have updated the `sanity` dependency in your `package.json` file but haven't regenerated the lock file (`pnpm-lock.yaml`, `package-lock.json`, or `yarn.lock`), the old version might still be installed based on the lock file. There are certain scenarios where the state of your lockfile may result in more than one versions of sanity being installed and simply deleting it and reinstalling may fix the issue.

## What can be done to fix this issue?

There are 2 possible solutions for to this.

### Solution 1: Clean up dependencies

The first solution to resolve missing context errors is to clean up your project's dependencies. There are lots of scenarios where transitive dependencies (aka the dependencies of your dependencies) can cause a mismatched version.

Because `sanity` is React-based, you'll want to make sure that versions of `sanity`, `react`, `react-dom`, and similar react libraries are all compatible and consistent. In particular, this means that you should see just one version of `sanity` installed and the same version of `react` and `react-dom`.

At the time of writing, this will mean a sanity `^3` version (e.g. `3.50.0`) and a `react` `^18` version, and a `react-dom^18` version (e.g. `18.3.1`).

**Some quick rules of thumb:**

1. Ensure you have no deprecated sanity packages installed (e.g. `@sanity/base`, `@sanity/react-hooks`, `@sanity/desk-tool`) and ensure the rest of any `@sanity/` package or plugin is at the latest version. The latest version of any package can be determined by running `npm show <package-name> version`.
2. Ensure you don't see any warnings regarding unmet peer dependencies. Everything should be on the same version of react and react-dom.
3. Ensure you aren't using any outdated react libraries that don't support at least React 18. sanity has a peer dependency on at least react `^18`.

In my experience, there is no better way to inspect your dependencies than grepping your lockfile ( `pnpm-lock.yaml`, `package-lock.json`, or `yarn.lock`).

#### pnpm-lock.yaml

pnpm handles peer dependencies somewhat differently than npm. It's not as strict as npm and it tries its best to satisfy all peer dependencies on its own.

Run `pnpm install --resolution-only` to see any potential issues with peer dependencies. Fixing these issues may result in de-duping sanity.

> \[!TIP]
> Protip
> You can also try running [pnpm dedupe](https://pnpm.io/cli/dedupe)!

If you've seen warnings with unmet peer dependencies, this may result in more than one `sanity` being installed at once.

When grepping your `pnpm-lock.yaml`, search for `sanity@3`. For every set of peer dependencies, pnpm will include `sanity` and other packages in that set of peer dependencies in a single line.

Notice anything odd? There's an incompatible version of `react-dom` (`17.0.2`). The fix here is to search the lockfile for dependencies that are causing `react-dom` 17 to be installed and used.

You heard that right, the presence of `react-dom` 17 can even result in the *same* version of `sanity` to be installed more than once.

After searching for `react-dom:`, the culprit was found: An outdated dependency to `@reach/auto-id` which did not allow a peer dependency of `react-dom` 18.

Further following this trail lead to finding an old version of `@sanity/desk-tool` was installed.

This led to the discovery of other legacy packages being installed. After removing `@sanity/desk-tool` and `@sanity/react-hooks` from all package.jsons the context issue was resolved.

#### package-lock.json

npm's package-lock.json `lockfileVersion` 3 file is relatively straightforward lockfile.

Top-level is the `lockfileVersion` followed by a `packages` key that contains a flat list of all the dependencies installed in project. Note for monorepos that this lockfile should contain all dependencies for the root package and all of the subpackages as well.

In this lockfile, search for `node_modules/sanity"`, `react`, and `react-dom`.

Ideally you'd see just one of each. If there are more than one and one of those versions mismatch, look for a package that would depend on the mismatched version.

#### yarn.lock

The yarn lock file is similar npm's native package-lock.json expect it's in yaml. See [this article](https://www.arahansen.com/the-ultimate-guide-to-yarn-lock-lockfiles/) for more information on yarn lock files.

### Solution 2: Override the `sanity` dependency

If cleaning up dependencies manually doesn't resolve the issue, you can force your package manager to use a specific version of `sanity` across all dependencies. You may want to do this anyway in order to prevent this issue from occuring in the future.

Doing this ensures that only one version is installed, even if different dependencies specify conflicting versions.

#### npm overrides

NPM supports an overrides key in the top-level of package.json.Wherever you see the `sanity` dependency in your package.json, add the following to your package.json.

```json
{
  "name": "your-studio",
  "version": "1.0.0",
  "description": "...",
  "dependencies": {
    "sanity": "^3.50.0"
  },
  "overrides": { "sanity": "$sanity" }
}
```

The `$sanity` value makes it reference the version listed above in your `package.json`.

If working in a monorepo, we recommend installing `sanity` at the root workspace.

#### pnpm overrides

pnpm has the same thing as NPM overrides but under a `pnpm` key.

```json
{
  "name": "your-studio",
  "version": "1.0.0",
  "description": "...",
  "dependencies": {
    "sanity": "^3.50.0"
  },
  "pnpm": {
    "overrides": { "sanity": "$sanity" }
  }
}
```

#### Yarn resolutions

Yarn allows you to force a particular dependency through `resolutions`.

```json
{
  "name": "your-studio",
  "version": "1.0.0",
  "description": "...",
  "dependencies": {
    "sanity": "^3.50.0"
  },
  "resolutions": {
    "sanity": "^3.50.0"
  }
}
```

## Appendix: What's a Lockfile?

A lockfile is a file that records the exact versions of all packages installed in a project, including transitive dependencies. It serves as a snapshot of the project's dependency tree at a given point in time.

Lockfiles are generated automatically by package managers like pnpm, npm, and yarn when you run the install command. They ensure reproducible builds by locking the versions of all dependencies, so that everyone working on the project uses the same versions.
