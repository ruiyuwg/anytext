# Quickstart

Source: https://bun.com/docs/quickstart

Build your first app with Bun

## Overview

Build a minimal HTTP server with `Bun.serve`, run it locally, then evolve it by installing a package.

Prerequisites: Bun installed and available on your `PATH`. See [installation](/installation) for setup.

***

````
Initialize a new project with `bun init`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun init my-app
```

It'll prompt you to pick a template, either `Blank`, `React`, or `Library`. For this guide, we'll pick `Blank`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun init my-app
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
✓ Select a project template: Blank

- .gitignore
- CLAUDE.md
- .cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc -> CLAUDE.md
- index.ts
- tsconfig.json (for editor autocomplete)
- README.md
```

This automatically creates a `my-app` directory with a basic Bun app.



Run the `index.ts` file using `bun run index.ts`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
cd my-app
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Hello via Bun!
```

You should see a console output saying `"Hello via Bun!"`.



Replace the contents of `index.ts` with the following code:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response('Bun!'),
  }
});

console.log(`Listening on ${server.url}`);
```

Run the `index.ts` file again using `bun run index.ts`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Listening on http://localhost:3000
```

Visit [`http://localhost:3000`](http://localhost:3000) to test the server. You should see a simple page that says `"Bun!"`.


  If you used `bun init`, Bun will have automatically installed Bun's TypeScript declarations and configured your `tsconfig.json`. If you're trying out Bun in an existing project, you may see a type error on the `Bun` global.

  To fix this, first install `@types/bun` as a dev dependency.

  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun add -d @types/bun
  ```

  Then add the following to your `compilerOptions` in `tsconfig.json`:

  ```json tsconfig.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
  {
    "compilerOptions": {
      "lib": ["ESNext"],
      "target": "ESNext",
      "module": "Preserve",
      "moduleDetection": "force",
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "verbatimModuleSyntax": true,
      "noEmit": true
    }
  }
  ```




Install the `figlet` package and its type declarations. Figlet is a utility for converting strings into ASCII art.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add figlet
bun add -d @types/figlet # TypeScript users only
```

Update `index.ts` to use `figlet` in `routes`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import figlet from 'figlet'; // [!code ++]

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response('Bun!'),
    "/figlet": () => { // [!code ++]
      const body = figlet.textSync('Bun!'); // [!code ++]
      return new Response(body); // [!code ++]
    } // [!code ++]
  }
});

console.log(`Listening on ${server.url}`);
```

Run the `index.ts` file again using `bun run index.ts`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Listening on http://localhost:3000
```

Visit [`http://localhost:3000/figlet`](http://localhost:3000/figlet) to test the server. You should see a simple page that says `"Bun!"` in ASCII art.

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
____              _
| __ ) _   _ _ __ | |
|  _ \| | | | '_ \| |
| |_) | |_| | | | |_|
|____/ \__,_|_| |_(_)
```



Let's add some HTML. Create a new file called `index.html` and add the following code:

```html index.html icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
<!DOCTYPE html>

  
    
    
    Bun
  
  
    Bun!
  

```

Then, import this file in `index.ts` and serve it from the root `/` route.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import figlet from 'figlet';
import index from './index.html'; // [!code ++]

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": index, // [!code ++]
    "/figlet": () => {
      const body = figlet.textSync('Bun!');
      return new Response(body);
    }
  }
});

console.log(`Listening on ${server.url}`);
```

Run the `index.ts` file again using `bun run index.ts`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Listening on http://localhost:3000
```

Visit [`http://localhost:3000`](http://localhost:3000) to test the server. You should see the static HTML page.
````

🎉 Congratulations! You've built a simple HTTP server with Bun and installed a package.

***

## Run a script

Bun can also execute `"scripts"` from your `package.json`. Add the following script:

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "quickstart",
  "module": "index.ts",
  "type": "module",
  "private": true,
  "scripts": { // [!code ++]
    "start": "bun run index.ts" // [!code ++]
  }, // [!code ++]
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}
```

Then run it with `bun run start`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run start
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Listening on http://localhost:3000
```

⚡️ **Performance** — `bun run` is roughly 28x faster than `npm run` (6ms vs 170ms of overhead).
