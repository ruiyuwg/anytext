## Full-stack executables

New in Bun v1.2.17

Bun's `--compile` flag can create standalone executables that contain both server and client code, making it ideal for full-stack applications. When you import an HTML file in your server code, Bun automatically bundles all frontend assets (JavaScript, CSS, etc.) and embeds them into the executable. When Bun sees the HTML import on the server, it kicks off a frontend build process to bundle JavaScript, CSS, and other assets.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/": index,
    "/api/hello": { GET: () => Response.json({ message: "Hello from API" }) },
  },
});

console.log(`Server running at http://localhost:${server.port}`);
```

```html index.html icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
<!DOCTYPE html>

  
    My App
    
  
  
    Hello World
    
  

```

```ts app.ts icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Hello from the client!");
```

```css styles.css icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
body {
  background-color: #f0f0f0;
}
```

To build this into a single executable:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile ./server.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./server.ts"],
  compile: {
    outfile: "./myapp",
  },
});
```
````

This creates a self-contained binary that includes:

- Your server code
- The Bun runtime
- All frontend assets (HTML, CSS, JavaScript)
- Any npm packages used by your server

The result is a single file that can be deployed anywhere without needing Node.js, Bun, or any dependencies installed. Just run:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
./myapp
```

Bun automatically handles serving the frontend assets with proper MIME types and cache headers. The HTML import is replaced with a manifest object that `Bun.serve` uses to efficiently serve pre-bundled assets.

For more details on building full-stack applications with Bun, see the [full-stack guide](/bundler/fullstack).

***

## Worker

To use workers in a standalone executable, add the worker's entrypoint to the build:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile ./index.ts ./my-worker.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./index.ts", "./my-worker.ts"],
  compile: {
    outfile: "./myapp",
  },
});
```
````

Then, reference the worker in your code:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Hello from Bun!");

// Any of these will work:
new Worker("./my-worker.ts");
new Worker(new URL("./my-worker.ts", import.meta.url));
new Worker(new URL("./my-worker.ts", import.meta.url).href);
```

When you add multiple entrypoints to a standalone executable, they will be bundled separately into the executable.

In the future, we may automatically detect usages of statically-known paths in `new Worker(path)` and then bundle those into the executable, but for now, you'll need to add it to the shell command manually like the above example.

If you use a relative path to a file not included in the standalone executable, it will attempt to load that path from disk relative to the current working directory of the process (and then error if it doesn't exist).

***

## SQLite

You can use `bun:sqlite` imports with `bun build --compile`.

By default, the database is resolved relative to the current working directory of the process.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import db from "./my.db" with { type: "sqlite" };

console.log(db.query("select * from users LIMIT 1").get());
```

That means if the executable is located at `/usr/bin/hello`, the user's terminal is located at `/home/me/Desktop`, it will look for `/home/me/Desktop/my.db`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
cd /home/me/Desktop
./hello
```

***
