### env

Controls how environment variables are handled during bundling. Internally, this uses `define` to inject environment variables into the bundle, but makes it easier to specify the environment variables to inject.

#### env: "inline"

Injects environment variables into the bundled output by converting `process.env.FOO` references to string literals containing the actual environment variable values.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  env: "inline",
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --env inline
```
````

For the input below:

```js title="input.js" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/javascript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=5148f41bbc784f9828f1363dab67340f" theme={"theme":{"light":"github-light","dark":"dracula"}}
// input.js
console.log(process.env.FOO);
console.log(process.env.BAZ);
```

The generated bundle will contain the following code:

```js title="output.js" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/javascript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=5148f41bbc784f9828f1363dab67340f" theme={"theme":{"light":"github-light","dark":"dracula"}}
// output.js
console.log("bar");
console.log("123");
```

#### env: "PUBLIC\_\*" (prefix)

Inlines environment variables matching the given prefix (the part before the `*` character), replacing `process.env.FOO` with the actual environment variable value. This is useful for selectively inlining environment variables for things like public-facing URLs or client-side tokens, without worrying about injecting private credentials into output bundles.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  
  // Inline all env vars that start with "ACME_PUBLIC_"
  env: "ACME_PUBLIC_*",
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --env ACME_PUBLIC_*
```
````

For example, given the following environment variables:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
FOO=bar BAZ=123 ACME_PUBLIC_URL=https://acme.com
```

And source code:

```tsx index.tsx icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log(process.env.FOO);
console.log(process.env.ACME_PUBLIC_URL);
console.log(process.env.BAZ);
```

The generated bundle will contain the following code:

```js title="output.js" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/javascript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=5148f41bbc784f9828f1363dab67340f" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log(process.env.FOO);
console.log("https://acme.com");
console.log(process.env.BAZ);
```

#### env: "disable"

Disables environment variable injection entirely.
