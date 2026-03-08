On this page

Keyboard provides an api for managing a virtual keyboard. The high level api is [keyboard.type()](/docs/api/class-keyboard#keyboard-type), which takes raw characters and generates proper `keydown`, `keypress`/`input`, and `keyup` events on your page.

For finer control, you can use [keyboard.down()](/docs/api/class-keyboard#keyboard-down), [keyboard.up()](/docs/api/class-keyboard#keyboard-up), and [keyboard.insertText()](/docs/api/class-keyboard#keyboard-insert-text) to manually fire events as if they were generated from a real keyboard.

An example of holding down `Shift` in order to select and delete some text:

```
await page.keyboard.type('Hello World!');await page.keyboard.press('ArrowLeft');await page.keyboard.down('Shift');for (let i = 0; i < ' World'.length; i++)  await page.keyboard.press('ArrowLeft');await page.keyboard.up('Shift');await page.keyboard.press('Backspace');// Result text will end up saying 'Hello!'
```

An example of pressing uppercase `A`

```
await page.keyboard.press('Shift+KeyA');// orawait page.keyboard.press('Shift+A');
```

An example to trigger select-all with the keyboard

```
await page.keyboard.press('ControlOrMeta+A');
```

* * *

## Methods[​](#methods "Direct link to Methods")

### down[​](#keyboard-down "Direct link to down")

Added before v1.9 keyboard.down

Dispatches a `keydown` event.

[key](/docs/api/class-keyboard#keyboard-down-option-key) can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the [key](/docs/api/class-keyboard#keyboard-down-option-key) values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`\- `Digit9`, `KeyA`\- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`, `ControlOrMeta`. `ControlOrMeta` resolves to `Control` on Windows and Linux and to `Meta` on macOS.

Holding down `Shift` will type the text that corresponds to the [key](/docs/api/class-keyboard#keyboard-down-option-key) in the upper case.

If [key](/docs/api/class-keyboard#keyboard-down-option-key) is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

If [key](/docs/api/class-keyboard#keyboard-down-option-key) is a modifier key, `Shift`, `Meta`, `Control`, or `Alt`, subsequent key presses will be sent with that modifier active. To release the modifier key, use [keyboard.up()](/docs/api/class-keyboard#keyboard-up).

After the key is pressed once, subsequent calls to [keyboard.down()](/docs/api/class-keyboard#keyboard-down) will have [repeat](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat) set to true. To release the key, use [keyboard.up()](/docs/api/class-keyboard#keyboard-up).

note

Modifier keys DO influence `keyboard.down`. Holding down `Shift` will type the text in upper case.

**Usage**

```
await keyboard.down(key);
```

**Arguments**

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#keyboard-down-option-key)
    
    Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#keyboard-down-return)

* * *

### insertText[​](#keyboard-insert-text "Direct link to insertText")

Added before v1.9 keyboard.insertText

Dispatches only `input` event, does not emit the `keydown`, `keyup` or `keypress` events.

**Usage**

```
page.keyboard.insertText('嗨');
```

note

Modifier keys DO NOT effect `keyboard.insertText`. Holding down `Shift` will not type the text in upper case.

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#keyboard-insert-text-option-text)
    
    Sets input to the specified text value.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#keyboard-insert-text-return)

* * *

### press[​](#keyboard-press "Direct link to press")

Added before v1.9 keyboard.press

tip

In most cases, you should use [locator.press()](/docs/api/class-locator#locator-press) instead.

[key](/docs/api/class-keyboard#keyboard-press-option-key) can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the [key](/docs/api/class-keyboard#keyboard-press-option-key) values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`\- `Digit9`, `KeyA`\- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`, `ControlOrMeta`. `ControlOrMeta` resolves to `Control` on Windows and Linux and to `Meta` on macOS.

Holding down `Shift` will type the text that corresponds to the [key](/docs/api/class-keyboard#keyboard-press-option-key) in the upper case.

If [key](/docs/api/class-keyboard#keyboard-press-option-key) is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+o"`, `key: "Control++` or `key: "Control+Shift+T"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

**Usage**

```
const page = await browser.newPage();await page.goto('https://keycode.info');await page.keyboard.press('A');await page.screenshot({ path: 'A.png' });await page.keyboard.press('ArrowLeft');await page.screenshot({ path: 'ArrowLeft.png' });await page.keyboard.press('Shift+O');await page.screenshot({ path: 'O.png' });await browser.close();
```

Shortcut for [keyboard.down()](/docs/api/class-keyboard#keyboard-down) and [keyboard.up()](/docs/api/class-keyboard#keyboard-up).

**Arguments**

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#keyboard-press-option-key)
    
    Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#keyboard-press-option-delay)
        
        Time to wait between `keydown` and `keyup` in milliseconds. Defaults to 0.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#keyboard-press-return)

* * *

### type[​](#keyboard-type "Direct link to type")

Added before v1.9 keyboard.type

caution

In most cases, you should use [locator.fill()](/docs/api/class-locator#locator-fill) instead. You only need to press keys one by one if there is special keyboard handling on the page - in this case use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text.

To press a special key, like `Control` or `ArrowDown`, use [keyboard.press()](/docs/api/class-keyboard#keyboard-press).

**Usage**

```
await page.keyboard.type('Hello'); // Types instantlyawait page.keyboard.type('World', { delay: 100 }); // Types slower, like a user
```

note

Modifier keys DO NOT effect `keyboard.type`. Holding down `Shift` will not type the text in upper case.

note

For characters that are not on a US keyboard, only an `input` event will be sent.

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#keyboard-type-option-text)
    
    A text to type into a focused element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#keyboard-type-option-delay)
        
        Time to wait between key presses in milliseconds. Defaults to 0.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#keyboard-type-return)

* * *

### up[​](#keyboard-up "Direct link to up")

Added before v1.9 keyboard.up

Dispatches a `keyup` event.

**Usage**

```
await keyboard.up(key);
```

**Arguments**

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#keyboard-up-option-key)
    
    Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#keyboard-up-return)
