# Publishing plugins

## Publish a package

After [developing and testing](https://www.sanity.io/docs/studio/developing-plugins) a plugin, it is time to publish it to npm.

If you use `@sanity/plugin-kit` for your package, the `prepublishOnly` script will ensure that the package is validated and builds according to plugin-kit expectations. These checks are in place to prevent an array of common errors from slipping through when publishing.

### The manual way

If you are comfortable with publishing from your local development environment, in your package directory run:

```sh
npm run publish
```

This will build and publish your package to npm. It will ask for a one-time code if you have 2-factor authentication enabled on your npm account (you should).

When you manually publish like this, you are responsible for bumping the `version` field in `package.json` manually between releases. You also have to manually tag and create a release on GitHub if you want that sort of thing.

> \[!WARNING]
> Gotcha
> Scoped packages (package name starts with `@` ie: `@orgOrNpmUser/package`) are private by default. This implies:
>
> - Only users with access to the organization (or user) can download the package.
> - You have to be a paid npm user to be allowed to publish.
>   To make your package public (which will circumvent the above limitations), add the following to your package.json:
>   `"publishConfig": { "access": "public" }`

### The opinionated semantic-release way

> \[!NOTE]
> Opinionated
> This section uses a [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit) preset template to do most of the work. It puts certain guardrails on the development process to lower the chance of a faulty publish event. Feel free to make changes to the setup, look to it for inspiration or completely disregard it.

If you want to do automated releases using GitHub Actions, `@sanity/plugin-kit` has this covered via the injectable `semver-workflow` preset.

Consider using this preset if you want the following:

- [husky](https://github.com/typicode/husky) for pre-commit hooks to ensure that:- all commits follow [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) format

- all files in a commit pass eslint

- [semantic-release](https://semantic-release.gitbook.io/semantic-release/) automation for npm publish

- [GitHub workflow](https://docs.github.com/en/actions/using-workflows) (Action) that does continuous integration and has publish-on-demand support

That said, all of these can be opted-out of by simply reverting the changes you don’t care for.

Before continuing, ensure that your package has no local changes, so it is easy to check what changes are applied to your code.

In your plugin directory run:

```sh
npx @sanity/plugin-kit inject --preset-only --preset semver-workflow && npm i
```

This command will configure the plugin package with files and dependencies that accommodate an automated plugin workflow on GitHub.

Keep in mind that this setup is tailored to the needs of the Ecosystem team at Sanity. Feel free to modify any and all files injected by the preset, or use it as a basis for creating your own workflow.

For more on this, refer to the [semver-workflow preset](https://github.com/sanity-io/plugin-kit/blob/main/docs/semver-workflow.md) docs.
