Version: 4.x

# Connection state recovery

First, let's handle disconnections by pretending that there was no disconnection: this feature is called "Connection state recovery".

This feature will **temporarily** store all the events that are sent by the server and will try to restore the state of a client when it reconnects:

-   restore its rooms
-   send any missed events

It must be enabled on the server side:

index.js

```
const io = new Server(server, {  connectionStateRecovery: {}});
```

Let's see it in action:

As you can see in the video above, the "realtime" message is eventually delivered when the connection is reestablished.

note

The "Disconnect" button was added for demonstration purposes.

Code

-   ES6
-   ES5

```
<form id="form" action="">  <input id="input" autocomplete="off" /><button>Send</button>  <button id="toggle-btn">Disconnect</button></form><script>  const toggleButton = document.getElementById('toggle-btn');  toggleButton.addEventListener('click', (e) => {    e.preventDefault();    if (socket.connected) {      toggleButton.innerText = 'Connect';      socket.disconnect();    } else {      toggleButton.innerText = 'Disconnect';      socket.connect();    }  });</script>
```

```
<form id="form" action="">  <input id="input" autocomplete="off" /><button>Send</button>  <button id="toggle-btn">Disconnect</button></form><script>  var toggleButton = document.getElementById('toggle-btn');  toggleButton.addEventListener('click', function(e) {    e.preventDefault();    if (socket.connected) {      toggleButton.innerText = 'Connect';      socket.disconnect();    } else {      toggleButton.innerText = 'Disconnect';      socket.connect();    }  });</script>
```

Great! Now, you may ask:

> But this is an awesome feature, why isn't this enabled by default?

There are several reasons for this:

-   it doesn't always work, for example if the server abruptly crashes or gets restarted, then the client state might not be saved
-   it is not always possible to enable this feature when scaling up

tip

That being said, it is indeed a great feature since you don't have to synchronize the state of the client after a temporary disconnection (for example, when the user switches from WiFi to 4G).

We will explore a more general solution in the next step.

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step6?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step6?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step6?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step6?file=index.js)
