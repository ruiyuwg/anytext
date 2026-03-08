Version: 4.x

# Emitting events

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and [binary data](/blog/introducing-socket-io-1-0/#binary) is supported too.

Let’s make it so that when the user types in a message, the server gets it as a `chat message` event. The `script` section in `index.html` should now look as follows:

-   ES6
-   ES5

```
<script src="/socket.io/socket.io.js"></script><script>  const socket = io();  const form = document.getElementById('form');  const input = document.getElementById('input');  form.addEventListener('submit', (e) => {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });</script>
```

```
<script src="/socket.io/socket.io.js"></script><script>  var socket = io();  var form = document.getElementById('form');  var input = document.getElementById('input');  form.addEventListener('submit', function(e) {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });</script>
```

And in `index.js` we print out the `chat message` event:

```
io.on('connection', (socket) => {  socket.on('chat message', (msg) => {    console.log('message: ' + msg);  });});
```

The result should be like the following video:

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step4?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step4?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step4?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step4?file=index.js)
