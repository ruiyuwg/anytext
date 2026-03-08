# Contributing to Mantine

First of all, thank you for showing interest in contributing to Mantine! All your contributions are extremely valuable to the project!

## Ways to contribute

- **Improve documentation:** Fix incomplete or missing docs, bad wording, examples or explanations.
- **Give feedback:** We are constantly working on making Mantine better. Please share how you use Mantine, what features are missing and what is done well via [GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/wbH82zuWMN).
- **Share Mantine:** Share links to the Mantine docs with everyone who might be interested! [Share Mantine on X here](https://x.com/intent/tweet?text=Mantine%20%E2%80%93%20new%20React%20library%20with%20100%2B%20components%20and%20hooks.%20It%20has%20native%20dark%20theme%20support%20and%20focuses%20on%20accessibility%20and%20usability.%0A%0Ahttp%3A%2F%2Fmantine.dev%0A%0A%23reactjs%20).
- **Contribute to the codebase:** Propose new features via [GitHub Issues](https://github.com/mantinedev/mantine/issues/new), or find an [existing issue](https://github.com/mantinedev/mantine/labels/help%20wanted) that you are interested in and work on it!
- **Give us a code review:** Help us identify problems with the [source code](https://github.com/mantinedev/mantine/tree/master/packages) or make Mantine more performant.

## Contributing workflow

- Decide on what you want to contribute.
- If you would like to implement a new feature, discuss it with the maintainer ([GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/wbH82zuWMN)) before jumping into coding.
- After finalizing issue details, you can begin working on the code.
- Run tests with `npm test` and submit a PR once all tests have passed.
- Get a code review and fix all issues noticed by the maintainer.
- If you cannot finish your task or if you change your mind – that's totally fine! Just let us know in the GitHub issue that you created during the first step of this process. The Mantine community is friendly – we won't judge or ask any questions if you decide to cancel your submission.
- Your PR is merged. You are awesome ❤️!

## Get started with Mantine locally

- Install the [editorconfig](https://editorconfig.org/) extension for your editor.
- Fork the [repository](https://github.com/mantinedev/mantine), then clone or download your fork.
- Run `nvm use` to switch to the Node version specified in `.nvmrc` file ([install nvm](https://github.com/nvm-sh/nvm)).
- Install dependencies with yarn – `yarn`
- Setup project – `npm run setup`
- Build local version of all packages – `npm run build all`
- To start storybook – `npm run storybook`
- To start docs – `npm run docs`
- To rebuild props descriptions – `npm run docs:docgen`

## npm scripts

All npm scripts are located at [main package.json](https://github.com/mantinedev/mantine/blob/master/package.json).
Individual packages do not have dedicated scripts.

### Development scripts

- `storybook` – Starts the storybook development server. To start storybook for a specific component, use the `npm run storybook Tooltip` command.
- `docs` – Starts the docs development server.

### Testing scripts

- `syncpack` – runs [syncpack](https://www.npmjs.com/package/syncpack)
- `typecheck` – runs TypeScript typechecking with `tsc --noEmit` on all packages and docs
- `lint` – runs ESLint on src folder
- `jest` – runs tests with jest
- `test` – runs all above testing scripts

### Docs scripts

- `docs:docgen` – generates components types information with [docgen script](https://github.com/mantinedev/mantine/blob/master/scripts/docgen/index.ts)
- `docs:build` – builds docs for production
- `docs:deploy` – builds and deploys docs to the GitHub Pages
- `docs:deploy:alpha` – builds and deploys docs to Cloudflare Pages `alpha-mantine-dev` project
- `docs:deploy:v7` – builds and deploys docs to Cloudflare Pages `v7-mantine-docs` project
- `docs:deploy:v8` – builds and deploys docs to Cloudflare Pages `v8-mantine-docs` project

### EslintConfig

# Mantine ESLint config

[eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
is a set of ESLint rules and configurations used in Mantine projects.
You can use it in your project to ensure that your code follows the same
style and conventions as Mantine.

## Installation

Mantine ESLint config requires ESLint 9 or higher:

```bash
yarn add @eslint/js eslint eslint-plugin-jsx-a11y eslint-plugin-react typescript-eslint eslint-config-mantine
```

```bash
npm install @eslint/js eslint eslint-plugin-jsx-a11y eslint-plugin-react typescript-eslint eslint-config-mantine
```

## Usage

Add the following configuration to your `eslint.config.mjs`:

```tsx
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
);
```

## Rules and source code

Mantine ESLint config extends recommended [ESLint](https://eslint.org/docs/rules/), [typescript-eslint](https://typescript-eslint.io/)
and [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) rules and adds custom rules and configurations.
You can find the full list of rules and source code in the [eslint-config-mantine repository](https://github.com/mantinedev/eslint-config-mantine/blob/master/eslint.config.js).

### GettingStarted
