# Project Structure

The common way of customizing a CMS is to just replace parts of the code with your own. As most people who have modified a WordPress installation can attest, this makes upgrades difficult and quickly leads to tangled code.

Sanity Studio’s file structure is a slim single-page React application where logic and code are contained in [npm modules](https://docs.npmjs.com/about-packages-and-modules). The Studio comes with a framework that lets you customize and add your own components to different parts of it.

This makes it possible to confidently upgrade to new versions of Sanity Studio, and also to install and ship plugins in self-contained packages.

## Studio File Layout

The file structure of Studio projects can look different depending on how you installed it. The example below is from the blog template example that you can initiate from the CLI:

```text
.
├── README.md
├── dist
│   ├── index.html
│   └── static
│       ...
│       └── ...
├── package-lock.json
├── package.json
├── sanity.cli.ts
├── sanity.config.ts
├── schemas
│   ├── author.ts
│   ├── blockContent.ts
│   ├── category.ts
│   ├── index.ts
│   └── post.ts
├── static
└── tsconfig.json
```

Sanity Studio contains the following files and folders out of the box:

- `package.json`: Contains the necessary dependencies for the studio project. There will also be a dependency lock file that might look different depending on which package manager you use.
- `sanity.cli.ts`: The configuration file for the Sanity CLI. Contains information on what project ID and dataset the CLI should connect to for project-specific commands.
- `sanity.config.ts`: The configuration file for the Studio contains information about what project(s) that the Studio should connect to, as well as schemas, plugins, and other customizations.
- `schemas`: It's a convention to organize schema files in a dedicated folder. It's not required to have a schemas folder, as schemas are imported as JavaScript into the Studio config object.
- `static`: If you want to bundle static files in the studio, you can place these files in the static folder. The built-in developer tooling using Vite will pick these up automatically. If you use a different bundler, then you might need to configure this to bundle files from this folder as well.
- `tsconfig.json` (only if TypeScript is used) Contains the settings for [the transpilation of TypeScript into JavaScript](https://vitejs.dev/guide/features.html#typescript).
- `dist`: This folder is auto-generated and contains the production build of Sanity Studio as a result of running `npm run build.`
