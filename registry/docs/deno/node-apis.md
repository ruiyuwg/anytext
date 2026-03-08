# Node APIs

> A guide to Node.js compatibility in Deno. Learn about supported Node.js built-in modules, global objects, and how to use Node.js packages in Deno projects.

URL: https://docs.deno.com/runtime/reference/node\_apis

Deno provides polyfills for a number of built-in Node.js modules and globals.

<a href="/api/node/" class="docs-cta runtime-cta">Explore built-in Node APIs</a>

Node compatibility is an ongoing project - help us identify gaps and let us know
which modules you need by
[opening an issue on GitHub](https://github.com/denoland/deno).

{{ await generateNodeCompatibility() }}

## Globals

This is the list of Node globals that Deno supports. These globals are only
available in the `npm` package scope. In your own code you can use them by
importing them from the relevant `node:` module.

| Global name                                                                                                      | Status                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`AbortController`](https://nodejs.org/api/globals.html#class-abortcontroller)                                   | ✅                                 |
| [`AbortSignal`](https://nodejs.org/api/globals.html#class-abortsignal)                                           | ✅                                 |
| [`Blob`](https://nodejs.org/api/globals.html#class-blob)                                                         | ✅                                 |
| [`Buffer`](https://nodejs.org/api/globals.html#class-buffer)                                                     | ✅                                 |
| [`ByteLengthQueuingStrategy`](https://nodejs.org/api/globals.html#class-bytelengthqueuingstrategy)               | ✅                                 |
| [`__dirname`](https://nodejs.org/api/globals.html#__dirname)                                                     | ⚠️ [Info](#node.js-global-objects) |
| [`__filename`](https://nodejs.org/api/globals.html#__filename)                                                   | ⚠️ [Info](#nodejs-global-objects)  |
| [`atob`](https://nodejs.org/api/globals.html#atobdata)                                                           | ✅                                 |
| [`BroadcastChannel`](https://nodejs.org/api/globals.html#broadcastchannel)                                       | ✅                                 |
| [`btoa`](https://nodejs.org/api/globals.html#btoadata)                                                           | ✅                                 |
| [`clearImmediate`](https://nodejs.org/api/globals.html#clearimmediateimmediateobject)                            | ✅                                 |
| [`clearInterval`](https://nodejs.org/api/globals.html#clearintervalintervalobject)                               | ✅                                 |
| [`clearTimeout`](https://nodejs.org/api/globals.html#cleartimeouttimeoutobject)                                  | ✅                                 |
| [`CompressionStream`](https://nodejs.org/api/globals.html#class-compressionstream)                               | ✅                                 |
| [`console`](https://nodejs.org/api/globals.html#console)                                                         | ✅                                 |
| [`CountQueuingStrategy`](https://nodejs.org/api/globals.html#class-countqueuingstrategy)                         | ✅                                 |
| [`Crypto`](https://nodejs.org/api/globals.html#crypto)                                                           | ✅                                 |
| [`CryptoKey`](https://nodejs.org/api/globals.html#cryptokey)                                                     | ✅                                 |
| [`CustomEvent`](https://nodejs.org/api/globals.html#customevent)                                                 | ✅                                 |
| [`CustomEvent`](https://nodejs.org/api/globals.html#customevent)                                                 | ✅                                 |
| [`DecompressionStream`](https://nodejs.org/api/globals.html#class-decompressionstream)                           | ✅                                 |
| [`Event`](https://nodejs.org/api/globals.html#event)                                                             | ✅                                 |
| [`EventTarget`](https://nodejs.org/api/globals.html#eventtarget)                                                 | ✅                                 |
| [`exports`](https://nodejs.org/api/globals.html#exports)                                                         | ✅                                 |
| [`fetch`](https://nodejs.org/api/globals.html#fetch)                                                             | ✅                                 |
| [`File`](https://nodejs.org/api/globals.html#class-file)                                                         | ✅                                 |
| [`FormData`](https://nodejs.org/api/globals.html#class-formdata)                                                 | ✅                                 |
| [`global`](https://nodejs.org/api/globals.html#global)                                                           | ✅                                 |
| [`Headers`](https://nodejs.org/api/globals.html#class-headers)                                                   | ✅                                 |
| [`MessageChannel`](https://nodejs.org/api/globals.html#messagechannel)                                           | ✅                                 |
| [`MessageEvent`](https://nodejs.org/api/globals.html#messageevent)                                               | ✅                                 |
| [`MessagePort`](https://nodejs.org/api/globals.html#messageport)                                                 | ✅                                 |
| [`module`](https://nodejs.org/api/globals.html#module)                                                           | ✅                                 |
| [`PerformanceEntry`](https://nodejs.org/api/globals.html#performanceentry)                                       | ✅                                 |
| [`PerformanceMark`](https://nodejs.org/api/globals.html#performancemark)                                         | ✅                                 |
| [`PerformanceMeasure`](https://nodejs.org/api/globals.html#performancemeasure)                                   | ✅                                 |
| [`PerformanceObserver`](https://nodejs.org/api/globals.html#performanceobserver)                                 | ✅                                 |
| [`PerformanceObserverEntryList`](https://nodejs.org/api/globals.html#performanceobserverentrylist)               | ❌                                 |
| [`PerformanceResourceTiming`](https://nodejs.org/api/globals.html#performanceresourcetiming)                     | ❌                                 |
| [`performance`](https://nodejs.org/api/globals.html#performance)                                                 | ✅                                 |
| [`process`](https://nodejs.org/api/globals.html#process)                                                         | ✅                                 |
| [`queueMicrotask`](https://nodejs.org/api/globals.html#queuemicrotaskcallback)                                   | ✅                                 |
| [`ReadableByteStreamController`](https://nodejs.org/api/globals.html#class-readablebytestreamcontroller)         | ✅                                 |
| [`ReadableStream`](https://nodejs.org/api/globals.html#class-readablestream)                                     | ✅                                 |
| [`ReadableStreamBYOBReader`](https://nodejs.org/api/globals.html#class-readablestreambyobreader)                 | ✅                                 |
| [`ReadableStreamBYOBRequest`](https://nodejs.org/api/globals.html#class-readablestreambyobrequest)               | ✅                                 |
| [`ReadableStreamDefaultController`](https://nodejs.org/api/globals.html#class-readablestreamdefaultcontroller)   | ✅                                 |
| [`ReadableStreamDefaultReader`](https://nodejs.org/api/globals.html#class-readablestreamdefaultreader)           | ✅                                 |
| [`require`](https://nodejs.org/api/globals.html#require)                                                         | ✅                                 |
| [`Response`](https://nodejs.org/api/globals.html#response)                                                       | ✅                                 |
| [`Request`](https://nodejs.org/api/globals.html#request)                                                         | ✅                                 |
| [`setImmediate`](https://nodejs.org/api/globals.html#setimmediatecallback-args)                                  | ✅                                 |
| [`setInterval`](https://nodejs.org/api/globals.html#setintervalcallback-delay-args)                              | ✅                                 |
| [`setTimeout`](https://nodejs.org/api/globals.html#settimeoutcallback-delay-args)                                | ✅                                 |
| [`structuredClone`](https://nodejs.org/api/globals.html#structuredclonevalue-options)                            | ✅                                 |
| [`structuredClone`](https://nodejs.org/api/globals.html#structuredclonevalue-options)                            | ✅                                 |
| [`SubtleCrypto`](https://nodejs.org/api/globals.html#subtlecrypto)                                               | ✅                                 |
| [`DOMException`](https://nodejs.org/api/globals.html#domexception)                                               | ✅                                 |
| [`TextDecoder`](https://nodejs.org/api/globals.html#textdecoder)                                                 | ✅                                 |
| [`TextDecoderStream`](https://nodejs.org/api/globals.html#class-textdecoderstream)                               | ✅                                 |
| [`TextEncoder`](https://nodejs.org/api/globals.html#textencoder)                                                 | ✅                                 |
| [`TextEncoderStream`](https://nodejs.org/api/globals.html#class-textencoderstream)                               | ✅                                 |
| [`TransformStream`](https://nodejs.org/api/globals.html#class-transformstream)                                   | ✅                                 |
| [`TransformStreamDefaultController`](https://nodejs.org/api/globals.html#class-transformstreamdefaultcontroller) | ✅                                 |
| [`URL`](https://nodejs.org/api/globals.html#url)                                                                 | ✅                                 |
| [`URLSearchParams`](https://nodejs.org/api/globals.html#urlsearchparams)                                         | ✅                                 |
| [`URLSearchParams`](https://nodejs.org/api/globals.html#urlsearchparams)                                         | ✅                                 |
| [`WebAssembly`](https://nodejs.org/api/globals.html#webassembly)                                                 | ✅                                 |
| [`WritableStream`](https://nodejs.org/api/globals.html#class-writablestream)                                     | ✅                                 |
| [`WritableStreamDefaultController`](https://nodejs.org/api/globals.html#class-writablestreamdefaultcontroller)   | ✅                                 |
| [`WritableStreamDefaultWriter`](https://nodejs.org/api/globals.html#class-writablestreamdefaultwriter)           | ✅                                 |

## Node test results

If you're interested in a more detailed view of compatibility on a per-test-case
basis, you can find a list of both passing and failing Node.js test cases on
[this page](https://node-test-viewer.deno.dev/).

***

# Standard Assertions (@std/assert)

> Common assertion functions, especially useful for testing

URL: https://docs.deno.com/runtime/reference/std/assert

<!-- Autogenerated from JSR docs. Do not edit directly. -->

## Overview

<p>A library of assertion functions.
If the assertion is false an <code>AssertionError</code> will be thrown which will
result in pretty-printed diff of the failing assertion.</p>
<p>This module is browser compatible, but do not rely on good formatting of
values for AssertionError messages in browsers.</p>

```js
import { assert } from "@std/assert";

assert("I am truthy"); // Doesn't throw
assert(false); // Throws `AssertionError`
```

### Add to your project

```sh
deno add jsr:@std/assert
```

<a href="https://jsr.io/@std/assert/doc" class="docs-cta jsr-cta">See all symbols in @std/assert on <svg class="inline ml-1" viewBox="0 0 13 7" aria-hidden="true" height="20"><path d="M0,2h2v-2h7v1h4v4h-2v2h-7v-1h-4" fill="#083344"></path><g fill="#f7df1e"><path d="M1,3h1v1h1v-3h1v4h-3"></path><path d="M5,1h3v1h-2v1h2v3h-3v-1h2v-1h-2"></path><path d="M9,2h3v2h-1v-1h-1v3h-1"></path></g></svg></a>

<!-- custom:start -->

<!-- Add persistent custom content below. This section is preserved across generations. -->

<!-- custom:end -->

***

# @std/async

> Utilities for asynchronous operations, like delays, debouncing, or pooling

URL: https://docs.deno.com/runtime/reference/std/async

<!-- Autogenerated from JSR docs. Do not edit directly. -->

## Overview

<p>Provide helpers with asynchronous tasks, like <a href="https://jsr.io/@std/async@1.2.0/doc/~/delay" rel="nofollow"><code>delay</code></a>,
<a href="https://jsr.io/@std/async@1.2.0/doc/~/debounce" rel="nofollow"><code>debounce</code></a>, <a href="https://jsr.io/@std/async@1.2.0/doc/~/retry" rel="nofollow"><code>retry</code></a>, or
<a href="https://jsr.io/@std/async@1.2.0/doc/~/pooledMap" rel="nofollow"><code>pooledMap</code></a>.</p>

```js
import { delay } from "@std/async/delay";

await delay(100); // waits for 100 milliseconds
```

### Add to your project

```sh
deno add jsr:@std/async
```

<a href="https://jsr.io/@std/async/doc" class="docs-cta jsr-cta">See all symbols in @std/async on <svg class="inline ml-1" viewBox="0 0 13 7" aria-hidden="true" height="20"><path d="M0,2h2v-2h7v1h4v4h-2v2h-7v-1h-4" fill="#083344"></path><g fill="#f7df1e"><path d="M1,3h1v1h1v-3h1v4h-3"></path><path d="M5,1h3v1h-2v1h2v3h-3v-1h2v-1h-2"></path><path d="M9,2h3v2h-1v-1h-1v3h-1"></path></g></svg></a>

<!-- custom:start -->

<!-- Add persistent custom content below. This section is preserved across generations. -->

<!-- custom:end -->

***

# @std/bytes

> Utilities to manipulate Uint8Arrays that are not built-in to JavaScript

URL: https://docs.deno.com/runtime/reference/std/bytes

<!-- Autogenerated from JSR docs. Do not edit directly. -->

## Overview

<p>Helper functions for working with
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" rel="nofollow"><code>Uint8Array</code></a>
byte slices.</p>

```js
import { concat, indexOfNeedle, endsWith } from "@std/bytes";
import { assertEquals } from "@std/assert";

const a = new Uint8Array([0, 1, 2]);
const b = new Uint8Array([3, 4, 5]);

const c = concat([a, b]);

assertEquals(c, new Uint8Array([0, 1, 2, 3, 4, 5]));

assertEquals(indexOfNeedle(c, new Uint8Array([2, 3])), 2);

assertEquals(endsWith(c, b), true);
```

### Add to your project

```sh
deno add jsr:@std/bytes
```

<a href="https://jsr.io/@std/bytes/doc" class="docs-cta jsr-cta">See all symbols in @std/bytes on <svg class="inline ml-1" viewBox="0 0 13 7" aria-hidden="true" height="20"><path d="M0,2h2v-2h7v1h4v4h-2v2h-7v-1h-4" fill="#083344"></path><g fill="#f7df1e"><path d="M1,3h1v1h1v-3h1v4h-3"></path><path d="M5,1h3v1h-2v1h2v3h-3v-1h2v-1h-2"></path><path d="M9,2h3v2h-1v-1h-1v3h-1"></path></g></svg></a>

<!-- custom:start -->

<!-- Add persistent custom content below. This section is preserved across generations. -->

<!-- custom:end -->

***

# @std/cache

> Cache utilities

URL: https://docs.deno.com/runtime/reference/std/cache

<!-- Autogenerated from JSR docs. Do not edit directly. -->

:::info Unstable

This @std package is experimental and its API may change without a major version bump.

:::

## Overview

<p>In-memory cache utilities, such as memoization and caches with different
expiration policies.</p>

```js
import { memoize, LruCache, type MemoizationCacheResult } from "@std/cache";
import { assertEquals } from "@std/assert";

const cache = new LruCache<string, MemoizationCacheResult>(1000);

// fibonacci function, which is very slow for n > ~30 if not memoized
const fib = memoize((n: bigint): bigint => {
  return n <= 2n ? 1n : fib(n - 1n) + fib(n - 2n);
}, { cache });

assertEquals(fib(100n), 354224848179261915075n);
```

### Add to your project

```sh
deno add jsr:@std/cache
```

<a href="https://jsr.io/@std/cache/doc" class="docs-cta jsr-cta">See all symbols in @std/cache on <svg class="inline ml-1" viewBox="0 0 13 7" aria-hidden="true" height="20"><path d="M0,2h2v-2h7v1h4v4h-2v2h-7v-1h-4" fill="#083344"></path><g fill="#f7df1e"><path d="M1,3h1v1h1v-3h1v4h-3"></path><path d="M5,1h3v1h-2v1h2v3h-3v-1h2v-1h-2"></path><path d="M9,2h3v2h-1v-1h-1v3h-1"></path></g></svg></a>

<!-- custom:start -->

<!-- Add persistent custom content below. This section is preserved across generations. -->

<!-- custom:end -->

***
