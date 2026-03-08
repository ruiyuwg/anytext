Version: 4.x

# Serving HTML

So far in `index.js` we’re calling `res.send` and passing it a string of HTML. Our code would look very confusing if we just placed our entire application’s HTML there, so instead we're going to create a `index.html` file and serve that instead.

Let’s refactor our route handler to use `sendFile` instead.

-   CommonJS
-   ES modules

```
const express = require('express');const { createServer } = require('node:http');const { join } = require('node:path');const app = express();const server = createServer(app);app.get('/', (req, res) => {  res.sendFile(join(__dirname, 'index.html'));});server.listen(3000, () => {  console.log('server running at http://localhost:3000');});
```

```
import express from 'express';import { createServer } from 'node:http';import { fileURLToPath } from 'node:url';import { dirname, join } from 'node:path';const app = express();const server = createServer(app);const __dirname = dirname(fileURLToPath(import.meta.url));app.get('/', (req, res) => {  res.sendFile(join(__dirname, 'index.html'));});server.listen(3000, () => {  console.log('server running at http://localhost:3000');});
```

Put the following in your `index.html` file:

```
<!DOCTYPE html><html>  <head>    <meta name="viewport" content="width=device-width,initial-scale=1.0">    <title>Socket.IO chat</title>    <style>      body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }      #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }      #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }      #input:focus { outline: none; }      #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }      #messages { list-style-type: none; margin: 0; padding: 0; }      #messages > li { padding: 0.5rem 1rem; }      #messages > li:nth-child(odd) { background: #efefef; }    </style>  </head>  <body>    <ul id="messages"></ul>    <form id="form" action="">      <input id="input" autocomplete="off" /><button>Send</button>    </form>  </body></html>
```

If you restart the process (by hitting Control+C and running `node index.js` again) and refresh the page it should look like this:

![A browser displaying an input and a 'Send' button](/images/chat-3.png)

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step2?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step2?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step2?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step2?file=index.js)
