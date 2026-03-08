Derived values

# Derived signals

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/derived-signals.mdx)

Derived signals are functions that rely on one or more [signals](/concepts/signals) to produce a value.

These functions are not executed immediately, but instead are only called when the values they rely on are changed. When the underlying signal is changed, the function will be called again to produce a new value.

```
const double = () => count() * 2;
```

In the above example, the `double` function relies on the `count` signal to produce a value. When the `count` signal is changed, the `double` function will be called again to produce a new value.

Similarly you can create a derived signal that relies on a store value because stores use signals under the hood. To learn more about how stores work, [you can visit the stores section](/concepts/stores).

```
const fullName = () => store.firstName + ' ' + store.lastName;
```

These dependent functions gain reactivity from the signal they access, ensuring that changes in the underlying data propagate throughout your application. It is important to note that these functions do not store a value themselves; instead, they can update any effects or components that depend on them. If included within a component's body, these derived signals will trigger an update when necessary.

While you can create derived values in this manner, Solid created the [`createMemo`](/reference/basic-reactivity/create-memo) primitive. To dive deeper into how memos work, [check out the memos section](/concepts/derived-values/memos).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/derived-values/derived-signals.mdx\&page=https://docs.solidjs.com/concepts/derived-values/derived-signals)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/derived-signals.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/derived-values/derived-signals.mdx\&page=https://docs.solidjs.com/concepts/derived-values/derived-signals)
