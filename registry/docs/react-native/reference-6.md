# Reference

## Methods[​](#methods "Direct link to Methods")

### `setValue()`[​](#setvalue "Direct link to setvalue")

tsx

```
setValue(value: {x: number; y: number});
```

Directly set the value. This will stop any animations running on the value and update all the bound properties.

**Parameters:**

| Name  | Type                     | Required | Description |
| ----- | ------------------------ | -------- | ----------- |
| value | `{x: number; y: number}` | Yes      | Value       |

***

### `setOffset()`[​](#setoffset "Direct link to setoffset")

tsx

```
setOffset(offset: {x: number; y: number});
```

Sets an offset that is applied on top of whatever value is set, whether via `setValue`, an animation, or `Animated.event`. Useful for compensating things like the start of a pan gesture.

**Parameters:**

| Name   | Type                     | Required | Description  |
| ------ | ------------------------ | -------- | ------------ |
| offset | `{x: number; y: number}` | Yes      | Offset value |

***

### `flattenOffset()`[​](#flattenoffset "Direct link to flattenoffset")

tsx

```
flattenOffset();
```

Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged.

***

### `extractOffset()`[​](#extractoffset "Direct link to extractoffset")

tsx

```
extractOffset();
```

Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged.

***

### `addListener()`[​](#addlistener "Direct link to addlistener")

tsx

```
addListener(callback: (value: {x: number; y: number}) => void);
```

Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively.

Returns a string that serves as an identifier for the listener.

**Parameters:**

| Name     | Type     | Required | Description                                                                                 |
| -------- | -------- | -------- | ------------------------------------------------------------------------------------------- |
| callback | function | Yes      | The callback function which will receive an object with a `value` key set to the new value. |

***

### `removeListener()`[​](#removelistener "Direct link to removelistener")

tsx

```
removeListener(id: string);
```

Unregister a listener. The `id` param shall match the identifier previously returned by `addListener()`.

**Parameters:**

| Name | Type   | Required | Description                        |
| ---- | ------ | -------- | ---------------------------------- |
| id   | string | Yes      | Id for the listener being removed. |

***

### `removeAllListeners()`[​](#removealllisteners "Direct link to removealllisteners")

tsx

```
removeAllListeners();
```

Remove all registered listeners.

***

### `stopAnimation()`[​](#stopanimation "Direct link to stopanimation")

tsx

```
stopAnimation(callback?: (value: {x: number; y: number}) => void);
```

Stops any running animation or tracking. `callback` is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout.

**Parameters:**

| Name     | Type     | Required | Description                                   |
| -------- | -------- | -------- | --------------------------------------------- |
| callback | function | No       | A function that will receive the final value. |

***

### `resetAnimation()`[​](#resetanimation "Direct link to resetanimation")

tsx

```
resetAnimation(callback?: (value: {x: number; y: number}) => void);
```

Stops any animation and resets the value to its original.

**Parameters:**

| Name     | Type     | Required | Description                                      |
| -------- | -------- | -------- | ------------------------------------------------ |
| callback | function | No       | A function that will receive the original value. |

***

### `getLayout()`[​](#getlayout "Direct link to getlayout")

tsx

```
getLayout(): {left: Animated.Value, top: Animated.Value};
```

Converts `{x, y}` into `{left, top}` for use in style, e.g.

tsx

```
style={this.state.anim.getLayout()}
```

***

### `getTranslateTransform()`[​](#gettranslatetransform "Direct link to gettranslatetransform")

tsx

```
getTranslateTransform(): [
  {translateX: Animated.Value},
  {translateY: Animated.Value},
];
```

Converts `{x, y}` into a useable translation transform, e.g.

tsx

```
style={{
  transform: this.state.anim.getTranslateTransform()
}}
```

***
