Version: Next

On this page

Interface for capturing screencast frames from a page.

* * *

## Methods[​](#methods "Direct link to Methods")

### start[​](#screencast-start "Direct link to start")

Added in: v1.59 screencast.start

Starts capturing screencast frames. Frames are emitted as [screencast.on('screencastframe')](/docs/next/api/class-screencast#screencast-event-screencast-frame) events.

**Usage**

```
const screencast = page.screencast;screencast.on('screencastframe', ({ data, width, height }) => {  console.log(`frame ${width}x${height}, size: ${data.length}`);});await screencast.start({ maxSize: { width: 800, height: 600 } });// ... perform actions ...await screencast.stop();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `maxSize` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#screencast-start-option-max-size)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Max frame width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Max frame height in pixels.
            
        
        Maximum screencast frame dimensions. The output frame may be smaller to preserve the page aspect ratio. Defaults to 800×800.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Disposable](/docs/next/api/class-disposable "Disposable")\>[#](#screencast-start-return)

* * *

### stop[​](#screencast-stop "Direct link to stop")

Added in: v1.59 screencast.stop

Stops the screencast started with [screencast.start()](/docs/next/api/class-screencast#screencast-start).

**Usage**

```
await screencast.start();// ... perform actions ...await screencast.stop();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#screencast-stop-return)

* * *

## Events[​](#events "Direct link to Events")

### on('screencastframe')[​](#screencast-event-screencast-frame "Direct link to on('screencastframe')")

Added in: v1.59 screencast.on('screencastframe')

Emitted for each captured JPEG screencast frame while the screencast is running.

**Usage**

```
const screencast = page.screencast;screencast.on('screencastframe', ({ data, width, height }) => {  console.log(`frame ${width}x${height}, jpeg size: ${data.length}`);  require('fs').writeFileSync('frame.jpg', data);});await screencast.start({ maxSize: { width: 1200, height: 800 } });// ... perform actions ...await screencast.stop();
```

**Event data**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `data` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")
        
        JPEG-encoded frame data.
