Version: Next

On this page

Interface to the Playwright inspector.

* * *

## Methods[​](#methods "Direct link to Methods")

### cancelPickLocator[​](#inspector-cancel-pick-locator "Direct link to cancelPickLocator")

Added in: v1.59 inspector.cancelPickLocator

Cancels an ongoing [inspector.pickLocator()](/docs/next/api/class-inspector#inspector-pick-locator) call by deactivating pick locator mode. If no pick locator mode is active, this method is a no-op.

**Usage**

```
await inspector.cancelPickLocator();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#inspector-cancel-pick-locator-return)

* * *

### pickLocator[​](#inspector-pick-locator "Direct link to pickLocator")

Added in: v1.59 inspector.pickLocator

Enters pick locator mode where hovering over page elements highlights them and shows the corresponding locator. Once the user clicks an element, the mode is deactivated and the [Locator](/docs/next/api/class-locator "Locator") for the picked element is returned.

**Usage**

```
const locator = await page.inspector().pickLocator();console.log(locator);
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Locator](/docs/next/api/class-locator "Locator")\>[#](#inspector-pick-locator-return)

* * *

### startScreencast[​](#inspector-start-screencast "Direct link to startScreencast")

Added in: v1.59 inspector.startScreencast

Starts capturing screencast frames. Frames are emitted as [inspector.on('screencastframe')](/docs/next/api/class-inspector#inspector-event-screencast-frame) events.

**Usage**

```
const inspector = page.inspector();inspector.on('screencastframe', ({ data, width, height }) => {  console.log(`frame ${width}x${height}, size: ${data.length}`);});await inspector.startScreencast({ size: { width: 800, height: 600 } });// ... perform actions ...await inspector.stopScreencast();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#inspector-start-screencast-option-size)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Frame width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Frame height in pixels.
            
        
        Optional dimensions for the screencast frames. If not specified, the current page viewport size is used.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#inspector-start-screencast-return)

* * *

### stopScreencast[​](#inspector-stop-screencast "Direct link to stopScreencast")

Added in: v1.59 inspector.stopScreencast

Stops the screencast started with [inspector.startScreencast()](/docs/next/api/class-inspector#inspector-start-screencast).

**Usage**

```
await inspector.startScreencast();// ... perform actions ...await inspector.stopScreencast();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#inspector-stop-screencast-return)

* * *

## Events[​](#events "Direct link to Events")

### on('screencastframe')[​](#inspector-event-screencast-frame "Direct link to on('screencastframe')")

Added in: v1.59 inspector.on('screencastframe')

Emitted for each captured JPEG screencast frame while the screencast is running.

**Usage**

```
const inspector = page.inspector();inspector.on('screencastframe', ({ data, width, height }) => {  console.log(`frame ${width}x${height}, jpeg size: ${data.length}`);  require('fs').writeFileSync('frame.jpg', data);});await inspector.startScreencast({ size: { width: 1280, height: 720 } });// ... perform actions ...await inspector.stopScreencast();
```

**Event data**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `data` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")
        
        JPEG-encoded frame data.
        
    -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Frame width in pixels.
        
    -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Frame height in pixels.
