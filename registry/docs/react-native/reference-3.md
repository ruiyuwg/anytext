# Reference

## Methods[​](#methods "Direct link to Methods")

### `alert()`[​](#alert "Direct link to alert")

tsx

```
static alert (
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
);
```

**Parameters:**

| Name          | Type                                         | Description                                                             |
| ------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| titleRequired | string                                       | The dialog's title. Passing `null` or empty string will hide the title. |
| message       | string                                       | An optional message that appears below the dialog's title.              |
| buttons       | [AlertButton](/docs/alert.md#alertbutton)\[] | An optional array containing buttons configuration.                     |
| options       | [AlertOptions](/docs/alert.md#alertoptions)  | An optional Alert configuration.                                        |

***

### `prompt()`iOS[​](#prompt-ios "Direct link to prompt-ios")

tsx

```
static prompt: (
  title: string,
  message?: string,
  callbackOrButtons?: ((text: string) => void) | AlertButton[],
  type?: AlertType,
  defaultValue?: string,
  keyboardType?: string,
);
```

Create and display a prompt to enter some text in form of Alert.

**Parameters:**

| Name              | Type                                                    | Description                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| titleRequired     | string                                                  | The dialog's title.                                                                                                                                                                                  |
| message           | string                                                  | An optional message that appears above the text input.                                                                                                                                               |
| callbackOrButtons | function\*\*\*[AlertButton](/docs/alert.md#alertButton)\[] | If passed a function, it will be called with the prompt's value`(text: string) => void`, when the user taps 'OK'.\*\*\*If passed an array, buttons will be configured based on the array content. |
| type              | [AlertType](/docs/alert.md#alerttype-ios)               | This configures the text input.                                                                                                                                                                      |
| defaultValue      | string                                                  | The default text in text input.                                                                                                                                                                      |
| keyboardType      | string                                                  | The keyboard type of first text field (if exists). One of TextInput [keyboardTypes](/docs/textinput.md#keyboardtype).                                                                                |
| options           | [AlertOptions](/docs/alert.md#alertoptions)             | An optional Alert configuration.                                                                                                                                                                     |

***

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### AlertButtonStyleiOS[​](#alertbuttonstyle-ios "Direct link to alertbuttonstyle-ios")

An iOS Alert button style.

| Type |
| ---- |
| enum |

**Constants:**

| Value           | Description               |
| --------------- | ------------------------- |
| `'default'`     | Default button style.     |
| `'cancel'`      | Cancel button style.      |
| `'destructive'` | Destructive button style. |

***

### AlertTypeiOS[​](#alerttype-ios "Direct link to alerttype-ios")

An iOS Alert type.

| Type |
| ---- |
| enum |

**Constants:**

| Value              | Description                  |
| ------------------ | ---------------------------- |
| `'default'`        | Default alert with no inputs |
| `'plain-text'`     | Plain text input alert       |
| `'secure-text'`    | Secure text input alert      |
| `'login-password'` | Login and password alert     |

***

### AlertButton[​](#alertbutton "Direct link to AlertButton")

An object describing the configuration of a button in the alert.

| Type             |
| ---------------- |
| array of objects |

**Objects properties:**

| Name           | Type                                                    | Description                                                                    |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| text           | string                                                  | Button label.                                                                  |
| onPress        | function                                                | Callback function when button is pressed.                                      |
| styleiOS       | [AlertButtonStyle](/docs/alert.md#alertbuttonstyle-ios) | Button style, on Android this property will be ignored.                        |
| isPreferrediOS | boolean                                                 | Whether button should be emphasized, on Android this property will be ignored. |

***

### AlertOptions[​](#alertoptions "Direct link to AlertOptions")

| Type   |
| ------ |
| object |

**Properties:**

| Name                  | Type     | Description                                                                                                               |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| cancelableAndroid     | boolean  | Defines if alert can be dismissed by tapping outside of the alert box.                                                    |
| userInterfaceStyleiOS | string   | The interface style used for the alert, can be set to `light` or `dark`, otherwise the default system style will be used. |
| onDismissAndroid      | function | Callback function fired when alert has been dismissed.                                                                    |

***

# ❌ AlertIOS

Removed from React Native

Use [`Alert`](/docs/alert.md) instead.

***
