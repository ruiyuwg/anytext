# BFCACHE\_INTEGRITY\_NO\_UNLOAD\_LISTENERS

> **🔒 Permissions Required**: Conformance

This rule disallows the use of the `unload` and `beforeunload` events to improve the integrity of the Back-Forward Cache in browsers.

The Back-Forward Cache (bfcache) is a browser feature that allows pages to be cached in memory when the user navigates
away from them. When the user navigates back to the page, it can be loaded almost instantly from the cache instead of
having to be reloaded from the network. Breaking the bfcache's integrity can cause a page to be reloaded from the network
when the user navigates back to it, which can be slow and jarring.

The most important rule for maintaining the integrity of the bfcache is to not use the `unload` event. This event is fired
when the user navigates away from the page, but it is unreliable and disables the cache on most browsers.

The `beforeunload` event can also make your page ineligible for the cache in browsers so it is better to avoid using.
However there are some legitimate use cases for this event, such as checking if the user has unsaved work before they exit
the page. In this case it is recommended to add the listener conditionally and remove it as soon as the work as been saved.

Alternative events that can be considered are `pagehide` or `visibilitychange`, which are more reliable
events that do not break the bfcache and will fire when the user navigates away from or unfocuses the page.

To learn more about the bfcache, see the [web.dev docs](https://web.dev/bfcache).

## Related Rules

- [BFCACHE\_INTEGRITY\_REQUIRE\_NOOPENER\_ATTRIBUTE](/docs/conformance/rules/BFCACHE_INTEGRITY_REQUIRE_NOOPENER_ATTRIBUTE)

## Example

Two examples of when this check would fail:

```ts filename="src/utils/handle-user-navigation.ts"
export function handleUserNavigatingAway() {
  window.onunload = (event) => {
    console.log('Page has unloaded.');
  };
}

export function handleUserAboutToNavigateAway() {
  window.onbeforeunload = (event) => {
    console.log('Page is about to be unloaded.');
  };
}
```

```ts filename="src/utils/handle-user-navigation.ts"
export function handleUserNavigatingAway() {
  window.addEventListener('unload', (event) => {
    console.log('Page has unloaded.');
  });
}

export function handleUserAboutToNavigateAway() {
  window.addEventListener('beforeunload', (event) => {
    console.log('Page is about to be unloaded.');
  });
}
```

## How to fix

Instead, we can use the `pagehide` event to detect when the user navigates away from the page.

```ts filename="src/utils/handle-user-navigation.ts"
export function handleUserNavigatingAway() {
  window.onpagehide = (event) => {
    console.log('Page is about to be hidden.');
  };
}
```

```ts filename="src/utils/handle-user-navigation.ts"
export function handleUserNavigatingAway() {
  window.addEventListener('pagehide', (event) => {
    console.log('Page is about to be hidden.');
  });
}
```

title: "BFCACHE\_INTEGRITY\_REQUIRE\_NOOPENER\_ATTRIBUTE"
description: "Requires that links opened with window.open use the noopener attribute to eliminate a source of eviction from the browser"
last\_updated: "2026-03-23T09:40:07.495Z"
source: "https://vercel.com/docs/conformance/rules/BFCACHE\_INTEGRITY\_REQUIRE\_NOOPENER\_ATTRIBUTE"

# BFCACHE\_INTEGRITY\_REQUIRE\_NOOPENER\_ATTRIBUTE

> **🔒 Permissions Required**: Conformance

The Back-Forward Cache (bfcache) is a browser feature that allows pages to be cached in memory when the user navigates
away from them. When the user navigates back to the page, it can be loaded almost instantly from the cache instead of
having to be reloaded from the network. Breaking the bfcache's integrity can cause a page to be reloaded from the network
when the user navigates back to it, which can be slow and jarring.

Pages opened with `window.open` that do not use the `noopener` attribute can both be a security risk and also will
prevent browsers from caching the page in the bfcache. This is because the new window can access the `window.opener` property
of the original window, so putting the original page into the bfcache could break the new window when attempting to access it.

Using the `noreferrer` attribute will also set the `noopener` attribute to true, so it can also be used to ensure
the page is placed into the bfcache.

To learn more about the bfcache, see the [web.dev docs](https://web.dev/bfcache).

## Related Rules

- [BFCACHE\_INTEGRITY\_NO\_UNLOAD\_LISTENERS](/docs/conformance/rules/BFCACHE_INTEGRITY_NO_UNLOAD_LISTENERS)

## Example

Examples of when this check would fail:

```ts
window.open('https://example.com', '_blank');
window.open('https://example.com');
```

## How to fix

Instead, use the `noopener` or `noreferrer` attributes:

```ts
window.open('https://example.com', '_blank', 'noopener');
window.open('https://example.com', '_top', 'noreferrer');
```

title: "ESLINT\_CONFIGURATION"
description: "Requires that a workspace package has ESLint installed and configured correctly"
last\_updated: "2026-03-23T09:40:07.500Z"
source: "https://vercel.com/docs/conformance/rules/ESLINT\_CONFIGURATION"
