On this page

* * *

## Methods[​](#methods "Direct link to Methods")

### close[​](#browser-server-close "Direct link to close")

Added before v1.9 browserServer.close

Closes the browser gracefully and makes sure the process is terminated.

**Usage**

```
await browserServer.close();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#browser-server-close-return)

* * *

### kill[​](#browser-server-kill "Direct link to kill")

Added before v1.9 browserServer.kill

Kills the browser process and waits for the process to exit.

**Usage**

```
await browserServer.kill();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#browser-server-kill-return)

* * *

### process[​](#browser-server-process "Direct link to process")

Added before v1.9 browserServer.process

Spawned browser application process.

**Usage**

```
browserServer.process();
```

**Returns**

-   [ChildProcess](https://nodejs.org/api/child_process.html "ChildProcess")[#](#browser-server-process-return)

* * *

### wsEndpoint[​](#browser-server-ws-endpoint "Direct link to wsEndpoint")

Added before v1.9 browserServer.wsEndpoint

Browser websocket url.

Browser websocket endpoint which can be used as an argument to [browserType.connect()](/docs/api/class-browsertype#browser-type-connect) to establish connection to the browser.

Note that if the listen `host` option in `launchServer` options is not specified, localhost will be output anyway, even if the actual listening address is an unspecified address.

**Usage**

```
browserServer.wsEndpoint();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#browser-server-ws-endpoint-return)

* * *

## Events[​](#events "Direct link to Events")

### on('close')[​](#browser-server-event-close "Direct link to on('close')")

Added before v1.9 browserServer.on('close')

Emitted when the browser server closes.

**Usage**

```
browserServer.on('close', data => {});
```
