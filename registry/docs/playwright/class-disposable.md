Version: Next

On this page

[Disposable](/docs/next/api/class-disposable "Disposable") is returned from various methods to allow undoing the corresponding action. For example, [page.addInitScript()](/docs/next/api/class-page#page-add-init-script) returns a [Disposable](/docs/next/api/class-disposable "Disposable") that can be used to remove the init script.

* * *

## Methods[​](#methods "Direct link to Methods")

### dispose[​](#disposable-dispose "Direct link to dispose")

Added in: v1.59 disposable.dispose

Removes the associated resource. For example, removes the init script installed via [page.addInitScript()](/docs/next/api/class-page#page-add-init-script) or [browserContext.addInitScript()](/docs/next/api/class-browsercontext#browser-context-add-init-script).

**Usage**

```
await disposable.dispose();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#disposable-dispose-return)
