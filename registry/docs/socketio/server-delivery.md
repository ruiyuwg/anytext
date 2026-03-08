Version: 4.x

# Server delivery

There are two common ways to synchronize the state of the client upon reconnection:

-   either the server sends the whole state
-   or the client keeps track of the last event it has processed and the server sends the missing pieces

Both are totally valid solutions and choosing one will depend on your use case. In this tutorial, we will go with the latter.

First, let's persist the messages of our chat application. Today there are plenty of great options, we will use [SQLite](https://www.sqlite.org/) here.

tip

If you are not familiar with SQLite, there are plenty of tutorials available online, like [this one](https://www.sqlitetutorial.net/).

Let's install the necessary packages:

-   NPM
-   Yarn
-   pnpm
-   Bun

```
npm install sqlite sqlite3
```

```
yarn add sqlite sqlite3
```

```
pnpm add sqlite sqlite3
```

```
bun add sqlite sqlite3
```

We will simply store each message in a SQL table:

-   CommonJS
-   ES modules

index.js

```
const express = require('express');const { createServer } = require('node:http');const { join } = require('node:path');const { Server } = require('socket.io');const sqlite3 = require('sqlite3');const { open } = require('sqlite');async function main() {  // open the database file  const db = await open({    filename: 'chat.db',    driver: sqlite3.Database  });  // create our 'messages' table (you can ignore the 'client_offset' column for now)  await db.exec(`    CREATE TABLE IF NOT EXISTS messages (        id INTEGER PRIMARY KEY AUTOINCREMENT,        client_offset TEXT UNIQUE,        content TEXT    );  `);  const app = express();  const server = createServer(app);  const io = new Server(server, {    connectionStateRecovery: {}  });  app.get('/', (req, res) => {    res.sendFile(join(__dirname, 'index.html'));  });  io.on('connection', (socket) => {    socket.on('chat message', async (msg) => {      let result;      try {        // store the message in the database        result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);      } catch (e) {        // TODO handle the failure        return;      }      // include the offset with the message      io.emit('chat message', msg, result.lastID);    });  });  server.listen(3000, () => {    console.log('server running at http://localhost:3000');  });}main();
```

index.js

```
import express from 'express';import { createServer } from 'node:http';import { fileURLToPath } from 'node:url';import { dirname, join } from 'node:path';import { Server } from 'socket.io';import sqlite3 from 'sqlite3';import { open } from 'sqlite';// open the database fileconst db = await open({  filename: 'chat.db',  driver: sqlite3.Database});// create our 'messages' table (you can ignore the 'client_offset' column for now)await db.exec(`  CREATE TABLE IF NOT EXISTS messages (      id INTEGER PRIMARY KEY AUTOINCREMENT,      client_offset TEXT UNIQUE,      content TEXT  );`);const app = express();const server = createServer(app);const io = new Server(server, {  connectionStateRecovery: {}});const __dirname = dirname(fileURLToPath(import.meta.url));app.get('/', (req, res) => {  res.sendFile(join(__dirname, 'index.html'));});io.on('connection', (socket) => {  socket.on('chat message', async (msg) => {    let result;    try {      // store the message in the database      result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);    } catch (e) {      // TODO handle the failure      return;    }    // include the offset with the message    io.emit('chat message', msg, result.lastID);  });});server.listen(3000, () => {  console.log('server running at http://localhost:3000');});
```

The client will then keep track of the offset:

-   ES6
-   ES5

index.html

```
<script>  const socket = io({    auth: {      serverOffset: 0    }  });  const form = document.getElementById('form');  const input = document.getElementById('input');  const messages = document.getElementById('messages');  form.addEventListener('submit', (e) => {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });  socket.on('chat message', (msg, serverOffset) => {    const item = document.createElement('li');    item.textContent = msg;    messages.appendChild(item);    window.scrollTo(0, document.body.scrollHeight);    socket.auth.serverOffset = serverOffset;  });</script>
```

index.html

```
<script>  var socket = io({    auth: {      serverOffset: 0    }  });  var form = document.getElementById('form');  var input = document.getElementById('input');  var messages = document.getElementById('messages');  form.addEventListener('submit', function(e) {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });  socket.on('chat message', function(msg, serverOffset) {    var item = document.createElement('li');    item.textContent = msg;    messages.appendChild(item);    window.scrollTo(0, document.body.scrollHeight);    socket.auth.serverOffset = serverOffset;  });</script>
```

And finally the server will send the missing messages upon (re)connection:

index.js

```
// [...]io.on('connection', async (socket) => {  socket.on('chat message', async (msg) => {    let result;    try {      result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);    } catch (e) {      // TODO handle the failure      return;    }    io.emit('chat message', msg, result.lastID);  });  if (!socket.recovered) {    // if the connection state recovery was not successful    try {      await db.each('SELECT id, content FROM messages WHERE id > ?',        [socket.handshake.auth.serverOffset || 0],        (_err, row) => {          socket.emit('chat message', row.content, row.id);        }      )    } catch (e) {      // something went wrong    }  }});// [...]
```

Let's see it in action:

As you can see in the video above, it works both after a temporary disconnection and a full page refresh.

tip

The difference with the "Connection state recovery" feature is that a successful recovery might not need to hit your main database (it might fetch the messages from a Redis stream for example).

OK, now let's talk about the client delivery.
