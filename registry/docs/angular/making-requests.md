Skip to main content

menu

menuDocs

- Introduction

  - [What is Angular?](/overview)
  - [Installation](/installation)
  - Essentials
  - [Start coding! 🚀](/tutorials/learn-angular)

- In-depth Guides

  - Signals Updated
  - Components
  - Templates
  - Directives
  - Dependency Injection Updated
  - Routing Updated
  - Forms Updated
  - HTTP Client
  - Server-side & hybrid-rendering
  - Testing
  - Angular Aria New
  - Internationalization
  - Animations Updated
  - [Drag and drop](/guide/drag-drop)

- Build with AI New

  - [Get Started](/ai)
  - [LLM prompts and AI IDE setup](/ai/develop-with-ai)
  - [Design Patterns](/ai/design-patterns)
  - [Angular CLI MCP Server setup](/ai/mcp)
  - [Angular AI Tutor](/ai/ai-tutor)

- Developer Tools

  - Angular CLI
  - Libraries
  - DevTools
  - [Language Service](/tools/language-service)

- Best Practices

  - [Style Guide Updated](/style-guide)
  - [Security](/best-practices/security)
  - [Accessibility](/best-practices/a11y)
  - [Unhandled errors in Angular](/best-practices/error-handling)
  - Performance
  - [Keeping up-to-date](/update)

- Developer Events

  - [Angular v21 Release New](/events/v21)

