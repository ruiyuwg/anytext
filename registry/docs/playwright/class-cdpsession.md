On this page

The `CDPSession` instances are used to talk raw Chrome Devtools Protocol:

-   protocol methods can be called with `session.send` method.
-   protocol events can be subscribed to with `session.on` method.

Useful links:

-   Documentation on DevTools Protocol can be found here: [DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/).
-   Getting Started with DevTools Protocol: [https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md](https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md)

```
const client = await page.context().newCDPSession(page);await client.send('Animation.enable');client.on('Animation.animationCreated', () => console.log('Animation created!'));const response = await client.send('Animation.getPlaybackRate');console.log('playback rate is ' + response.playbackRate);await client.send('Animation.setPlaybackRate', {  playbackRate: response.playbackRate / 2});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### detach[​](#cdp-session-detach "Direct link to detach")

Added before v1.9 cdpSession.detach

Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages.

**Usage**

```
await cdpSession.detach();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#cdp-session-detach-return)

* * *

### send[​](#cdp-session-send "Direct link to send")

Added before v1.9 cdpSession.send

**Usage**

```
await cdpSession.send(method);await cdpSession.send(method, params);
```

**Arguments**

-   `method` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#cdp-session-send-option-method)
    
    Protocol method name.
    
-   `params` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#cdp-session-send-option-params)
    
    Optional method parameters.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#cdp-session-send-return)
