On this page

* * *

## Methods[​](#methods "Direct link to Methods")

### drag[​](#android-input-drag "Direct link to drag")

Added in: v1.9 androidInput.drag

Performs a drag between [from](/docs/api/class-androidinput#android-input-drag-option-from) and [to](/docs/api/class-androidinput#android-input-drag-option-to) points.

**Usage**

```
await androidInput.drag(from, to, steps);
```

**Arguments**

-   `from` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#android-input-drag-option-from)
    
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    
    The start point of the drag.
    
-   `to` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#android-input-drag-option-to)
    
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    
    The end point of the drag.
    
-   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#android-input-drag-option-steps)
    
    The number of steps in the drag. Each step takes 5 milliseconds to complete.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#android-input-drag-return)

* * *

### press[​](#android-input-press "Direct link to press")

Added in: v1.9 androidInput.press

Presses the [key](/docs/api/class-androidinput#android-input-press-option-key).

**Usage**

```
await androidInput.press(key);
```

**Arguments**

-   `key` \[AndroidKey\][#](#android-input-press-option-key)
    
    Key to press.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#android-input-press-return)

* * *

### swipe[​](#android-input-swipe "Direct link to swipe")

Added in: v1.9 androidInput.swipe

Swipes following the path defined by [segments](/docs/api/class-androidinput#android-input-swipe-option-segments).

**Usage**

```
await androidInput.swipe(from, segments, steps);
```

**Arguments**

-   `from` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#android-input-swipe-option-from)
    
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    
    The point to start swiping from.
    
-   `segments` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#android-input-swipe-option-segments)
    
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    
    Points following the [from](/docs/api/class-androidinput#android-input-swipe-option-from) point in the swipe gesture.
    
-   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#android-input-swipe-option-steps)
    
    The number of steps for each segment. Each step takes 5 milliseconds to complete, so 100 steps means half a second per each segment.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#android-input-swipe-return)

* * *

### tap[​](#android-input-tap "Direct link to tap")

Added in: v1.9 androidInput.tap

Taps at the specified [point](/docs/api/class-androidinput#android-input-tap-option-point).

**Usage**

```
await androidInput.tap(point);
```

**Arguments**

-   `point` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#android-input-tap-option-point)
    
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    
    The point to tap at.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#android-input-tap-return)

* * *

### type[​](#android-input-type "Direct link to type")

Added in: v1.9 androidInput.type

Types [text](/docs/api/class-androidinput#android-input-type-option-text) into currently focused widget.

**Usage**

```
await androidInput.type(text);
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#android-input-type-option-text)
    
    Text to type.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#android-input-type-return)
