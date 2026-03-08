# Reference

## Constructor[​](#constructor "Direct link to Constructor")

### `IntersectionObserver()`[​](#intersectionobserver "Direct link to intersectionobserver")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver).

Creates a new `IntersectionObserver` object which will execute a specified callback function when it detects that a target element's visibility has crossed one or more `threshold` or `rnRootThreshold` values.

ts

```
new IntersectionObserver(callback, options?)
```

#### Parameters[​](#parameters "Direct link to Parameters")

**`callback`**

A function which is called when the percentage of the target element is visible crosses a threshold. The callback receives two parameters:

- `entries`: An array of [`IntersectionObserverEntry`](/docs/global-intersectionobserverentry.md) objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
- `observer`: The `IntersectionObserver` instance which invoked the callback.

**`options`** (optional)

An optional object with the following properties:

| Name                 | Type                                      | Description                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`               | [Element](/docs/element-nodes.md) | null | An element that is an ancestor of the target, whose bounding rectangle will be considered the viewport. Defaults to the root viewport if not specified or if `null`.                                              |
| `rootMargin`         | string                                    | A string which specifies a set of offsets to add to the root's bounding box when calculating intersections. Defaults to `"0px 0px 0px 0px"`.                                                                      |
| `threshold`          | number | number\[]                       | Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target. Defaults to `[0]` if `rnRootThreshold` is not set. |
| `rnRootThreshold` ⚠️ | number | number\[]                       | **React Native specific.** Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to the total root area.                                                     |

## Instance properties[​](#instance-properties "Direct link to Instance properties")

### `root`[​](#root "Direct link to root")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root).

The element or document whose bounds are used as the bounding box when testing for intersection.

### `rootMargin`[​](#rootmargin "Direct link to rootmargin")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).

An offset rectangle applied to the root's bounding box when calculating intersections.

### `rnRootThresholds` ⚠️[​](#rnrootthresholds-️ "Direct link to rnrootthresholds-️")

Non-standard

This is a React Native specific extension.

A list of root thresholds, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of the specified root view, which defaults to the viewport.

Notifications for a target are generated when any of the thresholds specified in `rnRootThresholds` or `thresholds` are crossed for that target.

ts

```
get rnRootThresholds(): ReadonlyArray<number> | null;
```

### `thresholds`[​](#thresholds "Direct link to thresholds")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds).

A list of thresholds, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of an observed target.

Notifications for a target are generated when any of the thresholds specified in `rnRootThresholds` or `thresholds` are crossed for that target.

## Instance methods[​](#instance-methods "Direct link to Instance methods")

### `disconnect()`[​](#disconnect "Direct link to disconnect")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect).

Stops the `IntersectionObserver` object from observing any target.

### `observe()`[​](#observe "Direct link to observe")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe).

Tells the `IntersectionObserver` to begin observing a target element.

### `takeRecords()`[​](#takerecords "Direct link to takerecords")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords).

Returns an array of `IntersectionObserverEntry` objects for all observed targets.

### `unobserve()`[​](#unobserve "Direct link to unobserve")

See [documentation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve).

Tells the `IntersectionObserver` to stop observing a particular target element.

***

# IntersectionObserverEntry 🧪

Canary 🧪

**This API is currently only available in React Native’s Canary and Experimental channels.**

If you want to try it out, please [enable the Canary Channel](/docs/releases/release-levels.md) in your app.

The [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) interface, as defined in Web specifications. It describes the intersection between the target element and its root container at a specific moment of transition.

Instances of `IntersectionObserverEntry` are delivered to an [`IntersectionObserver`](/docs/global-intersectionobserver.md) callback in its `entries` parameter.

***
