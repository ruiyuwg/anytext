On this page

The Touchscreen class operates in main-frame CSS pixels relative to the top-left corner of the viewport. Methods on the touchscreen can only be used in browser contexts that have been initialized with `hasTouch` set to true.

This class is limited to emulating tap gestures. For examples of other gestures simulated by manually dispatching touch events, see the [emulating legacy touch events](/docs/touch-events) page.

* * *

## Methods[​](#methods "Direct link to Methods")

### tap[​](#touchscreen-tap "Direct link to tap")

Added before v1.9 touchscreen.tap

Dispatches a `touchstart` and `touchend` event with a single touch at the position ([x](/docs/api/class-touchscreen#touchscreen-tap-option-x),[y](/docs/api/class-touchscreen#touchscreen-tap-option-y)).

note

[page.tap()](/docs/api/class-page#page-tap) the method will throw if [hasTouch](/docs/api/class-browser#browser-new-context-option-has-touch) option of the browser context is false.

**Usage**

```
await touchscreen.tap(x, y);
```

**Arguments**

-   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#touchscreen-tap-option-x)
    
    X coordinate relative to the main frame's viewport in CSS pixels.
    
-   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#touchscreen-tap-option-y)
    
    Y coordinate relative to the main frame's viewport in CSS pixels.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#touchscreen-tap-return)
