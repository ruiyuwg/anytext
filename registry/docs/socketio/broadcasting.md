Version: 4.x

# Broadcasting

The next goal is for us to emit the event from the server to the rest of the users.

In order to send an event to everyone, Socket.IO gives us the `io.emit()` method.

```
// this will emit the event to all connected socketsio.emit('hello', 'world'); 
```

If you want to send a message to everyone except for a certain emitting socket, we have the `broadcast` flag for emitting from that socket:

```
io.on('connection', (socket) => {  socket.broadcast.emit('hi');});
```

In this case, for the sake of simplicity we’ll send the message to everyone, including the sender.

```
io.on('connection', (socket) => {  socket.on('chat message', (msg) => {    io.emit('chat message', msg);  });});
```

And on the client side when we capture a `chat message` event we’ll include it in the page.

-   ES6
-   ES5

```
<script src="/socket.io/socket.io.js"></script><script>  const socket = io();  const form = document.getElementById('form');  const input = document.getElementById('input');  const messages = document.getElementById('messages');  form.addEventListener('submit', (e) => {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });  socket.on('chat message', (msg) => {    const item = document.createElement('li');    item.textContent = msg;    messages.appendChild(item);    window.scrollTo(0, document.body.scrollHeight);  });</script>
```

```
<script src="/socket.io/socket.io.js"></script><script>  var socket = io();  var form = document.getElementById('form');  var input = document.getElementById('input');  var messages = document.getElementById('messages');  form.addEventListener('submit', function(e) {    e.preventDefault();    if (input.value) {      socket.emit('chat message', input.value);      input.value = '';    }  });  socket.on('chat message', function(msg) {    var item = document.createElement('li');    item.textContent = msg;    messages.appendChild(item);    window.scrollTo(0, document.body.scrollHeight);  });</script>
```

Let's see it in action:

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step5?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step5?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step5?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step5?file=index.js)
