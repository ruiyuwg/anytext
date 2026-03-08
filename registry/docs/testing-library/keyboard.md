```
keyboard(input: KeyboardInput): Promise<void>
```

The `keyboard` API allows to simulate interactions with a keyboard. It accepts a `string` describing the key actions.

Keystrokes can be described:

-   Per printable character
    
    ```
    keyboard('foo') // translates to: f, o, o
    ```
    
    The opening brackets `{` and `[` are used as special characters and can be referenced by doubling them.
    
    ```
    keyboard('{{a[[') // translates to: {, a, [
    ```
    
-   Per [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
    
    ```
    keyboard('{Shift}{f}{o}{o}') // translates to: Shift, f, o, o
    ```
    
    This does not keep any key pressed. So `Shift` will be lifted before pressing `f`.
    
    Characters with special meaning inside the key descriptor can be escaped by prefixing them with a backslash `\`.
    
    ```
    keyboard('{\\}}') // translates to: }
    ```
    
-   Per [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
    
    ```
    keyboard('[ShiftLeft][KeyF][KeyO][KeyO]') // translates to: Shift, f, o, o
    ```
    

Keys can be kept pressed by adding a `>` to the end of the descriptor.  
If this should result in repeated `keydown` events, you can add the number of repetitions.  
If the key should also be released after this, add a slash `/` to the end of the descriptor.

```
keyboard('{a>}') // press a without releasing itkeyboard('{a>5}') // press a without releasing it and trigger 5 keydownkeyboard('{a>5/}') // press a for 5 keydown and then release it
```

A previously pressed key can be lifted by prefixing the descriptor with `/`.

```
keyboard('{/a}') // release a previously pressed a
```

This allows to simulate key combinations.

```
keyboard('{Shift>}A{/Shift}') // translates to: Shift(down), A, Shift(up)
```

The mapping of `key` to `code` is performed by a [default key map](https://github.com/testing-library/user-event/blob/main/src/keyboard/keyMap.ts) portraying a "default" US-keyboard. You can provide your own local keyboard mapping per [`keyboardMap`](/docs/user-event/options#keyboardmap) option.

Currently the different `key` meanings of single keys are treated as different keys.

> Future versions might try to interpolate the modifiers needed to reach a printable key on the keyboard. E.g. Automatically pressing `{Shift}` when CapsLock is not active and `A` is referenced. If you don't wish this behavior, you can deactivate the [`autoModify`](/docs/user-event/options#automodify) option to opt out of this non-breaking change.
