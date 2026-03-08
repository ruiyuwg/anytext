# Reference

## Methods[​](#methods "Direct link to Methods")

### `getAppKeys()`[​](#getappkeys "Direct link to getappkeys")

tsx

```
static getAppKeys(): string[];
```

Returns an array of strings.

***

### `getRegistry()`[​](#getregistry "Direct link to getregistry")

tsx

```
static getRegistry(): {sections: string[]; runnables: Runnable[]};
```

Returns a [Registry](/docs/appregistry.md#registry) object.

***

### `getRunnable()`[​](#getrunnable "Direct link to getrunnable")

tsx

```
static getRunnable(appKey: string): : Runnable | undefined;
```

Returns a [Runnable](/docs/appregistry.md#runnable) object.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| appKeyRequired | string |

***

### `getSectionKeys()`[​](#getsectionkeys "Direct link to getsectionkeys")

tsx

```
static getSectionKeys(): string[];
```

Returns an array of strings.

***

### `getSections()`[​](#getsections "Direct link to getsections")

tsx

```
static getSections(): Record<string, Runnable>;
```

Returns a [Runnables](/docs/appregistry.md#runnables) object.

***

### `registerCancellableHeadlessTask()`[​](#registercancellableheadlesstask "Direct link to registercancellableheadlesstask")

tsx

```
static registerCancellableHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider,
  taskCancelProvider: TaskCancelProvider,
);
```

Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI.

**Parameters:**

| Name                             | Type                                                          | Description                                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| taskKeyRequired            | string                                                        | The native id for this task instance that was used when startHeadlessTask was called.                                                                                                                                               |
| taskProviderRequired       | [TaskProvider](/docs/appregistry.md#taskprovider)             | A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. |
| taskCancelProviderRequired | [TaskCancelProvider](/docs/appregistry.md#taskcancelprovider) | a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP.                                                                    |

***

### `registerComponent()`[​](#registercomponent "Direct link to registercomponent")

tsx

```
static registerComponent(
  appKey: string,
  getComponentFunc: ComponentProvider,
  section?: boolean,
): string;
```

**Parameters:**

| Name                      | Type              |
| ------------------------- | ----------------- |
| appKeyRequired            | string            |
| componentProviderRequired | ComponentProvider |
| section                   | boolean           |

***

### `registerConfig()`[​](#registerconfig "Direct link to registerconfig")

tsx

```
static registerConfig(config: AppConfig[]);
```

**Parameters:**

| Name           | Type                                           |
| -------------- | ---------------------------------------------- |
| configRequired | [AppConfig](/docs/appregistry.md#appconfig)\[] |

***

### `registerHeadlessTask()`[​](#registerheadlesstask "Direct link to registerheadlesstask")

tsx

```
static registerHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider,
);
```

Register a headless task. A headless task is a bit of code that runs without a UI.

This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music.

**Parameters:**

| Name                 | Type                                              | Description                                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| taskKeyRequired      | string                                            | The native id for this task instance that was used when startHeadlessTask was called.                                                                                                                                               |
| taskProviderRequired | [TaskProvider](/docs/appregistry.md#taskprovider) | A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. |

***

### `registerRunnable()`[​](#registerrunnable "Direct link to registerrunnable")

tsx

```
static registerRunnable(appKey: string, func: Runnable): string;
```

**Parameters:**

| Name           | Type     |
| -------------- | -------- |
| appKeyRequired | string   |
| runRequired    | function |

***

### `registerSection()`[​](#registersection "Direct link to registersection")

tsx

```
static registerSection(
  appKey: string,
  component: ComponentProvider,
);
```

**Parameters:**

| Name              | Type              |
| ----------------- | ----------------- |
| appKeyRequired    | string            |
| componentRequired | ComponentProvider |

***

### `runApplication()`[​](#runapplication "Direct link to runapplication")

tsx

```
static runApplication(appKey: string, appParameters: any): void;
```

Loads the JavaScript bundle and runs the app.

**Parameters:**

| Name                  | Type   |
| --------------------- | ------ |
| appKeyRequired        | string |
| appParametersRequired | any    |

***

### `setComponentProviderInstrumentationHook()`[​](#setcomponentproviderinstrumentationhook "Direct link to setcomponentproviderinstrumentationhook")

tsx

```
static setComponentProviderInstrumentationHook(
  hook: ComponentProviderInstrumentationHook,
);
```

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| hookRequired | function |

A valid `hook` function accepts the following as arguments:

| Name                            | Type               |
| ------------------------------- | ------------------ |
| componentRequired               | ComponentProvider  |
| scopedPerformanceLoggerRequired | IPerformanceLogger |

The function must also return a React Component.

***

### `setWrapperComponentProvider()`[​](#setwrappercomponentprovider "Direct link to setwrappercomponentprovider")

tsx

```
static setWrapperComponentProvider(
  provider: WrapperComponentProvider,
);
```

**Parameters:**

| Name             | Type              |
| ---------------- | ----------------- |
| providerRequired | ComponentProvider |

***

### `startHeadlessTask()`[​](#startheadlesstask "Direct link to startheadlesstask")

tsx

```
static startHeadlessTask(
  taskId: number,
  taskKey: string,
  data: any,
);
```

Only called from native code. Starts a headless task.

**Parameters:**

| Name            | Type   | Description                                                          |
| --------------- | ------ | -------------------------------------------------------------------- |
| taskIdRequired  | number | The native id for this task instance to keep track of its execution. |
| taskKeyRequired | string | The key for the task to start.                                       |
| dataRequired    | any    | The data to pass to the task.                                        |

***

### `unmountApplicationComponentAtRootTag()`[​](#unmountapplicationcomponentatroottag "Direct link to unmountapplicationcomponentatroottag")

tsx

```
static unmountApplicationComponentAtRootTag(rootTag: number);
```

Stops an application when a view should be destroyed.

**Parameters:**

| Name            | Type   |
| --------------- | ------ |
| rootTagRequired | number |

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### AppConfig[​](#appconfig "Direct link to AppConfig")

Application configuration for the `registerConfig` method.

| Type   |
| ------ |
| object |

**Properties:**

| Name           | Type              |
| -------------- | ----------------- |
| appKeyRequired | string            |
| component      | ComponentProvider |
| run            | function          |
| section        | boolean           |

note

Every config is expected to set either `component` or `run` function.

### Registry[​](#registry "Direct link to Registry")

| Type   |
| ------ |
| object |

**Properties:**

| Name      | Type                                                |
| --------- | --------------------------------------------------- |
| runnables | array of [Runnables](/docs/appregistry.md#runnable) |
| sections  | array of strings                                    |

### Runnable[​](#runnable "Direct link to Runnable")

| Type   |
| ------ |
| object |

**Properties:**

| Name      | Type              |
| --------- | ----------------- |
| component | ComponentProvider |
| run       | function          |

### Runnables[​](#runnables "Direct link to Runnables")

An object with key of `appKey` and value of type of [`Runnable`](/docs/appregistry.md#runnable).

| Type   |
| ------ |
| object |

### Task[​](#task "Direct link to Task")

A `Task` is a function that accepts any data as argument and returns a Promise that resolves to `undefined`.

| Type     |
| -------- |
| function |

### TaskCanceller[​](#taskcanceller "Direct link to TaskCanceller")

A `TaskCanceller` is a function that accepts no argument and returns void.

| Type     |
| -------- |
| function |

### TaskCancelProvider[​](#taskcancelprovider "Direct link to TaskCancelProvider")

A valid `TaskCancelProvider` is a function that returns a [`TaskCanceller`](/docs/appregistry.md#taskcanceller).

| Type     |
| -------- |
| function |

### TaskProvider[​](#taskprovider "Direct link to TaskProvider")

A valid `TaskProvider` is a function that returns a [`Task`](/docs/appregistry.md#task).

| Type     |
| -------- |
| function |

***

# AppState

`AppState` can tell you if the app is in the foreground or background, and notify you when the state changes.

AppState is frequently used to determine the intent and proper behavior when handling push notifications.

### App States[​](#app-states "Direct link to App States")

- `active` - The app is running in the foreground

- `background` - The app is running in the background. The user is either:

  - in another app
  - on the home screen
  - \[Android] on another `Activity` (even if it was launched by your app)

- \[iOS] `inactive` - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the multitasking view, opening the Notification Center or in the event of an incoming call.

For more information, see [Apple's documentation](https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle)

## Basic Usage[​](#basic-usage "Direct link to Basic Usage")

To see the current state, you can check `AppState.currentState`, which will be kept up-to-date. However, `currentState` will be null at launch while `AppState` retrieves it over the bridge.

This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the `active` state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview.

***

# Reference

## Events[​](#events "Direct link to Events")

### `change`[​](#change "Direct link to change")

This event is received when the app state has changed. The listener is called with one of [the current app state values](/docs/appstate.md#app-states).

### `memoryWarning`iOS[​](#memorywarning-ios "Direct link to memorywarning-ios")

Fires when the app receives a memory warning from the operating system.

### `focus`Android[​](#focus-android "Direct link to focus-android")

Received when the app gains focus (the user is interacting with the app).

### `blur`Android[​](#blur-android "Direct link to blur-android")

Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the [notification drawer](https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer). `AppState` won't change but the `blur` event will get fired.

## Methods[​](#methods "Direct link to Methods")

### `addEventListener()`[​](#addeventlistener "Direct link to addeventlistener")

tsx

```
static addEventListener(
  type: AppStateEvent,
  listener: (state: AppStateStatus) => void,
): NativeEventSubscription;
```

Sets up a function that will be called whenever the specified event type on AppState occurs. Valid values for `eventType` are [listed above](#events). Returns the `EventSubscription`.

## Properties[​](#properties "Direct link to Properties")

### `currentState`[​](#currentstate "Direct link to currentstate")

tsx

```
static currentState: AppStateStatus;
```

***

# ❌ AsyncStorage

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=storage) instead.

***