- Extended Ecosystem

  - [NgModules](/guide/ngmodules/overview)
  - Legacy Animations
  - Using RxJS with Angular
  - Service Workers & PWAs
  - [Web workers](/ecosystem/web-workers)
  - [Custom build pipeline](/ecosystem/custom-build-pipeline)
  - [Tailwind New](/guide/tailwind)
  - [Angular Fire](https://github.com/angular/angularfire#readme)
  - [Google Maps](https://github.com/angular/components/tree/main/src/google-maps#readme)
  - [Google Pay](https://github.com/google-pay/google-pay-button#angular)
  - [YouTube player](https://github.com/angular/components/blob/main/src/youtube-player/README.md)
  - [Angular CDK](https://material.angular.dev/cdk/categories)
  - [Angular Material](https://material.angular.dev/)

- arrow\_back HTTP Client
  - [Overview](/guide/http)
  - [Setting up HttpClient](/guide/http/setup)
  - [Making requests](/guide/http/making-requests)
  - [Reactive data fetching with httpResource](/guide/http/http-resource)
  - [Intercepting requests and responses](/guide/http/interceptors)
  - [Testing](/guide/http/testing)

[`HttpClient`](/api/common/http/HttpClient) has methods corresponding to the different HTTP verbs used to make requests, both to load data and to apply mutations on the server. Each method returns an [RxJS `Observable`](https://rxjs.dev/guide/observable) which, when subscribed, sends the request and then emits the results when the server responds.

**NOTE:** `Observable`s created by [`HttpClient`](/api/common/http/HttpClient) may be subscribed any number of times and will make a new backend request for each subscription.

Through an options object passed to the request method, various properties of the request and the returned response type can be adjusted.

arrow\_upward\_alt Back to the top

## [Fetching JSON data](#fetching-json-data)

Fetching data from a backend often requires making a GET request using the [](api/common/http/HttpClient#get)[`HttpClient.get()`](/api/common/http/HttpClient#get) method. This method takes two arguments: the string endpoint URL from which to fetch, and an *optional options* object to configure the request.

For example, to fetch configuration data from a hypothetical API using the [`HttpClient.get()`](/api/common/http/HttpClient#get) method:

```
http.get<Config>('/api/config').subscribe((config) => {  // process the configuration.});
```

Note the generic type argument which specifies that the data returned by the server will be of type `Config`. This argument is optional, and if you omit it then the returned data will have type `Object`.

**TIP:** When dealing with data of uncertain structure and potential `undefined` or `null` values, consider using the `unknown` type instead of `Object` as the response type.

**CRITICAL:** The generic type of request methods is a type **assertion** about the data returned by the server. [`HttpClient`](/api/common/http/HttpClient) does not verify that the actual return data matches this type.

## [Fetching other types of data](#fetching-other-types-of-data)

By default, [`HttpClient`](/api/common/http/HttpClient) assumes that servers will return JSON data. When interacting with a non-JSON API, you can tell [`HttpClient`](/api/common/http/HttpClient) what response type to expect and return when making the request. This is done with the `responseType` option.

**`responseType` value**

**Returned response type**

`'json'` (default)

JSON data of the given generic type

`'text'`

string data

`'arraybuffer'`

[`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the raw response bytes

`'blob'`

[`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) instance

For example, you can ask [`HttpClient`](/api/common/http/HttpClient) to download the raw bytes of a `.jpeg` image into an `ArrayBuffer`:

```
http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe((buffer) => {  console.log('The image is ' + buffer.byteLength + ' bytes large');});
```

### Literal value for `responseType`

Because the value of `responseType` affects the type returned by [`HttpClient`](/api/common/http/HttpClient), it must have a literal type and not a `string` type.

This happens automatically if the options object passed to the request method is a literal object, but if you're extracting the request options out into a variable or helper method you might need to explicitly specify it as a literal, such as `responseType: 'text' as const`.

## [Mutating server state](#mutating-server-state)

Server APIs which perform mutations often require making POST requests with a request body specifying the new state or the change to be made.

The [](api/common/http/HttpClient#post)[`HttpClient.post()`](/api/common/http/HttpClient#post) method behaves similarly to `get()`, and accepts an additional `body` argument before its options:

```
http.post<Config>('/api/config', newConfig).subscribe((config) => {  console.log('Updated config:', config);});
```

Many different types of values can be provided as the request's `body`, and [`HttpClient`](/api/common/http/HttpClient) will serialize them accordingly:

**`body` type**

**Serialized as**

string

Plain text

number, boolean, array, or plain object

JSON

[`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

raw data from the buffer

[`Blob`](https://developer.mozilla.org/docs/Web/API/Blob)

raw data with the `Blob`'s content type

[`FormData`](https://developer.mozilla.org/docs/Web/API/FormData)

`multipart/form-data` encoded data

[](api/common/http/HttpParams)[`HttpParams`](/api/common/http/HttpParams) or [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams)

`application/x-www-form-urlencoded` formatted string

**IMPORTANT:** Remember to `.subscribe()` to mutation request `Observable`s in order to actually fire the request.

## [Setting URL parameters](#setting-url-parameters)

Specify request parameters that should be included in the request URL using the `params` option.

Passing an object literal is the simplest way of configuring URL parameters:

```
http  .get('/api/config', {    params: {filter: 'all'},  })  .subscribe((config) => {    // ...  });
```

Alternatively, pass an instance of [`HttpParams`](/api/common/http/HttpParams) if you need more control over the construction or serialization of the parameters.

**IMPORTANT:** Instances of [`HttpParams`](/api/common/http/HttpParams) are *immutable* and cannot be directly changed. Instead, mutation methods such as `append()` return a new instance of [`HttpParams`](/api/common/http/HttpParams) with the mutation applied.

```
const baseParams = new HttpParams().set('filter', 'all');http  .get('/api/config', {    params: baseParams.set('details', 'enabled'),  })  .subscribe((config) => {    // ...  });
```

You can instantiate [`HttpParams`](/api/common/http/HttpParams) with a custom [`HttpParameterCodec`](/api/common/http/HttpParameterCodec) that determines how [`HttpClient`](/api/common/http/HttpClient) will encode the parameters into the URL.

### [Custom parameter encoding](#custom-parameter-encoding)

By default, [`HttpParams`](/api/common/http/HttpParams) uses the built-in [](api/common/http/HttpUrlEncodingCodec)[`HttpUrlEncodingCodec`](/api/common/http/HttpUrlEncodingCodec) to encode and decode parameter keys and values.

You can provide your own implementation of [](api/common/http/HttpParameterCodec)[`HttpParameterCodec`](/api/common/http/HttpParameterCodec) to customize how encoding and decoding are applied.

```
import {HttpClient, HttpParams, HttpParameterCodec} from '@angular/common/http';import {inject} from '@angular/core';export class CustomHttpParamEncoder implements HttpParameterCodec {  encodeKey(key: string): string {    return encodeURIComponent(key);  }  encodeValue(value: string): string {    return encodeURIComponent(value);  }  decodeKey(key: string): string {    return decodeURIComponent(key);  }  decodeValue(value: string): string {    return decodeURIComponent(value);  }}export class ApiService {  private http = inject(HttpClient);  search() {    const params = new HttpParams({      encoder: new CustomHttpParamEncoder(),    })      .set('email', 'dev+alerts@example.com')      .set('q', 'a & b? c/d = e');    return this.http.get('/api/items', {params});  }}
```

## [Setting request headers](#setting-request-headers)

Specify request headers that should be included in the request using the `headers` option.

Passing an object literal is the simplest way of configuring request headers:

```
http  .get('/api/config', {    headers: {      'X-Debug-Level': 'verbose',    },  })  .subscribe((config) => {    // ...  });
```

Alternatively, pass an instance of [`HttpHeaders`](/api/common/http/HttpHeaders) if you need more control over the construction of headers

**IMPORTANT:** Instances of [`HttpHeaders`](/api/common/http/HttpHeaders) are *immutable* and cannot be directly changed. Instead, mutation methods such as `append()` return a new instance of [`HttpHeaders`](/api/common/http/HttpHeaders) with the mutation applied.

```
const baseHeaders = new HttpHeaders().set('X-Debug-Level', 'minimal');http  .get<Config>('/api/config', {    headers: baseHeaders.set('X-Debug-Level', 'verbose'),  })  .subscribe((config) => {    // ...  });
```

## [Interacting with the server response events](#interacting-with-the-server-response-events)

For convenience, [`HttpClient`](/api/common/http/HttpClient) by default returns an `Observable` of the data returned by the server (the response body). Occasionally it's desirable to examine the actual response, for example to retrieve specific response headers.

To access the entire response, set the `observe` option to `'response'`:

```
http.get<Config>('/api/config', {observe: 'response'}).subscribe((res) => {  console.log('Response status:', res.status);  console.log('Body:', res.body);});
```

### Literal value for `observe`

Because the value of `observe` affects the type returned by [`HttpClient`](/api/common/http/HttpClient), it must have a literal type and not a `string` type.

This happens automatically if the options object passed to the request method is a literal object, but if you're extracting the request options out into a variable or helper method you might need to explicitly specify it as a literal, such as `observe: 'response' as const`.

## [Receiving raw progress events](#receiving-raw-progress-events)

In addition to the response body or response object, [`HttpClient`](/api/common/http/HttpClient) can also return a stream of raw *events* corresponding to specific moments in the request lifecycle. These events include when the request is sent, when the response header is returned, and when the body is complete. These events can also include *progress events* which report upload and download status for large request or response bodies.

Progress events are disabled by default (as they have a performance cost) but can be enabled with the `reportProgress` option.

**NOTE:** The optional `fetch` implementation of [`HttpClient`](/api/common/http/HttpClient) does not report *upload* progress events.

To observe the event stream, set the `observe` option to `'events'`:

```
http  .post('/api/upload', myData, {    reportProgress: true,    observe: 'events',  })  .subscribe((event) => {    switch (event.type) {      case HttpEventType.UploadProgress:        console.log('Uploaded ' + event.loaded + ' out of ' + event.total + ' bytes');        break;      case HttpEventType.Response:        console.log('Finished uploading!');        break;    }  });
```

### Literal value for `observe`

Because the value of `observe` affects the type returned by [`HttpClient`](/api/common/http/HttpClient), it must have a literal type and not a `string` type.

This happens automatically if the options object passed to the request method is a literal object, but if you're extracting the request options out into a variable or helper method you might need to explicitly specify it as a literal, such as `observe: 'events' as const`.

Each [`HttpEvent`](/api/common/http/HttpEvent) reported in the event stream has a `type` which distinguishes what the event represents:

**`type` value**

**Event meaning**

[`HttpEventType.Sent`](/api/common/http/HttpEventType#Sent)

The request has been dispatched to the server

[`HttpEventType.UploadProgress`](/api/common/http/HttpEventType#UploadProgress)

An [`HttpUploadProgressEvent`](/api/common/http/HttpUploadProgressEvent) reporting progress on uploading the request body

[`HttpEventType.ResponseHeader`](/api/common/http/HttpEventType#ResponseHeader)

The head of the response has been received, including status and headers

[`HttpEventType.DownloadProgress`](/api/common/http/HttpEventType#DownloadProgress)

An [`HttpDownloadProgressEvent`](/api/common/http/HttpDownloadProgressEvent) reporting progress on downloading the response body

[`HttpEventType.Response`](/api/common/http/HttpEventType#Response)

The entire response has been received, including the response body

[`HttpEventType.User`](/api/common/http/HttpEventType#User)

A custom event from an Http interceptor.

## [Handling request failure](#handling-request-failure)

There are three ways an HTTP request can fail:

- A network or connection error can prevent the request from reaching the backend server.
- A request didn't respond in time when the timeout option was set.
- The backend can receive the request but fail to process it, and return an error response.

[`HttpClient`](/api/common/http/HttpClient) captures all of the above kinds of errors in an [`HttpErrorResponse`](/api/common/http/HttpErrorResponse) which it returns through the `Observable`'s error channel. Network and timeout errors have a `status` code of `0` and an `error` which is an instance of [`ProgressEvent`](https://developer.mozilla.org/docs/Web/API/ProgressEvent). Backend errors have the failing `status` code returned by the backend, and the error response as the `error`. Inspect the response to identify the error's cause and the appropriate action to handle the error.

The [RxJS library](https://rxjs.dev/) offers several operators which can be useful for error handling.

You can use the `catchError` operator to transform an error response into a value for the UI. This value can tell the UI to display an error page or value, and capture the error's cause if necessary.

Sometimes transient errors such as network interruptions can cause a request to fail unexpectedly, and simply retrying the request will allow it to succeed. RxJS provides several *retry* operators which automatically re-subscribe to a failed `Observable` under certain conditions. For example, the `retry()` operator will automatically attempt to re-subscribe a specified number of times.

### [Timeouts](#timeouts)

To set a timeout for a request, you can set the `timeout` option to a number of milliseconds along other request options. If the backend request does not complete within the specified time, the request will be aborted and an error will be emitted.

**NOTE:** The timeout will only apply to the backend HTTP request itself. It is not a timeout for the entire request handling chain. Therefore, this option is not affected by any delay introduced by interceptors.

```
http  .get('/api/config', {    timeout: 3000,  })  .subscribe({    next: (config) => {      console.log('Config fetched successfully:', config);    },    error: (err) => {      // If the request times out, an error will have been emitted.    },  });
```

## [Advanced fetch options](#advanced-fetch-options)

When using the [`withFetch()`](/api/common/http/withFetch) provider, Angular's [`HttpClient`](/api/common/http/HttpClient) provides access to advanced fetch API options that can improve performance and user experience. These options are only available when using the fetch backend.

### [Fetch options](#fetch-options)

The following options provide fine-grained control over request behavior when using the fetch backend.

#### [Keep-alive connections](#keep-alive-connections)

The `keepalive` option allows a request to outlive the page that initiated it. This is particularly useful for analytics or logging requests that need to complete even if the user navigates away from the page.

```
http  .post('/api/analytics', analyticsData, {    keepalive: true,  })  .subscribe();
```

#### [HTTP caching control](#http-caching-control)

The `cache` option controls how the request interacts with the browser's HTTP cache, which can significantly improve performance for repeated requests.

```
//  Use cached response regardless of freshnesshttp  .get('/api/config', {    cache: 'force-cache',  })  .subscribe((config) => {    // ...  });// Always fetch from network, bypass cachehttp  .get('/api/live-data', {    cache: 'no-cache',  })  .subscribe((data) => {    // ...  });// Use cached response only, fail if not in cachehttp  .get('/api/static-data', {    cache: 'only-if-cached',  })  .subscribe((data) => {    // ...  });
```

#### [Request priority for Core Web Vitals](#request-priority-for-core-web-vitals)

The `priority` option allows you to indicate the relative importance of a request, helping browsers optimize resource loading for better Core Web Vitals scores.

```
// High priority for critical resourceshttp  .get('/api/user-profile', {    priority: 'high',  })  .subscribe((profile) => {    // ...  });// Low priority for non-critical resourceshttp  .get('/api/recommendations', {    priority: 'low',  })  .subscribe((recommendations) => {    // ...  });// Auto priority (default) lets the browser decidehttp  .get('/api/settings', {    priority: 'auto',  })  .subscribe((settings) => {    // ...  });
```

Available `priority` values:

- `'high'`: High priority, loaded early (e.g., critical user data, above-the-fold content)
- `'low'`: Low priority, loaded when resources are available (e.g., analytics, prefetch data)
- `'auto'`: Browser determines priority based on request context (default)

**TIP:** Use `priority: 'high'` for requests that affect Largest Contentful Paint (LCP) and `priority: 'low'` for requests that don't impact initial user experience.

#### [Request mode](#request-mode)

The `mode` option controls how the request handles cross-origin requests and determines the response type.

```
// Same-origin requests onlyhttp  .get('/api/local-data', {    mode: 'same-origin',  })  .subscribe((data) => {    // ...  });// CORS-enabled cross-origin requestshttp  .get('https://api.external.com/data', {    mode: 'cors',  })  .subscribe((data) => {    // ...  });// No-CORS mode for simple cross-origin requestshttp  .get('https://external-api.com/public-data', {    mode: 'no-cors',  })  .subscribe((data) => {    // ...  });
```

Available `mode` values:

- `'same-origin'`: Only allow same-origin requests, fail for cross-origin requests
- `'cors'`: Allow cross-origin requests with CORS (default)
- `'no-cors'`: Allow simple cross-origin requests without CORS, response is opaque

**TIP:** Use `mode: 'same-origin'` for sensitive requests that should never go cross-origin.

#### [Redirect handling](#redirect-handling)

The `redirect` option specifies how to handle redirect responses from the server.

```
// Follow redirects automatically (default behavior)http  .get('/api/resource', {    redirect: 'follow',  })  .subscribe((data) => {    // ...  });// Prevent automatic redirectshttp  .get('/api/resource', {    redirect: 'manual',  })  .subscribe((response) => {    // Handle redirect manually  });// Treat redirects as errorshttp  .get('/api/resource', {    redirect: 'error',  })  .subscribe({    next: (data) => {      // Success response    },    error: (err) => {      // Redirect responses will trigger this error handler    },  });
```

Available `redirect` values:

- `'follow'`: Automatically follow redirects (default)
- `'error'`: Treat redirects as errors
- `'manual'`: Don't follow redirects automatically, return redirect response

**TIP:** Use `redirect: 'manual'` when you need to handle redirects with custom logic.

#### [Credentials handling](#credentials-handling)

The `credentials` option controls whether cookies, authorization headers, and other credentials are sent with cross-origin requests. This is particularly important for authentication scenarios.

```
// Include credentials for cross-origin requestshttp  .get('https://api.example.com/protected-data', {    credentials: 'include',  })  .subscribe((data) => {    // ...  });// Never send credentials (default for cross-origin)http  .get('https://api.example.com/public-data', {    credentials: 'omit',  })  .subscribe((data) => {    // ...  });// Send credentials only for same-origin requestshttp  .get('/api/user-data', {    credentials: 'same-origin',  })  .subscribe((data) => {    // ...  });// withCredentials overrides credentials settinghttp  .get('https://api.example.com/data', {    credentials: 'omit', // This will be ignored    withCredentials: true, // This forces credentials: 'include'  })  .subscribe((data) => {    // Request will include credentials despite credentials: 'omit'  });// Legacy approach (still supported)http  .get('https://api.example.com/data', {    withCredentials: true,  })  .subscribe((data) => {    // Equivalent to credentials: 'include'  });
```

**IMPORTANT:** The `withCredentials` option takes precedence over the `credentials` option. If both are specified, `withCredentials: true` will always result in `credentials: 'include'`, regardless of the explicit `credentials` value.

Available `credentials` values:

- `'omit'`: Never send credentials
- `'same-origin'`: Send credentials only for same-origin requests (default)
- `'include'`: Always send credentials, even for cross-origin requests

**TIP:** Use `credentials: 'include'` when you need to send authentication cookies or headers to a different domain that supports CORS. Avoid mixing `credentials` and `withCredentials` options to prevent confusion.

#### [Referrer](#referrer)

The `referrer` option allows you to control what referrer information is sent with the request. This is important for privacy and security considerations.

```
// Send a specific referrer URLhttp  .get('/api/data', {    referrer: 'https://example.com/page',  })  .subscribe((data) => {    // ...  });// Use the current page as referrer (default behavior)http  .get('/api/analytics', {    referrer: 'about:client',  })  .subscribe((data) => {    // ...  });
```

The `referrer` option accepts:

- A valid URL string: Sets the specific referrer URL to send
- An empty string `''`: Sends no referrer information
- `'about:client'`: Uses the default referrer (current page URL)

**TIP:** Use `referrer: ''` for sensitive requests where you don't want to leak the referring page URL.

#### [Referrer policy](#referrer-policy)

The `referrerPolicy` option controls how much referrer information , the URL of the page making the request is sent along with an HTTP request. This setting affects both privacy and analytics, allowing you to balance data visibility with security considerations.

```
// Send no referrer information regardless of the current pagehttp  .get('/api/data', {    referrerPolicy: 'no-referrer',  })  .subscribe();// Send origin only (e.g. https://example.com)http  .get('/api/analytics', {    referrerPolicy: 'origin',  })  .subscribe();
```

The `referrerPolicy` option accepts:

- `'no-referrer'` Never send the `Referer` header.
- `'no-referrer-when-downgrade'` Sends the referrer for same-origin and secure (HTTPS→HTTPS) requests, but omits it when navigating from a secure to a less secure origin (HTTPS→HTTP).
- `'origin'` Sends only the origin (scheme, host, port) of the referrer, omitting path and query information.
- `'origin-when-cross-origin'` Sends the full URL for same-origin requests, but only the origin for cross-origin requests.
- `'same-origin'` Sends the full URL for same-origin requests and no referrer for cross-origin requests.
- `'strict-origin'` Sends only the origin, and only if the protocol security level is not downgraded (e.g., HTTPS→HTTPS). Omits the referrer on downgrade.
- `'strict-origin-when-cross-origin'` Default browser behavior. Sends the full URL for same-origin requests, the origin for cross-origin requests when not downgraded, and omits the referrer on downgrade.
- `'unsafe-url'`Always sends the full URL (including path and query). This can expose sensitive data and should be used with caution.

**TIP:** Prefer conservative values such as `'no-referrer'`, `'origin'`, or `'strict-origin-when-cross-origin'` for privacy-sensitive requests.

#### [Integrity](#integrity)

The `integrity` option allows you to verify that the response hasn't been tampered with by providing a cryptographic hash of the expected content. This is particularly useful for loading scripts or other resources from CDNs.

```
// Verify response integrity with SHA-256 hashhttp  .get('/api/script.js', {    integrity: 'sha256-ABC123...',    responseType: 'text',  })  .subscribe((script) => {    // Script content is verified against the hash  });
```

**IMPORTANT:** The `integrity` option requires an exact match between the response content and the provided hash. If the content doesn't match, the request will fail with a network error.

**TIP:** Use subresource integrity when loading critical resources from external sources to ensure they haven't been modified. Generate hashes using tools like `openssl`.

## [Http `Observable`s](#http-observables)

Each request method on [`HttpClient`](/api/common/http/HttpClient) constructs and returns an `Observable` of the requested response type. Understanding how these `Observable`s work is important when using [`HttpClient`](/api/common/http/HttpClient).

[`HttpClient`](/api/common/http/HttpClient) produces what RxJS calls "cold" `Observable`s, meaning that no actual request happens until the `Observable` is subscribed. Only then is the request actually dispatched to the server. Subscribing to the same `Observable` multiple times will trigger multiple backend requests. Each subscription is independent.

**TIP:** You can think of [`HttpClient`](/api/common/http/HttpClient) `Observable`s as *blueprints* for actual server requests.

Once subscribed, unsubscribing will abort the in-progress request. This is very useful if the `Observable` is subscribed via the `async` pipe, as it will automatically cancel the request if the user navigates away from the current page. Additionally, if you use the `Observable` with an RxJS combinator like `switchMap`, this cancellation will clean up any stale requests.

Once the response returns, `Observable`s from [`HttpClient`](/api/common/http/HttpClient) usually complete (although interceptors can influence this).

Because of the automatic completion, there is usually no risk of memory leaks if [`HttpClient`](/api/common/http/HttpClient) subscriptions are not cleaned up. However, as with any async operation, we strongly recommend that you clean up subscriptions when the component using them is destroyed, as the subscription callback may otherwise run and encounter errors when it attempts to interact with the destroyed component.

**TIP:** Using the `async` pipe or the [`toSignal`](/api/core/rxjs-interop/toSignal) operation to subscribe to `Observable`s ensures that subscriptions are disposed properly.

## [Best practices](#best-practices)

While [`HttpClient`](/api/common/http/HttpClient) can be injected and used directly from components, generally we recommend you create reusable, injectable services which isolate and encapsulate data access logic. For example, this `UserService` encapsulates the logic to request data for a user by their id:

```
@Injectable({providedIn: 'root'})export class UserService {  private http = inject(HttpClient);  getUser(id: string): Observable<User> {    return this.http.get<User>(`/api/user/${id}`);  }}
```

Within a component, you can combine `@if` with the `async` pipe to render the UI for the data only after it's finished loading:

```
import {AsyncPipe} from '@angular/common';@Component({  imports: [AsyncPipe],  template: `    @if (user$ | async; as user) {      <p>Name: {{ user.name }}</p>      <p>Biography: {{ user.biography }}</p>    }  `,})export class UserProfile {  userId = input.required<string>();  user$!: Observable<User>;  private userService = inject(UserService);  constructor(): void {    effect(() => {      this.user$ = this.userService.getUser(this.userId());    });  }}
```
