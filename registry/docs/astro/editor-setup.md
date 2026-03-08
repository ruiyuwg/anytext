# Editor setup

> Set up your code editor to build with Astro.

Customize your code editor to improve the Astro developer experience and unlock new features.

## VS Code

[Section titled “VS Code”](#vs-code)

[VS Code](https://code.visualstudio.com/) is a popular code editor for web developers, built by Microsoft. The VS Code engine also powers popular in-browser code editors like [GitHub Codespaces](https://github.com/features/codespaces).

Astro works with any code editor. However, VS Code is our recommended editor for Astro projects. We maintain an official [Astro VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) that unlocks several key features and developer experience improvements for Astro projects.

- Syntax highlighting for `.astro` files.
- TypeScript type information for `.astro` files.
- [VS Code Intellisense](https://code.visualstudio.com/docs/editor/intellisense) for code completion, hints and more.

To get started, install the [Astro VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) today.

See how to [set up TypeScript](/en/guides/typescript/) in your Astro project.

## Zed

[Section titled “Zed”](#zed)

[Zed](https://zed.dev/) is a high-performance, multiplayer code editor that is optimized for speed and large projects. Their [Astro extension](https://zed.dev/extensions/astro) includes features like syntax highlighting for `.astro` files, code completion, formatting, diagnostics, and go-to-definition.

## JetBrains IDEs

[Section titled “JetBrains IDEs”](#jetbrains-ides)

[Webstorm](https://www.jetbrains.com/webstorm/) is a JavaScript and TypeScript IDE that added support for the Astro Language Server in version 2024.2. This update brings features like syntax highlighting, code completion, and formatting.

Install the official plugin through [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/20959-astro) or by searching for “Astro” in the IDE’s Plugins tab. You can toggle the language server in `Settings | Languages & Frameworks | TypeScript | Astro`.

For more information on Astro support in Webstorm, check out [the official Webstorm Astro Documentation](https://www.jetbrains.com/help/webstorm/astro.html).

## Other Code Editors

[Section titled “Other Code Editors”](#other-code-editors)

Our amazing community maintains several extensions for other popular editors, including:

- [VS Code Extension on Open VSX](https://open-vsx.org/extension/astro-build/astro-vscode) Official - The official Astro VS Code Extension, available on the Open VSX registry for editors like [Cursor](https://cursor.com) or [VSCodium](https://vscodium.com/).
- [Vim Plugin](https://github.com/wuelnerdotexe/vim-astro) Community - Provides syntax highlighting, indentation, and code folding support for Astro inside of Vim or Neovim
- Neovim [LSP](https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md#astro) and [TreeSitter](https://github.com/virchau13/tree-sitter-astro) Plugins Community - Provides syntax highlighting, treesitter parsing, and code completion for Astro inside of Neovim
- Emacs - See instructions for [Configuring Emacs and Eglot](https://medium.com/@jrmjrm/configuring-emacs-and-eglot-to-work-with-astro-language-server-9408eb709ab0) Community to work with Astro
- [Astro syntax highlighting for Sublime Text](https://packagecontrol.io/packages/Astro) Community - The Astro package for Sublime Text, available on the Sublime Text package manager.
- [Nova Extension](https://extensions.panic.com/extensions/sciencefidelity/sciencefidelity.astro/) Community - Provides syntax highlighting and code completion for Astro inside of Nova

## In-Browser Editors

[Section titled “In-Browser Editors”](#in-browser-editors)

In addition to local editors, Astro also runs well on in-browser hosted editors, including:

- [StackBlitz](https://stackblitz.com/) and [CodeSandbox](https://codesandbox.io/) - online editors that run in your browser, with built-in syntax highlighting support for `.astro` files. No installation or configuration required!
- [GitHub.dev](https://github.dev/) - allows you to install the Astro VS Code extension as a [web extension](https://code.visualstudio.com/api/extension-guides/web-extensions), which gives you access to only some of the full extension features. Currently, only syntax highlighting is supported.
- [Firebase Studio](https://firebase.studio/) - a full dev environment in the cloud that can install the official Astro VS Code Extension from Open VSX.

## Other tools

[Section titled “Other tools”](#other-tools)

### ESLint

[Section titled “ESLint”](#eslint)

[ESLint](https://eslint.org/) is a popular linter for JavaScript and JSX. For Astro support, [a community maintained plugin](https://github.com/ota-meshi/eslint-plugin-astro) can be installed.

See [the project’s User Guide](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/) for more information on how to install and set up ESLint for your project.

### Stylelint

[Section titled “Stylelint”](#stylelint)

[Stylelint](https://stylelint.io/) is a popular linter for CSS. [A community maintained Stylelint configuration](https://github.com/ota-meshi/stylelint-config-html) provides Astro support.

Installation instructions, editor integration, and additional information can be found in the project’s README.

### Biome

[Section titled “Biome”](#biome)

[Biome](https://biomejs.dev/) is an all-in-one linter and formatter for the web. [Biome currently has experimental support for `.astro` files](https://biomejs.dev/internals/language-support/#html-super-languages-support), and can be used to lint and format the frontmatter in `.astro` files.

### Prettier

[Section titled “Prettier”](#prettier)

[Prettier](https://prettier.io/) is a popular formatter for JavaScript, HTML, CSS, and more. If you’re using the [Astro VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), code formatting with Prettier is included.

To add support for formatting `.astro` files outside of the editor (e.g. CLI) or inside editors that don’t support our editor tooling, install [the official Astro Prettier plugin](https://github.com/withastro/prettier-plugin-astro).

1. Install `prettier` and `prettier-plugin-astro`.

   - npm

     ```shell
     npm install --save-dev --save-exact prettier prettier-plugin-astro
     ```

   - pnpm

     ```shell
     pnpm add --save-dev --save-exact prettier prettier-plugin-astro
     ```

   - Yarn

     ```shell
     yarn add --dev --exact prettier prettier-plugin-astro
     ```

2. Create a `.prettierrc` configuration file (or `.prettierrc.json`, `.prettierrc.mjs`, or [other supported formats](https://prettier.io/docs/configuration)) in the root of your project and add `prettier-plugin-astro` to it.

   In this file, also manually specify the parser for Astro files.

   .prettierrc

   ```json
   {
     "plugins": ["prettier-plugin-astro"],
     "overrides": [
       {
         "files": "*.astro",
         "options": {
           "parser": "astro"
         }
       }
     ]
   }
   ```

3. Optionally, install other Prettier plugins for your project, and add them to the configuration file. These additional plugins may need to be listed in a specific order. For example, if you use Tailwind, `prettier-plugin-tailwindcss` must be [the last Prettier plugin in the plugins array](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins).

   .prettierrc

   ```json
   {
     "plugins": [
       "prettier-plugin-astro",
       "prettier-plugin-tailwindcss" // needs to be last
     ],
     "overrides": [
       {
         "files": "*.astro",
         "options": {
           "parser": "astro"
         }
       }
     ]
   }
   ```

4. Run the following command in your terminal to format your files.

   - npm

     ```shell
     npx prettier . --write
     ```

   - pnpm

     ```shell
     pnpm exec prettier . --write
     ```

   - Yarn

     ```shell
     yarn exec prettier . --write
     ```

See the [Prettier plugin’s README](https://github.com/withastro/prettier-plugin-astro/blob/main/README.md) for more information about its supported options, how to set up Prettier inside VS Code, and more.

### dprint

[Section titled “dprint”](#dprint)

[dprint](https://dprint.dev/) is a highly-configurable code formatter that supports many languages, including JavaScript, TypeScript, CSS, and more. Support for `.astro` files can be added using the [markup\_fmt plugin](https://github.com/g-plane/markup_fmt).

# Astro Docs

> Guides, resources, and API references to help you build with Astro.

What will you build with Astro?

Explore [Astro starter themes](https://astro.build/themes/) for blogs, portfolios, docs, landing pages, SaaS, marketing, ecommerce sites, and more!

Take a guided tour

Complete our introductory [Build a Blog Tutorial](/en/tutorial/0-introduction/) to learn the basics and create your first Astro site.

Start a new project

```sh
# create a new project with npm
npm create astro@latest
```

Our [installation guide](/en/install-and-setup/) has step-by-step instructions for installing Astro using our CLI wizard, creating a new project from an existing Astro GitHub repository, and for installing Astro manually.

Learn

- [Astro’s main features](/en/concepts/why-astro/)
- [Islands architecture](/en/concepts/islands/)
- [Astro components](/en/basics/astro-components/)
- [The Astro template syntax](/en/reference/astro-syntax/)

Extend

- [Add integrations like React and Partytown](/en/guides/integrations-guide/)
- [Create type safe content collections](/en/guides/content-collections/)
- [Enhance navigation with view transitions](/en/guides/view-transitions/)
- [Connect a headless CMS to your project](/en/guides/cms/)

## Have a question or want to get involved?

![](/_astro/houston_love.BttrNCcZ_Ok6Ar.webp) [Join our Discord](https://astro.build/chat)
