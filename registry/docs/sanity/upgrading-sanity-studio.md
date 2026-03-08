# Upgrading Sanity Studio

Sanity Studio is distributed as [a npm package](https://www.npmjs.com/package/sanity), which means that upgrades are done as with any other dependency in `package.json`.

The simplest way to upgrade the core package for Sanity Studio is:

```sh
  npm install sanity@latest

  ## alternative package managers
  yarn upgrade sanity@latest
  pnpm install sanity@latest
```

Make sure that your lock file (for example, `package-lock.json`) has been updated as well.

## Upgrading plugins and other dependencies for Sanity Studio

As with the core `sanity` dependency, plugins, and other dependencies are also upgraded by installing newer versions. You can also look into tooling like [npm-upgrade](https://www.npmjs.com/package/npm-upgrade) and [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) that give you interactive CLI workflows for upgrading your dependencies. Code editors like VS Code also have [plugins with UI affordances for managing and updating dependencies](https://marketplace.visualstudio.com/items?itemName=idered.npm).

## Deploying upgrades

After you have upgraded your Studio project's dependencies, you can deploy the new version depending on your deployment strategy:

- Run the `sanity deploy` command in your command line.
- Or, check the changes into git and push/merge to the branch that deploys the Studio to production.

We advise you to always check and track your studio code into git and push it to a remote git repository. That way, you won't accidentally lose your work.

[Learn more about hosting and deployment](https://www.sanity.io/docs/studio/deployment)

## Automatic studio upgrades

### Using the built-in `autoUpdates` configuration property

If you deploy your studio using the Sanity build tools you can set up your studio configuration to allow automatically updating to the latest major studio version.

[Read more about auto-updating studios](https://www.sanity.io/docs/studio/latest-version-of-sanity)

### Using Renovatebot

If you deploy Sanity Studio from GitHub (or other compatible platforms), then you can automate upgrades by setting up [Renovatebot](https://github.com/renovatebot/renovate). We maintain the preset configuration for Sanity projects that you can reuse.

Go to [the Sanity config presets on GitHub and follow the instructions](https://github.com/sanity-io/renovate-config?tab=readme-ov-file#usage) to set it up.

## Stay on top of what's new in the changelog

We publish updates to Sanity Studio up to every week. For each release of the Studio, we'll also post [release notes on GitHub](https://github.com/sanity-io/sanity/releases) and in [our changelog](https://www.sanity.io/changelog) (that also covers other packages and APIs).

Changelog entries on sanity.io will also mark any documentation article that was affected by the upgrade. You will find related changelog entries by expanding the changelog menu above the documentation article.

You will find migration instructions in the changelog entry on the rare occasions where there have been breaking changes.
