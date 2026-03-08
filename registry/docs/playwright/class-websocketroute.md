On this page

Whenever a [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) route is set up with [page.routeWebSocket()](/docs/api/class-page#page-route-web-socket) or [browserContext.routeWebSocket()](/docs/api/class-browsercontext#browser-context-route-web-socket), the `WebSocketRoute` object allows to handle the WebSocket, like an actual server would do.

**Mocking**

By default, the routed WebSocket will not connect to the server. This way, you can mock entire communication over the WebSocket. Here is an example that responds to a `"request"` with a `"response"`.

```
await page.routeWebSocket('wss://example.com/ws', ws => {  ws.onMessage(message => {    if (message === 'request')      ws.send('response');  });});
```

Since we do not call [webSocketRoute.connectToServer()](/docs/api/class-websocketroute#web-socket-route-connect-to-server) inside the WebSocket route handler, Playwright assumes that WebSocket will be mocked, and opens the WebSocket inside the page automatically.

Here is another example that handles JSON messages:

```
await page.routeWebSocket('wss://example.com/ws', ws => {  ws.onMessage(message => {    const json = JSON.parse(message);    if (json.request === 'question')      ws.send(JSON.stringify({ response: 'answer' }));  });});
```

**Intercepting**

Alternatively, you may want to connect to the actual server, but intercept messages in-between and modify or block them. Calling [webSocketRoute.connectToServer()](/docs/api/class-websocketroute#web-socket-route-connect-to-server) returns a server-side `WebSocketRoute` instance that you can send messages to, or handle incoming messages.

Below is an example that modifies some messages sent by the page to the server. Messages sent from the server to the page are left intact, relying on the default forwarding.

```
await page.routeWebSocket('/ws', ws => {  const server = ws.connectToServer();  ws.onMessage(message => {    if (message === 'request')      server.send('request2');    else      server.send(message);  });});
```

After connecting to the server, all **messages are forwarded** between the page and the server by default.

However, if you call [webSocketRoute.onMessage()](/docs/api/class-websocketroute#web-socket-route-on-message) on the original route, messages from the page to the server **will not be forwarded** anymore, but should instead be handled by the [handler](/docs/api/class-websocketroute#web-socket-route-on-message-option-handler).

Similarly, calling [webSocketRoute.onMessage()](/docs/api/class-websocketroute#web-socket-route-on-message) on the server-side WebSocket will **stop forwarding messages** from the server to the page, and [handler](/docs/api/class-websocketroute#web-socket-route-on-message-option-handler) should take care of them.

The following example blocks some messages in both directions. Since it calls [webSocketRoute.onMessage()](/docs/api/class-websocketroute#web-socket-route-on-message) in both directions, there is no automatic forwarding at all.

```
await page.routeWebSocket('/ws', ws => {  const server = ws.connectToServer();  ws.onMessage(message => {    if (message !== 'blocked-from-the-page')      server.send(message);  });  server.onMessage(message => {    if (message !== 'blocked-from-the-server')      ws.send(message);  });});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### close[​](#web-socket-route-close "Direct link to close")

Added in: v1.48 webSocketRoute.close

Closes one side of the WebSocket connection.

**Usage**

```
await webSocketRoute.close();await webSocketRoute.close(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `code` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#web-socket-route-close-option-code)
        
        Optional [close code](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close#code).
        
    -   `reason` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#web-socket-route-close-option-reason)
        
        Optional [close reason](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close#reason).
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#web-socket-route-close-return)

* * *

### connectToServer[​](#web-socket-route-connect-to-server "Direct link to connectToServer")

Added in: v1.48 webSocketRoute.connectToServer

By default, routed WebSocket does not connect to the server, so you can mock entire WebSocket communication. This method connects to the actual WebSocket server, and returns the server-side [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute") instance, giving the ability to send and receive messages from the server.

Once connected to the server:

-   Messages received from the server will be **automatically forwarded** to the WebSocket in the page, unless [webSocketRoute.onMessage()](/docs/api/class-websocketroute#web-socket-route-on-message) is called on the server-side `WebSocketRoute`.
-   Messages sent by the [`WebSocket.send()`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send) call in the page will be **automatically forwarded** to the server, unless [webSocketRoute.onMessage()](/docs/api/class-websocketroute#web-socket-route-on-message) is called on the original `WebSocketRoute`.

See examples at the top for more details.

**Usage**

```
webSocketRoute.connectToServer();
```

**Returns**

-   [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute")[#](#web-socket-route-connect-to-server-return)

* * *

### onClose[​](#web-socket-route-on-close "Direct link to onClose")

Added in: v1.48 webSocketRoute.onClose

Allows to handle [`WebSocket.close`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close).

By default, closing one side of the connection, either in the page or on the server, will close the other side. However, when [webSocketRoute.onClose()](/docs/api/class-websocketroute#web-socket-route-on-close) handler is set up, the default forwarding of closure is disabled, and handler should take care of it.

**Usage**

```
webSocketRoute.onClose(handler);
```

**Arguments**

-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | \[undefined\]):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#web-socket-route-on-close-option-handler)
    
    Function that will handle WebSocket closure. Received an optional [close code](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close#code) and an optional [close reason](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close#reason).
    

* * *

### onMessage[​](#web-socket-route-on-message "Direct link to onMessage")

Added in: v1.48 webSocketRoute.onMessage

This method allows to handle messages that are sent by the WebSocket, either from the page or from the server.

When called on the original WebSocket route, this method handles messages sent from the page. You can handle this messages by responding to them with [webSocketRoute.send()](/docs/api/class-websocketroute#web-socket-route-send), forwarding them to the server-side connection returned by [webSocketRoute.connectToServer()](/docs/api/class-websocketroute#web-socket-route-connect-to-server) or do something else.

Once this method is called, messages are not automatically forwarded to the server or to the page - you should do that manually by calling [webSocketRoute.send()](/docs/api/class-websocketroute#web-socket-route-send). See examples at the top for more details.

Calling this method again will override the handler with a new one.

**Usage**

```
webSocketRoute.onMessage(handler);
```

**Arguments**

-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#web-socket-route-on-message-option-handler)
    
    Function that will handle messages.
    

* * *

### send[​](#web-socket-route-send "Direct link to send")

Added in: v1.48 webSocketRoute.send

Sends a message to the WebSocket. When called on the original WebSocket, sends the message to the page. When called on the result of [webSocketRoute.connectToServer()](/docs/api/class-websocketroute#web-socket-route-connect-to-server), sends the message to the server. See examples at the top for more details.

**Usage**

```
webSocketRoute.send(message);
```

**Arguments**

-   `message` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")[#](#web-socket-route-send-option-message)
    
    Message to send.
    

* * *

### url[​](#web-socket-route-url "Direct link to url")

Added in: v1.48 webSocketRoute.url

URL of the WebSocket created in the page.

**Usage**

```
webSocketRoute.url();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#web-socket-route-url-return)
