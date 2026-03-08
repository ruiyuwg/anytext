# Using TypeScript in Sanity Studio

TypeScript is a superset of JavaScript that adds optional static typing to the language. You can learn more about TypeScript in [their getting started guide](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

If you initiate a Sanity Studio with the CLI, then TypeScript will be the default. Sanity Studio uses [Vite](https://vitejs.dev/guide/features.html#typescript) to perform the transpilation of TypeScript files.

> \[!WARNING]
> Gotcha
> If you customize the Studio with your own React components, that is, using [JSX syntax](https://reactjs.org/docs/introducing-jsx.html), you will have to (re)name the file as `.tsx`.

## Inline documentation with TSDoc

The Sanity Studio codebase uses TSDoc for inline documentation. This is still a work in progress. However, you can already inspect if an API is considered internal, beta, or public:

- `@internal`: Not considered as stable for public consumption. If you rely on internal APIs, they might break between minor [semver](https://semver.org/) releases
- `@beta`: APIs that we intend to ship as public-facing, but that we are testing externally and might be subject to change between minor [semver](https://semver.org/) releases. We will make our best effort to document breaking changes for `@beta` APIs in the release notes.
- `@public`: These are public APIs that you can use confidently. Breaking changes will only happen in major [semver](https://semver.org/) releases and will be documented.

## Default `tsconfig.json`

If you initiate a studio project using the Sanity CLI and don't opt out of TypeScript, then it will generate the following `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```
