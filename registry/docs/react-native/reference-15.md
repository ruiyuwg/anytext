# Reference

## Instance properties[​](#instance-properties "Direct link to Instance properties")

### `eventCounts`[​](#eventcounts "Direct link to eventcounts")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/eventCounts).

### `memory`[​](#memory "Direct link to memory")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory).

### `rnStartupTiming` ⚠️[​](#rnstartuptiming-️ "Direct link to rnstartuptiming-️")

Non-standard

This is a React Native specific extension.

Provides information about the startup time of the application.

ts

```
get rnStartupTiming(): ReactNativeStartupTiming;
```

The `ReactNativeStartupTiming` interface provides the following fields:

| Name                                     | Type           | Description                                               |
| ---------------------------------------- | -------------- | --------------------------------------------------------- |
| `startTime`                              | number | void | When the React Native runtime initialization was started. |
| `executeJavaScriptBundleEntryPointStart` | number | void | When the execution of the application bundle was started. |
| `endTime`                                | number | void | When the React Native runtime was fully initialized.      |

### `timeOrigin`[​](#timeorigin "Direct link to timeorigin")

Partial support

Provides the number of milliseconds from the UNIX epoch until system boot, instead of the number of milliseconds from the UNIX epoch until app startup.

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin).

## Instance methods[​](#instance-methods "Direct link to Instance methods")

### `clearMarks()`[​](#clearmarks "Direct link to clearmarks")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMarks).

### `clearMeasures()`[​](#clearmeasures "Direct link to clearmeasures")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures).

### `getEntries()`[​](#getentries "Direct link to getentries")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntries).

### `getEntriesByName()`[​](#getentriesbyname "Direct link to getentriesbyname")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName).

### `getEntriesByType()`[​](#getentriesbytype "Direct link to getentriesbytype")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType).

### `mark()`[​](#mark "Direct link to mark")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark).

### `measure()`[​](#measure "Direct link to measure")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure).

### `now()`[​](#now "Direct link to now")

Partial support

Provides the number of milliseconds from system boot, instead of the number of milliseconds from app startup.

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).

***

# PerformanceEntry

The global [`PerformanceEntry`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry) class, as defined in Web specifications.

***

# PerformanceEventTiming

The global [`PerformanceEventTiming`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming) class, as defined in Web specifications.

Partial support

The `cancelable` and `target` properties are not supported yet.

***

# PerformanceLongTaskTiming

The global [`PerformanceLongTaskTiming`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming) class, as defined in Web specifications.

Partial support

The value for the `attribution` property is always an empty array.

***

# PerformanceMark

The global [`PerformanceMark`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMark) class, as defined in Web specifications.

***

# PerformanceMeasure

The global [`PerformanceMeasure`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMeasure) class, as defined in Web specifications.

***

# PerformanceObserver

The global [`PerformanceObserver`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) class, as defined in Web specifications.

## Example[​](#example "Direct link to Example")

ts

```
const observer = new PerformanceObserver(
  (list, observer, options) => {
    for (const entry of list.getEntries()) {
      console.log(
        'Received entry with type',
        entry.entryType,
        'and name',
        entry.name,
        'that started at',
        entry.startTime,
        'and took',
        entry.duration,
        'ms',
      );
    }
  },
);

observer.observe({entryTypes: ['mark', 'measure']});
```

***

# Reference

## Constructor[​](#constructor "Direct link to Constructor")

### `PerformanceObserver()`[​](#performanceobserver "Direct link to performanceobserver")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver).

## Static properties[​](#static-properties "Direct link to Static properties")

### `supportedEntryTypes`[​](#supportedentrytypes "Direct link to supportedentrytypes")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/supportedEntryTypes).

Returns `['mark', 'measure', 'event', 'longtask', 'resource']`.

## Instance methods[​](#instance-methods "Direct link to Instance methods")

### `observe()`[​](#observe "Direct link to observe")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/observe).

### `disconnect()`[​](#disconnect "Direct link to disconnect")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/disconnect).

***

# PerformanceObserverEntryList

The global [`PerformanceObserverEntryList`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList) class, as defined in Web specifications.

***

# PerformanceResourceTiming

The global [`PerformanceResourceTiming`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming) class, as defined in Web specifications.

Partial support

React Native implements the following `PerformanceResourceTiming` properties only:

- `fetchStart`
- `requestStart`
- `connectStart`
- `connectEnd`
- `responseStart`
- `responseEnd`
- `responseStatus`
- `contentType`
- `encodedBodySize`
- `decodedBodySize`

***

# process

warning

🚧 This page is work in progress.

The global `process` object, as defined in Node.js.

***

# queueMicrotask

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/queueMicrotask) for more information.

The global `queueMicrotask` function, as defined in Web specifications.

***

# Request

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Request) for more information.

The global `Request` class, as defined in Web specifications.

***

# requestAnimationFrame

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) for more information.

The global `requestAnimationFrame` function, as defined in Web specifications.

***

# requestIdleCallback

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) for more information.

The global `requestIdleCallback` function, as defined in Web specifications.

***

# Response

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response) for more information.

The global `Response` class, as defined in Web specifications.

***

# self

[`self`](https://developer.mozilla.org/en-US/docs/Web/API/Window/self) is an alias for [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), as defined in Web specifications.

The use of `globalThis` is recommended over `self`.

***

# setInterval

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) for more information.

The global `setInterval` function, as defined in Web specifications.

***

# setTimeout

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) for more information.

The global `setTimeout` function, as defined in Web specifications.

***

# URL

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/URL) for more information.

The global `URL` class, as defined in Web specifications.

***

# URLSearchParams

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) for more information.\\

The global `URLSearchParams` class, as defined in Web specifications.

***

# WebSocket

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) for more information.

The global `WebSocket` class, as defined in Web specifications.

***

# window

[`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) is an alias for [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), as defined in Web specifications.

The use of `globalThis` is recommended over `window`.

***

# XMLHttpRequest

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) for more information.

The global `XMLHttpRequest` class, as defined in Web specifications.

***

# Handling Text Input

[`TextInput`](/docs/textinput.md#content) is a [Core Component](/docs/intro-react-native-components.md) that allows the user to enter text. It has an `onChangeText` prop that takes a function to be called every time the text changed, and an `onSubmitEditing` prop that takes a function to be called when the text is submitted.

For example, let's say that as the user types, you're translating their words into a different language. In this new language, every single word is written the same way: 🍕. So the sentence "Hello there Bob" would be translated as "🍕 🍕 🍕".

In this example, we store `text` in the state, because it changes over time.

There are a lot more things you might want to do with a text input. For example, you could validate the text inside while the user types. For more detailed examples, see the [React docs on controlled components](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable), or the [reference docs for TextInput](/docs/textinput.md).

A `TextInput` is one of many ways for the user to interact with your app. For examples of other ways to handle input, see the documentation on [how to handle touches](/docs/handling-touches.md).

Now, let's take a look at [ScrollView](/docs/using-a-scrollview.md), another Core Component.

***
