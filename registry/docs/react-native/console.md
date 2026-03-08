# console

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/console) for more information.

The global `console` object, as defined in Web specifications.

***

## Methods[​](#methods "Direct link to Methods")

### `timeStamp()`[​](#timestamp "Direct link to timestamp")

tsx

```
console.timeStamp(
  label: string,
  start?: string | number,
  end?: string | number,
  trackName?: string,
  trackGroup?: string,
  color?: DevToolsColor
): void;
```

The `console.timeStamp` API allows you to add custom timing entries in the Performance panel timeline.

**Parameters:**

| Name       | Type               | Required | Description                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label      | `string`           | Yes      | The label for the timing entry.                                                                                                                                                                                                                                                             |
| start      | `string \| number` | No       | - If string, the name of a previously recorded timestamp with `console.timeStamp`.- If number, the [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp). For example, from `performance.now()`.- If undefined, the current time is used. |
| end        | `string \| number` | No       | - If string, the name of a previously recorded timestamp with `console.timeStamp`.- If number, the [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp). For example, from `performance.now()`.- If undefined, the current time is used. |
| trackName  | `string`           | No       | The name of the custom track.                                                                                                                                                                                                                                                               |
| trackGroup | `string`           | No       | The name of the track group.                                                                                                                                                                                                                                                                |
| color      | `DevToolsColor`    | No       | The color of the entry.                                                                                                                                                                                                                                                                     |

tsx

```
type DevToolsColor =
  | 'primary'
  | 'primary-light'
  | 'primary-dark'
  | 'secondary'
  | 'secondary-light'
  | 'secondary-dark'
  | 'tertiary'
  | 'tertiary-light'
  | 'tertiary-dark'
  | 'warning'
  | 'error';
```

***

# EventCounts

The global [`EventCounts`](https://developer.mozilla.org/en-US/docs/Web/API/EventCounts) class, as defined in Web specifications.

***

# fetch

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) for more information.

The global `fetch` function, as defined in Web specifications.

***

# File

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/File) for more information.

The global `File` class, as defined in Web specifications.

***

# FileReader

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) for more information.

The global `FileReader` class, as defined in Web specifications.

***

# FormData

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/FormData) for more information.

The global `FormData` class, as defined in Web specifications.

***

# global

[`global`](https://nodejs.org/api/globals.html#global) is a legacy alias for [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), as defined in Node.js.

The use of `globalThis` is recommended over `global`.

***

# Headers

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Headers) for more information.

The global `Headers` class, as defined in Web specifications.

***

# IntersectionObserver 🧪

Canary 🧪

**This API is currently only available in React Native’s Canary and Experimental channels.**

If you want to try it out, please [enable the Canary Channel](/docs/releases/release-levels.md) in your app.

The global [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) interface, as defined in Web specifications. It provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

***
