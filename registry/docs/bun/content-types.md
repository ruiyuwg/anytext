## Content types

Like the Bun runtime, the bundler supports an array of file types out of the box. The following table breaks down the bundler's set of standard "loaders". Refer to [Bundler > File types](/bundler/loaders) for full documentation.

| Extensions                                            | Details                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.js` `.jsx` `.cjs` `.mjs` `.mts` `.cts` `.ts` `.tsx` | Uses Bun's built-in transpiler to parse the file and transpile TypeScript/JSX syntax to vanilla JavaScript. The bundler executes a set of default transforms including dead code elimination and tree shaking. At the moment Bun does not attempt to down-convert syntax; if you use recently ECMAScript syntax, that will be reflected in the bundled code. |
| `.json`                                               | JSON files are parsed and inlined into the bundle as a JavaScript object.`js<br/>import pkg from "./package.json";<br/>pkg.name; // => "my-package"<br/>`                                                                                                                                                                                        |
| `.jsonc`                                              | JSON with comments. Files are parsed and inlined into the bundle as a JavaScript object.`js<br/>import config from "./config.jsonc";<br/>config.name; // => "my-config"<br/>`                                                                                                                                                                    |
| `.toml`                                               | TOML files are parsed and inlined into the bundle as a JavaScript object.`js<br/>import config from "./bunfig.toml";<br/>config.logLevel; // => "debug"<br/>`                                                                                                                                                                                    |
| `.yaml` `.yml`                                        | YAML files are parsed and inlined into the bundle as a JavaScript object.`js<br/>import config from "./config.yaml";<br/>config.name; // => "my-app"<br/>`                                                                                                                                                                                       |
| `.txt`                                                | The contents of the text file are read and inlined into the bundle as a string.`js<br/>import contents from "./file.txt";<br/>console.log(contents); // => "Hello, world!"<br/>`                                                                                                                                                                 |
| `.html`                                               | HTML files are processed and any referenced assets (scripts, stylesheets, images) are bundled.                                                                                                                                                                                                                                                               |
| `.css`                                                | CSS files are bundled together into a single `.css` file in the output directory.                                                                                                                                                                                                                                                                            |
| `.node` `.wasm`                                       | These files are supported by the Bun runtime, but during bundling they are treated as assets.                                                                                                                                                                                                                                                                |

### Assets

If the bundler encounters an import with an unrecognized extension, it treats the imported file as an external file. The referenced file is copied as-is into `outdir`, and the import is resolved as a path to the file.

```ts Input icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// bundle entrypoint
import logo from "./logo.svg";
console.log(logo);
```

```ts Output icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
// bundled output
var logo = "./logo-a7305bdef.svg";
console.log(logo);
```

The exact behavior of the file loader is also impacted by [`naming`](#naming) and [`publicPath`](#publicpath).

Refer to the [Bundler > Loaders](/bundler/loaders) page for more complete documentation on the file loader.

### Plugins

The behavior described in this table can be overridden or extended with plugins. Refer to the [Bundler > Loaders](/bundler/loaders) page for complete documentation.

## API

### entrypoints

Required

An array of paths corresponding to the entrypoints of our application. One bundle will be generated for each entrypoint.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await Bun.build({
  entrypoints: ["./index.ts"],
});
// => { success: boolean, outputs: BuildArtifact[], logs: BuildMessage[] }
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.ts
```
````
