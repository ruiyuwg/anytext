On this page

Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page](/docs/api/class-page "Page"):

-   [page.on('request')](/docs/api/class-page#page-event-request) emitted when the request is issued by the page.
-   [page.on('response')](/docs/api/class-page#page-event-response) emitted when/if the response status and headers are received for the request.
-   [page.on('requestfinished')](/docs/api/class-page#page-event-request-finished) emitted when the response body is downloaded and the request is complete.

If request fails at some point, then instead of `'requestfinished'` event (and possibly instead of 'response' event), the [page.on('requestfailed')](/docs/api/class-page#page-event-request-failed) event is emitted.

note

HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with `'requestfinished'` event.

If request gets a 'redirect' response, the request is successfully finished with the `requestfinished` event, and a new request is issued to a redirected url.

* * *

## Methods[​](#methods "Direct link to Methods")

### allHeaders[​](#request-all-headers "Direct link to allHeaders")

Added in: v1.15 request.allHeaders

An object with all the request HTTP headers associated with this request. The header names are lower-cased.

**Usage**

```
await request.allHeaders();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#request-all-headers-return)

* * *

### failure[​](#request-failure "Direct link to failure")

Added before v1.9 request.failure

The method returns `null` unless this request has failed, as reported by `requestfailed` event.

**Usage**

Example of logging of all the failed requests:

```
page.on('requestfailed', request => {  console.log(request.url() + ' ' + request.failure().errorText);});
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#request-failure-return)
    -   `errorText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Human-readable error message, e.g. `'net::ERR_FAILED'`.
        

* * *

### frame[​](#request-frame "Direct link to frame")

Added before v1.9 request.frame

Returns the [Frame](/docs/api/class-frame "Frame") that initiated this request.

**Usage**

```
const frameUrl = request.frame().url();
```

**Returns**

-   [Frame](/docs/api/class-frame "Frame")[#](#request-frame-return)

**Details**

Note that in some cases the frame is not available, and this method will throw.

-   When request originates in the Service Worker. You can use `request.serviceWorker()` to check that.
-   When navigation request is issued before the corresponding frame is created. You can use [request.isNavigationRequest()](/docs/api/class-request#request-is-navigation-request) to check that.

Here is an example that handles all the cases:

```
if (request.serviceWorker())  console.log(`request ${request.url()} from a service worker`);else if (request.isNavigationRequest())  console.log(`request ${request.url()} is a navigation request`);else  console.log(`request ${request.url()} from a frame ${request.frame().url()}`);
```

* * *

### headerValue[​](#request-header-value "Direct link to headerValue")

Added in: v1.15 request.headerValue

Returns the value of the header matching the name. The name is case-insensitive.

**Usage**

```
await request.headerValue(name);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#request-header-value-option-name)
    
    Name of the header.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#request-header-value-return)

* * *

### headers[​](#request-headers "Direct link to headers")

Added before v1.9 request.headers

An object with the request HTTP headers. The header names are lower-cased. Note that this method does not return security-related headers, including cookie-related ones. You can use [request.allHeaders()](/docs/api/class-request#request-all-headers) for complete list of headers that include `cookie` information.

**Usage**

```
request.headers();
```

**Returns**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#request-headers-return)

* * *

### headersArray[​](#request-headers-array "Direct link to headersArray")

Added in: v1.15 request.headersArray

An array with all the request HTTP headers associated with this request. Unlike [request.allHeaders()](/docs/api/class-request#request-all-headers), header names are NOT lower-cased. Headers with multiple entries, such as `Set-Cookie`, appear in the array multiple times.

**Usage**

```
await request.headersArray();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>>[#](#request-headers-array-return)
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Name of the header.
        
    -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Value of the header.
        

* * *

### isNavigationRequest[​](#request-is-navigation-request "Direct link to isNavigationRequest")

Added before v1.9 request.isNavigationRequest

Whether this request is driving frame's navigation.

Some navigation requests are issued before the corresponding frame is created, and therefore do not have [request.frame()](/docs/api/class-request#request-frame) available.

**Usage**

```
request.isNavigationRequest();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#request-is-navigation-request-return)

* * *

### method[​](#request-method "Direct link to method")

Added before v1.9 request.method

Request's method (GET, POST, etc.)

**Usage**

```
request.method();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#request-method-return)

* * *

### postData[​](#request-post-data "Direct link to postData")

Added before v1.9 request.postData

Request's post body, if any.

**Usage**

```
request.postData();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#request-post-data-return)

* * *

### postDataBuffer[​](#request-post-data-buffer "Direct link to postDataBuffer")

Added before v1.9 request.postDataBuffer

Request's post body in a binary form, if any.

**Usage**

```
request.postDataBuffer();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")[#](#request-post-data-buffer-return)

* * *

### postDataJSON[​](#request-post-data-json "Direct link to postDataJSON")

Added before v1.9 request.postDataJSON

Returns parsed request's body for `form-urlencoded` and JSON as a fallback if any.

When the response is `application/x-www-form-urlencoded` then a key/value object of the values will be returned. Otherwise it will be parsed as JSON.

**Usage**

```
request.postDataJSON();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")[#](#request-post-data-json-return)

* * *

### redirectedFrom[​](#request-redirected-from "Direct link to redirectedFrom")

Added before v1.9 request.redirectedFrom

Request that was redirected by the server to this one, if any.

When the server responds with a redirect, Playwright creates a new [Request](/docs/api/class-request "Request") object. The two requests are connected by `redirectedFrom()` and `redirectedTo()` methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling `redirectedFrom()`.

**Usage**

For example, if the website `http://example.com` redirects to `https://example.com`:

```
const response = await page.goto('http://example.com');console.log(response.request().redirectedFrom().url()); // 'http://example.com'
```

If the website `https://google.com` has no redirects:

```
const response = await page.goto('https://google.com');console.log(response.request().redirectedFrom()); // null
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Request](/docs/api/class-request "Request")[#](#request-redirected-from-return)

* * *

### redirectedTo[​](#request-redirected-to "Direct link to redirectedTo")

Added before v1.9 request.redirectedTo

New request issued by the browser if the server responded with redirect.

**Usage**

This method is the opposite of [request.redirectedFrom()](/docs/api/class-request#request-redirected-from):

```
console.log(request.redirectedFrom().redirectedTo() === request); // true
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Request](/docs/api/class-request "Request")[#](#request-redirected-to-return)

* * *

### resourceType[​](#request-resource-type "Direct link to resourceType")

Added before v1.9 request.resourceType

Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: `document`, `stylesheet`, `image`, `media`, `font`, `script`, `texttrack`, `xhr`, `fetch`, `eventsource`, `websocket`, `manifest`, `other`.

**Usage**

```
request.resourceType();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#request-resource-type-return)

* * *

### response[​](#request-response "Direct link to response")

Added before v1.9 request.response

Returns the matching [Response](/docs/api/class-response "Response") object, or `null` if the response was not received due to error.

**Usage**

```
await request.response();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#request-response-return)

* * *

### serviceWorker[​](#request-service-worker "Direct link to serviceWorker")

Added in: v1.24 request.serviceWorker

The Service [Worker](/docs/api/class-worker "Worker") that is performing the request.

**Usage**

```
request.serviceWorker();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Worker](/docs/api/class-worker "Worker")[#](#request-service-worker-return)

**Details**

This method is Chromium only. It's safe to call when using other browsers, but it will always be `null`.

Requests originated in a Service Worker do not have a [request.frame()](/docs/api/class-request#request-frame) available.

* * *

### sizes[​](#request-sizes "Direct link to sizes")

Added in: v1.15 request.sizes

Returns resource size information for given request.

**Usage**

```
await request.sizes();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#request-sizes-return)
    -   `requestBodySize` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Size of the request body (POST data payload) in bytes. Set to 0 if there was no body.
        
    -   `requestHeadersSize` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body.
        
    -   `responseBodySize` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Size of the received response body (encoded) in bytes.
        
    -   `responseHeadersSize` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.
        

* * *

### timing[​](#request-timing "Direct link to timing")

Added before v1.9 request.timing

Returns resource timing information for given request. Most of the timing values become available upon the response, `responseEnd` becomes available when request finishes. Find more information at [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming).

**Usage**

```
const requestFinishedPromise = page.waitForEvent('requestfinished');await page.goto('http://example.com');const request = await requestFinishedPromise;console.log(request.timing());
```

**Returns**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#request-timing-return)
    -   `startTime` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC
        
    -   `domainLookupStart` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `domainLookupEnd` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `connectStart` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `secureConnectionStart` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `connectEnd` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `requestStart` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `responseStart` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately after the browser receives the first byte of the response from the server, cache, or local resource. The value is given in milliseconds relative to `startTime`, -1 if not available.
        
    -   `responseEnd` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to `startTime`, -1 if not available.
        

* * *

### url[​](#request-url "Direct link to url")

Added before v1.9 request.url

URL of the request.

**Usage**

```
request.url();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#request-url-return)
