# Manage dependencies

Once you go beyond the basics of creating your first Function, you'll likely need to add dependencies ([like the @sanity/client](https://www.sanity.io/docs/functions/functions-js-client)). Functions use a dependency management system that tries to match how you'd like to work, while still remaining efficient.

This article explains the different approaches to using dependency packages in your functions.

Prerequisites:

- Complete the [Functions quick start](https://www.sanity.io/docs/functions/function-quickstart), or be comfortable writing and deploying a Sanity Function.
- The latest version of `sanity` CLI (`sanity@latest`) is recommended to interact with Blueprints and Functions as shown in this guide. You can always run the latest CLI commands with `npx sanity@latest`.

## Dependency placement

You have a few options for where to place a dependency, or package, as part of your function code.

### Project-level

Project-level dependencies are positioned alongside the `sanity.blueprint.ts` file and often defined at the root of the project. If you've initialized the blueprint with a TypeScript/JavaScript configuration, you already have a `package.json` at this level.

**Example structure**

```text
marketing_site/
├─ studio/
├─ next-app/
├─ functions/
│  ├─ my-function/
│  │  ├─ index.ts
├─ sanity.blueprint.ts
├─ package.json <-- Install dependencies here, alongside the blueprint configuration file
├─ node_modules/

```

This allows you to manage your function dependencies alongside any project-wide dependencies, like developer dependencies, and share them across functions.

### Function-level

Sometimes it makes sense to keep a function and all of it's dependencies contained in a single directory, separate from the concerns of the greater project.

To do this, navigate to the individual function's directory and initialize a new `package.json` with `npm init` or similar, and then add dependencies directly to the function.

**Example structure**

```text
marketing_site/
├─ studio/
├─ next-app/
├─ functions/
│  ├─ my-function/
│  │  ├─ index.ts
│  │  ├─ package.json <-- Install dependencies here, alongside the function code
│  │  ├─ node_modules/
├─ sanity.blueprint.ts
```

### Mixed dependency environment

You may have instances where some functions use the function-level system, and others use the project-level system.

In this scenario, those using the function-level structure will use their own, co-located dependencies. Other functions will use the project-level dependency system.

Functions **will not** use or mix both sources. If you'd like a function using the function-level system to use a dependency from the project-level, you must also install it as a dependency at the function level.

**Example structure**

```text
marketing_site/
├─ studio/
├─ next-app/
├─ functions/
│  ├─ my-function/
│  │  ├─ index.ts
│  │  ├─ package.json <-- This is used for my-function
│  │  ├─ node_modules/
│  ├─ log-event/
│  │  ├─ index.ts
├─ sanity.blueprint.ts
├─ package.json <-- This is used for log-event
├─ node_modules/
```

## Moving between systems

If you have an existing function that's set up with the function-level system, you can migrate it to project-level in the following steps:

1. Add the function dependencies to the project-level package manifest. Either by using `npm install <package name(s)>` or by adding the packages to the file manually and running `npm install`.
2. Remove the `package.json` file and `node_modules` directory from the function folder.

The process is similar going in the other direction. To move from the project-level system to function-level for an individual function:

1. Navigate to the function's directory and initialize a `package.json` with `npm init` or similar.
2. Install any packages at this level, alongside your function code with `npm i <package name>`.
3. If the dependency is no longer required by other functions, remove the packages from the project-level `package.json` manually or by running `npm uninstall <package name>` in the same directory as your `sanity.blueprints.ts` file.
