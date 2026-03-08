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

[`HttpClient`](/api/common/http/HttpClient) supports a form of middleware known as *interceptors*.

**TL;DR:** Interceptors are middleware that allows common patterns around retrying, caching, logging, and authentication to be abstracted away from individual requests.

[`HttpClient`](/api/common/http/HttpClient) supports two kinds of interceptors: functional and DI-based. Our recommendation is to use functional interceptors because they have more predictable behavior, especially in complex setups. Our examples in this guide use functional interceptors, and we cover [DI-based interceptors](#di-based-interceptors) in their own section at the end.

arrow\_upward\_alt Back to the top

## [Interceptors](#interceptors)

Interceptors are generally functions which you can run for each request, and have broad capabilities to affect the contents and overall flow of requests and responses. You can install multiple interceptors, which form an interceptor chain where each interceptor processes the request or response before forwarding it to the next interceptor in the chain.

You can use interceptors to implement a variety of common patterns, such as:

- Adding authentication headers to outgoing requests to a particular API.
- Retrying failed requests with exponential backoff.
- Caching responses for a period of time, or until invalidated by mutations.
- Customizing the parsing of responses.
- Measuring server response times and log them.
- Driving UI elements such as a loading spinner while network operations are in progress.
- Collecting and batch requests made within a certain timeframe.
- Automatically failing requests after a configurable deadline or timeout.
- Regularly polling the server and refreshing results.

## [Defining an interceptor](#defining-an-interceptor)

The basic form of an interceptor is a function which receives the outgoing [`HttpRequest`](/api/common/http/HttpRequest) and a `next` function representing the next processing step in the interceptor chain.

For example, this `loggingInterceptor` will log the outgoing request URL to `console.log` before forwarding the request:

```
export function loggingInterceptor(  req: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  console.log(req.url);  return next(req);}
```

In order for this interceptor to actually intercept requests, you must configure [`HttpClient`](/api/common/http/HttpClient) to use it.

## [Configuring interceptors](#configuring-interceptors)

You declare the set of interceptors to use when configuring [`HttpClient`](/api/common/http/HttpClient) through dependency injection, by using the [`withInterceptors`](/api/common/http/withInterceptors) feature:

```
bootstrapApplication(App, {  providers: [provideHttpClient(withInterceptors([loggingInterceptor, cachingInterceptor]))],});
```

The interceptors you configure are chained together in the order that you've listed them in the providers. In the above example, the `loggingInterceptor` would process the request and then forward it to the `cachingInterceptor`.

### [Intercepting response events](#intercepting-response-events)

An interceptor may transform the `Observable` stream of [`HttpEvent`](/api/common/http/HttpEvent)s returned by `next` in order to access or manipulate the response. Because this stream includes all response events, inspecting the `.type` of each event may be necessary in order to identify the final response object.

```
export function loggingInterceptor(  req: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  return next(req).pipe(    tap((event) => {      if (event.type === HttpEventType.Response) {        console.log(req.url, 'returned a response with status', event.status);      }    }),  );}
```

**TIP:** Interceptors naturally associate responses with their outgoing requests, because they transform the response stream in a closure that captures the request object.

## [Modifying requests](#modifying-requests)

Most aspects of [`HttpRequest`](/api/common/http/HttpRequest) and [`HttpResponse`](/api/common/http/HttpResponse) instances are *immutable*, and interceptors cannot directly modify them. Instead, interceptors apply mutations by cloning these objects using the `.clone()` operation, and specifying which properties should be mutated in the new instance. This might involve performing immutable updates on the value itself (like [`HttpHeaders`](/api/common/http/HttpHeaders) or [`HttpParams`](/api/common/http/HttpParams)).

For example, to add a header to a request:

```
const reqWithHeader = req.clone({  headers: req.headers.set('X-New-Header', 'new header value'),});
```

This immutability allows most interceptors to be idempotent if the same [`HttpRequest`](/api/common/http/HttpRequest) is submitted to the interceptor chain multiple times. This can happen for a few reasons, including when a request is retried after failure.

**CRITICAL:** The body of a request or response is **not** protected from deep mutations. If an interceptor must mutate the body, take care to handle running multiple times on the same request.

## [Dependency injection in interceptors](#dependency-injection-in-interceptors)

Interceptors are run in the *injection context* of the injector which registered them, and can use Angular's [`inject`](/api/core/inject) API to retrieve dependencies.

For example, suppose an application has a service called `AuthService`, which creates authentication tokens for outgoing requests. An interceptor can inject and use this service:

```
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {  // Inject the current `AuthService` and use it to get an authentication token:  const authToken = inject(AuthService).getAuthToken();  // Clone the request to add the authentication header.  const newReq = req.clone({    headers: req.headers.append('X-Authentication-Token', authToken),  });  return next(newReq);}
```

## [Request and response metadata](#request-and-response-metadata)

Often it's useful to include information in a request that's not sent to the backend, but is specifically meant for interceptors. [`HttpRequest`](/api/common/http/HttpRequest)s have a `.context` object which stores this kind of metadata as an instance of [`HttpContext`](/api/common/http/HttpContext). This object functions as a typed map, with keys of type [`HttpContextToken`](/api/common/http/HttpContextToken).

To illustrate how this system works, let's use metadata to control whether a caching interceptor is enabled for a given request.

### [Defining context tokens](#defining-context-tokens)

To store whether the caching interceptor should cache a particular request in that request's `.context` map, define a new [`HttpContextToken`](/api/common/http/HttpContextToken) to act as a key:

```
export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);
```

The provided function creates the default value for the token for requests that haven't explicitly set a value for it. Using a function ensures that if the token's value is an object or array, each request gets its own instance.

### [Reading the token in an interceptor](#reading-the-token-in-an-interceptor)

An interceptor can then read the token and choose to apply caching logic or not based on its value:

```
export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {  if (req.context.get(CACHING_ENABLED)) {    // apply caching logic    return ...;  } else {    // caching has been disabled for this request    return next(req);  }}
```

### [Setting context tokens when making a request](#setting-context-tokens-when-making-a-request)

When making a request via the [`HttpClient`](/api/common/http/HttpClient) API, you can provide values for [`HttpContextToken`](/api/common/http/HttpContextToken)s:

```
const data$ = http.get('/sensitive/data', {  context: new HttpContext().set(CACHING_ENABLED, false),});
```

Interceptors can read these values from the [`HttpContext`](/api/common/http/HttpContext) of the request.

### [The request context is mutable](#the-request-context-is-mutable)

Unlike other properties of [`HttpRequest`](/api/common/http/HttpRequest)s, the associated [`HttpContext`](/api/common/http/HttpContext) is *mutable*. If an interceptor changes the context of a request that is later retried, the same interceptor will observe the context mutation when it runs again. This is useful for passing state across multiple retries if needed.

## [Synthetic responses](#synthetic-responses)

Most interceptors will simply invoke the `next` handler while transforming either the request or the response, but this is not strictly a requirement. This section discusses several of the ways in which an interceptor may incorporate more advanced behavior.

Interceptors are not required to invoke `next`. They may instead choose to construct responses through some other mechanism, such as from a cache or by sending the request through an alternate mechanism.

Constructing a response is possible using the [`HttpResponse`](/api/common/http/HttpResponse) constructor:

```
const resp = new HttpResponse({  body: 'response body',});
```

## [Working with redirect information](#working-with-redirect-information)

When using [`HttpClient`](/api/common/http/HttpClient) with the [`withFetch`](/api/common/http/withFetch) provider, responses include a `redirected` property that indicates whether the response was the result of a redirect. This property aligns with the native Fetch API specification and can be useful in interceptors for handling redirect scenarios.

An interceptor can access and act upon the redirect information:

```
export function redirectTrackingInterceptor(  req: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  return next(req).pipe(    tap((event) => {      if (event.type === HttpEventType.Response && event.redirected) {        console.log('Request to', req.url, 'was redirected to', event.url);        // Handle redirect logic - maybe update analytics, security checks, etc.      }    }),  );}
```

You can also use the redirect information to implement conditional logic in your interceptors:

```
export function authRedirectInterceptor(  req: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  return next(req).pipe(    tap((event) => {      if (event.type === HttpEventType.Response && event.redirected) {        // Check if we were redirected to a login page        if (event.url?.includes('/login')) {          // Handle authentication redirect          handleAuthRedirect();        }      }    }),  );}
```

## [Working with response types](#working-with-response-types)

When using [`HttpClient`](/api/common/http/HttpClient) with the [`withFetch`](/api/common/http/withFetch) provider, responses include a `type` property that indicates how the browser handled the response based on CORS policies and request mode. This property aligns with the native Fetch API specification and provides valuable insights for debugging CORS issues and understanding response accessibility.

The response `type` property can have the following values:

- `'basic'` - Same-origin response with all headers accessible
- `'cors'` - Cross-origin response with CORS headers properly configured
- `'opaque'` - Cross-origin response without CORS, headers and body may be limited
- `'opaqueredirect'` - Response from a redirected request in no-cors mode
- `'error'` - Network error occurred

An interceptor can use response type information for CORS debugging and error handling:

```
export function responseTypeInterceptor(  req: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  return next(req).pipe(    map((event) => {      if (event.type === HttpEventType.Response) {        // Handle different response types appropriately        switch (event.responseType) {          case 'opaque':            // Limited access to response data            console.warn('Limited response data due to CORS policy');            break;          case 'cors':          case 'basic':            // Full access to response data            break;          case 'error':            // Handle network errors            console.error('Network error in response');            break;        }      }    }),  );}
```

## [DI-based interceptors](#di-based-interceptors)

[`HttpClient`](/api/common/http/HttpClient) also supports interceptors which are defined as injectable classes and configured through the DI system. The capabilities of DI-based interceptors are identical to those of functional interceptors, but the configuration mechanism is different.

A DI-based interceptor is an injectable class which implements the [`HttpInterceptor`](/api/common/http/HttpInterceptor) interface:

```
@Injectable()export class LoggingInterceptor implements HttpInterceptor {  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {    console.log('Request URL: ' + req.url);    return handler.handle(req);  }}
```

DI-based interceptors are configured through a dependency injection multi-provider:

```
bootstrapApplication(App, {  providers: [    provideHttpClient(      // DI-based interceptors must be explicitly enabled.      withInterceptorsFromDi(),    ),    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},  ],});
```

DI-based interceptors run in the order that their providers are registered. In an app with an extensive and hierarchical DI configuration, this order can be very hard to predict.
